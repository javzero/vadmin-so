@extends('vadmin.partials.main')
@section('title', 'Vadmin | Pedidos')
{{-- STYLE INCLUDES --}}
@section('styles')
@endsection

{{-- HEADER --}}
@section('header')
	@component('vadmin.components.header-list')
		@slot('breadcrums')
		    <li class="breadcrumb-item"><a href="{{ url('vadmin')}}">Inicio</a></li>
            <li class="breadcrumb-item active">Listado de pedidos</li>
		@endslot
		@slot('actions')
			{{-- Actions --}}
			<div class="list-actions">
				<a href="{{ route('orders.create') }}" class="btn btnBlue">Cargar Pedido</a>
				<button id="SearchFiltersBtn" class="btn btnBlue"><i class="icon-ios-search-strong"></i></button>
				{{-- Delete --}}
				{{--  THIS VALUE MUST BE THE NAME OF THE SECTION CONTROLLER  --}}
				<input id="ModelName" type="hidden" value="carts">
				<button class="DeleteBtn btn btnRed Hidden"><i class="icon-bin2"></i> Eliminar</button>
				<input id="RowsToDeletion" type="hidden" name="rowstodeletion[]" value="">
				{{-- If Search --}}
				@if(isset($_GET['id']) || isset($_GET['status']) || isset($_GET['customer'] ))
					<a href="{{ route('orders.index', ['status' => 'Process']) }}"><button type="button" class="btn btnGrey">Nuevos</button></a>
					<a href="{{ route('orders.index', ['status' => 'All']) }}"><button type="button" class="btn btnGrey">Todos</button></a>
				@endif
			</div>
		@endslot
		@slot('searcher')
			@include('vadmin.orders.searcher')
		@endslot
	@endcomponent
@endsection

{{-- CONTENT --}}
@section('content')
	<div class="list-wrapper">
		{{-- Search --}}
		{{-- Test --}}
		<div id="TestBox" class="col-xs-12 test-box Hidden">
		</div>
		<div class="row">
			{{-- Active Orders Message --}}
			@if(app('request')->input('show') == 'Active')
			<h1>Pedidos en proceso</h1>
			<p>Estos son los pedidos que se están realizando los usuarios en este momento. <br>
			Aún no han sido confirmados.</p>
			@endif
			{{-- List --}}
			@component('vadmin.components.list')
				@slot('actions', '')
				@slot('title', 'Pedidos')
					@if($items->count() == '0')
						@slot('tableTitles')
						<th>No se han encontrado pedidos</th>
						@slot('tableContent', '')
					@else
					@slot('tableTitles')
						<th class="w-50"></th>
						<th>N°</th>
						<th>Cliente</th>
						<th>Estado</th>
						<th>Items</th>
						<th>Fecha</th>
						<th></th>
					@endslot

					@slot('tableContent')
						@foreach($items as $item)
							<tr>
								<td class="w-50">
									<label class="custom-control custom-checkbox list-checkbox">
										<input type="checkbox" class="List-Checkbox custom-control-input row-checkbox" data-id="{{ $item->id }}">
										<span class="custom-control-indicator"></span>
										<span class="custom-control-description"></span>
									</label>
								</td>
								<td class="w-50 show-link"><a href="{{ url('vadmin/orders/'.$item->id) }}">#{{ $item->id }}</a></td>
								<td class="show-link max-text">
									<a href="{{ url('vadmin/customers/'.$item->customer_id) }}">
										{{ $item->customer->name }} {{ $item->customer->surname }} ({{ $item->customer->username }})
									</a>
								</td>
								<td class="w-200">
									<div class="input-group"> 
										<span class="input-group-btn">
											<span class="btn btnSquare grey-back">
												@switch($item->status)
												@case('Active')
														<i class="icon-download"></i>
														@break
														@case('Process')
														<i class="icon-cog"></i>
														@break
													@case('Approved')
													<i class="icon-forward2"></i>
														@break
													@case('Canceled')
														<i class="icon-cancel-circle"></i>
														@break
														@case('Finished')
														<i class="icon-checkmark2"></i>
														@break
													@default
														<i class="icon-close"></i>
												@endswitch
											</span>
										</span>
										{!! Form::select('group', 
										[ 'Active' => 'Activo', 'Process' => 'Esperando Acción', 'Approved' => 'Aprobado', 'Canceled' => 'Cancelado', 'Finished' => 'Finalizado'], 
										$item->status, ['class' => 'form-control custom-select minWidth150', 'onChange' => 'updateCartStatus(this, this.dataset.id)', 'data-id' => $item->id]) !!}
									</div>
								</td>
								@php
									$count = '0';
									foreach($item->items as $sum)
									$count += $sum->quantity;
									@endphp
								<td>{{ $count }}</td>
								<td class="w-200">{{ transDateT($item->created_at) }}</td>
								{{-- EXPORTS --}}
								<td class="w-50">
									@if($item->status != 'Active')
									<a href="{{ url('vadmin/exportOrderCsv', [$item->id]) }}" class="icon-container green" target="_blank" data-toggle="tooltip" title="Exportar .CSV">
										<i class="fas fa-file-excel"></i>
									</a>
									<a href="{{ url('vadmin/exportOrderXls', [$item->id]) }}" class="icon-container blue" target="_blank" data-toggle="tooltip" title="Exportar .XLS">
										<i class="fas fa-file-excel"></i>
									</a>
									<a href="{{ url('vadmin/descargar-comprobante', [$item->id, 'download']) }}" class="icon-container red" target="_blank" data-toggle="tooltip" title="Exportar .PDF">
										<i class="fas fa-file-pdf"></i>
									</a>
									@endif
									<a href="{{ url('vadmin/orders/'.$item->id) }}" class="icon-container black" data-toggle="tooltip" title="Detalle del pedido">
										<i class="fas fa-eye"></i>
									</a>
								</td>
							</tr>						
						@endforeach
					@endif
				@endslot
			@endcomponent
			
			{{--  Pagination  --}}
			{{-- {!! $items->render() !!} --}}
		</div>
		<div id="Error"></div>	
	</div>
@endsection

{{-- SCRIPT INCLUDES --}}
@section('scripts')
	@include('vadmin.components.bladejs')
@endsection

