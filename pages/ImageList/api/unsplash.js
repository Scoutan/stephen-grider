import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID -_LMbVe13rFXPwAhGb8P2by65hNh3syok9mlKyGdvZQ'
  }
})