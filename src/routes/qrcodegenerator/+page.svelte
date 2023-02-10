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
<div class="container m-auto mt-20 flex">
	<div class="ml-10 basis-[30%]">
		<VerticalTabs {tabNames} {activeTab} on:tabChange={tabChange} />
	</div>
	<div class="mr-10 basis-[100%] bg-white">
		{#if activeTab === 'One'}
			<HorizontalTabs {tabNames} {activeTab} />
		{:else if activeTab === 'Two'}
			<h1>two</h1>
		{/if}
	</div>
</div>
