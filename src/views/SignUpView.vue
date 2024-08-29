<template>
  <Header/>
<!-- <img src="" alt=""> -->
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" placeholder="Enter Name">
    <input type="text" placeholder="Enter Email">
    <input type="text" placeholder="Enter Password">
    <button>Sign Up</button>
  </div>


  <Footer/>

</template>

<script>
import Footer from '@/layout/Footer.vue';
import Header from '../layout/Header.vue';

export default {
    name: 'SignUp',
    components:{
        Header,
        Footer
    }

}
</script>

<style>

</style>