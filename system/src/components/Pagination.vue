<script setup>
import "./style/css/pagination.css"
import Swal from 'sweetalert2'
</script>

<template>
    <div class="pagination">
        <button class="prev" @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
            Anterior
        </button>
        <span>
            {{ currentPage }}
        </span>
        <button class="next" @click="errorMessage()" :disabled="currentPage === totalPages">
            Próximo
        </button>
    </div>
</template>
  
<script>
export default {
    props: {
        total: {
            type: Number,
            required: true
        },
        perPage: {
            type: Number,
            default: 9
        },
        value: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            currentPage: this.value
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.total / this.perPage);
        }
    },
    watch: {
        currentPage(newPage) {
            this.$emit('input', newPage);
        }
    },
    methods: {
        goToPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
        errorMessage() {
            Swal.fire({
                title: 'Ooops!',
                text: 'No momento não é possível visualizar mais itens no cardápio, estamos trabalhando para adicionar mais produtos em breve!',
                icon: 'warning',
                confirmButtonText: 'Aceitar'
            })
        }
    }
};
</script>