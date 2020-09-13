<template>
  <div class="border-t border-gray-400 py-8 flex flex-wrap items-center">
    <img :src="article.author.image" class="w-8 h-8 rounded-full" alt>
    <div class="w-10/12 pl-2">
      <h1 class="text-xs text-green-500 font-bold">{{article.author.username}}</h1>
      <h2 class="text-xs text-gray-500">{{article.createdAt}}</h2>
    </div>
    <h1 class="w-full pt-6 text-2xl font-bold">{{article.title}}</h1>
    <h2 class="w-full text-gray-500 text-sm">{{article.description}}</h2>
    <h3 class="w-full text-sm text-gray-500 pt-8">Read more...</h3>
  </div>
</template>

<script>
export default {
  name: "HomeArticleCard",
  props: {
    article: Object
  }
};
</script>

<style>
</style>
