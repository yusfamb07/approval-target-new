<script>
	import Navbar from '../../../../../../compenents/Navbar.svelte';
</script>

<div class="container mt-3">
	<div class="col-md-12">
		<div class="route">
			<span>Incoming Mail</span> > <span>Edit Letter</span>
		</div>
		<div class="card">
			<div class="card-body">
				<div class="d-flex justify-content-between mb-4">
					<h5 style="color: #BAE2F3">Incoming Mail Detail</h5>
				</div>
				<div class="d-flex align-items-center gap-1 text-white">
					<span style="width: 15%;">Incoming Mail Detail</span>
					<hr style="border-top: 1px solid white; width: 100%" />
				</div>
				<div class="row mt-3">
					<div class="col-md-4">
						<p>Letter Number</p>
						<div class="input-group mb-3">
							<input
								type="text"
								class="form-control modal-form-input"
								id="letter-number"
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
								class="form-control modal-form-input"
								id="date"
								aria-describedby="basic-addon3"
								required
							/>
						</div>
					</div>
					<div class="col-md-4">
						<p>Letter Origin</p>
						<div class="input-group mb-3">
							<input
								type="text"
								class="form-control modal-form-input"
								id="letter-origin"
								aria-describedby="basic-addon3"
								required
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
								class="form-control modal-form-input"
								id="regarding"
								aria-describedby="basic-addon3"
								required
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
								class="form-control modal-form-input"
								id="file"
								aria-describedby="basic-addon3"
								required
							/>
						</div>
					</div>
					<div class="col-md-2">
						<div class="d-flex gap-2 " style="margin-top: 38px;">
							<input type="file" id="fileInput" />
							<label for="fileInput" class="custom-file-upload"
								><img src="/download.svg" style="transform: rotate(180deg);" alt="" />Upload File</label
							>
						</div>
						<!-- <div class="d-flex">
							<input style="margin-top: 38px;" type="file" class="btn btn-secondary add-new" />
							
							Upload File
						</div> -->
					</div>
				</div>
				<div class="modal-footer mt-5 mb-5 gap-4">
					<button type="submit" class="btn btn-secondary submit-btn d-flex gap-3"
						><img src="/edit-letter.svg" alt="" />
						<div>Edit Letter</div>
					</button>
					<button type="button" class="btn btn-secondary submit-btn d-flex gap-3"
						><img src="/cancel-icon.svg" alt="" />
						<div>Cancel</div>
					</button>
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

	.modal-form-input {
		background-color: #eaebed;
		/* border: #21262b; */
		/* border: 1px solid #fbfdff; */
		border-radius: 0% !important;
		border: 1px solid #5e727a;
	}
	/* input[type='file'] {
		display: none;
	} */
	.custom-file-upload {
		display: inline-block;
		background-color: #363d44;
		border: 1px solid #5e727a;
		color: #fff;
		padding: 6px 12px;
		border-radius: 0px;
		cursor: pointer;
	}

	.custom-file-upload:hover {
		background-color: #0c7cd5;
	}

	#fileInput {
		display: none;
	}
</style>
