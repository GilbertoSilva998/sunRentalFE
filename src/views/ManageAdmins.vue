<template>
  <div class="manage-admins-container">
    <div class="custom-header">
      <img src="@/assets/SunRentalsWB.png" alt="Website Logo" class="logo" />
      <button @click="goBack" class="back-button">Back to Dashboard</button>
    </div>

    <div class="manage-admins">
      <h2>Manage Admins</h2>

      <!-- Menu Buttons -->
      <div class="admin-actions">
        <button @click="showSection('add')">Add Admin</button>
        <button @click="showSection('list')">All Admins</button>
        <button @click="showSection('update')">Update Admin</button>
        <button @click="showSection('delete')">Delete Admin</button>
      </div>

      <!-- Form to Add or Update Admin -->
      <form v-if="currentSection === 'add' || (currentSection === 'update' && isEditing)" @submit.prevent="isEditing ? updateAdmin() : addAdmin()" class="admin-form">
        <input v-model="admin.firstName" placeholder="First Name" required />
        <input v-model="admin.lastName" placeholder="Last Name" required />
        <input v-model="admin.email" type="email" placeholder="Email" required />
        <input v-model="admin.password" type="password" placeholder="Password" required />
        <input v-model="admin.confirmPassword" type="password" placeholder="Confirm Password" required />
        <button type="submit">{{ isEditing ? 'Update Admin' : 'Add Admin' }}</button>
      </form>

      <!-- Display success or error message -->
      <p v-if="responseMessage" class="response-message">{{ responseMessage }}</p>

      <!-- List of Admins -->
      <div v-if="currentSection === 'list' && admins.length" class="admin-list">
        <h3>Existing Admins</h3>
        <ul>
          <li v-for="admin in admins" :key="admin.adminId">
            ID: {{ admin.adminId }} - {{ admin.firstName }} {{ admin.lastName }} ({{ admin.email }})
            <button @click="editAdmin(admin)">Edit</button>
            <button @click="deleteAdmin(admin.adminId)">Delete</button>
          </li>
        </ul>
      </div>

      <!-- Form to Delete Admin by ID -->
      <div v-if="currentSection === 'delete' && admins.length" class="delete-admin-form">
        <h3>Delete Admin</h3>
        <input v-model="adminIdToDelete" type="number" placeholder="Enter Admin ID" required />
        <button @click="deleteAdminById">Delete Admin by ID</button>
      </div>

      <!-- Placeholder for Update Section -->
      <div v-if="currentSection === 'update' && !isEditing">
        <p>Select an admin from the list to update.</p>
      </div>

      <!-- Placeholder for Delete Section -->
      <div v-if="currentSection === 'delete' && admins.length === 0">
        <p>No admins available to delete.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ManageAdmins',
  data() {
    return {
      admins: [],
      admin: {
        adminId: null,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      isEditing: false,
      currentSection: '', // This will track which section is currently being shown
      responseMessage: '', // This will hold the success or error message
      adminIdToDelete: null // This will hold the ID of the admin to be deleted
    };
  },
  methods: {
    async fetchAdmins() {
      try {
        const response = await axios.get('http://localhost:8080/admin/allAdmins', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
          }
        });
        this.admins = response.data;
      } catch (error) {
        console.error('Error fetching admins:', error);
        this.responseMessage = 'Failed to fetch admins.';
      }
    },
    async addAdmin() {
      try {
        const response = await axios.post('http://localhost:8080/admin/create', this.admin, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
          }
        });
        this.admins.push(response.data);
        this.resetForm();
        this.responseMessage = 'Admin successfully added!';
      } catch (error) {
        console.error('Error adding admin:', error);
        this.responseMessage = 'Failed to add admin.';
      }
    },
    async deleteAdminById() {
      try {
        const response = await axios.delete(`http://localhost:8080/admin/delete/${this.adminIdToDelete}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
          }
        });
        if (response.status === 200) {
          this.admins = this.admins.filter(admin => admin.adminId !== this.adminIdToDelete);
          this.responseMessage = 'Admin successfully deleted!';
        } else {
          this.responseMessage = 'Admin ID not found.';
        }
      } catch (error) {
        console.error('Error deleting admin by ID:', error);
        this.responseMessage = 'Failed to delete admin.';
      }
    },
    async updateAdmin() {
      try {
        const response = await axios.put('http://localhost:8080/admin/update', this.admin, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
          }
        });
        if (response.status === 200) {
          this.responseMessage = 'Admin successfully updated!';
          await this.fetchAdmins();
          this.resetForm();
        } else {
          this.responseMessage = 'Failed to update admin.';
        }
      } catch (error) {
        console.error('Error updating admin:', error);
        this.responseMessage = 'Failed to update admin.';
      }
    },
    editAdmin(admin) {
      this.admin = { ...admin };
      this.isEditing = true;
      this.showSection('update');
    },
    deleteAdmin(admin) {
      this.admin = { ...admin };
      this.isDeleting = true;
      this.showSection('delete');
    },
    resetForm() {
      this.admin = {
        adminId: null,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
      this.isEditing = false;
      this.responseMessage = ''; // Clear the response message after resetting the form
    },
    goBack() {
      this.$router.push('/admin-dashboard');
    },
    showSection(section) {
      this.currentSection = section;
      this.responseMessage = ''; // Clear the response message when switching sections
    }
  },
  created() {
    this.fetchAdmins();
  }
  }
</script>

<style scoped>
.manage-admins-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.custom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
}

.logo {
  height: 50px;
  width: auto;
  transition: transform 0.3s ease;
}

.back-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.back-button:hover {
  background-color: #0056b3;
}

.manage-admins {
  flex: 1;
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.admin-actions {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.admin-actions button {
  padding: 10px 20px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.admin-actions button:hover {
  background-color: darkorange;
}

.admin-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.admin-form input {
  width: 80%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.admin-form button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.admin-form button:hover {
  background-color: #0056b3;
}

.admin-list ul {
  list-style-type: none;
  padding: 0;
}

.admin-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.admin-list button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.admin-list button:hover {
  background-color: darkorange;
}
</style>

