<!--  -->
<template>
    <div class="party">
        <div class="party-title">我们的教师群体</div>
        <div class="party-line"></div>

        <div>
            <div class="module-card-list">
                <div class="module-card" v-for="item in ourTeachersInfo">
                    <div>
                        <span class="item-value">{{ item.value }}</span>
                        <span class="item-unit">{{ item.unit }}</span>
                    </div>
                    <div class="item-name">{{ item.name }}</div>
                </div>
            </div>
        </div>

        <div class="party-info">
            <div v-html="htmlContent.content"></div>
        </div>

        <!-- <div class="party-info">
            <div style="flex: 1;">
                · 专职教师{{ ourTeachersInfo[0].value }}{{ ourTeachersInfo[0].unit }}<br><br>
                · {{ ourTeachersInfo[1].value }}{{ ourTeachersInfo[1].unit }}拥有博士学位
            </div>
            <div style="flex: 1;">
                · 教授、副教授{{ ourTeachersInfo[2].value }}{{ ourTeachersInfo[2].unit }}<br><br>
                · 博士生导师{{ ourTeachersInfo[3].value }}{{ ourTeachersInfo[3].unit }}
            </div>
        </div> -->

        <div class="party-slogan">
            <div class="party-slogan-line"></div>
            <div>高理论 ｜ 强实践 ｜ 精华商 ｜ 通国际</div>
            <div class="party-slogan-line"></div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            ourTeachersInfo: [
                { name: '专职教师', value: '140', unit: '位', id: 10 },
                { name: '博士学位教师', value: '92', unit: '%', id: 11 },
                { name: '教授、副教授', value: '114', unit: '位', id: 12 },
                { name: '博士生导师', value: '51', unit: '位', id: 13 }
            ],
            htmlContent: {
                content: '',
                contentEn: ''
            }
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        async initData() {
            this.ourTeachersInfo.forEach((item) => {
                this.$getPageContent(item.id)
                .then(res => {
                    item.name = res.title
                    item.value = res.content
                    item.unit = res.unit
                })
            })
            this.htmlContent = await this.$getPageContent(14)
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.initData()
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

<style scoped>
.module-card-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.module-card {
    width: 266px;
    height: 312px;
    margin: 0;
    padding: 60px 0 0 0;
    text-align: center;
}

.item-value {
    font-size: 90px;
    font-weight: bold;
}

.item-unit {
    font-size: 32px;
    font-weight: 600;
}

.item-name {
    margin-top: 40px;
    font-weight: 500;
    font-size: 20px;
}

.party-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 24px;
}

.party-slogan {
    font-weight: bold;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 100px;
}

.party-slogan-line {
    width: 265px;
    height: 1px;
    background-color: #172C47;
}
</style>