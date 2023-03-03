<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	export let data;
	// const { posts } = data;
	const datas = data.posts;
	const post = datas.find((post) => post.id === 2);
	console.log(post);
</script>

<main>
	<div class="title_container">
		<p>
			<span style="margin-right: 31.5px">incoming Mail</span> >
			<span style="margin-left: 31.5px">Detail Letter</span>
		</p>
	</div>
	<div class="card">
		<div class="incoming_detail">
			<h2>Incoming Mail Detail</h2>
			<div class="title_contain" id="title_contains">
				<h3>Incoming Main Detail</h3>
				<hr />
			</div>
			<div class="letter_container">
				<ul>
					<li>
						<label for="letter_number">Letter Number</label>
						<input type="text" placeholder="265 / DE-V / 1 / 2023" name="letter_number" disabled />
					</li>
					<li>
						<label for="date">Date</label>
						<div class="input_date">
							<img src="/calendar.svg" alt="calendar_icon" />
							<input type="text" placeholder="08/01/23" name="date" disabled />
						</div>
					</li>
					<li>
						<label for="letter_origin">Letter Origin</label>
						<input type="text" placeholder="Deputi V" name="letter_origin" disabled />
					</li>
				</ul>
			</div>
			<div class="regard_container">
				<label for="regard">Regarding</label>
				<input type="text" placeholder="Pembelian PC untuk Operasional" name="regard" disabled />
			</div>
			<div class="file_container">
				<label for="file">File</label>
				<div class="input_container">
					<input type="text" placeholder="Nama-File.pdf" name="file" disabled />
					<button><img src="/files.svg" alt="files_icon" /> Download File</button>
				</div>
			</div>
		</div>
		<div class="disposition_sheet">
			<div class="disposition_container">
				<h3>Disposition Sheet</h3>
				<hr />
			</div>
			<div class="classification_container">
				<div class="classification d-flex">
					<p>Klasifikasi &nbsp :</p>
					<ul class="d-flex list-unstyled ">
						<li>
							<input type="checkbox" id="SR" name="gender" value="SR" />
							<label for="SR">SR</label>
						</li>
						<li>
							<input type="checkbox" id="R" name="gender" value="R" />
							<label for="R">R</label>
						</li>
						<li>
							<input type="checkbox" id="KT" name="gender" value="KT" />
							<label for="KT">KT</label>
						</li>
						<li>
							<input type="checkbox" id="B" name="gender" value="B" />
							<label for="B">B</label>
						</li>
					</ul>
				</div>
				<div class="degree d-flex">
					<p>Derajat &nbsp :</p>
					<ul class="d-flex list-unstyled">
						<li>
							<input type="checkbox" id="K" name="gender" value="K" />
							<label for="K">K</label>
						</li>
						<li>
							<input type="checkbox" id="SS" name="gender" value="SS" />
							<label for="SS">SS</label>
						</li>
						<li>
							<input type="checkbox" id="SB" name="gender" value="SB" />
							<label for="SB">SB</label>
						</li>
						<li>
							<input type="checkbox" id="B2" name="gender" value="B" />
							<label for="B2">B</label>
						</li>
					</ul>
				</div>
			</div>
			<div class="destination_container">
				<p>Destination to :</p>
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
			</div>
			<div class="disposition_con_container">
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
				</div>
				<div class="retro_container d-flex align-items-baseline gap-3">
					<div class="d-grid w-50 gap-2 mb-2">
						<span>Retro</span>
						<input
							type="text"
							id="etc"
							name="gender"
							placeholder="Acarakan"
							style="color: gray; border: 1px solid #404952; padding-left: 15px;"
						/>
					</div>
					<div class="d-grid w-50 gap-2">
						<span>Copy</span>
						<input
							type="text"
							id="etc"
							name="gender"
							placeholder="Acarakan"
							style="color: gray; border: 1px solid #404952; padding-left: 15px; "
						/>
					</div>
				</div>
				<div class="note_container d-flex flex-column w-100">
					<span>Note</span>
					<textarea
						type="text"
						id="etc"
						name="gender"
						placeholder="Mohon untuk segera di lanjutkan terkait semua hal yang sudah tertulis di surat. Terima Kasih"
						style="color: gray; border: 1px solid #404952; padding-left: 15px; height: 170px"
					/>
				</div>
				<div class="date_container d-flex">
					<div class="file_container">
						<label for="file">Start</label>
						<div class="input_container">
							<input type="text" placeholder="24/February/2023 13:30" name="file" />
							<button><img src="/confirm.svg" alt="files_icon" /> Confirmation</button>
						</div>
					</div>
					<div class="file_container">
						<label for="file">Return</label>
						<div class="input_container">
							<input type="text" placeholder="24/February/2023 13:30" name="file" />
							<button><img src="/confirm.svg" alt="files_icon" /> Confirmation</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<button
			class="back"
			on:click={() => {
				history.back();
			}}
			><img src="/left_arrows.svg" alt="left_arrowlikn=" style="margin-right: 1rem;" /> Back to Incoming
			Mail List</button
		>
	</div>
</main>

<style>
	main {
		padding: 24px 200px 82px 200px;
	}
	/* incoming mail  */
	.title_container p,
	.title_container span {
		color: #bae2f3;
		font-weight: 400;
	}
	.title_container {
		margin-bottom: 24px;
	}

	.card {
		padding: 24px 24px 30px 24px;
	}
	.incoming_detail {
		display: flex;
		gap: 1rem;
		flex-direction: column;
	}
	.incoming_detail h2 {
		font-weight: 500;
		font-size: 24px;
		color: #bae2f3;
		margin-bottom: 24px;
	}
	.incoming_detail .title_contain {
		display: flex;
		font-weight: 500;
		font-size: 18px;
		gap: 15px;
	}

	.title_contain h3 {
		width: 13%;
		font-size: 18px;
	}
	.title_contain hr {
		width: 100%;
		color: rgba(251, 253, 255, 0.5);
		border-top: 1px solid white;
	}
	.letter_container label {
		font-size: 1rem;
	}
	.letter_container ul {
		display: flex;
		gap: 24px;
		padding-left: 0;
	}
	.letter_container li,
	.regard_container,
	.file_container {
		display: flex;
		flex-direction: column;
		gap: 12px;
		width: 35%;
	}
	.letter_container input,
	.regard_container input,
	.file_container input {
		background: #242b2d;
		border: 1px solid #5e727a;
		padding: 7px 0px 7px 14px;
		max-width: 100%;
	}

	.regard_container input {
		max-width: 92%;
	}
	.letter_container input::placeholder,
	.regard_container input::placeholder,
	.file_container input::placeholder {
		color: #8a9fa6;
	}

	.input_date {
		display: flex;
		background: #242b2d;
		border: 1px solid #5e727a;
		padding: 7px 0px 7px 14px;
		gap: 15px;
	}
	.input_date,
	.input_date > input {
		width: 100%;
	}

	.input_date > input {
		background-color: transparent;
		border: none;
		padding: 0;
	}
	.file_container {
		width: 45%;
	}
	.input_container button {
		background: #2f383b;
		border: 1px solid #5e727a;
		color: #fbfdff;
		padding: 8px 8px 8px 11px;
		margin-left: 15px;
	}
	.input_container button > img {
		margin-right: 1rem;
	}

	.input_container input {
		width: 71.5%;
	}
	/* incoming mail  */
	/* disposition sheet */
	.disposition_sheet {
		margin-top: 24px;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.disposition_container {
		display: flex;
		font-weight: 500;
		font-size: 18px;
		color: #fbfdff !important;
		gap: 15px;
	}
	.disposition_container h3 {
		width: 11%;
		font-size: 18px;
	}
	.disposition_container hr {
		width: 90%;
		color: rgba(251, 253, 255, 0.5);
		border-top: 1px solid white;
	}
	.classification_container {
		display: flex;
		gap: 90px;
	}

	.classification,
	.degree {
		align-items: baseline;
		align-content: baseline;
	}
	.classification p,
	.degree p {
		margin-right: 24px;
	}
	.classification li,
	.degree li,
	.destination_container li input {
		margin-right: 12px;
	}

	.classification input:checked,
	.degree input:checked {
		accent-color: transparent;
	}

	.classification li,
	.degree li {
		display: flex;
		align-items: baseline;
		position: relative;
		padding: 0 6px;
	}

	.classification li input[type='checkbox'],
	.degree li input[type='checkbox'] {
		display: none;
	}

	.classification li label,
	.degree li label {
		display: flex;
		flex-direction: row-reverse;
		align-items: baseline;
		gap: 8px;
	}

	.classification li label:before,
	.degree li label:before {
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

	.classification li input[type='checkbox']:checked + label:after,
	.degree li input[type='checkbox']:checked + label:after {
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
	.classification li:nth-child(odd) input[type='checkbox']:checked + label:after,
	.degree li:nth-child(2) input[type='checkbox']:checked + label:after,
	.degree li:nth-child(3) input[type='checkbox']:checked + label:after {
		left: 35px;
		position: absolute;
	}
	/* .destination_container ul {
		gap: 2rem 7.5rem;
	} */
	.radio-item3 {
		display: flex;
		align-items: baseline;
		position: relative;
		padding: 16px 6px;
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
		top: 26px;
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
	.retro_container input {
		background: #242b2d;
		border: 1px solid #5e727a;
		padding: 7px 18px;
	}
	.note_container textarea {
		padding-top: 0.5rem;
		margin-top: 12px;
		background: #242b2d;
		border: 1px solid #5e727a;
	}
	/* .note_container input::placeholder {
		color: white;
		margin-top: -20px;
	} */
	/* disposition sheet */
	.back {
		background-color: #2f383b;
		color: #fbfdff;
		max-width: 216px;
		margin-top: 54px;
		padding: 4px 8px;
		border: 1px solid #5e727a;
	}
	.retro_container,
	.note_container,
	.date_container {
		margin-top: 24px;
	}
</style>
