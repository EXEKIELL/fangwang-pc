<template>
  <div id="safety">
    <div class="list1 clearfloat">
      <div class="l1_left floatl clearfloat">
        <div class="left_1 floatl">
          <span>安全级别：</span>
          <span class="lineWrap">
            <!--level1 5%  level2 25%  level3 50%  level4 75%  level5 95%-->
            <span class="line level4"></span>
          </span>
          <span>较高</span>
        </div>
        <div class="left_2 floatl">建议您启用全部安全设置，以保障账户及资金安全.</div>
      </div>
      <div class="l1_right floatr"><span>查看登陆历史记录</span></div>
    </div>
    <div class="list2">
      <ul>
        <li>
          <div class="liWrap clearfloat">
            <div class="wrap_left floatl clearfloat">
              <div class="left_1 floatl">
                <span class="icon suc"></span><span>登陆密码</span>
              </div>
              <div class="left_2 floatl">
                <div>互联网账户存在被盗风险，建议您定期更改密码以保护账户安全。</div>
              </div>
            </div>
            <div class="wrap_right floatl">
              <span @click="toUrl(1)">修改</span>
            </div>
          </div>
        </li>
        <li>
          <div class="liWrap clearfloat">
            <div class="wrap_left floatl clearfloat">
              <div class="left_1 floatl">
                <span class="icon suc"></span><span>邮箱认证</span>
              </div>
              <div class="left_2 floatl">
                <div><span>您验证的邮箱：</span>17727737711@139.com</div>
              </div>
            </div>
            <div class="wrap_right floatl">
              <span @click="toUrl(2)">修改</span>
            </div>
          </div>
        </li>
        <li>
          <div class="liWrap clearfloat">
            <div class="wrap_left floatl clearfloat">
              <div class="left_1 floatl">
                <span class="icon suc"></span><span>手机认证</span>
              </div>
              <div class="left_2 floatl">
                <span class="span1">您验证的手机：177*****11</span><span>若已丢失或停用，请立即更换，<span>避免账户被盗用</span></span>
              </div>
            </div>
            <div class="wrap_right floatl">
              <span @click="toUrl(3)">修改</span>
            </div>
          </div>
        </li>
        <li>
          <div class="liWrap clearfloat">
            <div class="wrap_left floatl clearfloat">
              <div class="left_1 floatl">
                <span class="icon suc"></span><span>实名认证</span>
              </div>
              <div class="left_2 floatl">
                <div>您验证的实名信息： ABB : 123444*************777</div>
                <div class="div2">由于您是快捷卡认证，请完善实名信息或更改实名身份认证。 <span>立即完善</span></div>
              </div>
            </div>
            <div class="wrap_right floatl">
              <span @click="toUrl(4)">查看</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="list3">
      <div class="liWrap clearfloat">
        <div class="wrap_left floatl clearfloat">
          <div class="left_1 floatl">
            <span class="icon suc"></span><span>账户申诉</span>
          </div>
          <div class="left_2 floatl">可申请人工审核，客服将在24小时内受理</div>
        </div>
        <div class="wrap_right floatl">
          <button>立即申诉</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "safety",
      data(){
        return{

        }
      },
      methods:{
        toUrl:function(id){
          if(id == 4){
            this.$router.push({
              path:'/personCenter/accountSetting/safetyDetail',
              query:{
                id:id,
                status:1
              }
            })
          }else{
            this.$router.push({
              path:'/personCenter/accountSetting/safetyDetail',
              query:{
                id:id,
                status:0
              }
            })
          }
        }
      }
    }
</script>

<style scoped>
@import "../../../../../../static/css/safety.css";
</style>
<style>
  @import "../../../../../../static/css/public.css";
</style>
