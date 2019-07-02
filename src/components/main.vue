<style scoped="scoped" lang="scss">
	
	.tabbar{
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 999;
		width: 100%;
		height: 1rem;
		box-shadow: 0 -0.1rem 0.2rem #f0f2f5;
		&-item{
			width: 33%;
			text-align: center;
			color: #666;
			font-size: 0.28rem;
		}
		&-item.active{
			color: #e93b3d;
		}
		.iconfont{
			font-size: 0.4rem;
		}
	}
</style>
<template>
	<div>
		 <transition :name="transitionName" class="book_router">
            <keep-alive>
                <router-view class="router-view Router book_router"></router-view>
            </keep-alive>
        </transition>
		<div class="tabbar flex-aic">
			<div :class="{'tabbar-item':true, active:activeTab=='/'}" @click="changeRouter('/',0)">
				<i class="iconfont icon-gao-jinrudianpu"></i>
				<div class="tabbar-item-title">首页</div>
			</div>
			<div :class="{'tabbar-item':true, active:activeTab=='/all'}" @click="changeRouter('/all',1)">
				<i class="iconfont icon-gao-tianmaopaidui"></i>
				<div class="tabbar-item-title">全部</div>
			</div>
			<div :class="{'tabbar-item':true, active:activeTab=='/category'}" @click="changeRouter('/category',2)">
				<i class="iconfont icon-gao-liebiao1"></i>
				<div class="tabbar-item-title">分类</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeTab: '/',
				currentindex:0,
				transitionName: 'slide-right', // 默认动态路由变化为slide-right
			}
		},
		activated() {
			this.activeTab = this.$route.path || ''
		},
		methods:{
			changeRouter(path,index){
				this.activeTab = path
				this.$router.push(`${path}`)
				if (index < this.currentindex) {
					this.transitionName = 'slide-right'
				} else {
					this.transitionName = 'slide-left'
				}
				this.currentindex = index;
			}
		}
	}
</script>

<style>

</style>
