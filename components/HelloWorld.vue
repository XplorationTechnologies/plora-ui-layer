<script setup lang="ts">
const { myLayer } = useAppConfig();
</script>

<template>
  <article class="flex items-center flex-col justify-center h-screen w-screen text-center gap-4 max-w-xl mx-auto p-6">
    <h1 class="font-bold text-3xl lg:text-4xl">
      Hello World!
    </h1>
    <code class="text-primary">
      from {{ myLayer }}
    </code>
    <div class="flex flex-col gap-2 text-xl lg:text-2xl">
      <p>This is a PloraUI Layer</p>
      <p>
        You can extend this layer and start customize with your own configurations by editing the <mark>app.config.ts</mark> file.
      </p>
    </div>
  </article>
</template>
