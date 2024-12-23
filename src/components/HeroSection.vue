<template>
    <div>
        <div class="container mx-auto w-2/6 my-48 text-center">
            <h1 class="play-fair leading-tight my-7">Best Food for your taste</h1>
            <p class="leading-relaxed my-7 font-sans text-lg">Discover delectable andd unfoge wikdm moments in our
                welcoming
                culinary
                haver.
            </p>
            <div class="my-11 flex justify-around">
                <Button text="Book a table" :textColor="'text-main'" :isRed="true" />

                <Button text="Book a table" :textColor="'text-main'" :isRed="false" />

            </div>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue';

export default {
    components: {
        Button
    }
}
</script>

<style scoped>
.play-fair {
    font-weight: 400;
    font-size: 3rem;
}
</style>