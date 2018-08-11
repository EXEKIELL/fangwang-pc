<template>
    <div id="mainWrap">
      <div class="mainHeader">
        <div class="wrap clearfloat">
          <div class="h-left floatl clearfloat">
            <div class="left-logo floatl">
              <img src="../../static/img/logo01.png" alt="">
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
      <div class="main">
        <router-view/>
      </div>
      <div class="footer01">
        <div class="wrap">
          <div class="footer_1 clearfloat">
            <div class="f1_1 floatl">
              <ul class="clearfloat">
                <li class="floatl" v-for="(item,index) in footerList1" :key="index">
                  {{item.name}}
                </li>
              </ul>
            </div>
            <div class="f1_2 floatr">
              <span class="icon"></span><span class="num">400-888-8888</span>
            </div>
          </div>
          <div class="footer_2">
            <ul class="ul_1 clearfloat">
              <li class="floatl" v-for="(item,index) in footerList2" :key="index">{{item.name}}</li>
            </ul>
            <ul class="ul_2 clearfloat">
              <li class="floatl" v-for="(item,index) in footerList3" :key="index">{{item.name}}</li>
            </ul>
          </div>
          <div class="footer_3">
            <p>房网（北京）科技有限公司 | 网络经营许可证 京ICP备16057509号-2 | © Copyright©2010-2018 链家网Lianjia.com版权所有京公网安备 11010802024019号</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "mainWrap",
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
          navStaus:0,
          //footer
          footerList1:[
            {name:'首页',url:'###'},
            {name:'关于我们',url:'###'},
            {name:'租赁中心',url:'###'},
            {name:'新闻动态   ',url:'###'},
            {name:'联系我们',url:'###'},
          ],
          footerList2:[
            {name:'买新房',url:'###'},
            {name:'买二手房',url:'###'},
            {name:'整租',url:'###'},
            {name:'整租',url:'###'},
            {name:'写字楼',url:'###'},
            {name:'商铺',url:'###'},
            {name:'厂房车位',url:'###'},
            {name:'闲置土地',url:'###'},
            {name:'地图找房',url:'###'},
          ],
          footerList3:[
            {name:'网站设置',url:'###'},
            {name:'友情链接',url:'###'},
            {name:'管理员设置',url:'###'},
            {name:'版权申明',url:'###'},
            {name:'网站地图',url:'###'},
            {name:'服务条款',url:'###'},
            {name:'关注我们',url:'###'}
          ],
        }
      }
    }
</script>

<style scoped>
@import "../../static/css/mainWrap.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
