<!--  -->
<template>
    <div>
        <pageHeader />
        <div class="page-area">
            <div class="party">
                <div class="party-content">
                    <p>
                        感谢您对暨南大学新加坡MBA项目的关注，如果您希望进一步了解项目，请准确填写下列信息，我们的项目负责老师会尽快与您联系。
                    </p>
                    <p>
                        您可以拨打+65 6530 3520，直接联络我们，资深老师帮你深入了解暨南大学新加坡MBA项目及申请流程。
                    </p>
                </div>
            </div>

            <div>
                <t-select :options="options1" clearable placeholder="请选择云解决方案">
                    <div slot="panelTopContent" style="padding: 6px 6px 0 6px">
                        <div>上午</div>
                        <div>下午</div>
                    </div>
                </t-select>
            </div>
        </div>
        <PageFooter />
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
            options1: [
        { label: '云服务器', value: '1' },
        { label: '云数据库', value: '2' },
        { label: '域名注册', value: '3' },
      ]
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
/deep/.page-area {
    width: 1200px;
    margin: 0 auto;
    padding: 80px 0;

    .party {
        margin-bottom: 80px;
        color: #172C47;

        .party-content {
            box-sizing: border-box;
            padding: 0 40px;
            font-weight: 500;
            font-size: 24px;
            line-height: 43px;

            p {
                font-weight: 500;
                font-size: 24px;
                line-height: 43px;
            }
        }
    }
}
</style>