<!-- MyComponent.svelte -->
<script>
	import { onMount } from 'svelte';

	let Select;

	onMount(async () => {
		const antd = await import('antd');
		Select = antd.Select;
	});
	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};
</script>

{#if Select}
	<Select
		defaultValue="lucy"
		style={{
			width: 120
		}}
		onChange={handleChange}
		options={[
			{
				value: 'jack',
				label: 'Jack'
			},
			{
				value: 'lucy',
				label: 'Lucy'
			},
			{
				value: 'Yiminghe',
				label: 'yiminghe'
			},
			{
				value: 'disabled',
				label: 'Disabled',
				disabled: true
			}
		]}
	/>
{:else}
	<!-- tampilkan pesan loading atau pesan error -->
{/if}
