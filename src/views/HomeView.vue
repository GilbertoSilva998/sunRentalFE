<template>
  <div class="home">
    <Header />

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Sun Rentals</h1>
        <p>Your perfect van rental experience starts here.</p>
        <router-link to="/fleet" class="cta-button">Explore Our Fleet</router-link>
      </div>
      <img class="hero-image" src="../assets/vanHomePage4.jpg" alt="Hero Image">
    </section>

    <!-- Feature Section -->
    <section class="features">
      <h2>Why Choose Us?</h2>
      <div class="feature-grid">
        <div class="feature">
          <img src="../assets/vanHomePage2.jpeg" alt="Feature 1">
          <h3>Beautiful Vans</h3>
          <p>Our vans are designed for both style and functionality, ensuring a smooth ride and an unforgettable experience.</p>
        </div>
        <div class="feature">
          <img src="../assets/vanHomePage.jpeg" alt="Feature 2">
          <h3>Luxury Vans</h3>
          <p>Experience unparalleled comfort and elegance with our premium van selection, crafted for a luxurious journey.</p>
        </div>
        <div class="feature">
          <img src="../assets/vanHomePage4.jpg" alt="Feature 3">
          <h3>Scenic Vans</h3>
          <p>Embark on scenic adventures with our specially designed vans, perfect for capturing every moment of your travels.</p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="about-text">
        <h2>About Sun Rentals</h2>
        <p>
          At Sun Rentals, we provide top-tier van rental services to enhance your travel experiences. Our extensive fleet
          features high-quality, well-maintained vehicles tailored to meet diverse needs, from leisurely family vacations
          to efficient business trips. Our commitment to excellence ensures that every journey is smooth and enjoyable.
          With flexible rental options, competitive pricing, and exceptional customer support, we strive to make your travel
          seamless and memorable. Choose Sun Rentals for unmatched reliability and comfort on your next adventure.
        </p>
      </div>
      <img src="../assets/vanOnTheSun.jpeg" alt="About Image">
    </section>

    <!-- Footer -->
    <Footer />
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

<style scoped>
.home {
  font-family: 'Arial, sans-serif';
  color: #333;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Hero Section */
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  background: url('../assets/vanHomePage4.jpg') no-repeat center center;
  background-size: cover;
}

.hero-content {
  background: rgba(0, 0, 0, 0.5);
  padding: 30px;
  border-radius: 10px;
}

.hero-content h1 {
  font-size: 3.5em;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.5em;
  margin-bottom: 30px;
}

.cta-button {
  display: inline-block;
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

/* Feature Section */
.features {
  padding: 60px 20px;
  background-color: #f4f4f4;
  text-align: center;
}

.features h2 {
  font-size: 2.5em;
  margin-bottom: 40px;
  color: #333;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.feature {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  background: white;
  padding: 20px;
}

.feature img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.feature h3 {
  font-size: 1.5em;
  margin-top: 10px;
}

.feature p {
  font-size: 1em;
  margin-top: 10px;
}

/* About Section */
.about {
  display: flex;
  align-items: center;
  padding: 60px 20px;
  background-color: #fff;
  gap: 20px;
  flex-direction: column;
}

.about-text {
  max-width: 600px;
  text-align: center;
}

.about-text h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

.about-text p {
  line-height: 1.6;
  font-size: 1.1em;
}

.about img {
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin-top: 20px;
}

/* Footer */
footer {
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
}
</style>
