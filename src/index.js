const controllers = require('./controllers');

let id, vehicles;
let answer, dealers = [];

(async function () {
  await controllers.getDatasetId()
    .then(({ data }) => {
      id = data.datasetId
    })
    .catch(console.log);

  const vehicleIds = await controllers.getVehicles(id);

  await Promise.all(vehicleIds.map(vehicle => controllers.getVehicleData(id, vehicle)))
    .then((data) => {
      data.forEach(res => {
        if (dealers.indexOf(res.dealerId) === -1) {
          dealers.push(res.dealerId);
        }
      });
      vehicles = data;
    })
    .catch(console.log);

  await Promise.all(dealers.map(dealerId => controllers.getDealerData(id, dealerId)))
    .then((data) => dealers = data)
    .catch(console.log);

  dealers.forEach(dealer => {
    dealer.vehicles = [];
    vehicles.forEach(vehicle => {
      if (vehicle.dealerId === dealer.dealerId) {
        delete vehicle.dealerId;
        dealer.vehicles.push(vehicle);
      }
    });
  });

  controllers.postAnswer(id, {dealers});
})();