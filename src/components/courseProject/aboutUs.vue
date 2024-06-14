<!--  -->
<template>
    <div>
        <div class="content-item" id="options1-1">
            <div class="title">关于暨南大学</div>
            <div class="line"></div>
            <div class="info">
                · 中国百年名校华侨最高学府<br>
                · 211工程大学双一流建设高校<br>
                · 全球商学院认证（AACSB、AMBA和BGA）<br>
                · 工商管理学位列中国一流学科前5%<br>
                · 双证文凭全球认可
            </div>
            <div class="one-imgs">
                <img src="../../../assets/courseProjects/AACSB.png" alt="">
                <img src="../../../assets/courseProjects/AMBA.png" alt="">
                <img src="../../../assets/courseProjects/BGA.png" alt="">
            </div>
        </div>

        <div class="content-item" id="options1-2">
            <div class="title">项目介绍</div>
            <div class="line"></div>
            <div class="info-content" style="margin-bottom: 40px;">
                暨南大学新加坡MBA硕士学位项目（简称“暨南大学新加坡MBA项目”）
                是暨南大学在新加坡的中文工商管理硕士（MBA）教学项目，由暨南大学管理学院与南洋社会科学学院合作举办。项目面向华侨、港澳台地区人士和非中国籍人士招生。
            </div>
            <div class="info-content" style="margin-bottom: 40px; font-size: 32px; text-align: center;">
                “始有暨南，便有商科”
            </div>
            <div class="info-content" style="margin-bottom: 40px;">
                早在1918年，暨南大学就开始设立商科，是中国最早开展商科教育的国立高等学府。1993年，暨南大学成为华南地区最早开办MBA教育的院校。
            </div>
            <div class="info-content" style="margin-bottom: 40px;">
                暨南素以弘扬中华文化，培养华侨华人子女为己任。学校坚持贯彻“面向海外，面向港澳台”的办学方针，以博大之胸怀接纳了来自五湖之学子，多元文化亦在此荟萃。暨南大学新加坡MBA硕士学位项目（简称“暨南大学新加坡MBA项目”）
                是暨南大学在新加坡的中文工商管理硕士（MBA）教学项目，由暨南大学管理学院与南洋社会科学学院合作举办。项目面向华侨、港澳台地区人士和非中国籍人士招生。
            </div>
            <div class="two-imgs">
                <div class="img-item">
                    <img src="../../../assets/courseProjects/one.png" alt="">
                    <div class="tow-title">春季秋季<br>滚动招生</div>
                </div>
                <div class="img-item">
                    <img src="../../../assets/courseProjects/two.png" alt="">
                    <div class="tow-title">在新加坡<br>中文授课</div>
                </div>
                <div class="img-item">
                    <img src="../../../assets/courseProjects/three.png" alt="">
                    <div class="tow-title">2年学制<br>在职学习</div>
                </div>
            </div>
        </div>

        <div class="content-item" id="options1-3">
            <div class="title">项目优势</div>
            <div class="line"></div>
            <div class="info">
                · 新加坡就读，享受港澳台华侨外特殊申请政策<br>
                · 免中国MBA联考<br>
                · 无英语入学要求<br>
                · 时间灵活集中授课<br>
                · 大专文凭可报考<br>
                · 收获1+1+N+2全面赋能职业发展
            </div>
            <div style="margin-top: 60px;">
                <img class="fourImg" src="../../../assets/courseProjects/four.png" alt="">
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
@import url('./index.css');

.one-imgs {
    display: flex;
    align-items: center;
    margin-top: 40px;
    padding: 0 30px;

    img {
        width: 260px;
        height: 329px;
        margin-right: 20px;
    }
}

.two-imgs {
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    box-sizing: border-box;
    padding: 0 40px;

    .img-item {
        width: 98px;
        text-align: center;
    }

    img {
        width: 98px;
        height: 98px;
        display: block;
    }

    .tow-title {
        font-weight: bold;
        font-size: 24px;
        color: #172C47;
        margin-top: 15px;
    }
}

.fourImg {
    width: 100%;
}
</style>