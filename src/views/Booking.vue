<template>
  <div>
    <Header />
    <br/>
    <br/>
    <br/>
    <div class="booking-page">
      <div class="booking-text">
        <h2>Book a Van</h2>
        <p>Fill out the form below to book your van. We’ll get back to you as soon as possible to confirm your booking.</p>
      </div>
      <div class="booking-form">
        <form class="register" @submit.prevent="submitForm">
          <!-- Add booking-specific form fields here -->
          <div class="form-group">
            <input type="text" id="firstName" v-model="form.firstName" placeholder="First Name*" required>
          </div>
          <div class="form-group">
            <input type="text" id="lastName" v-model="form.lastName" placeholder="Last Name*" required>
          </div>
          <div class="form-group">
            <input type="tel" id="phone" v-model="form.phone" placeholder="Contact Number*" required>
          </div>
          <div class="form-group">
            <input type="email" id="email" v-model="form.email" placeholder="Email Address*" required>
          </div>
          <div class="form-group">
            <select v-model="form.van" id="van" required>
              <option value="" disabled selected>Select a Van*</option>
              <option v-for="van in availableVans" :key="van.licensePlate" :value="van.licensePlate">
               {{van.licensePlate}} - {{van.make}} - {{van.model}}
              </option>
            </select>
          </div>
          <div class="form-group">
            <input type="datetime-local" id="pickupDateTime" v-model="form.pickupDateTime" placeholder="Pick-up Date & Time*" required>
          </div>
          <div class="form-group">
            <input type="datetime-local" id="dropOffDateTime" v-model="form.dropOffDateTime" placeholder="Drop-off Date & Time*" required>
          </div>
          <button type="submit">Book</button>
        </form>
        <p v-if="responseMessage" class="response-message">{{ responseMessage }}</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Footer from '@/layout/Footer.vue';
import Header from '../layout/Header.vue';

export default {
  name: 'BookingPage',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        van: '',
        pickupDateTime: '',
        dropOffDateTime: ''
      },
      availableVans: [],
      responseMessage: ''
    };
  },
  mounted(){
    this.fetchAvailableVans();
  },
  methods: {
    async fetchAvailableVans(){
      try {
      const response = await axios.get('http://localhost:8080/van/allVans');
      this.availableVans = response.data;
      }catch (error){
        console.error('Error fetching available vans:', error);
        this.responseMessage = "Failed to load available vans.";
      }
    },
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:8080/van/booking', this.form, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        this.responseMessage = 'Booking successfully sent';
        this.form = {
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          van: '',
          pickupDateTime: '',
          dropOffDateTime: ''
        };
      } catch (error) {
        console.error('There was an error!', error);
        this.responseMessage = 'An error occurred while submitting the booking form.';
      }
    }
  }
};
</script>

<style scoped>
/* Reuse the same styles as your contact page */
.booking-page {
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  gap: 40px;
}

.booking-text {
  flex: 1;
  padding: 30px;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.booking-text h2 {
  font-size: 32px;
  margin-bottom: 20px;
  color: #ff6600;
}

.booking-form {
  flex: 2;
  padding: 30px;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.register {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

select,
input,
textarea {
  width: 100%;
  padding: 14px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  background-color: #f2f2f2;
}

button {
  width: 100%;
  padding: 14px;
  background-color: #ff6600;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: green;
}

.response-message {
  margin-top: 20px;
  color: #ff6600;
}
</style>
