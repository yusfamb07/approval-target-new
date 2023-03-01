<script>
	import { onMount } from 'svelte';
	import Select from '../../../../../compenents/Select.svelte';

	const options = {};
	onMount(async () => {
		new DataTable('#incomingmail', {
			bLengthChange: false,
			paging: true,
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
					<h5 style="color: #BAE2F3">Incoming Mail</h5>

					<button
						type="button"
						class="btn btn-secondary add-new"
						data-bs-toggle="modal"
						data-bs-target="#FormModal"
					>
						<img src="/add.svg" alt="" />
						New Letter</button
					>
				</div>
				<table id="incomingmail" class="table mb-3 mt-3" style="width:100%">
					<thead>
						<tr>
							<th>No</th>
							<th>Letter Number</th>
							<th>Date</th>
							<th>Letter Login</th>
							<th>Regarding</th>
							<th>File</th>
							<th>Status</th>
							<th>Disposition</th>
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
								<td><a href="">{post.disposition}</a></td>
								<td
									><span
										class="detail-container"
										data-bs-toggle="modal"
										data-bs-target="#DetailModal1"
										><img src="/icon_action.svg" alt="icon detail" />
										<p>Action</p></span
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
												<hr style="border-top: 1px solid white; width: 100%" />
											</div>
										</div>
										<div class="row">
											<div class="col-md-6">
												<div class="radio-item" style="padding: 24px 0;">
													<div class="d-flex gap-5">
														<div class="d-flex align-items-baseline">
															<span>Klasifikasi :</span>
															<div class="radio-item">
																<input type="checkbox" id="SR" name="gender" value="SR" />
																<label for="SR">SR</label>
															</div>
															<div class="radio-item2">
																<input type="checkbox" id="R" name="gender" value="R" />
																<label for="R">R</label>
															</div>
															<div class="radio-item">
																<input type="checkbox" id="KT" name="gender" value="KT" />
																<label for="KT">KT</label>
															</div>
															<div class="radio-item2">
																<input type="checkbox" id="B" name="gender" value="B" />
																<label for="B">B</label>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-6">
												<div class="radio-item" style="padding: 24px 0;">
													<div class="d-flex align-items-baseline">
														<span>Derajat :</span>
														<div class="radio-item2">
															<input type="checkbox" id="K" name="gender" value="K" />
															<label for="K">K</label>
														</div>

														<div class="radio-item">
															<input type="checkbox" id="SS" name="gender" value="SS" />
															<label for="SS">SS</label>
														</div>
														<div class="radio-item">
															<input type="checkbox" id="SB" name="gender" value="SB" />
															<label for="SB">SB</label>
														</div>
														<div class="radio-item2">
															<input type="checkbox" id="B2" name="gender" value="B" />
															<label for="B2">B</label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-md-12">
												<span class="fw-bold mb-3">Received From</span>
											</div>
										</div>
										<div class="row mt-3">
											<div class="col-md-6">
												<p>Letter Origin</p>
												<div class="input-group mb-3">
													<input
														type="text"
														class="form-control modal-form"
														id="letter-origin"
														aria-describedby="basic-addon3"
														required
													/>
												</div>
											</div>
											<div class="col-md-6">
												<p>Letter Number</p>
												<div class="input-group mb-3">
													<input
														type="text"
														class="form-control modal-form"
														id="letter-number"
														aria-describedby="basic-addon3"
														required
													/>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-md-12">
												<span class="fw-bold mb-3">Agenda</span>
											</div>
										</div>
										<div class="row mt-3">
											<div class="col-md-4">
												<p>Id</p>
												<div class="input-group mb-3">
													<input
														type="text"
														class="form-control modal-form"
														id="id"
														aria-describedby="basic-addon3"
														required
													/>
												</div>
											</div>
											<div class="col-md-4">
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
											<div class="col-md-4">
												<Select />
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

	.radio-item {
		display: flex;
		align-items: baseline;
		position: relative;
		padding: 0 6px;
	}

	.radio-item input[type='checkbox'] {
		display: none;
	}

	.radio-item label {
		display: flex;
		flex-direction: row-reverse;
		align-items: baseline;
		gap: 8px;
	}

	.radio-item label:before {
		content: ' ';
		display: inline-block;
		position: relative;
		top: 5px;
		margin: 0 5px 0 0;
		width: 20px;
		height: 20px;
		background: #2f383b;
		border: 1px solid #365a68;
		background-color: transparent;
	}

	.radio-item input[type='checkbox']:checked + label:after {
		width: 12px;
		height: 12px;
		position: absolute;
		top: 10px;
		left: 36px;
		content: ' ';
		display: block;
		background-repeat: no-repeat;
		background-image: url('/check.svg');
	}
	.radio-item input[type='checkbox']:checked + label:nth-child(odd):after {
		left: 30px;
		position: absolute;
	}

	.radio-item2 {
		display: flex;
		align-items: baseline;
		position: relative;
		padding: 0 6px;
	}

	.radio-item2 input[type='checkbox'] {
		display: none;
	}

	.radio-item2 label {
		display: flex;
		flex-direction: row-reverse;
		align-items: baseline;
		gap: 8px;
	}

	.radio-item2 label:before {
		content: ' ';
		display: inline-block;
		position: relative;
		top: 5px;
		margin: 0 5px 0 0;
		width: 20px;
		height: 20px;
		background: #2f383b;
		border: 1px solid #5e727a;
		background-color: transparent;
	}

	.radio-item2 input[type='checkbox']:checked + label:after {
		width: 12px;
		height: 12px;
		position: absolute;
		top: 10px;
		left: 28px;
		content: ' ';
		display: block;
		background-repeat: no-repeat;
		background-image: url('/check.svg');
	}
</style>
