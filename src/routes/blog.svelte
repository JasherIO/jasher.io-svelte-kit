<script lang="ts">
  import Container from '$lib/components/Container.svelte';
  import Head from '$lib/components/Head.svelte';
  import ChevronLeft from '$lib/components/Icons/ChevronLeft.svelte';
  import ChevronRight from '$lib/components/Icons/ChevronRight.svelte';
  import type { Pagination, Posts } from '$lib/types/post';

  export let pagination: Pagination;
  export let posts: Posts;

  console.log('blog.svelte - ', pagination);
  
  const has_previous = pagination.page > 1;
  const previous = pagination.page - 1;
  const is_first = previous === 1;

  const has_next = pagination.page < pagination.total_pages;
  const next = pagination.page + 1;
  const is_last = next === pagination.total_pages;
</script>

<Head title="Jasher | Blog" />

<Container class="mt-12">
  <h1 class="sr-only">Posts</h1>
  {#each posts as post, index}
    <article class={`rounded-lg p-2 ${index > 0 && 'mt-8'}`}>
      <span class="text-green-600 dark:text-green-400 font-semibold mb-1">{post.frontmatter.category}</span>
      <a sveltekit:prefetch href={`/blog/${post.slug}`}>
        <h2 class="text-2xl md:text-4xl font-bold mt-1 mb-1">{post.frontmatter.title}</h2>
        <p class="text-base md:text-lg text-neutral-700 dark:text-neutral-400 mb-1">{post.frontmatter.description}</p>
      </a>
      <span class="text-sm md:text-base text-neutral-500 font-medium space-x-2">
        <!-- <span>{post.stats.text}</span>
        <span>&bull;</span> -->
        <time dateTime={post.frontmatter.date.ISO}>
          {post.frontmatter.date.text}
        </time>
      </span>
    </article>
  {/each}

  <nav aria-labelledby="pagination" class="flex justify-center items-center mt-16 mb-60 space-x-24 text-lg font-medium">
    <span id="pagination" class="sr-only">Pageination controls</span>
    <a sveltekit:prefetch href={is_first ? "/blog" : `/blog?page=${previous}`} rel={is_first ? "first" : "previous"} aria-hidden={!has_previous} class={`group ${!has_previous && 'hidden'}`}>
      <span class="flex items-center space-x-2">
        <ChevronLeft class="h-4 w-4 text-neutral-400 group-hover:text-green-600 dark:group-hover:text-green-400" />
        <span class="text-neutral-500 group-hover:text-green-600 dark:group-hover:text-green-400">Previous</span>
      </span>
    </a>
    <span class="text-neutral-500">{pagination.page}</span>
    <a sveltekit:prefetch href={`/blog?page=${next}`} rel={is_last ? "last" : "next"} aria-hidden={!has_next} class={`group ${!has_next && 'hidden'}`}>
      <span class="flex items-center space-x-2">
        <span class="text-neutral-500 group-hover:text-green-600 dark:group-hover:text-green-400">Next</span>
        <ChevronRight class="h-4 w-4 text-neutral-400 group-hover:text-green-600 dark:group-hover:text-green-400" />
      </span>
    </a>
  </nav>
</Container>
