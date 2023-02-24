<script>
	import PieChart from '../../../../compenents/PieChart.svelte';
	import LineChart from '../../../../compenents/LineChart.svelte';
	import { onMount } from 'svelte';
	import Navbar from '../../../../compenents/Navbar.svelte';
	import BarChartNew from '../../../../compenents/BarChartNew.svelte';

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
		<h5 class="fw-bold" id="welcome-txt">Welcome, Administration Staff</h5>
	</div>

	<div class="row mt-4">
		<div class="col-md-9">
			<div class="row">
				<div class="col-md-4">
					<div class="card">
						<div class="card-body">
							<div class="d-flex justify-content-between">
								<h5 style="color: #BAE2F3">Letter In</h5>
								<div class=" d-flex align-items-center justify-content-center icon-box ">
									<img src="/letterin.svg" alt="" />
								</div>
							</div>
							<h1 class="display-2 mb-4" style="color: #BAE2F3; text-align :center;">342</h1>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="card">
						<div class="card-body">
							<div class="d-flex justify-content-between">
								<h5 style="color: #BAE2F3">Letter Out</h5>
								<div class=" d-flex align-items-center justify-content-center icon-box ">
									<img src="/letterout.svg" alt="" />
								</div>
							</div>
							<h1 class="display-2 mb-4" style="color: #BAE2F3; text-align :center;">342</h1>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="card">
						<div class="card-body">
							<div class="d-flex justify-content-between">
								<h5 style="color: #BAE2F3">Letter Total</h5>
								<div class=" d-flex align-items-center justify-content-center icon-box ">
									<img src="/lettertotal.svg" alt="" />
								</div>
							</div>
							<h1 class="display-2 mb-4" style="color: #BAE2F3; text-align :center;">342</h1>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-12 mt-4">
				<div class="card">
					<div class="card-body">
						<h5 style="color: #BAE2F3">Statsistic Letter</h5>
						<BarChartNew />
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="card ">
				<div class="card-body">
					<div class="mb-4">
						<h5 style="color: #BAE2F3">Notification</h5>
					</div>
					<div class="notif">
						<div class="d-flex align-items-start gap-2">
							<p style="font-size: 12px;  white-space: nowrap;">13:00/12/12/2001</p>
							<p class="fw-bold" style="color: #BAE2F3; font-size: 12px;">
								New Confirmation from Direktur 5.5
							</p>
						</div>
						<hr style="border: 1.2px solid #D4E1E6;" />
						<div class="d-flex align-items-start gap-2">
							<p style="font-size: 12px;  white-space: nowrap;">13:00/12/12/2001</p>
							<p class="fw-bold" style="color: #BAE2F3; font-size: 12px;">
								New Confirmation from Direktur 5.5
							</p>
						</div>
						<hr style="border: 1.2px solid #D4E1E6;" />
						<div class="d-flex align-items-start gap-2">
							<p style="font-size: 12px;  white-space: nowrap;">13:00/12/12/2001</p>
							<p class="fw-bold" style="color: #BAE2F3; font-size: 12px;">
								New Confirmation from Direktur 5.5
							</p>
						</div>
						<hr style="border: 1.2px solid #D4E1E6;" />
						<div class="d-flex align-items-start gap-2">
							<p style="font-size: 12px;  white-space: nowrap;">13:00/12/12/2001</p>
							<p class="fw-bold" style="color: #BAE2F3; font-size: 12px;">
								New Confirmation from Direktur 5.5
							</p>
						</div>
						<hr style="border: 1.2px solid #D4E1E6;" />
						<div class="d-flex align-items-start gap-2">
							<p style="font-size: 12px;  white-space: nowrap;">13:00/12/12/2001</p>
							<p class="fw-bold" style="color: #BAE2F3; font-size: 12px;">
								New Confirmation from Direktur 5.5
							</p>
						</div>
						<hr style="border: 1.2px solid #D4E1E6;" />
						<div class="d-flex align-items-start gap-2">
							<p style="font-size: 12px;  white-space: nowrap;">13:00/12/12/2001</p>
							<p class="fw-bold" style="color: #BAE2F3; font-size: 12px;">
								New Confirmation from Direktur 5.5
							</p>
						</div>
						<hr style="border: 1.2px solid #D4E1E6;" />
						<div class="d-flex align-items-start gap-2">
							<p style="font-size: 12px;  white-space: nowrap;">13:00/12/12/2001</p>
							<p class="fw-bold" style="color: #BAE2F3; font-size: 12px;">
								New Confirmation from Direktur 5.5
							</p>
						</div>
						<hr style="border: 1.2px solid #D4E1E6;" />
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="row mt-4">
		<div class="col-md-12">
			<div class="card">
				<div class="card-body">
					<h5 style="color: #BAE2F3">Statsistic Letter</h5>
					<LineChart />
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
