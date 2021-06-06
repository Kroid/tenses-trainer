<script>
	import { base } from '$app/paths';

	let prefix = base;

	if (prefix && prefix[prefix.length - 1] == '/') {
		prefix = prefix.substring(0, prefix.length - 1);
	}
</script>

<div class="container">
	<div class="row">
		<div class="col">
			<a class="btn btn-outline-primary" rel="external" href="{prefix}/tenses">Tenses</a>
			<a class="btn btn-outline-primary" rel="external" href="{prefix}/sentences">Sentences</a>
		</div>
	</div>
</div>
