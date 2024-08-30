<template xmlns="http://www.w3.org/1999/html">
    <Header/>
    <br/>
    <br/>
    <br/>
<!--        <h1>Add Vans</h1>-->
        <br/>
        <h2>{{ isEditMode ? 'Edit' : 'Add' }} Van</h2>
<!--      Form Code Start -->
        <form class="register" @submit.prevent="submitVan">

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
          <label>Rental Status</label>
            <div class="form-group">
                <select v-model="form.rentalStatus" required>
                  <option :value="true">Available</option>
                  <option :value="false">Not Available</option>
                </select>
            </div>

          <br/>
          <label>Update the Van Image</label>
          <div>
            <input type="file" id="image" @change="onFileChange">
          </div>

          <div class="dash">
            <button type="submit" class="submitVan">{{ isEditMode ? 'Update' : 'Add' }}</button>
          </div>

        </form>
<!--      End of Form-->

    <br/>
    <br/>
     <div>
<!--       Table code start here-->
      <h2>Manage Vans</h2>
      <div class="tableStyle">
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
          <th>Image</th> |
          <th>Actions</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="van in vanGet" :key="van.licensePlate">
          <td>{{ van.licensePlate }}</td> |
          <td>{{ van.make }}</td> |
          <td>{{ van.model }}</td> |
          <td>{{ van.year }}</td> |
          <td>{{ van.vin }}</td> |
          <td>{{ van.capacity }}</td> |
          <td>{{ van.fuelType }}</td> |
          <td>{{ van.rentalStatus }}</td> |
          <td>
            <img :src="`http://localhost:8080/van/image/${van.licensePlate}`" alt="image" width="100"  />
          </td>
          <td>
            <div class="dashTable">
            <button @click="editVan(van)">Edit</button>
            <button @click="deleteVan(van.licensePlate)">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
<!--        Table Code finish here-->
  </div>
    </div>

  <Footer/>
</template>


<script>
import Footer from '@/layout/Footer.vue';
import Header from '@/layout/Header.vue';
import ApiService from '@/services/AxiosServiceVans';//Fetch all the apis


export default {
    name: 'Dashboard',
    components:{
        Header,
        Footer
    },
    data() {
      return {
        form: {
          licensePlate: '',
          make: '',
          model: '',
          year: null,
          vin: '',
          capacity: null,
          fuelType: '',
          rentalStatus: true,
          image: []
        },
        isEditMode: false,
        vanGet: [],
        errors: []
      };
  },
  //Fetch all Vans
  async created(){
      await this.getVans();
  },
  //Methods
  methods:{
    async getVans(){
      try {
        const response = await ApiService.getVans('http://localhost:8080/van/allVans');
        this.vanGet = response.data;
      }catch (error){
        console.error('There was an error fetching vans!', error);
      }
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file){
        const reader = new FileReader();
        reader.onload = (e) => {
          this.form.image = e.target.result.split(",")[1];
      };
      reader.readAsDataURL(file);
      }
    },
      async submitVan(){
        try {
          //Convert year and capacity to integers
          this.form.year = parseInt(this.form.year, 10);
          this.form.capacity = parseInt(this.form.capacity, 10);

          //Read Json Values
          const headers = {'Content-Type': 'application/json'}

          // Update the Van if the Edit Mode is true
          if (this.isEditMode){
            const response = await ApiService.updateVan( this.form, {headers});
            console.log('Van updated', response.data);
          }else {
            //Add Van in case is not in edit mode
            const response = await ApiService.createVan(this.form, {headers});
            console.log('Van added', response.data);
          }
          await this.getVans();//Refresh List after adding
          this.resetForm(); //Reset After successful operation
        }catch (error){
          console.error('Error adding/updating van:', error);
        }
      },
      // Edit Van
      editVan(van){
      this.form = {...van} //Clone data into the form
      this.isEditMode = true;
      },
      // Delete Van
      async deleteVan(licensePlate){
      try {
        await ApiService.deleteVan(licensePlate);
        await this.getVans();//Refresh the List after deletion
        console.log('Van deleted');
      }catch (error){
        console.error('Error deleting van: ', error);
      }
    },
    resetForm(){
      this.form ={
        licensePlate: '',
        make: '',
        model: '',
        year: null,
        vin: '',
        capacity: null,
        fuelType: '',
        rentalStatus: true,
        image: []
      };
          this.isEditMode= false;
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
    .dashTable button{
      display: inline;
      width: 100px;
      height: 25px;
      border: 1px solid black;
      background: orange;
      color:#fff;
      cursor: pointer;
      font-weight: bold;
    ;
      text-transform: uppercase;
    }
    .tableStyle table {
      display: inline;
      border-top: 1px solid orange;
      border-left: 1px solid orange;
      border-right: 1px solid orange;
      border-bottom: 1px solid orange;
    }
</style>