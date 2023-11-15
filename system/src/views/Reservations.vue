<script setup>
import "../css/reservations.css"
import Tables from "../components/Tables.vue"
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
</script>

<template>
    <main class="reservations flex">
        <section class="content-info">
            <div class="informations">
                <p>Olá, Visitante!</p>
                <h1>Faça a reserva da sua mesa no <b>Ahoy</b></h1>
            </div>
            <div class="calendar">
                <h2 class="title flex center">
                    <Icon icon="mdi:calendar" width="32"/>
                    Selecione uma data
                </h2>
                <ul class="date flex center">
                    <li v-for="(day, index) in days" :key="index" @click="setActive(index)" :class="{ 'active': index === activeIndex }">
                        {{ day.date }}
                        <span>
                            {{ day.weekDay }}
                        </span>
                    </li>
                </ul>
            </div>
            <div class="people-amount">
                <h3 class="title flex center">
                    <Icon icon="iconoir:people-tag" color="white" width="32"/>
                    Selecione a quantidade de pessoas
                </h3>
                <ul class="options">
                    <li v-for="(option, index) in peopleAmount" :key="index" @click="setPeopleAmount(index)" :class="{ 'active': index === selectedOption }">
                        <Icon icon="pepicons-print:people" color="white" width="32"/>
                        <p>{{ option.text }}</p>
                    </li>
                </ul>
            </div>
            <div class="time">
                <h3 class="title flex center">
                    <Icon icon="wi:time-1" color="white" width="32" />
                    Selecione o horário
                </h3>
                <ul class="options">
                    <li v-for="(option, index) in times" :key="index" @click="setTime(index)" :class="{ 'active': index === selectedTime }">
                        {{ option.time }}
                    </li>
                </ul>
            </div>
        </section>

        <section class="content-tables">
            <h3 class="title flex center">
                <Icon icon="material-symbols:table-bar" color="white" width="32" />
                Escolha a localização da mesa
            </h3>
            <Tables/>
            <div class="show-room flex center justify-center">
                <h3 class="title flex center justify-center">
                    <Icon icon="material-symbols-light:music-cast" color="white" width="32"/>
                    Palco de shows
                </h3>
            </div>
        </section>
        
    </main>
</template>

<script>

export default {
    data() {
        return {
            days: [
                {
                    day: 1,
                    date: 20,
                    weekDay: 'Seg',
                    activeIndex: null,
                },
                {
                    day: 2,
                    date: 21,
                    weekDay: 'Ter',
                    activeIndex: null,
                },
                {
                    day: 3,
                    date: 22,
                    weekDay: 'Qua',
                    activeIndex: null,
                },
                {
                    day: 4,
                    date: 23,
                    weekDay: 'Qui',
                    activeIndex: null,
                },
                {
                    day: 5,
                    date: 24,
                    weekDay: 'Sex',
                    activeIndex: null,
                },
                {
                    day: 6,
                    date: 25,
                    weekDay: 'Sáb',
                    activeIndex: null,
                },
            ],
            activeIndex: null,
            peopleAmount: [
                {
                    id: 1,
                    amount: 4,
                    text: 'Duas a quatro pessoas',
                },
                {
                    id: 2,
                    amount: 8,
                    text: 'Seis a oito pessoas',
                },
                {
                    id: 3,
                    amount: 12,
                    text: 'Dez a doze pessoas',
                },
            ],
            selectedOption: null,
            times: [
                {
                    id: 1,
                    time: '18:00',
                },
                {
                    id: 2,
                    time: '19:00',
                },
                {
                    id: 3,
                    time: '20:00',
                },
                {
                    id: 4,
                    time: '21:00',
                },
                {
                    id: 5,
                    time: '22:00',
                },
                {
                    id: 6,
                    time: '23:00',
                },
            ],
            selectedTime: null,
        }
    },
    methods: {
        setActive(index) {
            this.activeIndex = index;
        },
        setPeopleAmount(index) {
            this.selectedOption = index;
        },
        setTime(index) {
            this.selectedTime = index;
        },
    }
}
</script>
