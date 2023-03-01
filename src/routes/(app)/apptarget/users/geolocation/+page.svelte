<script>
	import PieChartBinda from '../../../../../compenents/PieChartBinda.svelte';
	import LineChart from '../../../../../compenents/LineChart.svelte';
	import GeoChart from '../../../../../compenents/GeoChart.svelte';
	import { onMount } from 'svelte';
	import MultiSelect from 'svelte-multiselect';
	import { DateInput } from 'date-picker-svelte';
	import Flatpickr from 'svelte-flatpickr';
	import 'flatpickr/dist/flatpickr.css';
	import Navbar from '../../../../../compenents/Navbar.svelte';

	const ui_libs = [`Svelte`, `React`, `Vue`, `Angular`, `...`];

	let selected = [];

	onMount(async () => {
		new DataTable('#geolist');
	});
</script>

<div class="konten">
	<div class="container">
		<div class="row mt-4">
			<div class="col-md-12">
				<div class="card">
					<div class="card-body">
						<div class="d-flex justify-content-between">
							<h6>Request List (Geolocation )</h6>
							<div class="d-flex align-items-center mb-3">
								<button
									type="button"
									class="btn btn-secondary add-new"
									data-bs-toggle="modal"
									data-bs-target="#FormModal"
								>
									<img src="/add.svg" alt="" />
									Permintaan Baru</button
								>
							</div>
						</div>

						<table id="geolist" class="table table-striped mb-5 mt-5" style="width:100%">
							<thead>
								<tr>
									<th>No</th>
									<th>No Surat</th>
									<th>Urgensi</th>
									<th>No Telepon</th>
									<th>Deskripsi</th>
									<th>File</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>SRT/123/123/123</td>
									<td>Nama Urgensi</td>
									<td>6287982920129</td>
									<td>Deskripsi</td>
									<td>Nama File</td>
									<td>
										<a
											href="#"
											data-bs-toggle="modal"
											data-bs-target="#DetailModal"
											style="color: #219386;">Disetujui</a
										>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>SRT/123/123/123</td>
									<td>Nama Urgensi</td>
									<td>6287982920129</td>
									<td>Deskripsi</td>
									<td>Nama File</td>
									<td>
										<a
											href="#"
											data-bs-toggle="modal"
											data-bs-target="#DetailModal"
											style="color: #932121;">Tidak Disetujui</a
										>
									</td>
								</tr><tr>
									<td>1</td>
									<td>SRT/123/123/123</td>
									<td>Nama Urgensi</td>
									<td>6287982920129</td>
									<td>Deskripsi</td>
									<td>Nama File</td>
									<td>
										<a
											href="#"
											data-bs-toggle="modal"
											data-bs-target="#DetailModal"
											style="color: #839321;">Pending</a
										>
									</td>
								</tr><tr>
									<td>1</td>
									<td>SRT/123/123/123</td>
									<td>Nama Urgensi</td>
									<td>6287982920129</td>
									<td>Deskripsi</td>
									<td>Nama File</td>
									<td>
										<a
											href="#"
											data-bs-toggle="modal"
											data-bs-target="#DetailModal"
											style="color: #219386;">Disetujui</a
										>
									</td>
								</tr><tr>
									<td>1</td>
									<td>SRT/123/123/123</td>
									<td>Nama Urgensi</td>
									<td>6287982920129</td>
									<td>Deskripsi</td>
									<td>Nama File</td>
									<td>
										<a
											href="#"
											data-bs-toggle="modal"
											data-bs-target="#DetailModal"
											style="color: #219386;">Disetujui</a
										>
									</td>
								</tr><tr>
									<td>1</td>
									<td>SRT/123/123/123</td>
									<td>Nama Urgensi</td>
									<td>6287982920129</td>
									<td>Deskripsi</td>
									<td>Nama File</td>
									<td>
										<a
											href="#"
											data-bs-toggle="modal"
											data-bs-target="#DetailModal"
											style="color: #219386;">Disetujui</a
										>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div class="row mt-4">
			<div class="col-md-6">
				<div class="card" style="height: 470px;">
					<div class="card-body">
						<div class="d-flex justify-content-between">
							<h6 class="mt-2">Request Statistics</h6>
							<div class="d-flex align-items-center gap-2">
								<p class="mt-3 ">Filter</p>
								<Flatpickr
									options={{
										altInput: true,
										altFormat: 'Y',
										dateFormat: 'Y-m-d'
										// plugins: [
										// 	new monthSelectPlugin({
										// 		shorthand: true, //defaults to false
										// 		dateFormat: 'm.y', //defaults to "F Y"
										// 		altFormat: 'F Y', //defaults to "F Y"
										// 		theme: 'dark' // defaults to "light"
										// 	})
										// ]
									}}
									id="flatpickr"
									class="filter-form flatpickr"
									placeholder=" 2023"
								/>
							</div>
						</div>
						<div class="mt-3">
							<LineChart />
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="card" style="height: 470px;">
					<div class="card-title" />
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
									Geolocation Request
								</a>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li><a class="dropdown-item" href="#!">Lawful Interception Request</a></li>
									<li><a class="dropdown-item" href="#!">Geolocation Request</a></li>
									<li><a class="dropdown-item" href="#!">Telecomunication Request</a></li>
								</ul>
							</div>
						</div>
						<div class="mt-5">
							<PieChartBinda />
						</div>
					</div>
				</div>
			</div>
		</div>

		<div
			class="modal fade"
			id="FormModal"
			tabindex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Geolocation Form Request</h5>
						<button
							type="button"
							class="btn-close btn-close-white"
							data-bs-dismiss="modal"
							aria-label="Close"
						/>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-md-12">
								<p>Nomor Surat</p>
								<div class="input-group mb-3">
									<input
										type="text"
										class="form-control modal-form"
										id="no-surat"
										aria-describedby="basic-addon3"
										placeholder="SRT/12"
										required
									/>
								</div>
							</div>
							<p>Urgensi</p>
							<div class="col-md-6">
								<div class="d-flex align-items-center">
									<input class="form-check-input mt-0" type="checkbox" value="Ideologi" required />
									<p class="urgensi">Ideologi</p>
								</div>
								<div class="d-flex align-items-center">
									<input class="form-check-input mt-0" type="checkbox" value="Politik" required />
									<p class="urgensi">Politik</p>
								</div>
								<div class="d-flex align-items-center">
									<input class="form-check-input mt-0" type="checkbox" value="Ekononmi" required />
									<p class="urgensi">Ekononmi</p>
								</div>
							</div>
							<div class="col-md-6 ">
								<div class="d-flex align-items-center">
									<input class="form-check-input mt-0" type="checkbox" value="Social" required />
									<p class="urgensi">Social Budaya</p>
								</div>
								<div class="d-flex align-items-center">
									<input
										class="form-check-input mt-0"
										type="checkbox"
										value="Pertahanan"
										required
									/>
									<p class="urgensi">Pertahanan dan Keamanan</p>
								</div>
							</div>
							<div class="col-md-12 mt-3">
								<p>No Telepon Target</p>
								<!-- <select
									class="form-control select2 modal-form mb-3 "
									multiple=""
									data-placeholder="Select a State"
									style="width: 100%;"
									tabindex="-1"
									aria-hidden="true"
									required
								>
									<option>Alabama</option>
									<option>Alaska</option>
									<option>California</option>
									<option>Delaware</option>
									<option>Tennessee</option>
									<option>Texas</option>
									<option>Washington</option>
								</select> -->
								<div class="mb-3">
									<MultiSelect bind:selected options={ui_libs}>
										<span style=" width: 20em; height: 20em;" />
									</MultiSelect>
								</div>
							</div>
							<div class="col-md-12">
								<p>Deskripsi</p>
								<textarea class="form-control mb-3 modal-form" id="deskripsi" rows="3" required />
							</div>
							<div class="col-md-12 mb-3">
								<p>Upload File</p>
								<input
									class="form-control mb-3 modal-form-upload"
									type="file"
									id="formFile"
									required
								/>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button
							type="submit"
							class="btn btn-secondary submit-btn"
							data-bs-toggle="modal"
							data-bs-target="#FeedbackModal">Kirim Permohonan</button
						>
						<button type="button" class="btn btn-secondary submit-btn" data-bs-dismiss="modal"
							>Batalkan</button
						>
					</div>
				</div>
			</div>
		</div>

		<div
			class="modal fade"
			id="FeedbackModal"
			tabindex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header" />
					<div class="modal-body">
						<div class="container">
							<div class="d-flex justify-content-center align-items-center mt-5">
								<img src="/success.svg" alt="" />
							</div>
							<div class="text-center mt-5">
								<h5>Permohonan Berhasil <br />Dikirim</h5>
								<p>Silahkan tunggu status konfirmasi permohonan di <br /> permohonan</p>
							</div>
						</div>
					</div>
					<div class="modal-footer" />
				</div>
			</div>
		</div>

		<div
			class="modal fade"
			id="DetailModal"
			tabindex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Geolocation Target</h5>
						<button
							type="button"
							class="btn-close btn-close-white "
							data-bs-dismiss="modal"
							aria-label="Close"
						/>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-md-12">
								<h6 class="font-weight-bold">Data Information</h6>
							</div>
							<div class="col-md-4">
								<p>NIK</p>
							</div>
							<div class="col-md-1">
								<p>:</p>
							</div>
							<div class="col-md-6">
								<p id="nik">3746389047368497</p>
							</div>
							<div class="col-md-4">
								<p>MSISDN</p>
							</div>
							<div class="col-md-1">
								<p>:</p>
							</div>
							<div class="col-md-6">
								<p id="msisdn">0826371829192</p>
							</div>
							<div class="col-md-4">
								<p>Tanggal Registrasi</p>
							</div>
							<div class="col-md-1">
								<p>:</p>
							</div>
							<div class="col-md-6">
								<p id="device">14/Oktober/2022</p>
							</div>
							<div class="col-md-4">
								<p>Device</p>
							</div>
							<div class="col-md-1">
								<p>:</p>
							</div>
							<div class="col-md-6">
								<p id="device">APPLE INC APPLE IPHONE 11 PRO MAX (A2220)</p>
							</div>
							<div class="col-md-12 mb-2">
								<h6 class="font-weight-bold">Geolocation Information</h6>
							</div>
							<div class="col-md-12">
								<div class="card mb-3" style="	background-color: #384149;">
									<div class="row mt-3 mb-2">
										<div class="col-md-4 ">
											<p>Target Location</p>
										</div>
										<div class="col-md-1">
											<p>:</p>
										</div>
										<div class="col-md-6">
											<p id="target-location">
												Keluarhan Pulo, Kebayoran Baru, Jakarta Selatan, DKI Jakarta
											</p>
										</div>
										<div class="col-md-4">
											<p>Target Time</p>
										</div>
										<div class="col-md-1">
											<p>:</p>
										</div>
										<div class="col-md-6">
											<p id="target-time">13:12 14/Oktober/2022</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<GeoChart width="465" height="215" />
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button
							type="submit"
							class="btn btn-secondary submit-btn"
							data-bs-toggle="modal"
							data-bs-target="#FeedbackModal">Simpan Laporan</button
						>
						<button type="button" class="btn btn-secondary submit-btn" data-bs-dismiss="modal"
							>Batalkan</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
