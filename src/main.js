// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/reset.css'
import './assets/iconfont/iconfont.css'

Vue.use(Mint)

Vue.config.productionTip = false

Axios.defaults.baseURL = 'http://gaojundong.com'

Vue.prototype.request = function (url,type,json) {
    if(type == 'post' || type == 'POST'){
        return Axios.post(url,json)
    } else if(type == 'get' || type == 'GET'){
        return Axios.get(url,{params:json})
    }
}

import gHeader from './components/common/Header'
Vue.component('g-header',gHeader)
import BScroller from './components/common/scroller'
Vue.component('b-scroller',BScroller)
import empty from './components/common/empty.vue'
Vue.component('empty',empty)
import noMore from './components/common/noMore.vue'
Vue.component('no-more',noMore)

Vue.prototype.showToast = function(message,position='middle',duration=1000){
	//'top' 'bottom' 'middle'
	Vue.prototype.$toast({
		message: message,
		position: position,
		duration: duration
	});
}

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})



