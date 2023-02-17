import { json } from '@sveltejs/kit';

export const GET = async () => {
	const posts = [
		{
			id: 1,
			binda: 'DKI Jakarta',
			lawfull: 1,
			geo: 2,
			cdr: 2,
			pending: 5
		},
		{
			id: 2,
			binda: 'Jawa Barat',
			lawfull: 1,
			geo: 2,
			cdr: 2,
			pending: 5
		},
		{
			id: 3,
			binda: 'Jawa Tengah',
			lawfull: 1,
			geo: 2,
			cdr: 2,
			pending: 5
		},
		{
			id: 4,
			binda: 'Jawa Timur',
			lawfull: 1,
			geo: 2,
			cdr: 2,
			pending: 5
		},
		{
			id: 5,
			binda: 'Bali',
			lawfull: 1,
			geo: 2,
			cdr: 2,
			pending: 5
		}
	];
	return new Response(JSON.stringify(posts), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
	// return new json(posts);
};
