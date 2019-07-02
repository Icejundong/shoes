import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import Index from '@/components/Index'
import All from '@/components/All'
import Category from '@/components/Category'

Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/', component: main , children:[
			{path:'',component: Index},
			{path:'all',component: All},
			{path:'category',component: Category},
		]},
		
	]
})
