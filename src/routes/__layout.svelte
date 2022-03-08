<script lang="ts">
	import '../app.css';
	import '@fontsource/open-sans/400.css';
	import '@fontsource/open-sans/variable.css';
	import '@fontsource/raleway/400.css';
	import '@fontsource/raleway/variable.css';
	
	import Head from '$lib/components/Head.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Head />

<Navbar />
<slot />
