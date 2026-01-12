<!--  -->
<template>
    <div>
        <pageHeader />
        <div class="main">
            <div class="links">
                <div class="linktext"><a :href="fileUrl">Sample of the Standard Private Education Institution-Student Contract Version 4.0</a></div>
                <t-button size="large" @click="downPdf(fileUrl)">Download</t-button>
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
            fileUrl: 'https://www.niss.edu.sg/api//profile/upload/2025/03/21/PRIVATEEDUCATION INSTITUTION-STUDENT CONTRACT_20250321210449A025.pdf'
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
       async downPdf(url) {
            try {
                const response = await fetch(url);
                const blob = await response.blob();
                const blobUrl = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = blobUrl;
                link.download = 'Sample of the Standard Private Education Institution-Student Contract Version 4.0.pdf';
                document.body.appendChild(link);
                link.click();
                window.URL.revokeObjectURL(blobUrl); // 释放内存
                document.body.removeChild(link);
            } catch (error) {
                console.error('下载失败:', error);
            }
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

<style scoped>
.main {
    min-height: 800px;
}

.links {
    margin: 0 auto;
    width: 800px;
    text-align: center;
    box-sizing: border-box;
    padding-top: 300px;
}

.linktext {
    margin-bottom: 50px;
}
</style>