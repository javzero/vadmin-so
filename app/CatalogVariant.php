<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CatalogVariant extends Model
{
    protected $table = "catalog_variants";

    protected $fillable = ['article_id', 'combination', 'color', 'size', 'price', 'discount', 'stock'];

    public function article()
    {
    	return $this->belongsTo('App\Article');
    }

}
