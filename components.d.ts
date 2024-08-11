import "@vue/runtime-core";

export {};

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    RouterLink: typeof import("vue-router")["RouterLink"];
    RouterView: typeof import("vue-router")["RouterView"];
    FirstComponent: typeof import("./src/components/FirstComponent.vue")["default"];
    SecondComponent: typeof import("./src/components/SecondComponent.vue")["default"];
    ForProductList: typeof import("./src/components/ForProductList.vue")["default"];
    EventDemo: typeof import("./src/components/EventDemo.vue")["default"];
    OtherDirectives: typeof import("./src/components/OtherDirectives.vue")["default"];
    BaseLayout: typeof import("./src/components/BaseLayout.vue")["default"];
    ComputedProperties: typeof import("./src/components/ComputedProperties.vue")["default"];
    TwoWayBinding: typeof import("./src/components/TwoWayBinding.vue")["default"];
  }
}
