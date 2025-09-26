<template>
<div class="banner">
<el-carousel height="150px">
    <el-carousel-item v-for="item in bannerlist" :key="item.id">
        <img :src="`${item.img_url}`" alt="">
         <!-- <img src="../assets/images/banner1.jpg" alt="">
         <img src="../assets/images/banner2.jpg" alt="">
         <img src="../assets/images/banner3.jpg" alt="">
         <img src="../assets/images/banner4.jpg" alt=""> -->

    </el-carousel-item>
</el-carousel>
</div>
</template>
<script setup >
import {ref} from 'vue'
let bannerlist=ref([
    {id:1,img_url:'banner1.jpg'},
    {id:2,img_url:'banner2.jpg'},
    {id:3,img_url:'banner3.jpg'},
    {id:4,img_url:'banner4.jpg'},
    {id:5,img_url:'banner5.jpg'},
])
</script>
<style scoped >
</style>