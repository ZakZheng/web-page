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
    <swiper-txt class="vux-1px-b" :swiperTxtList="swiperTxtList"></swiper-txt>
    <scroller ref="scroller1" v-if="dynList.length" lock-y :scrollbar-x="false">
      <div ref="box">
        <div class="box-item" ref="boxItem" :key="index" v-for="(item,index) in dynList"><span>{{' ' + item.title + ' '}}</span></div>
      </div>
    </scroller>
    <p>3</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>
    <p>7</p>
    <p>8</p>
    <p>9</p>
    <p>10</p>
    <p>11</p>
    <p>12</p>
    <p>13</p>
    <p>14</p>
    <p>15</p>
    <p>16</p>
    <p>17</p>
    <p>18</p>
    <p>19</p>
    <p>20</p>
    <p>21</p>
    <p>22</p>
    <p>23</p>
    <p>24</p>
    <p>25</p>
    <p>26</p>
    <p>27</p>
    <p>28</p>
    <p>29</p>
    <p>30</p>
    <p>31</p>
    <p>32</p>
    <p>33</p>
    <p>34</p>
    <p>35</p>
    <p>36</p>
    <p>37</p>
    <p>38</p>
    <p>39</p>
    <p>40</p>
    <p>41</p>
    <p>42</p>
    <p>43</p>
    <p>44</p>
    <p>45</p>
    <p>46</p>
    <p>47</p>
    <p>48</p>
    <p>49</p>
    <p>50</p>
    <p>51</p>
    <p>52</p>
    <p>53</p>
    <p>54</p>
    <p>55</p>
    <p>56</p>
    <p>57</p>
    <p>58</p>
    <p>59</p>
    <p>60</p>
    <p>61</p>
    <p>62</p>
    <p>63</p>
    <p>64</p>
    <p>65</p>
    <p>66</p>
    <p>67</p>
    <p>68</p>
    <p>69</p>
    <p>70</p>
    <p>71</p>
    <p>72</p>
    <p>73</p>
    <p>74</p>
    <p>75</p>
    <p>76</p>
    <p>77</p>
    <p>78</p>
    <p>79</p>
    <p>80</p>
    <p>81</p>
    <p>82</p>
    <p>83</p>
    <p>84</p>
    <p>85</p>
    <p>86</p>
    <p>87</p>
    <p>88</p>
    <p>89</p>
    <p>90</p>
    <p>91</p>
    <p>92</p>
    <p>93</p>
    <p>94</p>
    <p>95</p>
    <p>96</p>
    <p>97</p>
    <p>98</p>
    <p>99</p>
    <p>100</p>
    <mt-header fixed title="固定在顶部"></mt-header>
  </div>
</template>

<script>
import Swiper from 'components/swiper/swiper'
import SwiperTxt from 'components/swiper/swiperTxt'
import { Scroller, Grid, GridItem, GroupTitle, Blur } from 'vux'
import { Header } from 'mint-ui'
export default {
  components: {
    Swiper,
    SwiperTxt,
    Grid,
    Scroller,
    GridItem,
    GroupTitle,
    Blur,
    mtHeader: Header
  },
  data() {
    return {
      gridList: [],
      imgList: [],
      swiperTxtList: [],
      dynList: []
    }
  },
  created() {
    this.gridList = this._getImgList()
    this.imgList = this._getImgList()
    this.swiperTxtList = this._getSwiperTxtList()
    this.dynList = this._getDynList()
  },
  watch: {
    dynList(val) {
      let marginLeft = getComputedStyle(this.$refs.boxItem[0], null).marginLeft
      marginLeft = parseInt(marginLeft.substr(0, marginLeft.indexOf('px')))
      this.$refs.box.style.width =
        (this.$refs.boxItem[0].clientWidth + marginLeft) * val.length +
        marginLeft +
        'px'
      this.$refs.scroller1.reset()
    }
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
    },
    _getDynList() {
      let arr = []
      arr = [
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
    }
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/close.less';
@import '~vux/src/styles/1px.less';

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
.box-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display: inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
</style>
