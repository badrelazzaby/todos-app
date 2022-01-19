const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  tasks_date: {
    type: Date,
  },
  tasks: {
    type: String,
  },
});

const taskModel = mongoose.model("Task", taskSchema);

module.exports = taskModel;
