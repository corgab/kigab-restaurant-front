<template>
    <div class="container mx-auto text-center py-20">
        <h1 class="text-3xl lg:text-4xl font-bold pb-10 play-fair">Our Products</h1>
        <div class="relative flex items-center justify-center">
            <!-- Indietro -->
            <button @click="prevSlide"
                class="absolute left-2 sm:left-4 text-4xl w-12 h-12 flex items-center justify-center z-10">
                <i class="bi bi-arrow-left-circle"></i>
            </button>

            <!-- Contenitore del carosello -->
            <div class="overflow-hidden w-full max-w-4xl">
                <div class="flex transition-transform duration-500"
                    :style="{ transform: `translateX(-${currentIndex * itemWidth}px)` }">
                    <div v-for="(photo, index) in photos" :key="index"
                        :style="{ flex: `0 0 calc(100% / ${visibleItems})` }" class="px-2">
                        <img :src="photo.image_url" :alt="photo.title"
                            class="rounded-lg shadow-md w-full object-cover" />
                    </div>
                </div>
            </div>

            <!-- Avanti -->
            <button @click="nextSlide"
                class="absolute right-2 sm:right-4 text-4xl w-12 h-12 flex items-center justify-center">
                <i class="bi bi-arrow-right-circle"></i>
            </button>
        </div>
    </div>
</template>

<script>
import { fetchGalleries } from "@/services/galleries";

export default {
    data() {
        return {
            photos: [],
            currentIndex: 0, // Indice
            visibleItems: 3, // Numero di elementi visibili (default per desktop)
            itemWidth: 0, // Larghezza di ogni elemento
        };
    },
    methods: {
        calculateItemWidth() {
            const carouselWidth = document.querySelector(".overflow-hidden").clientWidth;
            this.itemWidth = Math.floor(carouselWidth / this.visibleItems); // Arrotonda per evitare problemi
        },
        adjustVisibleItems() {
            // Modifica il numero di elementi visibili in base alla larghezza dello schermo
            const screenWidth = window.innerWidth;
            if (screenWidth < 640) {
                this.visibleItems = 1; // Smartphone
            }
            this.calculateItemWidth();
        },
        nextSlide() {
            if (this.currentIndex < this.photos.length - this.visibleItems) {
                this.currentIndex++;
            }
        },
        prevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
        },
    },
    async created() {
        try {
            const response = await fetchGalleries();
            this.photos = response.data;
        } catch (error) {
            console.error("Errore nel recupero delle immagini:", error);
        }
    },
    mounted() {
        // Calcola la larghezza dell'elemento quando il componente è montato
        this.adjustVisibleItems();
        window.addEventListener("resize", this.adjustVisibleItems);
    },
    beforeDestroy() {
        // Rimuovi il listener di resize
        window.removeEventListener("resize", this.adjustVisibleItems);
    },
};
</script>

<style scoped>
.play-fair {
    font-weight: 500;
}
</style>