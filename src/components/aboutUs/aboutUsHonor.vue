<template>
    <div id="aboutUsHonor">
      <div class="Title">
        <div>
          <div class="Title1">企业荣誉</div>
          <div class="Title2">Enterprise honor</div>
          <div class="Title3">
            <span style="background-color: #fdc405;"></span>
          </div>
        </div>
      </div>
      <div class="content clearfloat">
        <div class="wrap clearfloat">
          <div class="list floatl" v-for="(item,index) in 6" :key="index">
            <div class="list_1">
              <img src="../../../static/img/honor01.png" alt="">
            </div>
            <div class="list_2">
              <div>
                <div class="l2_1">广东省优秀信用示范单位</div>
                <div class="l2_2">2017-07-11</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "aboutUsHonor"
    }
</script>

<style scoped>
@import "../../../static/css/aboutUsHonor.css";
</style>
<style>
  @import "../../../static/css/public.css";
</style>
