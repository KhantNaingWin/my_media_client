import axios from "axios"
import { mapGetters } from "vuex"

export default {
    name : 'NewsDetails',
    data() {
        return {
            postId: 0,
            postDetails: {},
            viewCount: 0
        }
    },
    computed: {
        ...mapGetters(["storeUserData"])
    },
    methods: {
        loadData(id) {
            let post = {
                postId : id
            }
            axios.post('http://localhost:8000/api/post/details',post).then(response => {
                // console.log(response.data.post);
                    if(response.data.post.image != null){
                     response.data.post.image ="http://localhost:8000/storage/"+ response.data.post.image;
                    }else{
                     response.data.post.image ="http://localhost:8000/dafaultphotoes/default-image.jpg";
                    }
                    this.postDetails = response.data.post
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
        let data = {
            userId : this.storeUserData.id,
            postId : this.$route.params.id
        }
        axios.post("http://localhost:8000/api/post/action",data).then(response => {
            console.log(response.data.post);
           this.viewCount = response.data.post.length
           console.log(this.viewCount);
        })
        this.postId=this.$route.params.id,
        this.loadData(this.postId)
    },
}