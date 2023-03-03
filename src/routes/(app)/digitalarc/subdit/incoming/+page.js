export const load = async () => {
	const getPosts = async () => {
		const res = await fetch('http://localhost:5173/api/incoming.json');
		const data = await res.json();
		return data;
	};
	return {
		posts: getPosts()
	};
};
