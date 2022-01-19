const res = require("express/lib/response");
const Task = require("../../models/task/task.model");
module.exports = {
  getAllTasks: async (_, res) => {
    await Task.find()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(403).json({ message: error.message });
      });
  },

  getTaskById: async (req, res) => {
    await Task.findById({ _id: req.params.Id })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(403).json({ message: error.message });
      });
  },
  countAllTask: async (_,res) => {
    await Task.countDocuments()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(403).json({ message: error.message });
      });
  },
};
