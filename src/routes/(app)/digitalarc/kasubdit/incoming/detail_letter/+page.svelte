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
			<div class="title_contain">
				<p>Incoming Main Detail</p>
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
						<input type="date" placeholder="08/01/23" name="date" disabled />
					</li>
					<li>
						<label for="letter_origin">Letter Origin</label>
						<input type="text" placeholder="Deputi V" name="letter_origin" disabled />
					</li>
				</ul>
			</div>
			<div class="regard_container" />
			<div class="file_container" />
		</div>
		<div class="disposition_sheet">
			<div class="disposition_container" />
			<div class="classification_container" />
			<div class="destination_container" />
			<div class="disposition_con_container" />
			<div class="retro_container" />
			<div class="note_container" />
			<div class="date_container" />
		</div>
	</div>
</main>

<style>
	main {
		padding: 24px 200px 82px 200px;
	}

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
	.title_contain {
		display: flex;
		font-weight: 500;
		font-size: 18px;
		color: #fbfdff;
		gap: 15px;
	}
	.title_contain p {
		width: 10%;
	}
	.title_contain hr {
		width: 100%;
		color: rgba(251, 253, 255, 0.5);
	}
	.letter_container ul {
		display: flex;
		gap: 24px;
	}
	.letter_container li {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.letter_container input {
		background: #242b2d;
		border: 1px solid #5e727a;
		padding: 7px 0px 7px 14px;
		max-width: 314px;
	}
	.letter_container input::placeholder {
		color: #8a9fa6;
	}
</style>
