const { expect } = require('chai');
const controllers = require('./src/controllers');

const { getDatasetId, getVehicleData, getDealerData, getVehicles } = controllers;
let datasetId, vehicles, vehicleData;
let dealers = [];

describe('Controller functions', function () {

  this.timeout(6000);

  before( async function () {
    datasetId = await getDatasetId();
  });

  describe('DatasetId API', function () {
    it('should return promise', function (done) {
      expect(getDatasetId()).to.be.a('promise');
      done();
    });

    it('should resolve into a string', async function () {
      expect(datasetId).to.be.a('string');
    });
  });

  describe('vehicles API', function () {
    it('should return promise', function (done) {
      expect(getVehicles(datasetId)).to.be.a('promise');
      done();
    });

    it('should resolve into an array', async function () {
      vehicles = await getVehicles(datasetId);
      expect(vehicles).to.be.an('array');
    });


    it('should resolve into an array of numbers', async function () {
      vehicles = await getVehicles(datasetId);
      vehicles.forEach(vehicleId => {
        expect(vehicleId).to.be.a('number');
      });
    });
  });

  describe('vehicleData API', function () {
    it('should return promise', function (done) {
      expect(getVehicleData(datasetId, vehicles[0])).to.be.a('promise');
      done();
    });

    it('should resolve into an object', async function () {
      vehicleData = await getVehicleData(datasetId, vehicles[0]);

      expect(vehicleData).to.be.an('object');
      expect(vehicleData).to.have.property('dealerId');
      expect(vehicleData).to.have.property('make');
      expect(vehicleData).to.have.property('model');
      expect(vehicleData).to.have.property('year');
    });
  });

  describe('dealers API', function () {
    let id;

    before((done) => {
      id = vehicleData.dealerId;
      done();
    })

    it('should return promise', function (done) {
      expect(getDealerData(datasetId, id)).to.be.a('promise');
      done();
    });

    it('should resolve into an object', async function () {
      const dealerData = await getDealerData(datasetId, id);

      expect(dealerData).to.be.an('object');
      expect(dealerData).to.have.property('dealerId');
      expect(dealerData.dealerId).to.equal(id);
      expect(dealerData).to.have.property('name');
    });
  });
});