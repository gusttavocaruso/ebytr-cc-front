import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ebytr-server.herokuapp.com/' || 'http://localhost:3001'
});

export default api; 
