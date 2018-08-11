<template>
    <div id="aboutUs">
      <div class="banner">
        <img src="../../../static/img/banner01.png" alt="">
        <div class="detail">
          <div class="detailWrap">
            <div class="d_1">鸿基资盈宝用创新超载开拓世界行业新风向</div>
            <div class="d_2">开拓进取<span>探索未来</span></div>
            <div class="d_3">Explore Future</div>
          </div>
        </div>
        <!--<div class="aboutUsNav">-->
          <!--<ul>-->
            <!--<li @click="navListIdx = index" :class="{sel:navListIdx == index}" v-for="(item,index) in aboutUsNavList" :key="index">-->
              <!--<router-link :to="item.url">{{item.name}}</router-link>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div>
</template>

<script>
    export default {
      name: "aboutUs",
      data(){
        return {
          aboutUsNavList:[
            {name:'企业简介',url:'###',id:0},
            {name:'发展历程',url:'###',id:1},
            {name:'企业荣誉',url:'###',id:2},
            {name:'联系我们',url:'###',id:3},
          ],
          navListIdx:0
        }
      }
    }
</script>

<style scoped>
@import "../../../static/css/aboutUs.css";
</style>
<style>
  @import "../../../static/css/public.css";
</style>
