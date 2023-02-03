<script lang="ts">
	import Header from '../components/Header.svelte';
	import VerticalTabs from '../components/VerticalTabs.svelte';
	import HorizontalTabs from '../components/HorizontalTabs.svelte';

	let tabNames = ['One', 'Two', 'Three'];
	let activeTab = 'One';
	const tabChange = (e) => {
		activeTab = tabNames[e.detail];
	};
</script>

<Header />
<div class="mt-20 flex m-auto container">
	<div class="basis-[30%] ml-10">
		<VerticalTabs {tabNames} {activeTab} on:tabChange={tabChange} />
	</div>
	<div class="basis-[100%] bg-white mr-10">
		{#if activeTab === 'One'}
			<HorizontalTabs {tabNames} {activeTab} />
		{:else if activeTab === 'Two'}
			<h1 >two</h1>
		{/if}
	</div>
</div>
