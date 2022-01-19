import axios from "axios";

async function deleteTask(taskId) {
  return await axios
    .delete(`http://localhost:5000/api/v1/task/delete/${taskId}`)
    .then((response) => response);
}

export { deleteTask };
