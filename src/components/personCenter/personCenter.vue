<template>
  <div id="personCenter">
    <div class="personHeader">
      <div class="wrap clearfloat">
        <div class="h-left floatl clearfloat">
          <div class="left-logo floatl">
            <img src="../../../static/img/logo03.png" alt="">
          </div>
          <div class="left-area floatl">
            <span><i></i>清远</span>
          </div>
        </div>
        <div class="h-right floatr clearfloat">
          <ul class="floatl clearfloat">
            <li :class="{sel:navStaus == index}" @click="navStaus = index" class="floatl" v-for="(item,index) in navList" :key="index">
              <router-link :to="item.url">{{item.name}}</router-link>
            </li>
          </ul>
          <div class="loginStatus floatl">
            <span class="icon" @click="$router.push('/personCenter')"></span><span class="exit">退出</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main clearfloat">
      <div class="wrap clearfloat">
        <div class="left-nav floatl">
          <div class="nav-head">
            <div class="head-img">
              <img src="" alt="">
            </div>
            <div class="head-info">
              <span>欢迎你，17*****11</span>
            </div>
          </div>
          <div class="nav-li">
            <ul>
              <li @click="navLiStatus = index" :class="{sel:navLiStatus == index}" v-for="(item,index) in navLi" :key="index">
                <router-link :to="item.url">{{item.name}}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="right-cont floatr">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="personBottom">
      <div class="wrap">
        <span>房网（北京）科技有限公司 | 网络经网络经营许网络经营许网络经营许营许可证 京ICP备16057509号-2 | © Copyright©2010-2018 链家网Lianjia.com版权所</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "personCenter",
      data(){
        return {
          //header
          navList:[
            {name:'首页',url:'/homePage',id:0},
            {name:'关于我们',url:'/mainWrap/aboutUs',id:1},
            {name:'加入我们',url:'/mainWrap/JoinUs',id:2},
            {name:'留言建议',url:'/mainWrap/messageAdvice',id:3},
            {name:'下载APP',url:'###',id:4},
          ],
          // 选择状态
          navStaus:0,
          // 侧边栏nav
          navLi:[
            {name:'我的发布',url:'###'},
            {name:'账户设置',url:'/personCenter/accountSetting'},
            {name:'资金中心',url:'/personCenter/personFundCenter'},
            {name:'我的收藏',url:'/personCenter/personCollect'},
            {name:'我的足迹',url:'/personCenter/personFootPrint'},
            {name:'我的消息',url:'###'},
            {name:'我的竞拍',url:'###'},
            {name:'购物车',url:'/personCenter/personShopping'},
            {name:'我的预约',url:'/personCenter/personAppointment'},
            {name:'合同管理',url:'###'},
            {name:'签约管理',url:'###'},
            {name:'帮助中心',url:'/personCenter/personHelp'},
          ],
          // 选择状态
          navLiStatus:0
        }
      }
    }
</script>

<style scoped>
@import "../../../static/css/personCenter.css";
</style>
<style>
  @import "../../../static/css/public.css";
</style>
