<script lang="ts">
	import { onMount } from 'svelte';

	let simpleTextEditorContent: string = '';
	if (typeof window !== 'undefined' && window.localStorage) {
		simpleTextEditorContent = localStorage.getItem('simpleTextEditorData') || '';
	}

	function simpleTextEditorDataUpdate(): void {
		localStorage.setItem('simpleTextEditorData', simpleTextEditorContent);
	}

	onMount(() => {
		const textArea = document.querySelector('textarea');
		textArea.addEventListener('input', () => {
			const height = textArea.scrollHeight;
			textArea.style.height = height + 'px';
		});
	});
</script>

<textarea
	bind:value={simpleTextEditorContent}
	on:input={simpleTextEditorDataUpdate}
	placeholder="Start typing here"
	class="  textcolors bgcolors h-auto min-h-screen w-full overflow-hidden text-lg outline-none"
/>
