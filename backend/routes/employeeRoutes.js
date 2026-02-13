const router = require("express").Router();
const Employee = require("../models/Employee");
const verify = require("../middleware/authMiddleware");

router.post("/", verify, async (req, res) => {
  const emp = new Employee(req.body);
  await emp.save();
  res.json(emp);
});

router.get("/", verify, async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

router.put("/:id", verify, async (req, res) => {
  const emp = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(emp);
});

router.delete("/:id", verify, async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

module.exports = router;
