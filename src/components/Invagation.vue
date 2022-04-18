<template>
  <div id="invagation">
    <el-header style="padding: 0px; margin: 0 auto;height: 100px; display: table-cell;">
        <div class="logo1" style="float: left; margin: 0 auto; vertical-align: middle;"><img src="../assets/img/logo.png" height="100px" width="650px"></div>
        <div class="logo2" style="float: left; margin: 0 auto; vertical-align: middle;"><img src="../assets/img/motto.png" height="60px" width="400px"></div>
      </el-header>
      <el-header style="padding: 0px;">
        <el-menu
          :default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item style="text-align: center;font-size: larger;">智能财务(软件工程)</el-menu-item>
          <el-input placeholder="请输入内容" style="width: 200px" id="search">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-menu-item index="activeIndex2" style="float:right">文章归档</el-menu-item>
          <router-link to="/add"><el-menu-item index="5" style="float:right">发布文章</el-menu-item></router-link>
          <router-link to="/person"><el-menu-item index="4" style="float:right">人员资料</el-menu-item></router-link>
          <el-menu-item index="3" disabled style="float:right">专业动态</el-menu-item>
          <el-menu-item index="2" style="float:right">专业介绍</el-menu-item>
          <router-link to="/"><el-menu-item index="1" style="float:right">主页</el-menu-item></router-link>
        </el-menu>
      </el-header>
  </div>
</template>

<script>

export default {
  name: 'invagation'
}
</script>

<style>
#search{
  margin: 10px auto;
}
</style>
