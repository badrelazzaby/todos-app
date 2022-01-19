import axios from "axios";

async function requestedUpdateTask(id) {
  return await fetch(`http://localhost:5000/api/v1/task/details/${id}`).then(
    (response) => response.json()
  );
}
async function updateRequestedTask(data, id) {
  return await axios
    .put(`http://localhost:5000/api/v1/task/update/${id}`, data)
    .then((response) => {
      response.json();
    });
}
export { requestedUpdateTask, updateRequestedTask };
