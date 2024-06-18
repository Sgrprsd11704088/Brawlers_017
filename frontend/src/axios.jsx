import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://brawlers-017.onrender.com/api/v1', // Adjust to match your backend URL
});

export default instance;