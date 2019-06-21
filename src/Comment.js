import React from "react";
import { render } from "react-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => {
  return {
    largeFont: {
      fontSize: "30px"
    }
  };
};
// this is a fork
const Comment = props => (
  <React.Fragment>
    <Paper style={{ marginBottom: 15 }} elevation="5">
      <div
        style={{
          display: "grid",
          marginTop: 10,
          marginBottom: 5,
          gridTemplateColumns: "1fr 3fr 1fr",
          gridTemplateRows: "1fr 1fr"
        }}
      >
        <div
          style={{
            gridColumnStart: 0,
            gridColumnEnd: 1,
            gridRowStart: 0,
            gridRowEnd: 2
          }}
        >
          <img
            alt=""
            style={{
              maxWidth: 100,
              maxHeight: 100,
              display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            }}
            src={props.imageSource}
          />
        </div>
        <div
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 2,
            gridRowStart: 0,
            gridRowEnd: 1
          }}
        >
          <Typography style={{ textAlign: "left" }}>
            {props.userName}
          </Typography>
        </div>
        <div
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 2,
            gridRowStart: 1,
            gridRowEnd: 2
          }}
        >
          {/* <div className={props.classes.largeFont}>testTxt</div> */}
          <Typography style={{ textAlign: "left" }}>
            {props.commentText}
          </Typography>
          <TextField />
        </div>
      </div>
    </Paper>
  </React.Fragment>
);
export default withStyles(styles)(Comment);
