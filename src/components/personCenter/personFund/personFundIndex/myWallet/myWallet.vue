<template>
  <div id="myWallet">
    <div class="list1">
      <div class="l1_1">
        <span>账户余额</span>
      </div>
      <div class="l1_2">
        <span class="big">380000</span><span class="small">.00</span>
      </div>
      <div class="l1_3">
        <button @click="$router.push('/personCenter/personFundCenter/myWalletRecharge')">充值</button>
      </div>
    </div>
    <div class="list2">
      <div class="l2_1">
        <span @click="tabIdx = index" :class="{sel:tabIdx == index}" v-for="(item,index) in tabList" :key="index">{{item}}</span>
      </div>
      <div class="l2_2">
        <div class="ulWrap">
          <ul class="listWrap">
            <li class="clearfloat" v-for="(item,index) in listData" :key="index">
              <div class="li-left floatl">
                <div class="title">{{item.name}}</div>
                <div class="time">{{item.time}}</div>
              </div>
              <div class="li-right floatr">
                <span class="add" v-if="item.type == 0">+{{item.num}}</span>
                <span class="minus" v-if="item.type == 1">-{{item.num}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="pagin">
        <el-pagination
          background
          layout="prev, pager, next"
          prev-text="上一页"
          next-text="下一页"
          :total="100">
        </el-pagination>
      </div>
      <div class="l2-3">
        <span>提示：系统仅显示您两年之内的余额明细，更早的余额明细不再显示。</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "myWallet",
      data(){
        return {
          tabList:['近三个月收支明细','三个月前收支明细'],
          tabIdx:0,
          listData:[
            {name:'支付',type:1,time:'2018-03-28  14:33',num:3500},
            {name:'充值',type:0,time:'2018-03-28  14:33',num:250000},
            {name:'支付',type:1,time:'2018-03-28  14:33',num:3500},
            {name:'提现',type:1,time:'2018-03-28  14:33',num:3500},
            {name:'提现',type:1,time:'2018-03-28  14:33',num:3500},
            {name:'提现',type:1,time:'2018-03-28  14:33',num:3500},
          ]
        }
      }
    }
</script>

<style scoped>
@import "../../../../../../static/css/myWallet.css";
</style>
<style>
  @import "../../../../../../static/css/public.css";
</style>
