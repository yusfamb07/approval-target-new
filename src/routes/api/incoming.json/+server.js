import { json } from '@sveltejs/kit';

export const GET = async () => {
	const posts = [
		{
			id: 1,
			letter_no: 'SRT/123/123/121',
			date: '12/12/12 12:12',
			letter_origin: 'Deputi 5',
			regarding: 'Pembelian PC',
			file: 'File Name.pdf',
			status: 'Approved',
			disposition: 'Disposition Detail'
		},
		{
			id: 2,
			letter_no: 'SRT/123/123/122',
			date: '12/12/12 12:12',
			letter_origin: 'Deputi 5',
			regarding: 'Pembelian PC',
			file: 'File Name.pdf',
			status: 'Approved',
			disposition: 'Disposition Detail'
		},
		{
			id: 3,
			letter_no: 'SRT/123/123/123',
			date: '12/12/12 12:12',
			letter_origin: 'Deputi 5',
			regarding: 'Pembelian PC',
			file: 'File Name.pdf',
			status: 'Approved',
			disposition: 'Disposition Detail'
		},
		{
			id: 4,
			letter_no: 'SRT/123/123/124',
			date: '12/12/12 12:12',
			letter_origin: 'Deputi 5',
			regarding: 'Pembelian PC',
			file: 'File Name.pdf',
			status: 'Approved',
			disposition: 'Disposition Detail'
		},
		{
			id: 5,
			letter_no: 'SRT/123/123/125',
			date: '12/12/12 12:12',
			letter_origin: 'Deputi 5',
			regarding: 'Pembelian PC',
			file: 'File Name.pdf',
			status: 'Approved',
			disposition: 'Disposition Detail'
		}
	];
	return new Response(JSON.stringify(posts), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
	// return new json(posts);
};
