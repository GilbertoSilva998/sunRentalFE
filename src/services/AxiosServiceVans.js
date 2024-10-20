import axios from "axios";
import config from "bootstrap/js/src/util/config";

//Retrieve the Token
// function getToken(){
//     return localStorage.getItem('token'); //Store the token in local Storage
//
// }

export const apiClient= axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    }
});

// apiClient.interceptors.request.use(config => {
//     const token = getToken();
//     if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`; //Add auth on header
//     }
//     return config;
// },error => {
//     return Promise.reject(error);
// });

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