<template>
    <div class="recommend-list">
        <h4>推荐酒店</h4>
        <ul>
            <li v-for="v in recommendlist" :key="v.id">
                <div class="list-left">
                    <div class="list-left-img">
                        <img :src="`${v.img_url}`" alt="">
                    </div>
                    <div class="list-left-title">
                        <div class="list-left-tagandtitle">
                            <h4>{{ v.name }}</h4>
                            <img :src="`${v.staring_url}`" alt="">
                            <span class="badge-thumb"></span>
                        </div>
                        <div class="list-left-transport">
                            <p>{{ v.transport }}</p>
                        </div>
                        <div class="list-left-tag">
                            <el-tag  class="ml-2" type="danger" effect="plain" v-for="(k,i) in v.tag" :key="i">{{ k }}</el-tag>
                        </div>
                    </div>
                </div>
                <div class="list-right" >
                    <div class="list-right-comment">
                        <div class="list-right-describe">
                            <p>好</p>
                            <a href="#">{{ v.comment.a }}</a>
                        </div>
                        <div class="list-right-score">
                            <p>{{ v.comment.score }}</p>
                        </div>
                    </div>
                    <div class="list-right-price">
                        <p>{{ v.comment.price }}</p>
                         <el-button type="primary">查看详情</el-button>

                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup >
import {ref} from 'vue'
let recommendlist=ref([
    {id:1,name:'北京首都宾馆',img_url:'1.webp',transport:'天安门/王府井|距市中心直线310米',staring_url:'star5.jpg',tag:['网球场','桌球室','免费停车','健身室','商务中心','SPA','会议厅'],comment:{score:'4.8',a:'3089条点评',price:'￥2099'}},
    {id:1,name:'北京京伦饭店',img_url:'2.webp',transport:'国贸CBD|距市中心直线4.1公里',staring_url:'star4.jpg',tag:['停车场','健身房','会议厅','行李寄存','商务中心','SPA','咖啡厅'],comment:{score:'4.5',a:'1790条点评',price:'￥1299'}},
    {id:1,name:'北京新世界中心同派酒店',img_url:'3.webp',transport:'前门/天坛公园/崇文门|距市中心直线1公里',staring_url:'star5.jpg',tag:['桌球室','闪住','行李寄存','酒吧'],comment:{score:'4.6',a:'1467条点评',price:'￥1499'}},
    {id:1,name:'行舍酒店(前门天坛店)',img_url:'4.webp',transport:'前门/天坛公园/崇文门|距市中心直线1.8公里',staring_url:'star4.jpg',tag:['桌球室','闪住','行李寄存','酒吧'],comment:{score:'4.7',a:'1638条点评',price:'￥2298'}},
    {id:1,name:'北京逸岚云景精品酒店',img_url:'5.webp',transport:'果园环岛/通州|距市中心直线22.1公里',staring_url:'star5.jpg',tag:['桌球室','闪住','行李寄存','酒吧'],comment:{score:'4.6',a:'1783条点评',price:'￥999'}},
])
</script>
<style scoped >
</style>