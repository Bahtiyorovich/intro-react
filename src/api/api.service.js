import axios from 'axios'

BASE_URI = 'http://localhost:8000/'

export const ApiService = {
  async fetching(url) {
      const res = await axios.get(`${BASE_URI}/${url}`, options);
      return res.data;
  }
}