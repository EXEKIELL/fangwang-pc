<template>
  <div id="homePage">
    <div class="header">
      <div class="headerWrap clearfloat">
        <div class="headerLeft floatl clearfloat">
          <div class="logo floatl" @click="$router.push('/homePage')" style="cursor: pointer;">
            <img src="../../static/img/logo02.png" alt="">
          </div>
          <div class="address floatl">
            <span class="icon"></span><span>清远</span>
          </div>
        </div>
        <div class="headerRight floatr">
          <ul class="clearfloat">
            <li @click="navSel = index" v-for="(item,index) in navList" :key="index" class="navLi" :class="{sel:navSel == index}">
              <router-link :to="item.path">{{item.name}}</router-link>
            </li>
            <li class="lastLi">
              <div class="lastLi-1" v-if="login == false">
                <router-link to="/login">登陆</router-link>
                <span>|</span>
                <router-link to="###">注册</router-link>
              </div>
              <div class="lastLi-2" v-else>
                <span @click="toPerson" style="cursor: pointer;" class="icon"></span><span class="exit" @click="$router.push('/login')">退出</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="list1">
      <!--<img src="../../static/img/hpBanner01.png" alt="">-->
      <div class="swiper-container bannerSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../static/img/hpBanner01.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../static/img/hpBanner01.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../static/img/hpBanner01.png" alt="">
          </div>
        </div>
      </div>
      <div class="l1wrapTitle">
        鸿基伟业，盈盈资宝
      </div>
      <div class="l1-wrap">
        <div class="l1wrapSearch">
          <!--<div class="search01">-->
            <!--<ul class="clearfloat">-->
              <!--<li @click="searchSel(index)" :class="{sel:searchClass == index}" v-for="(item,index) in searchList" :key="index">{{item}}</li>-->
            <!--</ul>-->
            <!--<div class="sel1"></div>-->
          <!--</div>-->
          <div class="search02 clearfloat">
            <div class="s2-1 floatl clearfloat">
              <div class="input floatl">
                <input type="text" v-model="searchData">
                <span v-if="searchData == ''" class="placeholder">区域 / 商圈名称</span>
                <div class="sortWrap">
                  <template>
                    <el-select v-model="sort01" placeholder="请选择">
                      <el-option
                        v-for="item in sorts"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </div>
              </div>
              <div class="button floatl">
                <button>
                  <span class="icon"></span><span>搜 索</span>
                </button>
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
        <li @click="" class="floatl" :class="{sel:nav1Idx == index}" v-for="(item,index) in navList1" :key="index">
          <router-link :to="item.url">
            <div class="icon">
              <img :src="item.icon" alt="">
            </div>
            <div class="text">{{item.name}}</div>
          </router-link>
          <ul class="chilNav">
            <li @click="$router.push('/productCenter/productDetail')" v-for="(item1,index1) in item.children" :key="index1">{{item1.name}}</li>
          </ul>
        </li>
      </ul>
    </div>
    <!--租购新体验-->
    <div style="background-color: #fff;" class="list3">
      <div class="wrap">
        <div class="title">
          <div class="title_1">租购新体验</div>
          <div class="title_2">优质房源  品质生活 </div>
        </div>
        <div class="wrap-cont clearfloat" style="margin-bottom: 20px;">
          <div class="cont_1 floatl" style="margin-right: 0;">
            <img src="../../static/img/img41.png" alt="">
            <div class="c1-title">
              <div class="c1-title_1">地图找房</div>
              <div class="c1-title_2">线上完成签合同</div>
            </div>
          </div>
          <div class="mapWrap floatl">
            <baidu-map ref="mapWrap"></baidu-map>
          </div>
        </div>
        <div class="wrap-cont clearfloat">
          <div class="cont_1 floatl">
            <img src="../../static/img/img02_1.png" alt="">
            <div class="c1-title">
              <div class="c1-title_1">竞抢物业</div>
              <div class="c1-title_2">好物业抢先一步</div>
            </div>
          </div>
          <div class="cont_1 floatl">
            <img src="../../static/img/img03_1.png" alt="">
            <div class="c1-title c1-title1">
              <div class="c1-title_1">在线签约</div>
              <div class="c1-title_2">租房保障又安心</div>
            </div>
          </div>
          <div class="cont_1 floatl">
            <img src="../../static/img/img04_1.png" alt="">
            <div class="c1-title">
              <div class="c1-title_1">线上交定金</div>
              <div class="c1-title_2">资金安全无顾虑</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--直播看房-->
    <div class="list3 list14">
      <div class="wrap">
        <div class="title">
          <div class="title_1">直播看房</div>
          <div class="title_2">随时随地把房看 </div>
        </div>
        <div class="wrap-cont clearfloat">
          <div class="cont_1 floatl">
            <img src="../../static/img/img42.png" alt="">
            <div class="c1-title">
              <div class="c1-title_1">直播看房</div>
              <div class="c1-title_2">在家也能把房看</div>
            </div>
          </div>
          <div class="cont_1 cont_2 floatl">
            <img src="../../static/img/img43.png" alt="">
            <div class="c1-title c1-title1">
              <div class="videoPlay" @click="videoStatus = true">
                <img src="../../static/img/icon26.png" alt="">
              </div>
            </div>
          </div>
          <div class="cont_1 cont_2 floatl">
            <img src="../../static/img/img44.png" alt="">
            <div class="c1-title">
              <div class="videoPlay" @click="videoStatus = true">
                <img src="../../static/img/icon26.png" alt="">
              </div>
            </div>
          </div>
          <div class="cont_1 cont_2 floatl">
            <img src="../../static/img/img45.png" alt="">
            <div class="c1-title">
              <div class="videoPlay" @click="videoStatus = true">
                <img src="../../static/img/icon26.png" alt="">
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
            <div class="title_1">热门物业</div>
            <div class="title_2">优质物业  品质生活</div>
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
                  <img src="../../static/img/img46.png" alt="">
                  <!--<div class="like"></div>-->
                  <div class="recommend">
                    <img src="../../static/img/img40.png" alt="">
                  </div>
                  <div class="introduce">民宿-出租</div>
                </div>
              </div>
              <div class="middle-bottom clearfloat">
                <div class="mb_list">
                  <div class="list_img">
                    <img src="../../static/img/img48.png" alt="">
                    <!--<div class="like"></div>-->
                  </div>
                  <div class="list_cont">
                    <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                    <div class="lc_2 price">2800元／亩</div>
                  </div>
                </div>
                <div class="mb_list">
                  <div class="list_img">
                    <img src="../../static/img/img49.png" alt="">
                    <!--<div class="like"></div>-->
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
                  <img src="../../static/img/img47.png" alt="">
                  <!--<div class="like sel"></div>-->
                  <div class="introduce">别墅-出售</div>
                  <div class="recommend">
                    <img src="../../static/img/img40.png" alt="">
                  </div>
                </div>
              </div>
              <div class="middle-bottom clearfloat">
                <div class="mb_list">
                  <div class="list_img">
                    <img src="../../static/img/img50.png" alt="">
                    <!--<div class="like"></div>-->
                  </div>
                  <div class="list_cont">
                    <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                    <div class="lc_2 price">2800元／亩</div>
                  </div>
                </div>
                <div class="mb_list">
                  <div class="list_img">
                    <img src="../../static/img/img51.png" alt="">
                    <!--<div class="like"></div>-->
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
            <button class="but_3" @click="$router.push('/productCenter/productDetail')">更多商城>></button>
          </div>
        </div>
        <div class="wrap-cont clearfloat">
          <div class="wc_1 floatl">
            <img src="../../static/img/img52.png" alt="">
            <!--<div class="title-wrap">-->
              <!--<div class="tw_1">北部万科城</div>-->
              <!--<div class="tw_2">核心商圈</div>-->
              <!--<div class="tw_3">100万元起</div>-->
            <!--</div>-->
            <div class="infoWrap">
              <div class="tagsWrap clearfloat">
                <div class="tw_left floatl">
                  <span>区域：</span>
                </div>
                <div class="tw_right floatl clearfloat">
                  <span>全清远</span>
                  <span v-for="(item,index) in areatags" :key="index">{{item}}</span>
                </div>
              </div>
              <div class="tagsWrap clearfloat">
                <div class="tw_left floatl">
                  <span>特色：</span>
                </div>
                <div class="tw_right floatl clearfloat">
                  <span>全部</span>
                  <span v-for="(item,index) in shopTags" :key="index">{{item}}</span>
                </div>
              </div>
            </div>
            <div class="infoWrap1">
              <div class="infoTitle1">热门商铺</div>
              <div class="infoTitle2">最火生意，快抢先一步</div>
              <div class="infoTitle3"><img src="../../static/img/icon27.png" alt=""></div>
            </div>
          </div>
          <div class="wc_2 floatr clearfloat">
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img48.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img53.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img54.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img55.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img54.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img53.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--闲置土地-->
    <div class="list4" style="background-color: #fff;">
      <div class="wrap">
        <div class="title clearfloat">
          <div class="floatl">
            <div class="title_1">闲置土地</div>
            <div class="title_2">优质土地  聚你所需</div>
          </div>
          <div class="title_3 floatr">

            <button class="but_1">出租</button>
            <button class="but_3" @click="$router.push('/productCenter/productDetail')">更多土地>></button>
          </div>
        </div>
        <div class="wrap-cont clearfloat">
          <div class="wc_1 floatl">
            <img src="../../static/img/img56.png" alt="">
            <!--<div class="title-wrap">-->
            <!--<div class="tw_1">北部万科城</div>-->
            <!--<div class="tw_2">核心商圈</div>-->
            <!--<div class="tw_3">100万元起</div>-->
            <!--</div>-->
            <div class="infoWrap">
              <div class="tagsWrap clearfloat">
                <div class="tw_left floatl">
                  <span>区域：</span>
                </div>
                <div class="tw_right floatl clearfloat">
                  <span>全清远</span>
                  <span v-for="(item,index) in areatags" :key="index">{{item}}</span>
                </div>
              </div>
              <div class="tagsWrap clearfloat">
                <div class="tw_left floatl">
                  <span>特色：</span>
                </div>
                <div class="tw_right floatl clearfloat">
                  <span>全部</span>
                  <span v-for="(item,index) in soilTags" :key="index">{{item}}</span>
                </div>
              </div>
            </div>
            <div class="infoWrap1">
              <div class="infoTitle1">创业孵化基地</div>
              <div class="infoTitle2">优势区位，为你所需</div>
              <div class="infoTitle3"><img src="../../static/img/icon27.png" alt=""></div>
            </div>
          </div>
          <div class="wc_2 floatr clearfloat">
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img60.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont list_cont1">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img61.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont list_cont1">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img62.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont list_cont1">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img63.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont list_cont1">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img64.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont list_cont1">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img65.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont list_cont1">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--办公室-->
    <div class="list4">
      <div class="wrap">
        <div class="title clearfloat">
          <div class="floatl">
            <div class="title_1">办公室</div>
            <div class="title_2">优质配套 共享办公</div>
          </div>
          <div class="title_3 floatr">
            <button class="but_1 sel">出售</button>
            <button class="but_1">出租</button>
            <button class="but_3" @click="$router.push('/productCenter/productDetail')">更多办公室>></button>
          </div>
        </div>
        <div class="wrap-cont clearfloat">
          <div class="wc_1 floatl">
            <img src="../../static/img/img57.png" alt="">
            <!--<div class="title-wrap">-->
            <!--<div class="tw_1">北部万科城</div>-->
            <!--<div class="tw_2">核心商圈</div>-->
            <!--<div class="tw_3">100万元起</div>-->
            <!--</div>-->
            <div class="infoWrap">
              <div class="tagsWrap clearfloat">
                <div class="tw_left floatl">
                  <span>区域：</span>
                </div>
                <div class="tw_right floatl clearfloat">
                  <span>全清远</span>
                  <span v-for="(item,index) in areatags" :key="index">{{item}}</span>
                </div>
              </div>
              <div class="tagsWrap clearfloat">
                <div class="tw_left floatl">
                  <span>特色：</span>
                </div>
                <div class="tw_right floatl clearfloat">
                  <span>全部</span>
                  <span v-for="(item,index) in officeTags" :key="index">{{item}}</span>
                </div>
              </div>
            </div>
            <div class="infoWrap1">
              <div class="infoTitle1">核心商圈</div>
              <div class="infoTitle2">优质配套，与大咖公司为邻</div>
              <div class="infoTitle3"><img src="../../static/img/icon27.png" alt=""></div>
            </div>
          </div>
          <div class="wc_2 floatr clearfloat">
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img48.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img53.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img54.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img55.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img54.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img53.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--美丽乡村-->
    <div class="list4" style="background-color: #fff;">
      <div class="wrap">
        <div class="title clearfloat">
          <div class="floatl">
            <div class="title_1">美丽乡村</div>
            <div class="title_2">优势区位  品质生活</div>
          </div>
          <div class="title_3 floatr">
            <button class="but_1 sel">出售</button>
            <button class="but_1">出租</button>
            <button class="but_3" @click="$router.push('/productCenter/productDetail')">更多乡村物业>></button>
          </div>
        </div>
        <div class="wrap-cont clearfloat">
          <div class="wc_1 floatl">
            <img src="../../static/img/img58.png" alt="">
            <!--<div class="title-wrap">-->
            <!--<div class="tw_1">北部万科城</div>-->
            <!--<div class="tw_2">核心商圈</div>-->
            <!--<div class="tw_3">100万元起</div>-->
            <!--</div>-->
            <div class="infoWrap">
              <div class="tagsWrap clearfloat">
                <div class="tw_left floatl">
                  <span>区域：</span>
                </div>
                <div class="tw_right floatl clearfloat">
                  <span>全清远</span>
                  <span v-for="(item,index) in areatags" :key="index">{{item}}</span>
                </div>
              </div>
              <div class="tagsWrap clearfloat">
                <div class="tw_left floatl">
                  <span>特色：</span>
                </div>
                <div class="tw_right floatl clearfloat">
                  <span>全部</span>
                  <span v-for="(item,index) in villageTags" :key="index">{{item}}</span>
                </div>
              </div>
            </div>
            <div class="infoWrap1">
              <div class="infoTitle1">无民宿，不欢畅</div>
              <div class="infoTitle2">体验清远乡村特色生活</div>
              <div class="infoTitle3"><img src="../../static/img/icon27.png" alt=""></div>
            </div>
          </div>
          <div class="wc_2 floatr clearfloat">
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img60.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont list_cont1">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img61.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont list_cont1">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img62.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont list_cont1">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img63.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont list_cont1">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img64.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont list_cont1">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img65.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont list_cont1">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--仓房车位-->
    <div class="list4">
      <div class="wrap">
        <div class="title clearfloat">
          <div class="floatl">
            <div class="title_1">仓房车位</div>
            <div class="title_2">优势区位 创业孵化</div>
          </div>
          <div class="title_3 floatr">
            <button class="but_1 sel">出售</button>
            <button class="but_1">出租</button>
            <button class="but_3" @click="$router.push('/productCenter/productDetail')">更多商铺>></button>
          </div>
        </div>
        <div class="wrap-cont clearfloat">
          <div class="wc_1 floatl">
            <img src="../../static/img/img59.png" alt="">
            <!--<div class="title-wrap">-->
            <!--<div class="tw_1">北部万科城</div>-->
            <!--<div class="tw_2">核心商圈</div>-->
            <!--<div class="tw_3">100万元起</div>-->
            <!--</div>-->
            <div class="infoWrap">
              <div class="tagsWrap clearfloat">
                <div class="tw_left floatl">
                  <span>区域：</span>
                </div>
                <div class="tw_right floatl clearfloat">
                  <span>全清远</span>
                  <span v-for="(item,index) in areatags" :key="index">{{item}}</span>
                </div>
              </div>
              <div class="tagsWrap clearfloat">
                <div class="tw_left floatl">
                  <span>特色：</span>
                </div>
                <div class="tw_right floatl clearfloat">
                  <span>全部</span>
                  <span v-for="(item,index) in storehouseTags" :key="index">{{item}}</span>
                </div>
              </div>
            </div>
            <div class="infoWrap1">
              <div class="infoTitle1">热门商铺</div>
              <div class="infoTitle2">最火生意，快抢先一步</div>
              <div class="infoTitle3"><img src="../../static/img/icon27.png" alt=""></div>
            </div>
          </div>
          <div class="wc_2 floatr clearfloat">
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img48.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img53.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img54.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img55.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img54.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
              </div>
            </div>
            <div class="mb_list">
              <div class="list_img">
                <img src="../../static/img/img53.png" alt="">
                <!--<div class="like"></div>-->
              </div>
              <div class="list_cont">
                <div class="lc_1"><span class="name">清新区300亩工业用地 出租</span><span class="area"></span></div>
                <div class="lc_2 price">2800元／亩</div>
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
              <div class="tagInfo">厂区-出租</div>
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
              <div class="tagInfo">厂区-出租</div>
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
              <div class="tagInfo">厂区-出租</div>
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
              <div class="tagInfo">厂区-出租</div>
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
              <div class="tagInfo">厂区-出租</div>
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
              <div class="tagInfo">厂区-出租</div>
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
              <div class="tagInfo">厂区-出租</div>
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
              <div class="tagInfo">厂区-出租</div>
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
          <div class="tab floatr">
            <button @click="tabBtn(index)" :class="{sel:tabIdx == index}" class="tab_1" v-for="(item,index) in tabList" :key="index">{{item}}</button>
          </div>
        </div>
        <div class="wrap-cont">
          <div class="list11-top clearfloat">
            <div class="top-left floatl">
              <div class="swiper-container swiper05 swiper-no-swiping">
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
              <div class="right-cont">
                <ul>
                  <li :class="{sel:newListIdx == index}" class="clearfloat" v-for="(item,index) in newList" :key="index">
                    <span class="floatl info textEllipsis">0{{index+1}}、{{item.title}}</span><span class="floatr time">{{item.time}}</span>
                  </li>
                </ul>
              </div>
              <div class="more">
                <button >更多资讯</button>
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
            <span @click="$router.push(item.url)">{{item.name}}</span>
          </div>
        </li>
        <li class="li7" @click="toTop">
          <div class="hover"></div>
        </li>
      </ul>
    </div>
    <!--播放直播-->
    <!--播放视频-->
    <div class="videoWrap" v-if="videoStatus">
      <div>
        <div class="wrap">
          <iframe height='498' allowfullscreen="true" allowtransparency="true" width='760' :src='videoPath' frameborder=0></iframe>
          <div class="close01" @click="videoStatus = false"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import baiduMap from './baiduMap/baiduMap';
    export default {
      name: "homePage",
      components:{
        baiduMap
      },
      data(){
        return {
          // 播放直播状态
          videoStatus:false,
          videoPath:'http://player.youku.com/embed/XMzcwODE1MDE5Mg==',
          navList:[
            {name:'首页',path:'/homePage'},
            {name:'关于我们',path:'/mainWrap/aboutUs'},
            {name:'加入我们',path:'/mainWrap/JoinUs'},
            {name:'留言建议',path:'/mainWrap/messageAdvice'},
            {name:'下载APP',path:'###'}
          ],
          navSel:0,//导航栏选择状态
          sorts: [{
            value: '楼房',
            label: '楼房'
          }, {
            value: '写字楼',
            label: '写字楼'
          }, {
            value: '商城',
            label: '商城'
          }, {
            value: '厂房',
            label: '厂房'
          }, {
            value: '土地',
            label: '土地'
          }],
          sort01: '',
          navList1:[
            {name:'美丽乡村',icon:'static/img/nav09.png',url:'/productCenter',children:[{name:'出租',url:'/productCenter'},{name:'出售',url:'/productCenter'}]},
            {name:'闲置土地',icon:'static/img/nav04.png',url:'/productCenter',children:[]},
            {name:'商铺',icon:'static/img/nav01.png',url:'/productCenter',children:[{name:'出租',url:'/productCenter'},{name:'出售',url:'/productCenter'}]},
            {name:'办公室',icon:'static/img/nav02.png',url:'/productCenter',children:[{name:'出租',url:'/productCenter'},{name:'出售',url:'/productCenter'}]},
            {name:'仓房车位',icon:'static/img/nav03.png',url:'/productCenter',children:[{name:'出租',url:'/productCenter'},{name:'出售',url:'/productCenter'}]},
            {name:'楼房',icon:'static/img/nav05.png',url:'/productCenter',children:[{name:'新房',url:'/productCenter'},{name:'二手房',url:'/productCenter'}]},
            {name:'租房',icon:'static/img/nav06.png',url:'/productCenter',children:[{name:'合租',url:'/productCenter'},{name:'整租',url:'/productCenter'}]},
          ],
          tabList:['企业新闻','国家政策','购房指南'],
          tabIdx:0,
          newList:[
            {title:'李克强：用“放管服”用“放管服”用“放管服”',time:'2018-06-29',url:''},
            {title:'碧桂园欢乐颂邀请你加入未来群聊',time:'2018-06-29',url:''},
            {title:'李克强：用“放管服”用“放管服”用“放管服”',time:'2018-06-29',url:''},
            {title:'碧桂园欢乐颂邀请你加入未来群聊”',time:'2018-06-29',url:''},
            {title:'李克强：用“放管服”用“放管服”用“放管服”',time:'2018-06-29',url:''},
            {title:'李克强：用“放管服”用“放管服”用“放管服”',time:'2018-06-29',url:''},
            {title:'李克强：用“放管服”用“放管服”用“放管服”',time:'2018-06-29',url:''},
            {title:'李克强：用“放管服”用“放管服”用“放管服”',time:'2018-06-29',url:''},

          ],
          // 区域标签
          areatags:['清城区','清新区','英德市','连州市','佛冈县','连南县','阳山县','连山县'],
          // 商铺特色标签
          shopTags:['可明火','外摆位','上水','下水','临街','其他'],
          // 闲置土地特色标签
          soilTags:['农用地','住宅地','商业地','工业地','其他'],
          // 办公室特色标签
          officeTags:['普通办公','共享办公','创意园区','其他'],
          // 美丽乡村特色标签
          villageTags:['民宿','度假','温泉','特色小镇','景点','其他'],
          // 仓房车位
          storehouseTags:['可明火','外摆位','上水','下水','临街','其他'],


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
            {icon:'static/img/icon28.png',name:'政府认证',desc:'鸿基资品质好服务'},
            {icon:'static/img/icon29.png',name:'如实描述',desc:'鸿基资品质好服务'},
            {icon:'static/img/icon30.png',name:'提供发票',desc:'鸿基资品质好服务'},
            {icon:'static/img/icon31.png',name:'法律保障',desc:'鸿基资品质好服务'},
          ],
          //footer
          footerList1:[
            {name:'首页',url:'/homePage'},
            {name:'行业动态 ',url:'###'},
            {name:'政策法规',url:'###'},
            {name:'交易指南',url:'###'},
            {name:'关于平台',url:'###'},
          ],
          footerList2:[
            {name:'美丽乡村',url:'/productCenter/productDetail'},
            {name:'闲置土地',url:'/productCenter/productDetail'},
            {name:'商铺',url:'/productCenter/productDetail'},
            {name:'办公室',url:'/productCenter/productDetail'},
            {name:'仓房车位',url:'/productCenter/productDetail'},
            {name:'楼房',url:'/productCenter/productDetail'},
            {name:'租房',url:'/productCenter/productDetail'}
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
            {name:'我的收藏',url:'/personCenter/personCollect'},
            {name:'我的消息',url:'###'},
            {name:'扫一扫',url:'###'},
            {name:'房贷计算器',url:'###'},
            {name:'在线客服',url:'###'},
            {name:'问题反馈',url:'/mainWrap/messageAdvice'}
          ],
          show01:false,
          searchList:['楼房','写字楼','商城','厂房','土地'],
          searchClass:0,
          login:true,
          searchData:'',
          swiper03:null,
          swiper04:null,
          swiper05:null,
          bannerSwiper:null,
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
        // 地图定位
        this.$refs.mapWrap.search(0,'清远市','清远市政府',13);
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
          autoplayDisableOnInteraction : false,
          onSlideChangeStart: function(swiper){
            if(swiper.activeIndex == _this.newListIdx){
                swiper.swipeTo(0);
            }else{
              _this.newListIdx = swiper.activeIndex;
            }
          },
        });
        _this.bannerSwiper = new _this.Swiper('.bannerSwiper',{
          autoplay:4000,
          speed:1000,
          loop:true,
          autoplayDisableOnInteraction : false,
        });
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
