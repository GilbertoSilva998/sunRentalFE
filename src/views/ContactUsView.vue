<template>
  <div>
    <Header />
    <div class="contact-us">
      <div class="contact-text">
        <h2>Contact Sun Rentals</h2>
        <p>If you have any questions or need further information, feel free to reach out to us. We’re here to help!</p>
        <div class="info-item">
          <h3>Address</h3>
          <p>55654 Mvundla Street, Kuyasa, Khayelitsha, 774</p>
        </div>
        <div class="info-item">
          <h3>Phone</h3>
          <p>(+27) 762 983 736</p>
        </div>
        <div class="info-item">
          <h3>Email</h3>
          <p>sunrentals@gmail.com</p>
        </div>
      </div>
      <div class="contact-form">
        <form class="register" @submit.prevent="submitForm">
          <div class="form-group">
            <select v-model="form.branch" id="branch" required>
              <option value="" disabled selected>Select a branch*</option>
              <option>Khayelitsha</option>
              <option>Woodstock</option>
              <option>Wynberg</option>
              <option>Wellington</option>
              <option>Bellville</option>
            </select>
          </div>
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
            <input type="email" id="confirmEmail" v-model="form.confirmEmail" placeholder="Confirm Email*" required>
            <p v-if="form.email !== form.confirmEmail && form.confirmEmail" class="error-message">
              Email and Confirm Email must match.
            </p>
          </div>

          <div class="form-group">
            <textarea id="message" v-model="form.message" placeholder="Message*" required></textarea>
          </div>
          <button type="submit">Submit</button>
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
  name: 'ContactUs',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      form: {
        branch: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        confirmEmail: '',
        message: ''
      },
      responseMessage: ''
    };
  },
  methods: {
    async submitForm() {
      // Check if the email and confirm email fields match
      if (this.form.email !== this.form.confirmEmail) {
        this.responseMessage = 'Email and Confirm Email must match.';
        return;
      }

      try {
        const response = await axios.post('http://localhost:8089/api/contact-message', this.form, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        this.responseMessage = 'Form successfully sent';
        this.form = {
          branch: '',
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          confirmEmail: '',
          message: ''
        };
      } catch (error) {
        console.error('There was an error!', error);
        this.responseMessage = 'An error occurred while submitting the form.';
      }
    }
  }

};
</script>

<style scoped>
.contact-us {
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  gap: 40px;
}

.contact-text {
  flex: 1;
  padding: 30px;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.contact-text h2 {
  font-size: 32px;
  margin-bottom: 20px;
  color: #ff6600;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

.contact-text p {
  font-size: 16px;
  margin-bottom: 20px;
}

.info-item {
  margin-bottom: 20px;
}

.info-item h3 {
  font-size: 18px;
  margin-bottom: 5px;
  color: #ff6600;
}

.info-item p {
  font-size: 16px;
}

.contact-form {
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

input::placeholder,
textarea::placeholder {
  color: #999;
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
