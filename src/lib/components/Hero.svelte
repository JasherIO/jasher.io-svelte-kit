<script lang="ts">
  import Image from "$lib/components/Image.svelte";

  const widths = [ 800, 1280, 1920, 2048, 3840 ];

  const width = 1000;
  const height = Math.ceil(1280/1920 * width);
</script>

<section class="w-screen relative shadow-xl">
  <div class="absolute inset-0">
    <Image id="retro_gaming" widths={widths} alt="Retro Gaming" {width} {height} loading="lazy" class="h-full w-full object-cover grayscale" />
  </div>

  <div class="absolute inset-0 bg-green-500 dark:bg-green-900 mix-blend-multiply backdrop-blur-sm" />

  <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-40 lg:px-8">
    <h1 class="max-w-lg mx-auto text-center text-white text-4xl font-extrabold font-display tracking-tight sm:text-5xl lg:text-6xl">
      Hi, I'm Josh!
    </h1>
    <p class="mt-4 max-w-lg mx-auto text-center text-xl text-green-200 sm:max-w-3xl">
      A web developer, tournament operator, and soccar enthusiast.
    </p>
    <div class="mt-6 sm:mt-8 mx-auto flex justify-center">
      <a sveltekit:prefetch href="/contact" class="px-6 sm:px-8 py-2 sm:py-3 text-lg font-bold rounded-full shadow-sm text-green-900 bg-neutral-100 hover:bg-green-50">
        Contact
      </a>
    </div>
  </div>
</section>