<script>
	// let gradients = ;
	import { onMount } from 'svelte';
	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		var options = {
			series: [
				{
					name: 'Request Statistic',
					data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
				}
			],
			fill: {
				colors: '#F3BABA'
			},
			chart: {
				height: 350,
				type: 'bar',
				toolbar: {
					show: false
				}
			},
			plotOptions: {
				bar: {
					borderRadius: 6,
					dataLabels: {
						position: 'top' // top, center, bottom
					}
				}
			},
			dataLabels: {
				enabled: false
			},
			grid: {
				show: false,
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
				labels: {
					show: true,
					style: {
						colors: 'white',
						fontSize: '12px',
						fontFamily: 'Chakra Petch',
						fontWeight: 400,
						cssClass: 'apexcharts-xaxis-label'
					}
				},
				categories: [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
					'Nov',
					'Dec'
				],

				position: 'bottom',
				axisBorder: {
					show: false
				},
				axisTicks: {
					show: false
				},
				crosshairs: {
					fill: {
						type: 'gradient',
						gradient: {
							colorFrom: '#D8E3F0',
							colorTo: '#BED1E6',
							stops: [0, 100],
							opacityFrom: 0.4,
							opacityTo: 0.5
						}
					}
				},
				tooltip: {
					enabled: false
				}
			},
			yaxis: {
				axisBorder: {
					show: false
				},
				axisTicks: {
					show: false
				},
				labels: {
					show: false,
					formatter: function (val) {
						return val + '%';
					}
				}
			},
			title: {
				floating: true,
				offsetY: 330,
				align: 'center',
				style: {
					color: '#444'
				}
			}
		};

		var chart = new ApexCharts(document.querySelector('#chartBar'), options);
		chart.render();
	});
</script>

<div id="chartBar" />
