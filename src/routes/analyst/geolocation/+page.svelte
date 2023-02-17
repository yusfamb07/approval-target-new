<script>
	import GeoChart from '../../../compenents/GeoChart.svelte';
	import PieChartBinda from '../../../compenents/PieChartBinda.svelte';
	import LineChart from '../../../compenents/LineChart.svelte';
	import { onMount } from 'svelte';
	import MultiSelect from 'svelte-multiselect';
	import Navbar from '../../../compenents/Navbar.svelte';
	import Flatpickr from 'svelte-flatpickr';
	import 'flatpickr/dist/flatpickr.css';
	const ui_libs = [`Svelte`, `React`, `Vue`, `Angular`, `...`];

	let selected = [];

	onMount(async () => {
		new DataTable('#lawfulllist');
		new DataTable('#geolist');
		new DataTable('#msisdnList');
	});

	// onMount(async () => {
	// 	new select2('#notelepon');
	// });
</script>

<Navbar />

<div class="konten">
	<div class="container-fluid mt-3">
		<div class="row mt-4">
			<div class="col-md-12">
				<div class="card">
					<div class="card-body">
						<div class="d-flex justify-content-between mb-3">
							<h6>Request List (Telecomunication)</h6>
						</div>

						<table id="lawfulllist" class="table table-striped mb-6 mt-6" style="width:100%">
							<thead>
								<tr>
									<th>No</th>
									<th>No Surat</th>
									<th>Urgensi</th>
									<th>No Telepon</th>
									<th>Deskripsi</th>
									<th>File</th>
									<th>Status</th>
									<th>Aksi</th>
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
									<td style="color: #219386;">Disetujui </td>
									<td>
										<span
											class="detail-container"
											data-bs-toggle="modal"
											data-bs-target="#DetailModal1"
										>
											<img src="/icon.detail.svg" alt="icon detail" />
											<p>Detail</p>
										</span></td
									>
								</tr>
								<tr>
									<td>1</td>
									<td>SRT/123/123/123</td>
									<td>Nama Urgensi</td>
									<td>6287982920129</td>
									<td>Deskripsi</td>
									<td>Nama File</td>
									<td style="color: #932121;">Tidak Disetujui </td>
									<td>
										<span
											class="detail-container"
											data-bs-toggle="modal"
											data-bs-target="#DetailModal1"
											><img src="/icon.detail.svg" alt="icon detail" />
											<p>Detail</p></span
										></td
									>
								</tr><tr>
									<td>1</td>
									<td>SRT/123/123/123</td>
									<td>Nama Urgensi</td>
									<td>6287982920129</td>
									<td>Deskripsi</td>
									<td>Nama File</td>
									<td style="color: #839321;">Pending </td>
									<td>
										<span
											class="detail-container"
											data-bs-toggle="modal"
											data-bs-target="#DetailModal1"
											><img src="/icon.detail.svg" alt="icon detail" />
											<p>Detail</p></span
										></td
									>
								</tr><tr>
									<td>1</td>
									<td>SRT/123/123/123</td>
									<td>Nama Urgensi</td>
									<td>6287982920129</td>
									<td>Deskripsi</td>
									<td>Nama File</td>
									<td style="color: #219386;">Disetujui </td>
									<td>
										<span
											class="detail-container"
											data-bs-toggle="modal"
											data-bs-target="#DetailModal1"
											><img src="/icon.detail.svg" alt="icon detail" />
											<p>Detail</p></span
										></td
									>
								</tr><tr>
									<td>1</td>
									<td>SRT/123/123/123</td>
									<td>Nama Urgensi</td>
									<td>6287982920129</td>
									<td>Deskripsi</td>
									<td>Nama File</td>
									<td style="color: #219386;">Disetujui </td>
									<td>
										<span
											class="detail-container"
											data-bs-toggle="modal"
											data-bs-target="#DetailModal1"
											><img src="/icon.detail.svg" alt="icon detail" />
											<p>Detail</p></span
										></td
									>
								</tr><tr>
									<td>1</td>
									<td>SRT/123/123/123</td>
									<td>Nama Urgensi</td>
									<td>6287982920129</td>
									<td>Deskripsi</td>
									<td>Nama File</td>
									<td style="color: #219386;">Disetujui </td>
									<td>
										<span
											class="detail-container"
											data-bs-toggle="modal"
											data-bs-target="#DetailModal1"
											><img src="/icon.detail.svg" alt="icon detail" />
											<p>Detail</p></span
										></td
									>
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
							<h6>Lawful Interception Request <img src="/down.png" alt="" /></h6>
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
						<h5 class="modal-title" id="exampleModalLabel">Lawful Interception Form Request</h5>
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
									class="form-control modal-form mb-3 "
									id="notelepon"
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
								<!-- <code>selected = {JSON.stringify(selected)}</code> -->
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
								<input class="form-control mb-3 modal-form" type="file" id="formFile" required />
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button
							type="submit"
							class="btn btn-secondary add-new"
							data-bs-toggle="modal"
							data-bs-target="#FeedbackModal">Kirim Permohonan</button
						>
						<button type="button" class="btn btn-secondary add-new" data-bs-dismiss="modal"
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
						<h5 class="modal-title" id="exampleModalLabel">Binda Jakarta</h5>
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
								<p>Device</p>
							</div>
							<div class="col-md-1">
								<p>:</p>
							</div>
							<div class="col-md-6">
								<p id="device">APPLE INC APPLE IPHONE 11 PRO MAX (A2220)</p>
							</div>
							<div class="col-md-12">
								<h6 class="font-weight-bold">Tapping Recording</h6>
							</div>
							<div class="col-md-4">
								<p>Record Title</p>
							</div>
							<div class="col-md-1">
								<p>:</p>
							</div>
							<div class="col-md-6">
								<p id="record-title">Rekaman dari Bondowoso</p>
							</div>
							<div class="col-md-12 mb-3">
								<audio class="w-100 audio-player" controls autoplay>
									<source src="#" type="audio/ogg" />
								</audio>
							</div>
							<div class="col-md-12">
								<textarea
									class="form-control mb-3 modal-form"
									id="rekaman"
									placeholder="Tulis rekaman disini ........"
									rows="3"
									required
								/>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button
							type="submit"
							class="btn btn-secondary add-new"
							data-bs-toggle="modal"
							data-bs-target="#FeedbackModal">Simpan Laporan</button
						>
						<button type="button" class="btn btn-secondary add-new" data-bs-dismiss="modal"
							>Batalkan</button
						>
					</div>
				</div>
			</div>
		</div>
		<div
			class="modal fade"
			id="DetailModal1"
			tabindex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Binda Jakarta</h5>
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
								<h6 class="font-weight-bold">Informasi Permintaan</h6>
							</div>
						</div>
						<div class="cols-md-12 d-flex column-gap-3" id="outer-container">
							<div class="cols-md-6 container-input">
								<div class="mb-3 ">
									<label for="basic-url" class="form-label  " id="input-label">Nomor Surat</label>

									<input
										type="text"
										class="form-control input-letter"
										id="basic-url"
										aria-describedby="basic-addon3"
										placeholder="SRT/12"
										disabled
									/>
								</div>
							</div>
							<div class="cols-md-6 container-input">
								<div class="mb-3">
									<label for="basic-url" class="form-label " id="input-label">Nomor Surat</label>

									<input
										type="text"
										class="form-control input-letter"
										id="basic-url"
										aria-describedby="basic-addon3"
										placeholder="SRT/12"
										disabled
									/>
								</div>
							</div>
						</div>
						<div class="cols-md-12 container-desc">
							<p>Deskripsi</p>
							<div>
								<p>
									Synergistically enhance market positioning value with flexible paradigms.
									Enthusiastically seize state of the art leadership skills via reliable e-services.
									Enthusiastically enable interactive leadership skills rather than orthogonal
									vortals. Energistically evisculate viral e-markets.
								</p>
							</div>
						</div>
						<div class="cols-md-12 container-file mt-3">
							<div class="cols-md-3 ">
								<p>File</p>
								<div class="d-flex align-self-center column-gap-3 inner-container-file">
									<img src="/File-icon.svg" alt="" />
									<div class="name-file-container">
										<p class="fw-bold">Nama-file.pdf</p>
										<p>Size: 12mb</p>
									</div>
								</div>
							</div>
						</div>
						<div class="cols-md-12 mt-3">
							<p class="mb-3">Nomor Telepon</p>
							<div class="d-flex justify-content-between">
								<div class="card-number">
									<div class="number-container">
										<p class="fw-bold">Nomor</p>
										<p>628129129129 <span>(Duplikasi No)</span></p>
									</div>
									<div>
										<p class="fw-bold">NIK</p>
										<p>3315076705920001</p>
									</div>
									<div>
										<p class="fw-bold">Tanggal Registrasi</p>
										<p>2019-11-26</p>
									</div>
									<div
										class="button-number d-flex align-self-center column-gap-3 pe-auto justify-content-center "
										data-bs-toggle="modal"
										data-bs-target="#cekNumberModal"
									>
										<img src="/people-search.svg" alt="people search icon" />
										<p style="margin:0">Cek Nomor</p>
									</div>
								</div>
								<div class="card-number">
									<div class="number-container">
										<p class="fw-bold">Nomor</p>
										<p>628129129129 <span>(Duplikasi No)</span></p>
									</div>
									<div>
										<p class="fw-bold">NIK</p>
										<p>3315076705920001</p>
									</div>
									<div>
										<p class="fw-bold">Tanggal Registrasi</p>
										<p>2019-11-26</p>
									</div>
									<div
										class="button-number d-flex align-self-center column-gap-3 pe-auto justify-content-center "
										data-bs-toggle="modal"
										data-bs-target="#cekNumberModal"
									>
										<img src="/people-search.svg" alt="people search icon" />
										<p style="margin:0">Cek Nomor</p>
									</div>
								</div>
								<div class="card-number">
									<div class="number-container">
										<p class="fw-bold">Nomor</p>
										<p>628129129129 <span>(Duplikasi No)</span></p>
									</div>
									<div>
										<p class="fw-bold">NIK</p>
										<p>3315076705920001</p>
									</div>
									<div>
										<p class="fw-bold">Tanggal Registrasi</p>
										<p>2019-11-26</p>
									</div>
									<div
										class="button-number d-flex align-self-center column-gap-3 pe-auto justify-content-center "
										data-bs-toggle="modal"
										data-bs-target="#cekNumberModal"
									>
										<img src="/people-search.svg" alt="people search icon" />
										<p style="margin:0">Cek Nomor</p>
									</div>
								</div>
								<div class="card-number">
									<div class="number-container">
										<p class="fw-bold">Nomor</p>
										<p>628129129129 <span>(Duplikasi No)</span></p>
									</div>
									<div>
										<p class="fw-bold">NIK</p>
										<p>3315076705920001</p>
									</div>
									<div>
										<p class="fw-bold">Tanggal Registrasi</p>
										<p>2019-11-26</p>
									</div>
									<div
										class="button-number d-flex align-self-center column-gap-3 pe-auto justify-content-center "
										data-bs-toggle="modal"
										data-bs-target="#cekNumberModal"
									>
										<img src="/people-search.svg" alt="people search icon" />
										<p style="margin:0">Cek Nomor</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="modal fade"
			id="cekNumberModal"
			tabindex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<div class="modal-content modal-number">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">
							Binda Jakarta <span>(628129129129)</span>
						</h5>
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
								<h6 class="font-weight-bold">Informasi Peta</h6>
							</div>
							<div class="col-md-12 geo-container">
								<GeoChart width="835" height="315" />
							</div>
							<div class="col-md-12 d-flex column-gap-3 last-location-container">
								<div class="last-location">
									<p>History Location</p>

									<div class="update-container">
										<table id="" class="table table-striped mb-3 mt-3" style="width:100%">
											<thead>
												<tr>
													<th>Waktu</th>
													<th>Lokasi</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>12/12/2022 20:00</td>
													<td
														>Jl. Kirai, Cipete Utara, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah
														Khusus Ibukota Jakarta</td
													>
												</tr>
												<tr>
													<td>12/12/2022 20:00</td>
													<td
														>Jl. Kirai, Cipete Utara, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah
														Khusus Ibukota Jakarta</td
													>
												</tr>
												<tr>
													<td>12/12/2022 20:00</td>
													<td
														>Jl. Kirai, Cipete Utara, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah
														Khusus Ibukota Jakarta</td
													>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div class="get-contact">
									<p>Get Contact</p>
									<div class="card-get-contact d-flex flex-column">
										<div class="inner-contact">
											<p>Name <span> : Michael Jackson</span></p>
											<p>Phone Number<span>: 628129129129</span></p>
										</div>
										<div class="outer-tag-container">
											<div class="tag-container"># <span>Michael Jackson</span></div>
											<div class="tag-container"># <span>Michael Jackson</span></div>
											<div class="tag-container"># <span>Michael Jackson</span></div>
											<div class="tag-container"># <span>Michael Jackson</span></div>
											<div class="tag-container"># <span>Michael Jackson</span></div>
											<div class="tag-container"># <span>Michael Jackson</span></div>
											<div class="tag-container"># <span>Michael Jackson</span></div>
											<div class="tag-container"># <span>Michael Jackson</span></div>
											<div class="tag-container"># <span>Michael Jackson</span></div>
											<div class="tag-container"># <span>Michael Jackson</span></div>
											<div class="tag-container"># <span>Michael Jackson</span></div>
											<div class="tag-container"># <span>Michael Jackson</span></div>
											<div class="tag-container"># <span>Michael Jackson</span></div>
											<div class="tag-container"># <span>Michael Jackson</span></div>
											<div class="tag-container"># <span>Michael Jackson</span></div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12 notes-container">
								<p>Catatan</p>
								<div class="container-notes-inner">
									<form action="">
										<div class="form-header d-flex justify-content-between">
											<p>Silahkan Tulis Catatan</p>
											<span
												><img style="margin-right: .5rem;" src="/reset-icon.svg" alt="" /> Reset</span
											>
										</div>
										<textarea class="tarea-note" name="notes" id="" cols="88" rows="5" />
										<button class="save-button" type="submit">Simpan</button>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer footer-number">
						<button
							type="submit"
							class="btn btn-secondary confirm"
							data-bs-toggle="modal"
							data-bs-target="#FeedbackModal">Disetujui</button
						>
						<button type="button" class="btn btn-secondary backward" data-bs-dismiss="modal"
							>Kembali ke Pemohon</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.detail-container {
		cursor: pointer;
		border: 1px solid;
		display: flex;
		align-items: baseline;
		align-content: center;
		justify-content: center;
		gap: 0.5rem;
		/* padding-top: 0.5rem; */
		width: 64px;
		height: 23px;
		background: rgba(35, 40, 46, 0.86);
	}
	/* modal detail */
	.modal-dialog {
		justify-content: center;
		padding: 0;
		/* margin: 0; */
	}
	.modal-content {
		padding: 1.5rem 1.5rem 1.5rem 2.5rem;
		margin: 3rem 0 0 -11rem;
		height: 48.563rem;
		width: 58.12rem;
	}
	.modal-header {
		padding-bottom: 0;
		margin-bottom: 1.3rem;
	}
	.modal-body {
		font-size: 1rem;
		padding-top: 0;
		display: flex;
		flex-direction: column;
	}

	.font-weight-bold {
		margin: 0;
		margin-bottom: 1.25rem;
	}

	#input-label {
		color: #fbfdff;
	}
	#outer-container {
		display: flex;
	}
	.container-input {
		width: 50%;
	}

	.container-desc div {
		background: #282f36;
		border: 1px solid #404952;
		font-weight: 400;
		font-size: 1rem;
		padding: 0.75rem;
		font-family: 'Chakra Petch';
	}
	.inner-container-file {
		width: 11.25rem;
		padding: 0.375rem 1.042rem;
		background: #282f36;
		border: 1px solid #404952;
	}
	.name-file-container p {
		margin: 0;
		padding: 0;
	}
	.card-number-container {
		gap: 2rem;
	}
	.card-number {
		/* height: 219px; */
		/* width: 180px; */
		padding: 0.75rem;
		background: #282f36;
		border: 1px solid #404952;
	}
	.button-number {
		background: #2a2e31;
		border: 1px solid #5d6167;
		cursor: pointer;
		margin-top: 1.3rem;
		padding: 0.25rem 0;
	}
	.card-number p {
		font-size: 0.75rem;
		margin: 0;
		margin-bottom: 0.375rem;
		/* padding: 0; */
	}

	.input-letter {
		background: #282f36;
		border: 1px solid #404952;
		color: #fbfdff;
	}
	.input-letter::placeholder {
		color: #b3b5b6;
	}
	/* modal detail */

	/* cek nomor detail */
	.modal-number {
		height: auto;
		color: #fbfdff;
	}
	.geo-container {
		/* border: 1px solid #404952; */
		margin-bottom: 11rem;
	}

	.update-container {
		background: #282f36;
		border-width: 1px 0px;
		border-style: solid;
		border-color: #404952;
		color: #fbfdff;
	}

	.update-container {
		padding: 1.03rem 1rem;
	}

	.last-location,
	.get-contact {
		width: 50%;
		/* background: #282f36; */
		border-width: 0px 0px 1px 0;
		border-style: solid;
		border-color: #404952;
	}
	.card-get-contact {
		background: #282f36;
		border-width: 1px 0px;
		border-style: solid;
		border-color: #404952;
		padding: 1.25rem 0.625rem;
		height: 32rem;
	}
	.tag-container {
		color: #fbfdff;
		padding: 0.5rem 1.28rem;
		border-bottom: 1px solid #404952;
		font-size: 0.875rem;
	}
	.outer-tag-container {
		height: 32rem;
		background: #282f36;
		border-width: 1px 0px;
		border-style: solid;
		border-color: #404952;
		overflow-x: hidden;
		overflow-y: scroll;
	}
	.inner-contact p {
		color: #fbfdff;
		margin-bottom: 1.25rem;
		/* font-weight: bold; */
		font-size: 16px;
	}
	.notes-container {
		margin-top: 1.5rem;
	}
	.notes-container p,
	.notes-container span {
		color: #fbfdff;
	}
	.notes-container span {
		font-size: 12px;
	}
	.container-notes-inner {
		padding: 0.75rem 1.25rem;
		background: #282f36;
		border-width: 1px 0px;
		border-style: solid;
		border-color: #404952;
	}
	.tarea-note {
		width: 790px;
		margin-bottom: 2.13rem;
	}
	.save-button {
		color: #fbfdff;
		background-color: #2a2e31;
		border: 1px solid #5d6167;
		padding: 0.125rem 3.6rem;
		/* width: 9.75rem;
		height: 1.7rem; */
	}
	.save-button,
	.confirm,
	.backward {
		width: 9.75rem;
		height: 2.2rem;
		background: #2a2e31;
		border: 1px solid #5d6167;
		color: #fbfdff;
		font-size: 0.75rem;
		border-radius: 0;
	}

	tbody td {
		font-size: 0.875rem;
	}
	/* cek nomor detail */
</style>
