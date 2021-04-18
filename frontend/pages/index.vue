<template>
  <section class="flex flex-col xl:flex-row">
    <div class="w-full xl:w-1/2 mr-0 xl:mr-24">
      <template v-for="article in articles">
        <template v-if="article.category.name === 'featured'">
          <Article :article="article" :key="article.id" />
        </template>
      </template>
    </div>

    <div class="w-full xl:w-1/2  sm:grid grid-cols-2 grid-rows-2 gap-24">
      <template v-for="article in articles">
        <template v-if="article.category.name !== 'featured'">
          <Article :article="article" :key="article.id" class="mt-24 xl:mt-0" />
        </template>
      </template>
    </div>
  </section>
</template>

<script>
import articlesQuery from "~/apollo/queries/article/articles";
import Article from "~/components/Article";

export default {
  components: {
    Article
  },
  data() {
    return {
      articles: []
    };
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      }
    }
  }
};
</script>
