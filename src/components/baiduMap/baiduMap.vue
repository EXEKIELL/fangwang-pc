<template>
  <!--地图容器-->
  <div id="baiduMap"></div>
</template>

<script>
    export default {
      name: "baiduMap",
      data(){
        return {
          map:'',
          point:'',
          marker:''
        }
      },
      methods:{
        ready:function () {
          this.map = new BMap.Map("baiduMap"); // 创建Map实例
          this.point = new BMap.Point(116.404, 39.915);
          this.map.centerAndZoom(this.point, 11); // 初始化地图,设置中心点坐标和地图级别
          this.map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
          this.map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
          this.map.enableScrollWheelZoom();// 启用滚轮放大缩小，默认禁用
          this.map.enableContinuousZoom();// 启用地图惯性拖拽，默认禁用
          this.map.addControl(new BMap.NavigationControl());  // 添加默认缩放平移控件
          this.map.addControl(new BMap.OverviewMapControl()); // 添加默认缩略地图控件
        },
        makeMarker:function () {
          if(this.point){
            this.marker = new BMap.Marker(this.point);
            this.map.addOverlay(this.marker)
          }
        },
        search:function (num,city,text,num1) {
          /**
           * num:0为地址解析，1为坐标返回地址
           * city:地址解析需要传的城市
           * text:地址查询关键词
           * num1:地图缩放级别
           *
           * **/
          var _this = this;
          if(num == 0){
            // 创建地址解析器实例
            var myGeo = new BMap.Geocoder();
            // 将地址解析结果显示在地图上，并调整地图视野
            myGeo.getPoint(text, function(point){
                if (point) {
                  _this.map.centerAndZoom(point, num1);
                  _this.map.addOverlay(new BMap.Marker(point));
                }
              },
              city);
          }else if(num == 1){
            // 创建地理编码实例
            var myGeo = new BMap.Geocoder();
            // 根据坐标得到地址描述
            myGeo.getLocation(new BMap.Point(116.364, 39.993), function(result){
              if (result){
                alert(result.address);
              }
            });
          }
        }
      },
      mounted:function () {
        this.ready();

      }
    }
</script>

<style scoped>
  #baiduMap{
    width: 100%;
    height: 100%;
  }
</style>
<style>
  .anchorBL {
    display:none
  }
</style>
