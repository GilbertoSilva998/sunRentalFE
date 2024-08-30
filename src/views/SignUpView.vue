<template>
  <Header />
  <br />
  <div class="customer-form">
    <h2>Let's Get Started</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="id">ID:</label>
        <input type="number" v-model="form.id" id="id" required />
      </div>

      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input type="text" v-model="form.firstName" id="firstName" required />
      </div>

      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input type="text" v-model="form.lastName" id="lastName" required />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="form.email" id="email" required />
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="form.password" id="password" required />
      </div>

      <div class="form-group">
        <label for="contactNumber">Contact Number:</label>
        <input type="text" v-model="form.contactNumber" id="contactNumber" required />
      </div>
      <br />
      <p>Already a User? <a href="/logIn">Log in</a></p>
      <button type="submit" class="submitForm">Submit</button>

      <!-- Display response message -->
      <p v-if="responseMessage">{{ responseMessage }}</p>
    </form>
  </div>
  <Footer />
</template>

<script>
import axios from "axios"; // Directly using axios for the request
import Footer from "@/layout/Footer.vue";
import Header from "@/layout/Header.vue";

export default {
  name: "SignUpView",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      form: {
        id: null, // Initialize id to null or a default value
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        contactNumber: "",
      },
      responseMessage: "", // For displaying response messages
    };
  },

  methods: {
    async submitForm() {
      try {
        const response = await axios.post(
            "http://localhost:8089/customers/create",
            this.form,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
        );

        this.responseMessage = "Registration successfully sent";
        // Reset the form after successful submission
        this.form = {
          id: null,
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          contactNumber: "",
        };
      } catch (error) {
        console.error("There was an error!", error);
        this.responseMessage = "An error occurred while submitting the registration.";
      }
    },
  },
};
</script>

<style scoped>
.customer-form {
  max-width: 420px;
  margin: 30px auto;
  background: lightgrey;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  color: black;
  display: inline-block;
  margin: 25px 0 10px;
  font-size: 0.9em;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 8px 10px;
  margin: 0 0;
  display: inline-block;
  border: 1px solid orange;
  border-radius: 4px;
  box-sizing: border-box;
}
button {
  background: orange;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: black;
  border-radius: 20px;
  width: 50%;
  font-size: 14px;
  font-weight: bold;
  box-sizing: border-box;
  display: inline-block;
}
button:hover {
  cursor: pointer;
  background-color: #002ead;
  transition: 0.7s;
}
</style>



