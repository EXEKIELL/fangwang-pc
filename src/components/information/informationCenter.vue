<template>
    <div id="informationCenter">
      <div class="banner">
        <img src="../../../static/img/banner04.png" alt="">
        <div class="detail">
          <div class="detailWrap">
            <div class="d_1">加入鸿基资盈宝放飞你的梦想</div>
            <div class="d_2">因为有我&ensp;<span>生活才更加精彩</span></div>
            <div class="d_3">Wonderful Life</div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="Title">
            <div>
              <div class="Title1">资讯中心</div>
              <div class="Title2">Information centre</div>
              <div class="Title3">
                <span style="background-color: #fdc405;"></span>
              </div>
            </div>
          </div>
          <div class="tabList">
            <span @click="tabSub(index)" :class="{sel:tabSel == index}" v-for="(item,index) in tabList" :key="index">{{item.name}}</span>
          </div>
          <div class="contList clearfloat">
            <!--点击传参item.id-->
            <div @click="toUrl(index)" class="list floatl" v-for="(item,index) in 9" :key="index">
              <div class="list-img">
                <img src="../../../static/img/img35.png" alt="">
              </div>
              <div class="list-cont">
                <div class="cont_1 textEllipsis">房网新闻动态房网新闻动态网新闻动</div>
                <div class="cont_2">
                  <p>合适的选择在这里完成，房网新闻动态合适的选择。合适的选择在这里完成房网...</p>
                </div>
                <div class="cont_3">
                  <!--点击传参item.id-->
                  <button @click="toUrl(index)">MORE</button>
                </div>
              </div>
            </div>
          </div>
          <div class="pagin">
            <el-pagination
              background
              layout="prev, pager, next"
              prev-text="上一页"
              next-text="下一页"
              :total="4*10">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "informationCenter",
      data(){
        return {
          tabList:[
            {name:'企业新闻',id:0},
            {name:'国家政策',id:1},
            {name:'购房指南',id:2},
          ],
          tabSel:0
        }
      },
      methods:{
        tabSub:function (i) {
          this.tabSel = i;
        },
        toUrl:function (i) {
          this.$router.push({
            path:'/mainWrap/informationDetail',
            query:{
              id:i
            }
          })
        }
      }
    }
</script>

<style scoped>
@import "../../../static/css/informationCenter.css";
</style>
<style>
  @import "../../../static/css/public.css";
</style>
