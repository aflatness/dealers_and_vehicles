const axios = require('axios');

module.exports = async function (id) {
  let vehicles;
  await axios.get(`http://api.coxauto-interview.com/api/${id}/vehicles`)
    .then(({ data }) => {
      retrieved = true;
      vehicles = data.vehicleIds
    })
    .catch(console.log);
  return vehicles;
}