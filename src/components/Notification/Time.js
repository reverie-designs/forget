import React, { useState } from "react";
import { KeyboardTimePicker } from "@material-ui/pickers";

function Time(props) {
  

  return (
    <KeyboardTimePicker
      placeholder="08:00 AM"
      mask="__:__ _M"
      value={props.value}
      onChange={date => props.onChange(date)}
    />
  );
}

export default Time;