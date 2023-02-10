<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let tabNames: string[];
	export let activeTab: string;
</script>

<div class="flex flex-row gap-0">
	{#each tabNames as tabName, i}
		<button
			on:click={() => dispatch('tabChange', i)}
			class=" bg-gray -mt-10 px-4 py-2 {tabName === activeTab
				? 'bg-primarycolor font-[600]'
				: ''} {tabName === activeTab ? '' : 'hover:bg-primarycolor/50'} "
			>{tabName}
		</button>
	{/each}
</div>
