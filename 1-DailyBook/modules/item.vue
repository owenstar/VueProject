<template>
  <a class="daily-item">
    <div class="daily-img" v-if="data.images">
      <img :src="imgPath + data.images[0]" />
    </div>
    <div class="daily-title">{{data.title}}</div>
  </a>
</template>
<script>
import ntManager from "./network";
export default {
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      imgPath: ntManager.imgPath
    };
  }
};
</script>