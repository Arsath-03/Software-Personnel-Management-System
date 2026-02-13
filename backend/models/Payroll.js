const mongoose = require("mongoose");

const payrollSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  month: String,
  totalSalary: Number
});

module.exports = mongoose.model("Payroll", payrollSchema);
