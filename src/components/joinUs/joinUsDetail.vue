<template>
    <div id="joinUsDetail">
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
          <div class="list2 clearfloat">
            <div class="l2-left floatl">
              <div class="l2left_1">UE交互师</div>
              <div class="l2left_2">UE Interactor</div>
              <div class="l2left_3 clearfloat">
                <div class="people">
                  <span>人数：</span><span>1人</span>
                </div>
                <div class="address">
                  <span>地址：</span><span>清远市清城区</span>
                </div>
                <div class="time">
                  <span>时间：</span><span>2017-07-12</span>
                </div>
              </div>
            </div>
            <div class="l2-right floatr">
              <button @click="applyStatus = true">立即申请</button>
            </div>
          </div>
          <div class="list3">
            <div class="list-title">
              <div class="list-title1">薪资福利</div>
            </div>
            <!--富文本-->
            <div class="list-cont"></div>
          </div>
          <div class="list3">
            <div class="list-title">
              <div class="list-title1">职位描述</div>
            </div>
            <!--富文本-->
            <div class="list-cont"></div>
          </div>
          <div class="list3">
            <div class="list-title">
              <div class="list-title1">任职要求</div>
            </div>
            <!--富文本-->
            <div class="list-cont"></div>
          </div>
        </div>
      </div>
      <!--弹窗职位申请-->
      <div v-if="applyStatus" class="apply">
        <div>
          <div class="applyWrap">
            <div class="close" @click="applyStatus = false"></div>
            <div class="applyTitle">
              <div class="t_1"><div>填写职位申请</div></div>
              <div class="t_2">不要以为你不是千里马，其实你只是少了一个伯乐。</div>
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
                <div class="email">
                  <input type="text" v-model="formData.email">
                  <span v-if="formData.email == ''" class="placeholder">邮箱</span>
                </div>
              </div>
              <div class="info_2">
                <textarea name="desc" id="desc" v-model="formData.desc"></textarea>
                <span v-if="formData.desc == ''" class="placeholder">描述</span>
              </div>
              <div class="info_3">
                <span class="upload">上传简历
                  <input type="file" @change="upload($event)">
                </span>
                <span>{{fileInput}}</span>
              </div>
              <div class="info_4">
                <button @click="sub">确认提交</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "joinUsDetail",
      data(){
        return{
          applyStatus:false,
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
          value3:'',
          fileInput:'',
          formData:{
            name:'',
            phone:'',
            email:'',
            desc:''
          }
        }
      },
      methods:{
        upload:function (event) {
          console.log(event);
          console.log(event.target.files)
          this.fileInput = event.target.files[0].name;
          // var e = event|window.event;
          // console.log(e.target.files)
        },
        sub:function () {
          console.log(this.formData);
        }
      }
    }
</script>

<style scoped>
@import "../../../static/css/joinUsDetail.css";
</style>
<style>
  @import "../../../static/css/public.css";
</style>
