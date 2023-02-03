<script lang='ts'>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let tabNames:string[];
	export let activeTab:string;
</script>

<div class="flex flex-row gap-0">
	{#each tabNames as tabName, i}
		<button
			on:click={() => dispatch('tabChange', i)}
			class:active={tabName === activeTab}
			class="tabName px-4 py-2 -mt-10 bg-gray  "
			>{tabName}
		</button>
	{/each}
</div>

<style>
	.active {
		background-color: white;
	}

	.tabName:hover {
		background-color: rgb(211, 211, 211);
	}
</style>
