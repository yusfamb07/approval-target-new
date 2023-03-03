// import { error } from '@sveltejs/kit';
// import { page } from '$app/stores';

// /** @type {import('./$types').PageLoad} */
// export function load({ params }) {
// 	console.log('Params: ', params);
// 	// throw error(404, 'Not found');
// }
// export const load = async ({ params }) => {
// 	const getPosts = async () => {
// 		const res = await fetch(`http://localhost:5173/api/${params.slug}`);
// 		const data = await res.json();
// 		return data;
// 	};
// 	return {
// 		posts: getPosts()
// 	};
// };
export const load = async ({ params }) => {
	const getPosts = async () => {
		const res = await fetch(`http://localhost:5173/api/incoming.json`);
		const data = await res.json();
		return data;
	};
	return {
		posts: getPosts()
	};
};
