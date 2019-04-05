import Api from '@/services/Api'

export default {
    register(creds) {
        return Api.post('register', creds)
    },
    login(creds) {
        return Api.post('login', creds)
    }
}

//import credentials and post response from api above