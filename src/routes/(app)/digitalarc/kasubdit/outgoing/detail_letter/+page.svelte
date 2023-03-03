<script>
</script>

<main>
	<div class="title_container">
		<p>
			<span style="margin-right: 31.5px">Outgoing Mail</span> >
			<span style="margin-left: 31.5px">Detail Letter</span>
		</p>
	</div>
	<div class="card">
		<div class="incoming_detail">
			<h2>Outgoing Mail Detail</h2>
			<div class="title_contain" id="title_contains">
				<h3>Outgoing Main Detail</h3>
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
			<div class="decision_container">
				<button><img src="/approve.svg" alt="approve_icon" /> Approve Letter</button>
				<button type="button" data-bs-toggle="modal" data-bs-target="#FormModal"
					><img src="/decline.svg" alt="approve_icon" /> Decline with note</button
				>
			</div>
		</div>
	</div>
	<!-- popup modal -->
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
</main>

<style>
	main {
		padding: 24px 200px 82px 200px;
	}
	/* outgoing mail  */
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
		font-size: 1rem;
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
	.input_container button,
	.decision_container button {
		background: #2f383b;
		border: 1px solid #5e727a;
		color: #fbfdff;
		padding: 8px 8px 8px 11px;
		margin-left: 15px;
	}
	.input_container button > img,
	.decision_container button > img {
		margin-right: 1rem;
	}

	.input_container input {
		width: 71.5%;
	}
	.decision_container button:first-child {
		margin-left: 0;
	}
	.decision_container {
		padding-left: 0;
	}
	.modal-content {
		/* padding: 1.5rem 1.5rem 1.5rem 1.5rem; */
		margin: 3rem 0 0 -7rem;
		width: 720px;
	}
	.m-2 textarea {
		padding: 10px;
	}
	.modal-header {
		margin-bottom: 70px;
	}
	/* outgoing mail  */
</style>
