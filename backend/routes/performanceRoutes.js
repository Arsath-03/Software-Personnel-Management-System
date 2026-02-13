const router = require("express").Router();
const Performance = require("../models/Performance");
const verify = require("../middleware/authMiddleware");

router.post("/", verify, async (req, res) => {
  const perf = new Performance(req.body);
  await perf.save();
  res.json(perf);
});

router.get("/", verify, async (req, res) => {
  const data = await Performance.find().populate("employeeId");
  res.json(data);
});

module.exports = router;
