<template>
  <div id="cashPledgeDetail">
    <div class="pathWrap">
      <span @click="$router.push('/personCenter/personFundCenter/personFundIndex')">我的押金</span><span>押金详情</span>
    </div>
    <div class="cont">
      <div class="contWrap">
        <div class="cw-top">
          <div class="title">
            <span>猫弄公寓A栋302房</span><span>「租房 房租 」</span>
          </div>

          <div v-if="payStatus == 0" class="price">+200000.00</div>
          <div v-if="payStatus == 1" class="price">-2000.00</div>

          <div v-if="payStatus == 0" class="status" style="color: #fdc405;">交易成功</div>
          <div v-if="payStatus == 1" class="status">未付款</div>
        </div>
        <div class="cw-bottom">
          <div class="bottom_1">
            <div class="b1_1 clearfloat">
              <span v-if="payStatus == 0" class="text1">收款方式</span><span v-if="payStatus == 0" class="text2 text3" style="color: #666666;">储蓄卡</span>
              <span v-if="payStatus == 1" class="text1">付款方式</span><span v-if="payStatus == 1" class="text2 text3">未付款</span>
            </div>
            <div class="b1_2 clearfloat">
              <span class="text1">账单说明</span><span class="text2">租金2000.00</span>
            </div>
          </div>
          <div class="bottom_2">
            <div class="b2_1 clearfloat">
              <span class="text1">创建时间</span><span class="text2">2018-06-28  14:33</span>
            </div>
            <div class="b2_2 clearfloat">
              <span class="text1">账单号</span><span class="text2">201806281117772232343534</span>
            </div>
          </div>
          <div class="bottom_3">
            <button @click="toShouju">查看收据</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "cashPledgeDetail",
      data(){
        return{
          payStatus:0
        }
      },
      methods:{
        toShouju:function () {
          this.$router.push({
            path: '/personCenter/personFundCenter/cashPledgeReceipt',
            query:{
              id:0
            }
          })
        }
      }
    }
</script>

<style scoped>
@import "../../../../../../static/css/cashPledgeDetail.css";
</style>
<style>
  @import "../../../../../../static/css/public.css";
</style>
