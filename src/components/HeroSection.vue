<template>
    <div>
        <div :style="`background-image: url(${section.image_url});`" class="bg-cover bg-center ">
            <div class="container mx-auto w-2/6 py-40 text-center text-white">
                <h1 class="play-fair leading-tight my-7">{{ section.title }}</h1>
                <p class="leading-relaxed my-7 font-sans text-lg">{{ section.content }}</p>
                <div class="my-11 flex justify-around">
                    <Button text="Book a table" :textColor="'text-main'" :isRed="true" />
                    <Button text="Book a table" :textColor="'text-main'" :isRed="false" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchSection } from '@/services/sections';
import Button from './Button.vue';

export default {
    components: {
        Button
    },
    props: {
        slug: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            section: {},
        }
    },
    async created() {
        try {
            console.log(this.slug);
            const response = await fetchSection(this.slug);
            this.section = response.data;
            console.log(response);
        } catch (error) {
            console.error('Errore nel recupero della sezione:', error);
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
