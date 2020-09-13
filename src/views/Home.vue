<template>
  <div>
    <div class="w-full bg-green-500">
      <h1 class="text-5xl font-bold text-center text-white pt-8">Affiliate Star✨</h1>
      <h4 class="text-center text-white pt-6 pb-8 text-lg">A place to start your affiliate career</h4>
    </div>
    <div class="max-w-screen-lg w-4/5 mx-auto flex items-start flex-wrap lg:flex-no-wrap">
      <div class="mt-8 w-full flex-shrink-0 lg:w-4/5 lg:flex-shrink">
        <HomeTabs :tabs="tabs"/>
        <div>
          <HomeArticleCard v-for="(article,index) in articles" :article="article" :key="index"/>
        </div>
      </div>
      <HomeTags :tags="tags"/>
    </div>
  </div>
</template>

<script>
import HomeTabs from "../components/HomeTabs.vue";
import HomeArticleCard from "../components/HomeArticleCard.vue";
import HomeTags from "../components/HomeTags.vue";
// import { fetchArticles, fetchTags } from "../common/api.js";
import agent from "../common/agent.js";

export default {
  name: "Home",
  components: {
    HomeTabs,
    HomeArticleCard,
    HomeTags
  },
  data() {
    return {
      tab: "Global Feed",
      tabs: ["Global Feed", "Your Feed"],
      tag: "",
      tags: ["butt", "dragon", "console", "else", "nice"],
      articles: [],
      articlesCount: 0
    };
  },
  async mounted() {
    // this.articles = (await fetchArticles()).articles;
    // this.tags = (await fetchTags()).tags;
    this.articles = (await agent.Articles.all()).articles;
    this.tags = (await agent.Tags.getAll()).tags;
  },
  methods: {}
};
</script>

<style>
</style>
