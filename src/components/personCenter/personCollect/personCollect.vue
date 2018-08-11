<template>
    <div id="personCollect">
      <div class="title">
        <div class="titleText">我的收藏</div>
        <div class="xian"></div>
      </div>
      <template v-if="collectList.length > 0">
        <div class="collectList">
          <ul>
            <li class="clearfloat" v-for="(item,index) in 3" :key="index">
              <div class="list-left floatl">
                <img src="../../../../static/img/img38.png" alt="">
              </div>
              <div class="list-right floatl clearfloat">
                <div class="right_1 floatl">
                  <div class="r1_1">横顶山别墅<span>出售中</span></div>
                  <div class="r1_2">
                    <span v-for="(item1,index1) in 5" :key="index1">2016年建</span>
                  </div>
                  <div class="r1_3">
                    <span class="icon"></span><span>清新区横山区清河路117号</span>
                  </div>
                </div>
                <div class="right_2 floatr">
                  <button @click.stop="cancel(index)">取消收藏</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </template>
      <template v-else>
        <div style="text-align: center;padding: 50px 0;font-size: 20px;color: #666666;">
          <span>暂未有收藏</span>
        </div>
      </template>
    </div>
</template>

<script>
    export default {
      name: "personCollect",
      data(){
        return {
          collectList:[1]
        }
      },
      methods:{
        cancel:function (i) {
          this.$alert('确定取消收藏？', '温馨提示', {
            confirmButtonText: '确定',
            callback: action => {
              //确定后做些什么
            }
          });
        }
      }
    }
</script>

<style scoped>
@import "../../../../static/css/personCollect.css";
</style>
<style>
  @import "../../../../static/css/public.css";
</style>
