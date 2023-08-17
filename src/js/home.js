import axios from "axios"
import { mapGetters } from "vuex";

export default {
    name : 'HomePage',
   
    data() {
        return {
            postList: {},
            categoryList : {},
            searchKey : "",
            tokenStatus: false,
        }
    },
    computed : {
        ...mapGetters(["storeToken","storeUserData"]),
    },
    methods: {
        getAllPost() {
            axios.get('http://localhost:8000/api/post/list').then((response)=>{
                    for (let i = 0; i < response.data.post.length; i++) {
                       if(response.data.post[i].image != null){
                        response.data.post[i].image ="http://localhost:8000/storage/"+ response.data.post[i].image;
                       }else{
                        response.data.post[i].image ="http://localhost:8000/dafaultphotoes/default-image.jpg";
                       }
                       
                    }
                this.postList = response.data.post;
            }).catch((error)=>{
                console.log(error);
            })
        },
        loadCategory(){
            axios.get('http://localhost:8000/api/allcategory').then(response => {
                this.categoryList = response.data.category;
                // console.log(this.categoryList);
            }).catch(error => {
                console.log(error);
            })
        },
        search(){
            let search = {
                key : this.searchKey
            }
            axios.post('http://localhost:8000/api/post/search',search).then(response => {

                for (let i = 0; i < response.data.key.length; i++) {
                    if(response.data.key[i].image != null){
                     response.data.key[i].image ="http://localhost:8000/storage/"+ response.data.key[i].image;
                    }else{
                     response.data.key[i].image ="http://localhost:8000/dafaultphotoes/default-image.jpg";
                    }
                    
                 }

                this.postList = response.data.key;
                // console.log(this.postList);
            }).then(error =>{
                console.log(error);
            })
        },
        searchCategory(searchKey){
            let search = {
                key : searchKey
            }
            axios.post('http://localhost:8000/api/category/list',search).then(response => {
                for (let i = 0; i < response.data.result.length; i++) {
                    if(response.data.result[i].image != null){
                     response.data.result[i].image ="http://localhost:8000/storage/"+ response.data.result[i].image;
                    }else{
                     response.data.result[i].image ="http://localhost:8000/dafaultphotoes/default-image.jpg";
                    }
                    
                 }

                this.postList = response.data.result;
            }).catch(error => console.log(error))
        },
        NewsDetails(id){
            this.$router.push({
                name: 'newsDetails',
                params: {
                    id : id
                }
            })
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
       checkToken(){
        
        if(this.storeToken != null && this.storeToken != undefined && this.storeToken != ""){
            this.tokenStatus = true;
        }else{
            this.tokenStatus = false;
        }

       },
      
    },
    mounted () {
        this.checkToken();
        this.loadCategory();
       this.getAllPost();
    },
}