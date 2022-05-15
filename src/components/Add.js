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
    const { name, dueDate, couse } = this.state;

    // TODO: Post the destructured props to localhost:8081/gradebook/{id}
  };

  render() {
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
          onClick={createAssignment}
          to={{ pathname: "/" }}
          variant="outlined"
          color="primary"
          disabled={this.state.name == "" || this.state.course == ""}
          style={{ margin: 10 }}
        >
          Add
        </Button>
      </div>
    );
  }
}

export default Add;
