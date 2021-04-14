const axios = require('axios');

module.exports = function () {
  return axios.get('http://api.coxauto-interview.com/api/datasetId')
    .then(({ data }) => {
      return data.datasetId
    })
    .catch(console.log);
}