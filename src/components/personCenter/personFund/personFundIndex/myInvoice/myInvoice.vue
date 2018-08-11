<template>
  <div id="myInvoice">
    <div class="tab clearfloat">
      <span @click="tabSel = index" :class="{sel:tabSel == index}" class="floatl" v-for="(item,index) in tabList" :key="index">{{item.name}}</span>
    </div>
    <!--发票申请-->
    <template v-if="tabSel == 0">
      <div class="apply">
        <div class="apply_1">
          <div v-if="formData.type != 0" class="tishi tishi1">
            <p>尊敬的用户您好，根据国家相关规定，电子发票的法律效力、基本用途、基本使用规定等与税务机关监制的纸质增值税普通发票相同，建议您选择开具电子发票。</p>
          </div>
          <div class="inputWrap">
            <span class="label">发票性质：</span>
            <span class="radio" :class="{sel:property == 0}" @click.stop="selType(0)">
              <span class="radioBox">
                <input id="d0" type="radio" name="type">
              </span>
              <span>个人／非企业单位</span>
            </span>
            <span class="radio" :class="{sel:property == 1}" @click.stop="selType(1)">
              <span class="radioBox">
                <input id="d1" type="radio" name="type">
              </span>
              <span>公司</span>
            </span>
          </div>
          <div class="inputWrap">
            <span class="label">发票抬头：</span>
            <span class="input">
              <input type="text" v-model="formData.title">
              <span v-if="formData.title == ''" class="placeholder">请填写发票抬头</span>
            </span>
          </div>
          <div class="inputWrap">
            <span class="label">申请金额：</span>
            <span class="input">
              <input type="text" v-model="formData.price">
              <span v-if="formData.price == ''" class="placeholder">请填写申请金额</span>
            </span>
          </div>
          <div class="inputWrap">
            <span class="label">发票类型：</span>
            <span class="input" style="border: 0;">
              <template>
                <el-select v-model="formData.type" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </span>
          </div>
          <div class="inputWrap">
            <span class="label">税&emsp;&emsp;号：</span>
            <span class="input">
              <input type="text" v-model="formData.code">
              <span v-if="formData.code == ''" class="placeholder">请填写纳税人识别号</span>
            </span>
          </div>
          <div v-if="formData.type == 2" class="inputWrap">
            <span class="label">地&emsp;&emsp;址：</span>
            <span class="input">
              <input type="text" v-model="formData.add">
              <span v-if="formData.add == ''" class="placeholder">请填写注册</span>
            </span>
          </div>
          <div v-if="formData.type == 2" class="inputWrap">
            <span class="label">电&emsp;&emsp;话：</span>
            <span class="input">
              <input type="text" v-model="formData.pho">
              <span v-if="formData.pho == ''" class="placeholder">请填写注册电话</span>
            </span>
          </div>
          <template v-if="formData.type == 0 ||formData.type == 1">
            <div class="inputWrap" v-if="property != 0">
              <span class="label">银行账号：</span>
              <span class="input">
                <input type="text" v-model="formData.bankNum">
                <span v-if="formData.bankNum == ''" class="placeholder">请填写企业对公账号</span>
              </span>
            </div>
            <div class="inputWrap" v-if="property != 0">
              <span class="label">开&ensp;户&ensp;行：</span>
              <span class="input">
                <input type="text" v-model="formData.bankName">
                <span v-if="formData.bankName == ''" class="placeholder">请填写开户行名称</span>
              </span>
            </div>
          </template>
          <template v-else>
            <div class="inputWrap">
              <span class="label">银行账号：</span>
              <span class="input">
                <input type="text" v-model="formData.bankNum">
                <span v-if="formData.bankNum == ''" class="placeholder">请填写企业对公账号</span>
              </span>
            </div>
            <div class="inputWrap">
              <span class="label">开&ensp;户&ensp;行：</span>
              <span class="input">
                <input type="text" v-model="formData.bankName">
                <span v-if="formData.bankName == ''" class="placeholder">请填写开户行名称</span>
              </span>
            </div>
          </template>
          <div v-if="formData.type == 2" class="upload">
            <div class="u_1">资质资料上传<span>（上传文件均需盖公章，支持的图片格式为jpg/jpeg/png/gif/bmp,单个图片小于1M）</span></div>
            <div class="u_2 clearfloat">
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
                    <span class="el_span">上传营业执照副本</span>
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
                    <span class="el_span">上传税务登记证副本</span>
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
                    <span class="el_span">上传银行开户许可证</span>
                  </el-upload>
                  <el-dialog :visible.sync="imgData3.dialogVisible">
                    <img width="100%" v-for="item in imgData3.dialogImageUrl" :src="item.url" alt="">
                  </el-dialog>
                </div>
                <div class="u_text">上传照片</div>
              </div>
              <div class="u_list">
                <div class="u_wrap">
                  <el-upload
                    :limit="imgData4.filelimit"
                    :action="imgData4.uploadUrl"
                    name="file"
                    :data="imgData4.uploadData"
                    :auto-upload="false"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :before-upload="beforeAvatarUpload"
                    :on-success="uploadSuccess"
                    :file-list="imgData4.file_list"
                  >
                    <i class="el-icon-plus"></i>
                    <span class="el_span">上传一般纳税人证书</span>
                  </el-upload>
                  <el-dialog :visible.sync="imgData4.dialogVisible">
                    <img width="100%" v-for="item in imgData4.dialogImageUrl" :src="item.url" alt="">
                  </el-dialog>
                </div>
                <div class="u_text">上传照片</div>
              </div>
            </div>
          </div>
          <div v-if="formData.type == 0" class="tishi tishi1">
            <p>尊敬的用户您好，根据国家相关规定，电子发票的法律效力、基本用途、基本使用规定等与税务机关监制的纸质增值税普通发票相同，建议您选择开具电子发票。</p>
          </div>
        </div>
        <div class="apply_2" :class="{dianzi:formData.type == 0}">
          <div v-if="formData.type != 0" class="tishi">
            <p>您申请的发票将以快递的方式邮寄给您，需要您在线支付快递费 <span style="color: #00a2a8;">10.00 </span> 元，如您想节省快递费用，请申请电子发票。</p>
          </div>
          <div class="inputWrap">
            <span class="label">收票人手机：</span>
            <span class="input">
              <input type="text" v-model="formData.phone">
              <span v-if="formData.phone == ''" class="placeholder">请填写收票人手机</span>
            </span>
          </div>
          <div class="inputWrap">
            <span class="label">收票人地址：</span>
            <span class="input">
              <input type="text" v-model="formData.address">
              <span v-if="formData.address == ''" class="placeholder">请填写收票人地址</span>
            </span>
          </div>
        </div>
        <div class="apply_3">
          <button @click="submit">提交申请</button>
        </div>
        <div></div>
      </div>
    </template>
    <!--申请记录-->
    <template v-if="tabSel == 1">
      <div class="record">
        <div class="recordTitle">
          <span>本月发票<span>（2018.06.01-06.31）</span></span>
        </div>
        <div class="recordList">
          <ul>
            <li class="list" v-for="(item,index) in 6" :key="index">
              <div class="bianhao">编号：1234567890</div>
              <div class="info clearfloat">
                <div class="list_1">
                 <span>x x x x x x 有限公司</span>
                </div>
                <div class="list_2">
                  <span>400000元<span>「电子发票」</span></span>
                </div>
                <div class="list_3">
                  <span class="status">已出票</span><span>2018-06-22</span>
                </div>
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
          <span>提示：系统仅显示您一个月之内的申请记录，更早的申请记录不再显示。</span>
        </div>
      </div>
    </template>
    <!--开票说明-->
    <template v-if="tabSel == 2">
      <div class="explain">
        <!--富文本-->
        <div class="explainWrap">富文本</div>
      </div>
    </template>
  </div>
</template>

<script>
    export default {
      name: "myInvoice",
      data(){
        return {
          tabList:[
            {name:'发票申请',id:0},
            {name:'申请记录',id:1},
            {name:'开票说明',id:2},
          ],
          tabSel:0,
          // 发票性质：0-个人 1-公司
          property:0,
          // 0-电子发票 1-增值税普通发票 2-增值税专用发票
          options: [{
            value: 0,
            label: '电子发票'
          }, {
            value: 1,
            label: '增值税普通发票'
          }, {
            value: 2,
            label: '增值税专用发票'
          }],
          formData:{
            title:'',
            price:'',
            type:0,
            code:'',
            add:'',
            pho:'',
            bankNum:'',
            bankName:'',
            phone:'',
            address:''
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
          imgData4:{
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
        selType:function (i) {
          this.property = i
        },
        submit:function () {
          var formData = this.formData;
          formData.property = this.property;
          console.log(formData)
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

      }
    }
</script>

<style scoped>
@import "../../../../../../static/css/myInvoice.css";
</style>
<style>
  @import "../../../../../../static/css/public.css";
</style>
