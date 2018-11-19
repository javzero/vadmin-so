{{-- Images--}}

<div class="row">
    {{-- <div class="col-md-3">
        @component('vadmin.components.catalogthumbnail')
            @slot('thumbnail')
                @if(isset($article) && $article->thumb != '')
                    <img class="CheckImg Featured-Image-Container" src="{{ asset('webimages/catalogo/'.$article->thumb) }}">
                @else
                    <img class="CheckImg Featured-Image-Container" src="{{ asset('webimages/gen/catalog-gen.jpg') }}">
                @endif
            @endslot
        @endcomponent
    </div> --}}
    @if(isset($inheritData) && count($inheritData->images) > 0)
        {{-- <div class="col-md-12 actual-images horizontal-list">
            <h3>Imágenes</h3>
            <ul>
                @foreach($inheritData->images->sortByDesc('featured') as $image)
                <li id="Img{{ $image->id }}" class="{{ $image->featured ? 'is-featured' : '' }}">	
                    <img class="CheckImg" src="{{ asset('webimages/catalogo/'.$image->name) }}">
                    <div class="overlayItemCenter">
                        <a><i class="Delete-Product-Img icon-ios-trash-outline delete-img" data-imgid="{{ $image->id }}"></i></a>
                        @if(!$image->featured)
                            <a href="{{ url('vadmin/article/'.$inheritData->id.'/images/setFeatured/'.$image->id) }}"><i class="icon-star"></i></a>
                        @endif
                    </div>
                </li>
                @endforeach
            </ul>
        <br>
        </div> --}}
    @else
        @if(isset($article) && count($article->images) > 0 )
            <div class="col-md-12 actual-images horizontal-list">
                <h3>Imágenes Publicadas</h3>
                <ul>
                    @foreach($article->images->sortByDesc('featured') as $image)
                    <li id="Img{{ $image->id }}" class="{{ $image->featured ? 'is-featured' : '' }}">	
                        <img class="CheckImg" src="{{ asset('webimages/catalogo/'.$image->name) }}">
                        <div class="overlayItemCenter">
                            <a><i class="Delete-Product-Img icon-ios-trash-outline delete-img" data-imgid="{{ $image->id }}"></i></a>
                            @if(!$image->featured)
                                <a href="{{ url('vadmin/article/'.$article->id.'/images/setFeatured/'.$image->id) }}"><i class="icon-star"></i></a>
                            @endif
                        </div>
                    </li>
                    @endforeach
                </ul>
            <br>
            </div>
        @endif
    @endif
    <div class="col-md-12">
        @include('vadmin.components.addimgsform')
    </div>

</div>{{--  /Row  --}}

<div class="row">
    {{--  Name  --}}
    <div class="col-xs-12 col-md-3 form-group">
        {!! Form::label('name', 'Nombre') !!}
        {!! Form::text('name', null, ['class' => 'form-control', 'placeholder' => 'Título del artículo', 'id' => 'TitleInput', 
        'required1' => '', 'maxlength' => '120', 'minlength' => '4']) !!}
    </div>
    {{--  Product Code  --}}
    <div class="col-xs-12 col-md-3 form-group">
        {!! Form::label('code', 'Código') !!}
        {!! Form::text('code', null, ['id' => 'CodeInput', 'class' => 'form-control', 'placeholder' => 'Ingrese el código', 'required1' => '']) !!}
    </div>

 {{--  Reseller Price  --}}
 <div class="col-xs-12 col-md-3 form-group">
        {!! Form::label('reseller_price', 'Precio') !!}
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">$</span>
            </div>
            {!! Form::number('reseller_price', null, ['class' => 'form-control', 'min' => '0', 'step' => 'any', 'required1' => '']) !!}
        </div>
    </div>
    {{-- Reseller Discount --}}
    <div class="col-xs-12 col-md-3 form-group">
        {!! Form::label('reseller_discount', 'Oferta') !!}
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">%</span>
            </div>
            {!! Form::number('reseller_discount', null, ['class' => 'form-control',
             'min' => '0', 'max' => '100', 'data-parsley-type' => 'integer', 'required1' => '']) !!}
        </div>
    </div>
</div>


<div class="row">
    {{-- Prices and Offers --}}
    <div class="col-md-6">
        <div class="row">
            {{-- Season --}}
            <div class="col-xs-12 col-sm-12 col-md-6">
                <div class="form-group">
                    {!! Form::label('seasons', 'Temporada') !!}
                    {!! Form::select('seasons[]', $seasons, null, ['class' => ' Select-Tags form-control', 'multiple']) !!}
                </div>
            </div>
            {{-- Category --}}
            <div class="col-xs-12 col-sm-12 col-md-6">
                <div class="form-group">
                    {!! Form::label('category_id', 'Categoría') !!}
                    {!! Form::select('category_id', $categories, null, ['class' => 'form-control Select-Category-', 'placeholder' => 'Seleccione una opcion',
                    'required1' => '']) !!}
                </div>
            </div>            
        </div>
    </div>

    <div class="col-md-6">
        <div class="row">
            {{-- Tags--}}
            <div class="col-xs-12 col-md-6">
                <div class="form-group">
                    {!! Form::label('tags', 'Etiquetas') !!}
                    {!! Form::select('tags[]', $tags, null, ['class' => ' Select-Tags form-control', 'multiple', 'required1' => '']) !!}
                </div>
            </div>
            {{--  Textile  --}}
            <div class="col-xs-12 col-md-6 form-group">
                {!! Form::label('textile', 'Textil') !!}
                {!! Form::text('textile', null, ['class' => 'form-control', 'placeholder' => 'Tipo de tela', 
                'required1 ' => '', 'maxlength' => '50']) !!}
            </div>
        </div>
    </div>
</div>
    
<div class="row">
    <div class="col-md-12 variants">
        <div class="variants-selectors">
            {!! Form::label('description', 'Variantes') !!}
            <div class="colors">
                <span class="sub-title">Colores: </span>
                @foreach($colors as $color)
                <label class="items checkbox-inline">
                    <input class="VariantColor" type="checkbox" name="color" 
                    data-name="{{ $color->name }}" value="{{ $color->id }}"> {{ $color->name}}
                </label>
                @endforeach
            </div>
            <div class="colors">
                <span class="sub-title">Talles: </span>
                @foreach($atribute1 as $size)
                <label class="items checkbox-inline">
                    <input class="VariantSize" type="checkbox" name="size" 
                    data-name="{{ $size->name }}" value="{{ $size->id }}"> {{ $size->name}}
                </label>
                @endforeach
            </div>
            <button id="MakeVariantsBtn" onclick="makeVariants()" type="button" class="btnSm btnMain">Crear variantes</button>
        </div>
        <div class="inner-table">
            <table class="table table-striped custom-list">
                <thead>
                    <tr>
                        <th scope="col">Combinación: Talle - Color</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Oferta %</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="ExistingVariants">
                    
                </tbody>
                <tbody id="ArticleVariants">
                    {{-- <tr>
                        <td style="white-space:nowrap">XS / Rojo</td>
                        <td class="width-100"><input class="form-control" type="text" name="variant[]" value="10"></td>
                        <td class="width-100"><input class="form-control" type="text" name="variant[]" value="100"></td>
                        <td class="width-100"><input class="form-control" type="text" name="variant[]" value="10"></td>
                        <td><i class="fa fa-trash"></i></td>
                    </tr> --}}
                </tbody>
            </table>
        </div>
    </div>
</div>
<div class="row">
       <div class="col-md-12">
        {{-- Description --}}
        {!! Form::label('description', 'Descripción') !!}
        {!! Form::textarea('description', null, ['class' => 'form-control Textarea-Editor']) !!}
    </div>
</div>
<div class="row">
    {{-- Slug --}}
    <div class="col-md-6">
        <div class="form-group">
        {!! Form::label('slug', 'Url Amigable - Dirección web') !!}
        {!! Form::text('slug', null, ['class' => 'SlugInput form-control Display-Input-Modificable display-input-disabled',
        'placeholder' => 'Dirección visible (en explorador)', 'id' => 'SlugInput', 'required1' => '']) !!}
        </div>
    </div>
    <div class="col-md-6">
         {{-- Status--}}
         <div class="form-group" style="max-width: 250px">
            {!! Form::label('status', 'Publicación') !!}
            {!! Form::select('status', ['1' => 'Activa','0' => 'Pausada'], null, ['class' => 'form-control']) !!}
        </div>
    </div>
</div>