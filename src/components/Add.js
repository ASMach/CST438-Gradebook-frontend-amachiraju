// NOTE:  for OAuth security, http request must have
//   credentials: 'include'
//

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { TextField, Button } from "@mui/material";
import { SERVER_URL } from "../constants.js";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", duedate: "", course: "" };
  }

  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  changeDueDate = (e) => {
    this.setState({
      duedate: e.target.value,
    });
  };

  changeCourse = (e) => {
    this.setState({
      course: e.target.value,
    });
  };

  createAssignment = (e) => {
    const { name, dueDate, course } = this.state;

    const token = Cookies.get("xsrf-token");

    fetch(`${SERVER_URL}/gradebook/`, {
      method: "post",
      headers: {
        "content-type": "application/json",
        "x-xsrf-token": token,
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => {
        if (res.ok) {
          toast.success("assignment successfully added", {
            position: toast.position.bottom_left,
          });
        } else {
          toast.error("error adding assignment", {
            position: toast.position.bottom_left,
          });
          console.error("post http status =" + res.status);
        }
      })
      .catch((err) => {
        toast.error("error", {
          position: toast.position.bottom_left,
        });
        console.error(err);
      });
  };

  render() {
    const { name, dueDate, course } = this.state;

    return (
      <div align="left">
        <div>
          <div>
            <TextField
              id="name"
              label="Name"
              variant="standard"
              onChange={this.changeName}
            />
          </div>
          <div>
            {" "}
            <TextField
              id="duedate"
              label="Due Date"
              variant="standard"
              onChange={this.changeDueDate}
            />
          </div>
          <div>
            <TextField
              id="course"
              label="Course"
              variant="standard"
              onChange={this.changeCourse}
            />
          </div>
        </div>
        <Button
          component={Link}
          onClick={this.createAssignment}
          to={{ pathname: "/" }}
          variant="outlined"
          color="primary"
          disabled={name == "" || course == ""}
          style={{ margin: 10 }}
        >
          Add
        </Button>
      </div>
    );
  }
}

export default Add;
