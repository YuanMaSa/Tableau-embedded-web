import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import View from "../TableauView";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    backgroundColor: "#000000",
    zIndex: theme.zIndex.drawer + 1
  },
  view:{
    marginTop:100
  }
}));

export default function Appbar() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"></IconButton>
          {/* <Typography variant="h6" color="inherit" className={classes.grow}>
            eCloudvalley demo
          </Typography> */}
          <img
            src={require("../ecloud_logo.png")}
            alt="icon"
            height="8%"
            width="8%"
          />
        </Toolbar>
      </AppBar>
      <Container>
      <div className={classes.view}>
      <View />
      </div>
      </Container>
    </div>
  );
}
