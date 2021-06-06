<script context="module">
	import { base } from '$app/paths';

	let prefix = base;

	if (prefix && prefix[prefix.length - 1] == '/') {
		prefix = prefix.substring(0, prefix.length - 1);
	}

	export async function load({ fetch }) {
		const data = await fetch(`${prefix}/sentences.json`).then((r) => r.json());
		return {
			props: { data }
		};
	}
</script>

<script>
	export let data;

	let tenses = Object.keys(data);
	let failedTenses = {};
	let currentSentence = null;
	let currentTense = null;

	const settings = {
		// {"Present Simple": true, ...}
		tenses: Object.assign(...tenses.map((k) => ({ [k]: true }))),
		sentenceTypes: {
			positive: true,
			negative: true,
			question: true
		}
	};

	function enabledTenses() {
		return tenses.filter((tense) => settings.tenses[tense]);
	}

	function enabledSentenceTypes() {
		return Object.keys(settings.sentenceTypes).filter((type) => settings.sentenceTypes[type]);
	}

	function random(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	function randomTense() {
		return random(enabledTenses());
	}

	function randomSentenceType() {
		return random(enabledSentenceTypes());
	}

	function randomSentence(tense, sentenceType) {
		return random(data[tense][sentenceType]);
	}

	function updateCurrentSentence() {
		Object.keys(failedTenses).map((tense) => {
			failedTenses[tense] = false;
		});

		currentTense = randomTense();
		currentSentence = randomSentence(currentTense, randomSentenceType());
	}

	function onSelectTense(tense) {
		if (tense == currentTense) {
			updateCurrentSentence();
		} else {
			failedTenses[tense] = true;
		}
	}

	updateCurrentSentence();
</script>

<div class="container">
	<!-- Sentence -->
	<div class="row" style="margin-top: 30px;">
		<div class="col">
			<p class="text-center ">
				<strong>
					{currentSentence}
				</strong>
			</p>
		</div>
	</div>
	<hr />

	<!-- Buttons -->
	<div class="row row-cols-3">
		{#each tenses as tense}
			{#if settings.tenses[tense]}
				<div class="col">
					<div class="form-group">
						<button
							class="btn btn-sm btn-block {failedTenses[tense]
								? 'btn-danger'
								: 'btn-outline-primary'}"
							on:click={() => onSelectTense(tense)}
						>
							{tense}
						</button>
					</div>
				</div>
			{:else}
				<div class="col" />
			{/if}
		{/each}
	</div>

	<hr />

	<!-- Settings -->
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
						on:click={() => updateCurrentSentence()}
						id={tense}
					/>
					<label class="form-check-label" for={tense}>
						{tense}
					</label>
				</div>
			{/each}
		</div>
	</div>

	<div class="row" style="margin-top: 10px;">
		<div class="col">
			<h6>Enabled sentence types:</h6>
			<div class="form-check">
				<input
					class="form-check-input"
					type="checkbox"
					bind:checked={settings.sentenceTypes.positive}
					id={settings.sentenceTypes.positive}
				/>
				<label class="form-check-label" for={settings.sentenceTypes.positive}>Positive</label>
			</div>
			<div class="form-check">
				<input
					class="form-check-input"
					type="checkbox"
					bind:checked={settings.sentenceTypes.negative}
					id={settings.sentenceTypes.negative}
				/>
				<label class="form-check-label" for={settings.sentenceTypes.negative}>Negative</label>
			</div>
			<div class="form-check">
				<input
					class="form-check-input"
					type="checkbox"
					bind:checked={settings.sentenceTypes.question}
					id={settings.sentenceTypes.question}
				/>
				<label class="form-check-label" for={settings.sentenceTypes.question}>Question</label>
			</div>
		</div>
	</div>

	<hr />

	<!-- Docs -->
	<div class="row">
		<div class="col">
			<h3 class="text-center">Docs</h3>
		</div>
	</div>

	{#each tenses as tense}
		{#if settings.tenses[tense]}
			<div class="row">
				<div class="col">
					<h6 style="text-align: center">{tense}</h6>
					<table class="table table-striped table-hover table-sm">
						<thead>
							<tr>
								<th>Positive</th>
								<th>Negative</th>
								<th>Question</th>
							</tr>
						</thead>
						<tbody>
							{#each [0, 1, 2, 3, 4, 5, 6] as idx}
								<tr>
									<td>{data[tense].positive[idx]}</td>
									<td>{data[tense].negative[idx]}</td>
									<td>{data[tense].question[idx]}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		{/if}
	{/each}
</div>

<style>
	.btn {
		min-height: 80px;
		display: inline-block;
		margin: 10px 0 10px;
		width: 100%;
	}

	.btn:focus {
		outline: none;
		box-shadow: none;
	}

	.btn-outline-primary:hover {
		background-color: #fff;
		border-color: #007bff;
		color: #007bff;
	}
</style>
