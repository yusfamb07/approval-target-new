<script>
	import PieChart from '../../../compenents/PieChart.svelte';
	import BarChart from '../../../compenents/BarChart.svelte';
	import { onMount } from 'svelte';
	import { DateInput } from 'date-picker-svelte';
	import Navbar from '../../../compenents/Navbar.svelte';
	import Flatpickr from 'svelte-flatpickr';
	import 'flatpickr/dist/flatpickr.css';
	import { DatePicker, Space } from 'antd';
	import Login from '../../../lib/Login.svelte';
	import useResponsiveObserver from 'antd/es/_util/responsiveObserver';

	const logout = () => {
		user.update((val) => (val = null));
	};
	onMount(async () => {
		new DataTable('#requestlist', {
			language: {
				zeroRecords: ' ',
				emptyTable: 'No data to display'
			}
		});
	});
	let headers = [
		{ name: 'No', value: 'id' },
		{ name: 'Binda', value: 'binda' },
		{ name: 'Lawfull Request', value: 'lawfull' },
		{ name: 'Geo Request', value: 'geo' },
		{ name: 'CDR Request', value: 'cdr' },
		{ name: 'Pending Request', value: 'pending' }
	];

	export let data;
	const { posts } = data;
</script>

<Navbar />

<div class="konten">
	<div class="container mt-3">
		<h4>Welcome People</h4>

		<div class="row">
			<div class="col-md-3">
				<div class="card">
					<div class="card-body">
						<h6>Lawful Interception Request</h6>
						<div class="d-flex align-items-center gap-5 mt-3">
							<img class="icon-dashboard" src="/lawfull.svg" alt="" />
							<h1 id="total-lawful" class="total-lawful">56</h1>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card">
					<div class="card-body">
						<h6>Geolocation Request</h6>
						<div class="d-flex align-items-center gap-5 mt-3">
							<img class="icon-dashboard" src="/geo.svg" alt="" />
							<h1 id="total-lawful" class="total-lawful">56</h1>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card">
					<div class="card-body">
						<h6>Telecomunication Request</h6>
						<div class="d-flex align-items-center gap-5 mt-3">
							<img class="icon-dashboard" src="/tele.svg" alt="" />
							<h1 id="total-lawful" class="total-lawful">56</h1>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card">
					<div class="card-body">
						<h6>Pending Request</h6>
						<div class="d-flex align-items-center gap-5 mt-3">
							<img class="icon-dashboard" src="/req.svg" alt="" />
							<h1 id="total-lawful" class="total-lawful">56</h1>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row mt-4">
			<div class="col-md-6">
				<div class="card" style="height: 470px;">
					<div class="card-title" />
					<div class="card-body">
						<h6>Pie Chart Request</h6>
						<div class="mt-5">
							<PieChart
								fillColor={['#D58407', '#17665D', '#1A4C7A', '#903C29']}
								description={[
									'Lawful Interception Request',
									'Geolocation Request',
									'Telecomunication Request',
									'All Pending Request'
								]}
								series={[25, 15, 15, 25]}
								color={['#D58407', '#17665D', '#1A4C7A', '#903C29']}
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="card" style="height: 470px;">
					<div class="card-body">
						<div class="d-flex justify-content-between">
							<h6>Most Request by Binda</h6>
							<div class="dropdown">
								<a
									style="color: #fbfdff; 	text-decoration: none; font-family: myFirstFont; font-size: 14px; "
									class="dropdown-toggle"
									href="#!"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Lawful Interception Request
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</div>
						<div class="mt-3">
							<BarChart
								data={[600, 500, 400, 300, 200]}
								categories={['South Korea', 'France', 'Japan', 'Italy', 'Canada']}
								color={['#903C29', '#D58407', '#17665D', '#1A4C7A', '#29907D']}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row mt-4">
			<div class="col-md-12">
				<div class="card">
					<div class="card-body">
						<div class="d-flex justify-content-between mb-3">
							<h6>Request List</h6>
							<div class="d-flex ">
								<form action="" class="date-container">
									<Flatpickr
										options={{
											altInput: true,
											altFormat: ' F Y',
											dateFormat: 'Y-m-d'
										}}
										id="flatpickr"
										class="filter-form flatpickr"
										placeholder="Januari 2023"
									/>
									<!-- <input type="date" name="" id="" /> -->
									<p>To</p>
									<Flatpickr
										options={{
											altInput: true,
											altFormat: ' F Y',
											dateFormat: 'Y-m-d'
										}}
										id="flatpickr"
										class="filter-form flatpickr"
										placeholder="Febuari 2023"
									/>
								</form>
							</div>
						</div>
						<table id="requestlist" class="table table-striped mb-5 mt-5" style="width:100%">
							<thead>
								<tr>
									{#each headers as item}
										<th>{item.name}</th>
									{/each}
								</tr>
							</thead>
							<tbody>
								{#each posts as post}
									<tr>
										<td>{post.id}</td>
										<td>{post.binda}</td>
										<td>{post.lawfull}</td>
										<td>{post.geo}</td>
										<td>{post.cdr}</td>
										<td>{post.pending}</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
