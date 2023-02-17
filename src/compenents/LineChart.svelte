<script>
	import { onMount } from 'svelte';
	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		var options = {
			series: [
				{
					name: 'Desktops',
					data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
				}
			],
			colors: ['#C8CACB'],

			chart: {
				height: 350,
				type: 'line',
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'smooth'
			},
			grid: {
				show: true,
				borderColor: '#90A4AE',
				strokeDashArray: 0,
				position: 'back',
				xaxis: {
					lines: {
						show: false
					}
				},
				yaxis: {
					lines: {
						show: false
					}
				},
				row: {
					colors: undefined,
					opacity: 0.5
				},
				column: {
					colors: undefined,
					opacity: 0.5
				},
				padding: {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
				labels: {
					show: true,
					style: {
						colors: 'white',
						fontSize: '12px'
					}
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: ['#fff'],
						fontSize: '12px',
						fontFamily: 'Chakra Petch',
						fontWeight: 400,
						cssClass: 'apexcharts-yaxis-label'
					}
				}
			}
		};
		const chart = new ApexCharts(document.querySelector('#chartLine'), options);
		chart.render();
	});

	// var chart =
</script>

<div id="chartLine" />
