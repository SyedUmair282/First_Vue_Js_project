<template>
<div class="main">
    <div class="con">
        <img class="img1" src="../assets/images.png" alt="">
        <h1>Sign up</h1>
    </div>

    <div class="container">
        <input type="text" v-model="name" placeholder="Enter your name" />
        <input type="email" v-model="email" placeholder="Enter your email" />
        <input type="password" v-model="password" placeholder="Enter your password" />
        <button v-on:click="signUp">Sign up</button>
        <p>Already have an account?
            <router-link to="/login" id="link">Login</router-link>
        </p>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: 'signup',
    data(){
        return{
            name:"",
            email:"",
            password:""
        }
    },
    methods:{
        async signUp(){
            let result=await axios.post("http://localhost:3000/users",{
                name:this.name,
                email:this.email,
                password:this.password
            });
            console.log("REsult are: ",result.data);
            localStorage.setItem("user-info",JSON.stringify(result.data));
            this.name=null;
            this.email=null;
            this.password=null;
            this.$router.push({name:'Home'});
        }
    },
    mounted(){
        let user=localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Home'})
        }
    }
}
</script>

<style scoped>
.main{
  margin-top: 60px;
}
.con {
    width: 30rem;
    margin: 0 auto;
    text-align: center;
}

.img1 {
    height: 6rem;
    width: 8rem;
}

h1 {
    font-family: 'Times New Roman', Times, serif;
    color: brown;
}

.container {

    display: flex;
    flex-direction: column;
    width: 30rem;
    margin: 0 auto;

}

.container input {
    width: 28rem;
   margin-top: 20px;
    height: 2rem;
    border-radius: 5px;
    border: 1px solid brown;
    font-size: 15px;
    padding: 5px;

}

.container input:focus {
    outline-color: brown;
}

button {
    border-radius: 5px;
    width: 28.8rem;
    color: white;
    margin-top: 20px;
    height: 2rem;
    background-color: brown;
    border: 1px solid brown;
    cursor: pointer;
    font-size: 15px
}
#link{
    text-decoration: none;
    color: brown;
}
</style>
