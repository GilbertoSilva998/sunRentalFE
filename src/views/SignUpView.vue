<template>
  <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="signUp">
      <div>
        <label>First Name:</label>
        <input type="text" v-model="firstName" required>
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" v-model="lastName" required>
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" required>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" required>
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" v-model="confirmPassword" required>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    signUp() {
      if (this.password === this.confirmPassword) {
        // Perform sign-up logic, e.g., send data to the backend
        alert('Sign up successful!');
        this.$router.push('/login');
      } else {
        alert('Passwords do not match!');
      }
    }
  }
}
</script>

<style>
/* Add any styles for your sign-up page here */
</style>
