<template>
    <div class="bg-[#474747]">
        <div class="container mx-auto">
            <div class="flex flex-col sm:flex-row justify-around items-start pt-16">
                <!-- Colonna 1: Info Ristorante -->
                <div class="w-full sm:w-1/4 mb-8 sm:mb-0">
                    <div class="flex items-center text-white">
                        <img :src="restaurant.image_url" :alt="'logo - ' + restaurant.name"
                            class="w-12 svg-filter pe-2">
                        <h1 class="play-fair">{{ restaurant.name }}</h1>
                    </div>
                    <p class="my-5 leading-relaxed text-footer font-light">{{ restaurant.description }}</p>
                    <div>
                        <!-- Socials -->
                    </div>
                </div>
                <!-- Colonna 2: Pagine -->
                <div class="w-full sm:w-1/4 mb-8 sm:mb-0">
                    <h1 class="text-white text-base">Pages</h1>
                    <ul class="my-5">
                        <li v-for="route in routes" :key="route.name" class="py-1">
                            <router-link :to="route.path" class="text-footer hover:underline">
                                {{ route.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <!-- Colonna 3: Socials (aggiungere contenuti se necessari) -->
                <div class="w-full sm:w-1/4 mb-8 sm:mb-0">
                    <h1 class="text-white">Post Socials</h1>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
            <h1 class="text-center py-5 text-footer text-sm sm:text-base">&copy; {{ new Date().getFullYear() }} Kigab
                Developer. All Rights Reserved</h1>
        </div>
    </div>
</template>

<script>
import { fetchRestaurant } from '@/services/restaurants.js';
import router from '@/router';

export default {
    data() {
        return {
            restaurant: {},
        };
    },
    computed: {
        routes() {
            return router.options.routes.filter(route => route.name);
        },
    },
    async created() {
        try {
            const response = await fetchRestaurant();
            this.restaurant = response.data;
            console.log(this.restaurant);
        } catch (error) {
            console.error('Errore nel recupero dei dati:', error);
        }
    },
};
</script>

<style scoped>
.play-fair {
    font-weight: 500;
    font-style: italic;
}

.svg-filter {
    filter: invert(1);
    mix-blend-mode: lighten;
}
</style>
