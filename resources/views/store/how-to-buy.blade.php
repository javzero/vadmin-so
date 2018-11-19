@extends('store.partials.main')

@section('header-image')
	<div class="index-header">		
	</div>
@endsection

@section('content')
    @if(Auth::guard('customer')->check())
    <div class="CheckoutCart checkout-cart checkout-cart-floating">
        @include('store.partials.checkout-cart')
    </div>
    @endif
	<div class="container info-container">
		<div class="row">
            <div class="deco-title">
                <span>
                    <div class="deco deco-left"><img src="{{ asset('images/gral/icons/icon-deco-left.png') }}" alt="Deco"></div>
                    Cómo comprar
                    <div class="deco deco-right"><img src="{{ asset('images/gral/icons/icon-deco-right.png') }}" alt="Deco"></div>
                </span>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-sm-12 col-md-6 col-lg-4 item">
                <img src="{{ asset('images/gral/icons/compra1.png') }} " alt="Compras">
                <p>Elegí el producto que deseás comprar y selecciona la cantidad de unidades.</p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 item">
                <img src="{{ asset('images/gral/icons/compra2.png') }} " alt="Compras">
                <p>Hacé clic en el botón de "Agregar al carrito".  Podés seguir agregando otros productos haciendo click en “Volver a la tienda”. O podés finalizar tu compra haciendo click en el icono del carrito.</p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 item">
                <img src="{{ asset('images/gral/icons/compra3.png') }} " alt="Compras">
                <p>Ahora estás en la pantalla de ckeckout. Aquí podrás revisar tu compra. Luego tenés que completar los datos de envío y de pago.</p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 item">
                <img src="{{ asset('images/gral/icons/compra4.png') }} " alt="Compras">
                <p>Luego elegís el medio de pago que prefieras: puede ser efectivo, transferencia bancaria a alguna de las cuentas que manejamos (Galicia, Nación o Francés) o con tarjetas de crédito y débito a través de Mercadopago (operar por Mercadopago tiene un recargo del 5% que es la comisión que nos cobran por el servicio). </p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 item">
                <img src="{{ asset('images/gral/icons/compra5.png') }} " alt="Compras">
                <p>Podés elegir envío a terminal por encomienda o envío a una sucursal de OCA. Si residís en Capital, también ofrecemos el envío por mensajería a tu domicilio. Además, podés retirar por nuestro showroom ubicado en el barrio de Balvanera.</p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 item">
                <img src="{{ asset('images/gral/icons/compra6.png') }} " alt="Compras">
                <p> Finalmente, tenés que completar los datos personales que sean requeridos y hacer clic en "Finalizar Compra" (si sos cliente mayorista, el mínimo de artículos requeridos para que tu compra sea aprobada es de 12 unidades surtidas).</p>
            </div>
        </div>
        <div class="row-centered lone-item">
            <div class="col-md-8 item">
                <div class="text-center">
                    <img src="{{ asset('images/gral/icons/compra7.png') }} " alt="Compras"><br>
                    <p>
                        ¡Listo! En la pantalla siguiente podrás descargar un comprobante de tu compra. Nos estaremos contactando para coordinar tu pedido. Tené en cuenta que se despacha una vez por semana, los días jueves. Una vez realizado el despacho te enviaremos la información para que
                    </p>
                </div>
            </div>
        </div>
	</div>
@endsection


