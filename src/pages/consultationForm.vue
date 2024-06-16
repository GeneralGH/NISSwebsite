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

            <!-- 表单 -->
            <div class="form-area">
                <div class="form-row">
                    <div class="form-item normal-item">
                        <div class="form-item-label">姓名<span>*</span></div>
                        <div>
                            <sInput v-model="formData.name" :placeholder="'请填写您的姓名'" />
                        </div>
                    </div>
                    <div class="form-item normal-item">
                        <div class="form-item-label">国籍<span>*</span></div>
                        <div style="position: relative;">
                            <sSelect @optionChange="(item) => { formData.nationality = item.label }"
                                style="position: absolute;" :options="nationalityOptions" :placeholder="'请填写您的国籍'" />
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-item normal-item">
                        <div class="form-item-label">所持新加坡居留身份<span>*</span></div>
                        <div style="position: relative;">
                            <sSelect @optionChange="(item) => { formData.residence = item.label }"
                                style="position: absolute;" :options="residenceStatusOptions"
                                :placeholder="'请选择您的新加坡居留身份'" />
                        </div>
                    </div>
                    <div class="form-item normal-item">
                        <div class="form-item-label">最高学历<span>*</span></div>
                        <div style="position: relative;">
                            <sSelect @optionChange="(item) => { formData.qualification = item.label }"
                                style="position: absolute;" :options="highestEducationalOptions"
                                :placeholder="'请选择您的最高学历'" />
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item full-item">
                        <div class="form-item-label">已在中国境外居住时间<span
                                style="font-weight: 500; color: #172C47;">（不包括留学及公派出国的时间）</span><span>*</span></div>
                        <div style="position: relative;">
                            <sSelect @optionChange="(item) => { formData.residenceTime = item.label }"
                                style="position: absolute;" :options="outsideTimeOptions"
                                :placeholder="'请选择已在中国境外居住时间'" />
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item full-item">
                        <div class="form-item-label">公司<span>*</span></div>
                        <div>
                            <sInput v-model="formData.company" :placeholder="'请填写您的公司'" />
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item full-item">
                        <div class="form-item-label">职位<span>*</span></div>
                        <div>
                            <sInput v-model="formData.post" :placeholder="'请填写您的职位'" />
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item areaCode-item">
                        <div class="form-item-label">区号</div>
                        <div>
                            <sInput v-model="formData.areaCode" :isAreaCode="true" :placeholder="'+ 区号'" />
                        </div>
                    </div>
                    <div class="form-item phone-item">
                        <div class="form-item-label">手机号码<span>*</span></div>
                        <div>
                            <sInput v-model="formData.phone" :placeholder="'请填写您的手机号码'" />
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item full-item">
                        <div class="form-item-label">邮箱地址<span>*</span></div>
                        <div>
                            <sInput v-model="formData.email" :placeholder="'请填写您的E-mail邮箱地址'" />
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item full-item">
                        <div class="form-item-label">您希望以何种方式进行咨询<span>*</span></div>
                        <div style="position: relative;">
                            <sSelect @optionChange="(item) => { formData.consultationMethods = item.label }"
                                style="position: absolute;" :options="consultingServiceOptions"
                                :placeholder="'请选择你倾向的咨询沟通方式'" />
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item full-item">
                        <div class="form-item-label">如何得知暨南大学新加坡MBA硕士学位项目<span>*</span></div>
                        <div style="position: relative;">
                            <sSelect @optionChange="(item) => { formData.obtainingChannels = item.label }"
                                style="position: absolute;" :options="knowingChannelOptions"
                                :placeholder="'请选择您得知的渠道'" />
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item normal-item">
                        <div class="form-item-label">预约咨询日期<span>*</span></div>
                        <div style="position: relative;">
                            <sDatePicker @optionChange="(item) => { formData.consultationDateDay = item }"
                                ref="sDatePicker" :placeholder="'请选择日期'" />
                        </div>
                    </div>
                    <div class="form-item normal-item">
                        <div class="form-item-label">预约咨询日期<span>*</span></div>
                        <div style="position: relative;">
                            <sSelect :isTime="true"
                                @optionChange="(item) => { formData.consultationDateTime = item.label }"
                                style="position: absolute;" :placeholder="'请选择日期'" />
                        </div>
                    </div>
                </div>

                <div class="form-row" style="height: auto;">
                    <div class="form-item full-item">
                        <div class="form-item-label">隐私政策<span>*</span></div>
                        <div style="display: flex;">
                            <!-- <t-radio v-model="ok" @click="ok = !ok"></t-radio> -->
                            <div class="form-ok-area" :class="{ formUnOk: !ok }" @click="ok = !ok">
                                <img src="../../assets/form/formOk.png" alt="" v-show="ok">
                            </div>
                            <div class="tips">
                                <div class="tips-title">By filling in and submitting the form, you agree to our Privacy
                                    Policy below. </div>
                                <div class="tips-content">I hereby authorise, agree and consent to allow Nanyang
                                    Institute of Social Sciences (NISS) to collect, use, disclose and/or process my
                                    personal data for the purpose of facilitating, processing, dealing with,
                                    administering, managing and/or maintaining my relationship with NISS, including but
                                    not limited to informing me of NISS's latest courses, services, marketing events,
                                    etc.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-item full-item"
                        style="display: flex; align-items: center; justify-content: center;">
                        <div class="submit-btn"><t-button size="large" class="btn" @click="submit">确定，提交表格</t-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <PageFooter />
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import sInput from '../components/formControl/sInput.vue';
import sSelect from '../components/formControl/sSelect.vue';
import sDatePicker from '../components/formControl/sDatePicker.vue';
import formApi from '../api/form'

export default {
    //import引入的组件需要注入到对象中才能使用
    components: { sInput, sSelect, sDatePicker },
    data() {
        //这里存放数据
        return {
            nationalityOptions: [
                { label: '新加坡 ｜ Singapo', value: 1 },
                { label: '中国 ｜ China', value: 2 },
                { label: '其他', value: 3 }
            ],
            residenceStatusOptions: [
                { label: '新加坡公民', value: 1 },
                { label: 'PR', value: 2 },
                { label: 'EP', value: 3 },
                { label: 'SP', value: 4 },
                { label: 'WP', value: 5 },
                { label: '其他', value: 6 }
            ],
            highestEducationalOptions: [
                { label: '博士', value: 1 },
                { label: '硕士', value: 2 },
                { label: '本科', value: 3 },
                { label: '大专', value: 4 },
                { label: '其他', value: 5 }
            ],
            outsideTimeOptions: [
                { label: '5年及以上', value: 1 },
                { label: '4-5年', value: 2 },
                { label: '3-4年', value: 3 },
                { label: '2-3年', value: 4 },
                { label: '1-2年', value: 5 },
                { label: '1年及以下', value: 6 }
            ],
            consultingServiceOptions: [
                { label: '面谈（强烈推荐）', value: 1 },
                { label: '视频', value: 2 },
                { label: '电话', value: 3 }
            ],
            knowingChannelOptions: [
                { label: '微信公众号', value: 1 },
                { label: '微信朋友圈', value: 2 },
                { label: '小红书', value: 3 },
                { label: '邮件', value: 4 },
                { label: 'Linkedin', value: 5 },
                { label: 'Facebook', value: 6 },
                { label: 'YouTube', value: 7 },
                { label: '微博', value: 8 },
                { label: '同事、朋友等介绍', value: 9 },
                { label: '其他', value: 10 }
            ],
            ok: false,
            formData: {
                name: '',
                nationality: '',
                residence: '',
                qualification: '',
                residenceTime: '',
                company: '',
                post: '',
                areaCode: '',
                phone: '',
                email: '',
                consultationMethods: '',
                obtainingChannels: '',
                consultationDateDay: '',
                consultationDateTime: ''
            },
            btnDisabled: false
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {
    },
    //方法集合
    methods: {
        submit() {
            if (this.btnDisabled) {
                return
            }
            if (!this.ok) {
                this.$message.error('请勾选隐私政策')
                return
            }
            this.$request.post(formApi.addCustomerUrl, this.formData)
                .then(res => {
                    if (res.data.code != 200) {
                        this.$message.error(res.data.msg)
                        return
                    }
                    this.btnDisabled = true
                    this.$message.success('提交成功，即将返回首页')
                    setTimeout(() => {
                        this.$router.push({ name: 'home' })
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // 可选，使用平滑滚动效果
                        });
                    }, 3000);
                })
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.$refs.sDatePicker.initDate()
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
.form-ok-area {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid transparent;

    img {
        width: 100%;
        height: 100%;
    }
}

.formUnOk {
    border: 2px solid #03499E;
    opacity: 0.2;
}

.submit-btn {
    width: 223px;
    height: 73px;

    .btn {
        width: 100%;
        height: 100%;
        border-radius: 16px;
        font-size: 20px;
        background-color: #03499E;
    }
}

/deep/.t-radio__input {
    width: 26px;
    height: 26px;
}

/deep/.t-radio__input::after {
    transform: translate(-50%, -50%) !important;
    margin: 0;
}

.tips {
    margin-left: 20px;
    margin-top: -5px;
    flex: 1;

    .tips-title {
        font-weight: 500;
        font-size: 28px;
        color: #172C47;
        margin-bottom: 20px;
    }

    font-weight: 300;
    font-size: 20px;
    color: #172C47;
}

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

.customInput {
    margin-bottom: 50px;
}

.form-area {
    box-sizing: border-box;
    padding: 0 40px;
    min-height: 800px;

    .form-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        height: 180px;
    }

    .form-item {}

    .normal-item {
        width: 530px;
    }

    .full-item {
        width: 100%;
    }

    .areaCode-item {
        width: 15%;
    }

    .phone-item {
        width: 82%;
    }

    .form-item-label {
        font-weight: bold;
        font-size: 28px;
        color: #172C47;
        line-height: 34px;
        margin-bottom: 40px;

        span {
            color: #E98225;
            margin-left: 5px;
        }
    }
}
</style>