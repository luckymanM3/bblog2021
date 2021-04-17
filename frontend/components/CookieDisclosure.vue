<template>
  <div class="fixed z-50 bg-white bg-opacity-90" v-if="isVisible">
    <p class=" p-8">
      We use
      <a href="https://help.netflix.com/en/legal/privacy#cookies"
        >cookies and similar technologies</a
      >
      on this website to collect information about your browsing activities
      which we use to analyse your use of the website, to personalize our
      services and to customise our online advertisements.
      <a class="pointer cookie-disclosure-link" role="button" href="#"
        >Learn more about our use of cookies and your information</a
      >. By interacting with this site, you agree to our use of cookies.
    </p>
    <div class="absolute top-0 right-8">
      <button class="mt-4" @click="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CookieDisclosure",

  data() {
    return {
      isVisible: true
    };
  },

  methods: {
    close() {
      this.isVisible = false;
    }
  }
};
</script>
