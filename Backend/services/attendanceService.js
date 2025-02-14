const { calculateDistance } = require("../utils/geolocationUtils");
const { addAttendance, getAttendance } = require("../models/attendanceModel");
const { hardcodedLocation, allowedRadiusInMeters } = require("../config/appConfig");

const markAttendance = (username, latitude, longitude) => {
  const distance = calculateDistance(
    { latitude, longitude },
    { latitude: hardcodedLocation.latitude, longitude: hardcodedLocation.longitude }
  );

  if (distance <= allowedRadiusInMeters) {
    const entry = {
      username,
      timestamp: new Date(),
      location: { latitude, longitude },
    };
    addAttendance(entry);
    const attendance = getAttendance();
    return { success: true, message: "Attendance marked successfully", distance, markedAttendance:attendance };
  } else {
    const attendance = getAttendance();
    return { success: false, message: "You are not within the allowed radius", distance, markedAttendance:attendance };
  }
};

const fetchAttendance = () => {
  return getAttendance();
};

module.exports = {
  markAttendance,
  fetchAttendance,
};