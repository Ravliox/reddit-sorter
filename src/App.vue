<template>
  <div id="app">
    <img :src="logo" class="logo">
    <h1 class="app-title">Reddit Sorter </h1>
    <div class="navbar">
      <router-link to="/all">All</router-link>
      <router-link to="/nosleep">No Sleep</router-link>
      <router-link to="/videos">Videos</router-link>
      <router-link to="/music">Music</router-link>
      <router-link to="/baduibattles">Bad Ui Battles</router-link>
      <router-link to="/search"><b-icon icon="magnify" size="is-medium"></b-icon></router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      logo: require("./assets/logo.png")
    }
  }
}
</script>

<style lang="scss">
#app {
  font-size: 12px;
  padding: 20px 50px;
}

.logo {
  height: 120px;
  display: block;
  margin: auto;
}

.navbar {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  a {
    font-size: 1.2rem;
  }
}

.page-title {
  font-size: 2.2rem;
  text-align: center;
}

.app-title {
  font-size: 3rem;
  text-align: center;
}

@media screen and (max-width: 450px) {
  #app {
    padding: 10px 5px;
    font-size: 6px; 
  }

  .app-title {
    font-size: 2.5rem;
  }

  .page-title {
    margin-top: 20px;
    font-size: 1.5rem;
  }

  .navbar {
    flex-wrap: wrap;
    justify-content: center;
    a {
      margin: 0 20px;
      
    }
  }
}
</style>
