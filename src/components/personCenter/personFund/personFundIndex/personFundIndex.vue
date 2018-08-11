<template>
  <div id="personFundIndex" class="clearfloat">
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
  import MyWallet from './myWallet/myWallet'
  import MyBill from './myBill/myBill'
  import MyInvoice from './myInvoice/myInvoice'
  import Earnest from './earnest/earnest'
  import CashPledge from './cashPledge/cashPledge'
  import TicketApply from './ticketApply/ticketApply'
  import Ticket from './ticket/ticket'

    export default {
      name: "personFundIndex",
      data(){
        return {
          show:MyWallet,
          navList:[
            {name:'我的钱包',component:MyWallet},
            {name:'我的押金',component:CashPledge},
            {name:'定金管理',component:Earnest},
            {name:'我的账单',component:MyBill},
            {name:'我的发票',component:MyInvoice},
            {name:'优惠券',component:Ticket},
            {name:'优惠券申请',component:TicketApply},
          ],
          navIdx:0
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
@import "../../../../../static/css/personFundIndex.css";
</style>
<style>
  @import "../../../../../static/css/public.css";
</style>
