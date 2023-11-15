<script setup>
    import "./style/css/navigation.css"
    import { Icon } from '@iconify/vue'
</script>

<template>
    <nav class="navbar flex justify-center center">
        <ul class="nav-items flex justify-center center">
            <li @click="navigateTo('home')">
                <span>
                    <Icon icon="mdi:home" color="white" width="15" height="15"/>
                    Home
                </span>
            </li>
            <li @click="navigateTo('about')">
                <span>
                    <Icon icon="mdi:about" color="white" width="15" height="15"/>
                    Sobre
                </span>
            </li>
            <li @click="navigateTo('menu')">
                <span>
                    <Icon icon="mdi:book" color="white" width="15" height="15"/>
                    Cardápio
                </span>
            </li>
            <li @click="navigateTo('reservations')">
                <span>
                    <Icon icon="mdi:pin" color="white" width="15" height="15"/>
                    Reservas
                </span>
            </li>
        </ul>
    </nav>
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