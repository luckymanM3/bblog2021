<template>
  <div class="flex flex-col min-h-screen">
    <header class="flex flex-row items-center h-12 ml-8 sticky top-0">
      <div class="w-8 flex flex-grow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 511.982 511.982"
          style="enable-background:new 0 0 511.982 511.982;"
          xml:space="preserve"
          class="h-6"
        >
          <path
            style="fill:#965353;"
            d="M305.895,251.319L496.904,60.31l-45.232-45.233l-191.009,191.01  C199.446,201.821,95.949,217.43,0,270.74l120.62,120.621l120.605,120.621C294.536,416.032,310.145,312.535,305.895,251.319z"
          />
          <path
            style="fill:#FECD57;"
            d="M288.036,397.174c-11.265-11.733-37.904-43.671-33.732-79.185  c6.718-57.343-27.608-92.669-52.779-110.527c-58.498,5.827-131.996,24.655-201.524,63.278l120.62,120.621l120.605,120.621  C262.412,473.859,277.631,434.547,288.036,397.174z"
          />
          <g>
            <path
              style="fill:#424953;"
              d="M427.705,34.561c-4.157,4.171-10.907,4.171-15.079,0c-4.155-4.156-4.155-10.906,0-15.078   c4.172-4.156,10.922-4.156,15.079,0C431.876,23.655,431.876,30.405,427.705,34.561z"
            />
            <path
              style="fill:#424953;"
              d="M416.626,53.638c-4.156,4.172-10.905,4.172-15.062,0c-4.172-4.156-4.172-10.906,0-15.078   c4.156-4.156,10.905-4.156,15.062,0C420.798,42.732,420.798,49.482,416.626,53.638z"
            />
            <path
              style="fill:#424953;"
              d="M196.243,315.739c-8.188-8.188-8.188-21.499,0-29.688c8.172-8.172,21.499-8.187,29.671,0   c8.188,8.188,8.188,21.5,0,29.688C217.742,323.926,204.415,323.926,196.243,315.739z"
            />
          </g>
          <g>
            <path
              style="fill:#646C77;"
              d="M233.461,278.52c-12.359-12.357-32.405-12.357-44.765,0c-12.358,12.359-12.358,32.391,0,44.765   c12.359,12.36,32.405,12.36,44.765,0C245.819,310.926,245.819,290.88,233.461,278.52z M218.383,308.208   c-4.031,4.016-10.577,4.016-14.608,0c-4.016-4.031-4.016-10.578,0-14.608c4.031-4.031,10.577-4.031,14.608,0   C222.414,297.63,222.414,304.177,218.383,308.208z"
            />
            <polygon
              style="fill:#646C77;"
              points="436.594,120.621 391.361,75.387 436.594,0 511.982,75.387  "
            />
          </g>
          <path
            style="fill:#424953;"
            d="M188.462,398.892l-75.388-75.372c-4.156-4.173-4.156-10.922,0-15.078  c4.171-4.172,10.921-4.172,15.077,0l75.389,75.388c4.155,4.156,4.155,10.906,0,15.063  C199.384,403.064,192.634,403.064,188.462,398.892z"
          />
        </svg>
        <div class="ml-2 font-bold">B Blog</div>
      </div>

      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav" v-if="username">
          <li>
            <a href="#" class="uk-link-reset"
              ><img
                src="https://png2.cleanpng.com/sh/a7adacc7226d2dc438dafb37913a8ab8/L0KzQYm3V8E2N5tqipH0aYP2gLBuTfVudZZ5ReZxZT3vdbj2Tf1wfppqRehyZHXyd7L0hb1xeppze9d8cz34frryigR1gV58Rdd2bXX3Pb3shB8udZD7gdc2NXK3coG9UMRibGJrfqI3Mkm0RoS7VMYyPWQ2TqY8M0m5R4GCUb5xdpg=/kisspng-emmet-the-lego-movie-videogame-princess-unikitty-w-emmet-lego-movie-5b4b0604ad1ff0.2916344615316433967091.png"
                class="uk-border-circle"
                height="40"
                width="40"
                alt=""
              />{{ username }}</a
            >
          </li>
          <li><a href="#" @click="logout">Logout</a></li>
        </ul>

        <ul v-else class="flex flex-row mr-14 uppercase">
          <li><a href="/users/signin" class="mr-8">Signin</a></li>
          <li><a href="/users/register">Signup</a></li>
        </ul>
      </div>

      <nav>
        <ul class="flex flex-row">
          <li
            v-for="category in categories"
            :key="category.id"
            class="mr-8 uppercase"
          >
            <router-link
              class="uk-modal-close"
              :to="{ name: '', params: { id: category.id } }"
            >
              {{ category.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </header>

    <!-- <div v-for="(ad, i) in ads" :key="i">
      <div>{{ ads }}}</div>
    </div> -->
    <main class="flex flex-col flex-grow mx-8 mb-20 h-full">
      <h1 class="text-6xl mt-32 mb-20 font-bold uppercase">B Blog</h1>
      <Nuxt />
    </main>

    <Cookies />

    <footer class="text-gray-600 body-font w-full">
      <div class="bg-gray-100">
        <div
          class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
        >
          <p class="text-gray-500 text-sm text-center sm:text-left">
            © 2021 Volchenok —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              class="text-gray-600 ml-1"
              target="_blank"
              >@volchenok</a
            >
          </p>
          <span
            class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
          >
            <a class="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import categoriesQuery from "~/apollo/queries/category/categories";
// import adsQuery from "~/apollo/queries/ad/ads";
import Cookies from "~/components/Cookies";

export default {
  components: {
    Cookies
  },

  data() {
    return {
      categories: [],
      ads: []
    };
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery
    }
    // ads: {
    //   prefetch: true,
    //   query: adsQuery
    // }
  },

  computed: {
    // Set your username thanks to your getter
    username() {
      return this.$store.getters["auth/username"];
    }
  },

  methods: {
    // Define your needed mutations, here: auth/logout
    ...mapMutations({
      logout: "auth/logout"
    })
  }
};
</script>

<style>
body {
  @apply bg-white;
}
</style>
