<script>
	let showPassword = true;
	function togglePassword() {
		showPassword = !showPassword;
	}
	let password = '';
</script>

<div class="bg">
	<div class="card-login">
		<div class="card-body">
			<div class="container-login">
				<div class="d-flex justify-content-center">
					<img class="line-up" src="/line-up.png" alt="" />
				</div>
				<div class="d-flex justify-content-center">
					<img class="line2" src="/line2.png" alt="" />
				</div>
				<div class="d-flex justify-content-center ">
					<img class="line-center" src="/line-center.png" alt="" />
				</div>
				<h3 class="mt-4">Approval Targetting</h3>
				<p>Professionally recaptiualize long-term high-impact process improvements.</p>
				<p class="p-login">Login</p>
				<p class="mt-3">Kata Sandi</p>
				{#if showPassword}
					<input
						type="password"
						class="form-control"
						placeholder="Password"
						bind:value={password}
						id="inputPassword"
					/>
				{:else}
					<input
						type="text"
						class="form-control"
						placeholder="Password"
						bind:value={password}
						id="inputPassword"
					/>
				{/if}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<img
					src={showPassword ? '/show.png' : '/hide.png'}
					id="img"
					alt={showPassword ? 'show' : 'hide'}
					style="position: absolute; top: 49%; left: 85%; cursor: pointer; width: 20px"
					on:click={togglePassword}
				/>
				<button
					type="button"
					class="btn btn-secondary button-next mt-5 w-100 p-1"
					style=" font-family: myFirstFont;"
				>
					Selanjutnya</button
				>
				<img class="line3" src="/line2.png" alt="" />
				<div class="d-flex justify-content-center">
					<img class="line-up2" src="/line-up.png" alt="" />
				</div>
			</div>
		</div>
	</div>
</div>
