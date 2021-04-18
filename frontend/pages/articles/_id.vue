<template>
  <section v-if="isArticle">
    <Article :article="article" />
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

  computed: {
    isArticle() {
      return !isEmpty(this.article);
    }
  }
};
</script>
