import { writable } from 'svelte/store';
export let studentsArray = writable([
	{
		Name: 'Maria',
		'Favorite Subject': 'Math',
		Age: 14
	},
	{
		Name: 'Jose',
		'Favorite Subject': 'Science',
		Age: 13
	}
]);
