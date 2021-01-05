import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'nowrap',
    width: "100%",
    padding: "40px 20px",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DateAndTimePickers(props) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker
            value={props.selectedDate} 
            onChange={event => props.dateChange(event.target.value)}
          />
​
      </MuiPickersUtilsProvider>
    </form>
  );
}