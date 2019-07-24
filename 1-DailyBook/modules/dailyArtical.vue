<template>
  <div class="daily-artical">
    <div class="daily-atical-title">{{data.title}}</div>
    <div class="daily-artical-content" v-html="data.body"></div>
    <div class="daily-comment" v-show="Object.keys(this.data).length !== 0">
      <div>评论 ({{this.comments.length}})</div>
      <Comment v-for="item in comments" :data="item" :key="item.id"></Comment>
    </div>
  </div>
</template>
<script>
import $ from "./network";
import Comment from "./comment";
export default {
  components: {
    Comment
  },
  props: ["id"],
  methods: {
    getArticle() {
      $.network.get("news/" + this.id).then(res => {
        console.log("article get news:" + res);
        this.data = res;
        window.scrollTo(0, 0);
        this.getComments();
        // console.log("----" + Object.keys(this.data).length);
      });
    },
    getComments() {
      $.network.get("story/" + this.data.id + "/short-comments").then(res => {
        this.comments = res.comments.map(comment => {
          comment.avatar = $.imgPath + comment.avatar;
          return comment;
        });
      });
    }
  },
  data() {
    return {
      data: {},
      comments: []
    };
  },
  watch: {
    id(val) {
      if (val) {
        // console.log(val + "----" + Object.keys(this.data).length);
        this.getArticle();
      }
    }
  }
};
</script>