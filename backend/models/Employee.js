const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  designation: String,
  department: String,
  contact: String,
  joiningDate: Date,
  salaryPerDay: Number,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Employee", employeeSchema);
