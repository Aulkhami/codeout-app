<script lang="ts">
	import type { PageProps } from './$types';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	let { data }: PageProps = $props();
</script>

<div class="flex h-screen w-screen items-center justify-center">
	<Card.Root class="h-fit w-full max-w-sm">
		<Card.Header class="text-center">
			<Card.Title class="text-2xl">Welcome to CodeOut!</Card.Title>
			<Card.Description>Please sign in with your Google account to continue</Card.Description>
		</Card.Header>
		<Card.Footer class="flex-col gap-2">
			<Button class="w-full">Login with Google</Button>
		</Card.Footer>
	</Card.Root>
</div>
