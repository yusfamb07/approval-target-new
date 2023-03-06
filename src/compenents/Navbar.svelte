<script>
	import NavLink from './NavLink.svelte';
	import icon from '../lib/dashboard.svg';
	import { onMount } from 'svelte';

	function logoutHandler() {
		localStorage.clear();
		goto('/login');
	}

	// onMount(async () => {
	// 	fetchIncomingMail();
	// 	if (!localStorage.getItem('token')) goto('/login');
	// });

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

<nav class="navbar navbar-expand-lg ">
	<div class="container">
		<!-- <div class="collapse navbar-collapse " id="main_nav">
			<ul class="navbar-nav ">
				<li
					class="nav-item has-megamenu d-flex align-items-center"
					class:active={$page.url.pathname.includes('/users/dashboard')}
				>
					<a
						class="txt-link"
						class:active={$page.url.pathname.includes('/users/telecomunication')}
						href="/users/dashboard"><img class="iconnav " src="/lawfull.svg" alt="" />Dashboard</a
					>
				</li>

				<li
					class="nav-item has-megamenu d-flex align-items-center"
					class:active={$page.url.pathname.includes('/users/lawfull')}
				>
					<a
						class="txt-link"
						class:active={$page.url.pathname.includes('/users/telecomunication')}
						href="/users/lawfull"
						><img class="iconnav " src="/lawfull.svg" alt="" /> Lawful Interception Request</a
					>
				</li>

				<li
					class="nav-item has-megamenu d-flex align-items-center"
					class:active={$page.url.pathname.includes('/users/geolocation')}
				>
					<a
						class="txt-link"
						class:active={$page.url.pathname.includes('/users/telecomunication')}
						href="/users/geolocation"
						><img class="iconnav " src="/geo.svg" alt="" /> Geolocation Request</a
					>
				</li>

				<li
					class="nav-item has-megamenu d-flex align-items-center"
					class:active={$page.url.pathname.includes('/users/telecomunication')}
				>
					<a
						class="txt-link"
						class:active={$page.url.pathname.includes('/users/telecomunication')}
						href="/users/telecomunication"
						><img class="iconnav " src="/tele.svg" alt="" /> Telecomunication Request</a
					>
				</li>
			</ul>
			<ul class="navbar-nav ms-auto d-flex align-items-center gap-3 prof">
				<li class="nav-item"><img class="img-round" src="/profil.png" alt="" /></li>
				<li class="nav-item">
					<h6 class="mt-2">Binda DKI</h6>
				</li>
			</ul>
			<ul class="navbar-nav ms-auto d-flex align-items-center gap-3">
				<li class="nav-item "><img class="icon-item" src="/setting.svg" alt="" /></li>
				<li class="nav-item ">
					<img class="icon-item" src="/notification.svg" alt="" />
					<span
						style="font-size: 9px;"
						class="position-absolute start-95 top-3 translate-middle badge rounded-pill bg-danger"
					>
						99+
					</span>
				</li>

				<li class="nav-item"><img class="icon-item" src="/power.svg" alt="" /></li>
			</ul>
		</div> -->

		<div class="collapse navbar-collapse " id="main_nav">
			<ul class="navbar-nav">
				<li
					class="nav-item has-megamenu d-flex align-items-center"
					class:active={$page.url.pathname.includes('/users/dashboard')}
				>
					<a
						class="txt-link d-flex align-items-center gap-2"
						class:active={$page.url.pathname.includes('/users/telecomunication')}
						href="/users/dashboard"><img class="iconnav " src="/dashboard.svg" alt="" />Dashboard</a
					>
				</li>
				<li class="nav-item dropdown has-megamenu d-flex align-items-center">
					<div class="dropdown ">
						<a
							style="color: #fbfdff; 	text-decoration: none; font-family: myFirstFont; font-size: 14px; "
							class="dropdown-toggle nav-link d-flex align-items-center gap-2"
							role="button"
							id="dropdownMenuLink"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<img class="iconnav" src="/apptarget.svg" alt="" /> Approval Target
						</a>

						<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
							<li
								class="p-2"
								class:active={$page.url.pathname.includes('/apptarget/users/dashboard')}
							>
								<a
									class="d-flex align-items-center gap-2"
									id="txt-link"
									href="/apptarget/users/dashboard"
									><img class="iconnav" src="/dashboard.svg" alt="" /> Dashboard</a
								>
							</li>

							<li
								class="p-2"
								class:active={$page.url.pathname.includes('/apptarget/users/lawfull')}
							>
								<a
									class="d-flex align-items-center gap-2"
									id="txt-link"
									href="/apptarget/users/lawfull"
									><img class="iconnav" src="/lawfull.svg" alt="" /> Lawful Interception Request</a
								>
							</li>

							<li
								class="p-2"
								class:active={$page.url.pathname.includes('apptarget/users/geolocation')}
							>
								<a
									class="d-flex align-items-center gap-2"
									id="txt-link"
									href="apptarget/users/geolocation"
									><img class="iconnav" src="/geo.svg" alt="" /> Geolocation Request</a
								>
							</li>
							<li
								class="p-2"
								class:active={$page.url.pathname.includes('apptarget/users/telecomunication')}
							>
								<a
									class="d-flex align-items-center gap-2"
									id="txt-link"
									href="apptarget/users/telecomunication"
									><img class="iconnav" src="/tele.svg" alt="" /> Telecomunication Request</a
								>
							</li>
						</ul>
					</div>
					<!-- dropdown-mega-menu.// -->
				</li>
			</ul>
			<ul class="navbar-nav">
				<li class="nav-item dropdown has-megamenu d-flex align-items-center gap-2">
					<div class="dropdown ">
						<a
							style="color: #fbfdff; 	text-decoration: none; font-family: myFirstFont; font-size: 14px; "
							class="dropdown-toggle nav-link d-flex align-items-center gap-2"
							href="#!"
							role="button"
							id="dropdownMenuLink"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<img class="iconnav" src="/digitalarc.svg" alt="" /> Digital Archiving
						</a>

						<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
							<li
								class="p-2"
								class:active={$page.url.pathname.includes('digitalarc/users/dashboard')}
							>
								<a
									class="d-flex align-items-center gap-2"
									id="txt-link"
									href="digitalarc/users/dashboard"
									><img class="iconnav" src="/dashboard.svg" alt="" />Dashboard</a
								>
							</li>

							<li
								class="p-2"
								class:active={$page.url.pathname.includes('digitalarc/users/lawfull')}
							>
								<a
									class="d-flex align-items-center gap-2"
									id="txt-link"
									href="digitalarc/users/lawfull"
									><img class="iconnav" src="/lawfull.svg" alt="" /> Incoming Mail</a
								>
							</li>

							<li
								class="p-2"
								class:active={$page.url.pathname.includes('digitalarc/users/geolocation')}
							>
								<a
									class="d-flex align-items-center gap-2"
									id="txt-link"
									href="digitalarc/users/geolocation"
									><img class="iconnav" src="/geo.svg" alt="" />Outgoing Mail</a
								>
							</li>
							<li
								class="p-2"
								class:active={$page.url.pathname.includes('digitalarc/users/telecomunication')}
							>
								<a
									class="d-flex align-items-center gap-2"
									id="txt-link"
									href="digitalarc/users/telecomunication"
									><img class="iconnav" src="/tele.svg" alt="" /> Archiving</a
								>
							</li>
							<li
								class="p-2"
								class:active={$page.url.pathname.includes('digitalarc/users/telecomunication')}
							>
								<a
									class="d-flex align-items-center gap-1"
									id="txt-link"
									href="digitalarc/users/telecomunication"
									><img class="iconnav" src="/tele.svg" alt="" /> Tracking Mail</a
								>
							</li>
						</ul>
					</div>

					<!-- dropdown-mega-menu.// -->
				</li>
			</ul>
			<div class="ms-auto gap-5">
				<ul class="navbar-nav d-flex align-items-center gap-3 prof">
					<li class="nav-item"><img class="img-round" src="/profil.png" alt="" /></li>
					<li class="nav-item">
						<h6 class="mt-2">Binda DKI</h6>
					</li>
				</ul>
			</div>
			<ul class="navbar-nav  d-flex align-items-center gap-3">
				<li class="nav-item "><img class="icon-item" src="/setting.svg" alt="" /></li>
				<li class="nav-item ">
					<img class="icon-item" src="/notification.svg" alt="" />
					<span
						style="font-size: 9px;"
						class="position-absolute start-95 top-3 translate-middle badge rounded-pill bg-danger"
					>
						99+
					</span>
				</li>

				<li class="nav-item">
					<!-- <a href={'/login'} on:click={logoutHandler}
						><img class="icon-item" src="/power.svg" alt="" /></a
					> -->
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
