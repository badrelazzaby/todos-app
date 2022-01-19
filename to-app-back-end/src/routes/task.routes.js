const postTask = require("../controllers/to-do-task/post.task");
const getTask = require("../controllers/to-do-task/get.task");
const putTask = require("../controllers/to-do-task/put.task");
const deleteTask = require("../controllers/to-do-task/delete.task");
const express = require("express");

const router = express.Router();

router.route("/task/add").post(postTask.addTask);
router.route("/task/all").get(getTask.getAllTasks);
router.route("/task/details/:Id").get(getTask.getTaskById);
router.route("/task/update/:Id").put(putTask.updateTask);
router.route("/task/delete/:Id").delete(deleteTask.deleteTask);
router.route("/task/count").get(getTask.countAllTask);

module.exports = router;
