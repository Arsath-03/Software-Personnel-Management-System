const router = require("express").Router();
const Attendance = require("../models/Attendance");
const verify = require("../middleware/authMiddleware");

router.post("/", verify, async (req, res) => {
  const attendance = new Attendance(req.body);
  await attendance.save();
  res.json(attendance);
});

router.get("/", verify, async (req, res) => {
  const records = await Attendance.find().populate("employeeId");
  res.json(records);
});

module.exports = router;
