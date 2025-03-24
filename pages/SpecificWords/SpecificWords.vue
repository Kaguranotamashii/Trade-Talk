<template>
	<view class="root">
		<view class="wordList" v-for="(wordList,index1) in dataArr">
			<br/>
	
			<view class="name">
				{{wordList.headWord}}
		
			</view>
			<br/>
			
			<view >读音</view>
			<view class="duyin">
				{{wordList.content.word.content.phone}}
			</view>
			
	<!-- 		<view>意思</view>
			<view class="yisi">
				<view class="yisi1" v-for="(yisi1,index) in dataArr[index1].content.word.content">
					{{yisi}}
				</view>
			</view> -->
			<br/>
			<view>词义</view>
			<view class="ciyi">
				<view class="yisi" v-for="(yisi,index) in dataArr[index1].content.word.content.trans">
					{{yisi.pos}}<br/>{{yisi.tranCn}}<br/>{{yisi.tranOther}}
				</view>
			</view>
			<br/>
			<view>例句</view>
			<view class="liju">
				<view class="yisi" v-for="(yisi,index) in dataArr[index1].content.word.content.sentence.sentences">
					{{yisi.sCn}}<br/>{{yisi.sContent}}	
				</view>
			</view>
			<br/>
			<text>短语</text>
			<scroll-view :scroll-y="true" style="white-space: nowrap;width: 100%;height: 300rpx;background-color: rgb(222,222,222);border-radius: 15rpx;" v-if="dataArr[index1].content.word.content.phrase.phrases.length==1">
			<view class="duanyu">
	
					<view class="yisi" v-for="(yisi,index) in dataArr[index1].content.word.content.phrase.phrases">
						{{index+1}}{{yisi.pCn}}<br/>{{yisi.pContent}}	
					</view>
			</view>
			</scroll-view>
			<br/>
			<view>同近</view>
			<view class="tongyi" v-if="dataArr[index1].content.word.content.syno.synos.length==1">
				<view class="yisi" v-for="(yisi,index2) in dataArr[index1].content.word.content.syno.synos">
					{{yisi.pos}}<br/>{{yisi.tran}}	
					
					<view class="tongyici" v-for="(tongyici,index3) in dataArr[index2].content.word.content.syno.synos[index2].hwds">
						{{tongyici.w}}
					</view>
				</view>
			</view>
			
		</view>
		

		
	</view>
</template>

<script>
	let id;
	export default {
		data() {
			return {
				dataArr:[]
			};
		},
		methods:{
			getWord(){
				console.log("aa")
				uniCloud.callFunction({
					name:"art_word_list_id",
					data:{
						id
					}
				}).then(res=>{
					//console.log(res);
					this.dataArr=res.result.data
					console.log(res)
				})
			}
		},
		onLoad(e) {
			//console.log(e)
			id=e.id;
			console.log(id)
			this.getWord();
		}
	}
</script>

<style lang="scss">
.root .wordList{
		
	.name{
		font-size: 60rpx;
		margin: 20rpx
	}
	width: auto;
	height: auto;
	background-color: rgb(250, 250, 250);
	margin:15rpx;
	border-radius: 15rpx;
	*{
		margin: 10rpx 10rpx 15rpx 20rpx
	}
	.duyin{
		background-color: rgb(222,222,222);
		width: auto;
		height: auto;
		border-radius: 15rpx;
	}
	.liju{
		background-color: rgb(222,222,222);
		width: auto;
		height: auto;
		border-radius: 15rpx;
	}
	.ciyi{
		background-color: rgb(222,222,222);
		width: auto;
		height: auto;
		border-radius: 15rpx;
	}
	.duanyu{
		background-color: rgb(222,222,222);
		width: auto;
		height: auto;
		border-radius: 15rpx;
	}
	.tongyi{
		background-color: rgb(222,222,222);
		width: auto;
		height: auto;
		border-radius: 15rpx;
	}
}
</style>
