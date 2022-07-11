import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LoginData } from "./model/action";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CircularProgress } from "@material-ui/core";

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

export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const [disable, setDisable] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (inputs.username === "" || inputs.password === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [inputs]);
  const dataStore = (e) => {
    setSubmitted(true);
      setTimeout(()=>{  
        navigate("/home");
        setSubmitted(false);
      },1000)
    
    
    dispatch(LoginData(inputs));
  };
  return (
    <div className={classes.background}>
      <div>
        <Card align="center" style={{ height: "40vh", width: "30vw" }}>
          <CardContent>
              {!submitted? <>
            <h2>Login</h2>
            <form name="form" onSubmit={handleSubmit}>
              <div >
                <label>Username</label>
                <br />
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </div>
              <div >
                <label>Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div style={{marginTop:"2%"}}>
                <button
                  disabled={disable}
                  style={{borderRadius:"4px",height:"2%"}}
                  onClick={dataStore}
                >
                  Login
                </button>
                <Link to="/register" style={{marginLeft:"3%"}}>
                  Register
                </Link>
              </div>
            </form></>:<CircularProgress/>}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
