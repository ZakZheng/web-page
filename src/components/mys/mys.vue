<template>
  <div class="mys">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
      <ul>
        <li class="page-loadmore-listitem" :key="index" v-for="(item, index) in list">{{ item }}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
import { Loadmore } from 'mint-ui'

export default {
  data() {
    return {
      list: []
    }
  },
  components: {
    mtLoadmore: Loadmore
  },
  created() {
    for (let i = 1; i <= 20; i++) {
      this.list.push(i)
    }
  },
  methods: {
    loadTop() {
      console.log(123)
    },
    loadBottom() {
      let lastValue = this.list[this.list.length - 1]
      if (lastValue < 40) {
        for (let i = 1; i <= 10; i++) {
          setTimeout(() => {
            this.list.push(lastValue + i)
            // this.$refs.loadmore.onBottomLoaded()
          }, 1000)
        }
      } else {
        this.allLoaded = true
        console.log('没有了')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.page-loadmore .mint-spinner {
  display: inline-block;
  vertical-align: middle;
}
.page-loadmore-desc {
  text-align: center;
  color: #666;
  padding-bottom: 5px;
}
.page-loadmore-desc:last-of-type {
  border-bottom: solid 1px #eee;
}
.page-loadmore-listitem {
  height: 50px;
  line-height: 50px;
  border-bottom: solid 1px #eee;
  text-align: center;
}
.page-loadmore-listitem:first-child {
  border-top: solid 1px #eee;
}
.page-loadmore-wrapper {
  overflow: scroll;
}
.mint-loadmore-bottom span {
  display: inline-block;
  -webkit-transition: 0.2s linear;
  transition: 0.2s linear;
  vertical-align: middle;
}
.mint-loadmore-bottom span.is-rotate {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
</style>
