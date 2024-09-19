<!--  -->
<template>
    <div class="suspendedWindow">
        <div class="topArea">
            <div class="content-area">
                <div style="display: flex; flex-wrap: wrap;">
                    <div class="content-item" v-for="(item, index) in projectList" :key="index">
                        <div class="name">{{ item.name }}</div>
                        <div class="title">{{ item.title }}</div>
                    </div>
                </div>
                <div>
                    <t-image class="project-img" :src="MBA" fit="cover" position="center"
                        :lazy="true" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import MBA from '../../assets/home/mba.png'

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            projectList: [
                { name: 'MBA课程项目', title: '暨南大学新加坡中文MBA' },
                { name: 'DBA课程项目', title: '南特商学院亚太中文DBA' },
                { name: '高管教育', title: '高管教育' },
            ],
            MBA: MBA
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
.suspendedWindow {
    width: 100%;
    height: 100vh;
    opacity: 1;
    backdrop-filter: blur(20px);
    background: #10253dde;

    .topArea {
        height: 560px;
        background: white;
    }

    .content-area {
        width: 1100px;
        margin: 0 auto;
        padding-top: 85px;
        display: flex;

        .content-item {
            width: 320px;
            height: 190px;

            div {
                cursor: pointer;
                color: #172C47;
            }

            .name {
                font-size: 18px;
                opacity: 0.8;
                font-weight: 300;
                margin-bottom: 10px;
            }
            
            .title {
                font-weight: 500;
                font-size: 20px;
            }

            .title:hover {
                color: #E98225;
            }
        }
    }
}

.project-img {
    width: 456px;
    height: 392px;
    border-radius: 30px;
}
</style>