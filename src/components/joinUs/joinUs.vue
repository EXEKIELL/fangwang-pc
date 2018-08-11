<template>
    <div id="joinUs">
      <div class="banner">
        <img src="../../../static/img/banner02.png" alt="">
        <div class="detail">
          <div class="detailWrap">
            <div class="d_1">加入鸿基资盈宝放飞你的梦想</div>
            <div class="d_2">人尽其才&ensp;<span>你最有才</span></div>
            <div class="d_3">Recruitment</div>
          </div>
        </div>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div>
</template>

<script>
    export default {
        name: "joinUs"
    }
</script>

<style scoped>
@import "../../../static/css/joinUs.css";
</style>
<style>
  @import "../../../static/css/public.css";
</style>
