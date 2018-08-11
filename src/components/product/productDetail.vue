<template>
    <div id="productDetail">
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
      <!--标签列表-->
      <div class="list2">
        <div class="l2-wrap">
          <div class="wrap">
            <div class="l2-path">
              <span v-for="(item,index) in list.pathDetail" :key="index">{{item}}</span>
            </div>
            <div class="l2-list">
              <ul class="tagList">
                <li class="clearfloat" v-for="(item,index) in list.lists" :key="index">
                  <div class="list-title floatl">{{item.name}}：</div>
                  <div class="list-tags floatl">
                    <div  v-if="item.name == '售价'">
                      <span @click="tagBtn(index,-1)">全部</span>
                      <span @click="tagBtn(index,index1)" v-for="(item1,index1) in item.tags" :key="index1">{{item1.name}}万元</span>
                    </div>
                    <div v-else-if="item.name == '面积'">
                      <span @click="tagBtn(index,-1)">全部</span>
                      <span @click="tagBtn(index,index1)" v-for="(item1,index1) in item.tags" :key="index1">{{item1.name}}m²</span>
                    </div>
                    <div v-else>
                      <span @click="tagBtn(index,-1)">全部</span>
                      <span @click="tagBtn(index,index1)" v-for="(item1,index1) in item.tags" :key="index1">{{item1.name}}</span>
                    </div>
                  </div>
                  <div v-if="item.name == '售价'" class="input01 floatl">
                    <span class="inputWrap">
                      <input type="text" v-model="num01.min">
                    </span>
                    <span>-</span>
                    <span class="inputWrap">
                      <input type="text" v-model="num01.max">
                    </span>
                    <span class="last">元</span>
                    <button class="last-btn">确定</button>
                  </div>
                  <div v-if="item.name == '面积'" class="input01 floatl">
                    <span class="inputWrap">
                      <input type="text" v-model="num02.min">
                    </span>
                    <span>-</span>
                    <span class="inputWrap">
                      <input type="text" v-model="num02.max">
                    </span>
                    <span class="last">m²</span>
                    <button class="last-btn">确定</button>
                  </div>
                </li>
              </ul>
            </div>
            <div class="l2-bottom clearfloat">
              <div class="l2b-title floatl">
                当前帅选条件：
              </div>
              <div class="l2b-tagSel floatl">
                <span v-for="(item,index) in tags01" :key="index">{{item.name}}<i @click="del01(index,item.lid)"></i></span>
              </div>
              <div @click="clearTag"  v-if="tags01.length != 0" class="l2b-clear floatl">
                <span class="clear01"></span><span>清空筛选条件</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--产品列表-->
      <div class="list3">
        <div class="wrap clearfloat">
          <div class="wrap-left floatl">
            <div class="tab clearfloat">
              <div @click="tabSel(0)" :class="{sel:tabIdx == 0}">默认排序</div>
              <div @click="tabSel(1)" :class="{sel:tabIdx == 1}">价格<i></i></div>
              <div @click="tabSel(2)" :class="{sel:tabIdx == 2}">推荐热度</div>
            </div>
            <div class="listWrap">
              <div class="list clearfloat" v-for="(item,index) in 6" :key="index">
                <div class="list-left floatl clearfloat">
                  <div class="left-img floatl">
                    <img src="../../../static/img/img29.png" alt="">
                  </div>
                  <div class="left-detail floatl">
                    <div class="detail-title textEllipsis">全新标准厂房 产权证 地列位置佳 配套完善 招工易</div>
                    <div class="detail-cont">
                      <div><span>地址：</span>清远市-清城区 | 浦城大道中325号</div>
                      <div><span>人气：</span>100位用户添加了收藏，53次预约看房</div>
                      <div><span>面积：</span>1000m2</div>
                    </div>
                    <div class="detail-tag">
                      <span>工业园区</span>
                    </div>
                  </div>
                </div>
                <div class="list-right floatl">
                  <div @click="like(index)" class="like"></div>
                  <div class="price"><span>1280</span>万元</div>
                </div>
              </div>
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
    </div>
</template>

<script>
    export default {
      name: "productDetail",
      data(){
        return {
          navBtn1:[{name:'出租',id:0},{name:'出售',id:1}],
          // 搜索字
          searchText:'',
          // 出租 出售状态
          navIdx:0,
          list:{
            //当前路径
            pathDetail:['鸿基资盈宝','厂房车位出售','厂房车位出售'],
            lists:[
              {
                name:'区域',
                id:1,
                tags:[
                  {name:'清城',id:'1'},
                  {name:'英德',id:'3'},
                  {name:'连州',id:'4'},
                  {name:'佛冈',id:'5'},
                  {name:'阳山',id:'6'},
                  {name:'连南',id:'7'},
                  {name:'连山',id:'8'}
                ]
              },
              {
                name:'售价',
                id:2,
                tags:[
                  {name:'0-50',id:'1'},
                  {name:'50-100',id:'2'},
                  {name:'100-300',id:'3'},
                  {name:'300-500',id:'4'},
                  {name:'600-1000',id:'5'},
                  {name:'1000',id:'6'}
                ]
              },
              {
                name:'面积',
                id:3,
                tags:[
                  {name:'0-1000',id:'1'},
                  {name:'1000-2000',id:'2'},
                  {name:'2000-5000',id:'3'},
                  {name:'5000-8000',id:'4'},
                  {name:'8000-12000',id:'5'},
                  {name:'12000',id:'6'}
                ]
              },
              {
                name:'类型',
                id:'',
                tags:[
                  {name:'工业园区',id:'1'},
                  {name:'开发区',id:'2'},
                  {name:'化工区',id:'3'}
                ]
              }
            ]
          },
          // tab选择
          tabIdx:0,
          // 收藏
          likeSel:0,
          // 售价
          num01:{
            min:'',
            max:''
          },
          // 面积
          num02:{
            min:'',
            max:''
          },
          //已选标签
          tags:[],
          tags01:[],
        }
      },
      methods:{
        nav01:function (i, id) {
          this.navIdx = i;
        },
        tabSel:function (i) {
          this.tabIdx = i;
        },
        like:function (i) {
          if($('.listWrap .list').eq(i).find('.like').hasClass('sel')){
            $('.listWrap .list').eq(i).find('.like').removeClass('sel');
          }else{
            $('.listWrap .list').eq(i).find('.like').addClass('sel')
          }
        },
        tagBtn:function (i, index) {
          $('.tagList>li').eq(i).find('.list-tags').find('span').removeClass('sel');
          $('.tagList>li').eq(i).find('.list-tags').find('span').eq(index+1).addClass('sel');
          var arr = [];
          var data = this.list.lists[i].tags[index].name;
          this.tags[i+''] = data;
          for (var key in this.tags) {
            arr.push({name:this.tags[key],lid:key})
          }
          this.tags01 = arr;
        },
        del01:function (index,i) {
          delete this.tags[i];
          this.tags01.splice(index,1);
        },
        clearTag:function () {
          for (var key in this.tags) {
            delete this.tags[key];
          }
          this.tags01.splice(0,this.tags01.length)
        }
      },
      mounted:function () {
        $('.inputWrap input').focusin(function () {
          $(this).parent('.inputWrap').siblings('.last-btn').show();
        })
        $('.inputWrap input').focusout(function () {
          if($(this).val() == ''){
            $(this).parent('.inputWrap').siblings('.last-btn').hide();
          }
        })
      }
    }
</script>

<style scoped>
@import "../../../static/css/productDetail.css";
</style>
<style>
  @import "../../../static/css/public.css";
</style>
