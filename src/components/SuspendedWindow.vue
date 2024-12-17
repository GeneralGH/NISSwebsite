<!--  -->
<template>
    <div class="suspendedWindow">
        <div class="cover"></div>
        <div class="topArea">
            <div class="content-area">
                <div style="display: flex; flex-wrap: wrap;">
                    <div class="content-item" v-for="(item, index) in projectList" :key="index">
                        <div class="name">{{ userLanguage == '1' ? item.name : item.nameEn }}</div>
                        <div class="title" @click="toPage(item)" @mouseenter="imgChange(item)"
                            @mouseleave="imgHide(item)">{{ userLanguage == '1' ? item.title : item.titleEn }}</div>
                    </div>
                </div>
                <div>
                    <t-image v-show="imgShow" class="project-img" :src="currentIMG" fit="cover" position="center"
                        :lazy="true" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import MBA from '../../assets/home/mba2.jpg'
import NANTE from '../../assets/home/nante.jpg'

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            MBA: MBA,
            NANTE: NANTE,
            projectList: [
                { name: '硕士课程项目', nameEn: "Master's Program", title: '暨南大学中文MBA(新加坡班)', titleEn: 'JNU MBA Program (Mandarin)', path: "/jnumba", imgObj: MBA },
                { name: '博士课程项目', nameEn: 'Doctorate Program', title: '南特高等商学院亚太中文工商管理博士', titleEn: 'Audencia Business School Asia-pacific Doctor of Business Administration Program (Mandarin)', path: "/DBArouter", imgObj: NANTE },
                /* { name: '高管教育', title: '高管教育' }, */
            ],
            imgShow: false,
            currentIMG: null
        };
    },
    computed: {
        userLanguage() {
            return this.$store.state.userLanguage;
        },
    },
    watch: {
        userLanguage(newVal) { },
    },
    //方法集合
    methods: {
        toPage(item) {
            this.$router.push(item.path)
        },

        imgChange(item) {
            this.imgShow = true
            this.currentIMG = item.imgObj
        },

        imgHide() {
            this.imgShow = false
            this.currentIMG = null
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
.cover {
    height: 100px;
}

.suspendedWindow {
    width: 100%;
    /* height: 150vh; */
    opacity: 1;
    /* backdrop-filter: blur(20px);
    background: #10253dde; */
    margin-top: -100px;

    .topArea {
        height: 560px;
        background: white;
        -moz-box-shadow: 0px 5px 20px #6E6E6E;
        -webkit-box-shadow: 0px 5px 20px #6E6E6E;
        box-shadow: 0px 5px 20px #6E6E6E;
    }

    .content-area {
        width: 1200px;
        margin: 0 auto;
        padding-top: 85px;
        display: flex;
        justify-content: space-between;

        .content-item {
            width: 340px;
            height: 190px;

            div {
                color: #172C47;
            }

            .name {
                font-size: 18px;
                opacity: 0.8;
                font-weight: 300;
                margin-bottom: 10px;
            }

            .title {
                cursor: pointer;
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