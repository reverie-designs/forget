import React, { useState } from "react";
import Time from "./Time";
import MyButton from "./Button";
import StateTextFields from "./TextField";
import CalendarView from "./CalendarView";
import FormControlLabel from "./CheckBox";

function Form(props) {


  return (
    <div className="formBox">
      
       <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <h3 className="formTitle">NEW NOTIFICATION</h3>
         <StateTextFields/>
        <div>
          Set Date: <CalendarView/>
          <div>
          Set Time:<Time className="time"/>
          </div>
          <FormControlLabel/>
        </div>
        <div>
          <MyButton buttonText="Save" buttonColor="primary"/>
          <MyButton buttonText="Cancel" buttonColor="secondary"/>
        </div>
        
      </form>
    </div>
  );
}

export default Form;