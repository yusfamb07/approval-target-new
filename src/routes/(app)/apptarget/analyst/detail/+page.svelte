<script>
	import PieChart from '../../../../../compenents/PieChart.svelte';
	import BarChart from '../../../../../compenents/BarChart.svelte';
	import { onMount } from 'svelte';
	import Navbar from '../../../../../compenents/Navbar.svelte';
	import Flatpickr from 'svelte-flatpickr';
	import 'flatpickr/dist/flatpickr.css';
	import monthSelectPlugin from 'flatpickr/dist/plugins/monthSelect';
	import { DateInput } from 'date-picker-svelte';

	const options = {};
	onMount(async () => {
		new DataTable('#requestlist');
	});
</script>

<Navbar />

<div class="container mt-3">
	<div class="d-flex align-items-center gap-3">
		<img src="/kotak.png" alt="" />
		<h4 id="welcome-txt">Welcome Binda DKI Jakarta</h4>
	</div>

	<h5 class="fw-bold mt-5">List Request by Binda DKI Jakarta</h5>
	<div class="row mt-4">
		<div class="col-md-4">
			<div class="card">
				<div class="card-body detail">
					<div class="d-flex justify-content-between">
						<h6 class="fw-bold" id="title-card">Lawful Interception Request</h6>
						<a style="color :#219386;" class="fw-bold" href="#!">Go to page</a>
					</div>
				</div>
				<table id="lawfulllist" class="table table-striped mb-3 " style="width:100%">
					<thead>
						<tr>
							<th>No</th>
							<th>Date</th>
							<th>Phone</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #219386;">Confirmed</a
								>
							</td>
							<td>
								<div class="dropdown">
									<a
										href="#!"
										role="button"
										id="dropdownMenuLink"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										<img src="/action.svg" alt="" />
									</a>

									<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
										<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
										<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
										<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
									</ul>
								</div>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #DAC82E;">No Data</a
								>
							</td>
							<td><img src="/action.svg" alt="" /></td>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #A53D27;">No Action</a
								>
							</td>
							<div class="dropdown">
								<a
									href="#!"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img src="/action.svg" alt="" />
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #219386;">Approved</a
								>
							</td>
							<div class="dropdown">
								<a
									href="#!"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img src="/action.svg" alt="" />
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #219386;">Approved</a
								>
							</td>
							<div class="dropdown">
								<a
									href="#!"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img src="/action.svg" alt="" />
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #219386;">Approved</a
								>
							</td>
							<div class="dropdown">
								<a
									href="#!"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img src="/action.svg" alt="" />
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #219386;">Approved</a
								>
							</td>
							<div class="dropdown">
								<a
									href="#!"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img src="/action.svg" alt="" />
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #219386;">Approved</a
								>
							</td>
							<div class="dropdown">
								<a
									href="#!"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img src="/action.svg" alt="" />
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="col-md-4">
			<div class="card" id="conten">
				<div class="card-body">
					<div class="d-flex justify-content-between">
						<h6 class="fw-bold" id="title-card">Geolocation Request</h6>
						<a style="color :#219386;" class="fw-bold" href="#!">Go to page</a>
					</div>
				</div>
				<table id="geolist" class="table table-striped mb-3 " style="width:100%">
					<thead>
						<tr>
							<th>No</th>
							<th>Date</th>
							<th>Phone</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #219386;">Confirmed</a
								>
							</td>
							<td>
								<div class="dropdown">
									<a
										href="#!"
										role="button"
										id="dropdownMenuLink"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										<img src="/action.svg" alt="" />
									</a>

									<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
										<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
										<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
										<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
									</ul>
								</div>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #DAC82E;">No Data</a
								>
							</td>
							<td><img src="/action.svg" alt="" /></td>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #A53D27;">No Action</a
								>
							</td>
							<div class="dropdown">
								<a
									href="#!"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img src="/action.svg" alt="" />
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #219386;">Approved</a
								>
							</td>
							<div class="dropdown">
								<a
									href="#!"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img src="/action.svg" alt="" />
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #219386;">Approved</a
								>
							</td>
							<div class="dropdown">
								<a
									href="#!"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img src="/action.svg" alt="" />
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #219386;">Approved</a
								>
							</td>
							<div class="dropdown">
								<a
									href="#!"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img src="/action.svg" alt="" />
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #219386;">Approved</a
								>
							</td>
							<div class="dropdown">
								<a
									href="#!"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img src="/action.svg" alt="" />
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #219386;">Approved</a
								>
							</td>
							<div class="dropdown">
								<a
									href="#!"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img src="/action.svg" alt="" />
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="col-md-4">
			<div class="card" id="conten">
				<div class="card-body">
					<div class="d-flex justify-content-between">
						<h6 class="fw-bold" id="title-card">Telecommunication Request</h6>
						<a style="color :#219386;" class="fw-bold" href="#!">Go to page</a>
					</div>
				</div>
				<table id="telelist" class="table table-striped mb-3 " style="width:100%">
					<thead>
						<tr>
							<th>No</th>
							<th>Date</th>
							<th>Phone</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #219386;">Confirmed</a
								>
							</td>
							<td>
								<div class="dropdown">
									<a
										href="#!"
										role="button"
										id="dropdownMenuLink"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										<img src="/action.svg" alt="" />
									</a>

									<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
										<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
										<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
										<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
									</ul>
								</div>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #DAC82E;">No Data</a
								>
							</td>
							<td><img src="/action.svg" alt="" /></td>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #A53D27;">No Action</a
								>
							</td>
							<div class="dropdown">
								<a
									href="#!"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img src="/action.svg" alt="" />
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #219386;">Approved</a
								>
							</td>
							<div class="dropdown">
								<a
									href="#!"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img src="/action.svg" alt="" />
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #219386;">Approved</a
								>
							</td>
							<div class="dropdown">
								<a
									href="#!"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img src="/action.svg" alt="" />
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #219386;">Approved</a
								>
							</td>
							<div class="dropdown">
								<a
									href="#!"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img src="/action.svg" alt="" />
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #219386;">Approved</a
								>
							</td>
							<div class="dropdown">
								<a
									href="#!"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img src="/action.svg" alt="" />
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</tr>
						<tr>
							<td>1</td>
							<td>10/12/2023</td>
							<td>6287982920129</td>
							<td>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#DetailModal"
									style="color: #219386;">Approved</a
								>
							</td>
							<div class="dropdown">
								<a
									href="#!"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img src="/action.svg" alt="" />
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<div class="row mt-4">
		<div class="col-md-6">
			<div class="card" id="conten">
				<div class="card-body">
					<div class="d-flex justify-content-between">
						<h6 class="fw-bold" id="title-card">Target List</h6>
					</div>
					<table id="targetlist" class="table table-striped mb-3 mt-3" style="width:100%">
						<thead>
							<tr>
								<th style="width: 10px">Name</th>
								<th />
								<th style="text-align: right;">Phone</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><img src="/people.png" style="width: 35px; height: 35px" alt="" /></td>
								<td style="text-align: left; vertical-align: middle; ">Darrell Steward</td>
								<td style="text-align: right; vertical-align: middle;">62894782938291</td>
							</tr>
							<tr>
								<td><img src="/people.png" style="width: 35px; height: 35px" alt="" /></td>
								<td style="text-align: left; vertical-align: middle; ">Darrell Steward</td>
								<td style="text-align: right; vertical-align: middle;">62894782938291</td>
							</tr>
							<tr>
								<td><img src="/people.png" style="width: 35px; height: 35px" alt="" /></td>
								<td style="text-align: left; vertical-align: middle; ">Darrell Steward</td>
								<td style="text-align: right; vertical-align: middle;">62894782938291</td>
							</tr>
							<tr>
								<td><img src="/people.png" style="width: 35px; height: 35px" alt="" /></td>
								<td style="text-align: left; vertical-align: middle; ">Darrell Steward</td>
								<td style="text-align: right; vertical-align: middle;">62894782938291</td>
							</tr>
							<tr>
								<td><img src="/people.png" style="width: 35px; height: 35px" alt="" /></td>
								<td style="text-align: left; vertical-align: middle; ">Darrell Steward</td>
								<td style="text-align: right; vertical-align: middle;">62894782938291</td>
							</tr>
							<tr>
								<td><img src="/people.png" style="width: 35px; height: 35px" alt="" /></td>
								<td style="text-align: left; vertical-align: middle; ">Darrell Steward</td>
								<td style="text-align: right; vertical-align: middle;">62894782938291</td>
							</tr>
							<tr>
								<td><img src="/people.png" style="width: 35px; height: 35px" alt="" /></td>
								<td style="text-align: left; vertical-align: middle; ">Darrell Steward</td>
								<td style="text-align: right; vertical-align: middle;">62894782938291</td>
							</tr>
							<tr>
								<td><img src="/people.png" style="width: 35px; height: 35px" alt="" /></td>
								<td style="text-align: left; vertical-align: middle; ">Darrell Steward</td>
								<td style="text-align: right; vertical-align: middle;">62894782938291</td>
							</tr>
							<tr>
								<td><img src="/people.png" style="width: 35px; height: 35px" alt="" /></td>
								<td style="text-align: left; vertical-align: middle; ">Darrell Steward</td>
								<td style="text-align: right; vertical-align: middle;">62894782938291</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="card" id="conten">
				<div class="card-body">
					<div class="d-flex justify-content-between">
						<h6 class="fw-bold" id="title-card">Target Search Statistic</h6>
					</div>
					<table id="targetlist" class="table table-striped mb-3 mt-3" style="width:100%">
						<thead>
							<tr>
								<th style="width: 10px">Name</th>
								<th />
								<th style="text-align: right;">Phone</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><img src="/people.png" style="width: 35px; height: 35px" alt="" /></td>
								<td style="text-align: left; vertical-align: middle; ">Darrell Steward</td>
								<td style="text-align: left; vertical-align: middle; ">
									<div class="progress">
										<div
											class="progress-bar progress-bar-striped bg-info"
											role="progressbar"
											style="width: 40%"
											aria-valuenow="10"
											aria-valuemin="0"
											aria-valuemax="100"
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td><img src="/people.png" style="width: 35px; height: 35px" alt="" /></td>
								<td style="text-align: left; vertical-align: middle; ">Darrell Steward</td>
								<td style="text-align: left; vertical-align: middle; ">
									<div class="progress">
										<div
											class="progress-bar progress-bar-striped bg-info"
											role="progressbar"
											style="width: 40%"
											aria-valuenow="10"
											aria-valuemin="0"
											aria-valuemax="100"
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td><img src="/people.png" style="width: 35px; height: 35px" alt="" /></td>
								<td style="text-align: left; vertical-align: middle; ">Darrell Steward</td>
								<td style="text-align: left; vertical-align: middle; ">
									<div class="progress">
										<div
											class="progress-bar progress-bar-striped bg-info"
											role="progressbar"
											style="width: 40%"
											aria-valuenow="10"
											aria-valuemin="0"
											aria-valuemax="100"
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td><img src="/people.png" style="width: 35px; height: 35px" alt="" /></td>
								<td style="text-align: left; vertical-align: middle; ">Darrell Steward</td>
								<td style="text-align: left; vertical-align: middle; ">
									<div class="progress">
										<div
											class="progress-bar progress-bar-striped bg-info"
											role="progressbar"
											style="width: 40%"
											aria-valuenow="10"
											aria-valuemin="0"
											aria-valuemax="100"
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td><img src="/people.png" style="width: 35px; height: 35px" alt="" /></td>
								<td style="text-align: left; vertical-align: middle; ">Darrell Steward</td>
								<td style="text-align: left; vertical-align: middle; ">
									<div class="progress">
										<div
											class="progress-bar progress-bar-striped bg-info"
											role="progressbar"
											style="width: 40%"
											aria-valuenow="10"
											aria-valuemin="0"
											aria-valuemax="100"
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td><img src="/people.png" style="width: 35px; height: 35px" alt="" /></td>
								<td style="text-align: left; vertical-align: middle; ">Darrell Steward</td>
								<td style="text-align: left; vertical-align: middle; ">
									<div class="progress">
										<div
											class="progress-bar progress-bar-striped bg-info"
											role="progressbar"
											style="width: 40%"
											aria-valuenow="10"
											aria-valuemin="0"
											aria-valuemax="100"
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td><img src="/people.png" style="width: 35px; height: 35px" alt="" /></td>
								<td style="text-align: left; vertical-align: middle; ">Darrell Steward</td>
								<td style="text-align: left; vertical-align: middle; ">
									<div class="progress">
										<div
											class="progress-bar progress-bar-striped bg-info"
											role="progressbar"
											style="width: 40%"
											aria-valuenow="10"
											aria-valuemin="0"
											aria-valuemax="100"
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td><img src="/people.png" style="width: 35px; height: 35px" alt="" /></td>
								<td style="text-align: left; vertical-align: middle; ">Darrell Steward</td>
								<td style="text-align: left; vertical-align: middle; ">
									<div class="progress">
										<div
											class="progress-bar progress-bar-striped bg-info"
											role="progressbar"
											style="width: 40%"
											aria-valuenow="10"
											aria-valuemin="0"
											aria-valuemax="100"
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td><img src="/people.png" style="width: 35px; height: 35px" alt="" /></td>
								<td style="text-align: left; vertical-align: middle; ">Darrell Steward</td>
								<td style="text-align: left; vertical-align: middle; ">
									<div class="progress">
										<div
											class="progress-bar progress-bar-striped bg-info"
											role="progressbar"
											style="width: 40%"
											aria-valuenow="10"
											aria-valuemin="0"
											aria-valuemax="100"
										/>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.date-container {
		align-items: baseline;
		display: flex;
		gap: 1rem;
	}
	/* input[type='date'] {
		background: #23282e;
		border-right: none;
		border-left: none;
		color: #fbfdff;
	} */
</style>
