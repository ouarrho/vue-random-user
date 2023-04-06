<script>

  export default {
    name: 'AppFooter'
  }

</script>

<template>
  <footer>
    <div>
      <a role="button">version 1.0.0</a>

      <router-link to="/about">about</router-link>

      <router-link to="/contact">contact</router-link>
    </div>
  </footer>
</template>

<style scoped>

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 24px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2rem;
    z-index: 4;
  }

  footer > div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 100%;
    max-width: 40rem;
    padding: 2rem;
    background-color: #f9f9fa;
  }

  footer > div > a {
    color: #222;
    font-size: 1.2rem;
    text-decoration: underline !important;
  }
</style>