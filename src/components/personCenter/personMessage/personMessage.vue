<template>
    <div id="personMessage">
      <div class="tab clearfloat">
        <span @click="tabSel = index" :class="{sel:tabSel == index}" class="floatl" v-for="(item,index) in tabList" :key="index">{{item.name}}</span>
      </div>
      <div class="tabWrap">
        <div class="system" v-if="tabSel == 0">
          <ul>
            <li class="clearfloat" v-for="(item,index) in 4" :key="index">
              <div class="li_1 floatl">
                <div class="type">账单消息</div>
                <div class="info">您本月的水电费账单已出，请于2018年7月1日前安排缴费，请及时安排，详情见账单！</div>
              </div>
              <div class="li_2 floatr">
                <span>2018-06-27 10:00</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "personMessage",
      data(){
          return{
            tabList:[
              {name:'系统消息',id:0},
              {name:'互动消息',id:1},
            ],
            tabSel:0,
          }
      }
    }
</script>

<style scoped>
@import "../../../../static/css/personMessage.css";
</style>
<style>
  @import "../../../../static/css/public.css";
</style>
