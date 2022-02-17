import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ebytr-server.herokuapp.com/'
});

export default api; 
