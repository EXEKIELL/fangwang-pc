<template>
  <div id="myBill">
    <div class="title clearfloat">
      <span>本月账单</span><span class="time">（{{date}}）</span>
      <span class="dateBtn">
        <span>
        <!--<el-date-picker-->
          <!--v-model="date"-->
          <!--type="daterange"-->
          <!--value-format="yyyy.MM.dd"-->
          <!--:default-value="date1"-->
          <!--@change="selData">-->
        <!--</el-date-picker>-->
          <!--range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">-->
          <el-date-picker
            v-model="date"
            type="month"
            placeholder="选择月"
            value-format="yyyy.MM"
            @change="selData">
          </el-date-picker>
      </span>
      </span>
    </div>
    <div class="listWrap">
      <ul>
        <li @click="navTo(item.id,item.type,item.is_pay)" :class="{shou:item.type == 0,zhi:item.type == 1}" class="list clearfloat" v-for="(item,index) in billList" :key="index">
          <div class="list-left floatl clearfloat">
            <div class="left_icon floatl">
              <img v-if="item.type == 0" src="../../../../../../static/img/shou01.png" alt="">
              <img v-else src="../../../../../../static/img/zhi01.png" alt="">
            </div>
            <div class="left_info floatl">
              <div class="info_title">
                <span>{{item.title}}</span><span class="tag">「{{item.tag}}」</span>
              </div>
              <div class="info_time">
                <span>{{item.time}}</span>
              </div>
            </div>
          </div>
          <div class="list-right floatl">
            <div class="right_1">
              <span v-if="item.type == 0" class="num add">+{{item.price}}</span>
              <span v-if="item.type == 1" class="num minus" :class="{p1:item.is_pay == 0}">-{{item.price}}</span>
            </div>
            <div class="right_2" v-if="item.is_pay == 0">等待支付，07.01前支付</div>
          </div>
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
    <div class="l2-3">
      <span>提示：系统仅显示您两年之内的账单明细，更早的账单明细不再显示。</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "myBill",
      data(){
        return {
          billList:[
            {id:0,type:0,title:'城市花园F栋707房',tag:'房产出售 定金',time:'06-28  14:33',price:320000,is_pay:1},
            {id:1,type:1,title:'猫弄公寓A栋302房',tag:'租房 房租 ',time:'06-28  14:33',price:2000,is_pay:0},
            {id:2,type:1,title:'城市花园F栋707房',tag:'房产出售 定金',time:'06-28  14:33',price:320000,is_pay:0},
            {id:3,type:1,title:'城市花园F栋707房',tag:'房产出售 定金',time:'06-28  14:33',price:320000,is_pay:1},
            {id:4,type:0,title:'城市花园F栋707房',tag:'房产出售 定金',time:'06-28  14:33',price:320000,is_pay:1},
            {id:5,type:1,title:'城市花园F栋707房',tag:'房产出售 定金',time:'06-28  14:33',price:320000,is_pay:1},
          ],
          date:'',
        }
      },
      methods:{
        navTo:function (i,type,isPay) {
          this.$router.push({
            path: '/personCenter/personFundCenter/myBillDetail',
            query:{
              id:i,
              type:type,
              isPay:isPay
            }
          })
        },
        selData:function (val) {
          console.log(val);
          this.date = val;
        }
      }
    }
</script>

<style scoped>
@import "../../../../../../static/css/myBill.css";
</style>
<style>
  @import "../../../../../../static/css/public.css";
</style>
