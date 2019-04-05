import Login from './components/Login.vue'
import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Songs from './components/Songs.vue'
// import AddSong from './componenents/AddSong.vue'


export default [
    { path: '/', component:Login },
    { path: 'login', component:Login },
    { path: '/home', componenent:Home },
    { path: '/SignUp', component:SignUp },
    { path: '/songs', components:Songs },
 //   { path: '/AddSong', components:AddSong }
    
]