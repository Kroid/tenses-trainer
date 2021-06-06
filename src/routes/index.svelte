<script>
	import { base } from '$app/paths';

	let prefix = base;

	if (prefix && prefix[prefix.length - 1] == '/') {
		prefix = prefix.substring(0, prefix.length - 1);
	}
</script>

<a rel="external" href="{prefix}/tenses">Tenses</a>
<a rel="external" href="{prefix}/sentences">Sentences</a>
