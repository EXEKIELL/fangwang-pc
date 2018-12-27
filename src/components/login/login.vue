<template>
    <div id="login">
      <div class="loginWrap" v-if="showIndex == 0">
        <div class="list1" @click="showIndex = 2">
          <img src="../../../static/img/saoma.png" alt="">
          <img class="list1_text" src="../../../static/img/saoma_icon.png" alt="">
        </div>
        <div class="inlineWrap">
          <div class="wrapNav clearfloat">
            <div @click="nav_1(index)" :class="{sel:selClass == index}" class="floatl n1" v-for="(item,index) in navData_1" :key="index">{{item}}</div>
          </div>
          <div class="wrapCont">
            <!--0-登陆-->
            <div class="log" v-if="selClass == 0">
              <div class="logNav clearfloat">
                <div class="ln floatl" v-for="(item,index) in lognav" :key="index" @click="lnSel(index)">
                  <span class="ln-1">
                    <span class="dian" :class="{show:lognavIndex == index}"></span>
                    <input type="radio" name="login">
                  </span>
                  <span class="ln-2">{{item}}</span>
                </div>
              </div>
              <!--0-普通登陆-->
              <div class="logCont" v-if="lognavIndex == 0">
                <div class="lg1">
                  <input type="text" v-model="formData.account">
                  <span v-if="formData.account == ''" class="account" >请输入账号</span>
                  <span class="text" style="display: none;">请输入账号</span>
                </div>
                <div class="lg1 lg2">
                  <input type="password" v-model="formData.password">
                  <span v-if="formData.password == ''" class="pw" >请输入密码</span>
                  <span class="text" style="display: none;">请输入密码</span>
                </div>
                <div class="lg3 clearfloat">
                  <div class="lg3-left floatl" @click="rememb">
                    <span class="lg3-left-1">
                      <span :class="{sel:remenber}"></span>
                    </span>
                    <span class="lg3-left-2">记住密码</span>
                  </div>
                  <div class="lg3-right floatr">
                    <span @click="forget">忘记密码？</span>
                  </div>
                </div>
                <div class="lg4">
                  <button @click="loging(0)">立即登陆</button>
                </div>
                <div class="lg5" @click="showIndex = 3">
                  <span class="icon"></span><span>微信登陆</span>
                </div>
              </div>
              <!--1-手机登陆-->
              <div class="logCont" v-if="lognavIndex == 1">
                <div class="lg1">
                  <input type="text" v-model="formData1.phone">
                  <span v-if="formData1.phone == ''" class="account">请输入手机号码</span>
                  <span class="text" style="display: none;">请输入手机号码</span>
                </div>
                <div class="lg1 lg2">
                  <input type="text" v-model="formData1.code">
                  <button v-if="logCountDown == false" @click="duan(0)">获取短信验证码</button>
                  <button v-else>{{logCount}}秒后重新获取验证码</button>
                  <span v-if="formData1.code == ''" class="pw" >请输入手机验证码</span>
                  <span class="text" style="display: none;">请输入手机验证码</span>
                </div>
                <div class="lg4">
                  <button @click="loging(1)">立即登陆</button>
                </div>
                <div class="lg5" @click="showIndex = 3">
                  <span class="icon"></span><span>微信登陆</span>
                </div>
              </div>
            </div>
            <!--1-注册-->
            <div class="zhuce" v-if="selClass == 1">
              <div class="zhuceWrap">
                <div class="input input1">
                  <input type="text" @focus="f1(0)" @blur="f2(0)" v-model="formData3.name">
                  <span v-show="formData3.name == ''" class="placeholder" @click="sh(0)">请输入姓名</span>
                </div>
                <div class="input input2">
                  <input type="text" @focus="f1(1)" @blur="f2(1)" v-model="formData3.phone">
                  <span v-show="formData3.phone == ''" class="placeholder" @click="sh(1)">请输入手机号码</span>
                </div>
                <div class="input input3">
                  <input type="text" @focus="f1(2)" @blur="f2(2)" v-model="formData3.code">
                  <span v-show="formData3.code == ''" class="placeholder" @click="sh(2)">请输入收到的短信验证码</span>
                  <button v-if="countDown == false" class="huoqu" @click="duan(1)">获取验证码</button>
                  <button v-else class="huoqu">{{count}}秒后重新获取</button>
                </div>
                <div class="input input4">
                  <input v-if="pwShow" class="pw" type="password" @focus="f1(3)" @blur="f2(3)" v-model="formData3.password">
                  <input v-else class="pw" type="text" @focus="f1(3)" @blur="f2(3)" v-model="formData3.password">
                  <span v-show="formData3.password == ''" class="placeholder" @click="sh(3)">请设置登陆密码</span>
                  <span class="eye" @click="showPw(0)"></span>
                </div>
                <div class="input5">
                  <span class="select" :class="{sel:agree}" @click="selAgree"></span>
                  <span>我同意<a href="###">《鸿基资盈宝房网服务协议》</a></span>
                </div>
                <div class="input6">
                  <button @click="zhuceBtn">立即注册</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--找回密码-->
      <div class="loginWrap loginWrap1" v-if="showIndex == 1">
        <div class="inlineWrap">
          <div class="log1-title">
            <span>找回密码</span>
            <button class="fanhui" @click="showIndex = 0"></button>
          </div>
          <div class="log1-cont">
            <div class="input input_1">
              <input type="text" v-model="formData4.phone">
              <span v-if="formData4.phone == ''" class="placeholder">请输入手机号</span>
            </div>
            <div class="input input_1">
              <input type="text" v-model="formData4.code">
              <span v-if="formData4.code == ''" class="placeholder">请输入验证码</span>
              <button v-if="countDown2 == false" class="huoqu" @click="duan(2)">获取验证码</button>
              <button v-else class="huoqu">{{count2}}秒后重新获取</button>
            </div>
            <div class="input input_1">
              <input v-if="pwShow2" type="password" v-model="formData4.password">
              <input v-else type="text" v-model="formData4.password">
              <span v-if="formData4.password == ''" class="placeholder">请输入新密码</span>
              <span class="eye" @click="showPw(1)"></span>
            </div>
            <div class="input input_1">
              <input v-if="pwShow3" type="password" v-model="formData4.newPassword">
              <input v-else type="text" v-model="formData4.newPassword">
              <span v-if="formData4.newPassword == ''" class="placeholder">确认新密码</span>
              <span class="eye" @click="showPw(2)"></span>
            </div>
            <div class="input6" style="margin-top: 30px;">
              <button @click="xiugaiBtn">修改密码</button>
            </div>
          </div>
        </div>
      </div>
      <!--扫码登陆-->
      <div class="loginWrap loginWrap2" v-if="showIndex == 2">
        <div class="inlineWrap">
          <div class="list1" @click="showIndex = 0">
            <img src="../../../static/img/computer.png" alt="">
            <img class="list1_text" src="../../../static/img/computer_icon.png" alt="">
          </div>
          <div class="list2">
            <div class="logo">
              <img src="../../../static/img/logo02.png" alt="">
            </div>
            <div>1秒即登陆，方便又安全</div>
          </div>
          <div class="list3">
            <div class="l3-wrap">
              <img src="../../../static/img/erwei01.png" alt="">
            </div>
          </div>
          <div class="list4">
            房网扫码登陆，同步账户信息 |  下载<a href="###">手机APP</a>
          </div>
        </div>
      </div>
      <!--微信登陆-->
      <div class="loginWrap3" v-if="showIndex == 3">
        <div class="inlineWrap1">
          <div class="l3-1">
            <span>微信登陆</span>
          </div>
          <div class="l3-2">
            <div class="l3-2-wrap">
              <img src="../../../static/img/erwei02.png" alt="">
            </div>
          </div>
          <div class="l3-3">
            <img src="../../../static/img/loginBj01.png" alt="">
            <div>
              <div>请使用微信二维码登陆</div>
              <div>"房网"</div>
            </div>
          </div>
        </div>
        <button class="close" @click="showIndex = 0"></button>
      </div>
      <!--微信登陆绑定手机-->
      <div class="loginWrap loginWrap4" v-if="showIndex == 4">
        <div class="inlineWrap">
          <div class="l4-1">
            <div class="logo">
              <img src="../../../static/img/logo01.png" alt="">
            </div>
          </div>
          <div class="l4-2">
            <div class="input input_1">
              <input type="text" v-model="formData5.phone">
              <span v-if="formData5.phone == ''" class="placeholder">请输入手机号码</span>
              <button v-if="countDown3 == false" class="huoqu" @click="duan(3)">获取动态码</button>
              <button v-else class="huoqu">{{count3}}秒后重新获取</button>
            </div>
            <div class="input input_1">
              <input type="text" v-model="formData5.code">
              <span v-if="formData5.code == ''" class="placeholder">请输入收到的短信动态码</span>
            </div>
            <div class="input6">
              <button @click="btn(4)">绑定</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "login",
      data(){
        return {
          //0-登陆注册 1-忘记密码 2-扫码登陆 3-微信登陆 4-微信登陆绑定手机
          showIndex:2,
          //一级导航
          navData_1:['登陆','账号注册'],
          selClass:0,
          //登陆二级导航
          lognav:['普通登陆','手机快捷登陆'],
          lognavIndex:0,
          //记住密码
          remenber:false,
          countDown:false,
          logCountDown:false,
          countDown2:false,
          countDown3:false,
          count:60,
          logCount:60,
          count2:60,
          count3:60,
          formData:{
            account:'',
            password:''
          },
          formData1:{
            phone:'',
            code:''
          },
          formData3:{
            name:'',
            phone:'',
            code:'',
            password:''
          },
          //找回密码
          formData4:{
            phone:'',
            code:'',
            password:'',
            newPassword:''
          },
          //微信绑定手机
          formData5:{
            phone:'',
            code:''
          },
          agree:false,
          pwShow:true,
          pwShow2:true,
          pwShow3:true
          //获取短信验证码

        }
      },
      methods:{
        nav_1:function (i) {
          this.selClass = i;
        },
        //登陆二级导航
        lnSel:function (i) {
          this.lognavIndex = i;
          $('.account').siblings('.text').hide();
          $('.pw').siblings('.text').hide();
          if(i == 0){
            if(this.formData.account == ''){
              $('.account').show();
            }else{
              $('.account').hide();
            }
            if(this.formData.password == ''){
              $('.pw').show();
            }else{
              $('.pw').hide();
            }
          }else{
            if(this.formData1.phone == ''){
              $('.account').show();
            }else{
              $('.account').hide();
            }
            if(this.formData1.code == ''){
              $('.pw').show();
            }else{
              $('.pw').hide();
            }
          }
        },
        rememb:function () {
          this.remenber = !this.remenber;
        },
        //隐藏input预设字
        foc:function (i) {
          if(i == 0){
            $('.account').hide();
            $('.account').siblings('.text').hide();
            $('.account').siblings('input').focus();
          }else if(i == 1){
            $('.pw').hide();
            $('.pw').siblings('input').focus();
            $('.pw').siblings('.text').hide();
          }
        },
        loging:function (i) {
          var that = this;
          var formData = this.formData;
          var formData1 = this.formData1;
          if(i == 0){
            if(formData.account == ''){
              $('.account').siblings('.text').show();
            }else if(formData.password == ''){
              $('.pw').siblings('.text').show();
            }else{
              console.log(formData);
              this.$router.push('/homePage');
            }
          }else if(i == 1){
            if(formData1.phone == ''){
              $('.account').siblings('.text').show();
            }else if(formData1.code == ''){
              $('.pw').siblings('.text').show();
            }else{
              console.log(formData1);
            }
          }
        },
        // 获取短信验证码
        duan:function (i) {
          var that = this;
          if(i == 3){
            this.$alert('获取动态码成功', '温馨提示', {
              confirmButtonText: '确定',
              callback: action => {
                that.countDown3 = true;
                var timer = setInterval(function () {
                  if(that.count3 == 0){
                    that.countDown3 = false;
                    that.count3 = 60;
                    clearInterval(timer);
                  }
                  that.count3 --;
                },1000)
              }
            });
          }else{
            this.$alert('获取验证码成功', '温馨提示', {
              confirmButtonText: '确定',
              callback: action => {
                if(i == 0){
                  that.logCountDown = true;
                  var timer = setInterval(function () {
                    if(that.logCount == 0){
                      that.logCountDown = false;
                      that.logCount = 60;
                      clearInterval(timer);
                    }
                    that.logCount --;
                  },1000)
                }else if(i == 1){
                  that.countDown = true;
                  var timer = setInterval(function () {
                    if(that.count == 0){
                      that.countDown = false;
                      that.count = 60;
                      clearInterval(timer);
                    }
                    that.count --;
                  },1000)
                }else if(i == 2){
                  that.countDown2 = true;
                  var timer = setInterval(function () {
                    if(that.count2 == 0){
                      that.countDown2 = false;
                      that.count2 = 60;
                      clearInterval(timer);
                    }
                    that.count2 --;
                  },1000)
                }else if(i == 3){
                  that.countDown3 = true;
                  var timer = setInterval(function () {
                    if(that.count3 == 0){
                      that.countDown3 = false;
                      that.count3 = 60;
                      clearInterval(timer);
                    }
                    that.count3 --;
                  },1000)
                }
              }
            });
          }
        },
        // 获取焦点
        f1:function (i) {
          $('.input .placeholder').eq(i).hide();
        },
        f2:function (i) {
          if(i == 0){
            if(this.formData3.name == ''){
              $('.input .placeholder').eq(i).show();
            }
          }else if(i == 1){
            if(this.formData3.phone == ''){
              $('.input .placeholder').eq(i).show();
            }
          }else if(i == 2){
            if(this.formData3.code == ''){
              $('.input .placeholder').eq(i).show();
            }
          }else if(i == 3){
            if(this.formData3.password == ''){
              $('.input .placeholder').eq(i).show();
            }
          }
        },
        sh:function (i) {
          $('.input .placeholder').eq(i).hide();
          $('.input input').eq(i).focus();
        },
        selAgree:function () {
          this.agree = !this.agree
        },
        //显示密码
        showPw:function (i) {
          if(i == 0){
            this.pwShow = !this.pwShow;
          }else if(i == 1){
            this.pwShow2 = !this.pwShow2;
          }else if(i == 2){
            this.pwShow3 = !this.pwShow3;
          }
        },
        zhuceBtn:function () {
          if(this.agree == false){
            this.$alert('需要同意协议才能注册', '温馨提示', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
          }else{
            var formData = this.formData3;
            console.log(formData);
            this.$confirm('<div class="m1">18819243426已注册了账号，可直接使用该手机号登陆</div><div class="m2">继续注册，将与之前的账号解绑 </div>', '', {
              confirmButtonText: '登陆该账号',
              cancelButtonText: '继续注册',
              dangerouslyUseHTMLString: true,
              type: 'warning',
              center: true
            }).then(() => {
              this.$message({
                type: 'success',
                message: '登陆该账号'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '继续注册'
              });
            });
          }
        },
        xiugaiBtn:function(){
          console.log(this.formData4)
        },
        // 忘记密码
        forget:function () {
          this.showIndex = 1;
        },
        btn:function (i) {
          if(i == 4){
            console.log(this.formData5);
          }
        }
      },
      mounted:function () {
        //input 预设字
        // $('.account').siblings('input').focusin(function () {
        //   $('.account').hide();
        //   $('.account').siblings('.text').hide();
        // });
        // $('.account').siblings('input').focusout(function () {
        //   if($('.account').siblings('input').val() == ''){
        //     $('.account').show();
        //   }
        // });
        // $('.pw').siblings('input').focusin(function () {
        //   $('.pw').hide();
        //   $('.pw').siblings('text').hide();
        // });
        // $('.pw').siblings('input').focusout(function () {
        //   if($('.pw').siblings('input').val() == ''){
        //     $('.pw').show();
        //   }
        // });

        var swiper01 = new this.Swiper('.swiper-container',{

        })
      }
    }
</script>

<style scoped>
@import "../../../static/css/login.css";
</style>
<style>
  @import "../../../static/css/public.css";
</style>
