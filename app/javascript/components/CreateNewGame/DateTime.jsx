import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CreateNewGameStyles from './CreateNewGameStyles';

const useStyles = makeStyles(CreateNewGameStyles);

const DateTime = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(Date.now());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.dateTimeField} class={{label: classes.time}} >
      <Box display="flex" justifyContent="space-between">
        <KeyboardDatePicker
          format="MM/dd/yyyy"
          margin="dense"
          label="Date"
          value={selectedDate}
          onChange={handleDateChange}
          className={classes.dateTimeField}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          required={true}
        />
        <KeyboardTimePicker
          margin="dense"
          id="time-picker"
          label="Time"
          value={selectedDate}
          onChange={handleDateChange}
          className={classes.dateTimeField}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
          keyboardIcon={<ScheduleIcon />}
          fontSize="small"
          required={true}
          variant="text"
        />
      </Box>
    </MuiPickersUtilsProvider>
  );
};

export default DateTime;
