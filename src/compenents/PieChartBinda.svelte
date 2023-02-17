<script>
	import { onMount } from 'svelte';
	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		var options = {
			legend: {
				show: true,
				position: 'right',
				markers: {
					fillColors: ['#903C29', '#17665D'],
					radius: 0,
					customHTML: undefined,
					onClick: undefined,
					offsetX: 0,
					offsetY: 0,
					width: 19,
					height: 6
				},
				labels: {
					colors: ['#fff'],
					useSeriesColors: false
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				show: false
			},
			fill: {
				colors: ['#903C29', '#17665D']
			},
			series: [45, 55],
			chart: {
				width: 430,
				type: 'pie'
			},

			labels: ['Finish Request', 'Pending Request'],
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200
						},
						legend: {
							show: false,
							position: 'bottom',
							labels: {
								colors: undefined,
								useSeriesColors: false
							}
						}
					}
				}
			]
		};
		const chart = new ApexCharts(document.querySelector('#chartPie'), options);
		chart.render();
	});

	// var chart =
</script>

<div id="chartPie" />
