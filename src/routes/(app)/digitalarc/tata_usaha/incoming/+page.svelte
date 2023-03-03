<script>
	import { onMount } from 'svelte';
	import Select from '../../../../../compenents/Select.svelte';
	import { page } from '$app/stores';

	const options = {};
	onMount(async () => {
		new DataTable('#incomingmail', {
			bLengthChange: false,
			paging: true,
			ordering: true
		});
	});
	let questions = [
		{ id: 1, text: `Option 1` },
		{ id: 2, text: `Option 2` },
		{ id: 3, text: `Option 3` }
	];

	let selected;

	let answer = '';

	export let data;
	const { posts } = data;
	console.log(posts.id);
</script>

<div class="container mt-3">
	<div class="col-md-12">
		<div class="card">
			<div class="card-body">
				<div class="d-flex bd-highlight mb-3">
					<div class="p-2 flex-grow-1 bd-highlight">
						<h5 style="color: #BAE2F3">Incoming Mail</h5>
					</div>

					<div class="p-2 bd-highlight">
						<button
							type="button"
							class="btn btn-secondary add-new"
							data-bs-toggle="modal"
							data-bs-target="#FormModal"
						>
							<img src="/filter-letter.svg" alt="" />
							Filter Letter</button
						>
					</div>
					<div class="p-2 bd-highlight">
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
								<td
									><a href="#!" data-bs-toggle="modal" data-bs-target="#FormModalDetail"
										>{post.disposition}</a
									></td
								>
								<td>
									<div class="dropdown ">
										<button
											type="button"
											class="btn btn-secondary add-detail"
											id="dropdownMenuLink"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<img src="/icon_action.svg" alt="" />
											Action</button
										>
										<ul
											class="dropdown-menu detail"
											style="width:30px; "
											aria-labelledby="dropdownMenuLink"
										>
											<li class="p-1">
												<a
													class="d-flex align-items-center gap-2"
													id="txt-link"
													href="/digitalarc/tata_usaha/incoming/detail-incoming"
													><img class="iconnav" src="/detail.svg" alt="" /> Detail</a
												>
											</li>

											<li class="p-1">
												<a
													class="d-flex align-items-center gap-2"
													id="txt-link"
													href="/digitalarc/tata_usaha/incoming/edit-incoming"
													><img class="iconnav" src="/edit.svg" alt="" /> Edit</a
												>
											</li>

											<li class="p-">
												<a
													class="d-flex align-items-center gap-2"
													id="txt-link"
													href="apptarget/users/geolocation"
													><img class="iconnav" src="/send.svg" alt="" /> Send</a
												>
											</li>
										</ul>
									</div>
								</td>
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
						class="btn-close btn-close-white dropdown "
						data-bs-dismiss="modal"
						aria-label="Close"
					/>
				</div>

				<div class="modal-body">
					<div class="row">
						<div class="col-md-12 mt-3 mb-3">
							<div class="tab">
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
							<div class="row">
								<div class="col-md-5" />
							</div>

							<div class="tab-content">
								<div class="tab-pane active" id="callin" style="color: white;">
									<div class="mt-3">
										<div class="d-flex align-items-center gap-1 text-white">
											<span style="width: 30%;">Incoming Mail Form</span>
											<hr style="border-top: 1px solid white; width: 100%" />
										</div>

										<div class="row mt-3">
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
										<div class="d-flex align-items-center gap-1 text-white">
											<span style="width: 30%;">Disposition Mail Form</span>
											<hr style="border-top: 1px solid white; width: 100%" />
										</div>

										<div class="row">
											<div class="col-md-6">
												<div class="radio-item" style="padding: 24px 0;">
													<div class="d-flex gap-5">
														<div class="d-flex align-items-baseline">
															<span>Klasifikasi :</span>
															<div class="radio-item label2">
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
												<p>Attachment</p>
												<select
													value={selected}
													on:change={() => (answer = '')}
													class="form-select form-select-md  modal-form"
													aria-label=".form-select-sm example"
												>
													{#each questions as question}
														<option value={question}>
															{question.text}
														</option>
													{/each}
												</select>
												<!-- <select value={selected} on:change={() => (answer = '')}>
													{#each questions as question}
														<option value={question}>
															{question.text}
														</option>
													{/each}
												</select> -->
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
	<div
		class="modal fade"
		id="FormModalDetail"
		tabindex="-1"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Detail Disposition</h5>
					<button
						type="button"
						class="btn-close btn-close-white dropdown "
						data-bs-dismiss="modal"
						aria-label="Close"
					/>
				</div>

				<div class="modal-body">
					<div class="row">
						<div class="col-md-12 mt-3 mb-3">
							<div class="mt-3">
								<div class="row gap-2">
									<div class="d-flex align-items-center gap-1 text-white">
										<span style="width: 20%;">Disposition Sheet</span>
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
								</div>
								<div class="row">
									<div class="col-md-12">
										<span>Destination to</span>
										<div class="d-flex flex-wrap">
											<div class="radio-item3">
												<input
													type="checkbox"
													id="KASUBDIT 5.1"
													name="gender"
													value="KASUBDIT 5.1"
												/>
												<label for="KASUBDIT 5.1">KASUBDIT 5.1</label>
											</div>
											<div class="radio-item3">
												<input
													type="checkbox"
													id="KASUBDIT 5.2"
													name="gender"
													value="KASUBDIT 5.2"
												/>
												<label for="KASUBDIT 5.2">KASUBDIT 5.2</label>
											</div>
											<div class="radio-item3">
												<input
													type="checkbox"
													id="KASUBDIT 5.3"
													name="gender"
													value="KASUBDIT 5.3"
												/>
												<label for="KASUBDIT 5.3">KASUBDIT 5.3</label>
											</div>
											<div class="radio-item3">
												<input
													type="checkbox"
													id="AGEN MADYA 55"
													name="gender"
													value="AGEN MADYA 55"
												/>
												<label for="AGEN MADYA 55">AGEN MADYA 55</label>
											</div>
											<div class="radio-item3">
												<input
													type="checkbox"
													id="KASUBDIT 5.4"
													name="gender"
													value="KASUBDIT 5.4"
												/>
												<label for="KASUBDIT 5.4">KASUBDIT 5.4</label>
											</div>
											<div class="radio-item3">
												<input
													type="checkbox"
													id="KASUBDIT 5.5"
													name="gender"
													value="KASUBDIT 5.5"
												/>
												<label for="KASUBDIT 5.5">KASUBDIT 5.5</label>
											</div>
											<div class="radio-item3">
												<input type="checkbox" id="STAFF TU" name="gender" value="STAFF TU" />
												<label for="STAFF TU">STAFF TU</label>
											</div>
										</div>
										<span>Disposition Content :</span>
										<div class="d-flex flex-wrap">
											<div class="radio-item3">
												<input type="checkbox" id="Acc" name="gender" value="Acc" />
												<label for="Acc">Acc</label>
											</div>
											<div class="radio-item3">
												<input type="checkbox" id="Kembangkan" name="gender" value="Kembangkan" />
												<label for="Kembangkan">Kembangkan</label>
											</div>
											<div class="radio-item3">
												<input type="checkbox" id="Saran" name="gender" value="Saran" />
												<label for="Saran">Saran</label>
											</div>
											<div class="radio-item3">
												<input type="checkbox" id="Wakili" name="gender" value="Wakili" />
												<label for="Wakili">Wakili</label>
											</div>
											<div class="radio-item3">
												<input type="checkbox" id="Lanjutkan" name="gender" value="Lanjutkan" />
												<label for="Lanjutkan">Lanjutkan</label>
											</div>
											<div class="radio-item3">
												<input
													type="checkbox"
													id="Kordinasikan"
													name="gender"
													value="Kordinasikan"
												/>
												<label for="Kordinasikan">Kordinasikan</label>
											</div>
											<div class="radio-item3">
												<input type="checkbox" id="Menghadap" name="gender" value="Menghadap" />
												<label for="Menghadap">Menghadap</label>
											</div>
											<div class="radio-item3">
												<input type="checkbox" id="Dalami" name="gender" value="Dalami" />
												<label for="Dalami">Dalami</label>
											</div>
											<div class="radio-item3">
												<input type="checkbox" id="Pantau" name="gender" value="Pantau" />
												<label for="Pantau">Pantau</label>
											</div>
											<div class="radio-item3">
												<input type="checkbox" id="UDK" name="gender" value="UDK" />
												<label for="UDK">UDK</label>
											</div>
											<div class="radio-item3">
												<input
													type="checkbox"
													id="Untuk Pedoman"
													name="gender"
													value="Untuk Pedoman"
												/>
												<label for="Untuk Pedoman">Untuk Pedoman</label>
											</div>
											<div class="radio-item3">
												<input type="checkbox" id="Lakukan Gal" name="gender" value="Lakukan Gal" />
												<label for="Lakukan Gal">Lakukan Gal</label>
											</div>
											<div class="radio-item3">
												<input type="checkbox" id="Counter" name="gender" value="Counter" />
												<label for="Counter">Counter</label>
											</div>
											<div class="radio-item3">
												<input type="checkbox" id="Teruskan" name="gender" value="Teruskan" />
												<label for="Teruskan">Teruskan</label>
											</div>
											<div class="radio-item3">
												<input type="checkbox" id="Dibantu" name="gender" value="Dibantu" />
												<label for="Dibantu">Dibantu</label>
											</div>
											<div class="radio-item3">
												<input type="checkbox" id="Cukupi" name="gender" value="Cukupi" />
												<label for="Cukupi">Cukupi</label>
											</div>
											<div class="radio-item3">
												<input type="checkbox" id="Acarakan" name="gender" value="Acarakan" />
												<label for="Acarakan">Acarakan</label>
											</div>
											<div class="radio-item3">
												<input type="checkbox" id="Pelajari" name="gender" value="Pelajari" />
												<label for="Pelajari">Pelajari</label>
											</div>
											<div class="radio-item3">
												<input type="checkbox" id="UDL" name="gender" value="UDL" />
												<label for="UDL">UDL</label>
											</div>
											<div class="radio-item3">
												<input type="checkbox" id="File" name="gender" value="File" />
												<label for="File">File</label>
											</div>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<p>Retro</p>
										<div class="input-group mb-3">
											<input
												type="text"
												class="form-control modal-form"
												placeholder="Acarakan"
												id="retro"
												aria-describedby="basic-addon3"
												required
											/>
										</div>
									</div>
									<div class="col-md-6">
										<p>Copy</p>
										<div class="input-group mb-3">
											<input
												type="text"
												class="form-control modal-form"
												placeholder="Acarakan"
												id="copy"
												aria-describedby="basic-addon3"
												required
											/>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<p>Note</p>
										<textarea
											class="form-control mb-3 modal-form"
											id="note"
											placeholder="Mohon untuk segera di lanjutkan terkait semua hal yang sudah tertulis di surat. Terima Kasih"
											rows="3"
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

	.label2 {
		flex-direction: row-reverse;
		display: flex;
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

	.radio-item3 {
		display: flex;
		align-items: baseline;
		position: relative;
		padding: 32px 6px;
		width: 25%;
	}

	.radio-item3 input[type='checkbox'] {
		display: none;
	}

	.radio-item3 label {
		display: flex;
		align-items: baseline;
		gap: 8px;
	}

	.radio-item3 label:before {
		content: ' ';
		display: inline-block;
		position: relative;
		top: 5px;
		margin: 0 5px 0 0;
		width: 20px;
		height: 20px;
		background: #2f383b;
		border: 1px solid #5e727a;
	}

	.radio-item3 input[type='checkbox']:checked + label:after {
		width: 12px;
		height: 12px;
		position: absolute;
		top: 42px;
		left: 11px;
		content: ' ';
		display: block;
		background-repeat: no-repeat;
		background-image: url('/check.svg');
	}
	.radio-item3 input[type='checkbox']:checked + label:after {
		left: 11px;
		position: absolute;
	}
</style>
