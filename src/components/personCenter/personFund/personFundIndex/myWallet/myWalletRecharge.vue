<template>
  <div id="myWalletRecharge">
    <div class="pathWrap">
      <span @click="$router.push('/personCenter/personFundCenter/personFundIndex')">我的钱包</span><span>充值</span>
    </div>
    <div class="list1 clearfloat">
      <div class="l1_1 floatl">
        <span>充值金额：</span>
        <span class="input">
          <input type="text">
        </span>
        <span>元</span>
      </div>
      <div class="l1_2 floatr">
        应付金额：<span class="price">0<span>.00</span></span> 元
      </div>
    </div>
    <div class="list2">
      <div class="list-title">
        <span>支付方式</span>
      </div>
      <div class="l2_2">
        <!--微信-->
        <div @click="pay(0)" class="list hover-1 weixin">
          <div class="list_1 clearfloat">
            <div class="list1_1 floatl">
              <span class="icon"></span><span>微信支付</span>
            </div>
            <div class="list1_2 floatl">
              <span class="tag">推荐</span><span>10亿微信用户的首选</span>
            </div>
            <div class="list1_3 floatl">
              支付金额：<span>0.00</span>元
            </div>
          </div>
          <div class="list_2">
            <div class="codeWrap">
              <div>
                <img src="" alt="">
              </div>
            </div>
            <div class="text">打开微信扫一扫付款</div>
          </div>
        </div>
        <!--支付宝-->
        <div @click="pay(1)" class="list hover-1 zhifubao">
          <div class="list_1 clearfloat">
            <div class="list1_1 floatl">
              <span class="icon"></span><span>支付宝支付</span>
            </div>
            <div class="list1_3 floatr">
              支付金额：<span>0.00</span>元
            </div>
          </div>
          <div class="list_2">
            <div class="codeWrap">
              <div>
                <img src="" alt="">
              </div>
            </div>
            <div class="text">支付宝扫码付款</div>
          </div>
        </div>
        <!--快捷支付-->
        <div @click="pay(2)" class="list hover-1 kuaijie">
          <div class="list_1 clearfloat">
            <div class="list1_1 floatl">
              <span class="icon"></span><span>支付宝支付</span>
            </div>
            <div class="list1_2 floatl">
              <span>无需开通网银，有卡就能支付<span style="color: #d32816;">（推荐5万以上大额支付）</span></span>
            </div>
            <div class="list1_3 floatr">
              支付金额：<span>0.00</span>元
            </div>
          </div>
          <div class="list_2">
            <div class="addBtn">
              <button @click="showInput = !showInput"><i></i><span>绑定新银行卡</span></button>
            </div>
            <div class="bankCard" v-if="showInput">
              <span class="label">银行卡号：</span>
              <span class="input">
                <input type="text" v-model="bankNumber">
                <span style="color: #00a2a8;">{{bank}}</span>
              </span>
            </div>
            <div class="payBtn">
              <a target="view_window" href="###">立即支付</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "myWalletRecharge",
      data(){
        return {
          pathList:[],
          // 添加银行卡号
          showInput:false,
          // 识别银行卡
          bank:'建设银行',
          // 银行卡号
          bankNumber:''
        }
      },
      methods:{
        pay:function (i) {
          $('.list').addClass('hover-1');
          $('.list').removeClass('show');
          if(i == 0){
            $('.weixin').addClass('show');
            $('.weixin').removeClass('hover-1');
          }else if(i == 1){
            $('.zhifubao').addClass('show');
            $('.zhifubao').removeClass('hover-1');
          }else{
            $('.kuaijie').addClass('show');
            $('.kuaijie').removeClass('hover-1');
          }
        }
      }
    }
</script>

<style scoped>
@import "../../../../../../static/css/myWalletRecharge.css";
</style>
<style>
  @import "../../../../../../static/css/public.css";
</style>
