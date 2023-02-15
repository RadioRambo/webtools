<script lang='ts'>
    import Readme from "./Readme.svelte";
import Layout from '../components/Layout.svelte';
	import SimpleTextEditor from "./SimpleTextEditor.svelte";
	import Contribute from "./Contribute.svelte";
    import Header from "../components/Header.svelte";
    let showSideMenu: boolean = false;
	const toggleSideMenuInMobileView = (): void => {
		showSideMenu = !showSideMenu;
	};

</script>
<Header toolName="Text Editor" on:showsidemenu={toggleSideMenuInMobileView} />
<Layout tabNames={['Readme', 'Simple Text Editor', 'Contribute']} {showSideMenu}>
<Readme slot="0"/>
<SimpleTextEditor slot='1'/>
<Contribute slot='3'/>'
</Layout>