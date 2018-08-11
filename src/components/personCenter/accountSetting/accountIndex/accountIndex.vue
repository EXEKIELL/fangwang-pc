<template>
  <div id="accountIndex" class="clearfloat">
    <div class="index_left floatl">
      <ul>
        <li @click="nav(index,item.component)" :class="{sel:navIdx == index}" v-for="(item,index) in navList" :key="index">{{item.name}}</li>
      </ul>
    </div>
    <div class="index_right floatr">
      <div :is="show"></div>
    </div>
  </div>
</template>

<script>
  import PersonData from './personData/personData'
  import AccountBingding from './accountBingding/accountBingding'
  import Manage from './manage/manage'
  import Safety from './safety/safety'
    export default {
      name: "accountIndex",
      data(){
        return{
          show:PersonData,
          navList:[
            {name:'个人资料',component:PersonData},
            {name:'账号绑定',component:AccountBingding},
            {name:'认证管理',component:Manage},
            {name:'账号安全',component:Safety},
          ],
          navIdx:0,
        }
      },
      watch:{
        show:function () {
          console.log(123)
          $('input').placeholder();
        }
      },
      methods:{
        nav:function (i, val) {
          this.navIdx = i;
          this.show = val;
        }
      }
    }
</script>

<style scoped>
@import "../../../../../static/css/accountIndex.css";
</style>
<style>
  @import "../../../../../static/css/public.css";
</style>
