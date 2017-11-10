<template>
  <div style="height:100%">
    <div class="mymy">
      <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
        <router-view class="router-view"></router-view>
      </transition>
    </div>
    <tab-bar></tab-bar>
    <loading :show="isLoading"></loading>
  </div>
</template>

<script>
import TabBar from 'components/tabbar/tabbar'
import { ViewBox, XHeader, Loading } from 'vux'
import { mapState } from 'vuex'

export default {
  components: {
    ViewBox,
    XHeader,
    TabBar,
    Loading
  },
  computed: {
    ...mapState(['isLoading', 'direction'])
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
.mymy {
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  padding: 0;
  right: 0;
  bottom: 50px;
  overflow: auto;
}

.router-view {
  width: 100%;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
