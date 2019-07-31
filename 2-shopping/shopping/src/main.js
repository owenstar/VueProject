// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router/index";
import Vuex from "vuex";
import productData from "./Data/product";
import { setTimeout } from "timers";

Vue.use(Vuex);
Vue.config.productionTip = false;

// 配置router
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

router.afterEach((to, from) => {
  window.scrollTo(0, 0);
});

// 配置vuex

function getFilterArray(array) {
  const res = [];
  const json = {};
  for (let i = 0; i < array.length; i++) {
    const _self = array[i];
    if (!json[_self]) {
      res.push(_self);
      json[_self] = 1;
    }
  }
  return res;
}

const store = new Vuex.Store({
  state: {
    productList: [],
    carList: []
  },
  getters: {
    brands: state => {
      const brands = state.productList.map(item => item.brand);
      return getFilterArray(brands);
    },
    colors: state => {
      const colors = state.productList.map(item => item.color);
      return getFilterArray(colors);
    }
  },
  mutations: {
    // 添加列表数据
    setProductList(state, data) {
      state.productList = data;
      console.log("setproductlist" + state.productList);
    },
    // 添加购物车
    addCart(state, id) {
      // 先判断是否已在购物车
      const isAdded = state.carList.find(item => item.id === id);
      if (isAdded) {
        isAdded.count++;
      } else {
        state.carList.push({
          id: id,
          count: 1
        });
      }
      console.log(state.carList);
    },
    empty(state) {
      state.carList = [];
    },
    deleteItem(state, id) {
      const index = state.carList.findIndex(item => item.id === id);
      state.carList.splice(index, 1);
    }
  },
  actions: {
    // 请求商品列表
    getProductList(context) {
      setTimeout(() => {
        context.commit("setProductList", productData);
      }, 500);
    },
    buy(context, obj) {
      console.log(obj.time + "---" + obj.price);
      context.commit("empty");
    }
  }
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => {
    return h(App);
  }
});
