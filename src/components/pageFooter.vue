<!--  -->
<template>
    <div class='footer-area'>
        <div class="footer-div">
            <div class="toplist-area">
                <div class="list-item" v-for="(item, index) in topList">
                    <div class="item-name">{{ item.name }}</div>
                    <div class="item-child">
                        <div v-for="(i) in item.list" @click="jump(i.path)">{{ i.name }}</div>
                    </div>
                </div>
            </div>

            <div class="webInfo">
                <div class="logo">
                    <img src="../../assets/header/logo.png" alt="">
                </div>

                <div class="registration-info">
                    <div>Registration No. 20183165E</div>
                    <div>Registration Period: 10.05 2024 - 09.05 2028</div>
                </div>
                <div class="contact-information">
                    <img src="../../assets/footer/facebook.png" alt="">
                    <img src="../../assets/footer/ins.png" alt="">
                    <img src="../../assets/footer/weixin.png" alt="">
                    <img src="../../assets/footer/phone.png" alt="">
                </div>
            </div>

            <div class="webSign">@ 2024 NISS. All rights reserved. </div>

            <div class="back-top-area">
                <div class="order-message-area" @click="jump('/consultationForm')">
                    <div>预约一对一咨询</div>
                    <img src="../../assets/footer/Side.png" alt="">
                </div>
                <div class="back-top">
                    <img src="../../assets/footer/backTop.png" alt="" @click.stop="toTop">
                </div>
            </div>
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
            topList: [
                {
                    name: '项目导航',
                    list: [
                        { name: 'MBA', path: '/courseProjects' },
                        { name: 'DBA', path: '' },
                        { name: '高管教育', path: '' }
                    ]
                },
                {
                    name: '相关链接',
                    list: [
                        { name: '联系我们', path: '/aboutUs' },
                        { name: '相关政策', path: '' }
                    ]
                },
                {
                    name: '联系我们',
                    list: [
                        { name: `地址：30 Orange Grove Road, #07-77 RELC Building，Singapore 258352` },
                        { name: '邮箱：Enquiry@niss.edu.sg' },
                        { name: '电话：+65 6592 0000' }
                    ]
                }
            ]
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        jump(path) {
            if (!path) {
                return
            }
            this.$router.push(path)
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // 可选，使用平滑滚动效果
            });
        },

        toTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // 可选，使用平滑滚动效果
            });
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
.back-top-area {
    position: absolute;
    right: -265px;
    top: 197px;

    .order-message-area {
        width: 225px;
        height: 50px;
        padding: 0 3px;
        box-sizing: border-box;
        background: #FFFFFF;
        border-radius: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 22px;
        cursor: pointer;

        div {
            font-weight: bold;
            font-size: 20px;
            color: #03499E;
            line-height: 46px;
            margin-left: 15px;
        }

        img {
            width: 45px;
            height: 45px;
            display: block;
        }
    }

    .back-top {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        img {
            width: 48px;
            height: 48px;
            cursor: pointer;
        }
    }
}

.footer-area {
    height: 524px;
    background: linear-gradient(180deg, #0D3D91 0%, #181818 100%);
    box-sizing: border-box;
    padding: 45px 0;

    .footer-div {
        width: 1200px;
        margin: 0 auto;
        position: relative;
    }

    .toplist-area {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .list-item {
            flex: 1;

            .item-name {
                font-weight: 500;
                font-size: 20px;
                color: #FFFFFF;
                margin-bottom: 40px;
            }

            .item-child {
                font-weight: 400;
                font-size: 18px;
                color: #FFFFFF;
                cursor: pointer;

                div {
                    margin-bottom: 20px;
                    opacity: 0.7;
                }
            }
        }
    }

    .webInfo {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 2px solid rgba(113, 155, 206, 0.3);
        border-bottom: 2px solid rgba(113, 155, 206, 0.3);
        padding: 42px 0;

        .logo {
            flex: 1;
        }

        .logo img {
            width: 181px;
            height: 53px;
            display: block;
        }

        .registration-info {
            opacity: 0.7;
            font-weight: 300;
            font-size: 18px;
            color: #FFFFFF;
            flex: 1;

            :first-child {
                margin-bottom: 10px;
            }
        }

        .contact-information {
            flex: 1;
            display: flex;
            justify-content: end;

            img {
                width: 46px;
                height: 46px;
                margin-left: 24px;
                display: block;
                cursor: pointer;
            }
        }
    }

    .webSign {
        opacity: 0.7;
        color: #FFFFFF;
        font-weight: 300;
        font-size: 18px;
        margin-top: 50px;
    }
}
</style>