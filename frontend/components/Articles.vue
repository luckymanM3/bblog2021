<template>
  <section class="flex">
    <article class="w-1/2">
      <div
        class="h-full mr-24 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
      >
        <!-- <img
          class="lg:h-48 md:h-36 w-full object-cover object-center"
          :src="api_url + articleList[0].image.url"
          alt="balalaika"
        /> -->

        <video class="w-full" autoplay playsinline muted loop>
          <source :src="api_url + articleList[0].image.url" type="" />
          The video element is not supported by your browser.
        </video>
        <div class="p-6">
          <h2
            class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase"
          >
            {{ articleList[0].category.name }}
          </h2>
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
            {{ articleTitle(articleList[0].title) }}
          </h1>
          <p
            class="leading-relaxed mb-3"
            v-if="articleList[0].content"
            v-html="$md.render(articleList[0].content)"
          ></p>
          <div class="flex items-center flex-wrap ">
            <a class="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0"
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
            </a>
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
      </div>
    </article>

    <div class="w-1/2 grid grid-cols-2 grid-rows-2 gap-24">
      <template v-for="(article, i) in articleList">
        <article v-if="i > 0" :key="article.id">
          <div
            class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
          >
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              :src="api_url + article.image.url"
              alt="balalaika"
            />
            <div class="p-6">
              <h2
                class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase"
              >
                {{ article.category.name }}
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                {{ article.title }}
              </h1>
              <p class="leading-relaxed mb-3">
                {{ article.content }}
              </p>
              <div class="flex items-center flex-wrap ">
                <a
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
                </a>
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
                    <path
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    ></path>
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
          </div>
        </article>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    articles: Array
  },

  data() {
    return {
      api_url: process.env.strapiBaseUri
    };
  },

  computed: {
    articleList() {
      return this.articles;
    }
  },

  methods: {
    articleTitle(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
  }
};
</script>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
