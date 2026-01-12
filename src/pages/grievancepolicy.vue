<!--  -->
<template>
  <div>
    <pageHeader />
    <div class="page-area">

      <div class="article-info">
        <div class="article-title">
          Student Grievance and Dispute Resolution Policy
        </div>
      </div>

      <div class="article-area">
        <div class="article-content">
          <div class="commonText subTitle">Nanyang Institute of Social Sciences (NISS)</div>
          <div class="commonText">At NISS, we are committed to maintaining a fair, respectful, and supportive environment for all students. If you encounter any concern, grievance, or dispute during your studies with us, we encourage you to raise it promptly through the proper channels. We are here to help resolve issues in a professional, timely, and transparent manner.</div>
        </div>

        <div class="article-content">
          <div class="commonText subTitle">1. Scope</div>
          <div class="commonText">This policy applies to formal student grievances and disputes, including but not limited to:</div>
          <ul>
            <li class="commonText">Academic decisions (e.g. assessment results, awards)</li>
            <li class="commonText">Administrative matters (e.g. course enrolment, attendance)</li>
            <li class="commonText">Misconduct by staff or students</li>
            <li class="commonText">Disciplinary actions (e.g. suspension, expulsion)</li>
            <li class="commonText">Alleged unfair treatment or breaches of policy</li>
          </ul>
          <div class="commonText">Matters concerning student discipline or academic decisions will be handled under NISS’s established procedures, which take precedence over this grievance process.</div>
        </div>

        <div class="article-content">
          <div class="commonText subTitle">2. Informal Resolution (Step 1)</div>
          <div class="commonText">In many cases, concerns can be resolved quickly and informally. Students are encouraged to:</div>
          <ul>
            <li class="commonText">Speak directly with the relevant lecturer or staff member involved</li>
            <li class="commonText">Clarify any misunderstanding or request further explanation</li>
          </ul>
          <div class="commonText">If the matter is not resolved or the student prefers not to address it informally, a formal grievance may be submitted.</div>
        </div>

        <div class="article-content">
          <div class="commonText subTitle">3. Formal Grievance Submission (Step 2)</div>
          <ul>
            <li class="commonText">Submit the grievance via the NISS Student Feedback Form: http://niss-edu.sg.mikecrm.com/KgSFLif</li>
            <li class="commonText">Email the Academic Administration team at: admin@niss.edu.sg</li>
          </ul>
          <div class="commonText">Acknowledgement of receipt will be provided within 3 working days.</div>
        </div>

        <div class="article-content">
          <div class="commonText subTitle">4. Investigation and Resolution (Step 3)</div>
          <div class="commonText">NISS will investigate the grievance in a fair and impartial manner. You may be contacted for clarification or a meeting if needed.</div>
          <div>
            <table class="schtable" border="0" width="100%" cellspacing="0" cellpadding="0">
              <tbody>
                <tr class="topline">
                  <td><strong>Stage</strong></td>
                  <td><strong>Responsible Party</strong></td>
                  <td><strong>Timeliness</strong></td>
                </tr>
                <tr>
                  <td>Acknowledgement of grievance</td>
                  <td>Academic Admin</td>
                  <td>Within 3 working days</td>
                </tr>
                <tr>
                  <td>Initial review and resolution</td>
                  <td>Department Manager</td>
                  <td>Within 7 working days</td>
                </tr>
                <tr>
                  <td>Resolution by Management</td>
                  <td>Dean Office</td>
                  <td>Within 14 working days</td>
                </tr>
                <tr>
                  <td>External mediation (if needed)</td>
                  <td>Academic Admin via SSG</td>
                  <td>By the end of 21 working days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="article-content">
          <div class="commonText subTitle">5. External Dispute Resolution (Step 4)</div>
          <div class="commonText">If the grievance remains or the student is not satisfied with the outcome, either party may refer the matter to the Singapore Mediation Centre (SMC) or the Singapore Institute of Arbitrators (SIArb) for mediation by following the SSG Private Education Mediation-Arbitration Scheme.</div>
        </div>

        <div class="article-content">
          <div class="commonText subTitle">6. Confidentiality and Records</div>
          <div class="commonText">All grievances and dispute cases will be treated confidentially. Records of the grievance, investigation, and outcome will be securely maintained by the Academic Administration Department.</div>
        </div>

        <div class="article-content">
          <div class="commonText subTitle">7. Contact Us</div>
          <div class="commonText">If you have a concern, grievance, or need help submitting a dispute:</div>
          <div class="commonText">Academic Administration Office</div>
          <div class="commonText">Address: 30 Orange Grove Road, #07-77 RELC Building, Singapore 258352</div>
          <div class="commonText">Email: <a>jnumba.admin@niss.edu.sg</a></div>
          <div class="commonText">Contact Number: +65 6592 0000</div>
        </div>
        
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
  created() {},
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
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style scoped lang="less">
.schtable {
  border: 1px solid #e5e5e5 !important;
}

.schtable td {
  line-height: 30px;
  padding: 10px !important;
  font-size: 20px !important;
  border: 1px solid #e5e5e5 !important;
  text-align: center;
}

.topline td {
  overflow: hidden;
  white-space: nowrap;
  border-right: 1px solid #fff !important;
  background: #e5e5e5 !important;
}
/deep/ video {
  width: 100% !important;
}
@media (max-width: 720px) {
  .footerText {
    margin-bottom: 100px !important;
  }
  .page-area {
    .path-list {
      margin-top: 20px;
    }

    box-sizing: border-box;
    width: 100% !important;
    padding: 0 30px !important;

    .article-info {
      width: 100% !important;
    }

    .article-area {
      width: 100% !important;

      .article-content {
        width: 100% !important;
        color: #172c47;
        font-size: 20px !important;
      }
    }

    .other-article-item {
      width: 80vw !important;
      height: 70px !important;
    }
  }
  .article-content {
    line-height: 50px;
  }

  .more-article {
    display: none !important;
  }

  .article-area {
    width: 100%;
  }

  .other-article-list {
    margin-bottom: 100px;
  }

  .pagination {
    width: 80vw;
    display: block !important;
    font-size: 18px;
    color: #172c47;
    height: 66px;
    line-height: 66px;
    /* text-align: center;
    justify-content: space-between; */

    .pagination-item {
      border-radius: 4px;
      border: 1px solid rgba(23, 44, 71, 0.2);
    }

    .onePagBtn {
      width: 96px;
    }

    .twoPagBtn {
      width: 66px;
    }

    .threePagBtn {
      width: 54px;
    }

    .firstBtn {
      margin-right: 10px;
    }

    .endBtn {
      margin-left: 10px;
    }
  }
}

/deep/ .t-pagination__number.t-is-current {
  background-color: #172C47;
  border-color: #172C47;
  color: #FF9C00;
}

/deep/ .t-pagination__number {
  color: #172C47;
}

/deep/ .page-area {
  width: 1650px;
  margin: 0 auto;
  padding: 30px 0 160px 0;
}

.pagination {
  /* display: none; */
}

.path-list {
  cursor: pointer;
  font-size: 20px;
  color: #172c47;
  height: 43px;
  line-height: 43px;
  margin-bottom: 38px;
}

.upPath {
  font-weight: bold;
}

.article-info {
  margin-bottom: 36px;
}

.article-title {
  font-weight: 600;
  font-size: 54px;
  color: #172c47;
  line-height: 76px;
}

.article-author {
  height: 97px;
  line-height: 97px;
  font-size: 20px;
  color: #172c47;
  font-weight: bold;
  border-bottom: 2px solid rgba(3, 73, 158, 0.11);
}

.article-area {
  width: 100%;
}

.more-article {
  display: flex;
  justify-content: space-between;
  margin-top: 160px;
  margin-bottom: 160px;
}

.more-article-itme {
  width: 390px;
  font-weight: bold;
  font-size: 24px;
  color: #172c47;
  line-height: 38px;
  cursor: pointer;
}

.more-article-itme:hover {
  color: #03499e;
}

.more-article-itmeImg {
  width: 100%;
  height: 270px;
  border-radius: 24px;
  margin-bottom: 30px;
}

.other-article-list {
  width: 350px;
  font-weight: bold;
  font-size: 24px;
  color: #172c47;
  line-height: 40px;
}

.other-article-list-title {
  margin-bottom: 8px;
}

.other-article-item {
  width: 100%;
  height: 125px;
  border-radius: 8px;
  border: 1px solid rgba(23, 44, 71, 0.2);
  font-weight: bold;
  font-size: 18px;
  color: #172c47;
  line-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 15px 18px;
  margin-bottom: 20px;
  cursor: pointer;
  background-color: #fff;
  position: relative;
}

.other-article-item:hover::before {
  content: "";
  position: absolute;
  top: -3.5px;
  left: -3px;
  right: -3px;
  bottom: -3.5px;
  z-index: -1;
  background-image: repeating-linear-gradient(
    125deg,
    #ff9c00,
    #ffcc9e,
    #74b6eb 80%,
    #68aaec,
    #04499f
  );
  border-radius: 8px;
  outline: 2px solid transparent;
  outline-offset: -2px;
}

.other-article-item-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  /*省略几行写几*/
  -webkit-box-orient: vertical;
}

.subTitle {
  font-weight: bold;
}

.article-content {
  margin-bottom: 30px;
}

.mba-professors {
  margin-top: 30px;
  cursor: pointer;
  color: #0052d9;
}
</style>