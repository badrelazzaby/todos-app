import axios from "axios";

async function taskCount() {
  return await axios
    .get(`http://localhost:5000/api/v1/task/count`)
    .then((response) => response);
}
async function getTasksList() {
  return await axios
    .get(`http://localhost:5000/api/v1/task/all`)
    .then((response) => response);
}
export { taskCount, getTasksList };
