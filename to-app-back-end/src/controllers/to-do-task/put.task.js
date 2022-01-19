const Task = require("../../models/task/task.model");

module.exports = {
  updateTask: async (req, res) => {
    await Task.findByIdAndUpdate(
      { _id: req.params.Id },
      {
        tasks: req.body.tasks,
        task_date: req.body.task_date,
      },
      { new: true }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(400).json({ message: error.message });
      });
  },
};
