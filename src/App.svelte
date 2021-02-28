<script>
	import {
		verb,
		createPresentSimple,
		createPastSimple,
		createFutureSimple,
	} from "./sentences";

	$: tenses;

	let currentSentence;

	let tenses = [
		{
			enabled: true,
			title: "Past Simple",
			sentences: createPastSimple(verb),
		},
		{
			enabled: true,
			title: "Present Simple",
			sentences: createPresentSimple(verb),
		},
		{
			enabled: true,
			title: "Future Simple",
			sentences: createFutureSimple(verb),
		},
		{
			enabled: false,
			title: "Past Continuous",
			sentences: { positive: "", negative: "", interrogative: "" },
		},
		{
			enabled: false,
			title: "Present Continuous",
			sentences: { positive: "", negative: "", interrogative: "" },
		},
		{
			enabled: false,
			title: "Future Continuous",
			sentences: { positive: "", negative: "", interrogative: "" },
		},
		{
			enabled: false,
			title: "Past Perfect",
			sentences: { positive: "", negative: "", interrogative: "" },
		},
		{
			enabled: false,
			title: "Present Perfect",
			sentences: { positive: "", negative: "", interrogative: "" },
		},
		{
			enabled: false,
			title: "Future Perfect",
			sentences: { positive: "", negative: "", interrogative: "" },
		},
		{
			enabled: false,
			title: "Past Perfect Continuous",
			sentences: { positive: "", negative: "", interrogative: "" },
		},
		{
			enabled: false,
			title: "Present Perfect Continuous",
			sentences: { positive: "", negative: "", interrogative: "" },
		},
		{
			enabled: false,
			title: "Future Perfect Continuous",
			sentences: { positive: "", negative: "", interrogative: "" },
		},
	];

	tenses.map((tense) => {
		tense.id = tense.title.split(" ").join("_").toLowerCase();
		tense.failed = false;
	});

	console.log(tenses);

	const settings = {
		sentenceTypes: {
			positive: true,
			negative: true,
			interrogative: true,
		},
	};

	function getRandomSentense() {
		let enabledTenses = tenses.filter((tense) => tense.enabled);
		if (!enabledTenses.length) return null;
		let tense = enabledTenses[Math.floor(Math.random() * enabledTenses.length)];
		let enabledSentenseTypes = Object.keys(settings.sentenceTypes).filter(
			(type) => settings.sentenceTypes[type]
		);
		if (!enabledSentenseTypes.length) return null;
		let sentenceType =
			enabledSentenseTypes[
				Math.floor(Math.random() * enabledSentenseTypes.length)
			];
		return {
			sentence:
				tense.sentences[sentenceType][
					Math.floor(Math.random() * tense.sentences[sentenceType].length)
				],
			sentenceType,
			tense,
		};
	}

	function updateCurrentSentense() {
		currentSentence = getRandomSentense();
		tenses.map((tense) => {
			tense.failed = false;
		});
		tenses = tenses;
	}

	function onSelectTense(tense) {
		if (currentSentence && currentSentence.tense.id == tense.id) {
			updateCurrentSentense();
		} else {
			tense.failed = true;
			tenses = tenses;
		}
	}

	updateCurrentSentense();
</script>

<div class="container">
	<!-- Sentence -->
	<div class="row" style="margin-top: 30px;">
		<div class="col">
			<p class="text-center ">
				<strong>
					{currentSentence.sentence}
				</strong>
			</p>
		</div>
	</div>
	<hr />

	<!-- Buttons -->
	<div class="row row-cols-3">
		{#each tenses as tense, i (tense.id)}
			{#if tense.enabled}
				<div class="col">
					<div class="form-group">
						<button
							class="btn btn-sm btn-block {tenses[i].failed
								? 'btn-danger'
								: 'btn-outline-primary'}"
							on:click={() => onSelectTense(tense)}
						>
							{tense.title}
						</button>
					</div>
				</div>
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
			{#each tenses as tense}
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						bind:checked={tense.enabled}
						id={tense.id}
					/>
					<label class="form-check-label" for={tense.id}>
						{tense.title}
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
				<label class="form-check-label" for={settings.sentenceTypes.positive}
					>Positive</label
				>
			</div>
			<div class="form-check">
				<input
					class="form-check-input"
					type="checkbox"
					bind:checked={settings.sentenceTypes.negative}
					id={settings.sentenceTypes.negative}
				/>
				<label class="form-check-label" for={settings.sentenceTypes.negative}
					>Negative</label
				>
			</div>
			<div class="form-check">
				<input
					class="form-check-input"
					type="checkbox"
					bind:checked={settings.sentenceTypes.interrogative}
					id={settings.sentenceTypes.interrogative}
				/>
				<label
					class="form-check-label"
					for={settings.sentenceTypes.interrogative}>Interrogative</label
				>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col">...</div>
	</div>

	<div class="row">
		<div class="col">...</div>
	</div>

	<div class="row">
		<div class="col">...</div>
	</div>

	<div class="row">
		<div class="col">...</div>
	</div>
</div>

<style>
	button {
		min-height: 80px;
	}

	.btn-outline-primary:hover {
		background-color: #fff;
		border-color: #007bff;
		color: #007bff;
	}
</style>
