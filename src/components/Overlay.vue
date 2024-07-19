<template>
  <div v-if="visible" class="overlay" @click="hideOverlay">
    <div class="overlay-content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Overlay',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideOverlay() {
      this.$emit('update:visible', false);
    }
  }
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.overlay-content {
  background: rgba(16, 23, 34,0.8);
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
}
</style>
