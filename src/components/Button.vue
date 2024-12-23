<template>
    <button type="button" class="rounded-full py-1 px-2 text-main border-solid border-2 border-main font-medium"
        :class="[textColor, 'border-' + textColor.replace('text-', '')]">
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
            validator: value => ['text-main', 'text-white'].includes(value) // Opzioni valide
        }
    }
}
</script>

<style></style>