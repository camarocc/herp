<template>
	<div class="menu">
	
		<el-menu default-active="2" class="el-menu-vertical-demo" :router="true" @open="handleOpen" @close="handleClose" theme="dark">
			<el-menu-item index="index" class="font16 el-menu-item" style="padding-left:30px;"><i class="icon ion-ios-home-outline" style="font-size:20px;margin-right:5px"></i><span class="menu-item-title">Home</span></el-menu-item>
			<el-submenu index="1">
				<template slot="title"><span class="font16 el-menu-item" style="padding-left: 10px;"><i class="icon icon-menu8"></i><span class="menu-item-title">报价管理</span></span></template>

					<el-menu-item index="hello">选项1</el-menu-item>
					<el-menu-item index="1-2">选项2</el-menu-item>
					<el-menu-item index="1-3">选项3</el-menu-item>
				<el-submenu index="1-4">
					<template slot="title">选项4</template>
					<el-menu-item index="1-4-1">选项1</el-menu-item>
				</el-submenu>
			</el-submenu>
		</el-menu>

	</div>
</template>

<script>
	export default {
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style lang="less">
	.menu{
		width:100%;
		.icon{
			  font-size: 20px;
		    color: #717c83;
		    margin-right: 5px;
		    vertical-align: top;
		}
		.menu-item-title{
			    display: inline-block;
    			vertical-align: top;
		}
		.el-menu-item,.el-submenu__title{
			background: #2A3339;
			color:#bfcbd9;
		}
		.el-submenu__title{
			&:hover{
				.el-menu-item{
				background-color: #48576a;

				}
			}
		}
	}
</style>
