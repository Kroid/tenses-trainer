<script context="module">
	import { base } from '$app/paths';

	let prefix = base;

	if (prefix && prefix[prefix.length - 1] == '/') {
		prefix = prefix.substring(0, prefix.length - 1);
	}

	export async function load({ fetch }) {
		const data = await fetch(`${prefix}/tenses.json`).then((r) => r.json());
		return {
			props: { data }
		};
	}
</script>

<script>
	export let data;

	let tenses = Object.keys(data);
	let currentTense = null;
	let showAnswer = false;

	const settings = {
		// {"Present Simple": true, ...}
		tenses: Object.assign(...tenses.map((k) => ({ [k]: true })))
	};

	function enabledTenses() {
		return tenses.filter((tense) => settings.tenses[tense]);
	}

	function random(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	function randomTense() {
		return random(enabledTenses());
	}

	function updateCurrentTense() {
		currentTense = randomTense();
		showAnswer = false;
	}

	updateCurrentTense();
</script>

<!-- Tense -->
<div class="container">
	<div class="row" style="margin-top: 30px;">
		<div class="col-1-auto">
			<div class="text-center">
				<p>
					<strong>
						{currentTense}
					</strong>
				</p>

				{#if !showAnswer}
					<button class="btn btn-outline-primary" on:click={() => (showAnswer = true)}>show</button>
				{/if}
			</div>

			{#if showAnswer}
				<table class="table text-center">
					<tbody>
						<tr>
							<td style="width: 50%">auxiliary verb</td>
							<th>{data[currentTense].auxiliary_verb}</th>
						</tr>
						<tr>
							<td>verb form</td>
							<th>{data[currentTense].verb_form}</th>
						</tr>
					</tbody>
				</table>

				<div class="text-center">
					<button class="btn btn-outline-primary" on:click={() => updateCurrentTense()}>next</button
					>
				</div>
			{/if}
		</div>
	</div>
	<hr />
</div>

<!-- Settings -->
<div class="container">
	<div class="row">
		<div class="col">
			<h3 class="text-center">Settings</h3>
		</div>
	</div>

	<div class="row">
		<div class="col">
			<h6>Enabled tenses:</h6>
			{#each tenses.sort() as tense}
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						bind:checked={settings.tenses[tense]}
						on:click={() => updateCurrentTense()}
						id={tense}
					/>
					<label class="form-check-label" for={tense}>
						{tense}
					</label>
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- Docs -->
<div class="container" style="margin-top: 30px;">
	<div class="row">
		<div class="col">
			<h3 class="text-center">Docs</h3>
		</div>
	</div>

	<div class="row">
		<div class="col">
			<table class="table table-striped table-hover table-sm">
				<thead>
					<tr>
						<th>tense</th>
						<th>auxiliary verb</th>
						<th>verb form</th>
					</tr>
				</thead>
				<tbody>
					{#each tenses.sort() as tense}
						{#if settings.tenses[tense]}
							<tr>
								<td>{tense}</td>
								<td>{data[tense].auxiliary_verb}</td>
								<td>{data[tense].verb_form}</td>
							</tr>
						{/if}
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
