<script>
	import Navbar from '../../../../../../compenents/Navbar.svelte';
</script>

<div class="container mt-3">
	<div class="col-md-12">
		<div class="route">
			<span>Outgoing Mail</span> > <span>Detail Letter</span>
		</div>
		<div class="card">
			<div class="card-body">
				<div class="d-flex justify-content-between mb-4">
					<h5 style="color: #BAE2F3">Outgoing Mail Detail</h5>
				</div>
				<div class="d-flex align-items-center gap-1 text-white">
					<span style="width: 15%;">Outgoing Mail Detail</span>
					<hr style="border-top: 1px solid white; width: 100%" />
				</div>
				<div class="row mt-3">
					<div class="col-md-4">
						<p>Letter Number</p>
						<div class="input-group mb-3">
							<input
								type="text"
								class="form-control modal-form"
								placeholder="-"
								id="letter-number"
								aria-describedby="basic-addon3"
								required
								disabled
							/>
						</div>
					</div>
					<div class="col-md-4">
						<p>Date</p>
						<div class="input-group mb-3">
							<input
								type="date"
								class="form-control modal-form"
								placeholder="08/01/23"
								id="date"
								aria-describedby="basic-addon3"
								required
								disabled
							/>
						</div>
					</div>
					<div class="col-md-4">
						<p>Letter Origin</p>
						<div class="input-group mb-3">
							<input
								type="text"
								class="form-control modal-form"
								placeholder="Deputi V"
								id="letter-origin"
								aria-describedby="basic-addon3"
								required
								disabled
							/>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4">
						<p>Regarding</p>
						<div class="input-group mb-3">
							<input
								type="text"
								class="form-control modal-form"
								placeholder="Pembelian PC untuk Operasional"
								id="regarding"
								aria-describedby="basic-addon3"
								required
								disabled
							/>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4">
						<p>File</p>
						<div class="input-group mb-3">
							<input
								type="text"
								class="form-control modal-form"
								placeholder="Nama-File.pdf"
								id="file"
								aria-describedby="basic-addon3"
								required
								disabled
							/>
						</div>
					</div>
					<div class="col-md-2">
						<div class="d-flex">
							<button style="margin-top: 38px;" type="button" class="btn btn-secondary add-new">
								<img src="/download.svg" alt="" />
								Download File</button
							>
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
