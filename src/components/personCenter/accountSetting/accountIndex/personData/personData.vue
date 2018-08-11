<template>
  <div id="personData">
    <div class="tab clearfloat">
      <span @click="tabSel = index" :class="{sel:tabSel == index}" class="floatl" v-for="(item,index) in tabList" :key="index">{{item.name}}</span>
    </div>
    <!--基本信息-->
    <template v-if="tabSel == 0">
      <div class="basicInfo">
        <div class="info_list">
          <span class="title">账号：</span><span>HJ17727737711</span>
        </div>
        <div class="info_list">
          <span class="title">昵称：</span><span v-if="changeUserName == false">{{formData.userName}}</span>
          <span class="input" v-if="changeUserName">
            <input type="text" v-model="formData.userName">
          </span>
          <span @click="changeUserName = !changeUserName" class="alter" v-if="changeUserName == false">修改</span>
          <span @click="save(0)" class="save" v-if="changeUserName">保存</span>
        </div>
        <div class="info_list">
          <div class="list_1">
            关注： 请选择最感兴趣的分类，给你最精准的推荐
          </div>
          <div class="tagList clearfloat">
            <span @click="sel($event,index)" class="floatl" v-for="(item,index) in 8" :key="index">商铺</span>
          </div>
        </div>
        <div class="info_list">
          <span class="title">邮箱：</span><span v-if="changeEmail == false">{{formData.email}}</span>
          <span class="input" v-if="changeEmail">
            <input type="text" v-model="formData.email">
          </span>
          <span @click="changeEmail = !changeEmail" class="alter" v-if="changeEmail == false">修改</span>
          <span @click="save(1)" class="save" v-if="changeEmail">保存</span>
          <span class="verify" @click="popUp = !popUp">去验证</span>
        </div>
      </div>
    </template>
    <!--上传头像-->
    <template v-if="tabSel == 1">
      <div class="uploadHead">
        <div class="upload_1">
          <button @click="$refs.headInput.click()">选择图片</button>
          <input type="file" ref="headInput" @change="selImg($event)" style="display: none">
        </div>
        <div class="upload_2 clearfloat">
          <div :class="{bj:imgSrc == ''}" class="u2_1 floatl">
            <img :src="imgSrc" alt="">
          </div>
          <div class="u2_2 floatl clearfloat">
            <div class="u2_2_1">预览</div>
            <div class="u2_2_2">
              <div class="imgWrap">
                <div :class="{bj:imgSrc == ''}">
                  <img :src="imgSrc" alt="">
                </div>
              </div>
              <div>120px*120px</div>
            </div>
            <div class="u2_2_3">
              <div class="imgWrap">
                <div :class="{bj:imgSrc == ''}">
                  <img :src="imgSrc" alt="">
                </div>
              </div>
              <div>80px*80px</div>
            </div>
            <div class="u2_2_4">
              <div class="imgWrap">
                <div :class="{bj:imgSrc == ''}">
                  <img :src="imgSrc" alt="">
                </div>
              </div>
              <div>34px*34px</div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!--修改密码-->
    <template v-if="tabSel == 2">
      <div class="amend">
        <div class="amendWrap">
          <div class="amendList">
            <span>输入旧密码：</span>
            <span class="input">
              <input type="text">
            </span>
          </div>
          <div class="amendList">
            <span>设置新密码：</span>
            <span class="input">
              <input type="text">
            </span>
          </div>
          <div class="amendList">
            <span>确认新密码：</span>
            <span class="input">
              <input type="text">
            </span>
          </div>
          <div class="amendList btn">
            <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
            <span class="input">
              <button @click="chan">保存修改</button>
            </span>
          </div>
        </div>
      </div>
    </template>
    <!--弹窗-->
    <template v-if="popUp">
      <div class="popUp1">
        <div>
          <div class="popWrap">
            <div class="close" @click="popUp = !popUp"></div>
            <div class="popTitle">邮箱验证</div>
            <div class="popcont clearfloat">
              <div class="cont-left floatl">
                <img src="../../../../../../static/img/icon18.png" alt="">
              </div>
              <div class="cont-right floatl">
                <div class="r1">
                  <p>激活邮件已发送到32333777@qq.com 邮箱，请在48小时内登陆邮箱完成激活。</p>
                </div>
                <div class="r2">
                  <button>立即登陆邮箱验证</button>
                </div>
                <div class="r3">
                  <div class="r3_1">没收到验证邮件</div>
                  <ul>
                    <li>1. 尝试到广告邮件、垃圾邮件目录里找找看</li>
                    <li>2. 再次发送验证邮件</li>
                    <li>3. 如果重发激活邮件仍没收到，请更换邮箱<span class="again">重新验证</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
    export default {
      name: "personData",
      data(){
        return{
          //弹窗状态
          popUp:false,
          tabList:[
            {name:'基本信息',id:0},
            {name:'上传头像',id:1},
            {name:'修改密码',id:2},
          ],
          tabSel:0,
          formData:{
            userName:'袜纸里的二狗子',
            email:'17727737711@139.com'
          },
          changeUserName:false,
          changeEmail:false,
          tagList:[],
          selTag:[],
          // 上传头像
          imgSrc:''
        }
      },
      methods:{
        save:function (i) {
          // 0-用户昵称  1-用户邮箱
          if(i == 0){
            this.changeUserName = !this.changeUserName
          }else{
            this.changeEmail = !this.changeEmail
          }
        },
        sel:function (e,i) {
          if($(e.target).hasClass('sel')){
            $(e.target).removeClass('sel');
            //标签删除
            if(this.selTag.indexOf(i)>0){
              var index = this.selTag.indexOf(i);
              this.selTag.splice(index,1);
            }
          }else{
            $(e.target).addClass('sel');
            // 标签选择
            if(this.selTag.indexOf(i) == -1){
              this.selTag.push(i);
            }
          }
          console.log(this.selTag)
        },
        selImg:function (e) {
          var name = e.target.files[0].name
          this.imgSrc = 'static/img/'+name;
        },
        chan:function () {
          this.$alert('确定修改？', '温馨提示', {
            confirmButtonText: '确定',
            callback: action => {
              //确定后做些什么
            }
          });
        }
      }
    }
</script>

<style scoped>
@import "../../../../../../static/css/personData.css";
</style>
<style>
  @import "../../../../../../static/css/public.css";
</style>
