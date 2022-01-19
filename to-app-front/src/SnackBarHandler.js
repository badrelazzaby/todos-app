import { useContext } from "react";
import { Snackbar, Alert, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import SnackBarContext from "./SnackBarContext";

const SnackBarHandler = () => {
  const { informations, handlCloseSnackBar } = useContext(SnackBarContext);
  return (
    <Snackbar
      open={informations.open}
      autoHideDuration={5000}
      onClose={handlCloseSnackBar}
      anchorOrigin={{vertical:"bottom", horizontal:"right"}}
    >
      <Alert
        variant="filled"
        severity={informations.messageType}
        sx={{ width: "100%" }}
      >
        {informations.message}
        <IconButton
          edge="end"
          size="small"
          sx={{ color: "#ffffff" }}
          onClick={handlCloseSnackBar}
        >
          <Close fontSize="small" />
        </IconButton>
      </Alert>
    </Snackbar>
  );
};

export default SnackBarHandler;
