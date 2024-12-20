<template>
  <Nav />
  <RouterView />
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss" scoped></style>