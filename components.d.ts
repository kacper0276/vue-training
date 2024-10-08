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
    ManyTwoWayBinding: typeof import("./src/components/ManyTwoWayBinding.vue")["default"];
    ClassStyleBinding: typeof import("./src/components/ClassStyleBinding.vue")["default"];
    HooksLifeCycle: typeof import("./src/components/HooksLifeCycle.vue")["default"];
    Ref: typeof import("./src/components/Ref.vue")["default"];
    Watcher: typeof import("./src/components/Watcher.vue")["default"];
    AsyncComponent: typeof import("./src/components/AsyncComponent.vue")["default"];
    AsyncComponentChild: typeof import("./src/components/AsyncComponentChild.vue")["default"];
    FallthroughAttributes: typeof import("./src/components/FallthroughAttributes.vue")["default"];
    FallthroughAttributesCustomButton: typeof import("./src/components/FallthroughAttributesCustomButton.vue")["default"];
    ProvideInject: typeof import("./src/components/ProvideInject.vue")["default"];
    ProvideInjectChildComponent: typeof import("./src/components/ProvideInjectChildComponent.vue")["default"];
    ProvideInjectMiddleComponent: typeof import("./src/components/ProvideInjectMiddleComponent.vue")["default"];
    Composables: typeof import("./src/components/Composables.vue")["default"];
    CustomDirectives: typeof import("./src/components/CustomDirectives.vue")["default"];
    Transitions: typeof import("./src/components/Transitions.vue")["default"];
    TransitionGroupComponent: typeof import("./src/components/TransitionGroupComponent.vue")["default"];
    DisplayCount: typeof import("./src/components/DisplayCount.vue")["default"];
    DecrementButton: typeof import("./src/components/DecrementButton.vue")["default"];
    IncrementButton: typeof import("./src/components/IncrementButton.vue")["default"];
    MathjsExample: typeof import("./src/components/MathjsExample.vue")["default"];
    VuexUse: typeof import("./src/components/VuexUse.vue")["default"];

    // Routing
    Home: typeof import("./src/components/routesComponents/Home.vue")["default"];
    About: typeof import("./src/components/routesComponents/About.vue")["default"];
    NotFound: typeof import("./src/components/routesComponents/NotFound.vue")["default"];
    Projects: typeof import("./src/components/routesComponents/Projects.vue")["default"];
  }
}
