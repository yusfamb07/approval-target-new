import { json } from '@sveltejs/kit';

export const GET = async () => {
	const posts = [
		{
			id: 1,
			binda: 'DKI Jakarta',
			lawfull: 'GAM',
			geo: 'Result',
			cdr: 'Result',
			pending: 'Result'
		},
		{
			id: 2,
			binda: 'Jawa Barat',
			lawfull: 'GAM',
			geo: 'Result',
			cdr: 'Result',
			pending: 'Result'
		},
		{
			id: 3,
			binda: 'Jawa Tengah',
			lawfull: 'GAM',
			geo: 'Result',
			cdr: 'Result',
			pending: 'Result'
		},
		{
			id: 4,
			binda: 'Jawa Timur',
			lawfull: 'GAM',
			geo: 'Result',
			cdr: 'Result',
			pending: 'Result'
		},
		{
			id: 5,
			binda: 'Bali',
			lawfull: 'GAM',
			geo: 'Result',
			cdr: 'Result',
			pending: 'Result'
		}
	];
	return new Response(JSON.stringify(posts), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
	// return new json(posts);
};
