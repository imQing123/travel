<template>
   <div class="common-layout">
    <el-container>
      <!-- 左侧导航栏 -->
      <NavMenu/>
      <el-container>
       <!-- 头部 -->
        <el-header>
          <headerNav/>
        </el-header>
        <el-main>
          <SearchList/>
          <TopFilter/>
          <!-- 推荐酒店 -->
          <Recommend/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup >
import {ref} from 'vue'
import NavMenu from './navMenu.vue'
import HeaderNav from './haederNav.vue'
import SearchList from './searchList.vue'
import TopFilter from './topfilter.vue'
import Recommend  from './recommend.vue'
</script>
<style scoped >
</style>