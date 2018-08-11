<template>
    <div id="personShopping">
      <template v-if="shopList.length >0">
        <div class="shopList">
          <ul>
            <li v-for="(item,index) in shopList" :key="index">
              <div class="liCont clearfloat">
                <div class="sele floatl">
                  <div class="selWrap" @click="selIt($event,item.price)">
                    <input type="checkbox">
                  </div>
                </div>
                <div class="cont floatr clearfloat">
                  <div class="cont-img floatl">
                    <img :src="item.img" alt="">
                  </div>
                  <div class="cont-detail floatl">
                    <div class="detail_1 clearfloat">
                      <div class="d1_title">{{item.name}}</div>
                      <div class="d1_price">¥ {{item.price}}/月</div>
                      <div class="d1_count clearfloat">
                        <span class="floatl" @click="changeCount(0,index)">-</span>
                        <!--只能输入数字-->
                        <input id="count" v-model="item.count" class="floatl" onkeyup="this.value=this.value.replace(/[^0-9]*$/,'')" onblur='this.value=this.value.replace(/^[0]+[0-9]*$/gi,"")' />
                        <span class="floatl" @click="changeCount(1,index)">+</span>
                      </div>
                      <div class="d1_del">
                        <i></i>
                      </div>
                    </div>
                    <div class="detail_tag">
                      <span v-for="(item,index) in 3">核心商圈</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="total clearfloat">
          <div class="total_left floatl clearfloat">
            <div class="selWrap" @click="selItAll($event)">
              <input type="checkbox">
            </div>
            <div class="left_2">全选</div>
          </div>
          <div class="total_right floatr">
            <span class="r_1">应付</span><span class="r_2"><span>¥</span> {{totalPrice|price}}</span>
          </div>
        </div>
        <div class="btn">
          <button>去结算</button>
        </div>
      </template>
      <template v-else>
        <div style="text-align: center;padding: 50px 0;font-size: 20px;color: #666666;">
          <span>暂未有商品</span>
        </div>
      </template>
    </div>
</template>

<script>
    export default {
      name: "personShopping",
      data(){
        return {
          count:0,
          totalPrice:0.00,
          shopList:[
            {img:'static/img/img37.png',name:'清城区海藻街区商铺「出售」',price:5000,count:1},
            {img:'static/img/img37.png',name:'清城区海藻街区商铺「出售」',price:4900,count:1}
          ]
        }
      },
      filters:{
        price:function (val) {
          var result = (val.toString()).indexOf(".");
          if(result != -1) {
            return val;
          } else {
            return val+'.00';
          }
        }
      },
      methods:{
        selIt:function (e,p) {
          if($(e.target).parent('.selWrap').hasClass('sel')){
            $(e.target).parent('.selWrap').removeClass('sel');
            this.totalPrice-=p
          }else{
            $(e.target).parent('.selWrap').addClass('sel');
            this.totalPrice+=p
          }
        },
        changeCount:function (i,index) {
          // 0为减 1为加
          if(i == 0){
            if(this.shopList[index].count > 1){
              this.shopList[index].count--;
            }
          }else{
            this.shopList[index].count++;
          }
        },
        selItAll:function (e) {
          if($(e.target).parent('.selWrap').hasClass('sel')){
            $('.selWrap').removeClass('sel')
            this.totalPrice = 0;
          }else{
            $('.selWrap').addClass('sel');
            for(var i = 0;i<this.shopList.length;i++){
              console.log(this.shopList[i].price*this.shopList[i].count)
              this.totalPrice+=(this.shopList[i].price*this.shopList[i].count);
            }
          }
        }
      },
      mounted:function () {
        $('#count').focusout(function () {
          if($(this).val() == 0 ||$(this).val() == ''){
            $(this).val(1);
          }
        })
      }
    }
</script>

<style scoped>
@import "../../../../static/css/personShopping.css";
</style>
<style>
  @import "../../../../static/css/public.css";
</style>
