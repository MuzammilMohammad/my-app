import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteLoginData } from "../login/model/action";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useNavigate } from "react-router-dom";
import TableDemo from "./documents";
import { deleteData } from "./model/action";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  background: {
    backgroundImage:
      "url('https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/08/What-is-Computer-Vision-1536x638.jpg')",
    height: "100vh",
    background: "cover",
   
  },
}));

function HomePage() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(deleteLoginData([]));
    dispatch(deleteData(0))
    navigate("/");
  };
  const users = useSelector(
    (state) => state?.LoginData?.data
  );
  let Username= users===undefined ? null :users[0]?.data?.username
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}></Typography>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.background}>
        <div>
          {" "}
          <h1>Hi {Username} </h1>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TableDemo />
        </div>
      </div>
    </div>
  );
}

export { HomePage };
