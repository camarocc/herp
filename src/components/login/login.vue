<template>
  <div class="login">
    <div class="login-wrapper clear">
    	<div class="left login-desc">
    		<h2>欢迎登陆</h2>
    		<div class="info">综合业务管理放心更安心</div>
    		<p class="desc">无论你何时还是你在何地</p>
    		<div class="role">
    			<div class="role-item left">员工</div>
    			<div class="role-item left">客户</div>
    			<div class="role-item left">供应商</div>
    		</div>
    	</div>
    	<div class="login-form right">
    		<div class="logo">这里是logo</div>
    		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    		 <el-form-item label="" prop="region" class="relative">
			    <i class="icon ion-ios-people user"></i><el-select class="h50" v-model="ruleForm.region" placeholder="User roles">
			      <el-option label="1" value="1"></el-option>
			      <el-option label="2" value="2"></el-option>
			      <el-option label="3" value="3"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item class="h50 relative" label="" prop="username">
			    <i class="icon ion-person user"></i><el-input type="password" v-model="ruleForm.username" auto-complete="off" placeholder="User name" ></el-input>
			  </el-form-item>
			  <el-form-item class="h50 relative" label="" prop="pass" style="margin-bottom:15px;">
			    <i class="icon ion-locked user"></i><el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="Password"></el-input>
			  </el-form-item>
			  <el-form-item v-model="ruleForm.type" style="margin-bottom:0px;">
			      <el-checkbox class="remember-pass" v-model="ruleForm.type" label="Remember password" name="type"></el-checkbox>
			  </el-form-item>
				 <div v-if="!!loading" class="loading" v-loading="!!loading"  style="width: 100%"></div>
				 <p class="login-text" v-if="!loading">{{loginInfo}}</p>
			  <!-- <p>11</p> -->
			  <el-form-item>
			    <el-button class="submit-btn" type="primary" @click="submitForm('ruleForm')">Sign in</el-button>
			  </el-form-item>
			</el-form>
    	</div>
    </div>
  </div>
</template>

<script>

export default {
	data() {
			var validateusername = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('用户名不能为空！'));
				}else{
					callback();
				}
			};
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码!'));
				} else {
					callback();
				}
			};
			return {
				loading:false,
				loginInfo:'',
				ruleForm: {
					username: '',
					pass: '',
					type:false,
					region:1
				},
				rules: {
					username: [{
						validator: validateusername,
						trigger: 'blur'
					}],
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.loading=true
						this.loginAjax()
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			loginAjax(){
				setTimeout(()=>{
						this.loading=false,
						this.loginInfo='登陆成功'
						this.$store.dispatch('UserLogin','user')
						this.$router.push('/')
				},1000)
			}
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
	.login{
		position: relative;
		width: 100%;
		height:100%;
		background: url('../../assets/images/login.jpg');
		.h50{
			height:50px;
			width:100%;
			input{
				height:50px;
			}
			option{
				height:50px;
			}
		}
		.relative{
			position:relative;
			input{
				padding-left: 40px;
			}
		}
		.login-wrapper{
			position:absolute;
			top: 50%;
			left: 50%;
			width:1100px;
			height:460px;
			margin:-230px 0 0 -550px;
			background: rgba(0,0,0,0.50);
			.login-desc{
				padding: 60px 86px;
				h2{
					font-family: PingFangSC-Regular;
					height:48px;
					line-height:48px;
					font-size: 34px;
					color: #FFFFFF;
				}
				.info{
					margin-top: 20px;
					width:350px;
					height:140px;
					line-height:70px;
					font-family: PingFangSC-Regular;
					font-size: 50px;
					color: #FFFFFF;
				}
				.desc{
					height:33px;
					line-height:33px;
					font-family: PingFangSC-Regular;
					font-size: 24px;
					color: #FFFFFF;
				}
				.role{
					margin-top:25px;
					.role-item{
						width:80px;
						height:80px;
						margin-right: 50px;
						line-height:80px;
						text-align: center;
						font-family: PingFangSC-Regular;
						font-size: 20px;
						color: #FFFFFF;
						border: 1px solid #fff;
						border-radius:50%;
					}
					.role-item:last-child{
						margin-right:0px;
					}
				}
			}
			
			.login-form{
				width:450px;
				height:600px;
				padding: 0 56px 0 44px;
				background: #FFFFFF;
				box-shadow: 0 5px 30px 0 rgba(0,0,0,0.50);
				border-radius: 5px;
				margin: -70px 100px 0 0;
				.icon.user{
					position:absolute;
					top: 8px;
					left:10px;
					z-index:9;
					font-size:26px;
					color:#bfcbd9;
				}
				.logo{
					height:52px;
					margin:71px 0 45px;
				}
				.remember-pass{
					font-family: Helvetica;
					font-size: 12px;
					color: #20A0FF;
				}
				.submit-btn{
					width:100%;
					height:50px;
					color: #FFFFFF;
					span{
						font-family: 'ArialMT';
						font-size: 15px;
					}
				}
				.loading{
					height:50px;
					margin-bottom: 10px;
				}
				.login-text{
					height:50px;
					line-height: 50px;
					margin-bottom: 10px;
					text-align: center;
					color:#ff4949;
				}
				.el-table__empty-block{display: none!important;}
			}
			
		}
	}
</style>
