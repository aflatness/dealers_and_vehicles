const axios = require('axios');

module.exports = function (id, dealerId) {
  return axios.get(`http://api.coxauto-interview.com/api/${id}/dealers/${dealerId}`)
    .then(({ data }) => data)
    .catch(console.log);
}