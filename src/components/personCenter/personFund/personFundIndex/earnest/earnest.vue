<template>
  <div id="earnest">
    <div class="list1">
      <img src="../../../../../../static/img/bj01.png" alt="">
      <div class="info clearfloat">
        <div class="infoWrap">
          <div class="price"><span>¥</span>30000</div>
          <div class="text clearfloat">
            <div class="info_1 floatl">定金金额</div>
            <div class="info_2 floatr">定金订单：1</div>
          </div>
        </div>
      </div>
    </div>
    <div class="list2">
      <ul>
        <li class="slide clearfloat" v-for="(item,index) in listData" :key="index">
          <div class="liLeft floatl">
            <span class="title">城市花园F栋707房  售房定金  30000元</span>
            <span class="look">查看定金</span>
          </div>
          <div class="liRight floatl">2018-07-07</div>
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
      name: "earnest",
      data(){
        return {
          listData:[
            {name:'城市花园F栋707房',tag:'售房定金',price:'30000',id:0,time:'2018-07-07'},
            {name:'城市花园F栋707房',tag:'售房定金',price:'30000',id:1,time:'2018-07-07'},
            {name:'城市花园F栋707房',tag:'售房定金',price:'30000',id:2,time:'2018-07-07'},
            {name:'城市花园F栋707房',tag:'售房定金',price:'30000',id:3,time:'2018-07-07'},
          ]
        }
      }
    }
</script>

<style scoped>
@import "../../../../../../static/css/earnest.css";
</style>
<style>
  @import "../../../../../../static/css/public.css";
</style>
