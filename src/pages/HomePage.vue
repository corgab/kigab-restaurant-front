<template>
    <HeroSection :slug="'hero-section'" />
    <WhyUs />

</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import WhyUs from '@/components/WhyUs.vue';
export default {
    components: {
        HeroSection,
        WhyUs
    },
}
</script>

<style scoped>
.play-fair {
    font-weight: 400;
    font-size: 3rem;
}
</style>