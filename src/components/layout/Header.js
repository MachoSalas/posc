import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LogInDialog from "../LogInDialog";
import DrawerLeft from "../DrawerLeft";
const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  menu: {
    backgroundColor: "#34495E"
  }
};
export default class Header extends React.Component {
  render() {
    return (
      <AppBar style={styles.menu} position="static">
        <Toolbar>
          <DrawerLeft />
          <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
            POS commerce
          </Typography>
          <LogInDialog />
        </Toolbar>
      </AppBar>
    );
  }
}
