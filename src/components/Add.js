// NOTE:  for OAuth security, http request must have
//   credentials: 'include'
//

import React from "react";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
// import Cookies from "js-cookie";
import Button from "@mui/material/Button";
// import { SERVER_URL } from "../constants.js";

class Add extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div align="left">
        <Button
          component={Link}
          to={{ pathname: "/", assignment: assignmentSelected }}
          variant="outlined"
          color="primary"
          disabled={this.state.assignments.length === 0}
          style={{ margin: 10 }}
        >
          Add
        </Button>
      </div>
    );
  }
}

export default Add;
