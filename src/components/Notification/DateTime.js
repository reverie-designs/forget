import React from "react";
import { DateTimePicker} from "@material-ui/pickers";

function InlineDateTimePickerDemo(props) {

  return (
    <>
      <DateTimePicker
        variant="inline"
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}

export default InlineDateTimePickerDemo;