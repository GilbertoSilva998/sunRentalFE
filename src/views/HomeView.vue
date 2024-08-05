<template>
 <Header/>
 
 <div class="home">
  
      <h1>Welcome to Sun Rentals the best van's with us! </h1>
      <p>Your perfect van rental awaits</p>
      <img class="body" src="../assets/vanHomePage4.jpg" alt="">
    <div class="container">
      <div class="image">
        <img src="../assets/vanOnTheSun.jpeg">
      </div>
      <div class="text">
        <h2>Sun Rentals</h2>
      
        <p>
    Lorem Ipsum is simply dummy text of the printing and <br />
    typesetting industry. Lorem Ipsum has been the industry's <br />
    standard dummy text ever since the 1500s, when an unknown <br />
    printer took a galley of type and scrambled it to make a <br />
    type specimen book. It has survived not only five centuries, <br />
    but also the leap into electronic typesetting, remaining <br />
    essentially unchanged. It was popularised in the 1960s with <br />
    the release of Letraset sheets containing Lorem Ipsum passages, <br />
    and more recently with desktop publishing software like Aldus <br />
    PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
 
    <section class="features">
      <div class="feature-item">
        <img src="../assets/vanHomePage2.jpeg" alt="Feature 1">
        <p>Beautiful van's</p>
      </div>
      <div class="feature-item">
        <img src="../assets/vanHomePage.jpeg" alt="Feature 2">
        <p>Luxury van's</p>
      </div>
      <div class="feature-item">
        <img src="../assets/vanHomePage4.jpg" alt="Feature 3">
        <p>Scenic van's</p>
      </div>
    </section>

  <Footer/>
 </div> 
</template>

<script>
import Footer from '@/layout/Footer.vue';
import Header from '../layout/Header.vue';

export default {
  name: 'HomeView',
  components: {
     Header,
     Footer
    
  }
}
</script>
