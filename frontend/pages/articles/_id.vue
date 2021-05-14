<template>
  <section v-if="isArticle">
    <Article :article="article" class="xl:w-6/12 xl:mx-auto" />
  </section>
</template>

<script>
import { isEmpty } from "lodash";
import articleQuery from "~/apollo/queries/article/article";
import Article from "~/components/Article";

export default {
  name: "ArticlePage",
  components: { Article },

  data() {
    return {
      article: {}
    };
  },
  apollo: {
    article: {
      prefetch: true,
      query: articleQuery,
      variables() {
        return { id: this.$route.params.id };
      }
    }
  },

  validate({ params, query, store }) {
    return true;
  },

  computed: {
    isArticle() {
      return !isEmpty(this.article);
    }
  }
};
</script>
