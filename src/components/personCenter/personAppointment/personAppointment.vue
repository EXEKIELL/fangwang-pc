<template>
  <div id="personAppointment">
    <div class="tab clearfloat">
      <span @click="tabSel = index" :class="{sel:tabSel == index}" class="floatl" v-for="(item,index) in tabList" :key="index">{{item.name}}</span>
    </div>
    <!--发起的预约-->
    <template v-if="tabSel == 0">
      <template v-if="listData1.length > 0">
        <div class="listWrap">
          <ul>
            <li class="clearfloat" v-for="(item,index) in 3" :key="index">
              <div class="floatl list-left">
                <div class="left-img">
                  <img src="../../../../static/img/head01.png" alt="">
                </div>
                <div class="left-name">
                  <span>房产顾问：</span><span>李XX</span>
                </div>
              </div>
              <div class="floatl clearfloat list-right">
                <div class="right_1 floatl">
                  <div class="r1_1">
                    <span class="icon"></span><span class="text">商铺</span>
                  </div>
                  <div class="r1_2">
                    <span class="icon"></span><span class="text">清河区天南广场q区1120</span>
                  </div>
                  <div class="r1_3">
                    <span class="icon"></span><span class="text">2018-06-24  10:00</span>
                  </div>
                </div>
                <div class="right_2 floatr">
                  <button class="r2_1">修改预约</button>
                  <button class="r2_2" @click="cancel(index)">取消预约</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </template>
      <template v-else>
        <div style="text-align: center;padding: 50px 0;font-size: 18px;color: #00a2a8;">
          <span>您目前暂未有预约</span>
        </div>
      </template>
    </template>
    <!--我的预约-->
    <template v-if="tabSel == 1">
      <template v-if="listData2.length > 0">
        <div class="listWrap">
          <ul>
            <li class="clearfloat" v-for="(item,index) in 3" :key="index">
              <div class="floatl list-left">
                <div class="left-img">
                  <img src="../../../../static/img/head01.png" alt="">
                </div>
                <div class="left-name">
                  <span>李S</span>
                </div>
              </div>
              <div class="floatl clearfloat list-right">
                <div class="right_1 floatl">
                  <div class="r1_1">
                    <span class="icon"></span><span class="text">商铺</span>
                  </div>
                  <div class="r1_2">
                    <span class="icon"></span><span class="text">清河区天南广场q区1120</span>
                  </div>
                  <div class="r1_3">
                    <span class="icon"></span><span class="text">2018-06-24  10:00</span>
                  </div>
                </div>
                <div class="right_2 floatr">
                  <button class="r2_1">修改预约</button>
                  <button class="r2_2" @click="cancel(index)">取消预约</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </template>
      <template v-else>
        <div style="text-align: center;padding: 50px 0;font-size: 18px;color: #00a2a8;">
          <span>您目前暂未有预约</span>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
    export default {
      name: "personAppointment",
      data(){
        return {
          tabList:[
            {name:'发起的预约',id:0},
            {name:'我的预约',id:1},
          ],
          tabSel:0,
          // 发起的预约列表
          listData1:[1],
          // 我的预约列表
          listData2:[1],
        }
      },
      methods:{
        cancel:function (i) {
          this.$confirm('', '确认取消预约？', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }
      }
    }
</script>

<style scoped>
@import "../../../../static/css/personAppointment.css";
</style>
<style>
  @import "../../../../static/css/public.css";
  .el-message-box--center .el-message-box__status{
    display: none;
  }
  .el-message-box--center .el-message-box__title{
    text-align: center;
  }
  .el-button--primary{
    background-color: #ffffff;
    color: #606266;
    border: 1px solid #dcdfe6;
  }
</style>
