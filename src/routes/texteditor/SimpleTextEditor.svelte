<script lang="ts">
	let simpleTextEditorContent: string = '';
	if (typeof window !== 'undefined' && window.localStorage) {
		simpleTextEditorContent = localStorage.getItem('simpleTextEditorData') || '';
	}

	function simpleTextEditorDataUpdate(): void {
		localStorage.setItem('simpleTextEditorData', simpleTextEditorContent);
	}
</script>

<textarea
	bind:value={simpleTextEditorContent}
	on:input={simpleTextEditorDataUpdate}
	placeholder="Start typing here"
	class="  textcolors bgcolors h-full w-full text-lg outline-none"
/>
