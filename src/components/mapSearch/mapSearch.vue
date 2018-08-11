<template>
    <div id="mapSearch">
      <div class="list1">
        <div class="l1_nav">
          <div class="wrap clearfloat">
            <div class="icon floatl"></div>
            <div class="select floatl clearfloat">
              <div class="selList floatl" v-for="(item,index) in 8" :key="index">
                <template v-if="index == 0">
                  <el-select v-model="value0" placeholder="楼房">
                    <el-option
                      v-for="item in options0"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
                <template v-if="index == 1">
                  <el-select v-model="value1" placeholder="新房">
                    <el-option
                      v-for="item in options1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
                <template v-if="index == 2">
                  <el-select v-model="value2" placeholder="区域">
                    <el-option
                      v-for="item in options2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
                <template v-if="index == 3">
                  <el-select v-model="value3" placeholder="售价">
                    <el-option
                      v-for="item in options3"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
                <template v-if="index == 4">
                  <el-select v-model="value4" placeholder="面积">
                    <el-option
                      v-for="item in options4"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
                <template v-if="index == 5">
                  <el-select v-model="value5" placeholder="户型">
                    <el-option
                      v-for="item in options5"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
                <template v-if="index == 6">
                  <el-select v-model="value6" placeholder="特色">
                    <el-option
                      v-for="item in options6"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
                <template v-if="index == 7">
                  <el-select v-model="value7" placeholder="其它">
                    <el-option
                      v-for="item in options7"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="l1_map">
          <baidu-map></baidu-map>
        </div>
      </div>
      <div class="list2">
        <div class="wrap">
          <div class="swiper-container swiper05">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in 8" :key="index">
                <div class="slide-wrap">
                  <div class="w_1 clearfloat">
                    <span class="title floatl">保利中航城</span><span class="icon floatr" @click="collect($event)"></span>
                  </div>
                  <div class="w_2">
                    <img src="../../../static/img/img39.png" alt="">
                    <span class="icon" @click="videoPlay($event)"></span>
                  </div>
                  <div class="w_3">
                    <div class="text1">清城区-浦城区大道中325号</div>
                    <div class="text2">3室/4室   94-126m2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="prev05" @click="swiper05.swipePrev()"></div>
          <div class="next05" @click="swiper05.swipeNext()"></div>
        </div>
      </div>
      <!--弹窗-->
      <div v-show="popUp">
        <div class="popUp">
          <div>
            <div class="p_wrap">
              <!--<iframe src="" frameborder="0" width="1070" height="600"></iframe>-->
              <video id="my-video" class="video-js vjs-big-play-centered" controls preload="auto" width="1070" height="600"
                     poster="m.jpg" data-setup="{}">
                <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
                <source src="http://vjs.zencdn.net/v/oceans.webm" type="video/webm">
                <source src="http://vjs.zencdn.net/v/oceans.ogv" type="video/ogg">
                <p class="vjs-no-js"> To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a> </p>
              </video>
              <div class="close03" @click="closeWrap"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import baiduMap from '../baiduMap/baiduMap'
    export default {
      name: "mapSearch",
      components:{
        baiduMap
      },
      data(){
        return{
          options0: [{
            value: '楼房',
            label: '楼房'
          }, {
            value: '楼房2',
            label: '楼房2'
          }],
          value0: '',
          options1: [{
            value: '新房',
            label: '新房'
          }, {
            value: '新房2',
            label: '新房2'
          }],
          value1: '',
          options2: [{
            value: '区域',
            label: '区域'
          }, {
            value: '区域2',
            label: '区域2'
          }],
          value2: '',
          options3: [{
            value: '售价',
            label: '售价'
          }, {
            value: '售价2',
            label: '售价2'
          }],
          value3: '',
          options4: [{
            value: '面积',
            label: '面积'
          }, {
            value: '面积2',
            label: '面积2'
          }],
          value4: '',
          options5: [{
            value: '户型',
            label: '户型'
          }, {
            value: '户型2',
            label: '户型2'
          }],
          value5: '',
          options6: [{
            value: '特色',
            label: '特色'
          }, {
            value: '特色2',
            label: '特色2'
          }],
          value6: '',
          options7:[{
            value: '其他',
            label: '其他'
          }, {
            value: '其他2',
            label: '其他2'
          }],
          value7: '',
          //swiper05
          swiper05:null,
          popUp:false,
          myPlayer:null,
          videoUrl:null
        }
      },
      methods:{
        collect:function (e) {
          if($(e.target).hasClass('sel')){
            $(e.target).removeClass('sel');
          }else{
            $(e.target).addClass('sel');
          }
        },
        videoPlay:function (e) {
          var that = this;
          this.popUp = true;
          setTimeout(function () {
            that.myPlayer = that.Videojs('my-video');
            that.videoUrl = $(e.target).attr("videohref");
            that.Videojs("my-video", {}, function() {
              that.myPlayer = this;
              $("#mymoda .video-con #my-video source").attr("src", that.videoUrl);
              that.myPlayer.src(that.videoUrl);
              that.myPlayer.load(that.videoUrl);
              that.myPlayer.play();
            });
            $(".click-modal").click();
          },50)
        },
        closeWrap:function () {
          this.popUp = false;
          this.myPlayer.pause();
        }
      },
      mounted:function () {
        $('input').placeholder();
        this.swiper05 = new this.Swiper('.swiper05',{
          slidesPerView:5
        });
      }
    }
</script>

<style scoped>
@import "../../../static/css/mapSearch.css";
</style>
<style>
  @import "../../../static/css/public.css";
</style>
