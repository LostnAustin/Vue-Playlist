<template>
<nav>
    <ul>
        <li><router-link to="/">Home</router-link> </li>
        <li><router-link to="/">About</router-link></li>
        <li><router-link to="/">Contact</router-link></li>
        </ul>
    <v-toolbar fixed class = 'indigo' dark>
        <v-toolbar-title class = 'mr-4' dark @click="navigateTo('home')"> Playlist App</v-toolbar-title>
            <v-toolbar-items>
                <v-btn flat dark router to="/songs">My Songs </v-btn>
            </v-toolbar-items>

                <v-spacer></v-spacer>

                    <v-toolbar-items>
                  <v-btn flat dark router to="/Login">Login</v-btn>
                     <v-btn flat dark router to="/SignUp">Sign Up </v-btn>
            
            </v-toolbar-items>
    </v-toolbar>
</nav>
</template>
<script>

    export default {
        methods: {
            navigateTo (route) {
                this.$router.push(route)
            }
            }
        }
</script>

<style scoped>

</style>