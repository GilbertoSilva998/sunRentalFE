<template>
    <Header/>
        <div class="contact-us">
            <h2>Contact Us</h2>
            <form class="register">
                    <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" v-model="form.name" required>
                    </div>
                    <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" v-model="form.email" required>
                    </div>
                    <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="tel" id="phone" v-model="form.phone">
                    </div>
                    <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" v-model="form.message" required></textarea>
                    </div>
                        <button type="submit">Submit</button>
                </form>
        </div>

    <Footer/>
</template>

<script>
import Footer from '@/layout/Footer.vue';
import Header from '@/layout/Header.vue';

export default {
    name: 'ContactUs',
    components: {
        Header,
        Footer
    },
    data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted', this.form);
      // Add form submission logic here
    }
  }
}
</script>

<style>
  
</style>