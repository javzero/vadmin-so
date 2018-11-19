<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CatalogColor extends Model
{
    protected $table = "catalog_colors";

    protected $fillable = ['name'];

    public function articles()
    {
        return $this->hasMany('App\CatalogColor');
    }

    public function scopeSearchname($query, $name)
    {
        return $query->where('name','LIKE', "%$name%");
    }
}
