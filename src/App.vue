<template>
  <div id="app">
    
   <v-app>
     <app-header />
    <AddSong />
    <Home />
    <Login />
    <Panel />
    <SignUp />
    <Songs />
     <v-content>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-content> 
    </v-app>
  </div>
</template>



<script>
//below, import routes.js
import Header from './components/Header.vue'
import AddSong from './components/AddSong.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Panel from './components/Panel.vue'
import SignUp from './components/SignUp.vue'
import Songs from './components/Songs.vue'
export default {
  name: 'app', 
  components: {
    'app-header':Header,
    AddSong,
    Home,
    Login,
    Panel,
    SignUp,
    Songs
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
