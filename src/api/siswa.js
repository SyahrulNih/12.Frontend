import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:5000",
});

const apis = {
    getAllSiswa: ()=>api.get('/siswa',{ withCredentials: true }),
    getSiswaByNis: (nis) => api.get(`/siswa/${nis}`,{ withCredentials: true }),
    CreateSiswa : (data) => api.post('/siswa', data,{ withCredentials: true }),
    UpdateSiswa : (nis, data) => api.put(`/siswa/${nis}`, data,{ withCredentials: true }),
    deleteSiswa : (nis) => api.delete(`/siswa/${nis}`,{ withCredentials: true })
};

export default apis;