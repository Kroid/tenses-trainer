<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<base href={base} />
</svelte:head>

<div class="container" style="margin-bottom: 20px;">
	<div class="row">
		<div class="col">
			<a href={base}>Home</a>
		</div>
	</div>
</div>

<slot />
