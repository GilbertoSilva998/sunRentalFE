<template>
  <div>
    <!-- Include Header Component -->
    <Header />

    <div class="fleet-list">
      <div v-for="van in fleet" :key="van.id" class="van-card">
        <img :src="van.imageUrl" :alt="van.name" class="van-image" />
        <h2>{{ van.name }}</h2>
        <p>{{ van.type }}</p>
        <p>Capacity: {{ van.capacity }}</p>
        <p>Price per day: R{{ van.pricePerDay }}</p>
        <p v-if="van.available" class="available">Available</p>
        <p v-else class="not-available">Not Available</p>
      </div>
    </div>

    <!-- Include Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Footer from '@/layout/Footer.vue';
import Header from '@/layout/Header.vue';

export default {
  name: 'Fleet',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      fleet: [
        {
          id: 1,
          name: 'Ford Transit',
          type: 'Cargo Van',
          capacity: '3 seats, 10 cubic meters',
          pricePerDay: 100,
          available: true,
          imageUrl: 'path/to/image1.jpg',
        },
        {
          id: 2,
          name: 'Mercedes Sprinter',
          type: 'Passenger Van',
          capacity: '12 seats',
          pricePerDay: 150,
          available: false,
          imageUrl: 'path/to/image2.jpg',
        },
        {
          id: 3,
          name: 'Volkswagen Crafter',
          type: 'Cargo Van',
          capacity: '3 seats, 11 cubic meters',
          pricePerDay: 110,
          available: true,
          imageUrl: 'path/to/image3.jpg',
        },
        {
          id: 4,
          name: 'Renault Master',
          type: 'Cargo Van',
          capacity: '3 seats, 13 cubic meters',
          pricePerDay: 120,
          available: true,
          imageUrl: 'path/to/image4.jpg',
        },
        {
          id: 5,
          name: 'Peugeot Boxer',
          type: 'Passenger Van',
          capacity: '9 seats',
          pricePerDay: 140,
          available: false,
          imageUrl: 'path/to/image5.jpg',
        },
        {
          id: 6,
          name: 'Fiat Ducato',
          type: 'Cargo Van',
          capacity: '3 seats, 12 cubic meters',
          pricePerDay: 115,
          available: true,
          imageUrl: 'path/to/image6.jpg',
        },
        {
          id: 7,
          name: 'Iveco Daily',
          type: 'Cargo Van',
          capacity: '3 seats, 17 cubic meters',
          pricePerDay: 130,
          available: true,
          imageUrl: 'path/to/image7.jpg',
        },
        {
          id: 8,
          name: 'Toyota Hiace',
          type: 'Passenger Van',
          capacity: '15 seats',
          pricePerDay: 160,
          available: true,
          imageUrl: 'path/to/image8.jpg',
        },
        {
          id: 9,
          name: 'Nissan NV350',
          type: 'Passenger Van',
          capacity: '14 seats',
          pricePerDay: 155,
          available: false,
          imageUrl: 'path/to/image9.jpg',
        },
        {
          id: 10,
          name: 'Hyundai H350',
          type: 'Cargo Van',
          capacity: '3 seats, 15 cubic meters',
          pricePerDay: 125,
          available: true,
          imageUrl: 'path/to/image10.jpg',
        },
        {
          id: 11,
          name: 'Ford E-Transit',
          type: 'Cargo Van',
          capacity: '3 seats, 11 cubic meters',
          pricePerDay: 105,
          available: true,
          imageUrl: 'path/to/image11.jpg',
        },
        {
          id: 12,
          name: 'Chevrolet Express',
          type: 'Passenger Van',
          capacity: '12 seats',
          pricePerDay: 145,
          available: false,
          imageUrl: 'path/to/image12.jpg',
        },
        {
          id: 13,
          name: 'Ram ProMaster',
          type: 'Cargo Van',
          capacity: '3 seats, 13 cubic meters',
          pricePerDay: 115,
          available: true,
          imageUrl: 'path/to/image13.jpg',
        },
        {
          id: 14,
          name: 'GMC Savana',
          type: 'Passenger Van',
          capacity: '15 seats',
          pricePerDay: 155,
          available: true,
          imageUrl: 'path/to/image14.jpg',
        },
        {
          id: 15,
          name: 'Sprinter 4x4',
          type: 'Cargo Van',
          capacity: '3 seats, 12 cubic meters',
          pricePerDay: 135,
          available: false,
          imageUrl: 'path/to/image15.jpg',
        },
        {
          id: 16,
          name: 'Citroën Jumper',
          type: 'Cargo Van',
          capacity: '3 seats, 14 cubic meters',
          pricePerDay: 120,
          available: true,
          imageUrl: 'path/to/image16.jpg',
        },
        {
          id: 18,
          name: 'Opel Movano',
          type: 'Cargo Van',
          capacity: '3 seats, 16 cubic meters',
          pricePerDay: 130,
          available: true,
          imageUrl: 'path/to/image18.jpg',
        },
        {
          id: 19,
          name: 'Fiat Talento',
          type: 'Passenger Van',
          capacity: '8 seats',
          pricePerDay: 125,
          available: false,
          imageUrl: 'path/to/image19.jpg',
        },
      ]
    }
  }
}
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

.available {
  color: green;
}

.not-available {
  color: red;
}
</style>