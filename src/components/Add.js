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

  render() {
    return (
      <div align="left">
        <div>
          <div>
            <TextField id="name" label="Name" variant="standard" />
          </div>
          <div>
            {" "}
            <TextField id="duedate" label="Due Date" variant="standard" />
          </div>
          <div>
            <TextField id="course" label="Course" variant="standard" />
          </div>
        </div>
        <Button
          component={Link}
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
