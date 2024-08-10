import "@vue/runtime-core";

export {};

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    RouterLink: typeof import("vue-router")["RouterLink"];
    RouterView: typeof import("vue-router")["RouterView"];
    FirstComponent: typeof import("./src/components/FirstComponent.vue")["default"];
    SecondComponent: typeof import("./src/components/SecondComponent.vue")["default"];
  }
}
