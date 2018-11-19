@extends('store.partials.main')

@section('content')
@if(Auth::guard('customer')->check())
<div class="CheckoutCart checkout-cart checkout-cart-floating">
    @include('store.partials.checkout-cart')
</div>
@endif
<div class="container padding-bottom-3x mb-1 marg-top-25">
	
	<div class="row product-show">
		<div class="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-6 col-xs-pull-12 image">
			{{-- Title Mobile --}}
			<div class="title-mobile">
				<span class="text-medium">Categoría:&nbsp;</span>
				<a class="navi-link" href="#">{{ $article->category->name }}</a>
				{{--  Article Name  --}}
				<h2 class="text-normal">{{ $article->name }}</h2>
			</div>
			<div class="row product-gallery">
				<div class="col-xs-12 col-sm-3 col-md-3 pad0">
					<ul class="product-thumbnails">
						@foreach($article->images as $image)
							<li>
								<a href="#{{ $image->id }}">
									<img src="{{ asset('webimages/catalogo/'. $image->name) }}" class="CheckCatalogImg" alt="Producto Bruna">
								</a>
							</li>
							@endforeach
						</ul>
					</div>
					<div class="col-xs-12 col-sm-9 col-md-9 images-container pad0">
						<div class="gallery-wrapper">
							@foreach($article->images as $index => $image)
							<div class="gallery-item {{ $index == 0 ? 'active' : '' }}">
							<a href="{{ asset('webimages/catalogo/'. $image->name) }}" data-hash="{{ $image->id }}" data-size="500x750"><i class="icon-zoom-in"></i></a>
						</div>
						@endforeach
					</div>
					<div class="product-carousel owl-carousel">
						@if(!$article->images->isEmpty())
						@foreach($article->images as $image)
						<div data-hash="{{ $image->id }}"><img class="CheckCatalogImg" src="{{ asset('webimages/catalogo/'. $image->name) }}" alt="Product"></div>
						@endforeach
						@else
						<img src="{{ asset($article->featuredImageName()) }}" class="CheckCatalogImg" alt="Producto del Catálogo">
						@endif
					</div>
				</div>
			</div>
		</div>

		<div class="padding-top-2x hidden-md-up"></div>
		<div class="col-xs-12 col-sm-12 col-md-6 col-lg-7 col-xl-6 products-details">
			{{-- Favs --}}
			<div class="fav-container">
				@if(Auth::guard('customer')->check())
					<a class="AddToFavs fa-icon fav-icon-nofav @if($isFav) fav-icon-isfav @endif"
					data-id="{{ $article->id }}" data-toggle="tooltip" title="Agregar a Favoritos">
					</a>
					@else
					<a href="{{ url('tienda/login') }}" class="fa-icon fav-icon-nofav"></a>
				@endif
			</div>
			{{-- Title Desktop --}}
			<div class="title-desktop">
				<span class="text-medium">Categoría:&nbsp;</span>
				<a class="navi-link" href="#">{{ $article->category->name }}</a>
				{{--  Article Name  --}}
				<h2 class="text-normal">{{ $article->name }}</h2>
			</div>
			
			@if(Auth::guard('customer')->check() && Auth::guard('customer')->user()->group == '3')
			{{-- Reseller Article Price and Discount --}}	
				@if($article->reseller_discount > 0)
					DESCUENTO % {{ $article->reseller_discount }}!!
					<span class="h2 d-block">
						<del class="text-muted text-normal">$ {{ $article->reseller_price }}</del>
						&nbsp; ${{ calcValuePercentNeg($article->reseller_price, $article->reseller_discount) }}
					</span>
				@else
					<span class="h2 d-block">$ {{ $article->reseller_price }}</span>
				@endif
			@else
			{{-- Article Price and Discount --}}
				@if($article->discount > 0)
					DESCUENTO % {{ $article->discount }}!!
					<span class="h2 d-block">
						<del class="text-muted text-normal">$ {{ $article->price }}</del>
						&nbsp; ${{ calcValuePercentNeg($article->price, $article->discount) }}
					</span>
				@else
					<span class="h2 d-block">$ {{ $article->price }}</span>
				@endif
			@endif
			<div class="mb-3"><span class="text-medium">Código:</span> #{{ $article->code }}</div>
			{{-- Id: {{ $article->id }} <br> --}}
			{{-- Article Description --}}
			<p>{{ strip_tags($article->description) }}</p>
			<div class="row">
				<div class="col-sm-12 descriptions">
					<div class="item"><div class="title">Talle:</div> <span class="prop">@foreach($article->atribute1 as $atribute) {{ $atribute->name }} @endforeach</span></div>
					<div class="item"><div class="title">Color:</div> <span class="prop">{{ $article->color }}</span></div>
					<div class="item"><div class="title">Tela:</div> <span class="prop">{{ $article->textile }}</span></div>
				</div>
			</div>
			<div class="row margin-top-1x">
				{{-- Form --}}
				<div class="col-sm-12 price-and-stock">
					@if($article->stock > 0)
						@if(Auth::guard('customer')->check())
						<div class="AvailableStock stock">
							Stock disponible: {{ $article->stock }}
						</div>
						{{-- {!! Form::open(['class' => 'AddToCart price']) !!}	
							{{ csrf_field() }}
							<input type="number" min="0" max="{{ $article->stock }}" name="quantity" class="quantity-input" value="1">
							<input type="submit" class="input-button" value="Agregar">
							<input type="hidden" value="{{ $article->id }}" name="articleId">
						{!! Form::close() !!} --}}
						{!! Form::open(['class' => 'AddToCart form-group price']) !!}
							{{ csrf_field() }}	
							<div class="input-with-btn">
								<input class="form-control input-field short-input" name="quantity" type="number" min="1" max="{{ $article->stock }}" value="1" placeholder="1" required>
								<button class="btn input-btn">Agregar al carro</button>
							</div>
							<input type="hidden" value="{{ $article->id }}" name="articleId">
						{!! Form::close() !!}
						@else
						<a href="{{ url('tienda/login') }}" class="btn input-btn">Comprar</a>
						@endif
					@else
						No hay stock disponible
					@endif
				</div>
			</div>
			<hr class="mb-3">
			<a class="back-btn" href="javascript:history.go(-1)"><i class="icon-arrow-left"></i>&nbsp;Volver a la tienda</a>
		</div>
	</div>
</div>
	
<!-- Photoswipe container // This Shows Big Image Preview -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="pswp__bg"></div>
	<div class="pswp__scroll-wrap">
		<div class="pswp__container">
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
		</div>
		<div class="pswp__ui pswp__ui--hidden">
			<div class="pswp__top-bar">
				<div class="pswp__counter"></div>
				<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
				<button class="pswp__button pswp__button--share" title="Share"></button>
				<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
				<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
				<div class="pswp__preloader">
					<div class="pswp__preloader__icn">
						<div class="pswp__preloader__cut">
							<div class="pswp__preloader__donut"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
				<div class="pswp__share-tooltip"></div>
			</div>
			<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
			<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
			<div class="pswp__caption">
				<div class="pswp__caption__center"></div>
			</div>
		</div>
	</div>
</div>
<div id="Error"></div>
@endsection

@section('scripts')
	@include('store.components.bladejs')
@endsection