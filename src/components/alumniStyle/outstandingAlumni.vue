<!--  -->
<template>
    <div class="alumni-list">
        <div class="alumni-item" v-for="item in list" :key="item.id">
            <div class="alumni-img">
                <t-image class="alumni-cover" :src="item.url" fit="cover" position="center" :lazy="true" />
                <div class="alumni-title">{{ item.grade }}</div>
            </div>
            <div class="alumni-name">{{ item.name }}</div>
            <div class="alumni-position">{{ item.workPost }}</div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import outstanding from '../../api/outstanding';

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            listQuery: {
                current: 1,
                size: 6,
                language: ''
            },
            list: []
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        initList() {
            this.$request.post(outstanding.getOutstandingListPageUrl, this.listQuery)
                .then(res => {
                    res.data.data.list = res.data.data.list.map((item) => { return {
                    ...item,
                    url: JSON.parse(item.image).url
                } })
                    this.list = res.data.data.list
                })
        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.initList()
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
.alumni-list {
    display: flex;
    gap: 29px;
    flex-wrap: wrap;

    .alumni-item {
        width: 354px;
        margin-bottom: 40px;

        .alumni-img {
            width: 100%;
            height: 472px;
            position: relative;

            .alumni-cover {
                position: absolute;
                width: 354px;
                height: 472px;
            }

            .alumni-title {
                position: absolute;
                bottom: 0;
                width: 100%;
                text-align: center;
                height: 60px;
                background: rgba(23, 44, 71, 0.86);
                border-radius: 0px 0px 24px 24px;
                font-weight: 500;
                font-size: 24px;
                color: #FFFFFF;
                line-height: 60px;
                z-index: 100;
            }
        }

        .alumni-name {
            font-weight: 500;
            font-size: 32px;
            line-height: 42px;
            margin: 20px 0 10px 0;
        }

        .alumni-position {
            font-weight: 500;
            font-size: 24px;
            line-height: 42px;
        }
    }
}
</style>