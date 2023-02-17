import { json } from '@sveltejs/kit';

export const GET = async () => {
	const posts = [
		{
			id: 1,
			np_surat: 'SRT/123/123/123',
			urgensi: 'Urgensi Indonesia Jaya',
			no_tlp: 6287982920129,
			deskripsi: 'ini merupakan urgensi Indonesia',
			nama_file: 'asdfgka.pdf',
			status: 'disetujui'
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
