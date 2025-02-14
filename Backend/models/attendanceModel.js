const attendance = []; // Replace with real database logic

const addAttendance = (entry) => {
  attendance.push(entry);
};

const getAttendance = () => {
  return attendance;
};

module.exports = {
  addAttendance,
  getAttendance,
};
