@extends('layouts.web.main')

@section('title')
	{{ APP_BUSSINESS_NAME }}
@endsection

@section('styles')
@endsection

@section('content')
	<div id="container">
		<div id="spacer" class="spacergral"></div>
		<div id="cuerpo">
			<img src="{{ asset('web/img/home.jpg')}}" width="975" height="643" alt="Santaosad&iacute;a indumentaria | primavera, verano 2015-2016" />
			<!-- <iframe width="963" height="642" src="https://www.youtube.com/embed/0d4gqubN0ww?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe> -->
		</div>
    </div>
@endsection