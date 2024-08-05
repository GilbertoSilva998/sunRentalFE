<template>
 <div class="nav">
    <header class="header">
    
        <img  class="img" src="../assets/SunRentalsWB.png" to="/">
    
    <nav>
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="#">Fleet</router-link> |
    <router-link to="#">Branches</router-link> | -->
    <router-link to="/about">About</router-link> |
    <router-link to="/contactUs">Contact Us</router-link> |
    <router-link to="/dashboard">Dashboard</router-link> |
    <router-link to="/signup">Sign Up</router-link> |
    <router-link to="/login">Login</router-link>
  </nav>
</header>
  <router-view/>
  </div>
</template>

<script>
export default {
    name: 'Header'
    
}
</script>

<style>



</style>