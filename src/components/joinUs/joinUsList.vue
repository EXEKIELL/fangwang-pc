<template>
    <div id="joinUsList">
      <div class="Title">
        <div>
          <div class="Title1">人才招聘</div>
          <div class="Title2">Recruitment</div>
          <div class="Title3">
            <span style="background-color: #fdc405;"></span>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <div class="list1 clearfloat">
            <div class="list1-left floatl">
              <div class="left_1">职位选择</div>
              <div class="left_2">加入鸿基资盈宝，开创职业新里程</div>
            </div>
            <div class="list1-right floatr clearfloat">
              <div class="jobClass floatl">
                <el-select v-model="value1" placeholder="">
                  <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <span class="placeholder" v-if="value1 == ''">职业分类</span>
              </div>
              <div class="area floatl">
                <el-select v-model="value2" placeholder="">
                  <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <span class="placeholder" v-if="value2 == ''">选择地区</span>
              </div>
              <div class="textSearch floatl clearfloat">
                <div class="input floatl">
                  <input type="text" v-model="value3">
                  <span class="placeholder" v-if="value3 == ''">输入关键字</span>
                </div>
                <div class="button floatl">
                  <button>开始搜索</button>
                </div>
              </div>
            </div>
          </div>
          <div class="list2">
            <ul class="l2-title">
              <li class="clearfloat">
                <div class="li_1">职位</div>
                <div class="li_2">地区</div>
                <div class="li_3">时间</div>
                <div class="li_4">操作</div>
              </li>
            </ul>
            <ul class="l2-detail">
              <li class="clearfloat" v-for="(item,index) in 8" :key="index">
                <div class="li_1">产品经理</div>
                <div class="li_2">清远市-清城区</div>
                <div class="li_3">2018-07-12</div>
                <div class="li_4">
                  <!--item.id-->
                  <button @click="toDetail(index)">查看详情</button>
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
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "joinUsList",
      data(){
        return{
          options1: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          value1: '',

          options2: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          value2:'',
          value3:''
        }
      },
      methods:{
        toDetail:function (i) {
          this.$router.push({
            path: '/mainWrap/joinUs/joinUsDetail',
            query:{
              id:i
            }
          })
        }
      }
    }
</script>

<style scoped>
@import "../../../static/css/joinUsList.css";
</style>
<style>
  @import "../../../static/css/public.css";
</style>
