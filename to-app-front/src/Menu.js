import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

const drawerWidth = 250;
const Menu = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#6081a9",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Todos App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{
            p: 2,
          }}
        >
          <List>
            {[
              { title: "Home", route: "/" },
              { title: "Add Tasks", route: "task/ajouter" },
              { title: "Tasks Liste", route: "task/list" },
            ].map(({ title, route }, index) => (
              <Link
                key={title}
                component={RouterLink}
                underline="none"
                to={route}
                sx={{ color: "#ffffff", margin: 1 }}
              >
                <ListItem
                  button
                  sx={{
                    backgroundColor: "#fffffff",
                    color: "#6081a9",
                    border: 1,
                    borderColor: "#6081a9",
                    borderRadius: 1.5,

                    ":hover": {
                      backgroundColor: "#88a0bf",
                      color: "#ffffff",
                      borderColor: "#ffffff",
                    },
                  }}
                >
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Menu;
