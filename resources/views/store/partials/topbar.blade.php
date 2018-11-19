<!-- Topbar-->
<div class="topbar">
	<div class="topbar-column">
		Seguinos: 
		<a class="social-button sb-facebook shape-none sb-dark" href="https://www.facebook.com/br.ndumentaria/" target="_blank">
			<i class="socicon-facebook"></i>
		</a>
		<a class="social-button sb-instagram shape-none sb-dark" href="https://www.instagram.com/bruna.indumentaria1/" target="_blank">
			<i class="socicon-instagram"></i>
		</a>
	</div>
	<div class="topbar-column">
		<a class="">&nbsp;<b>11-6761-8867 </b></a>
		<a class="e-mail-field" href="mailto:info@bruna.com.ar">
			<i class="icon-mail"></i>&nbsp; info@bruna.com.ar
		</a>
		@if(Auth::guard('customer')->check())
		<button onclick="checkoutSidebar('show')" class="icon-btn-small"|><i class="fas fa-shopping-cart"></i></button>
		@endif
	</div>
</div>