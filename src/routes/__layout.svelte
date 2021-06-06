<script>
	import { base } from '$app/paths';

	let prefix = base;

	if (prefix && prefix[prefix.length - 1] == '/') {
		prefix = prefix.substring(0, prefix.length - 1);
	}
</script>

<svelte:head>
	<base href={base} />
</svelte:head>

<div class="container" style="margin-bottom: 20px;">
	<div class="row">
		<div class="col">
			<a href="{prefix}/">Home</a>
		</div>
	</div>
</div>

<slot />
