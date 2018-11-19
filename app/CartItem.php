<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Cart;
use App\CatalogArticle;

class CartItem extends Model
{
    protected $table = "cart_items";

    protected $fillable = ['cart_id', 'article_id', 'article_name', 'quantity', 'size', 'textile', 'color', 'final_price', 'order_discount'];

    public function cart()
    {
    	return $this->belongsTo('App\Cart');
    }

    public function customer()
    {
        return $this->belongsTo('App\Customer', 'id');
    }

    public function article()
    {
        return $this->belongsTo('App\CatalogArticle', 'article_id');
    }
}
