<template>
  <Nav />
  <RouterView />
  <Footer :routes="routes" />
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import router from './router';
export default {
  components: {
    Nav,
    Footer
  },
  computed: {

  },
}
</script>

<style lang="scss" scoped></style>