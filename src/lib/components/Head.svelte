<script lang="ts">
  import site from '$lib/site.json';
  
	const twitter = site.platforms.find(platform => platform.name === "Twitter");

  export let title: string = site.metadata.title;
  export let description: string = site.metadata.description;
  export let keywords: string = site.metadata.keywords;
  export let theme_color: string = site.metadata.theme_color;
  export let twitter_creator: string = twitter?.id || '';
  export let twitter_site: string = twitter?.id || '';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description}>
	<meta name="keywords" content={keywords}>
	<meta name="theme-color" content={theme_color}>

	<!-- Twitter -->
	<meta name="twitter:card" content="summary">
	<meta name="twitter:creator" content={twitter_creator}>
	<meta name="twitter:description" content={description}>
	<!-- <meta name="twitter:image" content="/Jasher.svg"> -->
	<meta name="twitter:site" content={twitter_site}>
	<meta name="twitter:title" content={title}>

	<!-- OpenGraph (Facebook) -->
	<meta property="og:description" content={description}>
	<!-- <meta property="og:image" content="/Jasher.svg"> -->
	<meta property="og:site_name" content={title}>
	<meta property="og:title" content={title}>
	<meta property="og:type" content="website">
	
	<!-- Google Search Console -->
	<meta name="google-site-verification" content="7Mj0lv4nimdAbagoQ3UhfICE_FRtiQci0-6_NksquJQ" />
</svelte:head>