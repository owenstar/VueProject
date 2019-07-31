<template>
  <div class="product">
    <div class="product-top">
      <img :src="product.image" />
      <div class="product-info">
        <h1>{{product.brand}}</h1>
        <div class="product-cost">￥ {{product.cost}}</div>
        <div class="product-add" @click="addCart">加入购物车</div>
      </div>
    </div>
    <div class="product-middle">
      <div>详情。。。。。。1</div>
      <div>详情。。。。。。2</div>
      <div>详情。。。。。。3</div>
      <div>详情。。。。。。4</div>
      <div>详情。。。。。。5</div>
      <div>详情。。。。。。6</div>
      <div>详情。。。。。。7</div>
      <div>详情。。。。。。8</div>
      <div>详情。。。。。。9</div>
      <div>详情。。。。。。10</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: parseInt(this.$route.params.id)
    };
  },
  methods: {
    addCart() {
      this.$store.commit("addCart", this.id);
    }
  },
  mounted() {},
  computed: {
    product() {
      //   console.log("product" + this.$store.state.productList);
      //   console.log(this.id);
      //   this.$store.state.productList.map(item => {
      //     console.log(item.name);
      //   });
      return this.$store.state.productList.find(item => item.id === this.id);
    }
  }
};
</script>
<style scoped>
.product-top {
  width: 100%;
}

.product-top img {
  width: 50%;
  float: left;
}

.product-info {
  width: 50%;
  float: left;
  text-align: center;
  padding: 150px 0 150px;
}

.product-middle {
  clear: both;
}

.product-middle div {
  padding: 50px 10px;
  border: 1px red solid;
  margin: 5px 10px;
}

.product-add {
  background: purple;
  border-radius: 5px;
  height: 30px;
  width: 150px;
  line-height: 30px;
  margin: 10px auto;
  cursor: pointer;
}
</style>
