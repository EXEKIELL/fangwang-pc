<template>
    <div id="messageAdvice">
      <div class="banner">
        <img src="../../../static/img/banner03.png" alt="">
      </div>
      <div class="content">
        <div class="card">
          <div class="applyTitle">
            <div class="t_1"><div>留言建议</div></div>
            <div class="t_2">Message suggestion</div>
          </div>
          <div class="applyInfo">
            <div class="info_1 clearfloat">
              <div class="name">
                <input type="text" v-model="formData.name">
                <span v-if="formData.name == ''" class="placeholder">姓名</span>
              </div>
              <div class="phone">
                <input type="text" v-model="formData.phone">
                <span v-if="formData.phone == ''" class="placeholder">电话</span>
              </div>
            </div>
            <div class="info_3 clearfloat">
              <div>
                <el-select v-model="value1" placeholder="">
                  <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <span class="placeholder" v-if="value1 == ''">省份</span>
              </div>
              <div>
                <el-select v-model="value2" placeholder="">
                  <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <span class="placeholder" v-if="value2 == ''">城市</span>
              </div>
              <div>
                <el-select v-model="value3" placeholder="">
                  <el-option
                    v-for="item in options3"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <span class="placeholder" v-if="value3 == ''">区/县</span>
              </div>
            </div>
            <div class="info_2">
              <textarea name="desc" id="desc" v-model="formData.desc"></textarea>
              <span v-if="formData.desc == ''" class="placeholder">描述</span>
            </div>

            <div class="info_4">
              <button @click="sub">确认提交</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "messageAdvice",
      data(){
        return {
          formData:{
            name:'',
            phone:'',
            desc:''
          },
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

          options3: [{
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
          value3:'',
        }
      },
      methods:{
        sub:function () {

        }
      }
    }
</script>

<style scoped>
@import "../../../static/css/messageAdvice.css";
</style>
<style>
  @import "../../../static/css/public.css";
</style>
