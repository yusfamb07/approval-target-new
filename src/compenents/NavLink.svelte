<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let href;
	export let title;
	// export let icon;
	// let currentPath;
	// onMount(() => {
	// 	currentPath = window.location.pathname;
	// });
	let path;

	function getPath(currentPath) {
		path = currentPath;
		console.log(path);
	}

	$: getPath($page.url.pathname);
</script>

<!-- <a
	class="list-group-item bg-dark text-white "
	class:active={$page.url.pathname.split('/')[1] === href.split('/')[1]}
	{href}
	><img class="icon p-1" src="/dashboard.svg" alt="" />
	{title}
</a> -->

<li class={path === '' ? 'list-group-item bg-dark  active' : ''}>
	<a class="text-white" id="txt-link" {href}
		><img class="icon p-1" src="/dashboard.svg" alt="" />{title}</a
	>
</li>

<!-- <a
	{href}
	class="list-group-item bg-dark  text-white"
	class:active={currentPath.split('/')[1] === href.split('/')[1]}
	><img class="icon p-1" src="/dashboard.svg" alt="" />
	{title}
</a> -->
<style>
</style>
