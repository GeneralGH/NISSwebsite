<!--  -->
<template>
    <div :class="['item-area', { 'gradient-border': isRotated || chooseLabel !== '' }]"
        :style="isRotated ? 'z-index: 100;' : ''" @click="rotateArrow">
        <div class="select-area">
            <div class="select-top">
                <div :style="!chooseLabel ? 'color: #999;' : ''">{{ chooseLabel ? chooseLabel : placeholder }}</div>
                <div class="arrow-container">
                    <ChevronUpIcon class="arrow" :class="{ rotated: isRotated }" />
                </div>
            </div>
            <div v-show="isRotated">
                <div class="select-line"></div>
                <div v-if="isTime">
                    <div style="width: 100%; display: flex; align-items: center; justify-content: space-around;">
                        <div :class="timeType == 1 ? 'time-interval-check' : 'time-interval'"
                            @click.stop="timeType = 1">上午</div>
                        <div :class="timeType == 2 ? 'time-interval-check' : 'time-interval'"
                            @click.stop="timeType = 2">下午</div>
                    </div>
                    <div class="select-line"></div>
                </div>
                <div class="options-list">
                    <div :class="item.label == chooseLabel ? 'option-check' : 'option-item'" v-for="item in options"
                        :key="item.value" @click.stop="optionChange(item)">{{ item.label }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { ChevronUpIcon } from 'tdesign-icons-vue';
import timelist from './timeData'

export default {
    //import引入的组件需要注入到对象中才能使用
    components: { ChevronUpIcon },
    data() {
        //这里存放数据
        return {
            hasFocus: false,
            isRotated: false,
            chooseLabel: '',
            timeType: 1, // 1上午 2下午
        };
    },
    props: {
        placeholder: { type: String, default: '' },
        value: { type: String, default: '' },
        options: { type: Array, default: () => [] },
        isTime: { type: Boolean, default: false }
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {
        'timeType'(val) {
            if (this.isTime) {
                this.chooseLabel = ''
                this.options = val == 1 ? timelist.morningTimeSlots : timelist.afternoonTimeSlots
            }
        }
    },
    //方法集合
    methods: {
        rotateArrow() {
            this.isRotated = !this.isRotated
        },

        optionChange(item) {
            this.chooseLabel = item.label
            this.isRotated = false
            this.$emit('optionChange', item)
        },

        handleClickOutside(event) {
            if (!this.$el.contains(event.target)) {
                this.isRotated = false;
            }
        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        if (this.isTime) {
            this.options = timelist.morningTimeSlots
        }
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
    }, //生命周期 - 销毁之前
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
    user-select: none;
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
    max-height: 690px;
    overflow-y: auto;

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
        background: #172C47;
        color: #FF9C00;
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

.time-interval {
    width: 134px;
    font-weight: 500;
    text-align: center;
    border-radius: 33px;
    height: 66px;
    line-height: 66px;
    cursor: pointer;
    font-size: 28px;
}

.time-interval-check {
    font-weight: 500;
    text-align: center;
    border-radius: 33px;
    width: 134px;
    height: 66px;
    line-height: 66px;
    cursor: pointer;
    font-size: 28px;
    background: #172C47;
    color: #FF9C00;
}

/* 修改滚动条样式 */
::-webkit-scrollbar {
    width: 10px;
    height: 80px;
}

::-webkit-scrollbar-thumb {
    background: rgba(23, 44, 71, 0.1);
    border-radius: 5px;
}

::-webkit-scrollbar-track {
    background: transparent;
}
</style>