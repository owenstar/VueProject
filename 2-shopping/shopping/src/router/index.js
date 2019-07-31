import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Cart from "../components/Cart";
import List from "../components/List";
import ProductDetail from "../components/ProductDetail";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/cart",
      name: "cart",
      component: Cart,
      meta: {
        title: "购物车"
      }
    },
    {
      path: "/list",
      name: "list",
      component: List,
      meta: {
        title: "商品列表"
      }
    },
    {
      path: "/product/:id",
      name: "product",
      component: ProductDetail,
      meta: {
        title: "商品详情"
      }
    },
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
      meta: {
        title: "错误页面"
      }
    }
  ]
});
