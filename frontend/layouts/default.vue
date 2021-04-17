<template>
  <div>
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
        <div class="ml-2 font-bold">BB</div>
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
              :to="{ name: 'categories-id', params: { id: category.id } }"
              tag="a"
            >
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main class="mx-8 mb-8">
      <h1 class="text-6xl mt-32 mb-20 font-bold uppercase">Balalaika Blog</h1>
      <Nuxt />
    </main>

    <footer class="flex justify-center items-center h-12 ml-8">
      <div class="styles_legals__oZBy1">
        <ul class="styles_subLinks__KmUXH">
          <li
            class="typography_Text__21fWd styles_subLink__2wvm- typography_smaller__2CuhM themes_gray__rNovr"
          >
            ©
            <!-- -->2021<!-- -->, Igor Volchenok
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import categoriesQuery from "~/apollo/queries/category/categories";

export default {
  data() {
    return {
      categories: []
    };
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery
    }
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
