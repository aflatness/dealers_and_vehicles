const axios = require('axios');

module.exports = function (id, vehicle) {
  return axios.get(`http://api.coxauto-interview.com/api/${id}/vehicles/${vehicle}`)
    .then(({ data }) => data)
    .catch(console.log);
}