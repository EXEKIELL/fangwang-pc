<template>
    <div id="aboutUsCourse">
      <div class="Title">
        <div>
          <div class="Title1">发展历程</div>
          <div class="Title2">Development path</div>
          <div class="Title3">
            <span style="background-color: #fdc405;"></span>
          </div>
        </div>
      </div>
      <div class="content">
        <ul>
          <li v-for="(item,index) in 7" :key="index">
            <div class="wrap clearfloat">
              <div class="cont-1 floatl">
                <div class="c1_1">2017-06</div>
                <div class="c1_2">年/月</div>
              </div>
              <div class="cont-2 floatl">
                <div class="c2_1">鸿基资盈宝成功上市</div>
                <div class="c2_2">
                  <p>在公司治理方面董事会高度重视公司内部控制和风险管理，不断强化公司整体风险管理能力，提升企业合规经营水平。</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "aboutUsCourse"
    }
</script>

<style scoped>
@import "../../../static/css/aboutUsCourse.css";
</style>
<style>
  @import "../../../static/css/public.css";
</style>
