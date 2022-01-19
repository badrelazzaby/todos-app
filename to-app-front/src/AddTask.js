import { useState, useContext } from "react";
import { TextField, TextareaAutosize, Button, Grid } from "@mui/material";
import axios from "axios";
import ForceUpdateContext from "./updateContext";
import SnackBarContext from "./SnackBarContext";

function AddTask() {
  const [tasks, setTasks] = useState("");
  const [tasksDate, setTasksDate] = useState("");
  const { reFetch } = useContext(ForceUpdateContext);
  const { snackBarInfo } = useContext(SnackBarContext);

  const postTasks = async () => {
    if((tasks && tasksDate) == "") {
      snackBarInfo({
        open: true,
        messageType: "warning",
        message: "Empty Data",
      });
      return
    }
    await axios
      .post(`http://localhost:5000/api/v1/task/add`, {
        tasks: tasks,
        tasks_date: tasksDate,
      })
      .then((response) => {
        snackBarInfo({
          open: true,
          messageType: "success",
          message: "Tasks Added",
        });
        reFetch();
        setTasks("");
        setTasksDate("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item xs={4}>
        <TextareaAutosize
          maxRows={5}
          value={tasks}
          aria-label="Tasks"
          placeholder="Your Tasks"
          onChange={(event) => {
            setTasks(event.target.value);
          }}
          style={{
            width: 400,
            height: 50,
            borderRadius: 5,
            borderColor: "gray",
            fontFamily: "sans-serif",
            padding: 5,
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <TextField
              id="date"
              label="Task Date"
              type="date"
              onChange={(event) => {
                setTasksDate(event.target.value);
                
              }}
              value={tasksDate}
              placeholder="yyyy-MM-dd"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={postTasks}
              style={{
                backgroundColor: "#6d696a",
                borderWidth: 1,
                borderColor: "black",
              }}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default AddTask;
