import axios from "axios";

export const apiClient= axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        Authorization : 'Bearer {token}'
    }
});

export default {
    getVans(){
        return apiClient.get('/van/allVans');
    },
    getVan(licensePlate){
        return apiClient.get(`/van/read/${licensePlate}`);
    },
    createVan (van){
        return apiClient.post('/van/create', van);
    },
    updateVan(van){
        return apiClient.put(`/van/update`, van);
    },
    deleteVan(licensePlate){
        return apiClient.delete(`/van/deleteById/${licensePlate}`)
    }

};