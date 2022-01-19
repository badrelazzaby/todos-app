const Task = require("../../models/task/task.model");

module.exports = {
  deleteTask: async (req, res) => {
    await Task.findByIdAndDelete({ _id: req.params.Id })
      .then(() => {
        res.json({ deleted: true });
      })
      .catch((error) => {
        res.status(403).json({ message: error.message });
      });
  },
};
