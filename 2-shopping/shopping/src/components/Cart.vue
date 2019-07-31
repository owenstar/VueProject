<template>
  <div class="cart">
    <div class="caption" v-show="cartList.length">购物清单</div>
    <table v-show="cartList.length">
      <tr>
        <th class="first">商品信息</th>
        <th>单价</th>
        <th>数量</th>
        <th>小计</th>
        <th>删除</th>
      </tr>
      <tr v-for="item in cartList" :key="item.id">
        <td class="first">
          <img :src="productDictList[item.id].image" />
          <span>{{productDictList[item.id].name}}</span>
        </td>
        <td>$ {{productDictList[item.id].cost}}</td>
        <td>
          <button class="minus" @click="handleMinus(item.id)">-</button>
          &nbsp;{{item.count}}&nbsp;
          <button class="add" @click="handleAdd(item.id)">+</button>
        </td>
        <td>$ {{productDictList[item.id].cost * item.count}}</td>
        <td @click="deleteItem(item.id)">删除</td>
      </tr>
    </table>
    <div class="total" v-show="cartList.length">应付总额 {{total}}</div>
    <div class="realTotal" v-show="cartList.length">
      <span>共计{{shopCount}}件商品</span>&nbsp;&nbsp;&nbsp;
      <span>优惠$500</span>&nbsp;&nbsp;&nbsp;
      <button class="submit" @click="buy">结算</button>
    </div>
    <div v-show="cartList.length === 0">购物车为空</div>
  </div>
</template>
<script>
export default {
  computed: {
    cartList() {
      return this.$store.state.carList;
    },
    productDictList() {
      const dictList = {};
      const lists = this.$store.state.productList;
      lists.forEach(item => {
        dictList[item.id] = item;
      });
      return dictList;
    },
    total() {
      var total = 0;
      this.cartList.forEach(element => {
        total += this.productDictList[element.id].cost * element.count;
      });
      return total;
    },
    shopCount() {
      var count = 0;
      this.cartList.forEach(item => {
        count += item.count;
      });
      return count;
    }
  },
  methods: {
    handleMinus(id) {
      this.cartList.forEach(item => {
        if (item.id === id && item.count > 1) {
          item.count--;
          return;
        }
      });
    },
    handleAdd(id) {
      this.cartList.forEach(item => {
        if (item.id === id) {
          item.count++;
          return;
        }
      });
    },
    deleteItem(id) {
      this.$store.commit("deleteItem", id);
    },
    buy() {
      this.$store.dispatch("buy", { price: 100000, time: 20190721 });
      this.$router.push({ name: "list" });
    }
  }
};
</script>
<style scoped>
.caption {
  line-height: 30px;
}

td img {
  width: 50px;
  float: left;
}
th,
td {
  padding: 10px;
  text-align: center;
}

.first {
  text-align: left;
}

table {
  border: 1px red solid;
  width: 100%;
  padding: 5px;
  border-collapse: collapse;
}

tr,
td,
th {
  border: 1px green solid;
}

.total {
  margin: 50px 50px 0px 0px;
  text-align: right;
}

.realTotal {
  margin: 10px 50px 0px 0px;
  text-align: right;
}

.submit {
  width: 100px;
  line-height: 30px;
  background: green;
  border-radius: 10px;
  font-size: 20xp;
}
</style>
