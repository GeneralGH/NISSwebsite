<!--  -->
<template>
  <div class='footer-area'>
    <div class="footer-div">
      <div class="toplist-area">
        <div class="list-item" v-for="(item, index) in topList">
          <div class="item-name">{{ userLanguage == '1' ? item.name : item.nameEn }}</div>
          <div class="item-child">
            <div :class="i.name == '相关政策' ? 'upbox' : ''" v-for="(i) in item.list" @click="jump(i.path)">{{ userLanguage == '1' ? i.name : i.nameEn }}</div>
          </div>
        </div>
      </div>
      <div class="webInfo">
        <div class="logo">
          <img src="../../assets/header/logo.png" alt="">
        </div>
        <div class="registration-info">
          <div>Nanyang Institute of Social Sciences</div>
          <div>PEI Registration No. 201813165E</div>
          <div>Registration Period: 10/05/2024 - 09/05/2028</div>
        </div>
        <div class="contact-information">
          <img @click="toOther('https://www.facebook.com/SGNISS/')" src="../../assets/footer/facebook.png" alt="">
          <img @click="toOther('https://www.linkedin.com/company/nanyang-institute-of-social-sciences/about/')" src="../../assets/footer/ins.png" alt="">
          <img @click="copyPhone" src="../../assets/footer/phone.png" alt="">
        </div>
      </div>
      <div class="webSign">© 2024 NISS. All rights reserved.</div>
      <div class="back-top-area">
        <div class="order-message-area" @click="jump('/consultationForm')">
          <div :class="userLanguage == '1' ? 'zh' : 'en'">{{ userLanguage == '1' ? '预约一对一咨询' : 'Schedule an Info Session' }}</div>
          <img src="../../assets/footer/Side.png" alt="">
        </div>
        <div class="back-top">
          <img src="../../assets/footer/backTop.png" alt="" @click.stop="toTop">
        </div>
      </div>
    </div>

    <div class="footer-mobile" style=" margin: 0 25px 0 45px;">
      <div class="toplist-area">
        <div class="list-item" v-for="(item, index) in topList" :key="index">
          <div class="item-name">{{ userLanguage == '1' ? item.name : item.nameEn }}</div>
          <div class="item-child" >
            <div v-for="(i, itemIndex) in item.list" @click="jump(i.path)" :key="itemIndex">{{ userLanguage == '1' ? i.name : i.nameEn }}</div>
          </div>
        </div>
      </div>
      <div class="mobile-web-info">
        <div class="logo">
          <img style="width: 100%; height: 100%;" src="../../assets/header/logo.png" alt="">
        </div>
        <div class="contact-information">
          <img @click="toOther('https://www.facebook.com/SGNISS/')" class="icon" src="../../assets/footer/facebook.png" alt="">
          <img @click="toOther('https://www.linkedin.com/company/nanyang-institute-of-social-sciences/about/')" class="icon" src="../../assets/footer/ins.png" alt="">
          <img @click="copyPhone" class="icon" src="../../assets/footer/phone.png" alt="">
        </div>
      </div>
      <div class="registration-info">
        <div>Nanyang Institute of Social Sciences</div>
        <div>PEI Registration No. 201813165E</div>
        <div>Registration Period: 10/05/2024 - 09/05/2028</div>
      </div>
      <div class="web-sign">© 2024 NISS. All rights reserved.</div>
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
      topList: [
        {
          name: '项目导航',
          nameEn: 'Program Navigation',
          list: [
            { name: 'MBA', nameEn: 'MBA', path: '/jnumba' },
            { name: '南特工商管理博士', nameEn: 'Doctor of Business Administration', path: '/DBArouter'},
            { name: '高管教育', nameEn: 'Executive Education', path: '/highEdu' }
          ]
        },
        {
          name: '相关链接',
          nameEn: 'Links',
          list: [
            { name: '联系我们', nameEn: 'Contact Us', path: '/contactUs' },
            { name: '相关政策', nameEn: 'Privacy Policy', path: '/policy' }
          ]
        },
        {
          name: '联系我们',
          nameEn: 'Contact Us',
          list: [
            {
              name: `地址：30 Orange Grove Road, #07-77 RELC Building，Singapore 258352`,
              nameEn: 'Address: 30 Orange Grove Road, #07-77 RELC Building, Singapore 258352'
            },
            { name: '邮箱：enquiry@niss.edu.sg', nameEn: 'Email: enquiry@niss.edu.sg' },
            { name: '电话：+65 6592 0000', nameEn: 'Telephone: +65 6592 0000' }
          ]
        }
      ]
    };
  },
  computed: {
    userLanguage() {
      return this.$store.state.userLanguage;
    }
  },
  watch: {
    userLanguage(newVal) {
    }
  },
  //方法集合
  methods: {
    copyPhone() {
      /* const phoneNumber = '+65 6592 0000';
      navigator.clipboard.writeText(phoneNumber)
        .then(() => {
          // 复制成功
          this.$message.success('电话号码已成功复制')
        }) */
        window.open('https://api.whatsapp.com/send?phone=6563203595', '_blank');
    },

    toOther(url) {
      window.open(url, '_blank');
    },

    callPhoneNumber() {
      const phoneNumber = '+65 6592 0000';
      window.location.href = 'tel:' + phoneNumber;
    },

    jump(path) {
      if (!path) {
        return
      }
      this.$router.push(path)
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 可选，使用平滑滚动效果
      });
    },

    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 可选，使用平滑滚动效果
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  beforeCreate() {
  }, //生命周期 - 创建之前
  beforeMount() {
  }, //生命周期 - 挂载之前
  beforeUpdate() {
  }, //生命周期 - 更新之前
  updated() {
  }, //生命周期 - 更新之后
  beforeDestroy() {
  }, //生命周期 - 销毁之前
  destroyed() {
  }, //生命周期 - 销毁完成
  activated() {
  }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style scoped lang="less">

@media (max-width: 720px) {
  .web-sign {
    color: #9498a0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin-top: 20px;
  }

  .registration-info {
    color: #9498a0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }

  .mobile-web-info {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 213px;
      height: 62px;
    }

    .contact-information {
      .icon {
        width: 40px;
        height: 40px;
        padding-left: 20px;
      }
    }
  }

  .footer-div {
    display: none !important;
  }

  .webInfo {
    display: none !important;
  }

  .back-top-area {
    display: none !important;
  }

  .footer-mobile {
    display: block !important;

    .toplist-area {
      display: flex;
      flex-direction: column;
    }

    .item-name {
      font-size: 24px !important;
      height: 54px !important;
      line-height: 54px !important;
      margin-bottom: 20px !important;
      border-bottom: 1px solid #2a5395;
    }
  }
}

.upbox {
  margin-top: -2px !important;
}

.footer-mobile {
  display: none;
}

.back-top-area {
  position: absolute;
  right: -265px;
  top: 197px;

  .order-message-area {
    width: 225px;
    height: 50px;
    padding: 0 3px;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 22px;
    cursor: pointer;

    div {
      font-weight: bold;

      color: #03499E;
      line-height: 46px;
      margin-left: 15px;
    }

    .zh {
      font-size: 20px;
    }

    .en {
      font-size: 12px;
    }

    img {
      width: 45px;
      height: 45px;
      display: block;
    }
  }

  .back-top {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    img {
      width: 48px;
      height: 48px;
      cursor: pointer;
    }
  }
}

.footer-area {
  background: linear-gradient(180deg, #0D3D91 0%, #181818 100%);
  box-sizing: border-box;
  padding: 45px 0;

  .footer-div {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .toplist-area {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .list-item {
      flex: 1;

      .item-name {
        font-weight: 500;
        font-size: 20px;
        color: #FFFFFF;
        margin-bottom: 40px;
      }

      .item-child {
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
        cursor: pointer;

        div {
          margin-bottom: 20px;
          opacity: 0.7;
        }
      }
    }
  }

  .webInfo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid rgba(113, 155, 206, 0.3);
    border-bottom: 2px solid rgba(113, 155, 206, 0.3);
    padding: 42px 0;

    .logo {
      flex: 1;
    }

    .logo img {
      width: 181px;
      height: 53px;
      display: block;
    }

    .registration-info {
      opacity: 0.7;
      font-weight: 300;
      font-size: 18px;
      color: #FFFFFF;
      flex: 1;

      div {
        margin-bottom: 10px;
      }
    }

    .contact-information {
      flex: 1;
      display: flex;
      justify-content: end;

      img {
        width: 46px;
        height: 46px;
        margin-left: 24px;
        display: block;
        cursor: pointer;
      }
    }
  }

  .webSign {
    opacity: 0.7;
    color: #FFFFFF;
    font-weight: 300;
    font-size: 18px;
    margin-top: 50px;
  }
}
</style>