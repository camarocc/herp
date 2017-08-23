<template>
  <div class="menu">
  
    <el-menu default-active="2" class="el-menu-vertical-demo" :router="true" @open="handleOpen" @close="handleClose" theme="light">
      <el-menu-item index="index" class="font16" style="padding-left:30px;"><i class="icon ion-ios-home-outline" style="font-size:20px;color:#20a0ff;margin-right:5px"></i>Home</el-menu-item>
      <el-submenu index="1">
        <template slot="title"><span class="font16" style="padding-left:10px;">报价管理</span></template>

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

<style scoped lang="less">
  .menu{
    width:100%;
  }
</style>
