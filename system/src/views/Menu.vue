<script setup>
import "../css/menu.css"
import Pagination from "../components/Pagination.vue"
import { lazyload, redirectToReservations } from "../scripts/base.js"

lazyload();
</script>

<template>
    <section class="menu opening">
        <h1 class="title flex justify-center">
            Cardápio
        </h1>
        <p class="subtitle flex justify-center">
            Dê uma olhada em nosso cardápio e escolha o seu prato favorito!
        </p>

        <div class="menu-container">
            <div v-for="menuItem in paginatedMenu" :key="menuItem.id" class="menu-item">
                <img class="lazyload" :src="menuItem.image" :alt="menuItem.name" />
                <h2>{{ menuItem.name }}</h2>
                <p>{{ menuItem.description }}</p>
                <p class="price">R$ {{ menuItem.price }}</p>
                <span class="button flex center justify-center" @click="redirectToReservations">Reservar</span>
            </div>
        </div>

        <pagination :total="menu.length" :per-page="itemsPerPage" v-model="currentPage" />
    </section>
</template>
  
<script>  
export default {
    components: {
        Pagination
    },
    data() {
        return {
            menu: [
                { 
                    id: 1, 
                    name: 'Prato 1', 
                    description: 'Descrição do Prato 1', 
                    price: 45.90, 
                    image: 'https://img.freepik.com/fotos-premium/uma-tigela-de-comida-com-uma-faixa-marrom_664644-3988.jpg' 
                },
                { 
                    id: 2, 
                    name: 'Prato 2', 
                    description: 'Descrição do Prato 2', 
                    price: 29.90, 
                    image: 'https://img.freepik.com/fotos-premium/saboroso-prato-de-comida-brasileira-acaraj-com-fundo-branco-isolado_741910-44158.jpg' 
                },
                { 
                    id: 3, 
                    name: 'Prato 3', 
                    description: 'Descrição do Prato 3', 
                    price: 15.90, 
                    image: 'https://img.freepik.com/fotos-premium/saboroso-prato-de-comida-brasileira-canjica-com-fundo-branco-isolado_741910-29280.jpg' 
                },
                { 
                    id: 4, 
                    name: 'Prato 4', 
                    description: 'Descrição do Prato 4', 
                    price: 23.90, 
                    image: 'https://img.freepik.com/fotos-premium/saboroso-prato-de-comida-brasileira-canjica-com-fundo-branco-isolado_741910-29287.jpg' 
                },
                { 
                    id: 5, 
                    name: 'Prato 5', 
                    description: 'Descrição do Prato 5', 
                    price: 19.90, 
                    image: 'https://img.freepik.com/fotos-premium/saboroso-prato-de-comida-brasileira-canjica-com-fundo-branco-isolado_741910-29246.jpg' 
                },
                { 
                    id: 6, 
                    name: 'Prato 6', 
                    description: 'Descrição do Prato 6', 
                    price: 23.90, 
                    image: 'https://img.freepik.com/fotos-premium/saboroso-prato-de-comida-brasileira-canjica-com-fundo-branco-isolado_741910-29273.jpg' 
                },
                { 
                    id: 7, 
                    name: 'Prato 7', 
                    description: 'Descrição do Prato 7', 
                    price: 35.90, 
                    image: 'https://img.freepik.com/fotos-premium/saboroso-prato-de-comida-brasileira-canjica-com-fundo-branco-isolado_741910-29277.jpg' 
                },
                { 
                    id: 8, 
                    name: 'Prato 8', 
                    description: 'Descrição do Prato 8', 
                    price: 42.90, 
                    image: 'https://img.freepik.com/fotos-premium/caril-de-frango-fotorrealista-e-tigela-de-arroz-artesanato-requintado-e-vibracoes-villagecore_899449-24457.jpg' 
                },
                { 
                    id: 9, 
                    name: 'Prato 9', 
                    description: 'Descrição do Prato 9', 
                    price: 23.90, 
                    image: 'https://img.freepik.com/fotos-premium/curry-com-fundo-branco-ultra-hd-de-alta-qualidade_670382-89676.jpg' 
                },
                { 
                    id: 10, 
                    name: 'Prato 10', 
                    description: 'Descrição do Prato 10', 
                    price: 23.99, 
                    image: 'https://img.freepik.com/fotos-gratis/curry-de-frango-com-arroz_1339-100.jpg?size=626&ext=jpg'
                },
            ],
            currentPage: 1,
            itemsPerPage: 9 
        };
    },
    computed: {
        paginatedMenu() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.menu.slice(startIndex, endIndex);
        }
    }
};
</script>
  