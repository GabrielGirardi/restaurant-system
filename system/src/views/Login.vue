<script setup>
import "../css/login.css";
import Swal from "sweetalert2";
</script>

<template>
    <div class="login-container">
        <div class="login-form" :class="{ 'hidden': activeTab !== 'login'}">
            <h2>Login</h2>
            <form @submit.prevent="login">
                <label for="username">Usuário:</label>
                <input type="text" id="username" v-model="username" required />

                <label for="password">Senha:</label>
                <input type="password" id="password" v-model="password" required />

                <button type="submit">Entrar</button>
            </form>
            <p @click="toggleTab('signup')">Ainda não tem uma conta? Crie uma agora.</p>
        </div>

        <div class="signup-form" :class="{ 'hidden': activeTab !== 'signup'}">
            <h2>Criar Conta</h2>
            <form @submit.prevent="register">
                <label for="newUsername">Novo Usuário:</label>
                <input type="text" id="newUsername" v-model="newUsername" required />

                <label for="newPassword">Nova Senha:</label>
                <input type="password" id="newPassword" v-model="newPassword" required />

                <button type="submit">Criar Conta</button>
            </form>
            <p @click="toggleTab('login')">Já tem uma conta? Faça login</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'login',
            username: '',
            password: '',
            newUsername: '',
            newPassword: '',
        };
    },
    methods: {
        toggleTab(tab) {
            this.activeTab = tab;
        },
    },
};
</script>
