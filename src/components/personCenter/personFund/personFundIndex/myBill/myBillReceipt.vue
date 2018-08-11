<template>
  <div id="myBillReceipt">
    <div class="pathWrap">
      <span @click="$router.push('/personCenter/personFundCenter/personFundIndex')">我的账单</span><span>账单详情</span><span>收据</span>
    </div>
    <div class="listWrap">
      <div class="list1 clearfloat">
        <div class="l1_1 floatl">
          <span>清远市新鸿基鸿运广场物业管理有限公司</span>
        </div>
        <div class="l1_2 floatr">
          <div class="add">Add |  清远市清城区xxx号</div>
          <div class="tel">Tel |  020-23439433</div>
          <div class="eMail">E-mail | 242335@142.com</div>
        </div>
      </div>
      <div class="list2 clearfloat">
        <div class="l2_1 floatl">
          <div class="billNum">
            <div>账单号</div>
            <div>201806281117772232343534</div>
          </div>
          <div class="billTime">
            <div>出单时间</div>
            <div>2018-06-28  14:33</div>
          </div>
        </div>
        <div class="l2_2 floatr">
          <div class="title">猫弄公寓A栋302房「租房 房租 」</div>
          <div class="desc">2018年6月（06.01-06.30）租金</div>
        </div>
      </div>
      <div class="list3">
        <span>合计：</span><span class="price">¥ 2000.00</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "myBillReceipt",
      data(){
        return {

        }
      },
      mounted:function () {

      }
    }
</script>

<style scoped>
@import "../../../../../../static/css/myBillReceipt.css";
</style>
<style>
  @import "../../../../../../static/css/public.css";
</style>
