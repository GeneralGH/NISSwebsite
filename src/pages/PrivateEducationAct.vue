<!--  -->
<template>
    <div>
        <pageHeader />
        <div class="page-area">
            <div class="cpllapse">
                <t-collapse expandIconPlacement="right" style="width: 100%;">
                    <t-collapse-panel header="Student Contract">
                        <div class="content">
                            In compliance with the requirements of SkillsFuture Singapore (SSG), all students of Nanyang
                            Institute of Social Sciences (NISS) are required to sign a Private Education Institution
                            (PEI)-Student Contract. This Student Contract is a legally binding agreement between the
                            student and NISS, setting out the terms and conditions governing the relationship between
                            the student and NISS.
                        </div>
                        <div class="content">
                            Students may download a sample of the Student Contract from <a
                                href="https://www.niss.edu.sg/contract" target="_blank">here</a>.
                        </div>
                    </t-collapse-panel>
                    <t-collapse-panel header="Fee Protection Scheme (FPS)">
                        <div class="content">
                            Nanyang Institute of Social Sciences (NISS) has implemented a Fee
                            Protection Scheme (FPS) to safeguard students’ course fees paid to the institution.
                        </div>
                        <div class="content">
                            The FPS serves to protect students in the unlikely event that NISS is unable to continue
                            operating due to insolvency, and/or closure, as well as if NISS is unable to pay a judgement
                            sum due to a student.
                        </div>
                        <div class="content">
                            To ensure this protection, NISS has appointed [GREAT EASTERN GENERAL INSURANCE LIMITED] as
                            our FPS insurance provider. Under this arrangement, course fees paid by students are
                            insured, and claims can be made through the insurer in accordance with the insurance policy.
                        </div>
                        <div class="content">
                            The FPS applies to all students enrolled in our courses. The insurance premium is borne by
                            NISS unless otherwise stated in the student contract.
                        </div>
                        <div class="content">
                            More information on the Fee Protection Scheme, please visit
                        </div>
                        <div class="content">
                            <a href="https://www.tpgateway.gov.sg/resources/information-for-private-education-institutions-(peis)/protection-of-course-fees"
                                target="_blank">https://www.tpgateway.gov.sg/resources/information-for-private-education-institutions-(peis)/protection-of-course-fees</a>
                        </div>
                    </t-collapse-panel>
                </t-collapse>
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
        };
    },
    computed: {
        userLanguage() {
            return this.$store.state.userLanguage;
        },
    },
    watch: {
    },
    filter: {},
    //方法集合
    methods: {
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        // 加载SEO
        /* const websiteSchema = { 
          "@context": "https://schema.org", 
          "@type": "WebSite", 
          "name": "Policy-Nanyang Institute of Social Science", 
          "description": "This Privacy Policy outlines privacy practices for www.niss.edu.sg. By using our site, you consent to the collection and use of your information as described in this policy.", 
          "url": "https://www.niss.edu.sg/policy" 
        }
        const script = document.createElement('script'); 
        script.type = 'application/ld+json'; 
        script.textContent = JSON.stringify(websiteSchema); 
        document.head.appendChild(script) */
    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style scoped lang="less">
@media (max-width: 720px) {
    .footerText {
        margin-bottom: 100px !important;
    }

    .page-area {
        box-sizing: border-box;
        width: 100% !important;
        padding: 0 30px !important;
    }
}

/deep/ .page-area {
    width: 1650px;
    margin: 0 auto;
    padding: 30px 0 160px 0;
    min-height: 600px;
    display: flex;
    align-items: center;
}


/deep/.t-collapse-panel__wrapper .t-collapse-panel__header,
/deep/.t-collapse-panel__content {
    padding: 40px;
}

/deep/.t-collapse-panel__header-content {
    font-size: 32px;
}

.content {
    font-size: 28px;
    line-height: 1.5;
    margin-bottom: 15px;
}

.cpllapse {
    padding: 30px 0;
    width: 100%;
}

/deep/.t-collapse-panel__icon {
    transform: scale(1.5);
}
</style>