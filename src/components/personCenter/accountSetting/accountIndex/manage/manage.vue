<template>
  <div id="manage">
    <div class="tab clearfloat">
      <span @click="tabChange(index)" :class="{sel:tabSel == index}" class="floatl" v-for="(item,index) in tabList" :key="index">{{item.name}}</span>
    </div>
    <template v-if="tabSel == 0">
      <div class="person">
        <div class="hint">
          <span class="icon"></span><span>请填写您的真实身份信息，通过后将不能修改</span>
        </div>
        <div class="form">
          <div class="inputWrap">
            <span class="input">
              <input type="text" placeholder="真实姓名" v-model="formData1.name">
              <!--<span class="placeholder">真实姓名</span>-->
            </span>
            <span class="text">请输入您的真实姓名</span>
          </div>
          <div class="inputWrap">
            <span class="input clearfloat">
              <input type="text" placeholder="银行卡号" v-model="formData1.bank">
              <!--<span class="placeholder">银行卡号</span>-->
            </span>
            <span class="text text2"><span>支持四大银行</span>   仅支持您名下的银行卡，输入卡号自动识别银行卡种</span>
          </div>
          <div class="inputWrap">
            <span class="input">
              <input type="text" placeholder="手机号" v-model="formData1.phone">
              <!--<span class="placeholder">手机号</span>-->
            </span>
            <span class="text">请输入该卡在银行预留的手机号码</span>
          </div>
          <div class="inputWrap">
            <span class="input">
              <input type="text" placeholder="短信验证码" v-model="formData1.code">
              <!--<span class="placeholder">短信验证码</span>-->
              <button class="btn" v-if="sent == false" @click="huoqu">获取短信验证码</button>
              <button class="btn" v-else disabled>获取短信验证码</button>
            </span>
            <span class="text"></span>
          </div>
          <div class="hint2" v-if="sent == true">
            验证码已发出，请注意查收短信，如果没有收到，你可以在 <span>{{count}}</span> 秒后重新发送
          </div>
          <div class="inputWrap">
            <span class="input">
              <input type="text" placeholder="身份证号码" v-model="formData1.identity">
              <!--<span class="placeholder">身份证号码</span>-->
            </span>
            <span class="text">请输入您的身份证号码</span>
          </div>
          <div class="u_2 clearfloat">
            <div class="u_title">证件照片</div>
            <div class="u_list">
              <div class="u_wrap">
                <el-upload
                  :limit="imgData1.filelimit"
                  :action="imgData1.uploadUrl"
                  name="file"
                  :data="imgData1.uploadData"
                  :auto-upload="false"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :before-upload="beforeAvatarUpload"
                  :on-success="uploadSuccess"
                  :file-list="imgData1.file_list"
                >
                  <i class="el-icon-plus"></i>
                  <span class="el_span">上传照片</span>
                </el-upload>
                <el-dialog :visible.sync="imgData1.dialogVisible">
                  <img width="100%" v-for="item in imgData1.dialogImageUrl" :src="item.url" alt="">
                </el-dialog>
              </div>
              <div class="u_text">上传身份证正面</div>
            </div>
            <div class="u_list">
              <div class="u_wrap">
                <el-upload
                  :limit="imgData2.filelimit"
                  :action="imgData2.uploadUrl"
                  name="file"
                  :data="imgData2.uploadData"
                  :auto-upload="false"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :before-upload="beforeAvatarUpload"
                  :on-success="uploadSuccess"
                  :file-list="imgData2.file_list"
                >
                  <i class="el-icon-plus"></i>
                  <span class="el_span">上传照片</span>
                </el-upload>
                <el-dialog :visible.sync="imgData2.dialogVisible">
                  <img width="100%" v-for="item in imgData2.dialogImageUrl" :src="item.url" alt="">
                </el-dialog>
              </div>
              <div class="u_text">上传身份证正面</div>
            </div>
          </div>
          <div class="hint3">
            温馨提示：请上传原始比例的身份证正反面，请勿剪裁涂鸦，保证身份证信息清晰显示，否则无法通过审核
          </div>
          <div class="btn">
            <button>提交</button>
          </div>
        </div>
      </div>
    </template>
    <template v-if="tabSel == 1">
      <div class="company">
        <div class="form">
          <div class="inputWrap">
            <span class="input">
              <input type="text" placeholder="企业名称" v-model="formData2.company">
              <!--<span class="placeholder">企业名称</span>-->
            </span>
            <span class="text">请输入营业执照上的全称</span>
          </div>
          <div class="inputWrap">
            <span class="input clearfloat">
              <input type="text" placeholder="联系人" v-model="formData2.name">
              <!--<span class="placeholder">联系人</span>-->
            </span>
            <span class="text">请输入真实姓名</span>
          </div>
          <div class="inputWrap">
            <span class="input">
              <input type="text" placeholder="联系号码" v-model="formData2.phone">
              <!--<span class="placeholder">联系号码</span>-->
            </span>
            <span class="text">请输入有效联系号码</span>
          </div>
          <div class="inputWrap">
            <span class="input">
              <input type="text" placeholder="身份证号码" v-model="formData2.identity">
              <!--<span class="placeholder">身份证号码</span>-->
            </span>
            <span class="text">请输入真实身份证号码</span>
          </div>
          <div class="inputWrap">
            <span class="input">
              <input type="text" placeholder="营业执照注册号" v-model="formData2.business">
              <!--<span class="placeholder">营业执照注册号</span>-->
            </span>
            <span class="text">或18位统一社会信用代码</span>
          </div>
          <div class="u_2 clearfloat">
            <div class="u_title">资质信息</div>
            <div class="u_list">
              <div class="u_wrap">
                <el-upload
                  :limit="imgData1.filelimit"
                  :action="imgData1.uploadUrl"
                  name="file"
                  :data="imgData1.uploadData"
                  :auto-upload="false"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :before-upload="beforeAvatarUpload"
                  :on-success="uploadSuccess"
                  :file-list="imgData1.file_list"
                >
                  <i class="el-icon-plus"></i>
                  <span class="el_span">上传营业执照</span>
                </el-upload>
                <el-dialog :visible.sync="imgData1.dialogVisible">
                  <img width="100%" v-for="item in imgData1.dialogImageUrl" :src="item.url" alt="">
                </el-dialog>
              </div>
              <div class="u_text">上传照片</div>
            </div>
            <div class="u_list">
              <div class="u_wrap">
                <el-upload
                  :limit="imgData2.filelimit"
                  :action="imgData2.uploadUrl"
                  name="file"
                  :data="imgData2.uploadData"
                  :auto-upload="false"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :before-upload="beforeAvatarUpload"
                  :on-success="uploadSuccess"
                  :file-list="imgData2.file_list"
                >
                  <i class="el-icon-plus"></i>
                  <span class="el_span">上传照片</span>
                </el-upload>
                <el-dialog :visible.sync="imgData2.dialogVisible">
                  <img width="100%" v-for="item in imgData2.dialogImageUrl" :src="item.url" alt="">
                </el-dialog>
              </div>
              <div class="u_text">上传照片</div>
            </div>
            <div class="u_list">
              <div class="u_wrap">
                <el-upload
                  :limit="imgData3.filelimit"
                  :action="imgData3.uploadUrl"
                  name="file"
                  :data="imgData3.uploadData"
                  :auto-upload="false"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :before-upload="beforeAvatarUpload"
                  :on-success="uploadSuccess"
                  :file-list="imgData3.file_list"
                >
                  <i class="el-icon-plus"></i>
                  <span class="el_span">上传照片</span>
                </el-upload>
                <el-dialog :visible.sync="imgData3.dialogVisible">
                  <img width="100%" v-for="item in imgData3.dialogImageUrl" :src="item.url" alt="">
                </el-dialog>
              </div>
              <div class="u_text">上传照片</div>
            </div>
            <div class="u_detail">
              <p>除企业工商营业执照之外，认证公函／商标注册证／运营者职位证明等，上传有效信息越多，认证成功几率越大。</p>
            </div>
          </div>
          <div class="btn">
            <button>提交</button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
    export default {
      name: "manage",
      data(){
        return{
          tabList:[
            {name:'个人认证',id:0},
            {name:'企业认证',id:1},
          ],
          tabSel:0,
          // 获取短信验证码状态
          sent:false,
          count:60,
          // 个人认证
          formData1:{
            name:'',
            bank:'',
            phone:'',
            code:'',
            identity:''
          },
          // 企业认证
          formData2:{
            company:'',
            name:'',
            phone:'',
            identity:'',
            business:''
          },
          // 上传图片
          imgData1:{
            filelimit:1,
            uploadUrl:'',
            uploadData:{},
            dialogImageUrl:'',
            dialogVisible:false,
            file_list:[]
          },
          imgData2:{
            filelimit:1,
            uploadUrl:'',
            uploadData:{},
            dialogImageUrl:'',
            dialogVisible:false,
            file_list:[]
          },
          imgData3:{
            filelimit:1,
            uploadUrl:'',
            uploadData:{},
            dialogImageUrl:'',
            dialogVisible:false,
            file_list:[]
          },
        }
      },
      methods:{
        huoqu:function () {
          var that = this;
          this.$alert('获取动态码成功', '温馨提示', {
            confirmButtonText: '确定',
            callback: action => {
              that.sent = true;
              var timer = setInterval(function () {
                if(that.count == 0){
                  that.sent = false;
                  that.count = 60;
                  clearInterval(timer);
                }
                that.count --;
              },1000)
            }
          });
        },
        tabChange:function(i){
          this.tabSel = i;
          setTimeout(function () {
            $('input').placeholder();
          },100)
        },
        // 点击文件列表中已上传的文件时的钩子
        handlePictureCardPreview:function (file) {
          this.imgData.dialogImageUrl = file.url;
          this.imgData.dialogVisible = true;
        },
        // 删除文件之前
        handleRemove:function (file,fileList) {

        },
        // 上传图片前
        beforeAvatarUpload:function (file) {

        },
        // 上传成功时
        uploadSuccess:function (response, file, fileList) {

        }
      },
      mounted:function () {
        $('input').placeholder();
      }
    }
</script>

<style scoped>
@import "../../../../../../static/css/manage.css";
</style>
<style>
  @import "../../../../../../static/css/public.css";
</style>
