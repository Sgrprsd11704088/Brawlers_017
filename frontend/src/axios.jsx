import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1', // Adjust to match your backend URL
});

export default instance;