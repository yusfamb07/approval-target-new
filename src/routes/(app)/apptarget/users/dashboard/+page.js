export const load = async () => {
	const getPosts = async () => {
		const res = await fetch('http://localhost:5173/api/post.json');
		const data = await res.json();
		return data;
	};
	return {
		posts: getPosts()
	};
};

// export const load = async ({ fetch }) => {
// 	const requestRes = await fetch('http://localhost:5173/api/post.json');
// 	const requestData = await requestRes.json();
// 	const request = requestData.request;

// 	return {
// 		request: request
// 	};
// };
