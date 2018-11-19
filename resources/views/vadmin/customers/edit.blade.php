@extends('vadmin.partials.main')
@section('title', 'Vadmin | Editar Usuario')

@section('header')
	@component('vadmin.components.header')
		@slot('breadcrums')
			<li class="breadcrumb-item"><a href="{{ url('vadmin')}}">Inicio</a></li>
            <li class="breadcrumb-item"><a href="{{ route('users.index')}}">Usuarios</a></li>
            <li class="breadcrumb-item active">Edición de Usuario</li>
		@endslot
		@slot('actions')
			<h2>Editando usuario: " {{ $user->name }} "</h2>
		@endslot
	@endcomponent
@endsection

@section('content')

	<div class="row">
		@component('vadmin.components.container')
			@slot('title', 'Editando a '. $user->name)
			@slot('content')
	
			{!! Form::model($user, [
				'method' => 'PATCH',
				'url' => ['/vadmin/users', $user->id],
				'files' => true
			]) !!}
			@include('vadmin.users.form')
			<div class="form-actions right">
				<a href="{{ route('users.index')}}">
					<button type="button" class="btn btnRed">
						<i class="icon-cross2"></i> Cancelar
					</button>
				</a>
				<button type="submit" class="btn btnGreen">
					<i class="icon-check2"></i> Guardar
				</button>
			</div>
			{!! Form::close() !!}
			@endslot
		@endcomponent
	</div>

@endsection

@section('scripts')
	<script type="text/javascript" src="{{ asset('plugins/validation/parsley.min.js') }}" ></script>
	<script type="text/javascript" src="{{ asset('plugins/validation/es/parsley-es.min.js') }}" ></script>
@endsection

@section('custom_js')
	<script>
		$('.UsersLi').addClass('open');
	</script>
@endsection