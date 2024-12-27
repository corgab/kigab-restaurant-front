<template>
    <div class="bg-gray-50 lg:flex items-center justify-center">
        <div class="relative mx-auto">
            <!-- Immagine -->
            <div class="lg:relative block">
                <img src="/cibo.jpg" alt="Delicious Food" class="rounded-lg shadow-lg" />
            </div>

            <!-- Scheda Informazioni -->
            <div
                class="block lg:absolute lg:-bottom-8 lg:-right-5 transform  bg-gray text-white p-6 rounded-lg shadow-lg lg:w-2/3 my-4 lg:my-0">
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
        </div>
    </div>

</template>

<script>
export default {
    props: {
        email: String,
        phone: String,
        address: String
    }
}
</script>

<style lang="scss" scoped></style>