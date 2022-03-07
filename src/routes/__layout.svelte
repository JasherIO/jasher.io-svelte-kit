<script lang="ts">
	import '../app.css';
	import '@fontsource/open-sans/400.css';
	import '@fontsource/open-sans/variable.css';
	import '@fontsource/raleway/400.css';
	import '@fontsource/raleway/variable.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
	<title>Jasher</title>
	<meta name="description" content="A web developer, tournament operator, and soccar enthusiast." />
</svelte:head>

<Navbar />
<slot />
