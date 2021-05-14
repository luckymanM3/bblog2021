<template>
  <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div
      class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
    >
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 class="mb-8 text-3xl text-center">Sign up</h1>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          v-model="username"
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          v-model="email"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          v-model="password"
        />
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
        />

        <button
          type="submit"
          style="background-color: green"
          @click.prevent="handleSubmit"
          class="bg-green w-full text-center py-3 rounded  text-white hover:bg-green-dark focus:outline-none my-1"
        >
          Create Account
        </button>

        <div class="text-center text-sm text-grey-dark mt-4">
          By signing up, you agree to the
          <a
            class="no-underline border-b border-grey-dark text-grey-dark"
            href="#"
          >
            Terms of Service
          </a>
          and
          <a
            class="no-underline border-b border-grey-dark text-grey-dark"
            href="#"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      <div class="text-grey-dark mt-6">
        Already have an account?
        <a class="no-underline border-b border-blue text-blue" href="../login/">
          Log in </a
        >.
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import SIGN_UP from "~/apollo/queries/auth/signUp";
// import strapi from "~/utils/Strapi";

export default {
  data() {
    return {
      currenUser: "",
      email: "",
      password: "",
      username: "",
      loading: false
    };
  },
  methods: {
    // Method that will register your users
    async handleSubmit() {
      try {
        this.$apollo.mutate({
          mutation: SIGN_UP,
          variables: {
            user: {
              username: this.username,
              email: this.email
              // password: this.password,
            }
          }
        });
        // this.$store.dispatch("auth/signUp", {
        //   username: this.username,
        //   email: this.email,
        //   password: this.password
        // });
      } catch (e) {}
      // this.loading = true;
      // const response = await strapi.register(
      //   this.username,
      //   this.email,
      //   this.password
      // );
      // this.loading = false;
      // Call your setUser mutation from your auth.js store file
      // this.setUser(response.user);
      // this.$router.go(-1);

      // catch (err) {
      //   this.loading = false;
      //   alert(err.message || "An error occurred.");
      // }
    },
    // Define all your needed mutations, here: auth/setUser
    ...mapMutations({
      setUser: "auth/setUser"
    })
  }
};
</script>
