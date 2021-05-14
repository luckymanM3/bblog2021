<template>
  <transition name="fade">
    <div
      class="fixed bottom-0 w-full flex flex-col flex-nowrap md:flex-row md:justify-evenly  bg-grey bg-opacity-90  bg-gray-700 text-white p-5 z-50"
      v-if="isVisible"
    >
      <div class="flex flex-row flex-nowrap items-center justify-start">
        <img
          src="~/assets/icons/cookies.svg"
          alt="cookie icon"
          class="w-8 max-h-8"
        />

        <p class="p-8 font-medium text-sm">
          We use cookies to improve your experience.
          <a href="https://help.netflix.com/en/legal/privacy#cookies"
            >Privacy Policy</a
          >
        </p>
      </div>

      <button class="button button-outlined self-center" @click="close">
        i understand
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Cookies",

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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
