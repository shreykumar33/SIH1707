const { markAttendance, fetchAttendance } = require("../services/attendanceService");

const markAttendanceHandler = (req, res) => {
  const { username, latitude, longitude } = req.body;

  if (!username || !latitude || !longitude) {
    return res.status(400).json({ error: "Invalid input. Please provide username, latitude, and longitude." });
  }

  const result = markAttendance(username, latitude, longitude);

  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(403).json(result);
  }
};

const fetchAttendanceHandler = (req, res) => {
  const data = fetchAttendance();
  console.log('worked');
  return res.status(200).json({ attendance: data });
};

module.exports = {
  markAttendanceHandler,
  fetchAttendanceHandler,
};