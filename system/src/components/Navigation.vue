<script setup>
    import "./style/navigation.css"
</script>

<template>
    <nav class="navbar flex justify-center center">
        <ul class="nav-items flex justify-center center">
            <li @click="navigateTo('home')">
                <span>
                    Home
                </span>
            </li>
            <li @click="navigateTo('about')">
                <span>
                    Sobre
                </span>
            </li>
            <li @click="navigateTo('menu')">
                <span>
                    Cardápio
                </span>
            </li>
            <li @click="navigateTo('reservation')">
                <span>
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