<script>
	import NavLink from './NavLink.svelte';
	import icon from '../lib/dashboard.svg';
	import { onMount } from 'svelte';

	import { page } from '$app/stores';
	$page.url.pathname;

	// onMount(() => (url = window.location.pathname));

	function toggleMenu() {
		var menu = document.getElementById('menu');
		if (menu.style.display === 'block') {
			menu.style.display = 'none';
		} else {
			menu.style.display = 'block';
		}
	}
</script>

<nav class="navbar navbar navbar-expand-lg navbar-dark bg-dark">
	<div class="container-fluid">
		<a class="navbar-brand">
			<p class="title">Approval Target</p>
		</a>
		<div class="collapse navbar-collapse " id="main_nav">
			<ul class="navbar-nav">
				<li class="nav-item dropdown has-megamenu">
					<a
						class="nav-link"
						style="color: #fbfdff;"
						on:click={toggleMenu}
						href="#!"
						data-bs-toggle="dropdown"
					>
						<img class="iconnav p-1" src="/apptarget.svg" alt="" /> Approval Target
					</a>
					<div class="dropdown-menu megamenu" id="menu" role="menu">
						<div class="container">
							<div class="row">
								{#if $page.url.pathname.includes('/users/')}
									<div class="col-md-6">
										<li class="p-2" class:active={$page.url.pathname.includes('/users/lawfull')}>
											<a class="text-white" id="txt-link" href="/users/lawfull"
												><img class="icon p-1" src="/lawfull.svg" alt="" /> Lawful Interception Request</a
											>
										</li>

										<li
											class="p-2"
											class:active={$page.url.pathname.includes('/users/geolocation')}
										>
											<a class="text-white" id="txt-link" href="/users/geolocation"
												><img class="icon p-1" src="/geo.svg" alt="" /> Geolocation Request</a
											>
										</li>
									</div>
									<div class="col-md-6">
										<li
											class="p-2"
											class:active={$page.url.pathname.includes('/users/telecomunication')}
										>
											<a class="text-white" id="txt-link" href="/users/telecomunication"
												><img class="icon p-1" src="/tele.svg" alt="" /> Telecomunication Request</a
											>
										</li>
									</div>
								{:else}
									<div class="col-md-6">
										<li class="p-2" class:active={$page.url.pathname.includes('/analyst/lawfull')}>
											<a class="text-white" id="txt-link" href="/analyst/lawfull"
												><img
													class="icon p-1"
													style="background-color: #2B3134;"
													src="/lawfull.svg"
													alt=""
												/> Lawful Interception Request</a
											>
										</li>

										<li
											class="p-2"
											class:active={$page.url.pathname.includes('/analyst/geolocation')}
										>
											<a class="text-white" id="txt-link" href="/analyst/geolocation"
												><img class="icon p-1" src="/geo.svg" alt="" /> Geolocation Request</a
											>
										</li>
									</div>
									<div class="col-md-6">
										<li
											class="p-2"
											class:active={$page.url.pathname.includes('/analyst/telecomunication')}
										>
											<a class="text-white" id="txt-link" href="/analyst/telecomunication"
												><img class="icon p-1" src="/tele.svg" alt="" /> Telecomunication Request</a
											>
										</li>
									</div>
								{/if}
							</div>
						</div>
					</div>
					<!-- dropdown-mega-menu.// -->
				</li>
			</ul>
			<ul class="navbar-nav">
				<li class="nav-item dropdown has-megamenu">
					<a
						class="nav-link"
						style="color :#fbfdff"
						href="#!"
						data-bs-toggle="dropdown"
						on:click={toggleMenu}
					>
						<img class="iconnav p-1" src="/digitalarc.svg" alt="" /> Digital Archiving
					</a>
					<div class="dropdown-menu megamenu" id="menu" role="menu">
						<div class="container">
							<div class="row" />
						</div>
					</div>
					<!-- dropdown-mega-menu.// -->
				</li>
			</ul>
			<ul class="navbar-nav ms-auto d-flex align-items-center gap-3">
				<li class="nav-item "><img src="/notification.svg" alt="" /></li>
				<li class="nav-item"><img src="/profile.png" class="mr-5" alt="" /></li>
				<li class="nav-item dropdown">
					<a
						class="nav-link  dropdown-toggle"
						id="toogle"
						href="#"
						data-bs-toggle="dropdown"
						style="color :#fbfdff"
					>
						Username
					</a>
					<ul class="dropdown-menu dropdown-menu-end">
						<li><a class="dropdown-item" href="#"> Submenu item 1</a></li>
						<li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
					</ul>
				</li>
			</ul>
		</div>

		<!-- navbar-collapse.// -->

		<!-- <div class="d-flex align-items-center gap-3">
			<img src="/profile.png" class="mr-5" alt="" />
			<p class="username">Username</p>
			<img src="/down.png" class="mr-5" alt="" />
		</div> -->
	</div>
</nav>

<!-- <div class="bg-dark sidebar-wrapper p-0" id="sidebar-wrapper">
	<ul class="list-group bg-dark d-flex align items-center gap-3">
		<div class="sidebar-heading bg-dark d-flex gap-2 ">
			<div class="row">
				<div class="col-sm-4">
					<img src="/logo.png" alt="" />
				</div>
				<div class="col-md-8 mt-1">
					<h6>Approval Targeting</h6>
					<p class="p-sidebar">Aproval for Target Request</p>
				</div>
			</div>
		</div>
		{#if $page.url.pathname.includes('/users/')}
			<li
				class="p-2"
				class:active={$page.url.pathname.includes('/users/dashboard')}
			>
				<a class="text-white" id="txt-link" href="/users/dashboard"
					><img class="icon p-1" src="/dashboard.svg" alt="" />Dashboard Approval Target</a
				>
			</li>

			<li
				class="p-2"
				class:active={$page.url.pathname.includes('/users/lawfull')}
			>
				<a class="text-white" id="txt-link" href="/users/lawfull"
					><img class="icon p-1" src="/lawfull.svg" alt="" /> Lawful Interception Request</a
				>
			</li>

			<li
				class="p-2"
				class:active={$page.url.pathname.includes('/users/geolocation')}
			>
				<a class="text-white" id="txt-link" href="/users/geolocation"
					><img class="icon p-1" src="/geo.svg" alt="" /> Geolocation Request</a
				>
			</li>

			<li
				class="p-2"
				class:active={$page.url.pathname.includes('/users/telecomunication')}
			>
				<a class="text-white" id="txt-link" href="/users/telecomunication"
					><img class="icon p-1" src="/tele.svg" alt="" /> Telecomunication Request</a
				>
			</li>
		{:else}
			<li
				class="p-2"
				class:active={$page.url.pathname.includes('/analyst/dashboard')}
			>
				<a class="text-white" id="txt-link" href="/analyst/dashboard"
					><img class="icon p-1" src="/dashboard.svg" alt="" />Dashboard Analyst</a
				>
			</li>

			<li
				class="p-2"
				class:active={$page.url.pathname.includes('/analyst/lawfull')}
			>
				<a class="text-white" id="txt-link" href="/analyst/lawfull"
					><img class="icon p-1" src="/lawfull.svg" alt="" /> Lawful Interception Request</a
				>
			</li>

			<li
				class="p-2"
				class:active={$page.url.pathname.includes('/analyst/geolocation')}
			>
				<a class="text-white" id="txt-link" href="/analyst/geolocation"
					><img class="icon p-1" src="/geo.svg" alt="" /> Geolocation Request</a
				>
			</li>

			<li
				class="p-2"
				class:active={$page.url.pathname.includes('/analyst/telecommunication')}
			>
				<a class="text-white" id="txt-link" href="/analyst/telecommunication"
					><img class="icon p-1" src="/tele.svg" alt="" /> Telecomunication Request</a
				>
			</li>
		{/if}
	</ul>
</div> -->
<style>
	.list-group-item {
		border-top: 1px solid #8994a5 !important;
		border-bottom: 1px solid #8994a5 !important;
		border: none !important;
		padding: 5px;
		font-family: myFirstFont;
		font-size: 14px;
	}
	.list-group-item.active {
		border-top: 1px solid #8994a5 !important;
		border-bottom: 1px solid #8994a5 !important;
		background-image: radial-gradient(#596573 5%, #404953 15%, #21262b 60%);
	}
	/* nav li a {
		border: none !important;
		padding: 5px;
		font-family: myFirstFont;
		font-size: 14px;
	}
	nav li.active a {
		border-top: 1px solid #8994a5 !important;
		border-bottom: 1px solid #8994a5 !important;
		z-index: 2;
		background-image: radial-gradient(#596573 5%, #404953 15%, #21262b 60%);
	} */
</style>
