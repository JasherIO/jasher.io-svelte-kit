<script lang="ts">
  import Head from '$lib/components/Head.svelte';
  import Container from '$lib/components/Container.svelte';
  import { to_date } from '$lib/types/post';

  export let title;
  export let description;
  export let date;
  export let category;
  export let keywords;

  const _date = to_date(date);
</script>

<Head title={`Jasher | ${title}`} {description} {keywords} />

<Container>
  <article class="p-2">
    <span class="text-base md:text-lg text-green-600 dark:text-green-400 font-semibold">{category}</span>
    <h1 class="text-3xl md:text-5xl font-bold my-1">{title}</h1>
    <span class="text-base text-neutral-500 font-semibold space-x-2">
      <!-- <span>{post.stats.text}</span>
      <span>&bull;</span> -->
      <time dateTime={_date.ISO}>
        {_date.text}
      </time>
    </span>
    <div class="max-w-none mx-auto mt-4 selection:bg-green-300 selection:text-green-900 prose md:prose-lg dark:prose-invert prose-neutral prose-a:text-green-600 dark:prose-a:text-green-400 prose-li:my-0.5 md:prose-li:my-0.5 prose-h1:mb-0 md:prose-h1:mb-2">
      <slot />
    </div>
  </article>
</Container>
