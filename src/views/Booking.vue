<template>
  <div>
    <Header />
    <br />
    <br />
    <br />
    <div class="booking-page">
      <div class="booking-text">
        <h2>Book Van - {{ form.vanModel }} ({{ form.vanLicensePlate }})</h2>
        <p>Fill out the form below to complete your booking.</p>
      </div>
      <div class="booking-form">
        <form class="register" @submit.prevent="submitForm">
        <!-- Email-->
          <div class="form-group">
            <input type="text" v-model="form.customerEmail" placeholder="Email Address*" required />
          </div>
          <!-- Van Information (License Plate) -->
          <div class="form-group">
            <input type="text" v-model="form.vanLicensePlate" readonly placeholder="Van License Plate" />
          </div>
          <!-- Pickup Date & Time -->
          <div class="form-group">
            <input type="datetime-local" v-model="form.pickupDateTime" required placeholder="Pick-up Date & Time*" />
          </div>
          <!-- Drop-off Date & Time -->
          <div class="form-group">
            <input type="datetime-local" v-model="form.dropOffDateTime" required placeholder="Drop-off Date & Time*" />
          </div>
          <!-- Submit Button -->
          <button type="submit">Book Now</button>
        </form>
        <!-- Show response message -->
        <p v-if="responseMessage" class="response-message">{{ responseMessage }}</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Footer from '@/layout/Footer.vue';
import Header from '@/layout/Header.vue';

export default {
  name: 'BookingPage',
  components: {
    Header,
    Footer,
  },
  data() {
    console.log('Query Params on Booking Page: ', this.$route.query);
    return {
      form: {
        customerEmail: this.$route.query.customerEmail || '',
        vanLicensePlate: this.$route.query.vanLicensePlate || '', // Get van license plate from query params
        pickupDateTime: '',
        dropOffDateTime: '',
      },
      responseMessage: '',
    };
  },
  methods: {
    async submitForm() {
      try {

        const token = localStorage.getItem('jwtToken');
        console.log("JWT Token: ", token);

        await axios.post('http://localhost:8080/api/bookings/create', this.form, {
          headers: {
            Authorization: `Bearer ${token}`
          },
        });
        // Handle success
        this.responseMessage = 'Booking successfully submitted!';
        this.clearForm(); // Clear form after successful submission
      } catch (error) {
        // Handle error
        if(error.response){
          console.error('Error submitting booking:', error.response.data);
        }

        this.responseMessage = 'There was an error submitting your booking. Please try again.';
      }
    },
    clearForm() {
      // Clear form fields after submission
      this.form = {
        customerEmail: '',
        vanLicensePlate: '',
        pickupDateTime: '',
        dropOffDateTime: '',
      };
    }
  }
};
</script>

<style scoped>
.booking-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.booking-text {
  margin-bottom: 20px;
}

.booking-text h2 {
  color: #ff6600;
}

.booking-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 14px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
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
  background-color: #ff4500;
}

.response-message {
  margin-top: 20px;
  color: green;
}
</style>
