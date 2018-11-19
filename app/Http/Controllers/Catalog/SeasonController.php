<?php

namespace App\Http\Controllers\Catalog;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\CatalogSeason;

class SeasonController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | VIEW
    |--------------------------------------------------------------------------
    */
    
    public function index(Request $request)
    {   
        $name = $request->get('name');

        if(isset($name)){
            $items = CatalogSeason::searchname($name)->orderBy('id', 'ASC')->paginate(15); 
        } else {
            $items = CatalogSeason::orderBy('id','ASC')->paginate(15);
        }

        return view('vadmin.catalog.seasons.index')->with('items', $items);
    }

    public function show($id)
    {
        //
    }

    /*
    |--------------------------------------------------------------------------
    | CREATE
    |--------------------------------------------------------------------------
    */

    public function create()
    {
        return view('vadmin.catalog.seasons.create');
    }

    public function store(Request $request)
    {
        $this->validate($request,[
            'name'          => 'required|min:4|max:250|unique:catalog_seasons',
        ],[
            'name.required' => 'Debe ingresar un nombre a la temporada',
            'name.unique'   => 'La temporada ya existe',
        ]);

        $category = new CatalogSeason($request->all());
        $category->save();
        
        return redirect()->route('cat_seasons.index')->with('message','Temporada creada');
    }

    /*
    |--------------------------------------------------------------------------
    | UPDATE
    |--------------------------------------------------------------------------
    */

    public function edit($id)
    {
        $item = CatalogSeason::find($id);
        return view('vadmin.catalog.seasons.edit')->with('item', $item);
    }

    public function update(Request $request, $id)
    {
        $item = CatalogSeason::find($id);

        $this->validate($request,[
            'name'          => 'required|min:4|max:250|unique:catalog_seasons,name,'.$item->id,
        ],[
            'name.required' => 'Debe ingresar un nombre a la temporada',
            'name.unique'   => 'La temporada ya existe'
        ]);
        
        $item->fill($request->all());
        $item->save();

        return redirect()->route('cat_seasons.index')->with('message','Temporada editada');
    } 

    public function updateField(Request $request)
    {
        $article = CatalogSeason::find($request->id);
        $article->{$request->field} = $request->value;
        
        try {
            $article->save();
            return response()->json([
                "response" => "success",
                "action"   => $request->action
            ]);
        } catch (\Exception $e) {
            return response()->json([
                "response" => "error",
                "message"  => $e->getMessage()
            ]);
        }
    }


    /*
    |--------------------------------------------------------------------------
    | DESTROY
    |--------------------------------------------------------------------------
    */

    public function destroy(Request $request)
    {   
        
        $ids = json_decode('['.str_replace("'",'"',$request->id).']', true);
        
        if(is_array($ids)) {
            try {
                foreach ($ids as $id) {
                    $record = CatalogSeason::find($id);
                    $record->delete();
                }
                return response()->json([
                    'success'   => true,
                ]); 
            }  catch (\Exception $e) {
                return response()->json([
                    'success'   => false,
                    'error'    => 'Error: '.$e
                ]);    
            }
        } else {
            try {
                $record = CatalogSeason::find($id);
                $record->delete();
                    return response()->json([
                        'success'   => true,
                    ]);  
                    
                } catch (\Exception $e) {
                    return response()->json([
                        'success'   => false,
                        'error'    => 'Error: '.$e
                    ]);    
                }
        }
    }
} // End
