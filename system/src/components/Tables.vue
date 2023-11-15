<script setup>
import "./style/tables.css"
import { ref } from 'vue';

const tables = ref([
    { id: 1, name: 'Mesa 1', available: true },
    { id: 2, name: 'Mesa 2', available: true },
    { id: 3, name: 'Mesa 3', available: true },
    { id: 4, name: 'Mesa 4', available: true },
    { id: 5, name: 'Mesa 5', available: true },
    { id: 6, name: 'Mesa 6', available: true },
    { id: 7, name: 'Mesa 7', available: true },
    { id: 8, name: 'Mesa 8', available: true },
    { id: 9, name: 'Mesa 9', available: true },
    { id: 10, name: 'Mesa 10', available: true },
    { id: 11, name: 'Mesa 11', available: true },
    { id: 12, name: 'Mesa 12', available: true },
    { id: 13, name: 'Mesa 13', available: true },
    { id: 14, name: 'Mesa 14', available: true },
    { id: 15, name: 'Mesa 15', available: true },
]);
  
</script>

<template>
    <div class="tables-content">
        <ul class="tables">
            <li v-for="(table, index) in tables" :key="index" @click="setSelectedTable(index)" :class="{ 'active': index === selectedTable }" >
                {{ table.name }}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data() {
        return {
            selectedTable: null,
        }
    },
    methods: {
        setSelectedTable(index) {
            this.selectedTable = index;
        }
    }
};
</script>  