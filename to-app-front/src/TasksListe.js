import { useState, useEffect, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { intlFormat } from "date-fns";
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Link,
  Pagination,
} from "@mui/material";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import EditIcon from "@mui/icons-material/Edit";
import ForceUpdateContext from "./updateContext";
import SnackBarContext from "./SnackBarContext";
import { taskCount, getTasksList } from "./services/task/GetAllTasksService";
import { deleteTask } from "./services/task/DeleteTasksService";

function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [tasksCount, setTasksCount] = useState(0);
  const [page, setPage] = useState(1);
  const { update, reFetch } = useContext(ForceUpdateContext);
  const { snackBarInfo } = useContext(SnackBarContext);

  useEffect(() => {
    getTasksList()
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => console.log(error));
    taskCount()
      .then((response) => setTasksCount(response.data))
      .catch((error) => console.log(error));
  }, [update]);
  // const handleDeleteTask = () => {}
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <Grid container spacing={0} direction="column" alignItems="center">
      <List sx={{ width: "100%", maxWidth: 360 }}>
        {tasks.slice((page - 1) * 3, 3 * page).map((task) => (
          <Grid item key={task._id}>
            <Box
              sx={{
                boxShadow: 2,
                backgroundColor: "#BDCADB",
                marginBottom: 1,
                borderRadius: 1,
              }}
            >
              <ListItem
                secondaryAction={
                  <Grid container item direction="row">
                    <IconButton>
                      <Link
                        component={RouterLink}
                        to={`/task/update/${task._id}`}
                      >
                        <EditIcon />
                      </Link>
                    </IconButton>
                    <IconButton
                      onClick={() => deleteTask(task._id).then(reFetch())}
                    >
                      <HighlightOffOutlinedIcon />
                    </IconButton>
                  </Grid>
                }
              >
                <ListItemText
                  primary={task.tasks}
                  secondary={intlFormat(new Date(task.tasks_date), {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                />
              </ListItem>
              <Divider />
            </Box>
          </Grid>
        ))}
      </List>
      <Pagination
        page={page}
        count={Math.ceil(tasksCount / 3)}
        onChange={handleChangePage}
        variant="outlined"
        color="primary"
      />
    </Grid>
  );
}

export default TasksList;
