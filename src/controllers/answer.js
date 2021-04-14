const axios = require('axios');

const options = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'text/plain'
  }
}

module.exports = function (id, answer) {
  axios.post(`http://api.coxauto-interview.com/api/${id}/answer`, answer, options)
    .then(({ data }) => console.log(data))
    .catch(({ data}) => console.log(data))
}