const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectName: String,
  description: String,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  deadline: Date
});

module.exports = mongoose.model("Project", projectSchema);
