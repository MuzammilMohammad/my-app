import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSignUpData } from "../signUp/model/action";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
    Box,
    CircularProgress,
    Snackbar,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from "@material-ui/core";

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
function RowPage({ row ,handleRemoveClick,isEdit,handleInputChange,i}) {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInput=(e,i)=>{
    handleInputChange(e,i)
  }
  const handleConfirm=()=>{
    handleRemoveClick(row.id)
  }
  return (
    <TableRow>
      {isEdit ? (
        <TableCell padding="none">
          <input
            value={row.firstname}
            name="firstname"
            onChange={(e) => handleInput(e, i)}
          />
        </TableCell>
      ) : (
        <TableCell>{row.firstname}</TableCell>
      )}
      {isEdit ? (
        <TableCell padding="none">
          <input
            value={row.lastname}
            name="lastname"
            onChange={(e) => handleInput(e, i)}
          />
        </TableCell>
      ) : (
        <TableCell>{row.lastname}</TableCell>
      )}
      {isEdit ? (
        <TableCell padding="none">
          <select
            style={{ width: "100px" }}
            name="city"
            value={row.city}
            onChange={(e) => handleInputChange(e, i)}
          >
            <option value=""></option>
            <option value="Hyderbad">Hyderbad</option>
            <option value="Vijayawada">Vijayawada</option>
            <option value="Delhi">Delhi</option>
            <option value="Amaravati">Amaravati</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </TableCell>
      ) : (
        <TableCell align="center">{row.city}</TableCell>
      )}
      {isEdit ? (
        <TableCell>
          <Button className="mr10" onClick={handleConfirm}>
            <ClearIcon />
          </Button>
        </TableCell>
      ) : (
        <TableCell align="center">
          {" "}
          <Button className="mr10" onClick={handleConfirm}>
            <DeleteOutlineIcon />
          </Button>
        </TableCell>
      )}
    </TableRow>
  );
}

export { RowPage };
