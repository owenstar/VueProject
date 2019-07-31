<template>
  <div>
    <div class="list-control">
      <div class="list-control-brand">
        <span>品牌:</span>
        <span
          class="list-control-filter-item"
          :class="{on:item === brand}"
          v-for="item in brands"
          :key="item.id"
          @click="handleBrand(item)"
        >{{item}}</span>
      </div>
      <div class="list-control-color">
        <span>颜色:</span>
        <span
          class="list-control-filter-item"
          :class="{on:item === color}"
          v-for="item in colors"
          :key="item.id"
          @click="handleColor(item)"
        >{{item}}</span>
      </div>
      <div class="list-control-order">
        <span>排序:</span>
        <span
          class="list-control-filter-item"
          :class="{on: item===order}"
          v-for="(item,index) in orderArray"
          :key="index"
          @click="handleOrder(item)"
        >{{item}}</span>
      </div>
    </div>
    <Product v-for="item in filterAndOrderList" :key="item.id" :info="item"></Product>
  </div>
</template>

<script>
import Product from "./Product";
export default {
  components: {
    Product
  },
  data() {
    return {
      order: "",
      brand: "",
      color: "",
      orderArray: ["默认", "销量", "价格"]
    };
  },
  computed: {
    brands() {
      return this.$store.getters.brands;
    },
    colors() {
      return this.$store.getters.colors;
    },
    list() {
      return this.$store.state.productList;
    },
    filterAndOrderList() {
      let list = [...this.list];

      if (this.brand !== "") {
        list = list.filter(item => item.brand === this.brand);
      }

      if (this.color !== "") {
        list = list.filter(item => item.color === this.color);
      }

      if (this.order !== "") {
        if (this.order === "销量") {
          list = list.sort((a, b) => b.sales - a.sales);
        }

        if (this.order === "价格") {
          list = list.sort((a, b) => b.cost - a.cost);
        }
      }
      return list;
    }
  },
  methods: {
    handleOrder(obj) {
      if (this.order === obj) {
        this.order = "";
      } else this.order = obj;
    },
    handleBrand(obj) {
      if (this.brand === obj) {
        this.brand = "";
      } else this.brand = obj;
    },
    handleColor(obj) {
      if (this.color === obj) {
        this.color = "";
      } else this.color = obj;
    }
  },
  mounted() {
    this.$store.dispatch("getProductList");
  }
};
</script>
<style scoped>
.list-control {
  background-color: white;
  padding: 15px;
  margin: 10px;
  /* border: 1px red solid; */
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

.list-control-brand,
.list-control-color,
.list-control-order {
  margin-bottom: 20px;
}

.list-control-filter-item {
  border: 1px gray solid;
  border-radius: 4px;
  padding: 2px 6px;
  margin-left: 10px;
  cursor: pointer;
}

.list-control-filter-item.on {
  background: #f2352e;
}
</style>
