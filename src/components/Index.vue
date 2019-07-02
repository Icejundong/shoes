<style scoped="scoped" lang="scss">
	.main{
		background-color: #f7f7f8;
	}
	.top{
		padding: 0.2rem;
		box-sizing: border-box;
		color: #fff;
		&-store{
			&-image{
				width: 0.9rem;
				height: 0.9rem;
				display: block;
				margin-right: 0.2rem;
			}
			&-detail{
				&-name{
					font-size: 0.32rem;
				}
				&-desc{
					font-size: 0.2rem;
				}
			}
		}
	}
	.topsearch{
		padding: 0.2rem;
		box-sizing: border-box;
		&-box{
			border-radius: 0.3rem;
			padding: 0 0.2rem;
			height: 0.6rem;
			background-color: #f0f2f5;
			opacity: 0.8;
			&-searchimg{
				height: 0.4rem;
				width: 0.4rem;
			}
			&-input{
				height: 100%;
				font-size: 0.28rem;
				padding-left: 0.2rem;
				width: 5rem;
				background-color: transparent;
				box-sizing: border-box;
				margin: 0;
				border: none;
				outline: none;
			}
		}
	}
	.topswiper{
		width: 7.1rem;
		margin: 0 auto;
		margin-bottom: 0.2rem;
		height: 1.9rem;
		overflow: hidden;
		border-radius: 0.1rem;
		overflow: hidden;
	}
	.topswiper-item-image{
		width: 100%;
		height: 100%;
	}
	.maincontent{
		position: relative;
		z-index: 999;
		height: 100%;
	}
	.shop_brand_image{
		width: 100%;
		height: 4.4rem;
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;
		background: #666;
		&:before{
			content: "";
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
			background: rgba(0,0,0,.3);
			z-index: 1;
		}
		&:after{
			display: block;
			content: "";
			position: absolute;
			z-index: 2;
			top: 124px;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(180deg,transparent 0,hsla(0,0%,100%,.8) 80%,#f7f7f7);
		}
	}
	.shop_brand_image img{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		display: block;
	}
	
	.goodslist{
		width: 7.1rem;
		box-sizing: border-box;
		margin: 0 auto;
		background-color: #f0f2f5;
		height: calc(100% - 5.5rem);
		&-item{
			width: calc(50% - 0.05rem);
			box-sizing: border-box;
			margin-bottom: 0.1rem;
			background-color: #fff;
			padding-bottom: 0.1rem;
			&-img{
				width: 3.5rem;
				height: 3.5rem;
				display: block;
				margin: 0 auto;
			}
			&-info{
				box-sizing: border-box;
				padding: 0 0.2rem;
				
				&-title{
					line-height: 0.4rem;
					margin-top: 0.1rem;
					font-size: 0.30rem;
					color: #666;
					/* 显示两行 */
					// max-height: 80rpx;
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					line-clamp: 1;
					-webkit-box-orient: vertical;
				}
				&-price{
					color: #CA0C16;
					font-size: 0.26rem;
					height: 0.5rem;
					&-real{
						font-size: 0.28rem;
						margin-right: 0.1rem;
					}
					&-origin{
						color: #999;
						font-size: 0.2rem;
						text-decoration: line-through;
					}
				}
			}
		}
	}
	.guanzhu{
		background-color: #ca0c16;
		line-height: 0.5rem;
		text-align: center;
		padding: 0 0.2rem;
		font-size: 0.3rem;
		border-radius: 0.25rem;
	}
	
</style>
<template>
	<div class="main">
		<div class="shop_brand_image">
			<img src="../assets/img/bg.jpg">
		</div>
		<div class="maincontent">
			<div class="top flex-jasc">
				<div class="top-store flex-aic">
					<img src="../assets/img/logo.png" class="top-store-image">
					<div class="top-store-detail">
						<div class="top-store-detail-name">苗喵喵的店</div>
						<div class="top-store-detail-desc">就这么直勾勾的看着你</div>
					</div>
				</div>
				<div class="guanzhu" @click="guanzhu">关注</div>
			</div>
			<div class="topsearch">
				<div class="topsearch-box flex-aic">
					<img src="../assets/img/search.svg" class="topsearch-box-searchimg">
					<input type="text" class="topsearch-box-input" placeholder="搜商品">
				</div>
			</div>
			<mt-swipe :auto="2000" class="topswiper">
				<mt-swipe-item>
					<img src="../assets/img/shoe3.jpg" class="topswiper-item-image">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../assets/img/shoe2.jpg" class="topswiper-item-image">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../assets/img/shoe1.jpg" class="topswiper-item-image">
				</mt-swipe-item>
			</mt-swipe>
			<div class="goodslist">
				<b-scroller :data="goodsList" :pulldown="true" :pullup="true" @pulldown="onPullDownRefresh" @scrollToEnd="onReachBottom" :swiper_pullUp="swiper_pullUp" :swiper_nodata="nomore" :empty="empty">
					<div class="flex-jasc flex-wrap">
						<div v-for="(item,index) in goodsList" :key="index" class="goodslist-item">
							<img src="../assets/img/shoearrt.jpg" class="goodslist-item-img">
							<div class="goodslist-item-info">
								<div class="goodslist-item-info-title">时尚复古老爹鞋子时尚复古老爹鞋子时尚复古老爹鞋子</div>
								<div class="goodslist-item-info-price flex-aic">
									<div class="goodslist-item-info-price-real">￥170.00</div>
									<div class="goodslist-item-info-price-origin">￥220.00</div>
								</div>
							</div>
						</div>
					</div>
				</b-scroller>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'index',
		data() {
			return {
				goodsList:[1,1,1,1,1,1,1,1,1,1],
				swiper_pullUp:false,
				loading:false,
				nomore:false,
				empty:false
			}
		},
		methods:{
			guanzhu(){
				this.showToast('测试关注成功');
			},
			onPullDownRefresh(){
				this.showToast('刷新成功');
				this.nomore = false
				this.empty = false
				this.loading = false
				this.swiper_pullUp = false
				this.goodsList = [1,1,1,1,1,1,1,1,1,1]
				this.getGoodsList()
			},
			onReachBottom(){
				if(this.nomore || this.empty || this.loading){
					return
				}
				this.swiper_pullUp = true
				this.getGoodsList()
			},
			getGoodsList(){
				
				setTimeout(()=>{
					this.loading = false
					this.swiper_pullUp = false
					// this.showToast('上拉加载成功');
					this.goodsList = this.goodsList.concat([1,1,1,1,1,1,1,1,1,1])
					if(this.goodsList.length >= 50){
						this.nomore = true
					}
				},1000)
			}
		}
	}
</script>

