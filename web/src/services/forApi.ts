import axios from 'axios'

class ForApi {
  async getApiHealth() {
    return axios.get('/api/healthcheck')
  }
  async getAllOperations() {
    return axios.get('/api/operation')
  }
}

export const forAPI = new ForApi()
