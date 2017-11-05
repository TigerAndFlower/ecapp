// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueScroller from 'vue-scroller'
import App from './App'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.use(VueScroller);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
