<script>
	import { onMount } from 'svelte';
	import Navbar from '../../../../../compenents/Navbar.svelte';
	// import Select from '../../../../../compenents/Select.svelte';

	const options = {};
	onMount(async () => {
		new DataTable('#incomingmail', {
			bLengthChange: false,
			paging: true,
			searching: false,
			ordering: true
		});
	});

	export let data;
	const { posts } = data;
</script>

<div class="container mt-3">
	<div class="col-md-12">
		<div class="card">
			<div class="card-body">
				<div class="d-flex justify-content-between mb-4">
					<h5 style="color: #BAE2F3">Outgoing Mail</h5>

					<buttons
						type="button"
						class="btn btn-secondary add-new"
						data-bs-toggle="modal"
						data-bs-target="#FormModal"
					>
						<img src="/filter-letter.svg" alt="" />
						Filter Letter</buttons
					>
				</div>
				<table id="incomingmail" class="table mb-3 mt-3" style="width:100%">
					<thead>
						<tr>
							<th>No</th>
							<th>Letter Number</th>
							<th>Date</th>
							<th>Letter Destination</th>
							<th>Regarding</th>
							<th>File</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{#each posts as post}
							<tr>
								<td>{post.id}</td>
								<td>{post.letter_no}</td>
								<td>{post.letter_origin}</td>
								<td>{post.date}</td>
								<td>{post.regarding}</td>
								<td>{post.file}</td>
								<td><a href="">{post.status}</a></td>
								<td
									><span
										class="detail-container"
										data-bs-toggle="modal"
										data-bs-target="#DetailModal1"
										><img src="/detail-icon.svg" alt="icon detail" />
										<p>Detail</p></span
									></td
								>
							</tr>
						{/each}
					</tbody>
				</table>
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
					<h5 class="modal-title" id="exampleModalLabel">Icoming Mail</h5>
					<button
						type="button"
						class="btn-close btn-close-white "
						data-bs-dismiss="modal"
						aria-label="Close"
					/>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12 mt-3 mb-3">
							<div class="row">
								<div class="col-md-5">
									<ul class="nav nav-pills justify-content-start">
										<li class="nav-item">
											<a class="nav-link active" data-bs-toggle="pill" href="#callin"
												>Incoming Mail Form</a
											>
										</li>
										<li class="nav-item">
											<a class="nav-link" data-bs-toggle="pill" href="#dispositionform"
												>Disposition Form</a
											>
										</li>
									</ul>
								</div>
							</div>

							<div class="tab-content">
								<div class="tab-pane active" id="callin" style="color: white;">
									<div class="mt-3">
										<div class="row gap-2">
											<div class="col-md-3">
												<h6 style="white-space:nowrap">Incoming Mail Form</h6>
											</div>
											<div class="col-md-8">
												<hr
													style="borde-top: 1.2px solid #D4E1E6; height: 1px; vertical-align:middle"
												/>
											</div>
										</div>
										<div class="row">
											<div class="col-md-6">
												<p>Letter Number</p>
												<div class="input-group mb-3">
													<input
														type="text"
														class="form-control modal-form"
														id="no-surat"
														aria-describedby="basic-addon3"
														required
													/>
												</div>
											</div>
											<div class="col-md-6">
												<p>Date</p>
												<div class="input-group mb-3">
													<input
														type="date"
														class="form-control modal-form"
														id="date"
														aria-describedby="basic-addon3"
														placeholder="SRT/12"
														required
													/>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-md-6">
												<p>Letter Origin</p>
												<div class="input-group mb-3">
													<input
														type="text"
														class="form-control modal-form"
														id="no-surat"
														aria-describedby="basic-addon3"
														required
													/>
												</div>
											</div>
											<div class="col-md-6">
												<p>Regarding</p>
												<div class="input-group mb-3">
													<input
														type="text"
														class="form-control modal-form"
														id="regarding"
														aria-describedby="basic-addon3"
														required
													/>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-md-12">
												<p>Upload File</p>
												<div class="input-group mb-3">
													<input
														type="file"
														class="form-control modal-form"
														id="formFile"
														required
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="tab-pane fade" id="dispositionform" style="color: white; ">
									<div class="mt-3">
										<div class="row gap-3">
											<div class="col-md-3">
												<h6 style="white-space:nowrap">Disposition Mail Form</h6>
											</div>
											<div class="col-md-8">
												<hr
													style="border: 1.2px solid #D4E1E6; height: 1px; vertical-align:middle"
												/>
											</div>
										</div>
										<div class="row">
											<div class="col-md-6">
												<div class="d-flex align-items-center gap-2">
													<p class="urgensi">Klasifikasi:</p>

													<div class="d-flex align-items-center gap-2">
														<p class="urgensi">SR</p>
														<input
															class="form-check-input mt-0"
															type="checkbox"
															value="SR"
															required
														/>
													</div>
													<div class="d-flex align-items-center gap-2">
														<p class="urgensi">R</p>
														<input
															class="form-check-input mt-0"
															type="checkbox"
															value="R"
															required
														/>
													</div>
													<div class="d-flex align-items-center gap-2">
														<p class="urgensi">KT</p>
														<input
															class="form-check-input mt-0"
															type="checkbox"
															value="KT"
															required
														/>
													</div>
													<div class="d-flex align-items-center gap-2">
														<p class="urgensi">B</p>
														<input
															class="form-check-input mt-0"
															type="checkbox"
															value="B"
															required
														/>
													</div>
												</div>
												<div class="input-group mb-3">
													<input
														type="date"
														class="form-control modal-form"
														id="date"
														aria-describedby="basic-addon3"
														placeholder="SRT/12"
														required
													/>
												</div>
												<!-- <Select option={[{ value: 'option 1', label: 'option 1' }]} /> -->
												<!-- <Select /> -->
											</div>
											<div class="col-md-6">
												<p>Date</p>
												<div class="input-group mb-3">
													<input
														type="date"
														class="form-control modal-form"
														id="date"
														aria-describedby="basic-addon3"
														placeholder="SRT/12"
														required
													/>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-md-6">
												<p>Letter Origin</p>
												<div class="input-group mb-3">
													<input
														type="text"
														class="form-control modal-form"
														id="no-surat"
														aria-describedby="basic-addon3"
														required
													/>
												</div>
											</div>
											<div class="col-md-6">
												<p>Regarding</p>
												<div class="input-group mb-3">
													<input
														type="text"
														class="form-control modal-form"
														id="regarding"
														aria-describedby="basic-addon3"
														required
													/>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-md-12">
												<p>Upload File</p>
												<div class="input-group mb-3">
													<input
														type="file"
														class="form-control modal-form"
														id="formFile"
														required
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
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

<style>
	.date-container {
		align-items: baseline;
		display: flex;
		gap: 1rem;
	}
	.detail-container {
		cursor: pointer;
		display: flex;
		align-items: baseline;
		align-content: center;
		justify-content: center;
		gap: 0.5rem;
		/* padding-top: 0.5rem; */
		width: 64px;
		height: 23px;
		background: #2f383b;
		border: 1px solid #5e727a;
	}

	.modal-content {
		/* padding: 1.5rem 1.5rem 1.5rem 1.5rem; */
		margin: 3rem 0 0 -7rem;
		width: 720px;
	}
</style>
