<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCatalogAtribute1sTable extends Migration
{
    public function up()
    {
        Schema::create('catalog_atribute1s', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('catalog_atribute1s');
    }
}
