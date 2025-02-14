const geolib = require("geolib");

const calculateDistance = (location1, location2) => {
  return geolib.getDistance(location1, location2);
};

module.exports = {
  calculateDistance,
};
