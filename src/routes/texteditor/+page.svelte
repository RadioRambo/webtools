<script lang="ts">
	import Header from '../components/Header.svelte';
	import VerticalTabs from '../components/VerticalTabs.svelte';

	let tabNames: string[] = ['Readme', 'Simple Text Editor', 'Contribute'];
	let activeTab: string = 'Simple Text Editor';
	const tabChange = (e) => {
		activeTab = tabNames[e.detail];
	};

	let simpleTextEditorContent: string = '';

	if (typeof window !== 'undefined' && window.localStorage) {
		simpleTextEditorContent = localStorage.getItem('textEntered') || '';
	}

	function simpleTextEditorDataUpdate(): void {
		localStorage.setItem('simpleTextEditorData', simpleTextEditorContent);
	}
</script>

<Header name="Text Editor" />

<div class="mt-20 flex m-auto container">
	<div class="basis-[30%] ml-10 ">
		<VerticalTabs {tabNames} {activeTab} on:tabChange={tabChange} />
	</div>
	<div class="basis-[100%] bg-white h-[90vh] p-7 mb-10 mr-10">
		{#if activeTab === 'Readme'}
			Readme
		{:else if activeTab === 'Simple Text Editor'}
			<textarea
				bind:value={simpleTextEditorContent}
				on:input={simpleTextEditorDataUpdate}
				placeholder="Start typing here"
				class="  text-lg w-full h-full outline-none "
			/>
		{:else if activeTab === 'Contribute'}
			Contribute
		{/if}
	</div>
</div>
