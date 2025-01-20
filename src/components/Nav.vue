<template>
    <nav>
        <div class="bg-[#474747]">
            <div class="container mx-auto">
                <div class="flex justify-between py-2">
                    <!-- Info -->
                    <div class="text-[#F9F9F7] font-normal text-sm flex gap-x-4 ">
                        <!-- !! Da inserire icone -->
                        <h1 v-if="restaurant.phone">{{ restaurant.phone }}</h1>
                        <h1 v-if="restaurant.email">{{ restaurant.email }}</h1>
                    </div>
                    <!-- Socials -->
                    <div></div>
                </div>
            </div>
        </div>
        <div class="container mx-auto">
            <div class="relative flex h-16 items-center justify-between">
                <!-- Mobile menu button -->
                <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
                    <button @click="isMobileMenuOpen = !isMobileMenuOpen"
                        class="inline-flex items-center justify-center rounded-full p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span class="sr-only">Open main menu</span>
                        <svg v-if="!isMobileMenuOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                        <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!-- Logo and navigation links -->
                <div class="flex flex-1 items-center justify-center  md:justify-between">
                    <router-link class="flex shrink-0 items-center" :to="{ name: 'Home' }">
                        <!-- Inserire immagine ristorante -->
                        <img v-if="restaurant.image_url" class="w-12" :src="restaurant.image_url"
                            :alt="`${restaurant.name} logo`" />
                        <div class="text-main rounded-full px-3 py-1 font-bold text-xl">
                            <h1 class="play-fair text-2xl">{{ restaurant.name }}</h1>
                        </div>
                    </router-link>
                    <div class="hidden lg:ml-6 md:block ">
                        <div class="flex space-x-3 ">
                            <!-- Navigazione dinamica -->
                            <router-link v-for="route in routes" :key="route.name" :to="{ name: route.name }" :class="[
                                isActive(route.name) ? 'bg-hover text-main' : 'text-main hover:bg-hover',
                                'rounded-full px-5 py-2 text-sm font-medium',
                            ]" :aria-current="isActive(route.name) ? 'page' : undefined">
                                {{ route.name }}
                            </router-link>
                        </div>
                    </div>
                    <!-- Notification Bell and Profile Menu -->
                    <!-- <div class="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:pr-0">
              <div class="hidden md:block">
                  <Button :text="'Book a table'" :isSmall="true" />
              </div>
            </div> -->
                </div>
            </div>

            <!-- Mobile menu -->
            <div v-if="isMobileMenuOpen" class="md:hidden py-5">
                <div class="space-y-1 px-2 pb-3 pt-2">
                    <router-link v-for="route in routes" :key="route.name" :to="{ name: route.name }" :class="[
                        isActive(route.name) ? 'bg-hover text-main' : 'text-main hover:bg-hover',
                        'block rounded-full px-3 py-2 text-base font-medium',
                    ]" :aria-current="isActive(route.name) ? 'page' : undefined">
                        {{ route.name }}
                    </router-link>
                </div>
                <!-- Book a Table -->
                <div
                    class="block mx-auto rounded-full border-2 border-main bg-main px-1 py-2 text-center font-medium text-base">
                    <Button :text="'Book a table'" class="text-white" />
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { fetchRestaurant } from '@/services/restaurants';;
import Button from './Button.vue'
import router from '@/router';

export default {
    components: {
        Button,
        router
    },
    data() {
        return {
            isMobileMenuOpen: false,
            restaurant: {},
        };
    },
    computed: {
        routes() {
            return router.options.routes.filter(route => route.name);
        },
    },
    methods: {
        isActive(routeName) {
            return this.$route.name === routeName;
        },
    },
    async created() {
        try {
            const response = await fetchRestaurant();
            this.restaurant = response.data;
            // console.log(response);
        } catch (error) {
            console.error('Errore nel recupero dei ristoranti:', error);
        }
    },
};
</script>

<style scoped>
.play-fair {
    font-weight: 600;
    font-style: italic;
}
</style>