<script lang="ts">
	import VerticalTabs from '../components/VerticalTabs.svelte';
	export let tabNames: string[];
	let activeTab: number = 1;
	let button: boolean;
	const tabChange = (e: any): void => {
		activeTab = e.detail;
	};
	export let showSideMenu: boolean;
</script>

<div
	class=" fixed mt-20 flex w-fit transition-transform md:static md:container md:mx-auto  md:transition-none {showSideMenu
		? 'translate-x-4 '
		: ' right-4 '} "
>
	<div class="w-[60vw] md:w-1/4 2xl:w-1/5 ">
		<VerticalTabs {tabNames} {activeTab} on:tabChange={tabChange} />
	</div>
	<div
		class=" mb-10 h-[90vh]  w-[91vw] bg-primarycolor p-10  outline outline-1 -outline-offset-[12px] outline-textcolor/20 dark:bg-darkprimarycolor  dark:outline-darktextcolor/20 md:mr-10  md:w-3/4 2xl:w-4/5 "
	>
		{#if activeTab === 0}
			<slot name="0" />
		{:else if activeTab === 1}
			<slot name="1" />
		{:else if activeTab === 2}
			<slot name="2" />
		{:else if activeTab === 3}
			<slot name="3" />
		{:else if activeTab === 4}
			<slot name="4" />
		{/if}
	</div>
</div>
