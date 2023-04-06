<script>

  export default {
    name: 'AppNav',
    data: () => {
      return {
        currentPage: window.location.pathname
      }
    },
    methods: {
      nav: function(page){
        return 'app-nav-link' + ( this.currentPage === page ? ' current' : '' );
      },
      changeCurrentPage: function(page){
        this.currentPage = page;
      }
    }
  }
</script>

<template>
  <nav id="app-nav">
    <div id="app-nav-container">
      <router-link to="/" :class="nav('/')" @click="e => changeCurrentPage('/')">
        <span class="material-symbols-outlined">home</span>
        <span>home</span>
      </router-link>

      <router-link to="/about" :class="nav('/about')" @click="e => changeCurrentPage('/about')">
        <span class="material-symbols-outlined">info</span>
        <span>about</span>
      </router-link>

      <router-link to="/contact" :class="nav('/contact')" @click="e => changeCurrentPage('/contact')">
        <span class="material-symbols-outlined">contact_support</span>
        <span>contact</span>
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
#app-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 5.75rem;
  padding: 0;
  margin: 0;
  background: #fff;
  color: #222;
  text-align: center;
  box-shadow: 0px 1px 4px #4444;
  z-index: 100;
}

#app-nav-container {
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  max-width: 40rem;
  height: 100%;
  padding: 0;
  margin: 0;
  font-size: 2rem;
  font-weight: normal;
}

.app-nav-link {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 20%;
  height: 100%;
  padding: 0 1rem;
}

.app-nav-link.current, .app-nav-link:hover {
  border-bottom: 0.2rem solid #1a73e8;
  background-color: hsl(214, 100%, 95%);
}

.app-nav-link.current > span, .app-nav-link:hover > span {
  color: #1a73e8;
}

.app-nav-link > span:nth-child(1) {
  font-size: 2.4rem;
}

.app-nav-link > span:nth-child(2) {
  font-size: 1.4rem;
}
</style>