<script setup>
import "../css/home.css"
import { Icon } from '@iconify/vue'
import { lazyload, redirectToReservations, redirectToMenu } from "../scripts/base.js"

lazyload();
</script>

<template>
    <main class="flex center">
        <section class="content-primary flex column">
            <div class="content-top flex">
                <img class="logo invert lazyload" src="../assets/icons/logo-ahoy.svg" alt="logo restaurante ahoy" title="logo restaurante ahoy" width="100" height="100"/>
            </div>
            <div class="content-middle flex">
                <div class="flex column">
                    <h1 class="title">
                        Restaurante <span>Ahoy</span>
                    </h1>
                    <p class="text flex center">
                        Aproveite o melhor da culinária!
                    </p>
                </div>
            </div>
            <div class="content-bottom flex justify-between">
                <ul class="social flex center">
                    <li class="flex center">
                        <a href="" class="flex center">
                            <Icon icon="mdi:github" width="32"/>
                        </a>
                    </li>
                    <li class="flex center">
                        <a href="" class="flex center">
                            <Icon icon="mdi:linkedin" width="32"/>
                        </a>
                    </li>
                    <li class="flex center">
                        <a href="" class="flex center">
                            <Icon icon="mdi:instagram" width="32"/>
                        </a>
                    </li>
                </ul>
                <p class="rights-reserved">
                    @2023 - Todos os direitos reservados
                </p>
            </div>        
        </section>

        <section class="content-secondary flex column opening">
            <div class="content-top invert">

            </div>
            <div class="content-middle flex justify-center center column">
                <div class="text-content">
                    <h3 class="title">
                        Faça já a sua reserva e aproveite os pratos do cardápio!
                    </h3>
                </div>
                <div class="content flex justify-center">
                    <div class="flex center button dir-reservation" @click="redirectToReservations">
                        <span class="btn btn-primary">
                            <Icon icon="mdi:pin" width="16"/>
                            Reservar
                        </span>
                    </div>

                    <div class="flex cente button dir-menu" @click="redirectToMenu">
                        <span class="btn btn-secondary">
                            <Icon icon="mdi:book" width="16"/>
                            Cardápio
                        </span>
                    </div>
                </div>
            </div>
            <div class="content-bottom flex justify-between">
                <div class="time flex center">
                    <Icon icon="mdi:clock-time-four-outline" color="white" width="16"/>
                    <p class="text">
                        Aberto das 18h às 01h
                    </p>
                </div>
                <div class="contact flex center">
                    <Icon icon="mdi:phone" color="white" width="16"/>
                    <p class="text">
                        (47) 99999-9999
                    </p>
                </div>
            </div>
        </section>
    </main>
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