<aside class="checkout-sidebar">
    {{-- {{dd($activeCart)}} --}}
    <div class="hidden-lg-up"></div>
    <!-- Order Summary Widget-->
    <section class="widget-order-summary">
        <h3 class="widget-title">Resumen de Pedido</h3>
        <div class="top-info-cs"> Cantidad de items: <b>{{ $activeCart['totalItems'] }}</b></div>
        <input type="hidden" name="goalQuantity" value="{{ $activeCart['goalQuantity'] }}">
        <input type="hidden" name="cart_id" value="{{ $activeCart['rawdata']->id }}">
        <table class="table checkout-table">
        <tr>
            <td class="title">Subtotal:</td>
            <td class="text-medium text-right dont-break">$ {{ number_format($activeCart['cartSubTotal'],2) }}</td>
        </tr>
        @if($activeCart['orderDiscount'] > 0)
        <tr>
            <td>Descuento (%{{$activeCart['orderDiscount']}}):</td>
            <td class="text-medium text-right dont-break">$ -{{ number_format($activeCart['orderDiscountValue'],2) }}</td>
        </tr>
        @endif
        <tr>
            <td>Costo de envío:</td>
            <td class="text-medium text-right dont-break">$ {{ $activeCart['shippingPrice'] }}</td>
        </tr>
        <tr>
            <td>Recargo por forma de pago: <br> (% {{ $activeCart['paymentPercent'] }}) </td>
            <td class="text-medium text-right dont-break">
                $ {{ calcPercent($activeCart['cartSubTotal'], $activeCart['paymentPercent']) }}
            </td> 
        </tr>
        <tr>
            <td></td>
            <td class="text-lg text-medium txtR dont-break"><span class="total">Total $ <b>{{ number_format($activeCart['cartTotal'], 2) }}</b></span></td>
        </tr>
        </table>
        <div class="text-right">
            <button class="btn btn-main margin-right-none" type="submit"><i class="fas fa-check"></i> Finalizar Compra</button>
        </div>
    </section>
</aside>