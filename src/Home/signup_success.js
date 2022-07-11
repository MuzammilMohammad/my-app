import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSignUpData } from "../signUp/model/action";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles({
  background: {
    backgroundImage:
      "url('https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/08/What-is-Computer-Vision-1536x638.jpg')",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    root: {
      minWidth: 275,
    },
  },
});
function SuccessPage() {
  const classes = useStyles();
  const navigate = useNavigate();
  const users = useSelector(
    (state) => state.SignUpData.signupdata[0].signupdata.firstName
  );
  const dispatch = useDispatch();

  const login = () => {
    dispatch(deleteSignUpData([]));
    navigate("/");
  };

  return (
    <div className={classes.background}>
      <div>
        <Card align="center" style={{ height: "40vh", width: "30vw" }}>
          <CardContent>
            <h1>Hi {users}</h1>
            <p>You're registered in Successfuly!!</p>
            <p>Please Login </p>
            <Button style={{color:"#ffffff", backgroundColor:"blue"}} onClick={login}>
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export { SuccessPage };
