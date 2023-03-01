<script>
	import Navbar from '../../../../../../compenents/Navbar.svelte';
</script>

<div class="container mt-3">
	<div class="col-md-12">
		<div class="route">
			<span>Incoming Mail</span> > <span>Detail Letter</span>
		</div>
		<div class="card">
			<div class="card-body">
				<div class="d-flex justify-content-between mb-4">
					<h5 style="color: #BAE2F3">Incoming Mail</h5>
				</div>
				<div class="d-flex align-items-center gap-1 text-white">
					<span style="width: 15%;">Incoming Mail Detail</span>
					<hr style="border-top: 1px solid white; width: 100%" />
				</div>

				<div class="input-mail">
					<div style="width: 30%;" class="d-grid gap-2">
						<span>Letter Number</span>
						<input type="text" placeholder="265/DE-V/1/2023" class="input" />
					</div>
					<div style="width: 30%;" class="d-grid gap-2">
						<span>Date</span>
						<input type="date" placeholder="08/01/23" class="input" />
					</div>
					<div style="width: 30%;" class="d-grid gap-2">
						<span>Letter Origin</span>
						<input type="text" placeholder="Deputi V" class="input" />
					</div>
					<div style="width: 30%;" class="d-grid gap-2">
						<span>Regarding</span>
						<input type="text" placeholder="Pembelian PC untuk Operasional" class="input" />
					</div>
				</div>

				<div class="d-grid gap-2 input-mail">
					<span>File</span>
					<div class="d-flex" style="gap: 1.375rem;">
						<input type="text" placeholder="Nama-File.pdf" class="input" style="width: 30%;" />
						<button
							style="	background: #242b2d;
	border: 1px solid #5e727a; color: white"
							class="d-flex align-items-center justify-content-center gap-2"
							><img src="/download-icon.svg" alt="" />Download File</button
						>
					</div>
				</div>

				<div class="d-flex align-items-center gap-1 text-white mt-4">
					<span style="width: 15%;">Disposition Sheet</span>
					<hr style="border-top: 1px solid white; width: 100%" />
				</div>

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

				<span>Destination to :</span>
				<div class="d-flex flex-wrap">
					<div class="radio-item3">
						<input type="checkbox" id="KASUBDIT 5.1" name="gender" value="KASUBDIT 5.1" />
						<label for="KASUBDIT 5.1">KASUBDIT 5.1</label>
					</div>
					<div class="radio-item3">
						<input type="checkbox" id="KASUBDIT 5.2" name="gender" value="KASUBDIT 5.2" />
						<label for="KASUBDIT 5.2">KASUBDIT 5.2</label>
					</div>
					<div class="radio-item3">
						<input type="checkbox" id="KASUBDIT 5.3" name="gender" value="KASUBDIT 5.3" />
						<label for="KASUBDIT 5.3">KASUBDIT 5.3</label>
					</div>
					<div class="radio-item3">
						<input type="checkbox" id="AGEN MADYA 55" name="gender" value="AGEN MADYA 55" />
						<label for="AGEN MADYA 55">AGEN MADYA 55</label>
					</div>
					<div class="radio-item3">
						<input type="checkbox" id="KASUBDIT 5.4" name="gender" value="KASUBDIT 5.4" />
						<label for="KASUBDIT 5.4">KASUBDIT 5.4</label>
					</div>
					<div class="radio-item3">
						<input type="checkbox" id="KASUBDIT 5.5" name="gender" value="KASUBDIT 5.5" />
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
						<input type="checkbox" id="Kordinasikan" name="gender" value="Kordinasikan" />
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
						<input type="checkbox" id="Untuk Pedoman" name="gender" value="Untuk Pedoman" />
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
					<div class="radio-item3">
						<input type="checkbox" id="etc" name="gender" value="etc" />
						<label for="">
							<input
								type="text"
								id="etc"
								name="gender"
								placeholder="Please write"
								style="color: gray; border: 1px solid #404952; padding-left: 15px"
							/>
						</label>
					</div>
				</div>
				<div class="d-flex align-items-baseline gap-3">
					<div class="d-grid w-50 gap-2 mb-2">
						<span>Retro</span>
						<input
							type="text"
							id="etc"
							name="gender"
							style="color: gray; border: 1px solid #404952; padding-left: 15px;"
						/>
					</div>
					<div class="d-grid w-50 gap-2">
						<span>Copy</span>
						<input
							type="text"
							id="etc"
							name="gender"
							style="color: gray; border: 1px solid #404952; padding-left: 15px; "
						/>
					</div>
				</div>
				<div class="d-grid w-100">
					<span>Note</span>
					<input
						type="text"
						id="etc"
						name="gender"
						style="color: gray; border: 1px solid #404952; padding-left: 15px; height: 170px"
					/>
				</div>
				<div class="d-flex gap-4 mt-5">
					<button
						style="	background: #242b2d;
	border: 1px solid #5e727a; color: white"
						class="d-flex align-items-center justify-content-center gap-2 mt-3 p-2"
						><img src="/approve-letter-icon.svg" alt="" />Approve Letter</button
					>

					<button
						type="button"
						data-bs-toggle="modal"
						data-bs-target="#FormModal"
						style="	background: #242b2d;
	border: 1px solid #5e727a; color: white"
						class="d-flex align-items-center justify-content-center gap-2 mt-3 p-2 btn btn-secondary add-new"
						><img src="/decline-with-note-icon.svg" alt="" />Decline with Note</button
					>
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
								<h5 class="modal-title" id="exampleModalLabel">Decline with Note</h5>
								<button
									type="button"
									class="btn-close btn-close-white "
									data-bs-dismiss="modal"
									aria-label="Close"
								/>
							</div>

							<div class="btn btn-secondary decline-note">
								<div class="d-flex justify-content-between m-2">
									<span>Silahkan Tulis Catatan</span>
									<div class="d-flex gap-1">
										<img src="/reset-icon.svg" alt="" />
										<span>Reset</span>
									</div>
								</div>
								<div class="m-2">
									<textarea
										class="w-100"
										placeholder="Silahkan Tuliskan Catatan ....."
										style="background: #EAEBED;
									border: 1px solid #404952;
									border-radius: 2px; height: 220px; color: #282F36;"
									/>
								</div>
							</div>

							<div class="modal-footer">
								<button
									type="submit"
									class="btn btn-secondary submit-btn d-flex gap-3"
									data-bs-toggle="modal"
									data-bs-target="#FeedbackModal"
									><img src="/approve-letter-icon.svg" alt="" />
									<div>Send Note</div>
								</button>
								<button
									type="button"
									class="btn btn-secondary submit-btn d-flex gap-3"
									data-bs-dismiss="modal"
									><img src="/cancel-icon.svg" alt="" />
									<div>Cancel</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.route {
		display: flex;
		gap: 32px;
		color: #bae2f3;
		padding: 24px 0;
	}

	.input {
		padding: 7px 16px;
		display: grid;
		background: #242b2d;
		border: 1px solid #5e727a;
	}

	.input-mail {
		color: white;
		display: flex;
		gap: 1.375rem;
		flex-wrap: wrap;
		padding-top: 16px;
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
	.radio-item2 input[type='checkbox']:checked + label:nth-child(odd):after {
		left: 30px;
		position: absolute;
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
