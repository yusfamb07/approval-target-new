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

<div class="container mt-3">
	<div class="d-flex align-items-center gap-3">
		<h5 class="fw-bold" id="welcome-txt">List BINDA</h5>
	</div>

	<div class="row mt-4">
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
	</div>
	<div class="row mt-3">
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
	</div>
	<div class="row mt-3">
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
	</div>
	<div class="row mt-3">
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
	</div>
	<div class="row mt-3">
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
	</div>
	<div class="row mt-3">
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="card-icon ">
				<div class="card-icon d-flex justify-content-center align-items-center">
					<img class=" icon-binda" src="/jatim.png" alt="" />
				</div>
				<div class="frame d-flex justify-content-center align-items-center">
					<h5>Jawa Timur</h5>
				</div>
			</div>
		</div>
	</div>

	<h5 class="fw-bold mt-4">Request Statistic by BINDA</h5>

	<div class="row mt-3">
		<div class="col-md-4">
			<div class="card" id="conten">
				<div class="card-title" />
				<div class="card-body">
					<div class="d-flex justify-content-between">
						<h6 class="fw-bold" id="title-card">Lawful Interception Request</h6>
						<a style="color :#219386;" class="fw-bold" href="#!">Go to page</a>
					</div>
					<table id="lawfulllist" class="table table-striped mb-3 mt-3" style="width:100%">
						<thead>
							<tr>
								<th style="width: 10px">Name</th>
								<th />
								<th style="text-align: right;">Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><img src="/jatimtbl.png" alt="" /></td>
								<td style="text-align: left;">Jawa Timur</td>
								<td style="text-align: right;">45</td>
							</tr>
							<tr>
								<td><img src="/jatimtbl.png" alt="" /></td>
								<td style="text-align: left;">Jawa Timur</td>
								<td style="text-align: right;">45</td>
							</tr>
							<tr>
								<td><img src="/jatimtbl.png" alt="" /></td>
								<td style="text-align: left;">Jawa Timur</td>
								<td style="text-align: right;">45</td>
							</tr>
							<tr>
								<td><img src="/jatimtbl.png" alt="" /></td>
								<td style="text-align: left;">Jawa Timur</td>
								<td style="text-align: right;">45</td>
							</tr>
							<tr>
								<td><img src="/jatimtbl.png" alt="" /></td>
								<td style="text-align: left;">Jawa Timur</td>
								<td style="text-align: right;">45</td>
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
						<h6 class="fw-bold" id="title-card">Lawful Interception Request</h6>
						<a style="color :#219386;" class="fw-bold" href="#!">Go to page</a>
					</div>
					<table id="lawfulllist" class="table table-striped mb-3 mt-3" style="width:100%">
						<thead>
							<tr>
								<th style="width: 10px">Name</th>
								<th />
								<th style="text-align: right;">Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><img src="/jatimtbl.png" alt="" /></td>
								<td style="text-align: left;">Jawa Timur</td>
								<td style="text-align: right;">45</td>
							</tr>
							<tr>
								<td><img src="/jatimtbl.png" alt="" /></td>
								<td style="text-align: left;">Jawa Timur</td>
								<td style="text-align: right;">45</td>
							</tr>
							<tr>
								<td><img src="/jatimtbl.png" alt="" /></td>
								<td style="text-align: left;">Jawa Timur</td>
								<td style="text-align: right;">45</td>
							</tr>
							<tr>
								<td><img src="/jatimtbl.png" alt="" /></td>
								<td style="text-align: left;">Jawa Timur</td>
								<td style="text-align: right;">45</td>
							</tr>
							<tr>
								<td><img src="/jatimtbl.png" alt="" /></td>
								<td style="text-align: left;">Jawa Timur</td>
								<td style="text-align: right;">45</td>
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
						<h6 class="fw-bold" id="title-card">Lawful Interception Request</h6>
						<a style="color :#219386;" class="fw-bold" href="#!">Go to page</a>
					</div>
					<table id="lawfulllist" class="table table-striped mb-3 mt-3" style="width:100%">
						<thead>
							<tr>
								<th style="width: 10px">Name</th>
								<th />
								<th style="text-align: right;">Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><img src="/jatimtbl.png" alt="" /></td>
								<td style="text-align: left; ">Jawa Timur</td>
								<td class="align-items-center" style="text-align: right;">45</td>
							</tr>
							<tr>
								<td><img src="/jatimtbl.png" alt="" /></td>
								<td style="text-align: left;">Jawa Timur</td>
								<td style="text-align: right;">45</td>
							</tr>
							<tr>
								<td><img src="/jatimtbl.png" alt="" /></td>
								<td style="text-align: left;">Jawa Timur</td>
								<td style="text-align: right;">45</td>
							</tr>
							<tr>
								<td><img src="/jatimtbl.png" alt="" /></td>
								<td style="text-align: left;">Jawa Timur</td>
								<td style="text-align: right;">45</td>
							</tr>
							<tr>
								<td><img src="/jatimtbl.png" alt="" /></td>
								<td style="text-align: left;">Jawa Timur</td>
								<td style="text-align: right;">45</td>
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
