const express = require("express");
const {
  markAttendanceHandler,
  fetchAttendanceHandler,
} = require("../controllers/attendanceController");

const router = express.Router();

router.post("/mark-attendance", markAttendanceHandler);
router.get("/attendance", fetchAttendanceHandler);

module.exports = router;