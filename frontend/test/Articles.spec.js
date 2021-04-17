import { mount } from "@vue/test-utils";
import Articles from "@/components/Articles.vue";

describe("Articles", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Articles);
    expect(wrapper.vm).toBeTruthy();
  });
});
