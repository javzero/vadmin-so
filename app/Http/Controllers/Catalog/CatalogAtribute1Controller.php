<?php

namespace App\Http\Controllers\Catalog;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\CatalogAtribute1;

class CatalogAtribute1Controller extends Controller
{
    // routeGroup: 
    // viewName:   catalog-atribute1
    // crudName:   catalogatribute1
    // crudNameSingular: catalogatribute1

    /*
    |--------------------------------------------------------------------------
    | VIEW
    |--------------------------------------------------------------------------
    */

    public function index(Request $request)
    {   
        $name = $request->get('name');

        if(isset($name)){
            $atribute1 = CatalogAtribute1::searchname($name)->orderBy('id', 'ASC')->paginate(15); 
        } else {
            $atribute1 = CatalogAtribute1::orderBy('id','ASC')->paginate(15);
        }
        return view('vadmin.catalog.atribute1.index')->with('atribute1', $atribute1);    
    }

    public function show($id)
    {
        $catalogatribute1 = CatalogAtribute1::findOrFail($id);
        return view('vadmin.catalog.atribute1.show', compact('catalogatribute1'));
    }

    /*
    |--------------------------------------------------------------------------
    | CREATE
    |--------------------------------------------------------------------------
    */

    public function create()
    {
        return view('vadmin.catalog.atribute1.create');
    }

    public function store(Request $request)
    {
        $this->validate($request,[
            'name'          => 'required|max:10|unique:catalog_atribute1',
        ],[
            'name.required' => 'Debe ingresar un talle',
            'name.max'      => 'Se permiten 10 caracteres máximo',
            'name.unique'   => 'El talle ya existe',
        ]);

        $item = new CatalogAtribute1($request->all());
        $item->save();

        return redirect()->route('cat_atribute1.index')->with('message','Atributo Creado');

    }

    /*
    |--------------------------------------------------------------------------
    | UPDATE
    |--------------------------------------------------------------------------
    */

    public function edit($id)
    {
        $item = CatalogAtribute1::findOrFail($id);
        return view('vadmin.catalog.atribute1.edit')->with('item', $item);
    }

    public function update($id, Request $request)
    { 
        $item = CatalogAtribute1::find($id);

        $this->validate($request,[
            'name'          => 'required|max:10|unique:catalog_atribute1,name,'.$item->id,
        ],[
            'name.required' => 'Debe ingresar un nombre',
            'name.unique'   => 'El item ya existe'
        ]);
        
        $item->fill($request->all());
        $item->save();

        return redirect()->route('cat_atribute1.index')->with('message','Atributo actualizado');
    }

    public function updateField(Request $request)
    {
        $article = CatalogAtribute1::find($request->id);
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
                    $record = CatalogAtribute1::find($id);
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
                $record = CatalogAtribute1::find($id);
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

}
