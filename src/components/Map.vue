<template>
    <div class="pt-10">
        <div class="map-container w-full overflow-hidden relative pb-64 sm:pb-80">
            <iframe :src="mapLink" style="border:0;" allowfullscreen="true" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
</template>

<script>
import { fetchRestaurant } from '@/services/restaurants';
export default {
    data() {
        return {
            mapLink: String
        };
    },
    async created() {
        try {
            const response = await fetchRestaurant();
            this.mapLink = response.data.map_link;
            // console.log(response.data.map_link);
        } catch (error) {
            console.error('Errore nel recupero dei ristoranti:', error);
        }
    },
}
</script>

<style scoped>
.map-container {
    /* padding-bottom: 30%; */
    height: 0;
}

.map-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
