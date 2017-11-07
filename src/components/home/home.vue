<template>
  <div class="home">
    <swiper :imgList="imgList" v-if="imgList.length"></swiper>
    <grid v-if="gridList.length">
      <grid-item :link="item.url" :key="index" v-for="(item, index) in gridList">
          <!-- <img slot="icon" :src="item.img">
          <span slot="label">{{item.title}}</span> -->
          <blur :blur-amount=5 :url="item.img">
            <span class="center">{{item.title}}</span>
          </blur>
      </grid-item>
    </grid>
    <swiper-txt :swiperTxtList="swiperTxtList"></swiper-txt>
  </div>
</template>

<script>
import Swiper from 'components/swiper/swiper'
import SwiperTxt from 'components/swiper/swiperTxt'
import { Grid, GridItem, GroupTitle, Blur } from 'vux'
export default {
  components: {
    Swiper,
    SwiperTxt,
    Grid,
    GridItem,
    GroupTitle,
    Blur
  },
  data() {
    return {
      gridList: [],
      imgList: [],
      swiperTxtList: []
    }
  },
  created() {
    this.gridList = this._getImgList()
    this.imgList = this._getImgList()
    this.swiperTxtList = this._getSwiperTxtList()
  },
  methods: {
    _getGridList() {
      let arr = [
        {
          url: 'aaa',
          title: '123'
        },
        {
          url: 'aaa',
          title: '123'
        },
        {
          url: 'aaa',
          title: '123'
        }
      ]
      return arr
    },
    _getImgList() {
      let arr = [
        {
          url: '/school',
          img: 'https://static.vux.li/demo/1.jpg',
          title: '学校'
        },
        {
          url: '/dynamic',
          img: 'https://static.vux.li/demo/2.jpg',
          title: '动态'
        },
        {
          url: '/introduction',
          img: 'https://static.vux.li/demo/3.jpg',
          title: '介绍'
        }
      ]
      return arr
    },
    _getSwiperTxtList() {
      let arr = []
      arr = [
        '义务爱了 完成传奇世界H5-王者归来任务 获得20金币',
        '基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币',
        '零哥章魚 完成传奇世界H5-王者归来任务 获得30金币',
        '做迎而為 兑换【饿了么】畅享美食红包 消耗20金币',
        '只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币',
        '基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币'
      ]
      return arr
    }
  }
}
</script>

<style lang="less" scoped>
.weui-grid:before {
  content: none;
}
.weui-grid {
  & > div {
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    position: relative;
    padding-top: 65%;
    height: 0 !important;
    overflow: hidden;
    img {
      position: absolute;
      width: 100%;
      top: 0;
      filter: blur(2px);
    }
    span {
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      color: #fff;
    }
  }
}
</style>
