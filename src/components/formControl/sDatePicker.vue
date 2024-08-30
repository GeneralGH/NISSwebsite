<!--  -->
<template>
    <div :class="['item-area', { 'gradient-border': isRotated || chooseLabel !== '' }]"
        :style="isRotated ? 'z-index: 100;' : ''">
        <div class="select-area" @click="rotateArrow">
            <div class="select-top">
                <div class="placeholder" :style="!chooseLabel ? 'color: #999;' : ''">{{ chooseLabel ? chooseLabel :
                    placeholder }}</div>
                <div class="arrow-container">
                    <ChevronUpIcon class="arrow" :class="{ rotated: isRotated }" />
                </div>
            </div>
        </div>
        <div v-show="isRotated" class="date-area date-border" style="cursor: auto;">
            <div class="date">
                <div class="year-month-area">
                    <div class="month">
                        <sSelect :isDate="true" ref="monthSelect" @optionChange="monthChange" :type="'time'" :options="monthOptions"
                            :placeholder="'请选择月份'" />
                    </div>
                    <div class="year">
                        <sSelect :isDate="true" ref="yearSelect" @optionChange="yearChange" :type="'time'" :options="yearOptions"
                            :placeholder="'请选择年份'" />
                    </div>
                </div>

                <div class="day-area">
                    <div class="weekDays">
                        <div v-for="item in weekList" style=" flex-basis: 14.28%;">
                            <div class="day-item">{{ item }}</div>
                        </div>
                    </div>
                    <div class="weekDays">
                        <div v-for="item in preDayd" style="flex-basis: 14.28%;">
                            <div class="day-item" style="color: #999;">{{ preDays - (firstDay - 1 - item) }}</div>
                        </div>
                        <div v-for="item in dates" style="flex-basis: 14.28%;">
                            <div :class="['day-item', { 'day-item-check': item.date == currentDate }]"
                                @click="clickDay(item)">{{ item.date }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { ChevronUpIcon } from 'tdesign-icons-vue';
import sSelect from './sSelect.vue';

import moment from 'moment';

export default {
    //import引入的组件需要注入到对象中才能使用
    components: { ChevronUpIcon, sSelect },
    data() {
        //这里存放数据
        return {
            hasFocus: false,
            isRotated: false,
            chooseLabel: '',
            monthOptions: [
                { label: '1月 | January', value: '1' },
                { label: '2月 | February', value: '2' },
                { label: '3月 | March', value: '3' },
                { label: '4月 | April', value: '4' },
                { label: '5月 | May', value: '5' },
                { label: '6月 | June', value: '6' },
                { label: '7月 | July', value: '7' },
                { label: '8月 | August', value: '8' },
                { label: '9月 | September', value: '9' },
                { label: '10月 | October', value: '10' },
                { label: '11月 | November', value: '11' },
                { label: '12月 | December', value: '12' }
            ],
            yearOptions: [],
            month: '',
            year: '',
            weekList: ['一', '二', '三', '四', '五', '六', '日'],
            dates: [],
            currentDate: '',
            preDays: 30,
            firstDay: 1,
            preDayd: 0
        };
    },
    props: {
        placeholder: { type: String, default: '' }
    },
    computed: {
        userLanguage() {
            return this.$store.state.userLanguage;
        }
    },
    watch: {
        userLanguage(newVal) {
        },

        'firstDay'(val) {
            this.preDayd = val - 1
        }
    },
    //方法集合
    methods: {
        rotateArrow() {
            this.isRotated = !this.isRotated
            if (this.isRotated) {
                document.addEventListener('click', this.handleClickOutside);
                this.yearOptions = []
                const currentYear = new Date().getFullYear()
                for (let i = 0; i < 6; i++) {
                    this.yearOptions.push({ label: currentYear + i, value: currentYear + i })
                }
            } else {
                document.removeEventListener('click', this.handleClickOutside);
            }
        },

        initDate() {
      const date = new Date();
      let year = date.getFullYear().toString();
      let month = (date.getMonth() + 1).toString();

      const monthItem = this.monthOptions.find(option => option.value === month);
      this.$refs.monthSelect.chooseLabel = monthItem.label;
      this.$refs.yearSelect.chooseLabel = year;

      this.yearChange({ value: year });
      this.monthChange({ value: month });
    },

        monthChange(e) {
            if (!this.year) {
                this.$message.error('请先选择年份')
                return
            }
            this.month = e.value;
            this.dates = this.getDaysInMonth(this.year, this.month);

            this.getPreMonthDays()
            this.currentDate = ''
        },

        yearChange(e) {
            this.year = e.value;
            if (this.month) {
                this.dates = this.getDaysInMonth(this.year, this.month);
                this.getPreMonthDays()
            } else {
                this.dates = []
            }
            this.currentDate = ''
        },

        getDaysInMonth(year, month) {
      const daysInMonth = new Date(year, month, 0).getDate();
      const dates = [];
      const firstDay = new Date(year, month - 1, 1).getDay();

      for (let day = 1; day <= daysInMonth; day++) {
        const formattedDate = day.toLocaleString('en-US', { minimumIntegerDigits: 2 });

        dates.push({
          date: formattedDate,
        });
      }
      return dates;
    },

    getPreMonthDays() {
      let month = parseInt(this.month, 10) - 1;
      let year = parseInt(this.year, 10);
      if (month === 0) {
        year--;
        month = 12;
      }
      const days = new Date(year, month, 0).getDate();
      this.preDays = days;
    },

        clickDay(item) {
            this.currentDate = item.date
            this.isRotated = false
            this.chooseLabel = `${this.year}-${this.month}-${item.date}`
            this.$emit('optionChange', this.chooseLabel)
        },

        handleClickOutside(event) {
            if (!this.$el.contains(event.target)) {
                this.isRotated = false;
            }
        },
        //生命周期 - 创建完成（可以访问当前this实例）
        created() {

            /* this.dates = this.getDaysInMonth(this.year, this.month);
            this.getPreMonthDays(); */
        },
        //生命周期 - 挂载完成（可以访问DOM元素）
        mounted() {
        },
        beforeCreate() { }, //生命周期 - 创建之前
        beforeMount() { }, //生命周期 - 挂载之前
        beforeUpdate() { }, //生命周期 - 更新之前
        updated() { }, //生命周期 - 更新之后
        beforeDestroy() {  }, //生命周期 - 销毁之前
        destroyed() { }, //生命周期 - 销毁完成
        activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
    }
}
</script>

<style scoped lang="less">
@import url('./index.less');

.placeholder {
    font-size: 28px;
    color: #172C47;
}

.weekDays {
    width: 100%;
    display: flex;
    font-weight: 500;
    font-size: 24px;
    flex-wrap: wrap;
    color: #172C47;

    .day-item {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        flex: 1;
        text-align: center;
        line-height: 50px;
        margin: 0 auto;
        cursor: pointer;
        margin: 5px 0;
    }

    .day-item:hover {
        background: #172C47;
        color: #FF9C00;
    }

    .day-item-check {
        color: #FF9C00;
        background-color: #172C47;
    }
}

.item-area {
    position: relative;
    padding: 2px;
}

.date-area {
    position: absolute;
    width: 680px;
    height: 550px;
    border-radius: 16px;
    top: 120px;
}

.date {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 16px;
    padding: 20px 25px;
    box-sizing: border-box;
    user-select: none;
    position: relative;
    z-index: 100;
}

/deep/.select-top,
/deep/.option-item,
/deep/.option-check {
    font-size: 20px !important;
}


.year-month-area {

    .month,
    .year {
        width: 46%;
        border-radius: 16px;
        position: absolute;
        width: 270px;
    }

    .year {
        right: 30px;
    }
}

.day-area {
    width: 100%;
    border-radius: 16px;
    border: 1px solid #172C47;
    margin-top: 110px;
    padding: 15px;
    box-sizing: border-box;
}

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
</style>