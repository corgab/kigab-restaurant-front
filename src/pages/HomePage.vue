<template>
    <HeroSection :sectionSlug="'hero-section'" />
    <Menu :sectionSlug="'our-menu'" />
    <WhyUs :sectionSlug="'about-us'" />
    <ProductsGallery />
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import Menu from '@/components/Menu.vue';
import WhyUs from '@/components/WhyUs.vue';
import ProductsGallery from '@/components/ProductsGallery.vue';
export default {
    components: {
        HeroSection,
        Menu,
        WhyUs,
        ProductsGallery,
    },
}
</script>

<style scoped>
.play-fair {
    font-weight: 400;
    font-size: 3rem;
}
</style>