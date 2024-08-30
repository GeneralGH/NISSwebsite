<!--  -->
<template>
    <div>
        <div class="OrganizationalChartImg">
            <img src="../../../assets/aboutUs/OrganizationalChart.png" alt="">
            <div class="p-area p-one" @click="openDetail(DeanOffice)"></div>
            <div class="p-area p-two" @click="openDetail(MBA)"></div>
            <div class="p-area p-three" @click="openDetail(ExecutiveEducation)"></div>
            <div class="p-area p-four" @click="openDetail(HR)"></div>
        </div>
        <h4><em style="font-weight: normal;">Managers: Mr. Wu Ye, Dr. Yu Ting</em></h4>
        <t-dialog :visible.sync="visible" :footer="false">
            <div class="info-item" v-for="item in infoList" :key="item">{{ item }}</div>
        </t-dialog>
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
            infoList: [],
            DeanOffice: [
                'Executive Dean: Mr. Wu Ye',
                'Executive Provost: Dr. Yu Ting',
                'Academic Board',
                'Examination Board'
            ],
            MBA: [
                'Ms. Wang Shaojun'
            ],
            ExecutiveEducation: [
                'Mr. Yao Zongtuo',
                'Ms. Wang Chunjuan'
            ],
            HR: [
                'Mr. Wu Ye',
                'Ms. Edna Lee'
            ],
            visible: false
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        openDetail(list) {
            this.infoList = list
            this.visible = true
        }
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
    .OrganizationalChartImg {
        width: 100% !important;
    }

    .p-area {
        width: 180px !important;
        height: 75px !important;
    }

    .p-one {
        top: 25px !important;
        left: 240px !important;
    }

    .p-two {
        top: 155px !important;
        left: 20px !important;
    }

    .p-three {
        top: 145px !important;
        left: 240px !important;
    }

    .p-four {
        top: 155px !important;
        left: 470px !important;
    }
}


.OrganizationalChartImg {
    width: 70%;
    margin: 0 auto;
    position: relative;
}

img {
    width: 100%;
}

.p-area {
    position: absolute;
    /* background: red; */
    width: 300px;
    height: 130px;
    cursor: pointer;
}

.p-one {
    top: 30px;
    left: 400px;
}

.p-two {
    top: 250px;
    left: 30px;
}

.p-three {
    top: 240px;
    left: 400px;
}

.p-four {
    top: 260px;
    left: 760px;
}

.info-item {
    font-size: 20px;
    margin-bottom: 20px;
}
</style>