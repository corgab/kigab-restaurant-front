<template>
    <div class="bg-bg2">
        <div class="container mx-auto py-20">
            <div class="flex flex-wrap justify-center items-center gap-x-20">
                <!-- Colonna con immagine -->
                <!-- <div class="md:w-5/12"> -->
                <CardInfo :email="restaurant.email" :phone="restaurant.phone" :address="restaurant.address"
                    :image="section.image_url" />
                <!-- </div> -->
                <!-- Colonna con testo -->
                <div
                    class=" lg:w-5/12 flex flex-col justify-center text-center lg:text-start my-10 lg:my-0 px-10 md:px-0">
                    <h1 class="play-fair text-3xl font-bold mb-10 lg:text-4xl">{{ section.title }}</h1>
                    <h2 class="leading-normal text-gray-900 text-base lg:text-lg mb-10">{{ restaurant.description }}
                    </h2>
                    <h3 class="leading-normal text-gray-700 text-base lg:text-lg">{{ section.content }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import CardInfo from './CardInfo.vue';
import { fetchRestaurant } from '@/services/restaurants';
import { fetchSection } from '@/services/sections';

export default {
    components: {
        CardInfo
    },
    props: {
        sectionSlug: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            restaurant: {},
            section: {},
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
    },
}
</script>

<style scoped>
.play-fair {
    font-weight: 500;
}
</style>