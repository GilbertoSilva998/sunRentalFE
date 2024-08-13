import axios from "axios";

export const apiClient= axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type' : "application/json"
    }
});

//const apiClient = 'http://localhost:8080/'

export default {
    getVans(){
        return apiClient.get('/vans');
    },
    getVan(id){
        return apiClient.get(`/vans/${id}`);
    },
    createVan (van){
        return apiClient.post('/vans', van);
    },
    updateVan(id, van){
        return apiClient.put(`/vans/${id}`, van);
    },
    deleteVan(id){
        return apiClient.delete(`/vans/${id}`)
    }

};