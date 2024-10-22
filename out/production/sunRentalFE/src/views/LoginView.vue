<template>
  <div class="page-container">
    <Header />
    <br/>
    <br/>
    <br/>
    <br/>
    <div class="content">
      <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="login" class="login-form">
          <div class="form-group">
            <label>Email:</label>
            <input type="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input type="password" v-model="password" required />
          </div>
          <div class="form-group">
            <label>Login as:</label>
            <select v-model="role" required>
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" class="login-button">Login</button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Header from '@/layout/Header.vue';
import Footer from '@/layout/Footer.vue';

export default {
  data() {
    return {
      email: '',
      password: '',
      role: 'customer', // Default to customer
    };
  },
  methods: {
    async login() {
      try {
        let endpoint = '';
        if (this.role === 'admin') {
          endpoint = 'http://localhost:8080/admin/login';
        } else if (this.role === 'customer') {
          endpoint = 'http://localhost:8080/customers/login';
        } else {
          alert('Please select a valid role.');
          return;
        }

        const response = await axios.post(endpoint, {
          email: this.email,
          password: this.password
        });

        if (response.data && response.data.token) {
          // Store the token in local storage for future requests
          localStorage.setItem('jwtToken', response.data.token);

          // Set the Authorization header in Axios for all future requests
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

          // Redirect based on the role
          if (this.role === 'admin') {
            this.$router.push('/admin-dashboard');
          } else if (this.role === 'customer') {
            this.$router.push('/Booking');
          }
        } else {
          alert('Invalid email or password.');
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login. Please try again.');
      }
    },
  }
,
  name: 'Login',
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.login-container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.login-button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #0056b3;
}

footer {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}
</style>

