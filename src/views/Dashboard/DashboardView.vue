<template>
  <Header/>
  <div class="dashboard">
    <button>Manage Customers</button>
    <a href="/vans"><button>Manage Vans</button></a>
    <button>Manage Rentals</button>
    <button>Manage Insurance</button>
    <a href="/fleet-list"><button>Fleet And Rentals</button></a>
    <button>Show all statistics</button>
  </div>
  <Footer/>
</template>

<script>
import Footer from '@/layout/Footer.vue';
import Header from '@/layout/Header.vue';

export default {
  name: 'AdminDashboard',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
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
