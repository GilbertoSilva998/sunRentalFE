<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/signup">Sign Up</router-link> |
    <router-link to="/login">Login</router-link>
  </nav> -->
  <router-view/>

  <img src="" alt="">
</template>

<script>
import VansView from "@/views/Dashboard/Vans/VansView.vue";

export default {
  name : 'App',
  compents: {
    VansView

  }
}

</script>
<style>
#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#app > * {
  flex-shrink: 0;
}

.header img {
    height: 80px;
    margin-left: 10px;
}

.body {
    height: 55vh;
    background-image: '../assets/vanHomePage4.jpg';
    background-size: cover;
    font-family: sans-serif;
    /* margin-top: 80px; */
    /* padding: 30px; */
}

main {
    color: white;
    flex-grow: 1;
}

.header {
  background-color: white;
    /* position: fixed; */
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 25px 0 black;
}

.header * {
    display: inline;
}
header li {
    margin: 20px;
}

header li a {
    color: black;
    text-decoration: none;
}
.nav {
  background-color: white;
  position: top;
  /* padding: 30px;  */
  color: gray-800;

}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: font-size-sm;
  font-weight: 600;
  text-transform: uppercase;
  font-size: .875rem;
  letter-spacing: .05px;


}

nav a.router-link-exact-active {
  color: orange;
}
.logo{
    width: 100px;
}

.home {
  text-align: center;
  font-family: Arial, sans-serif;
}

.features {
  display: flex;
  justify-content:space-evenly;
  margin: 20px 0;
}

.feature-item {
  text-align: center;
}

.feature-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
}

.footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
  margin-top: 180px;

}

.register input, .login input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid orange;

}

.register textarea{
    width: 300px;
    height: 120px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid orange;

}

.register button, .login button{
    width: 320px;
    height: 40px;
    border: 1px solid black;
    background: rgb(241, 171, 41);
    color:#fff;
    cursor: pointer;
    margin-bottom: 30px;
    font-weight: bold;
    text-transform: uppercase;
}

.container {
  display:inline-flex;
  align-items: center; /* Optional: Vertically center align */
}

.image {
  margin-right: 30px; /* Space between image and text */

}

.text {
  flex-grow: 1; /* Optional: Allows text to take up remaining space */
}

</style>
