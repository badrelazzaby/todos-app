import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  requestedUpdateTask,
  updateRequestedTask,
} from "./services/task/UpdateTaskService";
import { Grid, TextareaAutosize, TextField, Button } from "@mui/material";
import moment from "moment";

const UpdateTask = () => {
  let { id } = useParams();

  const [updateTask, setUpdateTask] = useState({});

  useEffect(() => {
    requestedUpdateTask(id).then((data) => setUpdateTask(data));
  }, []);

  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item xs={4}>
        <TextareaAutosize
          maxRows={5}
          value={updateTask.tasks}
          aria-label="Tasks"
          placeholder="Your Tasks"
          onChange={(event) => {
            setUpdateTask({ ...updateTask, tasks: event.target.value });
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
                setUpdateTask({
                  ...updateTask,
                  tasks_date: event.target.value,
                });
              }}
              value={moment(updateTask.tasks_date).format("YYYY-MM-DD")}
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
              onClick={() => {
                updateRequestedTask({ ...updateTask }, id);
              }}
              style={{
                backgroundColor: "#6d696a",
                borderWidth: 1,
                borderColor: "black",
              }}
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UpdateTask;
