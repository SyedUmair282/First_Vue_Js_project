<template>
<Header />
<h1 class="head">Hello {{name}}, Welcome to home page</h1>
<div id="con2">
    <table border="2">
        <tr id="tr1">
            <td>SERIAL</td>
            <td>NAMES</td>
            <td>ADDRESS</td>
            <td>CONTACT</td>
            <td>ACTION</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.address}}</td>
            <td>{{item.contact}}</td>
            <td><Button>
                <router-link :to="'/update-restuarant/'+item.id" id="li">Update</router-link>
            </Button>
            <Button v-on:click="Delete(item.id)">
                Delete
            </Button>
            </td>
        </tr>
    </table>
</div>
</template>

<script>
import Header from './header.vue';
import axios from 'axios';
export default {
    name: 'Home',
    components: {
        Header
    },
    data() {
        return {
            name: "",
            restaurants: [],
        }
    },
    methods:{
        async Delete(id){
            console.log(id);
            let result = await axios.delete('http://localhost:3000/restaurants/'+id);
            if(result.status==200){
                this.load();
            }
        },
        async load(){
            let user = JSON.parse(localStorage.getItem('user-info'));
        if (!user) {
            this.$router.push({
                name: 'signup'
            })
        }
        this.name = user[0].name;
        let result = await axios.get('http://localhost:3000/restaurants');
        this.restaurants = result.data;
        }
    },
    mounted() {
        this.load();
    }
}
</script>

<style scoped>

table{
    margin:0 auto;
    font-size: 1.3rem;
    background-color: lightgreen;
    
}
#tr1 {
    font-weight: bold;
}

td {
    text-align: center;
    width: 15rem;
    height: 2rem;
}
#li{
    text-decoration: none;
    color: black;
}
</style>
