<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" color="#C75450">
      <Navigation></Navigation>
    </v-navigation-drawer>

    <v-app-bar app color="#C75450">
      <Bar></Bar>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import Navigation from "./components/navigation/Navigation";
import Bar from "@/components/navigation/Bar";
export default {
  name: 'App',
  components: {
    Navigation,
    Bar
  },
  data(){
    return{
      drawer:true
    };
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
