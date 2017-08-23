<template>
  <div class="rectdata">
	<div class="rect" :style="{background:color}">
		<span>{{num}}<p>{{type}}</p></span>
	</div>
  </div>
</template>

<script>
  export default {
  	props:{
  		num:{
  			type:String
  		},
  		type:{
  			type:String
  		},
  		color:{
  			type:String
  		}
  	}
  }
</script>

<style scoped lang="less">
.rectdata{
	.rect{
		width:145px;
		height:110px;
		border-radius:4px;
		background: #20A0FF;
		box-shadow: 0 2px 4px 0 rgba(176,176,176,0.50);
		display:table;
		vertical-align:middle;
		// algin-item:center;
		span{
			display:table-cell;
			vertical-align:middle;
			text-align:center;
			font-family: PingFangSC-Medium;
			font-size: 16px;
			line-height:28px;
			color: #FFFFFF;
		}	
	}
}

</style>
