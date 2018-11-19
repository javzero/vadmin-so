<?php

namespace App\Http\Controllers\Store;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Auth;
use App\CatalogCategory;
use App\CatalogArticle;
use App\CatalogImage;
use App\CatalogAtribute1;
use App\CatalogTag;
use App\CatalogFav;
use App\Customer;
use App\Shipping;
use App\Payment;
use App\GeoProv;
use App\Cart;
use App\CartItem;
use App\CatalogCoupon;
use Carbon\Carbon;
use App\Settings;
use Cookie;
use PDF;
use App\Traits\CartTrait;
use Illuminate\Support\Facades\View;
use Mail;
use App\Mail\SendMail;


class StoreController extends Controller
{

    use CartTrait;
    
    protected $settings;

    public function __construct()
    {
        $this->settings = Settings::find(1);
        // $this->middleware('auth:customer');
        //$customer = auth()->guard('customer')->user();     
    }
    
    public function getSetPaginationCookie($request)
    {
       
        if($request)
        {
            Cookie::queue('store-pagination', $request, 2000);
            $pagination = $request;
        }
        else
        {   
            if(Cookie::get('store-pagination'))
            {
                $pagination = Cookie::get('store-pagination');
            }
            else{
                $pagination = 24;
            }
        } 
        return $pagination;
    }

    public function index(Request $request)
    {   
        $pagination = $this->getSetPaginationCookie($request->get('results'));
        $order = 'DESC';
        $orderBy = 'id';
        $order2 = 'ASC';
        $orderBy2 = 'discount';
        

        if($request->precio)
        {
            $orderBy = 'price';
            if($request->precio == 'menor')
            {
                $order = 'ASC';
                $order2 = 'ASC';
            }

            if(auth()->guard('customer')->check())
            {
                if(auth()->guard('customer')->user()->group == '3')
                {
                    $orderBy = 'reseller_price';
                    $orderBy2 = 'reseller_discount';
                }
            }
        }

        if(isset($request->buscar))
        {   
            $tags = CatalogTag::with(['articles' => function($query) { $query->where('status', '=', '1'); }])->get();
            $categories = CatalogCategory::with(['articles' => function($query) { $query->where('status','=', '1'); }])->get();
            $articles = CatalogArticle::search($request->buscar, $categories, $tags)->active()->paginate($pagination);
        } 
        else if(isset($request->filtrar))
        {
            if($request->filtrar == 'populares')
            {  
                $articles = CatalogArticle::has('hasFavs')->paginate($pagination);
            } 
            else if($request->filtrar == 'descuentos')
            {
                $articles = CatalogArticle::orderBy('discount', 'DESC')->active()->paginate($pagination);
            }
        }
        else if(isset($request->categoria))
        {
            $articles = CatalogArticle::orderBy($orderBy, $order)->active()->where('category_id', $request->categoria)->paginate($pagination);
        }
        else if(isset($request->etiqueta))
        {
            // $articles = CatalogArticle::orderBy($orderBy, $order)->active()->where('category_id', $request->etiqueta)->paginate($pagination);
            $tag = $request->etiqueta;
            $articles = CatalogArticle::whereHas('tags', function ($query) use($tag){
                $query->where('catalog_tag_id', $tag);
            })->paginate($pagination);

        }
        else if(isset($request->temporada))
        {
            $season = $request->temporada;
            $articles = CatalogArticle::whereHas('seasons', function ($query) use($season){
                $query->where('catalog_season_id', $season);
            })->paginate($pagination);
        }
        else 
        {
            $articles = CatalogArticle::orderBy($orderBy, $order)->orderBy($orderBy2, $order2)->active()->paginate($pagination);
        }
        
        return view('store.index')
            ->with('articles', $articles);
    }

    public function searchSize($name)
	{
        // Set and Get pagination cookie
        $pagination = $this->getSetPaginationCookie(null);

        $size = CatalogAtribute1::searchName($name)->first();
		$articles = $size->articles()->paginate($pagination);
        $articles->each(function($articles){
            $articles->category;
            $articles->images;
        });  
        
        $search = true;

        return view('store.index')
            ->with('search', $search)
            ->with('articles', $articles);
    }
    
    public function searchTag($name)
	{
        // Set and Get pagination cookie
        $pagination = $this->getSetPaginationCookie(null);

        $tag = CatalogTag::searchName($name)->first();
		$articles = $tag->articles()->paginate($pagination);
        $articles->each(function($articles){
            $articles->category;
            $articles->images;
        });  

        $search = true;

        return view('store.index')
            ->with('search', $search)
            ->with('articles', $articles);
    }

    public function searchSeason($name)
	{
        // Set and Get pagination cookie
        $pagination = $this->getSetPaginationCookie(null);

        $season = CatalogSeason::searchName($name)->first();
		$articles = $season->articles()->paginate($pagination);
        $articles->each(function($articles){
            $articles->category;
            $articles->images;
        });  

        $search = true;
        return view('store.index')
            ->with('search', $search)
            ->with('articles', $articles);
    }
    
    public function show(Request $request)
    {
        $article = CatalogArticle::findOrFail($request->id);
        $user = auth()->guard('customer')->user();

        if($user)
        {
            $isFav   = CatalogFav::where('customer_id', '=', $user->id)->where('article_id', '=', $article->id)->get();
            if(!$isFav->isEmpty()){
                $isFav = true;
            } else {
                $isFav = false;
            }
        } 
        else 
        {
            $isFav = false;
        }

        return view('store.show')
            ->with('article', $article)
            ->with('isFav', $isFav)
            ->with('user', $user);
    }

    /*
    |--------------------------------------------------------------------------
    | SHOP and CHECKOUT
    |--------------------------------------------------------------------------
    */

    public function checkoutItems(Request $request)
    {
        $activeCart = Cart::where('customer_id', auth()->guard('customer')->user()->id)->where('status', 'active')->get();

        $activeCart = $this->activeCart();
        if($activeCart == null || count($activeCart) == 0)
        {
            return redirect()->route('store')->with('message', 'No tiene productos en el carro de compras');
        }
        return view('store.checkout');            
    }

    public function checkoutSetItems(Request $request)
    {
        $updateQuantities = $this->updateItemsQuantities($request->all());
        $activeCart = $this->activeCart();
        
        if($activeCart == null)
            return response()->json(['response' => 'error', 'message' => 'La página solicitada no existe o ha expirado']);
            // return redirect()->route('store')->with('message', 'La página solicitada no existe o ha expirado');

        if(count($activeCart['rawdata']->items) == 0)
        {
            return response()->json(['response' => 'error', 'message' => 'La página solicitada no existe o ha expirado']);
            // return redirect()->route('store')->with('message', 'La página solicitada no existe o ha expirado');
        }

        // Check minimun quantity - reseller
        if(auth()->guard('customer')->user()->group == '3' && $request->action == 'continue' ) {
            if($activeCart['goalQuantity'] > 0)
                return response()->json(['response' => 'error', 'message' => 'Debe incluír al menos '. $this->settings->reseller_min.' prendas']);
            // return redirect()->back()->with('error', 'low-quantity');
        }
 
        return response()->json(['response' => 'success', 'message' => "Go to checkout, bye !"]);
    }
    
    public function checkoutLast()
    {
        if($this->activeCart() == null){
            return redirect()->route('store')->with('message', 'La página ha expirado');
        }

        $geoprovs = GeoProv::pluck('name','id');
        $shippings = Shipping::orderBy('name', 'ASC')->get();
        $payment_methods = Payment::orderBy('name', 'ASC')->get();
        
        return view('store.checkout-last')
            ->with('geoprovs', $geoprovs)
            ->with('shippings', $shippings)
            ->with('payment_methods', $payment_methods);
    }

    public function processCheckout(Request $request)
    {
        // Check if customer has required data completed
        $checkCustomer = $this->checkAndUpdateCustomerData(auth()->guard('customer')->user()->id, $request);
        
        if($checkCustomer['response'] == 'error')
        {
            return redirect()->route('store.checkout-last')->with('message', $checkCustomer['message']);
        }
        
        $cart = Cart::findOrFail($request->cart_id);  
        // Check if customer choose payment method
        if($cart->payment_method_id == null)
            return back()->with('error', 'missing-payment');
        // Check if customer choose payment method and shipping
        if($cart->shipping_id == null)
            return back()->with('error', 'missing-shipping');
        
        // Set fixed prices on checkout confirmation
        foreach($cart->items as $item){
            $order = CartItem::find($item->id);
            if(auth()->guard('customer')->user()->group == '3'){
                $order->final_price = calcValuePercentNeg($item->article->reseller_price, $item->article->reseller_discount);
            } else {
                $order->final_price = calcValuePercentNeg($item->article->price, $item->article->discount);
            }   
            $order->save();    
        }

        $cart->status = 'Process';
        
        try {
            $cart->save();
            try
            {
                // Notify Bussiness
                Mail::to(APP_EMAIL_1)->send(new SendMail('Compra Recibida', 'Checkout', $cart));
                // Notify Customer
                $customerEmail = auth()->guard('customer')->user()->email;
                //$customerEmail = 'javzero1@gmail.com';
                Mail::to($customerEmail)->send(new SendMail('Bruna Indumentaria - Compra recibida !', 'CustomerCheckout', ''));
            } catch (\Exception $e) {
                //
            }

        } catch (\Exception $e) {
            dd($e->getMessage());
            // return back()->with('error', 'Ha ocurrido un error '. $e);
        }    
    
        // return back()->with('message','Su compra se ha registrado. Muchas gracias !.');
        return view('store.checkout-success')
            ->with('cart', $cart);
    }
    
    public function updateItemsQuantities($data)
    {
        $message = '';
        foreach($data['data'] as $item)
        {
            $cartItem = CartItem::findOrFail($item['id']);
            $maxAvailable = $cartItem->article->stock + $cartItem->quantity;
            // dd("Stock de art: ".$cartItem->article->stock." | Stock reservado: ". $cartItem->quantity."
            //  | Stock ingresado: ". $item['quantity']. " |  Máximo disponible: '". $maxAvailable);
            
            if($item['quantity'] == $cartItem->quantity)
            {
                $newStock = $cartItem->article->stock;
            }
            elseif($item['quantity'] <= 0)
            {
                $message = "Ingresó un artículo con cantidad negativa";
                $newStock = $cartItem->article->stock;
            }
            else
            {
                if($item['quantity'] > $maxAvailable)
                {
                    $newStock = '0';
                    $cartItem->quantity = $maxAvailable;
                    // dd("Supera || Ingresado: " . $item['quantity'] . "| Maximo Disponible ". $maxAvailable);
                }
                else
                {
                    $newStock = $cartItem->article->stock - intVal($item['quantity']) + intVal($cartItem->quantity);
                    $cartItem->quantity = intval($item['quantity']);
                    // dd("No supera || Requerido: " . $item['quantity'] . "| Nuevo Stock es: ". $newStock);
                }
            }
            // dd("Cantidad a comprar:" . $cartItem->quantity. "| Nuevo Stock es: ". $newStock);
            try
            {
                $cartItem->save();
                // Return or discount stock
                $this->replaceCartItemStock($cartItem->article->id, $newStock);
            }
            catch (\Exception $e)
            {
                $message .= " | Error: ".$e->getMessage();
            }
                
        }
        $response = ['response' => 'success', 'message' => $message];
        return $response;
    }

    // Check if customer has required data completed
    public function checkAndUpdateCustomerData($customerId, $data)
    {
        // dd($customerId);

        $customer = Customer::findOrFail($customerId);
        // $customer = Customer::where('id', $customerId)->first();
        // dd($data->all());
        $this->validate($data,[
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'username' => 'required|string|max:20|unique:customers,username,'.$customer->id,
            'email' => 'required|string|email|max:255|unique:customers,email,'.$customer->id,
            'phone' => 'required|max:255',
            'address' => 'required|max:255',
            'cp' => 'required|max:255',
            'geoprov_id' => 'required|max:255',
            'geoloc_id' => 'required|max:255',
        ],[
            'username.unique' => 'El nombre de usuario ya existe',
            'email.unique' => 'El email ya existe',
            'phone.required' => 'Debe ingresar su número de teléfono',
            'addres.required' => 'Debe ingresar su dirección',
            'geoprov_id.required' => 'Debe ingresar su provincia',
            'geoloc_id.required' => 'Debe ingresar su localidad',
            'cp.required' => 'Debe ingresar su código postal'
        ]);
        $data = $data->all();
            
        if($customer->group == '3')
        {
            if($data['cuit'] == '' || $data['cuit'] == null)
            {    
                return (['response' => 'error', 'message' => 'Debe ingresar su número de CUIT']);
            }
        } 
        $customer->fill($data);
        $customer->save();
        $response = (['response' => 'success', 'message' => 'Datos actualizados']);
           
    }

    // Validate Coupon
    public function validateAndSetCoupon(Request $request)
    {
        $coupon = CatalogCoupon::where('code', $request->code)->first();
        // Not existing coupon
        if($coupon == null)
        {
            return response()->json(['response' => null, 'message' => "El cupón no existe"]);
        }
        // Expired Coupon
        $coupon_expire = $coupon->expire_date;
        $coupon_expire = Carbon::parse($coupon_expire, 'America/Araguaina');
        $actual_date = Carbon::now()->format('Y-m-d');
        $actual_date = Carbon::parse($actual_date, 'America/Araguaina');
        if($coupon_expire->lt($actual_date))
        {
            return response()->json(['response' => null, 'message' => "El cupón ingresado ha expirado :("]);
        } 
        
        // Group User Not Included in promo
        if($coupon->reseller == '0')
        {
            if(auth()->guard('customer')->user()->group != '2')
            {
                return response()->json(['response' => null, 'message' => "El cupón ingresado es válido solo para clientes minorístas"]);
            }
        }
        
        $cart = Cart::find($request->cartid);
        // Cart Not exist
        if($cart == null)
        {
            return response()->json(['response' => null, 'message' => "Error. El carro de compras no existe"]);
        }
        
        try {
            $cart->order_discount = $coupon->percent;
            $cart->save();
            return response()->json(['response' => true, 'message' => $coupon->percent]);
        } catch (\Exception $e) {
            return response()->json(['response' => false, 'message' => $e->getMessage()]);
        }

    }

    /*
    |--------------------------------------------------------------------------
    | MERCADO LIBRE
    |--------------------------------------------------------------------------
    */

    public function mpConnect(Request $request)
    {
        $cartid = $request->cartId;
        $cart = Cart::where('id', $cartid)->first();
        $cartTotal = $request->cartTotal;
        // Al pedo el quilombo mandar solo el detalle general de la compra
        $preferenceData = [
            'items' => [
                [
                    'id' => 'ORD#'.$cart->id,
                    'category_id' => '-',
                    'title' => 'Compra Vadmin',
                    'description' => '-',
                    'picture_url' => '-',
                    'quantity' => 1,
                    'currency_id' => 'ARS',
                    'unit_price' => floatval($cartTotal)
                    ]
                ],
        ];
        //dd($preferenceData);
        try{
            //return dd($preference);
            //return dd($preference['response']['init_point']);
            $preference = MP::create_preference($preferenceData);
            $initPoint = $preference['response']['init_point'];
            return response()->json(['response' => true, 'result' => $preference]);
        } catch (\Exception $e){
            return response()->json(['response' => false, 'result' => $e->getMessage()]);
        }
    }
    
    
    /*
    |--------------------------------------------------------------------------
    | INVOICE
    |--------------------------------------------------------------------------
    */

    // DOWNLOAD INVOICE PDF
    public function downloadInvoice($id, $action)
    {
        
        // Return Options
        // return $pdf->dowload($filename.'.pdf');
        // return $pdf->stream($filename.'.pdf');
        $order = Cart::find($id);
        if($order != null && $order->customer->id == auth()->guard('customer')->user()->id){
            $cart = $this->calcCartData($order);
            $pdf = PDF::loadView('store.checkout-invoice', compact('order', 'cart'))->setPaper('a4', 'portrait');
            $filename = 'Comprobante-Pedido-N-'.$order->id;
            if($action == 'stream')
            {
                return $pdf->stream($filename.'.pdf');
            } else {
                return $pdf->download($filename.'.pdf');
            }
            die();

        } else {
            return redirect()->route('store')->with('message','Estás intentando una acción ilegal...');
        }
    }
    
    /*
    |--------------------------------------------------------------------------
    | CUSTOMER
    |--------------------------------------------------------------------------
    */

    public function customerAccount(Request $request)
    {
        $geoprovs = GeoProv::pluck('name','id');

        return view('store.customer-account')
            ->with('geoprovs',$geoprovs);
    }

    public function customerOrders(Request $request)
    {
        $customer = auth()->guard('customer')->user();
        $carts = Cart::where('customer_id', auth()->guard('customer')->user()->id)->where('status', '!=', 'Active')->get();
        return view('store.customer-orders')
            ->with('customer', $customer)
            ->with('carts', $carts);
    }

    public function customerCartItem(Request $request)
    {
        $cart = $this->calcCartData(Cart::where('id', $request->id)->first());
        if($cart == null)
            return back();
        return view('store.customer-order')
            ->with('cart', $cart);
    }


    public function updatePassword(Request $request)
    {
        return view('store.customer-updatepassword');
    }


    /*
    |--------------------------------------------------------------------------
    | WISHLIST
    |--------------------------------------------------------------------------
    */

    public function customerWishlist(Request $request)
    {
        if(auth()->guard('customer')->check()){
            $favs = $this->getCustomerFavs();
            $customer = auth()->guard('customer')->user();
        } else {
            $favs = null;
            $customer = null;
        }
        
        return view('store.customer-wishlist')
            ->with('customer', $customer);
    }
    
    public function getCustomerFavs()
    {
        if(auth()->guard('customer')->check()){
            $favs = CatalogFav::where('customer_id', '=', auth()->guard('customer')->user()->id)->get();
            
            $articleFavs = CatalogFav::where('customer_id', '=', auth()->guard('customer')->user()->id)->pluck('article_id');
            $articleFavs = $articleFavs->toArray();
        
            // Delete fav if product was removed and fav wasn't
            foreach($favs as $item){
                if(is_null($item->article)){
                    $item->delete();
                }
            }

        } else {
            $favs = null;
            $articleFavs = null;
        }
        
        return array("articleFavs" => $articleFavs, "favs" => $favs);
    }

    public function addArticleToFavs(Request $request)
    {        
        $customer_id = auth()->guard('customer')->user()->id;
        try{
            $favs = CatalogFav::where('customer_id', '=', $customer_id)->where('article_id', '=', $request->article_id)->pluck('id');
            if(!$favs->isEmpty()) {
                $item = CatalogFav::find($favs[0]);
                $item->delete();
                $favsCount = CatalogFav::where('customer_id', '=', $customer_id)->count();
                return response()->json(['response' => true, 'result' => 'removed', 'message' => 'Hecho', 'favsCount' => $favsCount ]); 
            } else { 
                $item = new CatalogFav($request->all());
                $item->customer_id = $customer_id;
                $item->save();
                $favsCount = CatalogFav::where('customer_id', '=', $customer_id)->count();
                return response()->json(['response' => true, 'result' => 'added', 'message' => 'Hecho', 'favsCount' => $favsCount ]); 
            }
            
        } catch (\Exception $e){
            
            return response()->json(['response' => false, 'message' => $e, 'favsCount' => 'Error']); 
        }
    }

    public function removeArticleFromFavs(Request $request)
    {
        try{
            $item = CatalogFav::find($request->fav_id);
            $item->delete();
            return response()->json(['response' => true, 'result' => 'removed', 'doaction' => 'reload']);
        } catch (\Exception $e){
            return response()->json(['response' => false, 'message' => $e]); 
        }
    }

    public function removeAllArticlesFromFavs(Request $request)
    {
        try{
            $items = CatalogFav::where('customer_id', '=', $request->customer_id)->delete();
            return response()->json(['response' => true, 'result' => 'removed', 'message' => 'Hecho']);
        } catch (\Exception $e){
            return response()->json(['response' => false, 'message' => $e]); 
        }
    }

}
