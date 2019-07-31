<template>
  <div>
    <div class="header">
      <router-link to="/list" class="header-title">电商网站示例</router-link>
      <div class="header-menu">
        <router-link to="/cart" class="header-menu-cart">
          购物车
          <span v-if="cardList.length">{{ cardList.length }}</span>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    cardList() {
      return this.$store.state.carList;
    }
  }
};
</script>
<style scoped>
.header {
  background-color: gray;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
}

.header-title {
  text-decoration: none;
  margin-left: 30px;
  color: white;
}

.header-menu {
  float: right;
}

.header-menu-cart {
  text-decoration: none;
  margin-right: 30px;
  color: white;
}
</style>
