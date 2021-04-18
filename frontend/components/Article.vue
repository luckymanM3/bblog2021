<template>
  <article
    class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
  >
    <img
      v-if="article.category.name !== 'featured'"
      :src="api_url + article.image.url"
      alt="balalaika"
      class="lg:h-48 md:h-36 w-full object-cover object-center"
    />

    <video v-else class="w-full" autoplay playsinline muted loop>
      <source :src="api_url + article.image.url" type="" />
      The video element is not supported by your browser.
    </video>

    <div class="p-6">
      <h2
        class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase"
      >
        {{ article.category.name }}
      </h2>

      <h1
        :dir="direction"
        class="title-font text-lg font-medium text-gray-900 mb-3"
      >
        {{ articleTitle(article.title) }}
      </h1>

      <p class="leading-relaxed mb-3">
        {{ article.content }}
      </p>

      <!-- linlk -->
      <div class="flex items-center flex-wrap ">
        <router-link
          v-if="this.$route.path === '/'"
          :to="{ name: 'articles-id', params: { id: article.id } }"
          class="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0"
          >Learn More
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </router-link>
        <span
          class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
        >
          <svg
            class="w-4 h-4 mr-1"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle></svg
          >1.2K
        </span>
        <span
          class="text-gray-400 inline-flex items-center leading-none text-sm"
        >
          <svg
            class="w-4 h-4 mr-1"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
            ></path></svg
          >6
        </span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Article",
  props: {
    article: Object
  },

  data() {
    return {
      api_url: process.env.strapiBaseUri
    };
  },

  computed: {
    direction() {
      return this.article.category.name === "featured" ? "rtl" : "ltr";
    }
  },

  methods: {
    articleTitle(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
  }
};
</script>
