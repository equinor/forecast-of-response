import axios from 'axios'

class ForApi {
  async getApiHealth() {
    return axios.get('/api/healthcheck')
  }
}

export const forAPI = new ForApi()
