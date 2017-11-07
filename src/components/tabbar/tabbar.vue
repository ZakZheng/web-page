<template>
  <div>
    <tabbar>
      <tabbar-item selected link="/">
        <img slot="icon">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/recharge">
        <img slot="icon">
        <span slot="label">充值</span>
      </tabbar-item>
      <tabbar-item  link="/mys">
        <img slot="icon">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>
