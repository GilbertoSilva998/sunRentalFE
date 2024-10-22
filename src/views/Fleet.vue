<template>
  <div>
    <Header />
    <br/>
    <br/>
    <br/>
    <br/>

    <!-- Search Input Box -->
    <div>
      <input
          type="text"
          v-model="searchQuery"
          placeholder="Search by License Plate"
          class="search-box"
      />
    </div>
    <br/>
    <br/>

    <div class="fleet-list">
      <!-- Display Vans -->
      <div v-for="van in filteredFleet" :key="van.licensePlate" class="van-card">
        <img :src="`http://localhost:8080/van/image/${van.licensePlate}`" :alt="van.name" class="van-image" />
        <h2>{{ van.make }}</h2>
        <p>{{ van.licensePlate }}</p>
        <p>Model: {{ van.model }}</p>
        <p>Year: {{ van.year }}</p>
        <p>Capacity: {{ van.capacity }}</p>
        <p>Price: {{ van.price }}</p>
        <!-- Button to trigger booking -->
        <button @click="redirectToBooking(van)">Book now</button>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '@/layout/Footer.vue';
import Header from '@/layout/Header.vue';
import ApiService from '@/services/AxiosServiceVans'; // Fetch all vans API

export default {
  name: 'Fleet',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      fleet: [], // Initialize as an empty array
      searchQuery: ''
    };
  },
  computed: {
    filteredFleet() {
      return this.fleet.filter(van =>
          van.licensePlate.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  // Fetch the van when the component is created
  async created() {
    await this.fetchFleet();
  },
  methods: {
    // Method to fetch the vans from API
    async fetchFleet() {
      try {
        const response = await ApiService.getVans('http://localhost:8080/van/allVans');
        this.fleet = response.data;
      } catch (error) {
        console.error('Error fetching fleet:', error);
      }
    },
    // Method to redirect to booking page with selected customer & van
    redirectToBooking(van) {
      // Redirect to the Booking page and pass the selected van's details as query params
      const customer = JSON.parse(localStorage.getItem('customer'));
      console.log("Customer retrieve from localStorage", customer);

      if (customer && customer.email){
        this.$router.push({
        path: '/Booking',
        query: {
          customerEmail: customer.email,
          vanLicensePlate: van.licensePlate,
        }
      });
      }else {
        alert ('Please log in to proceed with booking');
      }
    }
  }
};
</script>

<style scoped>
.fleet-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.van-card {
  border: 1px solid #ccc;
  padding: 16px;
  width: 200px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;
}

.van-card:hover {
  transform: scale(1.05);
}

.van-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

</style>
