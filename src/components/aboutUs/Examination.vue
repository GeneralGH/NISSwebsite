<!--  -->
<template>
    <div>
        <t-tabs size="large" v-model="current">
            <t-tab-panel :value="1" label="Academic Board">
                <div class="commonText">
                    <p>The Academic Board of Nanyang Institute of Social Sciences is responsible for:</p>
                    <ul>
                        <li>Developing and reviewing the policies and procedures on all academic matters of NISS. These
                            include ensuring that the content and duration of the modules and subjects as well as entry
                            and graduation requirements of the courses are appropriate and approving the deployment of
                            teachers based on the requirements stipulated by the CPE of Singapore.</li>
                        <li>Facilitating NISS to implement and comply with the policies and procedures developed.</li>
                        <li>Reviewing the academic policies and procedures annually.</li>
                    </ul>

                </div>
            </t-tab-panel>
            <t-tab-panel :value="2" label="Examination Board">
                <div class="commonText">
                    <p>The Examination Board of Nanyang Institute of Social Sciences is responsible for developing
                        examination and assessment procedures, such as to develop and facilitate the implementation of
                        procedures to:</p>
                    <ul>
                        <li>Ensure the security of examination scripts and answer scripts.</li>
                        <li>Ensure the proper conduct of examinations and assessments.</li>
                        <li>Define and ensure the proper discharge of duties and responsibilities of invigilators and
                            markers.</li>
                        <li>Conduct moderation of examination and assessment marks.</li>
                        <li>Handle appeals from students with regard to examination or assessment matters.</li>
                    </ul>

                </div>
            </t-tab-panel>
        </t-tabs>
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
            current: 1
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
</style>