import React from 'react'
import { render } from 'react-dom'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Divider } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => {
  return {
    largeFont: {
      fontSize: '30px'
    }
  }
}
// this is a fork
const Comment = props => (
  <React.Fragment>
    <Paper style={{ marginBottom: 15 }} elevation="5">
      <Grid style={{ paddingLeft: 10 }} container spacing={4}>
        <Grid item style={{ paddingLeft: 10 }} xs={2}>
          <img
            alt=""
            style={{
              maxWidth: 100,
              maxHeight: 100,
              minWidth: 100,
              minHeight: 100,
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
            src={props.imageSource}
          />
        </Grid>
        <Grid item wrap="wrap" xs={10}>
          <Typography style={{ textAlign: 'left' }}>
            {props.userName}
          </Typography>
          <Typography style={{ textAlign: 'left' }}>
            {props.commentText}
          </Typography>
        </Grid>
        <Grid item />
      </Grid>

      {/* <div className={props.classes.largeFont}>testTxt</div> */}
    </Paper>
  </React.Fragment>
)
export default withStyles(styles)(Comment)
