<script>
	import { onMount } from 'svelte';
	onMount(async () => {
		// create an array with nodes
		var nodes = new vis.DataSet([
			{
				id: 1,
				label: '(+33)7 75 55 45 48',
				font: { size: 12, color: '#E6D32F', face: 'Chakra Petch' }
			},
			{
				id: 2,
				label: '(+33)6 55 53 19 16',
				font: { size: 12, color: '#FBFDFF', face: 'Chakra Petch' }
			},
			{
				id: 3,
				label: '(+33)6 55 53 19 16',
				font: { size: 12, color: '#FBFDFF', face: 'Chakra Petch' }
			},
			{
				id: 4,
				label: '(+33)6 55 53 19 16',
				font: { size: 12, color: '#FBFDFF', face: 'Chakra Petch' }
			},
			{
				id: 5,
				label: '(+33)6 55 53 19 16',
				font: { size: 12, color: '#FBFDFF', face: 'Chakra Petch' }
			}
		]);

		// create an array with edges
		var edges = new vis.DataSet([
			{ from: 1, to: 3 },
			{ from: 2, to: 3 },
			{ from: 4, to: 3 },
			{ from: 5, to: 3 }
		]);

		// create a network
		var container = document.getElementById('mynetwork');

		// provide the data in the vis format
		var data = {
			nodes: nodes,
			edges: edges
		};
		var options = {
			nodes: {
				shape: 'dot',
				size: 12,
				borderWidth: 1,
				color: {
					background: '#812B36',
					border: '#A53644',
					highlight: {
						border: '#2B7CE9',
						background: '#D2E5FF'
					}
				}
			}
		};

		// initialize your network!
		var network = new vis.Network(container, data, options);
	});

	// var chart =
</script>

<div id="mynetwork" style="width: 465px; height: 328px;" />
