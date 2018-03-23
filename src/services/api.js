import axios from 'axios'

export default class Api {
  constructor () {
    this.URL = 'http://54.233.195.176:3000/v1/registros'
  }

  getAllNodes () {
    return axios.get(`${this.URL}/nos`)
  }

  getAllMoliamentoFoliar () {
    return axios.get(`${this.URL}/es1301`)
  }

  getAllRadiacaoSolar () {
    return axios.get(`${this.URL}/es1401`)
  }

  getOtherSensors () {
    return axios.get(`${this.URL}/es1201`)
  }

}
