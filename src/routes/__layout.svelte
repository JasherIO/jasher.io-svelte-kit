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
	<meta name="description" content="A web developer, tournament operator, and soccar enthusiast.">
	<meta name="keywords" content="Jasher, Portfolio, Software, Web Developer, Esports, Rocket League, Tournament, Referee">
	<meta name="theme-color" content="#22c55e">

	<!-- Twitter -->
	<meta name="twitter:card" content="summary">
	<meta name="twitter:creator" content="JasherIO">
	<meta name="twitter:description" content="A web developer, tournament operator, and soccar enthusiast.">
	<!-- <meta name="twitter:image" content="/Jasher.svg"> -->
	<meta name="twitter:site" content="JasherIO">
	<meta name="twitter:title" content="Jasher">

	<!-- OpenGraph (Facebook) -->
	<meta property="og:description" content="A web developer, tournament operator, and soccar enthusiast.">
	<!-- <meta property="og:image" content="/Jasher.svg"> -->
	<meta property="og:site_name" content="Jasher">
	<meta property="og:title" content="Jasher">
	<meta property="og:type" content="website">
	
	<!-- Google Search Console -->
	<meta name="google-site-verification" content="7Mj0lv4nimdAbagoQ3UhfICE_FRtiQci0-6_NksquJQ" />
</svelte:head>

<Navbar />
<slot />
