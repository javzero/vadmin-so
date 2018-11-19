<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>@yield('title')</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content=""  />
    	<meta name="keywords" content=""/>
		<meta name="author" content="Vimana Studio"/>
    	<meta name="owner" content="{{ APP_BUSSINESS_NAME }}" />
    	<meta name="copyright" content="Copyright (c) 2018 - Vimana Studio" />
		<meta name="theme-color" content="#0d1d41"><!-- Chrome, Firefox OS and Opera -->
		<meta name="msapplication-navbutton-color" content="#0d1d41"><!-- Windows Phone -->
		<meta name="apple-mobile-web-app-status-bar-style" content="#0d1d41"><!-- iOS Safari -->
		<link rel="shortcut icon" href="{{ asset('web/img/so-logo_new.jpg') }}"><!-- Favicon -->
		{{-- <meta property="og:url"         content="http://vimana.studio" />
		<meta property="og:type"        content="article" />
		<meta property="og:title"       content="Diseño Web y Diseño Gráfico" />
		<meta property="og:description" content="Somos un equipo de trabajo dedicado a desarrollar contenido visual e interactivo" />
		<meta property="og:image"       content="{{ asset('webimages/logos/main-logo.png') }}" />
		<meta name="twitter:title"      content="Studio Vimana" />
		<meta name="twitter:image"      content="{{ asset('webimages/logos/main-logo.png') }}" />
		<meta name="twitter:url"        content="http://vimana.studio" /> --}}
		{{-- <meta name="twitter:card"       content="" /> --}}
		{{--<link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">--}}
		<link rel="stylesheet" type="text/css" href="{{ asset('web/css/bootstrap.css') }}">
		{{-- Original Styles --}}
		<link rel="stylesheet" type="text/css" href="{{ asset('web/css/styles.css') }}">
		<link rel="stylesheet" type="text/css" href="{{ asset('web/css/main.css') }}">
		{{-- New Styles --}}
		<link rel="stylesheet" type="text/css" href="{{ asset('css/web.css') }}">

		<!-- Beginning of compulsory code below -->

		<link rel="stylesheet" type="text/css" href="{{ asset('web/css/dropdown/dropdown.css') }}" media="screen">
		<link rel="stylesheet" type="text/css" href="{{ asset('web/css/dropdown/themes/nvidia.com/default.advanced.css') }}" media="screen">
		<link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Quicksand'>
		@yield('styles')
	</head>
	<body>
		<div id="header">
			@include('web.partials.nav')
		</div>
		@yield('content')
		@yield('scripts')
		@yield('custom_js')
	</body>
</html>