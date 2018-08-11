// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import '../static/css/reset.css'
import Swiper from '../static/js/idangerous.swiper.min'
import '../static/css/idangerous.swiper.css'
import '../static/css/video-js.min.css'
import Videojs from '../static/js/video.min'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/js/api'

if (Number.parseInt === undefined){
  Number.parseInt = window.parseInt;
}
if (Number.parseFloat === undefined){
  Number.parseFloat = window.parseFloat;
}

Vue.config.productionTip = false;
Vue.prototype.Swiper = Swiper;
Vue.prototype.Videojs = Videojs;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
