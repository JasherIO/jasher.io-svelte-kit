<script>
	import '../app.css';
	import '@fontsource/comfortaa/400.css';
	import '@fontsource/comfortaa/variable.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
	<title>Jasher</title>
	<meta name="description" content="A web developer, tournament operator, and soccar enthusiast." />
</svelte:head>

<Navbar />
<slot />
