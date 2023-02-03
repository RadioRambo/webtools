<script lang='ts'>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let tabNames: string[];
	export let activeTab: string;
</script>

<div class="flex flex-col gap-2 justify-between">
	{#each tabNames as tabName, i}
		<button
			on:click={() => dispatch('tabChange', i)}
			class:active={tabName === activeTab}
			class="tabName px-8 py-3  text-xl bg-gray font-medium text-left "
			>{tabName}
		</button>
	{/each}
</div>

<style>
	.active {
		background-color: #ffffff;
		font-weight: 600;
	}

	.tabName:hover {
		background-color: rgb(211, 211, 211);
	}
</style>
