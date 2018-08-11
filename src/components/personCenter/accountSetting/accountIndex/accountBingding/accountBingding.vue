<template>
  <div id="accountBingding">
    <div class="list">
      <ul>
        <li class="list1 clearfloat">
          <div class="li-left floatl clearfloat">
            <div class="icon floatl"></div>
            <div class="info floatl">
              <div class="info_1">邮箱绑定</div>
              <div class="info_2">可使用绑定邮箱接收信息</div>
            </div>
          </div>
          <div class="li-right floatl">
            <button v-if="emailStatus == false">立即验证</button>
            <button v-else class="b1">换绑</button>
          </div>
        </li>
        <li class="list2 clearfloat">
          <div class="li-left floatl clearfloat">
            <div class="icon floatl"></div>
            <div class="info floatl">
              <div class="info_1">手机认证</div>
              <div class="info_2">可进行手机号验证以设定认证手机号</div>
            </div>
          </div>
          <div class="li-right floatl">
            <button v-if="phoneStatus == false">立即验证</button>
            <button v-else class="b1">换绑</button>
          </div>
        </li>
        <li class="list3 clearfloat">
          <div class="li-left floatl clearfloat">
            <div class="icon floatl"></div>
            <div class="info floatl">
              <div class="info_1">微信账号</div>
              <div class="info_2" style="margin-bottom: 5px;">可使用微信账号直接登录58同城</div>
              <div class="info_2">发布时分享信息至微信朋友圈和微信好友</div>
            </div>
          </div>
          <div class="li-right floatl">
            <button @click="popUp1 = !popUp1" v-if="wechatStatus == false">立即验证</button>
            <button v-else class="b1">换绑</button>
          </div>
        </li>
      </ul>
    </div>
    <template v-if="popUp1">
      <div class="wechat" @click="popUp1 = !popUp1">
        <div>
          <div class="wx-wrap">
            <div class="wx_1">微信登录</div>
            <div class="wx_2">
              <img src="../../../../../../static/img/erwei04.png" alt="">
            </div>
            <div class="wx_3">
              <div>请使用微信二维码登陆</div>
              <div>“鸿基资盈宝”</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
    export default {
      name: "accountBingding",
      data(){
        return{
          popUp1:false,
          emailStatus:false,
          phoneStatus:true,
          wechatStatus:false
        }
      }
    }
</script>

<style scoped>
@import "../../../../../../static/css/accountBingding.css";
</style>
<style>
  @import "../../../../../../static/css/public.css";
</style>
