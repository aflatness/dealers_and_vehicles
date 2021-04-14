const axios = require('axios');

module.exports = function () {
  return axios.get('http://api.coxauto-interview.com/api/datasetId')
}