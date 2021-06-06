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
		tenses: Object.assign(...tenses.map((k) => ({ [k]: true }))),
		reverse: false
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
			{#if (!settings.reverse && !showAnswer) || showAnswer}
				<div class="text-center">
					<p>
						<strong>
							{currentTense}
						</strong>
					</p>
				</div>
			{/if}

			{#if settings.reverse || (showAnswer && !settings.reverse)}
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
			{/if}

			{#if showAnswer}
				<div class="text-center">
					<button class="btn btn-outline-primary" on:click={() => updateCurrentTense()}>next</button
					>
				</div>
			{:else}
				<div class="text-center">
					<button class="btn btn-outline-primary" on:click={() => (showAnswer = true)}>show</button>
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

	<div class="row" style="margin-top: 10px;">
		<div class="col">
			<h6>Other:</h6>
			<div class="form-check">
				<input
					class="form-check-input"
					type="checkbox"
					bind:checked={settings.reverse}
					on:click={() => updateCurrentTense()}
					id="reverse"
				/>
				<label class="form-check-label" for="reverse"> Reverse </label>
			</div>
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

<div class="container">
	<div class="row">
		<div class="col">
			<h3 id="-future">Группа времен Future</h3>
			<p>Future Simple, Future Continuous, Future Perfect, Future Perfect Continuous</p>
			<p>Первый из вспомогательных глаголов (если их несколько) - всегда <strong>will</strong>.</p>
			<h3 id="-continuous">Времена типа Continuous</h3>
			<p>Past Continuous, Present Continuous, Future Continuous</p>
			<p>
				Один из вспомогательных глаголов - всегда <strong>be</strong> (в том числе и для Perfect Continuous),
				но его форма отличается в зависимости от лица и времени (прошедшего, настоящего или будущего).
			</p>
			<ol>
				<li>
					Для временной группы <strong>Future</strong> глагол имеет форму <strong>be</strong>.
				</li>
				<li>
					Для временной группы <strong>Past</strong> глагол имеет форму <strong>was/were</strong>.
				</li>
				<li>
					Для временной группы <strong>Present</strong> глагол имеет форму
					<strong>am/is/are</strong>.
				</li>
				<li>
					У времён типа <strong>Perfect Continuous</strong>, вспомогательный глагол
					<strong>be</strong>
					всегда принимает третью форму - <strong>been</strong>.
				</li>
			</ol>
			<p>
				У всех времён типа <strong>Continuous</strong>, в том числе и
				<strong>Perfect Continuous</strong>, форма смыслового глагола - <strong>V-ing</strong>.
			</p>
			<h3 id="-perfect">Времена типа Perfect</h3>
			<p>Past Perfect, Present Perfect, Future Perfect</p>
			<p>
				Один из вспомогательных глаголов - всегда <strong>have</strong> (в том числе и для Perfect Continuous),
				но его форма отличается в зависимости от времени (прошедшего, настоящего или будущего):
			</p>
			<ol>
				<li>
					Для временной группы <strong>Future</strong> глагол имеет форму <strong>have</strong>.
				</li>
				<li>Для временной группы <strong>Past</strong> глагол имеет форму <strong>had</strong>.</li>
				<li>
					Для временной группы <strong>Present</strong> глагол имеет форму
					<strong>have/has</strong>, в зависимости от лица.
				</li>
			</ol>
			<p>
				У всех времён типа <strong>Perfect</strong> (но не <strong>Perfect Continuous</strong>)
				форма смыслового глагола - <strong>V3</strong>.
			</p>
			<h3 id="-perfect-continuous">Времена типа Perfect Continuous</h3>
			<p>Past Perfect Continuous, Present Perfect Continuous, Future Perfect Continuous</p>
			<p>Два вспомогательных глагола:</p>
			<ol>
				<li>have (в различных формах, в зависимости от лица и времени)</li>
				<li>be, всегда в третьей форме - <strong>been</strong>.</li>
			</ol>
			<p>
				У Future перед этими глаголами так же добавляется третий вспомогательный глагол - <strong
					>will</strong
				>.
			</p>
			<table class="table">
				<thead>
					<tr>
						<th>Время</th>
						<th>форма глагола have</th>
						<th>Смысловые глаголы вместе</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Past Perfect Continuous</td>
						<td>had</td>
						<td>had been</td>
					</tr>
					<tr>
						<td>Present Perfect Continuous</td>
						<td>have/has</td>
						<td>have been / has been</td>
					</tr>
					<tr>
						<td>Future Perfect Continuous</td>
						<td>have</td>
						<td>will have been</td>
					</tr>
				</tbody>
			</table>
			<p>
				Форма смыслового глагола, как и у <strong>Continuous</strong> - всегда
				<strong>V-ing</strong>.
			</p>
			<h3 id="-">Другие закономерности</h3>
			<p>
				Порядок следования друг за другом вспомогательных глаголов полностью соответствует порядку
				именования времени.
			</p>
			<p>
				Например, если у нас есть время <strong>Future Perfect Continuous</strong>, то
				вспомогательные глаголы будут в следующем порядке: <strong>will have been</strong>:
			</p>
			<ol>
				<li>Future - will</li>
				<li>Perfect - have</li>
				<li>Continuous - been</li>
			</ol>
			<p>
				Но нужно учитывать, что не всегда у каждого слова в названии времени будет свой временной
				глагол. Например, у <strong>Past Perfect Continuous</strong> вспомогательные глаголы будут только
				из Perfect и Continuous, без Past: had been.
			</p>
		</div>
	</div>
</div>
