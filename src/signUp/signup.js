import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signUpData } from "../login/model/action";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

export default function RegisterPage() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [disable, setDisable] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };
  useEffect(() => {
    if (user.firstName === "" || user.password === "" || user.lastName === "" || user.username==="") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const signup = () => {
        setSubmitted(true);
          setTimeout(()=>{  
            navigate("/signup-success");
            setSubmitted(false);
          },1000)
    dispatch(signUpData(user));
   
  };

  return (
    <div className={classes.background}>
      <Card align="center" style={{ height: "50vh", width: "30vw" }}>
        <CardContent>
         {!submitted ? <> <h2>Register</h2>
          <form name="form" onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <br />
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                
              />
            </div>
            <div>
              <label>Last Name</label>
              <br />
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                
              />
            </div>
            <div>
              <label>Username</label>
              <br />
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                
              />
            </div>
            <div>
              <label>Password</label>
              <br />
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                
              />
            </div>
            <div style={{ marginTop: "2%" }}>
              <button
              disabled={disable}
                style={{
                  borderRadius: "4px",
                  height: "2%",
                }}
                onClick={signup}
              >
                Register
              </button>
              <Link to="/"  style={{marginLeft:"3%"}}>
                Cancel
              </Link>
            </div>
          </form>
          </> : <CircularProgress/>}
        </CardContent>
      </Card>
    </div>
  );
}
