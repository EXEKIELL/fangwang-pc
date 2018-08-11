<template>
  <div id="safetyDetail">
    <template v-if="logStyle == 0">
      <div class="top">
        <div class="pathWrap">
          <span @click="$router.push('/personCenter/accountSetting/accountIndex')">账号安全</span><span>修改{{Text}}</span>
        </div>
        <div class="list1">
          <div class="l1_wrap clearfloat">
            <div :class="{sel:step == index}" class="w_1" v-for="(item,index) in 3" :key="index">
              <div class="line">
                <div>{{index+1}}</div>
              </div>
              <div class="text" v-if="index == 0">验证身份</div>
              <div class="text" v-if="index == 1">修改{{Text}}</div>
              <div class="text" v-if="index == 2">完成</div>
            </div>
          </div>
        </div>
        <!--验证身份-->
        <template v-if="step == 0">
          <div class="list2">
            <div class="l2_wrap">
              <div class="inputWrap clearfloat">
                <div class="input_left floatl">请输入账号密码：</div>
                <div class="input_right floatl">
                  <div class="input">
                    <input type="text">
                  </div>
                </div>
              </div>
              <div class="inputWrap inputWrap1 clearfloat">
                <div class="input_left floatl">已验证手机：</div>
                <div class="input_right floatl">
                  <div class="input">
                    <input type="text" disabled v-model="phone">
                  </div>
                </div>
              </div>
              <div class="inputWrap inputWrap2 clearfloat">
                <div class="input_left floatl">请填写手机验证码：</div>
                <div class="input_right floatl clearfloat">
                  <div class="input input1 floatl">
                    <input type="text">
                  </div>
                  <button v-if="sent == false" class="btn1" @click="huoqu">获取动态码</button>
                  <button v-else class="btn1" disabled>获取动态码</button>
                  <div class="hint2" v-if="sent == true">
                    验证码已发出，请注意查收短信，如果没有收到，你可以在 <span>{{count}}</span> 秒后重新发送
                  </div>
                </div>
              </div>
              <div class="button">
                <button @click="yanzheng(1)">提交</button><span>无法验证身份？试试 <span>账户申诉</span></span>
              </div>
            </div>
          </div>
        </template>
        <!--第二步-->
        <template v-if="step == 1">
          <div v-if="id == 1" class="list2">
            <div class="l2_wrap">
              <div class="inputWrap clearfloat">
                <div class="input_left floatl">请输入修改的登陆密码：</div>
                <div class="input_right floatl">
                  <div class="input">
                    <input type="text">
                  </div>
                </div>
              </div>
              <div class="inputWrap clearfloat">
                <div class="input_left floatl">再次输入登陆密码：</div>
                <div class="input_right floatl">
                  <div class="input">
                    <input type="text">
                  </div>
                </div>
              </div>
              <div class="button" style="text-align: center;">
                <button @click="yanzheng(2)">提交</button>
              </div>
            </div>
          </div>
          <div v-if="id == 2" class="list2">
            <div v-if="emailStatus == false" class="l2_wrap">
              <div class="inputWrap emailInput clearfloat">
                <div class="input_left floatl">我的邮箱：</div>
                <div class="input_right floatl">
                  <div class="input">
                    <input type="text">
                  </div>
                </div>
              </div>
              <div class="button" style="text-align: center;">
                <button class="emailBtn" @click="sentEmail">发送验证邮件</button>
              </div>
            </div>
            <div v-else class="l2_wrap1 clearfloat">
              <div class="l2_left floatl">
                <img src="../../../../../../static/img/bigicon01.png" alt="">
              </div>
              <div class="l2_right floatr">
                <ul>
                  <li class="li1">已发送验证邮件至：<span>177****11@qq.com</span></li>
                  <li class="li2">
                    （请立即完成验证，邮箱验证不通过则修改邮箱失败）
                  </li>
                  <li class="li3">验证邮件24小时内有效，请尽快登录您的邮箱点击验证链接完成验证。</li>
                </ul>
              </div>
            </div>
          </div>
          <div v-if="id == 3" class="list2">
            <div class="l2_wrap">
              <div class="inputWrap clearfloat">
                <div class="input_left floatl">请输入账号密码：</div>
                <div class="input_right floatl">
                  <div class="input">
                    <input type="text">
                  </div>
                </div>
              </div>
              <div class="inputWrap inputWrap2 clearfloat">
                <div class="input_left floatl">请填写手机验证码：</div>
                <div class="input_right floatl clearfloat">
                  <div class="input input1 floatl">
                    <input type="text">
                  </div>
                  <button v-if="sent == false" class="btn1" @click="huoqu">获取动态码</button>
                  <button v-else class="btn1" disabled>获取动态码</button>
                  <div class="hint2" v-if="sent == true">
                    验证码已发出，请注意查收短信，如果没有收到，你可以在 <span>{{count}}</span> 秒后重新发送
                  </div>
                </div>
              </div>
              <div class="button" style="text-align: center;">
                <button @click="yanzheng(2)">提交</button>
              </div>
            </div>
          </div>
        </template>
        <!--第三步-->
        <template v-if="step == 2">
          <div class="list2">
            <div class="l2_wrap1 clearfloat">
              <div class="l2_left floatl">
                <img src="../../../../../../static/img/bigicon01.png" alt="">
              </div>
              <div class="l2_right floatr">
                <ul>
                  <li class="li1">恭喜您，修改{{Text}}成功！</li>
                  <li class="li2">
                    <div class="left_1 ">
                      <span>安全级别：</span>
                      <span class="lineWrap">
                      <!--level1 5%  level2 25%  level3 50%  level4 75%  level5 95%-->
                      <span class="line level4"></span>
                    </span>
                      <span class="lev">较高</span>
                    </div>
                  </li>
                  <li class="li3">您的账户安全级还能提升哦，快去安全中心完善其它安全设置提高评级吧</li>
                </ul>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="bottom">
        <div>
          <div>为什么要进行身份验证？</div>
          <ul>
            <li>1. 为保障您的账户信息安全，在变更账户中的重要信息时需要进行身份验证，感谢您的理解和支持。</li>
            <li>2. 验证身份遇到问题？请提供用户名，手机号，历史发票，点击联系我司&emsp;<span>在线客服</span></li>
          </ul>
        </div>
      </div>
    </template>
    <template v-if="logStyle == 1">
      <div class="top2">
        <div class="pathWrap pathWrap1">
          <span @click="$router.push('/personCenter/accountSetting/accountIndex')">账号安全</span><span>登陆记录</span>
        </div>
        <div class="text1">
          <p>登录历史只记录最近20条，请您核对登录时间及地点，如您确定在某时间未登录过，请立即“<span @click="xiugai">修改登录密码</span>”以保障账号安全因宽带提供商导致的IP地址变化，登录地点有可能显示不准确，请您以登录时间为参考基准</p>
        </div>
        <div class="ulWrap">
          <ul>
            <li class="ulTitle clearfloat">
              <span>登录时间</span><span>登录地点</span><span>登录方式</span>
            </li>
            <li class="ulList clearfloat" v-for="(item,index) in 4" :key="index">
              <span>2018-06-22 08:40:56</span><span>中国 广东省 广州市 </span><span>APP端登陆</span>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
    export default {
      name: "safetyDetail",
      data(){
        return{
          // logStyle 0-修改信息 1-登陆记录
          logStyle:0,
          Text:'登陆密码',
          id:1,
          sent:false,
          count:60,
          phone:'177*****11',
          // 步骤
          step:0,
          // 邮箱验证
          emailStatus:false
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
        xiugai:function(){
          console.log(1)
          this.logStyle = 0;
          this.id = 1;
        },
        yanzheng:function (i) {
          if(i == 1){
            // 第一步
            // 验证通过
            this.step = 1
          }else if(i == 2){
            // 第二步
            // 验证通过
            this.step = 2
          }
        },
        sentEmail:function () {
          this.emailStatus = !this.emailStatus;
        }
      },
      mounted:function () {
        var id = this.$router.history.current.query.id;
        var s = this.$router.history.current.query.status;
        this.id = id;
        this.logStyle = s;
        if(id == 1){
          this.Text = '登陆密码';
        }else if(id == 2){
          this.Text = '邮箱'
        }else if(id == 3){
          this.Text = '手机'
        }
      }
    }
</script>

<style scoped>
@import "../../../../../../static/css/safetyDetail.css";
</style>
<style>
  @import "../../../../../../static/css/public.css";
</style>
