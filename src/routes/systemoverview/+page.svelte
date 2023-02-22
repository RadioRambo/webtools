<script lang="ts">
	import Layout from '../components/Layout.svelte';
	import Readme from './Readme.svelte';
	import Contribute from './Contribute.svelte';
	import Header from '../components/Header.svelte';
	import SystemOverview from './systemoverview.svelte';
	let showSideMenu: boolean = false;
	const toggleSideMenuInMobileView = (): void => {
		showSideMenu = !showSideMenu;
	};
</script>

<Header toolName="System Overview" on:showsidemenu={toggleSideMenuInMobileView} />
<Layout tabNames={['Readme', 'System Overview', 'Contribute']} {showSideMenu}>
	<Readme slot="0" />
	<SystemOverview slot="1" />
	<Contribute slot="2" />
</Layout>
