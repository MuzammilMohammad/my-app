import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateIcon from "@material-ui/icons/Create";
import {
  Box,
  Button,
  CircularProgress,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DoneIcon from "@material-ui/icons/Done";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { AddingData, deleteData } from "./model/action";
import { Card, CardContent } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { v4 as uuid } from "uuid";
import { RowPage } from "./row";

const useStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  table: {
    minWidth: 650,
  },
  snackbar: {
    bottom: "104px",
  },
});

function TableDemo() {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [rows, setRows] = useState([
  ]);

  const [open, setOpen] = React.useState(false);
  const [isEdit, setEdit] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [submitted, setSubmitted] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleAdd = () => {
    setRows([
      ...rows,
      {
        id: uuid(),
        firstname: "",
        lastname: "",
        city: "",
      },
    ]);
    setEdit(true);
  };

  const handleEdit = (i) => {
    setEdit(!isEdit);
  };

  const handleSave = () => {
    dispatch(AddingData(rows));
    setEdit(!isEdit);
    setRows(rows);
    setDisable(true);
    setOpen(true);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 1000);
  };

  const handleInputChange = (e, index) => {
    setDisable(false);
    const { name, value } = e.target;
    const list = [...rows];
    list[index][name] = value;
    setRows(list);
  };

  const handleRemoveClick = (i) => {
    let text = "Confirm";
    if (window.confirm(text) == true) {
      const list = rows.filter((each) => each.id !== i);
      setRows(list);
      dispatch(deleteData(i));
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 1000);
    }
  };
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(1);
  let updatedRowsData = [];
  let totalPagesCount = [];
  const updateRows = (index) => {
    return rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  };
  const handleOnPageChange = (pageNumber) => {
    setPage(pageNumber);
  };
  rows &&
    rows.map((eachItem, index) => {
      totalPagesCount.push({
        [index]: Math.ceil(rows.length / rowsPerPage),
      });
      if (
        Math.ceil(rows.length / rowsPerPage) !== totalPagesCount[index][index]
      ) {
        totalPagesCount.push({
          [index]: Math.ceil(rows.length / rowsPerPage),
        });
      }
      updatedRowsData = updateRows(index);
    });
  return (
    <Card
      style={{
        borderColor: "blue",
        border: "1px",
        height: "70vh",
        width: "70vw",
        overflow: "auto",
      }}
    >
      <CardContent>
        <TableBody>
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            className={classes.snackbar}
          >
            <Alert onClose={handleClose} severity="success">
              Record saved successfully!
            </Alert>
          </Snackbar>
          <Box margin={1}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                {isEdit ? (
                  <div>
                    <Button onClick={handleAdd}>
                      <AddBoxIcon />
                      ADD
                    </Button>
                    {rows.length !== 0 && (
                      <div>
                        {disable ? (
                          <Button disabled align="right" onClick={handleSave}>
                            <DoneIcon />
                            SAVE
                          </Button>
                        ) : (
                          <Button align="right" onClick={handleSave}>
                            <DoneIcon />
                            SAVE
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <Button onClick={handleAdd}>
                      <AddBoxIcon  />
                      ADD
                    </Button>
                    <Button align="right" onClick={handleEdit}>
                      <CreateIcon />
                      EDIT
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <TableRow align="center"></TableRow>
            {!submitted ? (
              <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
              >
                <TableHead
                  style={{ backgroundColor: "blue", color: "#ffffff" }}
                >
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell align="center">City</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.length === 0 ? (
                    <h1>No document found</h1>
                  ) : (
                    rows.map((row, i) => {
                      return (
                        <RowPage
                          row={row}
                          isEdit={isEdit}
                          i={i}
                          handleInputChange={handleInputChange}
                          handleRemoveClick={handleRemoveClick}
                        />
                      );
                    })
                  )}
                </TableBody>
              </Table>
            ) : (
              <CircularProgress />
            )}
          </Box>
        </TableBody>
        {!isEdit ? (
          <Pagination
            count={3}
            siblingCount={0}
            color="primary"
            page={page}
            onChange={handleOnPageChange}
            style={{ position: "absolute", bottom: "12%" }}
          />
        ) : null}
      </CardContent>
    </Card>
  );
}

export default TableDemo;
