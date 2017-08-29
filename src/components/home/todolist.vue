<template>
  <div class="todolist">
	<div class="todo-item">
		<div class="title clear"><span class="left"></span>{{title}}<a href="" class="right">more</a></div>
		<ul class="list">
			<li class="clear" v-for="item in list"><span class="left" :title="item.text">{{item.text}}</span><b v-if="item.new" class="left new">NEW</b></li>
		</ul>
	</div>
  </div>
</template>

<script>
  export default {
  	props:{
  		title:{
  			type:String
  		},
  		list:{
  			type:Array
  		}
  	}
  }
</script>

<style scoped lang="less">
	.todolist{
		.todo-item{
			background:#f8f8f8;
			border: 1px solid #bfcbd9;
			border-top:none;
			.title{
				padding:12px 15px 7px;
				font-family: PingFangSC-Medium;
				font-size: 13px;
				color: #5E6D82;
				border-bottom: 1px solid #bfcbd9;
			}
			ul.list{
				padding:5px 15px 15px;
				font-size:13px;
				li{
					display:flex;
					height:18px;
					line-height:18px;
					margin-top:4px;
					font-size: 13px;
					color: #97A8BE;
					line-height: 25px;
					span{
						flex:1;
						 white-space:nowrap;  
						 overflow:hidden;
						 text-overflow : ellipsis ;
						 max-width:70%;
						font-family: PingFangSC-Regular;
					}
					.new{
						flex:0 0 30px;
						margin-left:28px;
						font-size: 12px;
						color: rgb(255,79,79);
					}
				}
			}
		}
	}
</style>
