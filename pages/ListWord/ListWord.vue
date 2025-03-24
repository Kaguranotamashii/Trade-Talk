<template>
	<view class="root">
		<view class="a" v-for="(a,index) in Data">
			{{Data[index]}}
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
				keywords:"",
				Data:[1231,214,324,32,423,432,432423,3231]
			}
		},
		methods:{
		},
		onLoad() {
		
		}
	}
</script>

<style>


</style>