<!--  -->
<template>
    <div>
        <t-tabs size="large" v-model="current">
            <t-tab-panel :value="1" label="Office">
                <div class="panel-item">
                    <div class="commonText">
                        Our administration office is located at #07-77 of the RELC Building (30 Orange Grove Road),
                        tucked away in tranquil surroundings just minutes away from Orchard and Stevens MRT stations.
                    </div>
                    <div class="swiper-item-area">
                        <t-swiper :duration="300" :interval="2000" :navigation="{ placement: 'outside' }">
                            <t-swiper-item v-for="(item, index) in oneList" :key="index">
                                <div class="swiper-item">
                                    <t-image class="swiper-img" :src="item.img" fit="cover" position="center"
                                        :lazy="true" />
                                </div>
                            </t-swiper-item>
                        </t-swiper>
                    </div>
                </div>
            </t-tab-panel>
            <t-tab-panel :value="2" label="Classrooms">
                <div class="panel-item">
                    <div>
                        <div class="commonText">
                            Our classrooms are located at Level 5 and Level 7 of the RELC Building (30 Orange Grove
                            Road), equipped with multimedia teaching facilities.
                        </div>
                        <table border="0" width="100%" cellspacing="0" cellpadding="0">
                            <tbody>
                                <tr>
                                    <td style="text-align: center;"><strong>Classroom</strong></td>
                                    <td style="text-align: center;"><strong>Area (SQM)</strong></td>
                                    <td style="text-align: center;"><strong>Capacity (No. of students)</strong></td>
                                </tr>
                                <!-- <tr>
                                    <td style="text-align: center;">506</td>
                                    <td style="text-align: center;">100</td>
                                    <td style="text-align: center;">60</td>
                                </tr> -->
                                <tr>
                                    <td style="text-align: center;">07-01A</td>
                                    <td style="text-align: center;">94</td>
                                    <td style="text-align: center;">62</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="swiper-item-area two-swiper">
                        <t-swiper :duration="300" :interval="2000" :navigation="{ placement: 'outside' }">
                            <t-swiper-item v-for="(item, index) in twoList" :key="index">
                                <div class="swiper-item">
                                    <t-image class="swiper-img" :src="item.img" fit="cover" position="center"
                                        :lazy="true" />
                                </div>
                            </t-swiper-item>
                        </t-swiper>
                    </div>
                </div>
            </t-tab-panel>
        </t-tabs>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import one from '../../../assets/aboutUs/f/1-1.jpg'
import two from '../../../assets/aboutUs/f/2-1.jpg'
import three from '../../../assets/aboutUs/f/3-1.jpg'
import four from '../../../assets/aboutUs/f/4-1.jpg'
import five from '../../../assets/aboutUs/f/5-1.jpg'
import six from '../../../assets/aboutUs/f/6-1.jpeg'

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            current: 1,
            oneList: [
                { img: one },
                { img: two }
            ],
            twoList: [
                { img: three },
                { img: four },
                { img: five },
                { img: six }
            ],
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style scoped lang="less">
@media (max-width: 720px) {
    .swiper-item-area {
        width: 100% !important;
        margin-left: 0 !important;
        margin-bottom: 100px !important;
        height: 550px !important;
        margin-top: 60px;
    }

    .panel-item {
        display: block !important;
    }
}

/deep/ .t-tabs__nav-item.t-is-active {
    color: #f77300 !important;
}

/deep/ .t-tabs__bar {
    background-color: #f77300 !important;
}

/deep/ .t-tabs__nav-item-text-wrapper {
    font-size: 30px !important;
    margin: 0 auto;
}

/deep/ .t-tabs__nav-item-wrapper {
    padding: 0 20px !important;
}

/deep/ .t-tabs__nav-scroll {
    justify-content: center;
}

.panel-item {
    margin-top: 50px;
    display: flex;
}

.swiper-item-area {
    width: 1100px;
    margin-left: 50px;
    height: 410px;
}

.swiper-item {
    width: 100%;
}

.swiper-img {
    width: 100%;
}

.two-swiper {
    width: 820px;
}

td {
    padding: 10px 15px;
    border-top: none;
    transition: all .2s;
    height: 50px;
    font-size: 20px;
}

table:not(.shop_table)>tbody>tr:nth-child(even)>td, table:not(.shop_table)>tbody>tr:nth-child(even)>th {
    background-color: rgba(234, 234, 234, .25);
}

/deep/.t-swiper__arrow--default .t-swiper__arrow-left,
/deep/.t-swiper__arrow--default .t-swiper__arrow-right {
  width: 40px;
  height: 40px;
  background-color: rgba(23, 44, 71, 0.7);
  border-radius: 50%;
}

/deep/.t-swiper__arrow--default .t-swiper__arrow-left {
  left: 20px;
}

/deep/.t-swiper__arrow--default .t-swiper__arrow-right {
  right: 20px;
}

/deep/.t-swiper__arrow svg.t-icon {
  width: 40px;
  height: 40px;
}
</style>