<template>
  <div class="dashboard-container">
    <div class="custom-header">
      <img src="@/assets/SunRentalsWB.png" alt="Website Logo" class="logo" />
      <button @click="logout" class="logout-button">Log Out</button>
    </div>

    <div class="dashboard">
      <h2>Admin Dashboard</h2>
      <button @click="goToManageAdmins">Manage Admins</button>
      <a href="/vans"><button>Manage Vans</button></a>
      <button>Manage Customers</button>
      <button>Manage Rentals</button>
<!--      <button>Manage Insurance</button>-->
<!--      <a href="/fleet-list"><button>Fleet And Rentals</button></a>-->
<!--      <button>Show all statistics</button>-->
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '@/layout/Footer.vue';

export default {
  name: 'AdminDashboard',
  components: {
    Footer,
  },
  methods: {
    goToManageAdmins() {
      this.$router.push('/manage-admins');
    },
    logout() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.custom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
}

.logo {
  height: 50px;
  width: auto;
  transition: transform 0.3s ease;
}

.logout-button {
  padding: 10px 20px;
  background-color: #ff4c4c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.logout-button:hover {
  background-color: #ff1c1c;
}

.dashboard {
  flex: 1;
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.dashboard button {
  display: block;
  margin: 10px auto;
  width: 320px;
  height: 40px;
  border: 1px solid black;
  background: orange;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
}
</style>


