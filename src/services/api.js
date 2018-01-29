import axios from 'axios'

export default class Api {
  constructor () {
    this.URL = 'http://54.233.195.176:3000/v1/registros'
  }

  getAllNodes () {
    return axios.get(`${this.URL}/nos`)
  }
}
