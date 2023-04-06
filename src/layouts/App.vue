<script>

  import AppNav from './AppNav.vue'
  import AppMain from './AppMain.vue'
  import AppFooter from './AppFooter.vue'
  
  export default {
    name: 'App',
    components: {
      AppNav,
      AppMain,
      AppFooter
    }
  }

</script>

<template>

  <AppNav />
  <AppMain />
  <AppFooter />

</template>