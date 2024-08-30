<template>
  <div class="nav">
    <header class="header">
      <div class="logo-container">
        <router-link to="/">
          <img class="img" src="../assets/SunRentalsWB.png" alt="Sun Rentals Logo" />
        </router-link>
      </div>
      <nav class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/fleet" class="nav-link">Fleet</router-link>
<!--        <router-link to="#" class="nav-link">Branches</router-link>-->
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/contactUs" class="nav-link">Contact Us</router-link>
        <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
        <router-link to="/signup" class="nav-link">Sign Up</router-link>
        <router-link to="/login" class="nav-link">Login</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #444;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
}

.img {
  height: 50px;
  width: auto;
  transition: transform 0.3s ease;
}

.img:hover {
  transform: scale(1.1);
}

.nav-links {
  display: flex;
  gap: 15px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffd700;
}

.nav-link:active {
  color: #ff8c00;
}

/* Ensure the content does not hide behind the fixed header */
.nav + .router-view {
  margin-top: 80px; /* Adjust this value based on the header height */
}
</style>
