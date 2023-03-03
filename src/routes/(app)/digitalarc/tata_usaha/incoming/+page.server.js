// export const load = async () => {
// 	const getPosts = async () => {
// 		const res = await fetch('http://localhost:5173/api/incoming.json');
// 		const data = await res.json();
// 		return data;
// 	};
// 	return {
// 		posts: getPosts()
// 	};
// };
import { posts } from './dataSuratIncoming';

export function load() {
	return {
		summaries: posts.map((post) => ({
			id: post.id,
			letter_no: post.letter_no,
			letter_origin: post.letter_origin,
			date: post.date,
			regarding: post.regarding,
			file: post.file,
			status: post.status,
			disposition: post.disposition
		}))
	};
}
