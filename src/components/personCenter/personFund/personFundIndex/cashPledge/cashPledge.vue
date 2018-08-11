<template>
  <div id="cashPledge">
    <div class="list1">
      <img src="../../../../../../static/img/bj01.png" alt="">
      <div class="info clearfloat">
        <div class="infoWrap">
          <div class="price"><span>¥</span>{{total}}</div>
          <div class="text clearfloat">
            <div class="info_1 floatl">押金金额</div>
            <div class="info_2 floatr">押金订单：{{listData.length}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="list2">
      <ul>
        <li class="slide clearfloat" v-for="(item,index) in listData" :key="index">
          <div class="liLeft floatl">
            <span class="title">{{item.name}}  {{item.tag}}  {{item.price}}元</span>
            <span class="look" @click="toDetail(item.id)">查看押金</span>
          </div>
          <div class="liRight floatl">{{item.time}}</div>
        </li>
      </ul>
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
  </div>
</template>

<script>
    export default {
      name: "cashPledge",
      data(){
        return {
          listData:[
            {name:'城市花园F栋707房',tag:'住宅租房押金',price:30000,id:0,time:'2018-07-07'},
            {name:'富力盈盛大厦B座301室',tag:'办公室押金',price:30000,id:1,time:'2018-07-07'},
          ],
          total:null
        }
      },
      watch:{
        listData:function () {
          for(var i = 0;i<this.listData.length;i++){
            this.total+=this.listData[i].price
          }
        }
      },
      methods:{
        toDetail:function (i) {
          this.$router.push({
            path: '/personCenter/personFundCenter/cashPledgeDetail',
            query:{
              id:i
            }
          })
        }
      },
      mounted:function () {
        for(var i = 0;i<this.listData.length;i++){
          this.total+=this.listData[i].price
        }
      }
    }
</script>

<style scoped>
@import "../../../../../../static/css/cashPledge.css";
</style>
<style>
  @import "../../../../../../static/css/public.css";
</style>
