<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CatalogAtribute1 extends Model
{
    protected $table = 'catalog_atribute1';

    protected $fillable = ['name'];
    
    public function articles(){
		return $this->belongsToMany('App\CatalogArticle');
    }
    
    public function scopeSearchName($query, $name)
    {
        return $query->where('name','=', $name);
    }

}
