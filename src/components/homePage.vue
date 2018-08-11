<template>
  <div id="homePage">
    <div class="header">
      <div class="headerWrap clearfloat">
        <div class="headerLeft floatl clearfloat">
          <div class="logo floatl">
            <img src="../../static/img/logo02.png" alt="">
          </div>
          <div class="address floatl">
            <span class="icon"></span><span>清远</span>
          </div>
        </div>
        <div class="headerRight floatr">
          <ul class="clearfloat">
            <li v-for="(item,index) in navList" :key="index">
              <router-link :to="item.path">{{item.name}}</router-link>
            </li>
            <li class="lastLi">
              <div class="lastLi-1" v-if="login == false">
                <router-link to="/login">登陆</router-link>
                <span>|</span>
                <router-link to="###">注册</router-link>
              </div>
              <div class="lastLi-2" v-else>
                <span @click="toPerson" style="cursor: pointer;" class="icon"></span><span class="exit">退出</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="list1">
      <img src="../../static/img/hpBanner01.png" alt="">
      <div class="l1-wrap">
        <div class="l1wrapTitle">
          鸿图基业，富甲亿房
        </div>
        <div class="l1wrapSearch">
          <div class="search01">
            <ul class="clearfloat">
              <li @click="searchSel(index)" :class="{sel:searchClass == index}" v-for="(item,index) in searchList" :key="index">{{item}}</li>
            </ul>
            <div class="sel1"></div>
          </div>
          <div class="search02 clearfloat">
            <div class="s2-1 floatl clearfloat">
              <div class="input floatl">
                <input type="text" v-model="searchData">
                <span v-if="searchData == ''" class="placeholder">区域 / 商圈名称</span>
              </div>
              <div class="button floatl">
                <button></button>
              </div>
            </div>
            <div class="s2-2 floatl">
              <button>免费发布</button>
            </div>
          </div>
          <div class="search03">
            <span class="icon03"></span><span>清城区在售商铺53000个</span>
          </div>
        </div>
      </div>
      <!--类名效果添加类名l1wrapSwiper1-->
      <div v-show="show01" class="l1wrapSwiper ">
          <div class="liwrap-1">
            <div class="swiperWrap">
              <div class="swiper-container swiper01">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="../../static/img/img01.png" alt="">
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
            <div class="detailWrap">
              <div class="swiper-container swiper02">
                <div class="swiper-wrapper">
                  <div class="swiper-slide clearfloat">
                    <span class="floatl title01 textEllipsis">第二届磁浮发展峰会论坛在清远举行</span><span class="date floatr">2018/7/2</span>
                  </div>
                  <div class="swiper-slide clearfloat">
                    <span class="floatl title01">第二届磁浮发展峰会论坛在清远举行</span><span class="date floatr">2018/7/2</span>
                  </div>
                  <div class="swiper-slide clearfloat">
                    <span class="floatl title01">第二届磁浮发展峰会论坛在清远举行</span><span class="date floatr">2018/7/2</span>
                  </div>
                </div>
              </div>
            </div>
            <button class="close" @click="closefloat"></button>
          </div>
        </div>
    </div>
    <!--导航-->
    <div class="list2" :class="{list2_1:list2Status}">
      <ul class="clearfloat">
        <li class="floatl" :class="{sel:nav1Idx == index}" v-for="(item,index) in navList1" :key="index">
          <div class="icon">
            <img :src="item.icon" alt="">
          </div>
          <div class="text">{{item.name}}</div>
          <ul class="chilNav">
            <li v-for="(item1,index1) in item.children" :key="index1">{{item1.name}}</li>
          </ul>
        </li>
      </ul>
    </div>
    <!--租购新体验-->
    <div class="list3">
      <div class="wrap">
        <div class="title title-1">
          <div class="title_1">租购新体验</div>
          <div class="title_2">优质房源  品质生活 </div>
        </div>
        <div class="wrap-cont clearfloat">
          <div class="cont_1 floatl">
            <img src="../../static/img/img02.png" alt="">
            <div class="c1-title">
              <div class="c1-title_1">即时看房</div>
              <div class="c1-title_2">在家也能把房看</div>
            </div>
          </div>
          <div class="cont_1 floatl">
            <img src="../../static/img/img03.png" alt="">
            <div class="c1-title c1-title1">
              <div class="c1-title_1">线上交订金</div>
              <div class="c1-title_2">租房保障又安心</div>
            </div>
          </div>
          <div class="cont_1 floatl">
            <img src="../../static/img/img04.png" alt="">
            <div class="c1-title">
              <div class="c1-title_1">在线签约</div>
              <div class="c1-title_2">线上完成签合同</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--商铺-->
    <div class="list4">
      <div class="wrap">
        <div class="title clearfloat">
          <div class="floatl">
            <div class="title_1">商铺</div>
            <div class="title_2">核心商圈  热门商铺 </div>
          </div>
          <div class="title_3 floatr">
            <button class="but_1 sel">出售</button>
            <button class="but_1">出租</button>
            <button class="but_3">更多商城>></button>
          </div>
        </div>
        <div class="wrap-cont clearfloat">
          <div class="wc_1 floatl">
            <img src="../../static/img/img05.png" alt="">
            <div class="title-wrap">
              <div class="tw_1">北部万科城</div>
              <div class="tw_2">核心商圈</div>
              <div class="tw_3">100万元起</div>
            </div>
          </div>
          <div class="wc_2 floatr clearfloat">
            <div class="wc2_1">
              <img src="../../static/img/img06.png" alt="">
              <div class="detail">
                <div>
                  <div class="detail-1">时代广场</div>
                  <div class="detail-2">
                    <div class="d2-1">区域：清城区</div>
                    <div class="d2-1">均价：10万元/m2</div>
                    <div class="d2-3">核心商圈</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="wc2_1 wc2_1_1">
              <img src="../../static/img/img07.png" alt="">
              <div class="detail">
                <div>
                  <div class="detail-1">时代广场</div>
                  <div class="detail-2">
                    <div class="d2-1">区域：清城区</div>
                    <div class="d2-1">均价：10万元/m2</div>
                    <div class="d2-3">核心商圈</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="wc2_2">
              <img src="../../static/img/img08.png" alt="">
              <div class="detail">
                <div>
                  <div class="detail-1">富力盈凯广场</div>
                  <div class="detail-2">
                    <div class="d2-1">区域：清城区</div>
                    <div class="d2-1">均价：10万元/m2</div>
                    <div class="d2-3">核心商圈</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="wc2_3">
              <div>
                <div class="wc2_3_1">
                  <span>热门商铺</span><span class="icon"></span>
                </div>
                <div  class="wc2_3_2">最火生意，快抢先一步</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--写字楼-->
    <div class="list5">
      <div class="wrap">
        <div class="title clearfloat">
          <div class="floatl">
            <div class="title_1">写字楼</div>
            <div class="title_2">高性价  高格调  与大咖公司为邻</div>
          </div>
          <div class="title_3 floatr">
            <button class="but_1 sel">出售</button>
            <button class="but_1">出租</button>
            <button class="but_3">更多写字楼>></button>
          </div>
        </div>
        <div class="wrap-cont clearfloat">
          <div class="wc_1">
            <div class="swiper-container swiper03">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div>
                    <img src="../../static/img/img09.png" alt="">
                    <div class="imgDetail">
                      <div>
                        <div class="detail-title">北江明珠 新城【清城区】</div>
                        <div class="detail-wrap">
                          <div class="dw_1">区域：清城区</div>
                          <div class="dw_2">均价：250元/m2</div>
                          <div class="dw_3">核心商圈 / 贸易中心</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div>
                    <img src="../../static/img/img10.png" alt="">
                    <div class="imgDetail">
                      <div>
                        <div class="detail-title">北江明珠 新城【清城区】</div>
                        <div class="detail-wrap">
                          <div class="dw_1">区域：清城区</div>
                          <div class="dw_2">均价：250元/m2</div>
                          <div class="dw_3">核心商圈 / 贸易中心</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div>
                    <img src="../../static/img/img11.png" alt="">
                    <div class="imgDetail">
                      <div>
                        <div class="detail-title">北江明珠 新城【清城区】</div>
                        <div class="detail-wrap">
                          <div class="dw_1">区域：清城区</div>
                          <div class="dw_2">均价：250元/m2</div>
                          <div class="dw_3">核心商圈 / 贸易中心</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div>
                    <img src="../../static/img/img11.png" alt="">
                    <div class="imgDetail">
                      <div>
                        <div class="detail-title">北江明珠 新城【清城区】</div>
                        <div class="detail-wrap">
                          <div class="dw_1">区域：清城区</div>
                          <div class="dw_2">均价：250元/m2</div>
                          <div class="dw_3">核心商圈 / 贸易中心</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-button-prev" @click="prev(3)"></div>
            <div class="swiper-button-next" @click="next(3)"></div>
          </div>
          <div class="wc_2 clearfloat">
            <div class="wc2_1 floatl">
              <img src="../../static/img/img12.png" alt="">
              <div class="wc2_detail1">
                <div>
                  <div class="w2d_1">核心商圈</div>
                  <div class="w2d_2">享优质配套  与大咖公司为邻</div>
                  <div class="w2d_3">150元/m2起</div>
                </div>
              </div>
            </div>
            <div class="wc2_2 floatr">
              <img src="../../static/img/img13.png" alt="">
              <div class="wc2_detail2">
                <div>
                  <div class="w2d_1">共享办公</div>
                  <div class="w2d_2">节约开支  开启共享办公之旅</div>
                  <div class="w2d_4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--厂房车位-->
    <div class="list6">
      <div class="wrap">
        <div class="title clearfloat">
          <div class="floatl">
            <div class="title_1">厂房车位</div>
            <div class="title_2">优势区位  创业孵化</div>
          </div>
          <div class="title_3 floatr">
            <button class="but_1 sel">出售</button>
            <button class="but_1">出租</button>
            <button class="but_3">更多厂房车位>></button>
          </div>
        </div>
        <div class="wrap-cont clearfloat">
          <div class="wc_left floatl">
            <img src="../../static/img/img14.png" alt="">
            <div class="detail_1">
              <div>
                <div class="d1">清新区</div>
                <div class="d2">
                  <p>1000个优质车位出租</p>
                </div>
                <div class="d3"></div>
              </div>
            </div>
          </div>
          <div class="wc_middle floatl">
            <div class="middle-top">
              <div class="top_1">
                <img src="../../static/img/img15.png" alt="">
                <div class="like"></div>
              </div>
              <div class="top_2 clearfloat">
                <span class="name floatl">清远阳山七拱镇厂房</span><span class="area floatl">980平方</span><span class="price floatr">20000元/月</span>
              </div>
            </div>
            <div class="middle-bottom clearfloat">
              <div class="mb_list">
                <div class="list_img">
                  <img src="../../static/img/img17.png" alt="">
                  <div class="like"></div>
                </div>
                <div class="list_cont">
                  <div class="lc_1"><span class="name">清城区高新科技产业园车位</span><span class="area"></span></div>
                  <div class="lc_2 price">500元/月</div>
                </div>
              </div>
              <div class="mb_list">
                <div class="list_img">
                  <img src="../../static/img/img18.png" alt="">
                  <div class="like"></div>
                </div>
                <div class="list_cont">
                  <div class="lc_1"><span class="name">清城区高新科技产业园车位</span><span class="area"></span>450平方</div>
                  <div class="lc_2 price">12000元/月</div>
                </div>
              </div>
            </div>
          </div>
          <div class="wc_right floatr">
            <img src="../../static/img/img16.png" alt="">
            <div class="detail_1">
              <div class="title-wrap">
                <div class="tw_1">英德大工业区</div>
                <div class="tw_2">优势区位，创业孵化基地</div>
                <div class="tw_3">厂房8000元起租 >></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--土地-->
    <div class="list6 list7 bj01">
      <div class="wrap">
        <div class="title clearfloat">
          <div class="floatl">
            <div class="title_1">土地</div>
            <div class="title_2">优质土地  聚你所需</div>
          </div>
          <div class="title_3 floatr">
            <button class="but_1 sel">出租</button>
            <button class="but_3">更多土地>></button>
          </div>
        </div>
        <div class="wrap-cont clearfloat">
          <div class="wc_right floatl">
            <img src="../../static/img/img19.png" alt="">
            <div class="detail_1">
              <div class="title-wrap">
                <div class="tw_1">阳山县工业区</div>
                <div class="tw_2">优势区位，创业孵化基地</div>
                <div class="tw_3">500亩工业用地 >></div>
              </div>
            </div>
          </div>
          <div class="wc_middle floatl">
            <div class="middle-top">
              <div class="top_1">
                <img src="../../static/img/img21.png" alt="">
                <div class="like"></div>
              </div>
              <div class="top_2 clearfloat">
                <span class="name floatl">英德区222亩水果茶桑地 出租</span><span class="area floatl"></span><span class="price floatr">2800元／亩</span>
              </div>
            </div>
            <div class="middle-bottom clearfloat">
              <div class="mb_list">
                <div class="list_img">
                  <img src="../../static/img/img22.png" alt="">
                  <div class="like"></div>
                </div>
                <div class="list_cont">
                  <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                  <div class="lc_2 price">2800元／亩</div>
                </div>
              </div>
              <div class="mb_list">
                <div class="list_img">
                  <img src="../../static/img/img23.png" alt="">
                  <div class="like"></div>
                </div>
                <div class="list_cont">
                  <div class="lc_1"><span class="name">清新区100亩水产养殖 出租</span><span class="area"></span>450平方</div>
                  <div class="lc_2 price">2800元／亩</div>
                </div>
              </div>
            </div>
          </div>
          <div class="wc_left floatr">
            <img src="../../static/img/img20.png" alt="">
            <div class="detail_1">
              <div>
                <div class="d1">清新区</div>
                <div class="d2">
                  <p>200亩优质土地出租</p>
                </div>
                <div class="d3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--楼房-->
    <div class="list8">
      <div class="wrap">
        <div class="title clearfloat">
          <div class="floatl">
            <div class="title_1">楼房</div>
            <div class="title_2">优质房源  品质生活</div>
          </div>
          <div class="title_3 floatr">
            <button class="but_1 sel">新房</button>
            <button class="but_1">二手房</button>
            <button class="but_3">更多楼房>></button>
          </div>
        </div>
        <div class="wrap-cont clearfloat">
          <div class="wc1 floatl">
            <div class="wc-title clearfloat">
              <span class="title1 floatl">优质楼盘</span><span class="title2 floatr">更多楼盘推荐</span>
            </div>
            <div class="wc-swiper">
              <div class="swiper-container swiper04">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="slide-img">
                      <img src="../../static/img/img24.png" alt="">
                      <div class="like"></div>
                    </div>
                    <div class="slide-info">
                      <div class="info-title">天域半岛花园</div>
                      <div class="info-cont">
                        <div class="cont-1">区域： 丛郊区</div>
                        <div class="cont-2">均价： 17000元/平方</div>
                        <div class="cont-3">花园洋房/生态宜居</div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="slide-img">
                      <img src="../../static/img/img24.png" alt="">
                      <div class="like"></div>
                    </div>
                    <div class="slide-info">
                      <div class="info-title">天域半岛花园</div>
                      <div class="info-cont">
                        <div class="cont-1">区域： 丛郊区</div>
                        <div class="cont-2">均价： 17000元/平方</div>
                        <div class="cont-3">花园洋房/生态宜居</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pagin04"></div>
              <!--禁止点击样式swiper-button-prev-disabled  swiper-button-next-disabled-->
              <div class="swiper-button-prev" @click="prev(4)"></div>
              <div class="swiper-button-next" @click="next(4)"></div>
            </div>
          </div>
          <div class="wc2 floatr">
            <div class="wc-title clearfloat">
              <span class="title1 floatl">小区推荐</span><span class="title2 floatr">更多小区推荐</span>
            </div>
            <div class="wc-cont clearfloat">
              <div class="cont-list">
                <div class="cl1">
                  <img src="../../static/img/img25.png" alt="">
                  <div class="like"></div>
                </div>
                <div class="cl2 clearfloat">
                  <span class="name floatl">清城 · 骏景花园</span><span class="floatr num">8000元/m2</span>
                </div>
              </div>
              <div class="cont-list">
                <div class="cl1">
                  <img src="../../static/img/img25.png" alt="">
                  <div class="like"></div>
                </div>
                <div class="cl2 clearfloat">
                  <span class="name floatl">清城 · 骏景花园</span><span class="floatr num">8000元/m2</span>
                </div>
              </div>
              <div class="cont-list">
                <div class="cl1">
                  <img src="../../static/img/img25.png" alt="">
                  <div class="like"></div>
                </div>
                <div class="cl2 clearfloat">
                  <span class="name floatl">清城 · 骏景花园</span><span class="floatr num">8000元/m2</span>
                </div>
              </div>
              <div class="cont-list">
                <div class="cl1">
                  <img src="../../static/img/img25.png" alt="">
                  <div class="like"></div>
                </div>
                <div class="cl2 clearfloat">
                  <span class="name floatl">清城 · 骏景花园</span><span class="floatr num">8000元/m2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--热门房源-->
    <div class="list9">
      <div class="wrap">
        <div class="title clearfloat">
          <div class="floatl">
            <div class="title_1">热门房源</div>
            <div class="title_2">优质房源  品质生活</div>
          </div>
          <div class="title_3 floatr">
            <button class="but_4">再换一批</button>
          </div>
        </div>
        <div class="wrap-cont clearfloat">
          <div class="wc-left floatl">
            <div class="wc_middle">
              <div class="middle-top">
                <div class="top_1">
                  <img src="../../static/img/img21.png" alt="">
                  <div class="like"></div>
                  <div class="introduce">小区-出租</div>
                </div>
              </div>
              <div class="middle-bottom clearfloat">
                <div class="mb_list">
                  <div class="list_img">
                    <img src="../../static/img/img22.png" alt="">
                    <div class="like"></div>
                  </div>
                  <div class="list_cont">
                    <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                    <div class="lc_2 price">2800元／亩</div>
                  </div>
                </div>
                <div class="mb_list">
                  <div class="list_img">
                    <img src="../../static/img/img23.png" alt="">
                    <div class="like"></div>
                  </div>
                  <div class="list_cont">
                    <div class="lc_1"><span class="name">清新区100亩水产养殖 出租</span><span class="area"></span>450平方</div>
                    <div class="lc_2 price">2800元／亩</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="wc-right floatr">
            <div class="wc_middle">
              <div class="middle-top">
                <div class="top_1">
                  <img src="../../static/img/img21.png" alt="">
                  <div class="like sel"></div>
                  <div class="introduce">新盘-出售</div>
                </div>
              </div>
              <div class="middle-bottom clearfloat">
                <div class="mb_list">
                  <div class="list_img">
                    <img src="../../static/img/img22.png" alt="">
                    <div class="like"></div>
                  </div>
                  <div class="list_cont">
                    <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                    <div class="lc_2 price">2800元／亩</div>
                  </div>
                </div>
                <div class="mb_list">
                  <div class="list_img">
                    <img src="../../static/img/img23.png" alt="">
                    <div class="like"></div>
                  </div>
                  <div class="list_cont">
                    <div class="lc_1"><span class="name">清新区100亩水产养殖 出租</span><span class="area"></span>450平方</div>
                    <div class="lc_2 price">2800元／亩</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--猜你喜欢-->
    <div class="list10">
      <div class="wrap">
        <div class="title clearfloat">
          <div class="floatl">
            <div class="title_1">猜你喜欢</div>
            <div class="title_2">精挑细选  聚你所需</div>
          </div>
          <div class="title_3 floatr">
            <button class="but_4">再换一批</button>
          </div>
        </div>
        <div class="wrap-cont clearfloat">
          <div class="mb_list">
            <div class="list_img">
              <img src="../../static/img/img22.png" alt="">
              <div class="like"></div>
            </div>
            <div class="list_cont">
              <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
              <div class="lc_2 price">2800元／亩</div>
            </div>
          </div>
          <div class="mb_list">
            <div class="list_img">
              <img src="../../static/img/img22.png" alt="">
              <div class="like"></div>
            </div>
            <div class="list_cont">
              <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
              <div class="lc_2 price">2800元／亩</div>
            </div>
          </div>
          <div class="mb_list">
            <div class="list_img">
              <img src="../../static/img/img22.png" alt="">
              <div class="like"></div>
            </div>
            <div class="list_cont">
              <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
              <div class="lc_2 price">2800元／亩</div>
            </div>
          </div>
          <div class="mb_list">
            <div class="list_img">
              <img src="../../static/img/img22.png" alt="">
              <div class="like"></div>
            </div>
            <div class="list_cont">
              <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
              <div class="lc_2 price">2800元／亩</div>
            </div>
          </div>
          <div class="mb_list">
            <div class="list_img">
              <img src="../../static/img/img22.png" alt="">
              <div class="like"></div>
            </div>
            <div class="list_cont">
              <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
              <div class="lc_2 price">2800元／亩</div>
            </div>
          </div>
          <div class="mb_list">
            <div class="list_img">
              <img src="../../static/img/img22.png" alt="">
              <div class="like"></div>
            </div>
            <div class="list_cont">
              <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
              <div class="lc_2 price">2800元／亩</div>
            </div>
          </div>
          <div class="mb_list">
            <div class="list_img">
              <img src="../../static/img/img22.png" alt="">
              <div class="like"></div>
            </div>
            <div class="list_cont">
              <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
              <div class="lc_2 price">2800元／亩</div>
            </div>
          </div>
          <div class="mb_list">
            <div class="list_img">
              <img src="../../static/img/img22.png" alt="">
              <div class="like"></div>
            </div>
            <div class="list_cont">
              <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
              <div class="lc_2 price">2800元／亩</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--资讯中心-->
    <div class="list11">
      <div class="wrap">
        <div class="title clearfloat">
          <div class="floatl">
            <div class="title_1">资讯中心</div>
            <div class="title_2">热门新闻  房产资讯</div>
          </div>
        </div>
        <div class="wrap-cont">
          <div class="list11-top clearfloat">
            <div class="top-left floatl">
              <div class="swiper-container swiper05">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(item,index) in newList" :key="index">
                    <img src="../../static/img/img28.png" alt="">
                    <div class="img-detail clearfloat">
                      <span class="text textEllipsis floatl">{{item.title}}</span><span class="floatr time">{{item.time}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="top-right floatl">
              <div class="tab">
                <button @click="tabBtn(index)" :class="{sel:tabIdx == index}" class="tab_1" v-for="(item,index) in tabList" :key="index">{{item}}</button>
              </div>
              <div class="right-cont">
                <ul>
                  <li :class="{sel:newListIdx == index}" class="clearfloat" v-for="(item,index) in newList" :key="index">
                    <span class="floatl info textEllipsis">0{{index+1}}、{{item.title}}</span><span class="floatr time">{{item.time}}</span>
                  </li>
                </ul>
              </div>
              <div class="more">
                <button>更多资讯</button>
              </div>
            </div>
          </div>
          <div class="list11-bottom clearfloat">
            <div class="bottom-left floatl">
              <div class="bottom-title clearfloat">
                <span class="title1 floatl">房产百科</span><span class="all floatr">查看全部>></span>
              </div>
              <div class="bottom-wrap">
                <div class="wrap-title">楼市调控重心将移至三四线城市</div>
                <div class="wrap-list">
                  <ul class="wl1">
                    <li class="clearfloat" v-for="(item,index) in houseList" :key="index">
                      <div class="li-cont floatl">{{item.title}}</div>
                      <div class="li-time floatr">{{item.time}}</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bottom-right floatr">
              <div class="bottom-title clearfloat">
                <span class="title1 floatl">业主论坛</span><span class="all floatr">查看全部>></span>
              </div>
              <div class="bottom-wrap">
                <div class="wrap-list">
                  <ul>
                    <li class="ul-title clearfloat">
                      <div class="li-title floatl">标题</div>
                      <div class="li-author floatl">作者</div>
                      <div class="li-time floatl">发布时间</div>
                    </li>
                    <li class="ul-cont clearfloat" v-for="(item,index) in ownerList" :key="index">
                      <div class="li-title floatl">{{item.title}}</div>
                      <div class="li-author floatl">{{item.author}}</div>
                      <div class="li-time floatl">{{item.time}}</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--服务说明-->
    <div class="list12">
      <div class="wrap clearfloat">
        <div class="l12-list" v-for="(item,index) in serviceList" :key="index">
          <div class="liwr clearfloat">
            <div :class="{noImg:item.icon == ''}" class="list-img floatl">
              <img :src="item.icon" alt="">
            </div>
            <div class="list-info floatl">
              <div class="info-1">{{item.name}}</div>
              <div class="info-2">{{item.desc}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--底部banner-->
    <div class="list13">
      <img src="../../static/img/hpBanner02.png" alt="">
      <div class="wrap">
        <div class="list13-wrap">
          <div class="wrap_1">
            <div>好房源那么多</div>
            <div>我们为你精选</div>
            <div>我们会越来越懂你</div>
          </div>
          <div class="wrap_2 clearfloat">
            <div class="erweima floatl">
              <img src="../../static/img/erwei03.png" alt="">
            </div>
            <div class="buttons floatl">
              <button class="iphone">iphone</button>
              <button class="androld">Androld</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--底部-->
    <div class="footer01">
      <div class="wrap">
        <div class="footer_1 clearfloat">
          <div class="f1_1 floatl">
            <ul class="clearfloat">
              <li class="floatl" v-for="(item,index) in footerList1" :key="index">
                {{item.name}}
              </li>
            </ul>
          </div>
          <div class="f1_2 floatr">
            <span class="icon"></span><span class="num">400-888-8888</span>
          </div>
        </div>
        <div class="footer_2">
          <ul class="ul_1 clearfloat">
            <li class="floatl" v-for="(item,index) in footerList2" :key="index">{{item.name}}</li>
          </ul>
          <ul class="ul_2 clearfloat">
            <li class="floatl" v-for="(item,index) in footerList3" :key="index">{{item.name}}</li>
          </ul>
        </div>
        <div class="footer_3">
          <p>房网（北京）科技有限公司 | 网络经营许可证 京ICP备16057509号-2 | © Copyright©2010-2018 链家网Lianjia.com版权所有京公网安备 11010802024019号</p>
        </div>
      </div>
    </div>
    <!--侧边栏-->
    <div class="nav">
      <ul>
        <li :class="'li'+(index+1)" v-for="(item,index) in navList3" :key="index">
          <div class="hover">
            <span>{{item.name}}</span>
          </div>
        </li>
        <li class="li7" @click="toTop">
          <div class="hover"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "homePage",
      data(){
        return {
          navList:[
            {name:'首页',path:'/homePage'},
            {name:'关于我们',path:'/mainWrap/aboutUs'},
            {name:'加入我们',path:'/mainWrap/JoinUs'},
            {name:'留言建议',path:'/mainWrap/messageAdvice'},
            {name:'下载APP',path:'###'}
          ],
          navList1:[
            {name:'商铺',icon:'static/img/nav01.png',url:'',children:[{name:'出租',url:'###'},{name:'出售',url:'###'}]},
            {name:'写字楼',icon:'static/img/nav02.png',url:'',children:[{name:'出租',url:'###'},{name:'出售',url:'###'}]},
            {name:'厂房车位',icon:'static/img/nav03.png',url:'',children:[{name:'出租',url:'###'},{name:'出售',url:'###'}]},
            {name:'闲置土地',icon:'static/img/nav04.png',url:'',children:[]},
            {name:'楼房',icon:'static/img/nav05.png',url:'',children:[{name:'新房',url:'###'},{name:'二手房',url:'###'}]},
            {name:'租房',icon:'static/img/nav06.png',url:'',children:[{name:'合租',url:'###'},{name:'整租',url:'###'}]},
            {name:'竞拍',icon:'static/img/nav07.png',url:'',children:[]},
            {name:'地图找房',icon:'static/img/nav08.png',url:'',children:[]},
          ],
          tabList:['企业新闻','国家政策','购房指南'],
          tabIdx:0,
          newList:[
            {title:'李克强：用“放管服”用“放管服”用“放管服”',time:'2018-06-29',url:''},
            {title:'碧桂园欢乐颂邀请你加入未来群聊',time:'2018-06-29',url:''},
            {title:'李克强：用“放管服”用“放管服”用“放管服”',time:'2018-06-29',url:''},
            {title:'碧桂园欢乐颂邀请你加入未来群聊”',time:'2018-06-29',url:''},
            {title:'李克强：用“放管服”用“放管服”用“放管服”',time:'2018-06-29',url:''},
          ],
          newListIdx:0,
          nav1Idx:-1,
          //房产百科
          houseList:[
            {title:'金融机构放缓贷款审批发放进度  易事特29亿元',url:'###',time:'2018-6-29'},
            {title:'金融机构放缓贷款审批发放进度',url:'###',time:'2018-6-29'},
            {title:'金融机构放缓贷款审批发放进度  易事特29亿元',url:'###',time:'2018-6-29'},
            {title:'金融机构放缓贷款审批发放进度  易事特29亿元',url:'###',time:'2018-6-29'}
          ],
          //业主论坛
          ownerList:[
            {title:'怎么选择好房子，翔力·翡翠凤凰怎么样？',author:'清远达人',time:'2018-6-29'},
            {title:'怎么选择好房子，翔力·翡翠凤凰怎么样？',author:'清远达人',time:'2018-6-29'},
            {title:'怎么选择好房子，翔力·翡翠凤凰怎么样？',author:'清远达人',time:'2018-6-29'},
            {title:'怎么选择好房子，翔力·翡翠凤凰怎么样？',author:'清远达人',time:'2018-6-29'},
          ],
          //服务说明
          serviceList:[
            {icon:'',name:'品质服务',desc:'鸿基资品质好服务'},
            {icon:'',name:'品质服务',desc:'鸿基资品质好服务'},
            {icon:'',name:'品质服务',desc:'鸿基资品质好服务'},
            {icon:'',name:'品质服务',desc:'鸿基资品质好服务'},
          ],
          //footer
          footerList1:[
            {name:'首页',url:'/homePage'},
            {name:'关于我们',url:'/mainWrap/aboutUs'},
            {name:'租赁中心',url:'/productCenter'},
            {name:'新闻动态   ',url:'###'},
            {name:'联系我们',url:'###'},
          ],
          footerList2:[
            {name:'买新房',url:'###'},
            {name:'买二手房',url:'###'},
            {name:'整租',url:'###'},
            {name:'整租',url:'###'},
            {name:'写字楼',url:'###'},
            {name:'商铺',url:'###'},
            {name:'厂房车位',url:'###'},
            {name:'闲置土地',url:'###'},
            {name:'地图找房',url:'###'},
          ],
          footerList3:[
            {name:'网站设置',url:'###'},
            {name:'友情链接',url:'###'},
            {name:'管理员设置',url:'###'},
            {name:'版权申明',url:'###'},
            {name:'网站地图',url:'###'},
            {name:'服务条款',url:'###'},
            {name:'关注我们',url:'###'}
          ],
          //侧边栏
          navList3:[
            {name:'我的收藏',url:'###'},
            {name:'我的消息',url:'###'},
            {name:'扫一扫',url:'###'},
            {name:'房贷计算器',url:'###'},
            {name:'在线客服',url:'###'},
            {name:'问题反馈',url:'###'}
          ],
          show01:true,
          searchList:['楼房','写字楼','商城','厂房','土地'],
          searchClass:0,
          login:true,
          searchData:'',
          swiper03:null,
          swiper04:null,
          swiper05:null,
          list2Status:false
        }
      },
      methods:{
        searchSel:function (i) {
          this.searchClass = i;
          var l = 39;
          var defaultL = 8;
          var moveTo = l+i*78-defaultL;
          $('.sel1').css('left',moveTo+'px')
        },
        prev:function (i) {
          if(i == 3){
            this.swiper03.swipePrev();
          }else if(i == 4){
            this.swiper04.swipePrev();
          }
        },
        next:function (i) {
          if(i == 3){
            this.swiper03.swipeNext();
          }else if(i == 4){
            this.swiper04.swipeNext();
          }
        },
        // 关闭浮动资讯
        closefloat:function () {
          this.show01 = false;
          this.list2Status = true;
        },
        tabBtn:function (i) {
          this.tabIdx = i;
        },
        toTop:function () {
          $("html,body").animate({scrollTop:0}, 500);
        },
        toPerson:function () {
          this.$router.push({
            path: '/personCenter'
          })
        }
      },
      mounted:function () {
        var _this = this;
        var l = 39;
        var defaultL = 8;
        var moveTo = l-defaultL
        $('.sel1').css('left',moveTo+'px');
        var swiper01 = new this.Swiper('.swiper01',{

        });
        var swiper02 = new this.Swiper('.swiper02',{
          mode : 'vertical',
          slidesPerView:3
        });
        this.swiper03 = new this.Swiper('.swiper03',{
          slidesPerView:3,
          loop:true
        });
        this.swiper04 = new this.Swiper('.swiper04',{
          pagination:'.pagin04'
        });
        _this.swiper05 = new _this.Swiper('.swiper05',{
          autoplay:3000,
          speed:1000,
          onSlideChangeStart: function(swiper){
            if(swiper.activeIndex == _this.newListIdx){
                swiper.swipeTo(0);
            }else{
              _this.newListIdx = swiper.activeIndex;
            }
          },
        })
        // 监听滚动条滚动
        $(window).scroll(function(event){
          if($(window).scrollTop()>1000){
            $('.nav').addClass('show');
          }else{
            $('.nav').removeClass('show');
          }
        });
        //标题按钮
        $('.but_1').click(function () {
          $(this).parent('.title_3').find('.but_1').removeClass('sel');
          $(this).addClass('sel');
        })
        //收藏
        $('.like').click(function () {
          if($(this).hasClass('sel')){
            $(this).removeClass('sel');
          }else{
            $(this).addClass('sel');
          }
        })
      }
    }
</script>

<style scoped>
@import "../../static/css/homePage.css";

</style>
<style>
  @import "../../static/css/public.css";
</style>
