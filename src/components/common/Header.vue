<template>
	<div>
		<mt-header :title="title" fixed>
			<router-link to="/" slot="left" v-if="showleft">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" v-if='showright' slot="right" @click='sheetVisible = !sheetVisible'></mt-button>
		</mt-header>
		<div style="height: 40px;"></div>

		<mt-actionsheet :actions="actions" v-model="sheetVisible">
		</mt-actionsheet>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: 'title'
			},
			showleft: {
				type: Boolean,
				default: false
			},
			showright: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				actions: [{
					name: '分享',
					method: this.share
				}],
				sheetVisible: false,
			}
		},
		methods: {
			share() {
				alert(123)
				this.$router.isBack = true
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	.mint-header{
		background: rgba(30,30,30,.8);
	}
</style>
