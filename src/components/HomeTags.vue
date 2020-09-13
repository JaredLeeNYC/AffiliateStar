<template>
  <div class="bg-gray-200 mt-8 w-full lg:w-2/6 rounded-md ml-8">
    <h1 class="p-2">Popular Tags</h1>
    <div class="px-2 flex flex-wrap items-center">
      <HomeTag v-for="tag in tags" :tag="tag" :key="tag"/>
    </div>
  </div>
</template>

<script>
import HomeTag from "./HomeTag.vue";
export default {
  name: "HomeTags",
  props: {
    tags: Array
  },
  components: {
    HomeTag
  }
};
</script>

<style>
</style>
