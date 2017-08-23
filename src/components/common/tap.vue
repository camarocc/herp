<template>
  <div class="tap">
		<div class="tap-wrapper clear">
			<sup class="left tag font12">TAGS</sup><h3 class="left title font18">{{title}}</h3>
			<slot name="right"></slot>	
		</div>
  </div>
</template>

<script>
  export default {
  	props:{
		title:{
			type:String
		}
	},
  }
</script>

<style scoped lang="less">
.tap{
	.tap-wrapper{
		width:100%;
		height:50px;
		line-height:50px;
		padding-left: 32px;
		border-bottom:1px solid #BFCBD9;
		.tag{
			line-height:30px;
			margin-right:2px;
			color: #20A0FF;
			letter-spacing: 0;
		}
		.title{
			font-weight:400;
		}
	}
}
</style>
