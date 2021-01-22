import axios from 'axios'
import BaseApi from '@/services/oblyk-api/BaseApi'

class ParkApi extends BaseApi {
  all (cragId) {
    return axios({
      url: `${this.baseUrl}/crags/${cragId}/parks.json`,
      method: 'GET'
    })
  }

  find (cragId, parkId) {
    return axios({
      url: `${this.baseUrl}/crags/${cragId}/parks/${parkId}.json`,
      method: 'GET'
    })
  }

  create (data) {
    return axios({
      url: `${this.baseUrl}/crags/${data.crag_id}/parks.json`,
      headers: { Authorization: this.authToken() },
      data: {
        crag_sector: data
      },
      method: 'POST'
    })
  }

  update (data) {
    return axios({
      url: `${this.baseUrl}/crags/${data.crag_id}/parks/${data.id}.json`,
      headers: { Authorization: this.authToken() },
      data: {
        crag_sector: data
      },
      method: 'PUT'
    })
  }
}
export default new ParkApi()