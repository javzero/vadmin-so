<!-- Toolbar-->
<div class="toolbar">
    <div class="inner">
        <a class="site-logo-mobile" href="{{ url('/') }}"><img style="width: 110px" src="{{ asset('images/logos/app-logo.png') }}" alt="Logo"></a>
        <div class="text-links">
            @if(Auth::guard('customer')->check() && Auth::guard('customer')->user()->group == '3' )
                <a href="{{ url('politica-de-exclusividad') }}">Política de Exclusividad</a>
                <a href="{{ url('condiciones-de-compra') }}">Condiciones de Compra</a>
            @endif
            <a href="{{ url('como-comprar') }}"><i class="far fa-question-circle"></i> Como comprar</a>
            
        </div>
        <div class="tools">
            @if(Auth::guard('customer')->check())
                {{-- @include('store.partials.cart-resumen-desktop') --}}
                {{-- Cart Sidebar Trigger --}}
                <div class="favs">
                    <a href="{{ route('store.customer-wishlist') }}" data-toggle="tooltip" title="Mis Favoritos">
                        <i class="FavMainIcon {{ count($favs['favs']) > 0 ? "fa" : "far" }} fa-heart"></i>
                    </a>
                </div>
                <div class="CartResumen cart" onclick="checkoutSidebar();">
                    <i class="icon-bag"></i><span class="TotalCartItems count">@if($activeCart['totalItems'] == 0) 0 @else {{ $activeCart['totalItems'] }} @endif</span>
                    <span class="CartSubTotal subtotal">@if($activeCart['totalItems'] != 0) $ {{ $activeCart['cartSubTotal'] }} @endif</span>
                </div>
                {{-- User Avatar --}}
                <div class="account"><a href="#" onclick="event.preventDefault();"></a>
                    <img src="{{ asset('webimages/customers/'.Auth::guard('customer')->user()->avatar ) }}" class="CheckImg" alt="">
                    {{-- @if(Auth::guard('customer')->user()->avatar)
                    @else
                        <i class="icon-head"></i>
                    @endif --}}
                    <ul class="toolbar-dropdown">
                        <li class="sub-menu-title"><span>Hola,</span> {{ Auth::guard('customer')->user()->name }}</li>
                        <li><a href="{{ route('store.customer-account') }}">Cuenta</a></li>
                        <li><a href="{{ route('store.customer-orders') }}">Mis Pedidos</a></li>
                        <li><a href="{{ route('store.customer-wishlist') }}">Favoritos</a></li>
                        <li class="sub-menu-separator"></li>
                        <li>
                            <a href="{{ route('customer.logout') }}" class="dropdown-item" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                <i class="icon-unlock"></i> Desconectar
                                <form id="logout-form" action="{{ route('customer.logout') }}" method="POST" style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </a>
                        </li> 
                        {{ csrf_field() }}
                    </ul>
                </div>
            @else
                <div class="access-buttons">
                    <a href="{{ route('customer.login') }}"><button class="btn btn-primary btn-sm">Ingresar</button></a>
                    <a href="{{ url('tienda/registro') }}"><button class="btn btn-primary btn-sm">Registrarse</button></a>
                    {{-- <a href="{{ route('customer.register') }}"><button class="btn btn-primary btn-sm">Comprá Por Menor</button></a>
                    <a href="{{ route('customer.register-reseller', ['mostrar' => 'mayorista']) }}"><button class="btn btn-primary btn-sm">Comprá Por  Mayor</button></a>--}}
                </div>
                {{-- <div class="access-icons">
                    <a href="{{ route('customer.login') }}"><button class="icon-button"><i class="fas fa-sign-in-alt"></i></button></a>
                    <a href="{{ route('customer.register') }}"><button class="icon-button"><i class="fas fa-user-plus"></i></button></a>
                </div> --}}
            @endif
        </div>
    </div>
</div>