<template>
    <div class="h-container">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li><router-link to="/add-restuarant">Add restuarant</router-link></li>
            <li><a v-on:click="logout()" href="#">Logout</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'header',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'login'})
        }
    }
}
</script>

<style scoped>
.h-container{
    border: 1px solid black;
    background-color: black;
}
.h-container ul{
    display: flex;
    list-style: none;
    margin-left: -1.5rem;
    
    
}
ul li{
    margin-left: 2rem;
    font-size: 1.3rem;
}
ul li a{
    text-decoration: none;
    color: white;
}
ul li a:hover{
    background-color: white;
    color: black;
}
</style>