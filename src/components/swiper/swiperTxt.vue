<template>
  <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
    <swiper-item :key="index" v-for="(item, index) in swiperTxtList"><p v-text="item">义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'

export default {
  props: {
    swiperTxtList: {
      type: Array,
      default: []
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style lang="less" scoped>
.text-scroll {
  position: relative;
  &::after {
    content: ' ';
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    bottom: 0;
    border-bottom: 1px solid #d9d9d9;
    color: #d9d9d9;
    transform-origin: 0 0;
    transform: scaleY(0.5);
  }
  .vux-swiper > .vux-swiper-item {
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>
