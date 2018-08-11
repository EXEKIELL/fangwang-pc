<template>
    <div id="indexWrap">
      <div class="header">
        <div class="headerWrap clearfloat">
          <div class="hw-1 floatl">
            <div class="logo">
              <img src="../../static/img/logo01.png" alt="">
            </div>
          </div>
          <div class="hw-2 floatl clearfloat">
            <div class="search floatl">
              <span class="icon "></span>
              <input type="text" @focus="focus" @blur="blur">
            </div>
            <div class="searchBtn floatl">
              <button>搜索</button>
            </div>
          </div>
          <div class="hw-3 floatr">
            <span>注册</span>
            <span>登陆</span>
            <span class="fabu">免费发布</span>
          </div>
        </div>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
      <div class="footer"></div>
    </div>
</template>

<script>
    export default {
      name: "indexWrap",
      methods:{
        focus:function () {
          $('.search').addClass('focus');
        },
        blur:function () {
          $('.search').removeClass('focus');
        }
      },
      mounted:function () {

      }
    }
</script>

<style scoped>
@import "../../static/css/indexWrap.css";
</style>
<style>
  @import "../../static/css/public.css";
</style>
