<script setup lang="ts">
// const route = useRoute()
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog')
    .sort({ data: 1 })
    .limit(3)
    .find()
)
</script>

<template>
  <section>
    <h1 class="text-5xl font-bold mt-20">👋 Hello, I'm Jeremy Kung!</h1>
    <p class="text-base text-gray-900 p-2 italic">Full Stack Web Developer / Design & Technology Teacher</p>
    <!-- <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a> -->
  </section>
  <section class="flex flex-col md:flex-row">
    <div class="md:w-3/4">
      <h2 class="text-3xl font-bold mt-8">My Story</h2>
      <p class="text-lg py-2">I am Full Stack developer from Vancouver, BC. I am self-taught and believe that these days you can learn absolutely everything on your own as long as you have work ethic and discipline.</p>
    </div>
    <img src="~/assets/images/awai.jpg" class="w-1/2 md:max-w-sm p-8 mx-auto">
  </section>

  <section>
    <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
    <div class="class grid md:grid-cols-3 pt-8 gap-0">
      <Post :posts="posts" />
    </div>
  </section>
</template>
