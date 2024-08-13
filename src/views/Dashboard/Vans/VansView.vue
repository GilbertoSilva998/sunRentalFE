<template>
    <Header/>
        <h1>Manage Vans</h1>
        <h2>{{ isEditMode ? 'Edit' : 'Add' }} Van</h2>
        <form class="register" @submit.prevent="submitForm">
          <div class="form-group">
            <input type="text" id="licensePlate" v-model="form.licensePlate" placeholder="Enter license plate" required>
          </div>
            
            <div class="form-group">
                <input type="text" id="make" v-model="form.make" placeholder="Enter make" required>
            </div>

            <div class="form-group">
                <input type="text" id="model" v-model="form.model" placeholder="Enter model" required>
            </div>

            <div class="form-group">
                <input type="text" id="year" v-model="form.year" placeholder="Enter year" required>
            </div>

            <div class="form-group">
                <input type="text" id="vin" v-model="form.vin" placeholder="Enter vin" required>
            </div>

            <div class="form-group">
                <input type="text" id="capacity" v-model="form.capacity" placeholder="Enter capacity" required>
            </div>

            <div class="form-group">
                <input type="text" id="fuelType" v-model="form.fuelType" placeholder="Enter fuel type" required>
            </div>

            <div class="form-group">
                <input type="text" id="status" v-model="form.status" placeholder="Enter status" required>
            </div>

        </form>

        <div class="dash">
            <button type="submit">{{ isEditMode ? 'Update' : 'Add' }}</button>
            <button>Update</button>
            <button>Delete</button>
        </div>

    <div>
      <h2>Vans</h2>
      <table>
        <thead>
        <tr>
          <th>License Plate</th> |
          <th>Make</th> |
          <th>Model</th> |
          <th>Year</th> |
          <th>VIN</th> |
          <th>Capacity</th> |
          <th>Fuel Type</th> |
          <th>Status</th> |
          <th>Actions</th> |
        </tr>
        </thead>
        <tbody>
        <tr v-for="van in vans" v-bind:key="van.vanID">
          <td>{{ van.licensePlate }}</td>
          <td>{{ van.make }}</td>
          <td>{{ van.model }}</td>
          <td>{{ van.year }}</td>
          <td>{{ van.vin }}</td>
          <td>{{ van.capacity }}</td>
          <td>{{ van.fuelType }}</td>
          <td>{{ van.status }}</td>
          <td>
            <button @click="editVan(van.vanID)">Edit</button>
            <button @click="deleteVan(van.vanID)">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
<!--      <router-link to="/add-van">-->
<!--        <button >Add New Van</button>-->
<!--      </router-link>-->
    </div>

  <Footer/>
</template>


<script>
import Footer from '@/layout/Footer.vue';
import Header from '@/layout/Header.vue';
import ApiService from '@/services/AxiosServiceVans';


export default {
    name: 'Dashboard',
    components:{
        Header,
        Footer
    },
    props: {
      vanID: {
        type: Number,
        default: null
      }
    },
    data() {
      return {
        form: {
          licensePlate: '',
          make: '',
          model: '',
          year: '',
          vin: '',
          capacity: '',
          fuelType: '',
          status: 'available'
        },
        isEditMode: false,
        posts: [],
        errors: []
      };
  },
  created() {
      // if (this.vanID){
      //   this.isEditMode = true;
      //   ApiService.getVan(this.vanID).then(response => {
      //     this.van = response.data;
      //   })
      // }
    ApiService.get(`http://localhost:8080/posts`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
  },
  methods: {
    submitForm() {
      if (this.isEditMode){
        ApiService.updateVan(this.vanID, this.van).then(() => {
          this.$router.push('/vans');
        });
      } else {
        ApiService.createVan(this.vanID).then(() => {
          this.$router.push('/vans');
        });
      }
    }
  }
};
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