const Task = require("../../models/task/task.model");

module.exports = {
  addTask: async (req, res) => {

    const newTask = new Task({
      tasks: req.body.tasks,
      tasks_date: req.body.tasks_date,
    });

    await newTask
      .save()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(401).json({ message: error.message });
      });
  },
};
