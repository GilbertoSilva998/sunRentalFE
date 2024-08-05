<template>
    <Header/>
        <h1>Manage Vans</h1>
        <form class="register">
            <div class="form-group">
                <input type="vanID" id="vanID" v-model="form.vanID" placeholder="Enter van ID" required>
            </div>
            
            <div class="form-group">
                <input type="make" id="make" v-model="form.make" placeholder="Enter make" required>
            </div>

            <div class="form-group">
                <input type="model" id="model" v-model="form.model" placeholder="Enter model" required>
            </div>

            <div class="form-group">
                <input type="year" id="year" v-model="form.year" placeholder="Enter year" required>
            </div>

            <div class="form-group">
                <input type="telicensePlatext" id="licensePlate" v-model="form.licensePlate" placeholder="Enter license plate" required>
            </div>

            <div class="form-group">
                <input type="vin" id="vin" v-model="form.vin" placeholder="Enter vin" required>
            </div>

            <div class="form-group">
                <input type="capacity" id="capacity" v-model="form.capacity" placeholder="Enter capacity" required>
            </div>

            <div class="form-group">
                <input type="fuelType" id="fuelType" v-model="form.fuelType" placeholder="Enter fuel type" required>
            </div>

            <div class="form-group">
                <input type="staus" id="status" v-model="form.status" placeholder="Enter status" required>
            </div>

        </form>

        <div class="dash">
            <button>Add</button>
            <button>Update</button>
            <button>Delete</button>
        </div>
    <Footer/>
</template>

<script>
import Footer from '@/layout/Footer.vue';
import Header from '@/layout/Header.vue';

export default {
    name: 'Dashboard',
    components:{
        Header,
        Footer
    },
    data() {
    return {
      form: {
        vanID: '',
        make: '',
        model: '',
        year: '',
        licensePlate: '',
        vin: '',
        capacity: '',
        fuelType: '',
        status: ''
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
    .dash button{
    display: inline;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 320px;
    height: 40px;
    border: 1px solid black;
    background: orange;
    color:#fff;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
}
</style>