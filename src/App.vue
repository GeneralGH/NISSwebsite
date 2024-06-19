<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import autofit from 'autofit.js'

export default Vue.extend({
  mounted() {
    console.log('访问页面')
    this.$request.post('/api/view/addPageView')
  },
});
</script>

<style lang="less">
body {
  margin: 0;
  font-family: 'Microsoft YaHei', sans-serif;
}

.module-card {
  width: 398px;
  height: 380px;
  position: relative;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 17px;
  margin: 0;
  padding: 0;
}

.module-card::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  z-index: -1;
  background-image: repeating-linear-gradient(125deg, #FF9C00, #FFCC9E, #74B6EB 80%, #68AAEC, #04499F);
  border-radius: 20px;
  outline: 2px solid transparent;
  outline-offset: -2px;
}
</style>
