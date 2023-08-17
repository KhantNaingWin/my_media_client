import axios from "axios"
import { mapGetters } from "vuex"
export default {
    name : "LoginPage",
    data() {
        return {
            userData : {
                email : "",
                password: ""
            },
            loginStatus: false
        }
    },
    computed : {
        ...mapGetters(["storeToken","storeUserData"]),
    },
    methods: {
        accountLogin() {
            axios.post('http://localhost:8000/api/login',this.userData).then(response => {
               if (response.data.token == null) {
                this.loginStatus = false;
               }else{
                this.loginStatus = true;
                this.$store.dispatch('setToken',response.data.token);
                this.$store.dispatch('getUserData',response.data.user);
                this.homePage();
               }
            }).catch(error => console.log(error))
        },
        loginPage(){
            this.$router.push({
                name : 'login'
            })
           },
           logout(){
            this.$store.dispatch('setToken',null);
            this.loginPage();
           },
           homePage(){
            this.$router.push({
                name : 'homepage'
            })
           },
    },
    mounted () {
        this.userData = {};
        this.loginStatus=true;
    },
   
}