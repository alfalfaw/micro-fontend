<template>
  <div id="base">
    <el-menu :router="true" mode="horizontal" :default-active="$route.path">
      <el-menu-item index="/">Base应用</el-menu-item>
      <el-menu-item index="/vue">Vue应用</el-menu-item>
      <el-menu-item index="/react">React应用</el-menu-item>
    </el-menu>
    <!-- 默认应用的挂载位置 -->
    <router-view></router-view>
    <!-- vue应用的挂载位置 -->
    <div id="vue"></div>
    <!-- React应用的挂载位置 -->
    <div id="react"></div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style></style>
