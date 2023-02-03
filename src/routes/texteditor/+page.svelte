<script lang="ts">
	import Header from '../components/Header.svelte';
	import VerticalTabs from '../components/VerticalTabs.svelte';
	let tabNames: string[] = ['Readme', 'Simple Text Editor', 'Markdown Text Editor', 'Contribute'];
	let activeTab: string = 'Simple Text Editor';
	const tabChange = (e) => {
		activeTab = tabNames[e.detail];
	};
	let text: string = 'Start typing here';
</script>

<Header name="Text Editor" />

<div class="mt-20 flex m-auto container">
	<div class="basis-[30%] ml-10">
		<VerticalTabs {tabNames} {activeTab} on:tabChange={tabChange} />
	</div>
	<div class="basis-[100%] bg-white h-[90vh] mb-10 mr-10">
		{#if activeTab === 'Readme'}
			Readme
		{:else if activeTab === 'Simple Text Editor'}
			<textarea
				placeholder="Start typing here"
				class="mx-5 my-5 h-[85vh] w-[70vw] p-3 text-lg outline-none "
			/>
		{:else if activeTab === 'Markdown Text Editor'}
			Md
		{:else if activeTab === 'Contribute'}
			Contribute
		{/if}
	</div>
</div>
