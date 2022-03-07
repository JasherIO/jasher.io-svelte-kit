<script lang="ts">
  import { page } from '$app/stores';
  import Cross from './Icons/Cross.svelte';
  import Github from './Icons/Github.svelte';
  import HamburgerMenu from './Icons/HamburgerMenu.svelte';
  import Twitter from './Icons/Twitter.svelte';

  const routes = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/about",
      label: "About",
      desktop: true,
    },
    {
      path: "/blog",
      label: "Blog",
      desktop: true,
    },
    {
      path: "/contact",
      label: "Contact",
      desktop: true,
    },
    {
      path: "/work",
      label: "Work",
      desktop: true,
    },
  ];

  let isOpen = false;
  const toggle = () => { isOpen = !isOpen; };
</script>

<nav role="banner" aria-labelledby="primary-navigation" class="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center">
  <h2 id="primary-navigation" class="sr-only">Primary Navigation</h2>
  <a sveltekit:prefetch href="/" class="font-display font-medium text-lg sm:text-xl hover:text-green-600 dark:hover:text-green-400">Jasher</a>

  <!-- https://stackoverflow.com/questions/33924655/position-last-flex-item-at-the-end-of-container -->
  <span class="ml-auto">
    <!-- Mobile -->
    <button type="button" aria-expanded="false" on:click={toggle} class="inline-flex sm:hidden text-neutral-700 dark:text-neutral-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-white">
      {#if !isOpen}
        <span class="sr-only">Open navigation menu</span>
        <HamburgerMenu class="h-5 w-5 z-20" />
      {:else}
        <span class="sr-only">Close navigation menu</span>
        <Cross class="h-5 w-5 z-20" />
      {/if}
    </button>
    
    <!-- Desktop -->
    <span class="hidden sm:flex sm:items-center">
      <ul class="space-x-4 sm:space-x-6 text-neutral-600 dark:text-neutral-400">
        {#each routes.filter(x => x?.desktop) as route}
          <li class="inline">
            <a sveltekit:prefetch href={route.path} class="{$page.url.pathname === route.path ? 'text-green-600 dark:text-green-400' : 'hover:text-green-600 dark:hover:text-green-400'}">
              {route.label}
            </a>
          </li>
        {/each}
      </ul>
    
      <span class="ml-6 space-x-6 text-neutral-700 flex items-center">
        <div class="h-5 border-l border-neutral-700"></div>
    
        <a href="https://github.com/JasherIO" rel="external" target="_blank" class="group">
          <Github class="h-5 w-5 group-hover:text-green-600 dark:group-hover:text-green-400" />
        </a>
        
        <a href="https://twitter.com/JasherIO" rel="external" target="_blank" class="group">
          <Twitter class="h-5 w-5 group-hover:text-green-600 dark:group-hover:text-green-400" />
        </a>
      </span>
    </span>
  </span>

  {#if isOpen}
    <div class="flex flex-col justify-center items-center h-screen w-screen p-10 fixed inset-0 z-10 bg-neutral-900 text-xl">
      <ul class="contents space-y-8 text-neutral-600 dark:text-neutral-400">
        {#each routes as route}
          <li class="inline" on:click={toggle}>
            <a sveltekit:prefetch href={route.path} class="{$page.url.pathname === route.path ? 'text-green-600 dark:text-green-400' : 'hover:text-green-600 dark:hover:text-green-400'}">
              {route.label}
            </a>
          </li>
        {/each}
      </ul>

      <hr class="w-1/3 mt-8 border border-neutral-700" />

      <span class="flex items-center space-x-8 mt-8 text-neutral-700">
        <a href="https://github.com/JasherIO" rel="external" target="_blank" class="group">
          <Github class="h-7 w-7 group-hover:text-green-600 dark:group-hover:text-green-400" />
        </a>
        
        <a href="https://twitter.com/JasherIO" rel="external" target="_blank" class="group">
          <Twitter class="h-7 w-7 group-hover:text-green-600 dark:group-hover:text-green-400" />
        </a>
      </span>
    </div>
  {/if}
</nav>