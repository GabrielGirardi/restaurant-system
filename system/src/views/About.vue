
<script setup>
import { Icon } from '@iconify/vue'
import "../css/about.css"
</script>

<script>
export default {
    data() {
        return {
            restaurantName: 'Restaurante Ahoy',
            aboutText: 'Bem Vindos ao Ahoy! Aqui você encontra os melhores sabores em um ambiente confortável para toda família, aproveite essa experiência memorável.',
            history: 'O Ahoy foi fundado em 2010, com o objetivo de trazer o melhor da culinária para a cidade de Rio do Sul, e hoje é um dos restaurantes mais bem avaliados da região.',
            founders: 'John Doe e Jane Smith',
            phoneNumber: '(47) 99999-9999',
            email: 'ahoy@gmail.com',
            address: 'Avenida Maravilha das Motos, 89160-000 - Centro | Rio do Sul - SC',
            src: 'https://b.zmtcdn.com/data/pictures/6/18772376/7bca6b1da5cd3944f2d3bb2e959eec1f.jpeg',
            width: 1000,
            height: 600
        };
    }
};
</script>

<template>
    <div class="about-container flex justify-between slideIn">
        <div class="about-text flex column">
            <div class="text">0-
                <h1>{{ restaurantName }}</h1>
                <p>{{ aboutText }}</p>
                <p>{{ history }}</p>
            </div>

            <div class="contact flex center">
                <div class="tel flex center">
                    <Icon class="invert" icon="mdi:phone" width="18"/>
                    <a :href="'tel:' + phoneNumber">{{ phoneNumber }}</a>
                </div>
                <div class="email flex center">
                    <Icon class="invert" icon="mdi:email" width="18"/>
                    <a :href="'email:' + email">{{ email }}</a>
                </div>
            </div>

            <div class="founders-address flex center">
                <div class="founders">
                    <h3>Proprietários:</h3>
                    <p>{{ founders }}</p>
                </div>

                <div class="address">
                    <h3>Endereço:</h3>
                    <span>
                        <p>{{ address }}</p>
                    </span>
                </div>
            </div>
        </div>

        <div class="photography">
            <img :src="src" :width="width" :height="height" alt="Restaurant Photo" draggable="false"/>
        </div>
    </div>
</template>