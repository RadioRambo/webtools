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
	let button = false;
</script>

<Header toolName="Text Editor" />

<div
	class=" fixed mt-20 flex w-fit transition-transform md:static md:container md:mx-auto  md:transition-none {button
		? 'translate-x-4 '
		: ' right-4 '} "
>
	<div class="w-[60vw] md:w-1/4 2xl:w-1/5 ">
		<VerticalTabs {tabNames} {activeTab} on:tabChange={tabChange} />
	</div>
	<div class=" mb-10 h-[90vh] w-[91vw] bg-primarycolor p-7 md:mr-10  md:w-3/4 2xl:w-4/5 ">
		{#if activeTab === 'Readme'}
			Readme
		{:else if activeTab === 'Simple Text Editor'}
			<textarea
				bind:value={simpleTextEditorContent}
				on:input={simpleTextEditorDataUpdate}
				placeholder="Start typing here"
				class="  h-full w-full text-lg outline-none "
			/>
		{:else if activeTab === 'Contribute'}
			Contribute
		{/if}
	</div>
</div>
