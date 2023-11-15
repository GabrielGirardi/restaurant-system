<script setup>
    import "./style/css/login-area.css";
    import { Icon } from '@iconify/vue'
</script>

<template>
    <div class="login-area flex justify-center center column">
        <div class="icon-user flex justify-center center" @click="navigateTo('login')">
            <Icon class="invert" icon="mdi:user" width="32" height="32"/>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    navigateTo(page) {
      this.$emit('navigate', page);
    },
  },
};
</script>