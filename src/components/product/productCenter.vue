<template>
    <div id="productCenter">
      <div class="p-header">
        <div class="wrap clearfloat">
          <div class="h_1 floatl">
            <div class="area">
              <span class="icon"></span><span>清远</span>
            </div>
          </div>
          <div class="h_2 floatl clearfloat">
            <ul class="floatl clearfloat">
              <li :class="{sel:headerIdx == index}" class="floatl" v-for="(item,index) in headerList" :key="index">
                <span @click="navBtn(index,item.url)">{{item.name}}</span>
              </li>
            </ul>
            <div class="h2_login floatl">
              <span @click="$router.push('/login')" class="login"><i @click.stop="$router.push('/personCenter')"></i>登录</span><span>/</span><span class="register">注册</span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-cont">
        <router-view></router-view>
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
      name: "productCenter",
      data(){
        return {
          //header
          headerList:[
            {name:'首页',url:'/homePage'},
            {name:'商铺',url:'/productCenter/productDetail'},
            {name:'写字楼',url:'/productCenter/productDetail'},
            {name:'厂房车位',url:'/productCenter/productDetail'},
            {name:'闲置土地',url:'/productCenter/productDetail'},
            {name:'楼房',url:'/productCenter/productDetail'},
            {name:'租房',url:'/productCenter/productDetail'},
            {name:'竞拍',url:'/productCenter/productDetail'},
            {name:'地图找房',url:'/productCenter/mapSearch'}
          ],
          //header状态
          headerIdx:0,
          //footer
          footerList1:[
            {name:'首页',url:'/homePage'},
            {name:'关于我们',url:'/mainWrap/aboutUs'},
            {name:'租赁中心',url:'/productCenter'},
            {name:'新闻动态   ',url:'###'},
            {name:'联系我们',url:'###'},
          ],
          footerList2:[
            {name:'买新房',url:'/productCenter/productDetail'},
            {name:'买二手房',url:'/productCenter/productDetail'},
            {name:'整租',url:'/productCenter/productDetail'},
            {name:'整租',url:'/productCenter/productDetail'},
            {name:'写字楼',url:'/productCenter/productDetail'},
            {name:'商铺',url:'/productCenter/productDetail'},
            {name:'厂房车位',url:'/productCenter/productDetail'},
            {name:'闲置土地',url:'/productCenter/productDetail'},
            {name:'地图找房',url:'/productCenter/mapSearch'},
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
      },
      methods:{
        navBtn:function (i,url) {
          this.headerIdx = i;
          //路由跳转
          this.$router.push(url);
        }
      },
      mounted:function () {

      }
    }
</script>

<style scoped>
@import "../../../static/css/productCenter.css";
</style>
<style>
  @import "../../../static/css/public.css";
</style>
