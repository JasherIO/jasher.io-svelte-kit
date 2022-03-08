<script>
  const base = 'max-w-4xl mx-auto';
  const _class = $$props.class ? `${base} ${$$props.class}` : base;
</script>

<main class={_class}>
  <slot />
</main>