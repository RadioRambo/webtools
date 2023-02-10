<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let tabNames: string[];
	export let activeTab: string;
</script>

<div class="flex flex-col justify-between gap-2">
	{#each tabNames as tabName, i}
		<button
			on:click={() => dispatch('tabChange', i)}
			class=" bg-gray ml-4 -mr-0.5 px-8 py-3 text-left text-sm lg:text-base {tabName === activeTab
				? 'bg-primarycolor font-[600]'
				: ''} {tabName === activeTab ? '' : 'hover:bg-primarycolor/50'}"
			>{tabName}
		</button>
	{/each}
</div>
