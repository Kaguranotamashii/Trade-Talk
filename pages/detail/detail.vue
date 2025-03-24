<template>
	<view class="detail">
		<view class="title">
			{{detail.title}}
		</view>
		<view class="info">
			<text>zuozhe</text>
			<text>2022</text>
		</view>
		<view class="content">
			<rich-text :nodes="httmll" ></rich-text>
		</view>
	</view>
</template>

<script>
	let id;
	export default {
		data() {
			return {
				detail:{},
				httmll:""
			};
		},
		methods:{	
			getDetail(){
				console.log("aa")
				uniCloud.callFunction({
					name:"art_get_row",
					data:{
						id
					}
				}).then(res=>{
					//console.log(res);
					this.detail=res.result.data[0];
					console.log(this.detail.content)
					this.httmll=this.detail.content
				})
			}
		},
		onLoad(e) {
			//console.log(e)
			id=e.id;
			this.getDetail();
		}
	}
</script>

<style lang="scss">
.detail{
	padding: 30rpx;
	.title{
		font-size: 50rpx;
		color: #000;
		text-align: justify;
		line-height: 1.4em;
	}
	.info{
		font-size: 30rpx;
		color: #666;
		padding: 30rpx 0 60rpx;
		text{
			padding-right: 30rpx;
		}
	}
	.content{
		font-size: 36rpx;
		line-height: 1.4em;
		img{
			width: 100%;
			height: auto;
		}
	}
	
}
</style>
