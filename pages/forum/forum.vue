<template>
	<view class="root">
		
		
		<view>
		<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
		    swiperWidth="2000"  >
		</u-tabs-swiper>
		</view>
		  
		  
		  <swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
		   
		   <swiper-item class="swiper-item">
		     <view class="content">
				 
		       <view>
		        				<scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom">
		        					 <view class="item" v-for="item in 10">
		        						2月9日最新消息，据英国天空新闻报道，英国首相约翰逊表示，将在2月21日宣布“与新冠病毒共存”计划，同时英国计划提前一个月结束对新冠疫情的限制。
		        					 </view>
		        				</scroll-view>
		       </view>
		     </view>
		   </swiper-item>
		   
		   <swiper-item class="swiper-item">
		    <view class="a" v-for="a in 5">
		     sssdddsssdddsssdddsssdddsssddd
		    </view>
		   </swiper-item>
		    <view class="a" v-for="a in 10">
		     sssddd
		    </view>
		   
		   
		  </swiper>
		
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
		}
	}
</script>

<style>
.root{
	width: 100%;
	height: 100%;
}
.swiper-item .content .item{
	width: auto;
	height: 400rpx;
	background-color: rgb(250, 250, 247);
	margin:15rpx;
	border-radius: 8rpx;
	
	
}


</style>