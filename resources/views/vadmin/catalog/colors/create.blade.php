@extends('vadmin.partials.main')
@section('title', 'VADmin | Nuevo Color')

@section('styles')
@endsection

@section('header')
	@component('vadmin.components.header')
		@slot('breadcrums')
			<li class="breadcrumb-item"><a href="{{ url('vadmin')}}">Inicio</a></li>
			<li class="breadcrumb-item"><a href="{{ route('cat_colors.index')}}">Listado de colores</a></li>
			<li class="breadcrumb-item active">Nuevo color</li>
		@endslot
		@slot('actions')
			<div class="list-actions">
				<h1>Nuevo color</h1>
			</div>
		@endslot
	@endcomponent
@endsection

@section('content')
	<div class="row inner-wrapper">
		<div class="col-sm-12 col-md-6">
			{!! Form::open(['route' => 'cat_colors.store', 'method' => 'POST', 'files' => true, 'class' => 'row big-form', 'data-parsley-validate' => '']) !!}	
				@include('vadmin.catalog.colors.form')
				<div class="form-actions right">
					<a href="{{ route('cat_colors.index')}}">
						<button type="button" class="btn btnRed mx-1">
							<i class="icon-cross2"></i>
						</button>
					</a>
					<button type="submit" class="btn btnGreen">
						<i class="icon-check2"></i> Guardar
					</button>
				</div>
			{!! Form::close() !!}
		</div>
		<div class="col-sm-12 col-md-6">
			@component('vadmin.components.infoContainer')
				@slot('text')
				Los <b>colores</b> son atributos del producto y luego harán combinación con los talles para forma una tabla de stock<br><br>
				@endslot
			@endcomponent
		</div>
	</div>  
@endsection

@section('scripts')
	<script type="text/javascript" src="{{ asset('plugins/validation/parsley.min.js') }}" ></script>
	<script type="text/javascript" src="{{ asset('plugins/validation/es/parsley-es.min.js') }}" ></script>
@endsection

@section('custom_js')
	<script>
		$('.CatalogCategoriesLi').addClass('open');
		$('.CatalogCategoriesNew').addClass('active');
	</script>
@endsection


