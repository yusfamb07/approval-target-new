<script>
	import { onMount } from 'svelte';
	import { Select } from 'antd';

	const { Option } = Select;
	export let option;
	onMount((async) => {
		// lakukan sesuatu di sini setelah komponen dimuat
		const options = [
			{ value: 'Option 1', label: 'Option 1' },
			{ value: 'Option 2', label: 'Option 2' },
			{ value: 'Option 3', label: 'Option 3' }
		];

		// Membuat instance Select dari Ant Design
		const select = new Select({
			target: document.querySelector('#my-select'),
			props: {
				options: options
			}
		});
	});
</script>

<div id="my-select" />
