import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from "./AddTask";
import TasksList from "./TasksListe";
import Home from "./Home";
import ForceUpdateContext from "./updateContext";
import SnackBarContext from "./SnackBarContext";
import SnackBarHandler from "./SnackBarHandler";
import Menu from "./Menu";
import UpdateTask from "./UpdateTask";

function App() {
  const [update, setUpdate] = useState(false);
  const [snackBar, setSnackBar] = useState({ open: false });

  return (
    <div className="App">
      <ForceUpdateContext.Provider
        value={{
          update: update,
          reFetch: () => {
            setUpdate(!update);
          },
        }}
      >
        <SnackBarContext.Provider
          value={{
            snackBarInfo: (informations) => {
              setSnackBar(informations);
            },
            handlCloseSnackBar: () => {
              setSnackBar({ ...snackBar, open: false });
            },
            informations: snackBar,
          }}
        >
          <BrowserRouter>
            <Menu>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/task/ajouter" element={<AddTask />} />
                <Route path="/task/list" element={<TasksList />} />
                <Route path="/task/update/:id" element={<UpdateTask />}/>
              </Routes>
              <SnackBarHandler />
            </Menu>
          </BrowserRouter>
        </SnackBarContext.Provider>
      </ForceUpdateContext.Provider>
    </div>
  );
}

export default App;
