<template>
  <div class="cont">000
 <!--  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="username">
    <el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label-width="100px">
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
</el-form> -->
  </div>
</template>

<script>
  export default {
    data() {
        let validateUser = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入用户名'));
          }else{
            callback()
          }
        }
        let validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          }else{
            callback()
          }
        };

        return {
          ruleForm2: {
            username: '',
            pass: ''
          },
          rules2: {
            username: [{
              validator: validateUser,
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
          let user = {
            user: this.ruleForm2.username,
            pass: this.ruleForm2.pass
          }
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log(user)
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.cont{
}
</style>
