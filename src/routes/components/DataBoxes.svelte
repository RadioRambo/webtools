<script lang="ts">
	export let heading: string;
	export let content: string;
	interface systemOverviewDetails {
		[key: string]: string;
	}
	export let details: systemOverviewDetails;
</script>

<div class="my-8 bg-red-300 ">
	<h3 class="my-2 text-2xl font-semibold">{heading}</h3>

	{#each Object.entries(details) as [key, value]}
		<div class="grid grid-cols-2  ">
			<p class="[font-weight: 500}] my-1 text-xl">{key}</p>
			<p class="my-1 text-xl font-[500]">{value}</p>
		</div>
	{/each}
</div>
