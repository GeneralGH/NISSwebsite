<!--  -->
<template>
    <div :class="['item-area', { 'gradient-border': isRotated || chooseLabel !== '' }]" :style="isRotated ? 'z-index: 100;' : ''"  @click="rotateArrow">
        <div class="select-area" >
            <div class="select-top">
                <div :style="!chooseLabel ? 'color: #999;' : ''">{{ chooseLabel ? chooseLabel : placeholder }}</div>
                <div class="arrow-container">
                    <ChevronUpIcon class="arrow" :class="{ rotated: isRotated }" />
                </div>
            </div>
            <div v-show="isRotated">
                <div class="select-line"></div>
                <div class="options-list">
                    <div :class="item.label == chooseLabel ? 'option-check' : 'option-item'" v-for="item in options" :key="item.value" @click.stop="optionChange(item)">{{ item.label }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { ChevronUpIcon } from 'tdesign-icons-vue';

export default {
    //import引入的组件需要注入到对象中才能使用
    components: { ChevronUpIcon },
    data() {
        //这里存放数据
        return {
            hasFocus: false,
            isRotated: false,
            chooseLabel: ''
        };
    },
    props: {
        placeholder: { type: String, default: '' },
        value: { type: String, default: '' },
        options: { type: Array, default: () => [] }
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        rotateArrow() {
            this.isRotated = !this.isRotated
        },

        optionChange(item) {
            this.chooseLabel = item.label
            this.isRotated = false
            this.$emit('optionChange', item)
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
@import url('./index.less');

.arrow-container {}

.arrow {
    transition: transform 0.3s ease;
    width: 35px;
    height: 35px;
}


.rotated {
    transform: rotate(180deg);
}

.select-area {
    width: 100%;
    min-height: 80px;
    background-color: white;
    border-radius: 16px;
    padding: 20px 25px;
    box-sizing: border-box;
    user-select:none;
}

.select-top {
    font-weight: 500;
    font-size: 28px;
    color: #172C47;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.select-line {
    width: 100%;
    height: 1px;
    background-color: #03499E;
    opacity: 0.11;
    margin: 20px 0;
    box-sizing: border-box;
}

.options-list {
    color: #172C47;

    .option-item {
        font-weight: 500;
        text-align: center;
        margin-bottom: 20px;
        border-radius: 33px;
        width: 100%;
        height: 66px;
        line-height: 66px;
        cursor: pointer;
        font-size: 28px;
    }

    .option-item:hover {
        background-color: #f3f3f3;
    }

    .option-check {
        font-weight: 500;
        text-align: center;
        margin-bottom: 20px;
        border-radius: 33px;
        width: 100%;
        height: 66px;
        line-height: 66px;
        cursor: pointer;
        font-size: 28px;
        background: #172C47;
        color: #FF9C00;
    }
}
</style>