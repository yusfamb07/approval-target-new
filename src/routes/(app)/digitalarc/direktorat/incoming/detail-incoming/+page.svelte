<script>
	import Navbar from '../../../../../../compenents/Navbar.svelte';
</script>

<Navbar />

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
					<div class="d-flex" style="gap: 1.375rem;                    ">
						<input type="text" placeholder="Nama-File.pdf" class="input" style="width: 30%;" />
						<button
							style="	background: #242b2d;
                        border: 1px solid #5e727a; width: 20%"
							class="d-flex align-items-center justify-content-center gap-2"
							><img src="/download-icon.svg" alt="" /> Download File</button
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
							<div class="radio-item">
								<input type="checkbox" id="R" name="gender" value="R" />
								<label for="R">R</label>
							</div>
							<div class="radio-item">
								<input type="checkbox" id="KT" name="gender" value="KT" />
								<label for="KT">KT</label>
							</div>
							<div class="radio-item">
								<input type="checkbox" id="B" name="gender" value="B" />
								<label for="B">B</label>
							</div>
						</div>
						<div class="d-flex align-items-baseline">
							<span>Derajat :</span>
							<div class="radio-item">
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
							<div class="radio-item">
								<input type="checkbox" id="B2" name="gender" value="B" />
								<label for="B2">B</label>
							</div>
						</div>
					</div>
				</div>

                <span>Destination to :</span>
				<div>
                    <div class="radio-item">
                        <input type="checkbox" id="KASUBDIT 5.1" name="gender" value="KASUBDIT 5.1" />
                        <label for="KASUBDIT 5.1">KASUBDIT 5.1</label>
                    </div>
                    <div class="radio-item">
                        <input type="checkbox" id="KASUBDIT 5.2" name="gender" value="KASUBDIT 5.2" />
                        <label for="KASUBDIT 5.2">KASUBDIT 5.2</label>
                    </div>
                    <div class="radio-item">
                        <input type="checkbox" id="KASUBDIT 5.3" name="gender" value="KASUBDIT 5.3" />
                        <label for="KASUBDIT 5.3">KASUBDIT 5.3</label>
                    </div>
                    <div class="radio-item">
                        <input type="checkbox" id="AGEN MADYA 55" name="gender" value="AGEN MADYA 55" />
                        <label for="AGEN MADYA 55">AGEN MADYA 55</label>
                    </div>
                    <div class="radio-item">
                        <input type="checkbox" id="KASUBDIT 5.4" name="gender" value="KASUBDIT 5.4" />
                        <label for="KASUBDIT 5.4">KASUBDIT 5.4</label>
                    </div>
                    <div class="radio-item">
                        <input type="checkbox" id="KASUBDIT 5.5" name="gender" value="KASUBDIT 5.5" />
                        <label for="KASUBDIT 5.5">KASUBDIT 5.5</label>
                    </div>
                    <div class="radio-item">
                        <input type="checkbox" id="STAFF TU" name="gender" value="STAFF TU" />
                        <label for="STAFF TU">STAFF TU</label>
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
		border: 1px solid #5e727a;
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
</style>
