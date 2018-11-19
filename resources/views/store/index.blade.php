@extends('store.partials.main')

@section('header-image')
	<div class="index-header">		
	</div>
@endsection

@section('content')

	<div id="main" class="main-container container-fluid padding-bottom-3x mb-1">
		<div class="row search-filters">
			@include('store.partials.filterbar')
		</div>
		<div class="row">
			{{-- col-xs-12 col-lg-9 col-sm-8 col-md-8 --}}
			<div id="MainContent" class="col-xs-12 col-sm-12">
				@if(!isset($_GET['checkout-on']))
					@if(isset($_GET['page']) && !isset($search) && count($_GET) == 1)
					@else
						@if(isset($search) && $search == true || count($_GET) > 0 && !isset($_GET['results']))
							<div class="results-info">
								@if($articles->count() == '1')
									1 artículo encontrado <br>
								@elseif($articles->count() == '0')
						
								@else
									Mostrando resultados de la búsqueda.
								@endif
							</div>
						@endif
					@endif
				@endif
				<!-- Products Grid -->
				<div class="row articles-container">
					@if($articles->count() == '0')
					<div class="no-articles">
						<h3>No se han encontrado artículos</h3>
					</div>
					@endif
					@foreach($articles as $article)
						<div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 article">
							<div class="inner">
								{{-- =========== Discount Badge =========== --}}
								{{-- ====================================== --}}
								
								{{-- Reseller Discount --}}
								@if(Auth::guard('customer')->check() && Auth::guard('customer')->user()->group == '3')
									@if($article->reseller_discount > 0)
										<div class="overlay-ribbon top-right-ribbon">
											<div class="triangle"></div>
											<div class="text">	%{{ $article->reseller_discount }} <br> off !!</div>
										</div> 
									@endif
								@else
									{{-- Normal Customer Discount --}}
									@if($article->discount > 0)
										<div class="overlay-ribbon top-right-ribbon">
											<div class="triangle"></div>
											<div class="text">	%{{ $article->discount }} <br> off !!</div>
										</div> 
									@endif
								@endif
								
								{{-- =============== Image ================ --}}
								{{-- ====================================== --}}
								<div class="image">
									@if($article->stock < $article->stockmin)
										<div class="overlay-ribbon bottom-left-ribbon">
											<div class="triangle"></div>
											<div class="text">Bajo <br>Stock</div>
										</div> 
									@endif
									<img src="{{ asset($article->featuredImageName()) }}" alt="Producto del Catálogo">
									@if(Auth::guard('customer')->check())
									{{--  Check if product is in favs  --}}
									<a class="AddToFavs add-to-favs fa-icon fav-icon-nofav fav-btn
										@if(in_array($article->id, $favs['articleFavs'])) fav-icon-isfav @endif"
										data-id="{{ $article->id }}" data-toggle="tooltip" title="Agregar a Favoritos">
									</a>
									@endif
									<a href="{{ url('tienda/articulo/'.$article->id) }}">
										<div class="overlay text-center">
											Ver producto
										</div>
									</a>
								</div>
								{{-- ============== Content =============== --}}
								{{-- ====================================== --}}
								<div class="content">
									{{-- ============ Title-Info ============== --}}
									<div class="title-info">
										<a href="{{ url('tienda/articulo/'.$article->id) }}"><h3 class="product-title max-text"><b>{{ $article->name }}</b></h3></a>
										{{-- <h3 class="product-title max-text"> {{ $article->color}} |
										@foreach($article->atribute1 as $atribute) 	{{ $atribute->name }} @endforeach
										</h3> --}}
									</div>
									{{-- =============== Footer =============== --}}
									<div class="footer">
										<div class="col-price pad0">
											@if(Auth::guard('customer')->check() && Auth::guard('customer')->user()->group == '3')
												@if($article->reseller_discount > 0)
													<del>$ {{ $article->reseller_price + 0 }}</del> 
													<span class="price">
														 $ {{ calcValuePercentNeg($article->reseller_price, $article->reseller_discount + 0) }}
													</span>
												@else
													<span class="price">$ {{ $article->reseller_price + 0 }}</span>
												@endif
											@else
												@if($article->discount > 0)
													<del>$ {{ $article->price + 0 }}</del>
													<span class="price">
														$ {{ calcValuePercentNeg($article->price, $article->discount + 0) }}
													</span>
												@else
													<span class="price">$ {{ $article->price + 0 }}</span>
												@endif
											@endif
										</div>
										<div class="col-add pad0">
											{{-- @if(Auth::guard('customer')->check()) --}}
											{{--  Check if product is in favs  --}}
											{{-- <a class="AddToFavs fa-icon fav-icon-nofav fav-btn
												@if(in_array($article->id, $favs['articleFavs'])) fav-icon-isfav @endif"
												data-id="{{ $article->id }}" data-toggle="tooltip" title="Agregar a Favoritos">
											</a>
											@endif --}}
											@if(Auth::guard('customer')->check())
												{!! Form::open(['class' => 'AddToCart price']) !!}	
													{{ csrf_field() }}
													<input type="number" min="1" max="{{ $article->stock }}" name="quantity" class="quantity-input" value="1"
													data-toggle="tooltip" data-placement="top" title="Stock máximo {{ $article->stock }}">
													<input type="submit" class="input-button" value="Agregar" data-toggle="tooltip" data-placement="top" title="Stock máximo {{ $article->stock }}">
													<input type="hidden" value="{{ $article->id }}" name="articleId">
												{!! Form::close() !!}
											@else
												<a href="{{ url('tienda/articulo/'.$article->id) }}" class="btn btn-outline-primary btn-sm">Ver detalles</a>
											@endif
										</div>
									</div>
								</div>
							</div>
						</div>
					@endforeach
				</div>
				@if($articles->count() != '0')
				<div class="pagination-results">
					<span class="title"><b>Resultados por página:</b></span>
					<a href="{{ route('store', ['results' => '24']) }}">24</a> | 
					<a href="{{ route('store', ['results' => '96']) }}">96</a> |
					<a href="{{ route('store', ['results' => '142']) }}">142</a>
				</div>
				@endif
				{!! $articles->appends(request()->query())->render()!!}
			</div>
			<!-- SideBar -->
			<div class="CheckoutCart col-sm-4 col-md-4 col-lg-3 checkout-cart">
				@include('store.partials.checkout-cart')
			</div>
		</div>
	</div>
	<div id="Error"></div>
@endsection

@section('scripts')
	@include('store.components.bladejs')
@endsection


