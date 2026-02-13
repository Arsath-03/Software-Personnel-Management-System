const router = require("express").Router();
const Project = require("../models/Project");
const verify = require("../middleware/authMiddleware");

router.post("/", verify, async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});

router.get("/", verify, async (req, res) => {
  const projects = await Project.find().populate("assignedTo");
  res.json(projects);
});

module.exports = router;
