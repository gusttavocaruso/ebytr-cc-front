import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ebytr-server.herokuapp.com/'
});

export default api; 
