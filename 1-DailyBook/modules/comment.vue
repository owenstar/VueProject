<template>
  <div class="comment-item">
    <img :src="data.avatar" />
    <div class="comnent-right">
      <span class="comment-title">{{data.author}}</span>
    </div>
    <div class="comnent-right">
      <span class="comment-time">{{data.time}}</span>
    </div>
    <div class="comnent-right">
      <span class="comment-content">{{data.content}}</span>
    </div>
  </div>
</template>
<script>
import $ from "./network";
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      imgPath: $.imgPath
    };
  }
};
</script>