<template>
  <div class="daily">
    <div class="daily-menu">
      <div class="daily-menu-item" @click="handleThemeAction">每日推荐</div>
    </div>
    <div class="daily-list" ref="list">
      <div v-for="list in itemList" :key="list.id">
        <div style="color:red;">{{list.date}}</div>
        <Item
          v-for="item in list.stories"
          :key="item.id"
          :data="item"
          @click.native="handleItemAction(item.id)"
        ></Item>
      </div>
    </div>
    <daily-artical :id="articleId"></daily-artical>
  </div>
</template>

<script>
import Item from "./item.vue";
import dailyArtical from "./dailyArtical";
import $ from "./network";
import "./style.css";
export default {
  components: {
    Item,
    dailyArtical
  },
  data() {
    return {
      itemList: [],
      isloading: false,
      dailyTime: $.getTodayTime(),
      articleId: 0
    };
  },
  methods: {
    handleThemeAction() {
      console.log("handleThemeAction");
      this.itemList = [];
      this.dailyTime = $.getTodayTime();
      this.fetchItemList(1);
    },
    fetchItemList(index) {
      console.log("fetchItemList");
      const url = index == 1 ? "news/before/20190724" : "news/before/20190723";
      $.network.get(url).then(res => {
        console.log(res);
        this.itemList.push(res);
      });
    },
    handleItemAction(id) {
      console.log("dangqian de id " + id);
      this.articleId = id;
    },
    fetchComments() {}
  },
  mounted() {
    this.fetchItemList(1);
    const $list = this.$refs.list;
    // 监听滚动，已滚动的距离+页面的高度等于整个区域高度时，视为杰出底部
    $list.addEventListener("scroll", () => {
      console.log("listener");
      if ($list.scrollTop + document.body.clientHeight >= $list.scrollHeight) {
        this.fetchItemList(2);
      }
    });
  }
};
</script>