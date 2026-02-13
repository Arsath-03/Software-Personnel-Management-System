const mongoose = require("mongoose");

const performanceSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  rating: Number,
  remarks: String,
  date: Date
});

module.exports = mongoose.model("Performance", performanceSchema);
