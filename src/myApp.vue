<template>
<div id="app">
  <h1>Hello App!</h1>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/message">Go to Message</router-link>
    <br>
    <router-link to="/demo">Go to Demo</router-link>
    <br>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>
</template>

<script>
export default {

};
</script>
<style scoped>
</style>