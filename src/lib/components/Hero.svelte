<script lang="ts">
  import Image from "$lib/components/Image.svelte";

  const config = {
    id: 'retro_gaming',
    sizes: [
      { width: 640, max_width: 800 },
      { width: 1000, max_width: 1280 },
      { width: 1920, max_width: 2500 },
      { width: 3840, max_width: 4500 },
    ],
    base: { width: 640, max_width: 800 }
  };
</script>

<section class="w-screen relative shadow-xl">
  <div class="absolute inset-0">
    <Image alt="Retro Gaming" class="h-full w-full object-cover grayscale" {config} />
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