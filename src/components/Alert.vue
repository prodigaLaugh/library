<template>
	<div class="alert" v-if="flag">
		<span @click="close">关一下</span>
		<slot name="header"></slot>
		呵呵 别瞎点
		<slot name="footer"></slot>
	</div>
</template>

<script>
	export default{
		props:['flag'],
		methods:{
			close(){
				this.$emit('update:flag', false); //触发 input 事件，并传入新值
			}
		}
	}
</script>

<style scoped>
	.alert{
		position:fixed;
		left:0;
		right:0;
		top:0;
		bottom:0;
		margin:auto;
		background:rgba(0,0,0,.8);
		color:#fff;
		width:300px;
		height:300px;
		line-height:50px;
	}
	.alert span{
		position:absolute;
		right:10px;
		top:10px;
		line-height:16px;
		font-size:14px;
		cursor:pointer;
	}
	
</style>
