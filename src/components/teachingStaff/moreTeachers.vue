<!--  -->
<template>
    <div class="party">
        <!-- <div class="party-title">{{ userLanguage == '1' ? '更多师资力量' : 'Explore more faculty resources' }}</div>
        <div class="party-line"></div> -->

        <div class="search-area">
            <div class="search-title">{{ userLanguage == '1' ? '姓名搜索' : 'Search by name' }}</div>
            <div class="search-bg"
                :style="{ backgroundImage: `url(${require('../../../assets/teachingStaff/searchBg.png')})` }">
                <input type="text" class="input" v-model="listQuery.name">
            </div>
            <div class="initial-area">
                <div class="initial" v-for="item in alphabet"
                    @click="listQuery.first == item ? listQuery.first = '' : listQuery.first = item"
                    :style="listQuery.first == item ? `color: #FF9C00; background: rgba(23, 44, 71);` : ''">
                    {{ item }}
                </div>
            </div>
        </div>

        <t-loading :loading="loading" showOverlay>
            <TeacherList :isNomral="true" :list="list" />
        </t-loading>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import TeacherList from './teacherList.vue'
import teachers from '../../api/teachers';

export default {
    //import引入的组件需要注入到对象中才能使用
    components: { TeacherList },
    data() {
        //这里存放数据
        return {
            alphabet: [],
            currentInitial: '',
            list: [],
            listQuery: {
                current: 1,
                size: 999,
                name: '',
                first: ''
            },
            loading: false
        };
    },
    computed: {
        userLanguage() {
            return this.$store.state.userLanguage;
        }
    },
    //监控data中的数据变化
    watch: {
        'listQuery.first'(val) {
            this.initList()
        },

        userLanguage(newVal) {
        }
    },
    //方法集合
    methods: {
        async initList() {
            await this.$request.post(teachers.getTeacherListPageUrl, this.listQuery)
                .then(res => {
                    const copyList = res.data.data.list.map((item) => {
                        return { ...item, teacherImg: JSON.parse(item.image).url };
                    });

                    this.list = copyList.reduce((groupedData, item) => {
                        const firstLetter = item.pinyin.charAt(0).toUpperCase();
                        if (!groupedData[firstLetter]) {
                            groupedData[firstLetter] = {
                                first: firstLetter,
                                teachers: [],
                            };
                        }
                        groupedData[firstLetter].teachers.push(item);
                        return groupedData;
                    }, {});

                    this.list = Object.values(this.list).sort((a, b) => {
                        return a.first.localeCompare(b.first);
                    });
                });

            this.loading = false;
        }

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        // 定义防抖函数
        const debounce = (func, delay) => {
            let timerId;
            return function (...args) {
                clearTimeout(timerId);
                timerId = setTimeout(() => {
                    func.apply(this, args);
                }, delay);
            };
        };

        // 使用防抖函数包装 initList 方法
        const debouncedInitList = debounce(this.initList, 1000);

        // 监听 listQuery.name 的变化，并执行防抖版的 initList 方法
        this.$watch('listQuery.name', (newName) => {
            this.loading = true
            debouncedInitList();
        });

        var start = 'A'.charCodeAt(0); // 获取字母 A 的 Unicode 编码

        for (var i = 0; i < 26; i++) {
            this.alphabet.push(String.fromCharCode(start + i));
        }

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
@media(max-width:720px){
 .party{
   width: 100% !important;
 }
  .search-bg{
    width: 100px !important;
    margin: 0 !important;
  display: none !important;
    >img {
      width: 100% !important;
      height: 100% !important;
    }
  }
  .initial-area{
    width: 720px !important;
  }
  .party-line {
    width: 100% !important;
  }
}
.input {
    width: 100%;
    height: 60%;
    border: none;
    font-size: 32px;
}

.input[type=text]:focus {
    outline: none;
}

.search-area {
    text-align: center;
    margin-bottom: 50px;
}

.search-title {
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 50px;
}

.search-bg {
    width: 980px;
    height: 80px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 0 auto;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 40px;
}

.initial-area {
    width: 1180px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.initial {
    width: 60px;
    height: 60px;
    background: rgba(23, 44, 71, 0.12);
    font-weight: bold;
    font-size: 28px;
    border-radius: 50%;
    margin-bottom: 30px;
    text-align: center;
    line-height: 60px;
    margin-left: 20px;
    cursor: pointer;
}

.initial:first-child {
    margin-left: 0;
}
</style>