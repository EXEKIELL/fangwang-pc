<template>
  <!--地图容器-->
  <div id="baiduMap"></div>
</template>

<script>
    export default {
      name: "baiduMap",
      data(){
        return {

        }
      },
      methods:{
        ready:function () {
          var map = new BMap.Map("baiduMap"); // 创建Map实例
          map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
          map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
          map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
          map.enableScrollWheelZoom();// 启用滚轮放大缩小，默认禁用
          map.enableContinuousZoom();// 启用地图惯性拖拽，默认禁用
          map.addControl(new BMap.NavigationControl());  // 添加默认缩放平移控件
          map.addControl(new BMap.OverviewMapControl()); // 添加默认缩略地图控件
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
