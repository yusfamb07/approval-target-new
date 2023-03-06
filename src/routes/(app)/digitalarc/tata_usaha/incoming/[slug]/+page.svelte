<script>
	export let data;

	// }
</script>

<div class="container mt-3">
	<div class="col-md-12">
		<p>{data.post.id}</p>

		<div class="route">
			<span>Incoming Mail</span> > <span>Detail Letter</span>
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
								class="form-control modal-form"
								placeholder="265 / DE-V / 1 / 2023"
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
</style>
