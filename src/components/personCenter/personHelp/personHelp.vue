<template>
  <div id="personHelp">
    <div class="tab clearfloat">
      <span @click="tabSel = index" :class="{sel:tabSel == index}" class="floatl" v-for="(item,index) in tabList" :key="index">{{item.name}}</span>
    </div>
    <div class="cont">
      <!--类别-->
      <div class="cont_1 clearfloat">
        <div class="cont_label floatl">类别：</div>
        <div class="cont_info floatl">
          <span @click="categorySel = index" :class="{sel:categorySel == index}" class="leibie" v-for="(item,index) in categoryList" :key="index">{{item.name}}</span>
        </div>
      </div>
      <!--反馈内容-->
      <div class="cont_2 clearfloat">
        <div class="cont_label floatl">反馈内容：</div>
        <div class="cont_info floatl">
          <div class="textarea">
            <textarea style="overflow-y: hidden" class="desc" v-model="formData.desc"></textarea>
            <div class="placeholder" v-if="formData.desc == ''">
              <div>您可填写15-400字.</div>
              <div>请注意：您的意见在这里无法获得回复。</div>
              <div>如有问题需要解决，请去常见问题看看，或联系客服，谢谢！</div>
            </div>
          </div>
        </div>
      </div>
      <!--上传-->
      <div class="cont_3 clearfloat">
        <div class="upload floatl">
          <input style="display: none;" @change="upload($event)" ref="fileInput" class="file" type="file">
          <button @click="$refs.fileInput.click()">上传图片</button>
        </div>
        <div class="upLoadName floatl">{{fileName}}</div>
      </div>
      <div class="cont_4">
        联系方式<span>（麻烦预留现在使用的联系方式，方便工作人员联系您 )</span>
      </div>
      <div class="cont_5 clearfloat">
        <div class="f_title">
          <span>手机号码</span>
        </div>
        <div class="input">
          <input type="text" v-model="formData.phone">
        </div>
        <div class="f_title">
          <span>或邮箱</span>
        </div>
        <div class="input">
          <input type="text" v-model="formData.email">
        </div>
      </div>
      <div class="cont_6">
        <button @click="submit">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "personHelp",
      data(){
        return {
          tabList:[
            {name:'意见反馈',id:0},
            {name:'联系客服',id:1},
          ],
          tabSel:0,
          //类别
          categoryList:[
            {name:'咨询',id:0},
            {name:'建议',id:1},
            {name:'投诉',id:2},
            {name:'其他',id:3},
          ],
          categorySel:0,
          //表单数据
          formData:{
            desc:'',
            phone:'',
            email:''
          },
          fileName:''
        }
      },
      methods:{
        upload:function (e) {
          console.log(e.target)
          this.fileName = e.target.files[0].name;
        },
        submit:function () {
          this.$alert('提示信息','温馨提示',{
            comfirmButtonText:'确定',
            callback: action => {
              //确定后做些什么
            }
          })
        }
      }
    }
</script>

<style scoped>
@import "../../../../static/css/personHelp.css";
</style>
<style>
  @import "../../../../static/css/public.css";
</style>
