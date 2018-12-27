<template>
  <div id="ticket">
    <div class="tab clearfloat">
      <div class="tabLeft floatl">
        <span @click="tabS(index)" :class="{sel:tabSel == index}" class="floatl" v-for="(item,index) in tabList" :key="index">{{item.name}}</span>
      </div>
      <div class="tabRight floatr">
        <div class="selWrap">
          <div class="showWrap">
            <input class="textInput" type="text" disabled v-model="val">
            <span class="i"></span>
          </div>
          <ul class="slideWrap">
            <li :class="{sel:valSel == index}" @click="selStatus(index)" v-for="(item,index) in valList" :key="index">
              <span class="icon"></span><span>{{item.name}} ({{item.num}})</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <template v-if="tabSel == 0">
      <div class="ticketWrap ticketWrap1">
        <div class="swiper-container swiper02">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in 4" :key="index">
              <img src="../../../../../../static/img/piao02.png" alt="">
              <div class="info">
                <div class="info_1">
                  <div class="del"></div>
                  <!--即将过期-->
                  <div class="guoqi">
                    <span>即将过期</span>
                  </div>
                  <div class="i1_1">
                    <div class="i1_1_1">
                      <span class="tag">¥</span><span class="num">800<span>售券</span></span>
                    </div>
                    <div class="i1_1_2">满5999可用</div>
                  </div>
                  <div class="i1_2">2018.07.01 - 07.15</div>
                </div>
                <div class="info_2">
                  <div>
                    <div class="s1">
                      <span class="title">品类：</span><span class="det">出售类</span>
                    </div>
                    <div class="s2">
                      <span class="title">平台：</span><span class="det">XXX</span>
                    </div>
                    <div class="s3">
                      <span class="title">编号：</span><span class="det">S400800711</span>
                    </div>
                    <div class="s4">
                      <button>立即使用</button>
                    </div>
                    <div class="s5">
                      <span>剩余<span>104</span>张</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div @click="swiper02.swipePrev()" class="prev01"></div>
        <div @click="swiper02.swipeNext()" class="next01"></div>
      </div>
      <div class="list3">
        <span>申请优惠券</span>
      </div>
    </template>
    <template v-if="tabSel == 1">
      <div class="ticketWrap">
        <div class="swiper-container swiper01">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in 4" :key="index">
              <img src="../../../../../../static/img/piao01.png" alt="">
              <div class="info">
                <div class="info_1">
                  <div class="del"></div>
                  <!--即将过期-->
                  <div class="guoqi"></div>
                  <div class="i1_1">
                    <div class="i1_1_1">
                      <span class="tag">¥</span><span class="num">800<span>抵用券</span></span>
                    </div>
                    <div class="i1_1_2">满5999可用</div>
                  </div>
                  <div class="i1_2">2018.07.01 - 07.15</div>
                </div>
                <div class="info_2">
                  <div>
                    <div class="s1">
                      <span class="title">品类：</span><span class="det">出租类</span>
                    </div>
                    <div class="s2">
                      <span class="title">平台：</span><span class="det">XXX</span>
                    </div>
                    <div class="s3">
                      <span class="title">编号：</span><span class="det">S400800711</span>
                    </div>
                    <div class="s4">
                      <button>立即分享</button>
                    </div>
                    <div class="s5">
                      <span>剩余<span>104</span>张</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div @click="swiper01.swipePrev()" class="prev01"></div>
        <div @click="swiper01.swipeNext()" class="next01"></div>
      </div>
      <div class="list3">
        <span>申请优惠券</span>
      </div>
    </template>
  </div>
</template>

<script>
    export default {
      name: "ticket",
      data(){
        return {
          tabList:[
            {name:'售券',id:0},
            {name:'租券',id:1}
          ],
          tabSel:0,
          // 选择优惠券状态
          val:'可赠优惠券',
          valList:[
            {name:'可赠优惠券',num:3,id:0},
            {name:'已赠优惠券',num:0,id:1},
            {name:'过期优惠券',num:0,id:2},
          ],
          valSel:0,
          // 售券
          swiper02:null,
          // 租券
          swiper01:null
        }
      },
      methods:{
        selStatus:function (i) {
          this.valSel = i;
          this.val = this.valList[i].name;
        },
        tabS:function (i) {
          var that = this;
          this.tabSel = i;
          console.log(this.swiper01,this.swiper02)
          if(i == 0){
            setTimeout(function () {
              that.swiper02 = new that.Swiper('.swiper02',{
                slidesPerView:3
              });
              that.swiper02.swipeTo(0);
            },100)
          }else if(i == 1){
            setTimeout(function () {
              that.swiper01 = new that.Swiper('.swiper01',{
                slidesPerView:3
              });
              that.swiper01.swipeTo(0);
            },100)
          }
        }
      },
      mounted:function () {
        var that = this;
        setTimeout(function () {
          that.swiper02 = new that.Swiper('.swiper02',{
            slidesPerView:3
          });
          that.swiper01 = new that.Swiper('.swiper01',{
            slidesPerView:3
          });
        },100)
      }
    }
</script>

<style scoped>
@import "../../../../../../static/css/ticket.css";
</style>
<style>
  @import "../../../../../../static/css/public.css";
</style>
