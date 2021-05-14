<template>
  <div
    class="share-popup flex flex-col flex-nowrap items-center p-5 space-y-5 fixed w-full bottom-0 left-0 md:absolute md:space-y-2 md:min-w-max md:-bottom-full md:left-0 "
    v-click-outside="hideShare"
  >
    <div class="text-white text-sm font-medium md:hidden">
      Share on
    </div>
    <div class="share-icon-container space-x-5">
      <a :href="twitterUrl" target="_blank">
        <i>
          <img src="~/assets/icons/twitter.svg" alt="twitter" />
        </i>
      </a>
      <a :href="facebookUrl" target="_blank">
        <i>
          <img src="~/assets/icons/facebook.svg" alt="facebook" />
        </i>
      </a>

      <a :href="emailUrl" target="_blank">
        <i>
          <img src="~/assets/icons/mail.svg" alt="email" />
        </i>
      </a>
    </div>

    <button
      class="share-link w-full px-7 py-3 border select-none border-white text-sm font-medium capitalize text-white md:px-0 md:py-0 md:border-none"
      @click="copyToClipboard"
    >
      copy link
    </button>
  </div>
</template>

<script>
import vClickOutside from "v-click-outside";

export default {
  name: "Share",

  directives: {
    clickOutside: vClickOutside.directive
  },

  data: () => {
    return {
      link: "",
      email: {
        adress: "adress@example.com"
      },
      description: "Video from Beani.tv"
    };
  },

  mounted() {
    this.link = window.location.href;
    this.email.body = this.link;
  },

  computed: {
    twitterUrl() {
      return `https://twitter.com/share?url=${encodeURIComponent(
        this.link
      )}&text=${encodeURIComponent(this.description)}`;
    },
    facebookUrl() {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        this.link
      )}`;
    },
    emailUrl() {
      return `mailto:${this.email.adress}?subject=${encodeURIComponent(
        this.description
      )}&body=${encodeURIComponent(this.link)}`;
    }
  },

  methods: {
    copyToClipboard() {
      const el = document.createElement("textarea");
      el.value = window.location.href;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },
    hideShare() {
      this.$emit("hide");
    }
  }
};
</script>

<style scoped>
.share-popup {
  background-color: #44c5ff;
}

.share-popup img {
  stroke: white;
}

.share-icon-container {
  @apply flex;
  flex-wrap: nowrap;
  align-items: center;
}

.share-link {
}
</style>
