<template>
  <div class="index">
	<div class="top-wrapper clear">
		<div class="logo left"></div>
		<div class="right">
		<div class="left userdropdown">
			<div @click="dropdown" class="user">aa<i class="el-icon-arrow-down"></i>
				<ul class="color">
					<li><router-link to=''>用户信息</router-link></li>
					<li><router-link to=''>修改密码</router-link></li>
				</ul>
			</div>
		</div>
		<!-- 注销 -->
		<div class="cancellation right" @click="cancellation">
		</div>
		</div>
	</div>

	<div class="menu-wrapper left">
		<v-menu></v-menu>
	</div>
	<div class="content-wrapper">
  	 	<router-view></router-view>		
	</div>
  </div>
</template>

<script>
import vMenu from './menu.vue'
export default {
	data(){
		return{
			isDown:true
		}
	},
 	components:{vMenu},
 	methods:{
 		dropdown(){
 			this.isDown=false
 		},
 		 cancellation() {
        this.$confirm('您确定要注销吗？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        	// 确定
        }).catch(() => {      
        	// 取消
        });
      }
 	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.index{
	.top-wrapper{
		width:100%;
		height:72px;
		line-height:72px;
		background: rgba(32,160,255,1);
		.userdropdown{
			margin-right:30px;
			height:72px;
			line-height:72px;
			color:#fff;
			.user{
				position: relative;
				i{
					transition:all .3s
				}
				&:hover{
					ul{
						display:block;
					}
					i{
						transform:rotateZ(180deg)
					}
				}
				ul{
					z-index:1;
					position:absolute;
					overflow: hidden;
					top: 72px;
					display:none;
					left:50%;
					margin-left:-50px;
					width:100px;
					text-align: center;
					border:1px solid #BFCBD9;
					background:#fff;
					
					li{
						height:50px;
						line-height:50px;
						&:hover{
							background:rgba(209,219,229,1)
						}
					}
				}
			}
			i{
				margin-left:10px;
				vertical-align:middle;
			}
		}
		.cancellation{
			width:72px;
			height:72px;
			background: rgba(255,255,255,0.20);
		}
	}
	.menu-wrapper{
		width:220px;
	}
	.content-wrapper{
		margin-left:220px;
		border-left:1px solid #BFCBD9;
		padding-bottom: 65px;

	}
}
</style>
