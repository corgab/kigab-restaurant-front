<template>
    <div class="bg-gray-50 lg:flex items-center justify-center relative lg:mx-auto w-max">
        <!-- <div class=""> -->
        <!-- Immagine -->
        <div class="lg:relative block">
            <div class="img_container w-max lg:w-2/3  overflow-hidden rounded-t-lg md:rounded-lg lg:shadow-lg">
                <img :src="image" alt="" class="w-full h-auto lg:shadow-lg" />
                <!-- da inserire alt-->
            </div>
        </div>
        <!-- Scheda Informazioni -->
        <div
            class="block lg:absolute lg:-bottom-8 lg:-right-5 transform  bg-gray text-white p-6 rounded-b-lg md:rounded-lg lg:shadow-xl lg:w-2/3 md:my-4 lg:my-0">
            <h2 class="text-xl font-semibold mb-4">Come and visit us</h2>
            <div class="space-y-3">
                <!-- Telefono -->
                <div class="flex items-center space-x-3">
                    <i class="bi bi-telephone"></i>
                    <span>{{ phone }}</span>
                </div>
                <!-- Email -->
                <div class="flex items-center space-x-3">
                    <i class="bi bi-envelope"></i>
                    <span>{{ email }}</span>
                </div>
                <!-- Indirizzo -->
                <div class="flex items-center space-x-3">
                    <i class="bi bi-geo-alt"></i>
                    <span>{{ address }}</span>
                </div>
            </div>
        </div>
        <!-- </div> -->
    </div>

</template>

<script>
export default {
    props: {
        email: String,
        phone: String,
        address: String,
        image: String,
    }
}
</script>

<style scoped>
.img_container {
    width: 100%;
}

@media (min-width: 1024px) {
    .img_container {
        width: 450px;
    }
}
</style>