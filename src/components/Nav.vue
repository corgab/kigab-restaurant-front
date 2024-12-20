<template>
    <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <!-- Mobile menu button -->
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button @click="isMobileMenuOpen = !isMobileMenuOpen"
                        class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <router-link class="flex shrink-0 items-center" :to="{ name: 'HomePage' }">
                        <!-- Inserire immagine ristorante -->
                        <img class="h-8 w-auto"
                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                            :alt="restaurant.name" />
                    </router-link>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <router-link v-for="item in navigation" :key="item.name" :to="item.href" :class="[
                                isActive(item.href.name)
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium'
                            ]" :aria-current="isActive(item.href.name) ? 'page' : undefined">
                                {{ item.name }}
                            </router-link>
                        </div>
                    </div>
                </div>
                <!-- Notification Bell and Profile Menu -->
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button type="button"
                        class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span class="sr-only">Guarda le notifiche</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0h6z" />
                        </svg>
                    </button>

                </div>
            </div>

            <!-- Mobile menu -->
            <div v-if="isMobileMenuOpen" class="sm:hidden">
                <div class="space-y-1 px-2 pb-3 pt-2">
                    <router-link v-for="item in navigation" :key="item.name" :to="item.href" :class="[
                        isActive(item.href.name)
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                    ]" :aria-current="isActive(item.href.name) ? 'page' : undefined">
                        {{ item.name }}
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
// import { fetchRestaurant } from '@/services/restaurants';
import { fetchRestaurants } from '../services/restaurants';  // percorso relativo

export default {
    data() {
        return {
            isMobileMenuOpen: false,
            navigation: [
                { name: 'Login', href: { name: 'Login' } },
                { name: 'Team', href: { name: '' } },
                { name: 'Projects', href: { name: '' } },
                { name: 'Calendar', href: { name: '' } },
            ],
            restaurant: {}
        };
    },
    methods: {
        isActive(routeName) {
            return this.$route.name === routeName;
        },
    },
    async created() {
        try {
            const response = await fetchRestaurants();
            this.restaurant = response.data;
            console.log(response.data);
        } catch (error) {
            console.error('Errore nel recupero utenti:', error);
        }
    }
};
</script>
