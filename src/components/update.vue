<template>
    <Header />
    <br>
    <div class="con">
        <img class="img1" src="../assets/images.png" alt="">
        <h1>Update Restaurant For Better Expreince</h1>
    </div>
    <div class="container">
        <input type="text" v-model="restaurant.name" placeholder="Enter name" />
        <input type="text" v-model="restaurant.address" placeholder="Enter address" />
        <input type="text" v-model="restaurant.contact" placeholder="Enter contact" />
        <button v-on:click="update">Update restaurant</button>
    </div>
</template>
<script>
import Header from './header.vue';
import axios from 'axios';
export default {
    name:'update',
    components:{
        Header
    },
     data(){
        return{
            restaurant:{
                name:"",
                address:'',
                contact:''
            }
        }
    },methods:{
        async update(){
            await axios.put('http://localhost:3000/restaurants/'+this.$route.params.id,{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
            });
            this.$router.push({name:'Home'});

        }
    },
    async mounted(){
        let user=JSON.parse(localStorage.getItem('user-info'));
        if(!user){
            this.$router.push({name:'signup'})
        }
        let result=await axios.get("http://localhost:3000/restaurants/"+this.$route.params.id);
        //console.log(result);
        this.restaurant=result.data
    }
}
</script>
<style scoped>
.con {
    width: 30rem;
    margin: 0 auto;
    text-align: center;
}

.img1 {
    height: 6rem;
    width: 8rem;
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
</style>