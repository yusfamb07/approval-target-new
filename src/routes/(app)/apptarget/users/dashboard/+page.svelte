<script>
	import { onMount } from 'svelte';
	import { DateInput } from 'date-picker-svelte';
	import Navbar from '../../../../../compenents/Navbar.svelte';
	import PieChart from '../../../../../compenents/PieChart.svelte';
	import BarChart from '../../../../../compenents/BarChart.svelte';
	import Flatpickr from 'svelte-flatpickr';
	import 'flatpickr/dist/flatpickr.css';
	import { DatePicker, Space } from 'antd';
	import useResponsiveObserver from 'antd/es/_util/responsiveObserver';

	onMount(async () => {
		new DataTable('#requestlist', {
			dom: '<"top"Ali>rt<"bottom"p><"clear">',
			alphabetSearch: {
				column: 0
			},
			pageLength: 2,
			bLengthChange: false,
			paging: false,
			ordering: false,
			language: {
				info: 'Filter show by 10 Rows'
			}
		});
	});

	let headers = [
		{ name: 'No', value: 'id' },
		{ name: 'Phone Number', value: 'binda' },
		{ name: 'Folder Name', value: 'pending' },
		{ name: 'Lawfull Request', value: 'lawfull' },
		{ name: 'Geo Request', value: 'geo' },
		{ name: 'CDR Request', value: 'cdr' }
	];

	export let data;
	const { posts } = data;
</script>

<Navbar />

<div class="container mt-5 ">
	<div class="d-flex align-items-center gap-3">
		<img src="/kotak.png" alt="" />
		<h4 id="welcome-txt">Welcome Binda DKI Jakarta</h4>
	</div>

	<h5 class="fw-bold mt-5">Request Summary</h5>
	<div class="row mt-4">
		<div class="col-md-4">
			<div class="card" id="conten">
				<div class="card-title" />
				<div class="card-body">
					<div class="d-flex justify-content-between">
						<h6 class="fw-bold" id="title-card">Lawful Interception Request</h6>
						<a style="color :#219386;" class="fw-bold" href="#!">Go to page</a>
					</div>
					<table id="lawfulllist" class="table mb-3 mt-3" style="width:100%">
						<thead>
							<tr>
								<th>No</th>
								<th>Date</th>
								<th>Phone</th>
								<th>Status</th>
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
										style="color: #219386;">Approved</a
									>
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
										style="color: #219386;">Approved</a
									>
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
										style="color: #219386;">Approved</a
									>
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
										style="color: #219386;">Approved</a
									>
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
										style="color: #219386;">Approved</a
									>
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
										style="color: #219386;">Approved</a
									>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="card" id="conten">
				<div class="card-title" />
				<div class="card-body">
					<div class="d-flex justify-content-between">
						<h6 class="fw-bold" id="title-card">Geolocation Request</h6>
						<a style="color :#219386;" class="fw-bold" href="#!">Go to page</a>
					</div>
					<table id="geolist" class="table mb-3 mt-3" style="width:100%">
						<thead>
							<tr>
								<th>No</th>
								<th>Date</th>
								<th>Phone</th>
								<th>Status</th>
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
										style="color: #219386;">Approved</a
									>
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
										style="color: #219386;">Approved</a
									>
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
										style="color: #219386;">Approved</a
									>
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
										style="color: #219386;">Approved</a
									>
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
										style="color: #219386;">Approved</a
									>
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
										style="color: #219386;">Approved</a
									>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="card" id="conten">
				<div class="card-title" />
				<div class="card-body">
					<div class="d-flex justify-content-between">
						<h6 class="fw-bold" id="title-card">Telecommunication Request</h6>
						<a style="color :#219386;" class="fw-bold" href="#!">Go to page</a>
					</div>
					<table id="telelist" class="table mb-3 mt-3" style="width:100%">
						<thead>
							<tr>
								<th>No</th>
								<th>Date</th>
								<th>Phone</th>
								<th>Status</th>
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
										style="color: #219386;">Approved</a
									>
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
										style="color: #219386;">Approved</a
									>
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
										style="color: #219386;">Approved</a
									>
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
										style="color: #219386;">Approved</a
									>
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
										style="color: #219386;">Approved</a
									>
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
										style="color: #219386;">Approved</a
									>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

	<h5 class="fw-bold mt-4 mb-4">History Request Summary</h5>
	<div class="row">
		<div class="col-md-6">
			<div class="card" id="conten">
				<div class="card-title" />
				<div class="card-body">
					<div class="d-flex justify-content-between">
						<h6 class="fw-bold" id="title-card">Most Search by Binda Jakarta</h6>
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
					<table id="lawfulllist" class="table mb-3 mt-3" style="width:100%">
						<thead>
							<tr>
								<th>No</th>
								<th>Date</th>
								<th>Urgency</th>
								<th>Phone Number</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>10/12/2023</td>
								<td>Economy</td>
								<td>6287982920129</td>
								<td>
									<a
										href="#"
										data-bs-toggle="modal"
										data-bs-target="#DetailModal"
										style="color: #219386;">Action</a
									>
								</td>
							</tr>
							<tr>
								<td>1</td>
								<td>10/12/2023</td>
								<td>Economy</td>
								<td>6287982920129</td>
								<td>
									<a
										href="#"
										data-bs-toggle="modal"
										data-bs-target="#DetailModal"
										style="color: #219386;">Action</a
									>
								</td>
							</tr>
							<tr>
								<td>1</td>
								<td>10/12/2023</td>
								<td>Economy</td>
								<td>6287982920129</td>
								<td>
									<a
										href="#"
										data-bs-toggle="modal"
										data-bs-target="#DetailModal"
										style="color: #219386;">Action</a
									>
								</td>
							</tr>
							<tr>
								<td>1</td>
								<td>10/12/2023</td>
								<td>Economy</td>
								<td>6287982920129</td>
								<td>
									<a
										href="#"
										data-bs-toggle="modal"
										data-bs-target="#DetailModal"
										style="color: #219386;">Action</a
									>
								</td>
							</tr>
							<tr>
								<td>1</td>
								<td>10/12/2023</td>
								<td>Economy</td>
								<td>6287982920129</td>
								<td>
									<a
										href="#"
										data-bs-toggle="modal"
										data-bs-target="#DetailModal"
										style="color: #219386;">Action</a
									>
								</td>
							</tr>
							<tr>
								<td>1</td>
								<td>10/12/2023</td>
								<td>Economy</td>
								<td>6287982920129</td>
								<td>
									<a
										href="#"
										data-bs-toggle="modal"
										data-bs-target="#DetailModal"
										style="color: #219386;">Action</a
									>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="card" id="conten">
				<div class="card-title" />
				<div class="card-body">
					<div class="d-flex justify-content-between">
						<h6 class="fw-bold" id="title-card">Latest Search by Binda Jakarta</h6>
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
					<table id="lawfulllist" class="table mb-3 mt-3" style="width:100%">
						<thead>
							<tr>
								<th>No</th>
								<th>Date</th>
								<th>Urgency</th>
								<th>Phone Number</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>10/12/2023</td>
								<td>Economy</td>
								<td>6287982920129</td>
								<td>
									<a
										href="#"
										data-bs-toggle="modal"
										data-bs-target="#DetailModal"
										style="color: #219386;">Action</a
									>
								</td>
							</tr>
							<tr>
								<td>1</td>
								<td>10/12/2023</td>
								<td>Economy</td>
								<td>6287982920129</td>
								<td>
									<a
										href="#"
										data-bs-toggle="modal"
										data-bs-target="#DetailModal"
										style="color: #219386;">Action</a
									>
								</td>
							</tr>
							<tr>
								<td>1</td>
								<td>10/12/2023</td>
								<td>Economy</td>
								<td>6287982920129</td>
								<td>
									<a
										href="#"
										data-bs-toggle="modal"
										data-bs-target="#DetailModal"
										style="color: #219386;">Action</a
									>
								</td>
							</tr>
							<tr>
								<td>1</td>
								<td>10/12/2023</td>
								<td>Economy</td>
								<td>6287982920129</td>
								<td>
									<a
										href="#"
										data-bs-toggle="modal"
										data-bs-target="#DetailModal"
										style="color: #219386;">Action</a
									>
								</td>
							</tr>
							<tr>
								<td>1</td>
								<td>10/12/2023</td>
								<td>Economy</td>
								<td>6287982920129</td>
								<td>
									<a
										href="#"
										data-bs-toggle="modal"
										data-bs-target="#DetailModal"
										style="color: #219386;">Action</a
									>
								</td>
							</tr>
							<tr>
								<td>1</td>
								<td>10/12/2023</td>
								<td>Economy</td>
								<td>6287982920129</td>
								<td>
									<a
										href="#"
										data-bs-toggle="modal"
										data-bs-target="#DetailModal"
										style="color: #219386;">Action</a
									>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

	<h5 class="fw-bold mt-4 mb-4">List Target by Alphabet</h5>
	<div class="row">
		<div class="col-md-12">
			<div class="card" id="conten">
				<div class="card-body">
					<div class="d-flex justify-content-between">
						<h6 class="fw-bold" id="title-card">Target List by Binda Jakarta</h6>
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
					<table id="requestlist" class="table mb-5 mt-3" style="width:100%">
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
									<td>{post.pending}</td>
									<td>{post.lawfull}</td>
									<td>{post.geo}</td>
									<td>{post.cdr}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

	<h5 class="fw-bold mt-4 mb-4">Foldering Cases</h5>
	<div class="row">
		<div class="col-md-6">
			<ul class="nav nav-pills justify-content-start">
				<li class="nav-item">
					<a class="nav-link active" data-bs-toggle="pill" href="#callin">All Method</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" data-bs-toggle="pill" href="#callout">Lawful Intercaption</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" data-bs-toggle="pill" href="#msgin">Geolocation</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" data-bs-toggle="pill" href="#msgout">Telecommunication</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="tab-content">
		<div class="tab-pane active" id="callin" style="color: white;">
			<div class="card-box">
				<div class="row">
					<div class="col-md-12">
						<div class="container-box">
							<div class="d-flex gap-3">
								<div class="folder">
									<div class="file" />
									<p>Folder Name</p>
								</div>
								<div class="folder">
									<div class="file" />
									<p>Folder Name</p>
								</div>
								<div class="folder">
									<div class="file" />
									<p>Folder Name</p>
								</div>
								<div class="folder">
									<div class="file" />
									<p>Folder Name</p>
								</div>
								<div class="folder">
									<div class="file" />
									<p>Folder Name</p>
								</div>
								<div class="folder">
									<div class="file" />
									<p>Folder Name</p>
								</div>
								<div class="folder">
									<div class="file" />
									<p>Folder Name</p>
								</div>
							</div>
							<div class="d-flex gap-3">
								<div class="folder">
									<div class="file" />
									<p>Folder Name</p>
								</div>
								<div class="folder">
									<div class="file" />
									<p>Folder Name</p>
								</div>
								<div class="folder">
									<div class="file" />
									<p>Folder Name</p>
								</div>
								<div class="folder">
									<div class="file" />
									<p>Folder Name</p>
								</div>
								<div class="folder">
									<div class="file" />
									<p>Folder Name</p>
								</div>
								<div class="folder">
									<div class="file" />
									<p>Folder Name</p>
								</div>
								<div class="folder">
									<div class="file" />
									<p>Folder Name</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="tab-pane fade" id="callout" style="color: white; " />
		<div class="tab-pane fade" id="msgin" style="color: white; " />
		<div class="tab-pane fade" id="msgout" style="color: white; " />
	</div>
</div>
