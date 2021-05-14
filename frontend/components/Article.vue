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
      <source :src="api_url + article.image.url" />
      The video element is not supported by your browser.
    </video>
    <!-- 
    <button
      class="border border-white capitalize font-bold inline-flex items-center px-7 py-3 select-none text-xl relative"
      @click="openShare"
    >
      Share
      <transition name="share">
        <Share v-if="isVisible" @hide="closeShare" />
      </transition>
    </button> -->

    <div class="p-6">
      <h2
        class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase"
      >
        {{ article.category.name }}
      </h2>

      <h3
        :dir="direction"
        class="title-font text-lg font-medium text-gray-900 mb-3"
      >
        {{ articleTitle(article.title) }}
      </h3>

      <p class="leading-relaxed mb-3">
        {{ article.content }}
      </p>

      <!-- linlks -->
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

        <!-- share -->
        <span
          v-if="isHomePage"
          class="text-gray-400 inline-flex items-center leading-none text-sm ml-2 pl-3 py-1 border-l-2 border-gray-200 cursor-pointer relative"
          @click="openShare"
        >
          <transition name="share">
            <Share v-if="isVisible" @hide="closeShare" />
          </transition>
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
              d="M18 8a3 3 0 100-6 3 3 0 000 6zM6 15a3 3 0 100-6 3 3 0 000 6zM18 22a3 3 0 100-6 3 3 0 000 6zM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  </article>
</template>

<script>
import Share from "~/components/Share";
export default {
  name: "Article",

  components: {
    Share
  },

  props: {
    article: Object
  },

  data() {
    return {
      api_url: process.env.strapiBaseUri,
      isVisible: false
    };
  },

  computed: {
    direction() {
      return this.article.category.name === "featured" ? "rtl" : "ltr";
    },
    isHomePage() {
      return this.$route.path !== "/";
    }
  },

  methods: {
    articleTitle(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    },

    openShare() {
      this.isVisible = true;
    },
    closeShare() {
      this.isVisible = false;
    }
  }
};
</script>

<style scoped>
.share-enter-active,
.share-leave-active {
  transition: opacity 0.5s;
}
.share-enter,
.share-leave-to {
  opacity: 0;
}
</style>
