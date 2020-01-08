import React, { Fragment, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

function CalendarView(props) {

  return (
    <Fragment>
      <KeyboardDatePicker
        clearable
        value={props.selectedDate}
        placeholder="10/10/2018"
        onChange={date => props.handleDateChange(date)}
        minDate={new Date()}
        format="MM/dd/yyyy"
      />
    </Fragment>
  );
}

export default CalendarView;