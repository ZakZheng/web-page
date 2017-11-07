<template>
  <div>
    <swiper :list="imgList" :loop="true" :aspect-ratio="500/800" :dots-position="'center'" :auto="true" :interval="3000" :show-desc-mask="false"></swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'

export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    imgList: {
      type: Array,
      default: []
    }
  }
}
</script>