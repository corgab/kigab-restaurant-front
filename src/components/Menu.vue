<template>
    <div class="container mx-auto my-20 text-center">
        <h1 class="play-fair text-3xl font-bold mb-10 lg:text-4xl">{{ section.title }}</h1>
        <p class="leading-normal text-gray-900 text-lg lg:text-xl mb-7">{{ section.content }}</p>
        <!-- Da inserire pdf-->
        <a :href="restaurant.menu_url" target="_blank"
            class="cursor-pointer inline-block rounded-full font-medium border-solid border-2 py-1 px-2 lg:py-3 lg:px-6 ">
            MENU
        </a>
    </div>
</template>

<script>
import { fetchSection } from '@/services/sections';
import { fetchRestaurant } from '@/services/restaurants';
export default {
    props: {
        sectionSlug: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            section: {},
            restaurant: {},
        }
    },
    async created() {
        try {
            const [restaurantResponse, sectionResponse] = await Promise.all([
                fetchRestaurant(),
                fetchSection(this.sectionSlug)
            ]);

            this.restaurant = restaurantResponse.data
            this.section = sectionResponse.data

            // console.log(this.restaurant)
            // console.log(this.section)


        } catch (error) {
            console.error('Errore nel recupero dei dati:', error);
        }
    }
}



</script>

<style scoped>
.play-fair {
    font-weight: 400;
    font-size: 3rem;
}
</style>
