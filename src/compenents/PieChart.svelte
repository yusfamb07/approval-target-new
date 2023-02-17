<script>
	export let description;
	export let series;
	export let color;
	export let fillColor;
	export let enabled;
	import { onMount } from 'svelte';
	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		var options = {
			legend: {
				show: true,
				position: 'right',
				markers: {
					fillColors: fillColor,
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
				enabled: enabled
			},
			stroke: {
				show: false
			},
			fill: {
				colors: color
			},
			series: series,
			chart: {
				width: 460,
				type: 'pie'
			},

			labels: description,
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
