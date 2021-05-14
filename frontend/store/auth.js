import Cookies from "js-cookie";
import cookieparser from "cookieparser";
import signUpQuery from "~/apollo/queries/auth/signUp";
import gql from "graphql-tag";

export const state = () => {};

export const mutations = {
  setUser(state, user) {
    state.user = user;
    Cookies.set("user", user);
  },
  // Mutation that you need to add
  logout(state) {
    state.user = null;
    Cookies.set("user", null);
  }
};

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let user = null;
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      user = (parsed.user && JSON.parse(parsed.user)) || null;
    }

    commit("auth/setUser", user);
  },

  async signUp({ commit }, credentials) {}
};

export const getters = {
  username: state => {
    return state.user && state.user.username;
  }
};
