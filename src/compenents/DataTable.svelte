<script>
	let headers = [
		{ name: 'usa', value: 'text' },
		{ name: 'canada', value: 'num' }
	];
	let data = [
		{ text: 'one', num: 1 },
		{ text: 'two', num: 2 },
		{ text: 'three', num: 3 }
	];
</script>

<thead>
	{#each headers as item}
		<th>{item.name}</th>
	{/each}
</thead>

<tbody>
	{#each data as row, i (i)}
		<tr>
			{#each headers as item}
				<td>{row[item.value]}</td>
			{/each}
		</tr>
	{/each}
</tbody>
