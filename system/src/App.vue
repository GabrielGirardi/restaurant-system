<script setup>
import Home from "./views/Home.vue"
import Menu from "./views/Menu.vue"
import About from "./views/About.vue"
import Navigation from "./components/Navigation.vue"
import LoginArea from "./components/LoginArea.vue"
import Reservations from "./views/Reservations.vue"
import Login from "./views/Login.vue"
</script>

<template>
    <header class="flex justify-between center">
      <Navigation @navigate="navigateToPage"/>
      <LoginArea @navigate="navigateToPage"/>
    </header>

    <section>
      <Home v-if="currentPage === 'home'"/>
      <Menu v-else-if="currentPage === 'menu'"/>
      <About v-else-if="currentPage === 'about'"/>
      <Reservations v-else-if="currentPage === 'reservations'"/>
      <Login v-else="currentPage === 'login'"/>
    </section>
</template>


<script> 
export default {
  components: {
    Navigation,
    Home,
    About,
    Menu,
    Reservations,
    Login,
  },
  data() {
    return {
      currentPage: 'home',
    };
  },
  methods: {
    navigateToPage(page) {
      this.currentPage = page;
    },
  },
};
</script>