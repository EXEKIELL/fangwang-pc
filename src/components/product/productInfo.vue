<template>
    <div id="productInfo">
      <div class="list1 clearfloat">
        <div class="wrap">
          <div class="list1-left floatl clearfloat">
            <div class="l1-left-logo floatl clearfloat">
              <div class="logo floatl">
                <img src="../../../static/img/logo01.png" alt="">
              </div>
              <div class="title floatl">厂房车位</div>
            </div>
            <div class="l1-left-nav floatl">
              <ul class="clearfloat">
                <li @click="nav01(index,item.id)" :class="{sel:navIdx == index}" class="floatl" v-for="(item,index) in navBtn1" :key="index">{{item.name}}</li>
              </ul>
            </div>
          </div>
          <div class="list1-right floatr clearfloat">
            <div class="l1-right-search clearfloat floatl">
              <div class="input floatl">
                <input type="text" v-model="searchText">
                <span v-if="searchText == ''" class="placeholder">输入您要查找的商铺</span>
              </div>
              <div class="button floatl">
                <button>开始搜索</button>
              </div>
            </div>
            <div class="l1-right-fabu floatl">
              <button>免费发布</button>
            </div>
          </div>
        </div>
      </div>
      <div class="list2">
        <div class="l2-wrap">
          <div class="wrap">
            <div class="l2-path">
              <span v-for="(item,index) in pathDetail" :key="index">{{item}}</span>
            </div>
            <div class="l2-info clearfloat">
              <div class="info-left floatl">
                <div class="info-bigImg">
                  <img src="../../../static/img/bigImg01.png" alt="">
                  <div class="pagin01">
                    <span>1</span><span>/</span><span>10</span>
                  </div>
                </div>
                <div class="info-smallImg">
                  <div class="swiper-container swiper01">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="../../../static/img/bigImg01.png" alt="">
                        <div class="mask"></div>
                      </div>
                      <div class="swiper-slide">
                        <img src="../../../static/img/bigImg01.png" alt="">
                        <div class="mask"></div>
                      </div>
                      <div class="swiper-slide">
                        <img src="../../../static/img/bigImg01.png" alt="">
                        <div class="mask"></div>
                      </div>
                      <div class="swiper-slide">
                        <img src="../../../static/img/bigImg01.png" alt="">
                        <div class="mask"></div>
                      </div>
                      <div class="swiper-slide">
                        <img src="../../../static/img/bigImg01.png" alt="">
                        <div class="mask"></div>
                      </div>
                    </div>
                  </div>
                  <div class="prev01" @click="swiper01.swipePrev()"></div>
                  <div class="next01" @click="swiper01.swipeNext()"></div>
                </div>
              </div>
              <div class="info-right floatr">
                <div class="right-1">
                  <div class="r1-title">棠德花园 精装三房 干净明亮 采光通风好</div>
                  <div class="r1-detail clearfloat">
                    <div class="r1detail-1 floatl">房源编号：SZLH005101519</div>
                    <div class="r1detail-2 floatl">发布时间：2018/6/19 23:04:12</div>
                  </div>
                  <div v-if="like == false" class="like like1" @click="like = true">
                    <span class="icon"></span><span>点击收藏</span>
                  </div>
                  <div class="like like2" v-else @click="like = false">
                    <span class="icon"></span><span>已收藏</span>
                  </div>
                </div>
                <div class="right-2">
                  <div class="r2-detail1 clearfloat">
                    <div class="r2detail1-1 floatl">
                      租金 <span>1200</span> 元/月
                    </div>
                    <div class="r2detail1-2 floatr">
                      <button @click="seeStatus = true">预约看房</button>
                    </div>
                  </div>
                  <div class="r2-detail2">
                    <span class="detail-title">小区：</span><span>棠德花园</span>
                  </div>
                  <div class="r2-detail3">
                    <span class="detail-title">学校：</span><span>广州市第八十六中学</span>
                  </div>
                  <div class="r2-detail4">
                    <span class="detail-title">地址：</span><span>清远市清城区环城二路黄埔大道西506号</span>
                  </div>
                </div>
                <div class="right-3">
                  <div class="clearfloat">
                    <div class="r3-img floatl">
                      <div>
                        <img src="../../../static/img/head01.png" alt="">
                      </div>
                    </div>
                    <div class="r3-info floatl">
                      <div class="r3info-1">黑脸V先生</div>
                      <div class="r3info-2">来源：经纪公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;广州恒帝信息科技有限公司</div>
                      <div class="r3info-3">
                        <span>400-1010-2333</span><span>400-1010-2333</span>
                      </div>
                    </div>
                    <div class="r3-com floatl">
                      <span class="icon"></span><span>沟通</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="list3">
        <div class="wrap clearfloat">
          <div class="wrap-left floatl">
            <div class="tab clearfloat">
              <div v-for="(item,index) in tabList" @click="tabSel(index)" :class="{sel:tabIdx == index}">{{item}}</div>
            </div>
            <div class="info_1">
              <div class="info-title">
                <span class="cname">基本信息</span><span class="ename">Basic Information</span>
              </div>
              <div class="info_1_detail">
                <ul class="clearfloat">
                  <li>
                    <span class="li-title">面&emsp;&emsp;积<i></i></span><span class="li-detail">78m²</span>
                  </li>
                  <li>
                    <span class="li-title">户&emsp;&emsp;型<i></i></span><span class="li-detail">3室2厅1厨2卫（主卧）</span>
                  </li>
                  <li>
                    <span class="li-title">朝&emsp;&emsp;向<i></i></span><span class="li-detail">南</span>
                  </li>
                  <li>
                    <span class="li-title">建筑年代<i></i></span><span class="li-detail">2010年建</span>
                  </li>
                  <li>
                    <span class="li-title">装&emsp;&emsp;修<i></i></span><span class="li-detail">精装修</span>
                  </li>
                  <li>
                    <span class="li-title">付款方式<i></i></span><span class="li-detail">押一付一</span>
                  </li>
                  <li>
                    <span class="li-title">楼&emsp;&emsp;层<i></i></span><span class="li-detail">高层/24层</span>
                  </li>
                  <li>
                    <span class="li-title">起&ensp;租&ensp;期<i></i></span><span class="li-detail">6个月起</span>
                  </li>
                  <li>
                    <span class="li-title">结&emsp;&emsp;构<i></i></span><span class="li-detail">平层</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="info_2">
              <div class="info-title">
                <span class="cname">整体描述</span><span class="ename">Overall description</span>
              </div>
              <div class="info_2_detail">
                <p>好邻居购物广场，面积4200平方米,有各类铺档位230位，停车位超200个。可经营疏菜、猪肉、牛羊肉、光鸡、大鱼、海冰鲜、烧腊、熟食、粮油、凉茶、服装、精品、药店、饮食、床上用品、超市等行业。这里人流密集,交通便利,品种齐全,租金便宜，布局合理,有多座超大型住宅区。名都综合市场是2018年清远市第一发家致富优秀的平台，室内专设面积1000方 ，可经营美容机构，健身，超市 ，药店及餐饮特色店等。地址：清远市-清城区-环城二路5号好邻居购物广场商业中心1号楼首层。优惠及减免（ 租室内专设1000方的免租三个月）</p>
              </div>
            </div>
            <div class="info_3">
              <div class="info-title">
                <span class="cname">配套设施</span><span class="ename">Supporting facilities</span>
              </div>
              <div class="info_3_detail clearfloat">
                <div class="info_3_list" v-for="item in 8">
                  <div class="list-top">
                    <img src="" alt="">
                  </div>
                  <div class="list-bottom">
                    <span>货梯</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="info_4">
              <div class="info-title">
                <span class="cname">地图位置</span><span class="ename">Map location</span>
              </div>
              <!--地图-->
              <div class="info_4_detail">
                <baidu-map></baidu-map>
              </div>
            </div>
            <div class="info_5">
              <div class="info-title">
                <span class="cname">图片详情</span><span class="ename">Picture details</span>
              </div>
              <div class="info_5_detail clearfloat">
                <div @click="bigShow(index)" class="i5_img" v-for="(item,index) in 10">
                  <img src="../../../static/img/img32.png" alt="">
                </div>
              </div>
            </div>
            <div class="info_6">
              <div class="info-title">
                <span class="cname">猜你喜欢</span><span class="ename">you may also like</span>
              </div>
              <div class="info_6_detail clearfloat">
                <div class="i6_list floatl" v-for="(item,index) in 4">
                  <div class="list_top">
                    <img src="../../../static/img/img33.png" alt="">
                    <div :class="{sel:index == 0}" class="like" @click="like01(index)"></div>
                    <div class="price">
                      <span>2000元</span><span>/</span><span>月</span>
                    </div>
                  </div>
                  <div class="list_bottom">
                    <div>
                      <div class="bottom_1">富力盈凯广场</div>
                      <div class="bottom_2">
                        面积：1200m²  |  清远市-清城区
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="wrap-right floatl">
            <div class="right_1">
              <img src="../../../static/img/img30.png" alt="">
              <div class="r1-detail">
                <div class="r1_1">足不出户</div>
                <div class="r1_2">在线买房</div>
              </div>
            </div>
            <div class="right_2">
              <div class="r2_1">清远写字楼地图找房</div>
              <div class="r2_2">
                <img src="../../../static/img/p_icon04.png" alt="">
              </div>
              <div class="r2_3">清远<span>2586</span>套</div>
              <div class="r2_4">
                <button>前往地图找房</button>
              </div>
            </div>
            <div class="right_3">
              <div class="r3-title">清远热门写字楼推荐</div>
              <div class="r3-lists">
                <div class="r3List clearfloat">
                  <div class="r3List-left floatl">
                    <img src="../../../static/img/img31.png" alt="">
                  </div>
                  <div class="r3List-right floatl">
                    <div class="r_1 textEllipsis">好邻居购物广场</div>
                    <div class="r_2">12500元/月</div>
                    <div class="r_3">清城区</div>
                  </div>
                </div>
                <div class="r3List clearfloat">
                  <div class="r3List-left floatl">
                    <img src="../../../static/img/img31.png" alt="">
                  </div>
                  <div class="r3List-right floatl">
                    <div class="r_1 textEllipsis">好邻居购物广场</div>
                    <div class="r_2">12500元/月</div>
                    <div class="r_3">清城区</div>
                  </div>
                </div>
                <div class="r3List clearfloat">
                  <div class="r3List-left floatl">
                    <img src="../../../static/img/img31.png" alt="">
                  </div>
                  <div class="r3List-right floatl">
                    <div class="r_1 textEllipsis">好邻居购物广场</div>
                    <div class="r_2">12500元/月</div>
                    <div class="r_3">清城区</div>
                  </div>
                </div>
                <div class="r3List clearfloat">
                  <div class="r3List-left floatl">
                    <img src="../../../static/img/img31.png" alt="">
                  </div>
                  <div class="r3List-right floatl">
                    <div class="r_1 textEllipsis">好邻居购物广场</div>
                    <div class="r_2">12500元/月</div>
                    <div class="r_3">清城区</div>
                  </div>
                </div>
                <div class="r3List clearfloat">
                  <div class="r3List-left floatl">
                    <img src="../../../static/img/img31.png" alt="">
                  </div>
                  <div class="r3List-right floatl">
                    <div class="r_1 textEllipsis">好邻居购物广场</div>
                    <div class="r_2">12500元/月</div>
                    <div class="r_3">清城区</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--预约看房弹窗-->
      <div class="see" v-if="seeStatus">
        <div>
          <div class="seeWrap">
            <div class="close03" @click="seeStatus = false"></div>
            <div class="form clearfloat">
              <div class="name">
                <input type="text" v-model="form01.name">
                <span v-if="form01.name == ''" class="placeholder">姓名</span>
              </div>
              <div class="sex">
                <input type="text" v-model="form01.sex">
                <span v-if="form01.sex == ''" class="placeholder">性别</span>
              </div>
              <div class="phone">
                <input type="text" v-model="form01.phone">
                <span v-if="form01.phone == ''" class="placeholder">电话</span>
                <button v-if="countDown == false" class="code" @click="duan">获取验证码</button>
                <button v-else class="code" disabled >{{count}}s后重新获取</button>
              </div>
              <div class="code">
                <input type="text" v-model="form01.code">
                <span v-if="form01.code == ''" class="placeholder">验证码</span>
              </div>
            </div>
            <div class="see01">
              <div class="see01-title">看房日期</div>
              <div class="see01-detail clearfloat">
                <div @click="daySel = -1" :class="{sel:daySel == -1}" class="s1-list s1-list0 floatl">随时</div>
                <div @click="daySel = index" :class="{sel:daySel == index}" class="s1-list floatl" v-for="(item,index) in 7">
                  <div class="week">星期一</div>
                  <div class="day">18</div>
                </div>
              </div>
            </div>
            <div class="otherDesc">
              <input type="text" v-model="form01.desc">
              <span v-if="form01.desc == ''" class="placeholder">其他说明</span>
            </div>
            <div class="see02 clearfloat">
              <div class="label01 floatl">选择经纪人：</div>
              <div class="tagWrap floatl">
                <span class="sel">系统自动分配</span>
              </div>
            </div>
            <div class="see03">
              <div class="see03-title">为您推荐</div>
              <div class="swiper-container swiper02">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div>
                      <div class="clearfloat">
                        <div class="slide-img floatl">
                          <img src="../../../static/img/head01.png" alt="">
                        </div>
                        <div class="slide-detail floatl">
                          <div class="detail_1">黑脸V先生</div>
                          <div class="detail_2">广州恒帝信息科技有限公司</div>
                          <div class="detail_3">189-8019-0034</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div>
                      <div class="clearfloat">
                        <div class="slide-img floatl">
                          <img src="../../../static/img/head01.png" alt="">
                        </div>
                        <div class="slide-detail floatl">
                          <div class="detail_1">黑脸V先生</div>
                          <div class="detail_2">广州恒帝信息科技有限公司</div>
                          <div class="detail_3">189-8019-0034</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div>
                      <div class="clearfloat">
                        <div class="slide-img floatl">
                          <img src="../../../static/img/head01.png" alt="">
                        </div>
                        <div class="slide-detail floatl">
                          <div class="detail_1">黑脸V先生</div>
                          <div class="detail_2">广州恒帝信息科技有限公司</div>
                          <div class="detail_3">189-8019-0034</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div>
                      <div class="clearfloat">
                        <div class="slide-img floatl">
                          <img src="../../../static/img/head01.png" alt="">
                        </div>
                        <div class="slide-detail floatl">
                          <div class="detail_1">黑脸V先生</div>
                          <div class="detail_2">广州恒帝信息科技有限公司</div>
                          <div class="detail_3">189-8019-0034</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="prev02" @click="swiper02.swipePrev()"></div>
              <div class="next02" @click="swiper02.swipeNext()"></div>
            </div>
            <div class="btn">
              <button>提交预约</button>
            </div>
          </div>
        </div>
      </div>
      <!--大图-->
      <div class="bigImg" v-show="bigStatus">
        <div>
          <div class="bigSwiper">
            <div class="swiper-container swiper03">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="../../../static/img/img34.png" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="../../../static/img/img34.png" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="../../../static/img/img34.png" alt="">
                </div>
              </div>
            </div>
            <div class="close03">
              <button @click="bigStatus = false"></button>
            </div>
            <div class="prev03" @click="swiper03.swipePrev()"></div>
            <div class="next03" @click="swiper03.swipeNext()"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import baiduMap from '../baiduMap/baiduMap'
    export default {
      name: "productInfo",
      components:{
        baiduMap
      },
      data(){
        return {
          // 弹窗
          seeStatus:false,
          bigStatus:false,
          navBtn1:[{name:'出租',id:0},{name:'出售',id:1}],
          // 搜索字
          searchText:'',
          navIdx:0,
          //当前路径
          pathDetail:['鸿基资盈宝','厂房车位出售','厂房车位出售'],
          swiper01:null,
          swiper02:null,
          swiper03:null,
          // 收藏切换
          like:false,
          // tab
          tabIdx:0,
          tabList:['基本信息','整体描述','配套设施','地图位置','图片详情'],
          // 预约看房数据
          form01:{
            name:'',
            sex:'',
            phone:'',
            code:'',
            desc:''
          },
          count:60,
          countDown:false,
          // 看房日期选择
          daySel:-1,
        }
      },
      methods:{
        nav01:function (i, id) {
          this.navIdx = i;
        },
        tabSel:function (i) {
          this.tabIdx = i;
        },
        like01:function (i) {
          if($('.info_6_detail .like').eq(i).hasClass('sel')){
            $('.info_6_detail .like').eq(i).removeClass('sel');
          }else{
            $('.info_6_detail .like').eq(i).addClass('sel');
          }
        },
        init:function () {
          var myLatlng = new qq.maps.LatLng(31.584617993869276, 120.29067993164062);
          var myOptions = {
            zoom: 12,
            center: myLatlng,
            mapTypeId: qq.maps.MapTypeId.ROADMAP
          }
          var map = new qq.maps.Map(document.getElementById("map"), myOptions);
          //添加监听事件
          qq.maps.event.addListener(map, 'click', function(event) {
            console.log('您点击的位置为: [' + event.latLng.getLat() + ', ' +
              event.latLng.getLng() + ']');
          });
        },
        duan:function () {
          var that = this;
          this.$alert('获取验证码成功', '温馨提示', {
            confirmButtonText: '确定',
            callback: action => {
              that.countDown = true;
              var timer = setInterval(function () {
                if(that.count == 0){
                  that.countDown = false;
                  that.count = 60;
                  clearInterval(timer);
                }
                that.count --;
              },1000)
            }
          });
        },
        bigShow:function(i){
          var that = this;
          this.bigStatus = true;
          setTimeout(function () {
            that.swiper03 = new that.Swiper('.swiper03',{

            });
            that.swiper03.swipeTo(0)
          },50);
        }
      },
      mounted:function () {
        this.swiper01 = new this.Swiper('.swiper01',{
          slidesPerView:4
        });
        this.swiper02 = new this.Swiper('.swiper02',{
          slidesPerView:2.3
        });
        // 地图初始化
        // this.init();
      }
    }
</script>

<style scoped>
@import "../../../static/css/productInfo.css";
</style>
<style>
  @import "../../../static/css/public.css";
</style>
