<script>
	import { Select } from 'antd';
	import preprocess from 'svelte-preprocess';
</script>

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
			value: 'luc	y',
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
