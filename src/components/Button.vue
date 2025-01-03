<template>
    <button type="button" class="rounded-full font-medium border-solid border-2" :class="[
        textColor, // Classe per il colore del testo
        'border-' + textColor.replace('text-', ''), // Classe per il colore del bordo
        isRed ? 'bg-[#AD343E] text-white border-transparent' : '', // Se isRed è true, applica il colore rosso
        isSmall ? 'py-1 px-2' : 'py-1 px-2 lg:py-3 lg:px-6', // Applica il padding in base al valore di isSmall
    ]">
        {{ text }}
    </button>
</template>

<script>
export default {
    props: {
        text: {
            required: true,
            type: String,
        },
        textColor: {
            type: String,
            default: 'text-main',
            validator: value => ['text-main', 'text-white'].includes(value), // Opzioni valide
        },
        isRed: {
            type: Boolean,
            default: false,
        },
        isSmall: {
            type: Boolean,
            default: false, // Se non viene passato, sarà `false` di default
        },
    },
}
</script>

<style scoped></style>
