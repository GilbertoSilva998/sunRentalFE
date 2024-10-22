import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': "application/json"
    }
});

export default {
    getAllCustomers() {
        return apiClient.get('/customers/allCustomers');
    },
    getCustomerById(id) {
        return apiClient.get(`/Customer/${id}`);
    },
    createCustomer(customer) {
        return apiClient.post('/Customer', customer);
    },
    updateCustomer(id, customer) {
        return apiClient.put(`/Customer/${id}`, customer);
    },
    deleteCustomer(id) {
        return apiClient.delete(`/Customer/${id}`);
    }
};
