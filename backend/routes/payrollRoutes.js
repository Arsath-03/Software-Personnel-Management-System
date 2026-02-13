const router = require("express").Router();
const Payroll = require("../models/Payroll");
const Attendance = require("../models/Attendance");
const Employee = require("../models/Employee");
const verify = require("../middleware/authMiddleware");

router.post("/generate/:empId", verify, async (req, res) => {
  const emp = await Employee.findById(req.params.empId);
  const presentDays = await Attendance.countDocuments({
    employeeId: emp._id,
    status: "Present"
  });

  const salary = presentDays * emp.salaryPerDay;

  const payroll = new Payroll({
    employeeId: emp._id,
    month: req.body.month,
    totalSalary: salary
  });

  await payroll.save();
  res.json(payroll);
});

router.get("/", verify, async (req, res) => {
  const payrolls = await Payroll.find().populate("employeeId");
  res.json(payrolls);
});

module.exports = router;
