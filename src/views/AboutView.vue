<template>
  <Header/>
  <div class="about">
    <header class="head">
      <h1>About Sun Rentals</h1>
      <p>We offer the best van rental services for your needs.</p>
    </header>
    <section class="content">
      <div class="section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide high-quality, <br/>
          reliable, and affordable van rental services.<br/>
          Whether you're planning a family vacation or <br/>
          a business trip, we've got the perfect van for you.
        </p>
      </div>
      <div class="section">
        <h2>Our Fleet</h2>
        <p>
          We have a wide range of vans to suit every need. <br/>
          From compact vans to large passenger vans, we ensure <br/>
          that our vehicles are well-maintained and ready for <br/>
          your journey.
        </p>
      </div>
      <div class="section">
        <h2>Contact Us</h2>
        <p>
          Have any questions? Feel free to <a href="/contactUs">contact us</a>.
        </p>
      </div>
    </section>
   
  </div>

  <Footer/>
</template>

<script>

import Footer from '@/layout/Footer.vue';
import Header from '../layout/Header.vue';
export default {
  name: 'About',
  components:{
        Header,
        Footer
    }

}
</script>

<style>
.about {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  font-family: Arial, sans-serif;
}

.head {
  background-color: orange;
  padding: 20px;
  color: white;
}

.head h1 {
  margin: 0;
  font-size: 3em;
}

.head p {
  font-size: 1.5em;
}

.content {
  flex-grow: 1;
  padding: 20px;
}

.section {
  margin: 20px 0;
}

.section h2 {
  font-size: 2em;
  color: #333;
}

.section p {
  font-size: 1.2em;
  color: #666;
}
</style>