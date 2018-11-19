<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes', function(Blueprint $table) {
            $table->increments('id');
            $table->string('razonsocial');
            $table->string('cuit');
            $table->string('dirfiscal');
            $table->integer('codpostal');
            $table->integer('limitcred');
            $table->integer('direntrega_id');
            $table->string('telefono');
            $table->string('celular');
            $table->string('email');
            
            $table->integer('iva_id')->unsigned();
            $table->integer('provincia_id')->unsigned()->nullable();;
            $table->integer('localidad_id')->unsigned()->nullable();;
            $table->integer('condicventas_id')->unsigned()->nullable();;
            $table->integer('listas_id')->unsigned()->nullable();;
            $table->integer('user_id')->unsigned()->nullable();;
            $table->integer('zona_id')->unsigned()->nullable();
            $table->integer('flete_id')->unsigned()->nullable();

            $table->foreign('iva_id')->references('id')->on('ivas');
            $table->foreign('provincia_id')->references('id')->on('provincias');
            $table->foreign('localidad_id')->references('id')->on('localidades');
            $table->foreign('condicventas_id')->references('id')->on('condicventas');
            $table->foreign('listas_id')->references('id')->on('listas');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('zona_id')->references('id')->on('zonas');
            $table->foreign('flete_id')->references('id')->on('fletes');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('clientes');
    }
}
