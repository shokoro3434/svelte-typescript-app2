<script lang="ts">
	import ToDoInputForm from "./components/ToDoInputForm.svelte";
	import ToDoList from "./components/ToDoList.svelte";
	import MountWithFetch from "./components/MountWithFetch.svelte";
//	import { fetchTodos } from "./hooks/fetchDefenses";
//	import dotenv from 'dotenv';
//	dotenv.config();
	export let name: string;
	let nameEntered: boolean = false;
	let lastName: string = "";
	let firstName: string = "";
	let fullName: string = "";
	$: fullName = lastName + " " + firstName;
	function handleSubmit() {
		if (lastName && firstName) {
			nameEntered = true;
		}
	}
	console.log(process.env.API_KEY)
	//fetchTodos();
	console.log("#####")
//	console.log(process.env.API_KEY)
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{#if nameEntered}
		<h1>タスクリストアプリケーションへようこそ、{fullName}さん!</h1>
		<ToDoInputForm userName={fullName} />
		<ToDoList />
	{:else}
		<h1>タスクリストアプリケーションへようこそ!</h1>
		<h3>名前を入力してください。</h3>
		<form on:submit|preventDefault={handleSubmit}>
			<div>
				<input
					bind:value={lastName}
					type="text"
					placeholder="姓"
					required
				/>
			</div>
			<div>
				<input
					bind:value={firstName}
					type="text"
					placeholder="名"
					required
				/>
			</div>
			<button type="submit">タスク管理を始める</button>
		</form>
	{/if}
	<MountWithFetch/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>