import type { PageServerLoad } from './$types';

export const load = (async () => {
	// add feature where if user is already signed in, redirect to profile/home/whatever
	return {};
}) satisfies PageServerLoad;
