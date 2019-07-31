<template>
  <div class="product">
    <router-link :to="'/product/' + info.id" class="product-main">
      <img :src="info.image" />
      <h4>{{info.brand}}</h4>
      <div :style="{background:colors[info.color]}" class="product-color"></div>
      <div class="product-cost">￥ {{info.cost}}</div>
      <div class="product-add" @click.prevent="handleCart">加入购物车</div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    info: Object
  },
  data() {
    return {
      colors: {
        白色: "#ffffff",
        金色: "#dac272",
        蓝色: "#233472",
        红色: "#f2352e"
      }
    };
  },
  methods: {
    handleCart() {
      this.$store.commit("addCart", this.info.id);
    }
  }
};
</script>
<style scoped>
.product img {
  width: 100%;
}

.product {
  float: left;
  width: 25%;
  margin-top: 10px;
}

.product-main {
  display: block;
  text-align: center;
  text-decoration: none;
  position: relative;
  margin: 16px;
  padding: 16px;
  border: 1px lightgrey solid;
}

.product-color {
  width: 20px;
  height: 20px;
  border: 1px gray solid;
  border-radius: 10px;
  margin: 6px auto;
}

h4 {
  color: #222;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0px;
}

.product-cost {
  color: aqua;
  margin-top: 6px;
}

.product-add {
  display: none;
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: blueviolet;
  border: 1px lightblue solid;
  border-top-right-radius: 5px;
  color: white;
}

.product-main:hover .product-add {
  display: block;
}
</style>
