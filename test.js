const { expect } = require('chai');
const controllers = require('./src/controllers');

let datasetId, vehicles, dealers;

describe('Controller functions', function () {
  const { getDatasetId, getVehicleData, getDealerData, getVehicles } = controllers;

  beforeEach( async function () {
    datasetId = await getDatasetId();
  })
  describe('DatasetId API', function () {
    it('should return promise', function (done) {
      expect(getDatasetId()).to.be.a('promise');
      done();
    });

    it('should resolve into a string', async function () {
      // const datasetId = await getDatasetId();
      expect(datasetId).to.be.a('string');
    });
  });

  describe('vehicles API', function () {
    it('should return promise', function (done) {
      expect(getVehicles(datasetId)).to.be.a('promise');
      done();
    });

    it('should resolve into an array', async function () {
      const vehicleData = await getVehicles(datasetId);
      expect(vehicleData).to.be.an('array');
    });

    it('should resolve into an array of numbers', async function () {
      const vehicleData = await getVehicles(datasetId);
      vehicleData.forEach(vehicleId => {
        expect(vehicleId).to.be.a('number');
      });
    });
  });
});