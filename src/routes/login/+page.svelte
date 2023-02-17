<script>
	import { goto } from '$app/navigation';
	let username = '';
	let password = '';
	let currentError = null;

	const login = () => {
		fetch('http://17.1.16.45:3001/backend/auth/signin', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username: username, password: password })
		})
			.then((res) => {
				if (res.status < 299) goto('/users/dashboard');
				return res.json();
			})
			.then((res) => {
				if (res.status > 299) currentError = 'Eror!';
			})
			.then((data) => {
				if (data) user.update((val) => (val = { ...data }));
			})
			.catch((error) => {
				currentError = error;
				console.log('Error logged in: ', error);
			});
	};
</script>

<div class="bg-login">
	<div class="card-login">
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
			<form on:submit|preventDefault={login}>
				<h3 class="mt-4">Approval Targetting</h3>
				<p>Professionally recaptiualize long-term high-impact process improvements.</p>
				<p class="p-login">Login</p>
				<p class="mt-3">Username</p>
				<div class="">
					<input
						bind:value={username}
						type="text"
						class="form-control"
						id="nama_pengguna"
						placeholder="Masukan Username"
					/>
				</div>
				<div class="mt-2">
					<p class="mt-3">Password</p>
					<input
						bind:value={password}
						type="password"
						class="form-control"
						id="nama_pengguna"
						placeholder="Masukan Password"
					/>
				</div>
				<button
					type="submit"
					class="btn btn-secondary button-next mt-5 w-100 p-1"
					style=" font-family: myFirstFont;"
				>
					Log in</button
				>
				<img class="line3" src="/line2.png" alt="" />
				<div class="d-flex justify-content-center">
					<img class="line-up2" src="/line-up.png" alt="" />
				</div>
			</form>
		</div>
	</div>
</div>
