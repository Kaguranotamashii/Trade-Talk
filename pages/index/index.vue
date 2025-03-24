<template>
	<view class="root">
	
		<view class="searc">
			<view class="shouye" style="font-size: 50upx;padding: 50upx;text-align: center;">Search for words</view>
			 <u-search shape="shape" :show-action="false" v-model="keywords" @search="search(keywords)" placeholder="请输入单词"
			 				style="padding: 15rpx 20rpx;" bgColor="#ffffff" borderColor="#d7d7d7"></u-search>
	
		</view>
		
		<view class="dicts">
			<view class="shouye" style="font-size: 50upx;padding: 20rpx;text-align: center;">词典</view>
			<scroll-view style="white-space: nowrap;width: 100%;" scroll-x="true" @scroll="scroll" scroll-left="120">
						<view class="img1"style="height: 116px;width: 84px;display: inline-block;width: 84px; margin:10px;"v-for="(img1) in 5">
							<image src="/static//english.png" style="display: inline-block; border-radius:5px;height: 250rpx;width: 177rpx;"></image>
						</view>
					
					</scroll-view>	
		</view>
		
	
		<view class="xinwen">
			<view class="xinwenbiaoti" style="font-size: 50upx;padding: 20rpx;text-align: center;">新闻</view>
			<view class="content">
				<view class="item" v-for="item in listPostArr" @click="goDetail(item._id)" :key="item._id">
					<view class="title" style="padding-bottom: 35rpx; ">
						<text style="padding-right: 250rpx; padding-left: 50rpx;font-size: 40rpx;margin-top:100px;font-weight:900">{{item.title}}</text>
						<text style="font-weight:200">贸易新闻</text>
					</view>
				
					<view class="text" >
						{{item.simple}}
					</view>
					
	
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{name: '贸易新闻'}, 
					{name: '文化扩展'},
				],
				article:[],
				listPostArr:[],
				keywords:""
			}
		},
		methods:{
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {
				
			},
			//获得新闻列表 截止为前五个
			getData(){
				uniCloud.callFunction({
					name:"art_get_all"
				}).then(res=>{
					console.log(res);
					this.listPostArr=res.result.data;
				})
			},
			goDetail(e){
				uni.navigateTo({
					url:"/pages/detail/detail?id="+e
				})
			},
			search(e){
				console.log()
				uni.navigateTo({
					url:"/pages/dictList/dictList?dict="+e
				})
			}
			
		},
		onLoad() {
			this.getData()
		}
	}
</script>

<style>
.root{
	width: 100%;
	height: 100%;
}
.xinwen .content .item{
	width: 700rpx;
	height: 200rpx;
	background-color: rgb(233, 234,240);
	/* padding: 10px; */
	margin:auto;
	border-radius: 10rpx;
	margin-top:20rpx;
	
}
.xinwen .content .item .text{
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;				//溢出内容隐藏
		text-overflow: ellipsis;		//文本溢出部分用省略号表示
		display: -webkit-box;			//特别显示模式
		-webkit-line-clamp: 2;			//行数
		line-clamp: 2;					
		-webkit-box-orient: vertical;	//盒子中内容竖直排列
		margin: 10rpx 10rpx 10rpx 10rpx;
}

</style>