<script setup>
    import "./style/login-area.css";
    import { Icon } from '@iconify/vue'
</script>

<template>
    <div class="login-area flex justify-center center column">
        <div class="icon-user flex justify-center center">
            <Icon class="invert" icon="mdi:user" width="32" height="32"/>
        </div>

        <div class="login-content hidden center justify-between column">
            <span class="flex center column">
                <p>Bem vindo visitante!</p>
                <p><a href="">Faça seu login</a></p>
            </span>
           <p>Ainda não possui uma conta?  <a href="">Cadastre-se agora!</a></p>
        </div>
    </div>
</template>