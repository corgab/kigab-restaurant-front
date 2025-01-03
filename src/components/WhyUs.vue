<template>
    <div class="bg-bg2">
        <div class="container mx-auto py-24">
            <div class="flex flex-wrap justify-center items-center gap-x-20">
                <!-- Colonna con immagine -->
                <div class="w-5/12">
                    <CardInfo :email="restaurant.email" :phone="restaurant.phone" :address="restaurant.address" />
                </div>
                <!-- Colonna con testo -->
                <div class="w-5/12 flex flex-col justify-center">
                    <h1 class="play-fair text-3xl font-bold mb-10 lg:text-4xl	">We provide healthy food for our
                        family.
                    </h1>
                    <h2 class="leading-normal text-gray-900 text-base lg:text-lg mb-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, voluptatum. Eum nam
                        explicabo
                        cupiditate, molestias velit excepturi in, consequuntur qui vero voluptatibus rerum eius, quia
                        animi.
                        Omnis quibusdam in ad.
                    </h2>
                    <h3 class="leading-normal text-gray-700 text-base lg:text-lg">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis amet rem autem nostrum in iste
                        sapiente? Nesciunt nulla optio
                        tenetur! Similique soluta consectetur hic modi tenetur at fugiat officia vel.
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import CardInfo from './CardInfo.vue';
import { fetchRestaurants } from '@/services/restaurants';;

export default {
    components: {
        CardInfo
    },
    data() {
        return {
            restaurant: {}
        }
    },
    async created() {
        try {
            const response = await fetchRestaurants();
            this.restaurant = response.data;
            // console.log(response);
        } catch (error) {
            console.error('Errore nel recupero utenti:', error);
        }
    },
}
</script>

<style scoped>
.play-fair {
    font-weight: 500;
}
</style>