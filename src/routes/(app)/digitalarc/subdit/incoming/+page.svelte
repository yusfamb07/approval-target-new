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

	let questions = [
		{ id: 1, text: `Option 1` },
		{ id: 2, text: `Option 2` },
		{ id: 3, text: `Option 3` }
	];

	let selected;

	let answer = '';

	export let data;
	const { posts } = data;
</script>

<div class="container mt-3">
	<div class="col-md-12">
		<div class="card">
			<div class="card-body">
				<div class="d-flex justify-content-between mb-4">
					<h5 style="color: #BAE2F3">Incoming Mail</h5>

					<button type="button" class="btn btn-secondary add-new">
						<img src="/filter-letter.svg" alt="" />
						Filter Letter</button
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
