import Vue from "vue";
import Router from "vue-router";

import Index from "./components/pages/index";
import About from "./components/pages/about";
import Detail from "./components/pages/detail/index";
import DetailId from "./components/pages/detail/_id";
import Nest from "./components/pages/nest/parent";
import Child1 from "./components/pages/nest/child1";
import Child2 from "./components/pages/nest/child2";
import Child3 from "./components/pages/nest/child3";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Index
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/detail",
      component: Detail
    },
    {
      path: "/detail/:id",
      component: DetailId
    },
    {
      path: "/nest",
      component: Nest,
      children: [
        {
          path: "",
          component: Child1
        },
        {
          path: "child2",
          component: Child2
        },
        {
          path: "child3",
          component: Child3
        }
      ]
    }
  ]
});