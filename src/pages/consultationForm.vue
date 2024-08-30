<!--  -->
<template>
  <div>
    <pageHeader />
    <div class="page-area">
      <div class="party">
        <div class="party-content" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">
          <p>
            {{
              userLanguage == "1"
                ? "感谢对我们项目的关注！如果您希望进一步了解项目，请准确填写下列信息，我们的项目负责老师会尽快与您联系，帮您深入了解项目及申请流程。"
                : "Thank you for your interest in our program! To learn more, please complete the form below. Our dedicated program team will get in touch with you shortly to discuss your suitability and guide you through the application process."
            }}
          </p>
          <p>
            {{
              userLanguage == "1"
                ? "如有任何疑问，您也可以拨打 +65 6320 3596，直接联络我们。"
                : "If you have any questions, please also feel free to contact us directly at +65 6320 3596."
            }}
          </p>
        </div>
      </div>

      <t-form :data="formData" :rules="userLanguage == '1' ? rules : rulesEn" @submit="onSubmit">
        <!-- 表单 -->
        <div class="form-area">
          <div class="form-row">
            <div class="form-item normal-item">
              <div class="form-item-label">
                {{ userLanguage == "1" ? "姓名" : "Name" }}<span>*</span>
              </div>
              <div>
                <t-form-item name="name">
                  <sInput v-model="formData.name" :placeholder="userLanguage == '1'
                    ? '请填写您的姓名'
                    : 'Please enter your name'
                    " />
                </t-form-item>
              </div>
            </div>
            <div class="form-item normal-item">
              <div class="form-item-label">
                {{ userLanguage == "1" ? "国籍" : "Nationality" }}<span>*</span>
              </div>
              <div style="position: relative">
                <t-form-item name="nationality">
                  <sSelect @optionChange="(item) => {
                    formData.nationality = userLanguage == '1' ? item.label : item.labelEn;
                  }
                    " :options="nationalityOptions" :placeholder="userLanguage == '1'
                      ? '请填写您的国籍'
                      : 'Please select your nationality'
                      " />
                </t-form-item>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-item normal-item">
              <div class="form-item-label">
                {{
                  userLanguage == "1"
                    ? "所持新加坡居留身份"
                    : "Residential Status in Singapore"
                }}<span>*</span>
              </div>
              <div style="position: relative">
                <t-form-item name="residence">
                  <sSelect @optionChange="(item) => {
                    formData.residence = userLanguage == '1' ? item.label : item.labelEn;
                  }
                    " :options="residenceStatusOptions" :placeholder="userLanguage == '1'
                      ? '请选择您的新加坡居留身份'
                      : 'Please select your residency status in Singapore'
                      " />
                </t-form-item>
              </div>
            </div>
            <div class="form-item normal-item">
              <div class="form-item-label">
                {{ userLanguage == "1" ? "最高学历" : "Highest Education Level"
                }}<span>*</span>
              </div>
              <div style="position: relative">
                <t-form-item name="qualification">
                  <sSelect @optionChange="(item) => {
                    formData.qualification = userLanguage == '1' ? item.label : item.labelEn;
                  }
                    " :options="highestEducationalOptions" :placeholder="userLanguage == '1'
                      ? '请选择您的最高学历'
                      : 'Please select your highest education level'
                      " />
                </t-form-item>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-item full-item">
              <div class="form-item-label">
                {{
                  userLanguage == "1"
                    ? "已在中国境外居住时间"
                    : "Duration of residence outside of China"
                }}<span style="font-weight: 500; color: #172c47" class="bk-label">{{
                  userLanguage == "1"
                    ? "（不包括留学及公派出国的时间）"
                    : "(excluding periods of study abroad and government-sponsored work assignments)."
                }}</span><span>*</span>
              </div>
              <div style="position: relative">
                <t-form-item name="residenceTime">
                  <sSelect @optionChange="(item) => {
                    formData.residenceTime = userLanguage == '1' ? item.label : item.labelEn;
                  }
                    " :options="outsideTimeOptions" :placeholder="userLanguage == '1'
                      ? '请选择已在中国境外居住时间'
                      : 'Please select the duration of residence outside of China'
                      " />
                </t-form-item>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-item full-item">
              <div class="form-item-label">
                {{ userLanguage == "1" ? "公司" : "Company" }}<span>*</span>
              </div>
              <div>
                <t-form-item name="company">
                  <sInput v-model="formData.company" :placeholder="userLanguage == '1'
                    ? '请填写您的公司'
                    : 'Please enter your company'
                    " />
                </t-form-item>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-item full-item">
              <div class="form-item-label">
                {{ userLanguage == "1" ? "职位" : "Position" }}<span>*</span>
              </div>
              <div>
                <t-form-item name="post">
                  <sInput v-model="formData.post" :placeholder="userLanguage == '1'
                    ? '请填写您的职位'
                    : 'Please enter your position'
                    " />
                </t-form-item>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-item areaCode-item">
              <div class="form-item-label">
                {{ userLanguage == "1" ? "区号" : "Area Code" }}
              </div>
              <div>
                <sInput v-model="formData.areaCode" :isAreaCode="true"
                  :placeholder="userLanguage == '1' ? '+ 区号' : '+ Area Code'" />
              </div>
            </div>
            <div class="form-item phone-item">
              <div class="form-item-label">
                {{ userLanguage == "1" ? "手机号码" : "Mobile Number"
                }}<span>*</span>
              </div>
              <div>
                <t-form-item name="phone">
                  <sInput :isPhone="true" v-model="formData.phone" :placeholder="userLanguage == '1'
                    ? '请填写您的手机号码'
                    : 'Please enter your mobile number'
                    " />
                </t-form-item>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-item full-item">
              <div class="form-item-label">
                {{ userLanguage == "1" ? "邮箱地址" : "Email Address"
                }}<span>*</span>
              </div>
              <div>
                <t-form-item name="email">
                  <sInput v-model="formData.email" :placeholder="userLanguage == '1'
                    ? '请填写您的E-mail邮箱地址'
                    : 'Please enter your email address'
                    " />
                </t-form-item>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-item full-item">
              <div class="form-item-label">
                {{
                  userLanguage == "1"
                    ? "您希望以何种方式进行咨询"
                    : "Preferred Consultation Method"
                }}<span>*</span>
              </div>
              <div style="position: relative">
                <t-form-item name="consultationMethods">
                  <sSelect @optionChange="(item) => {
                    formData.consultationMethods = userLanguage == '1' ? item.label : item.labelEn;
                  }
                    " :options="consultingServiceOptions" :placeholder="userLanguage == '1'
                      ? '请选择你倾向的咨询沟通方式'
                      : 'Please select your preferred consultation method'
                      " />
                </t-form-item>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-item full-item">
              <div class="form-item-label">
                {{
                  userLanguage == "1"
                    ? "咨询项目"
                    : "Program to inquire about"
                }}<span>*</span>
              </div>
              <div style="position: relative">
                <t-form-item name="project">
                  <sSelect @optionChange="(item) => {
                    formData.project = userLanguage == '1' ? item.label : item.labelEn;
                  }
                    " :options="programOptions" :placeholder="userLanguage == '1'
                      ? '请选择你想要咨询的项目'
                      : 'Please select the program you would like to inquire about'
                      " />
                </t-form-item>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-item full-item">
              <div class="form-item-label">
                {{
                  userLanguage == "1"
                    ? "您是如何得知项目的"
                    : "How did you learn about the program?"
                }}<span>*</span>
              </div>
              <div style="position: relative">
                <t-form-item name="obtainingChannels">
                  <sSelect @optionChange="(item) => {
                    formData.obtainingChannels = userLanguage == '1' ? item.label : item.labelEn;
                  }
                    " :options="knowingChannelOptions" :placeholder="userLanguage == '1' ? '请选择您得知的渠道' : 'Please select the source of information'
                      " />
                </t-form-item>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-item normal-item">
              <div class="form-item-label">
                {{
                  userLanguage == "1"
                    ? "预约咨询日期"
                    : "Preferred Consultation Date"
                }}<span>*</span>
              </div>
              <div style="position: relative">
                <t-form-item name="consultationDateDay">
                  <sDatePicker @optionChange="(item) => {
                    formData.consultationDateDay = item;
                  }
                    " ref="sDatePicker" :placeholder="userLanguage == '1'
                      ? '请选择预约咨询日期'
                      : 'Please select a preferred consultation date'
                      " />
                </t-form-item>
              </div>
            </div>
            <div class="form-item normal-item">
              <div class="form-item-label">
                {{
                  userLanguage == "1"
                    ? "预约咨询时间"
                    : "Preferred Consultation Time"
                }}<span>*</span>
              </div>
              <div style="position: relative">
                <t-form-item name="consultationDateTime">
                  <sSelect :isTime="true" :options="DateTimeOptions" @timeTypeChange="timeTypeChange" @optionChange="(item) => {
                    formData.consultationDateTime = item.label;
                  }
                    " :placeholder="userLanguage == '1'
                      ? '请选择预约咨询时间'
                      : 'Please select a preferred consultation time'
                      " />
                </t-form-item>
              </div>
            </div>
          </div>

          <div class="form-row" style="height: auto">
            <div class="form-item full-item">
              <div class="form-item-label label-zc">
                {{ userLanguage == "1" ? "隐私政策" : "Privacy Policy"
                }}<span>*</span>
              </div>
              <div style="display: flex">
                <!-- <t-radio v-model="ok" @click="ok = !ok"></t-radio> -->
                <div class="form-ok-area" :class="{ formUnOk: !ok }" @click="ok = !ok">
                  <img src="../../assets/form/formOk.png" alt="" v-show="ok" />
                </div>
                <div class="tips">
                  <div class="tips-title">
                    By filling in and submitting the form, you agree to our
                    Privacy Policy below.
                  </div>
                  <div class="tips-content">
                    I hereby authorise, agree and consent to allow Nanyang
                    Institute of Social Sciences (NISS) to collect, use,
                    disclose and/or process my personal data for the purpose of
                    facilitating, processing, dealing with, administering,
                    managing and/or maintaining my relationship with NISS,
                    including but not limited to informing me of NISS's latest
                    courses, services, marketing events, etc.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="form-row row-footer">
            <div class="form-item full-item" style="
                display: flex;
                align-items: center;
                justify-content: center;
              ">
              <div class="submit-btn">
                <t-button size="large" class="btn" type="submit">{{
                  userLanguage == "1" ? "确定，提交表格" : "Submit"
                }}</t-button>
              </div>
            </div>
          </div>
        </div>
      </t-form>
    </div>
    <PageFooter />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import sInput from "../components/formControl/sInput.vue";
import sSelect from "../components/formControl/sSelect.vue";
import sDatePicker from "../components/formControl/sDatePicker.vue";
import formApi from "../api/form";
import timelist from '../components/formControl/timeData'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { sInput, sSelect, sDatePicker },
  data() {
    //这里存放数据
    return {
      urlSource: '',
      nationalityOptions: [
        { label: "新加坡", labelEn: 'Singaporean', value: 1 },
        { label: "中国", labelEn: 'Chinese', value: 2 },
        { label: "其他", labelEn: 'Other', value: 3 },
      ],
      residenceStatusOptions: [
        { label: "新加坡公民", labelEn: 'Singapore Citizen', value: 1 },
        { label: "PR", labelEn: 'PR', value: 2 },
        { label: "EP", labelEn: 'EP', value: 3 },
        { label: "SP", labelEn: 'SP', value: 4 },
        { label: "WP", labelEn: 'WP', value: 5 },
        { label: "LTVP", labelEn: 'LTVP', value: 7 },
        { label: "DP", labelEn: 'DP', value: 8 },
        { label: "其他", labelEn: 'Other', value: 6 },
      ],
      highestEducationalOptions: [
        { label: "博士", labelEn: 'PhD', value: 1 },
        { label: "硕士", labelEn: "Master's", value: 2 },
        { label: "本科", labelEn: "Bachelor's", value: 3 },
        { label: "大专", labelEn: "Degree's", value: 4 },
        { label: "其他", labelEn: 'Other', value: 5 },
      ],
      outsideTimeOptions: [
        { label: "5年及以上", labelEn: '5 years and above', value: 1 },
        { label: "4-5年", labelEn: '4-5 years', value: 2 },
        { label: "3-4年", labelEn: '3-4 years', value: 3 },
        { label: "2-3年", labelEn: '2-3 years', value: 4 },
        { label: "1-2年", labelEn: '1-2 years', value: 5 },
        { label: "1年及以下", labelEn: 'Less than 1 year', value: 6 },
      ],
      consultingServiceOptions: [
        {
          label: "面谈（强烈推荐）",
          labelEn: 'In-person (strongly recommended)',
          value: 1,
        },
        { label: "视频", labelEn: 'Video', value: 2 },
        { label: "电话", labelEn: 'Phone', value: 3 },
      ],
      programOptions: [
        { label: "暨南大学新加坡中文MBA", labelEn: 'JNU MBA Program', value: 1 },
        // { label: "南特高等商学院亚太中文DBA", labelEn: 'Asia-pacific DBA Program（Chinese）', value: 2 },
        { label: "高管教育", labelEn: 'Executive Education', value: 3 },
      ],
      knowingChannelOptions: [
        { label: "微信公众号", labelEn: 'WeChat official accounts', value: 1 },
        { label: "微信朋友圈", labelEn: 'WeChat Moments', value: 2 },
        { label: "小红书", labelEn: 'Red', value: 3 },
        { label: "邮件", labelEn: 'E-mail', value: 4 },
        { label: "Linkedin", labelEn: 'Linkedin', value: 5 },
        { label: "Facebook", labelEn: 'Facebook', value: 6 },
        { label: "YouTube", labelEn: 'YouTube', value: 7 },
        { label: "微博", labelEn: 'Weibo', value: 8 },
        { label: "同事、朋友等介绍", labelEn: 'Referral by Colleagues, Friends, etc', value: 9 },
        { label: "其他", labelEn: 'Others', value: 10 },
      ],
      ok: false,
      formData: {
        name: "",
        nationality: "",
        residence: "",
        qualification: "",
        residenceTime: "",
        company: "",
        post: "",
        areaCode: "",
        phone: "",
        email: "",
        consultationMethods: "",
        project: '',
        obtainingChannels: "",
        consultationDateDay: "",
        consultationDateTime: "",
        source: ''
      },
      btnDisabled: false,
      DateTimeOptions: [],
      rules: {
        name: [
          {
            required: true,
            message: "姓名必填",
            type: "error",
            trigger: "change",
          },
        ],
        nationality: [
          {
            required: true,
            message: "国籍必填",
            type: "error",
            trigger: "change",
          },
        ],
        residence: [
          {
            required: true,
            message: "所持新加坡居留身份必填",
            type: "error",
            trigger: "change",
          },
        ],
        qualification: [
          {
            required: true,
            message: "最高学历必填",
            type: "error",
            trigger: "change",
          },
        ],
        residenceTime: [
          {
            required: true,
            message: "已在中国境外居住时间必填",
            type: "error",
            trigger: "change",
          },
        ],
        company: [
          {
            required: true,
            message: "公司必填",
            type: "error",
            trigger: "change",
          },
        ],
        post: [
          {
            required: true,
            message: "职位必填",
            type: "error",
            trigger: "change",
          },
        ],
        phone: [
          {
            required: true,
            message: "手机号码必填",
            type: "error",
            trigger: "change",
          },
        ],
        email: [
          {
            required: true,
            message: "邮箱地址必填",
            type: "error",
            trigger: "change",
          },
          {
            email: { ignore_max_length: true },
            message: "请输入正确的邮箱地址",
          },
        ],
        consultationMethods: [
          {
            required: true,
            message: "以何种方式进行咨询必填",
            type: "error",
            trigger: "change",
          },
        ],
        project: [
          {
            required: true,
            message: "想要咨询的项目必填",
            type: "error",
            trigger: "change",
          },
        ],
        obtainingChannels: [
          {
            required: true,
            message: "得知渠道必填",
            type: "error",
            trigger: "change",
          },
        ],
        consultationDateDay: [
          {
            required: true,
            message: "预约咨询日期必填",
            type: "error",
            trigger: "change",
          },
        ],
        consultationDateTime: [
          {
            required: true,
            message: "预约咨询时间必填",
            type: "error",
            trigger: "change",
          },
        ],
      },
      rulesEn: {
        name: [
          {
            required: true,
            message: "Required",
            type: "error",
            trigger: "change",
          },
        ],
        nationality: [
          {
            required: true,
            message: "Required",
            type: "error",
            trigger: "change",
          },
        ],
        residence: [
          {
            required: true,
            message: "Required",
            type: "error",
            trigger: "change",
          },
        ],
        qualification: [
          {
            required: true,
            message: "Required",
            type: "error",
            trigger: "change",
          },
        ],
        residenceTime: [
          {
            required: true,
            message: "Required",
            type: "error",
            trigger: "change",
          },
        ],
        company: [
          {
            required: true,
            message: "Required",
            type: "error",
            trigger: "change",
          },
        ],
        post: [
          {
            required: true,
            message: "Required",
            type: "error",
            trigger: "change",
          },
        ],
        phone: [
          {
            required: true,
            message: "Required",
            type: "error",
            trigger: "change",
          },
        ],
        email: [
          {
            required: true,
            message: "Required",
            type: "error",
            trigger: "change",
          },
          {
            email: { ignore_max_length: true },
            message: "Required",
          },
        ],
        consultationMethods: [
          {
            required: true,
            message: "Required",
            type: "error",
            trigger: "change",
          },
        ],
        project: [
          {
            required: true,
            message: "Required",
            type: "error",
            trigger: "change",
          },
        ],
        obtainingChannels: [
          {
            required: true,
            message: "Required",
            type: "error",
            trigger: "change",
          },
        ],
        consultationDateDay: [
          {
            required: true,
            message: "Required",
            type: "error",
            trigger: "change",
          },
        ],
        consultationDateTime: [
          {
            required: true,
            message: "Required",
            type: "error",
            trigger: "change",
          },
        ],
      },
    };
  },
  computed: {
    userLanguage() {
      return this.$store.state.userLanguage;
    },
  },
  watch: {
    userLanguage(newVal) {
      document.title = newVal == "1" ? "咨询表单" : "consultationForm";
    },
  },
  //方法集合
  methods: {
    timeTypeChange(e) {
      this.DateTimeOptions = e == 1 ? timelist.morningTimeSlots : timelist.afternoonTimeSlots
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        if (this.btnDisabled) {
          return;
        }
        if (!this.ok) {
          this.$message.error("请勾选隐私政策");
          return;
        }
        this.$request
          .post(formApi.addCustomerUrl, this.formData)
          .then((res) => {
            if (res.data.code != 200) {
              this.$message.error(res.data.msg);
              return;
            }
            this.btnDisabled = true;
            this.$message.success("提交成功，即将返回首页");
            setTimeout(() => {
              this.$router.push({ name: "home" });
              window.scrollTo({
                top: 0,
                behavior: "smooth", // 可选，使用平滑滚动效果
              });
            }, 3000);
          });
      } else {
        this.$message.warning(firstError);
      }
    },
    submit() { },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$refs.sDatePicker.initDate();
    document.title = this.userLanguage == "1" ? "咨询表单" : "consultationForm";
    // 获取当前页面的完整URL
    var currentURL = window.location.href;

    // 使用URLSearchParams获取参数值
    var searchParams = new URLSearchParams(new URL(currentURL).search);
    var sourceValue = searchParams.get('source');

    if (sourceValue) {
      this.formData.source = sourceValue
      this.$request.post(formApi.addVisitNumUrl + sourceValue)
    }

    this.DateTimeOptions = timelist.morningTimeSlots

    // 输出source参数的值
    console.log(sourceValue); // 这里会输出参数source的值
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
  .party-content {
    width: 700px;
  }

  .bk-label {
    font-size: 20px;
  }

  .select-area {
    margin-bottom: 200px !important;
  }

  .form-area {
    display: flex;
    flex-direction: column;
  }

  .form-row {
    display: flex;
    flex-direction: column;
    /* height: 400px !important; */
    margin-bottom: 70px !important;
  }

  .tips {
    width: 200px !important;
  }

  /deep/.page-area {
    width: 100% !important;
  }

  .tips-title {
    width: 600px;
    line-height: 35px !important;
  }

  .submit-btn {
    display: flex;
    justify-content: center;
  }

  .tips-content {
    width: 600px;
    line-height: 30px !important;
  }

  .btn {
    width: 300px !important;
  }

  .item-area {
    width: 550px;
  }

  .form-row:nth-child(1) {
    height: 350px !important;
  }

  .form-row:nth-child(2) {
    height: 350px !important;
  }

  .form-row:nth-child(3) {
    width: 100%;
    height: 150px !important;
  }

  .form-row:nth-child(4) {
    height: 150px !important;
  }

  .form-row:nth-child(5) {
    height: 150px !important;
  }

  .form-row:nth-child(6) {
    height: 320px !important;
  }

  .form-row:nth-child(7) {
    height: 150px !important;
  }

  .form-row:nth-child(8) {
    height: 150px !important;
  }

  .form-row:nth-child(9) {
    height: 150px !important;
  }

  .form-row:nth-child(10) {
    height: auto !important;
    .form-item {
      margin-bottom: 0 !important;
    }
  }

  .form-row:nth-child(11) {
    height: 350px !important;
  }

  .row-footer {
    height: 80px !important;
  }

  .label-zc {
    margin-top: 50px;
  }

  .form-item {
    margin-bottom: 50px !important;
  }
}

/deep/.t-is-error .t-input__extra {
  font-size: 20px;
  margin-top: 15px;
  margin-left: 10px;
}

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
  border: 2px solid #03499e;
  opacity: 0.2;
}

.submit-btn {
  width: 223px;
  height: 73px;
  margin-top: 50px;

  .btn {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    font-size: 20px;
    background-color: #03499e;
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
    color: #172c47;
    margin-bottom: 20px;
  }

  font-weight: 300;
  font-size: 20px;
  color: #172c47;
}

/deep/.page-area {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;

  .party {
    margin-bottom: 80px;
    color: #172c47;

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
    height: 200px;
  }

  .form-item {}

  .normal-item {
    width: 530px;
  }

  .full-item {
    width: 100%;
  }

  .areaCode-item {
    width: 20%;
  }

  .phone-item {
    width: 77%;
  }

  .form-item-label {
    font-weight: bold;
    font-size: 28px;
    color: #172c47;
    line-height: 34px;
    margin-bottom: 30px;

    span {
      color: #e98225;
      margin-left: 5px;
    }
  }
}
</style>