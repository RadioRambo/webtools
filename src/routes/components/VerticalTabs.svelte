<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let tabNames: string[];
	export let activeTab: number;
</script>

<div class="flex flex-col justify-between gap-2">
	{#each tabNames as tabName, i}
		<button
			on:click={() => dispatch('tabChange', i)}
			class=" bg-gray ml-4 -mr-0.5 px-8 py-3 text-left text-sm font-semibold lg:text-base {i ===
			activeTab
				? 'textcolors bgcolors font-extrabold'
				: ''} {i === activeTab
				? ''
				: 'textcolors hover:bg-primarycolor/40 dark:hover:bg-darkprimarycolor'}"
			>{tabName}
		</button>
	{/each}
</div>
