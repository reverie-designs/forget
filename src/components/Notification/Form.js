import React, { useState } from "react";
import Time from "./Time";
import MyButton from "./Button";
import StateTextFields from "./TextField";
import CalendarView from "./CalendarView";
import FormControlLabel from "./CheckBox";
import Switch from "./Switch";

function Form(props) {


  return (
    <div className="formBox">
      
       <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <h3 className="formTitle">NEW NOTIFICATION</h3>
         <div> <StateTextFields/></div>
        <div>
          Set Date: <CalendarView/>
          <div>
          Set Time:<Time className="time"/>
          </div>
          <div className="flex-center margin-fix"> <p className="margin-fix">Repeat Daily:</p> <Switch/></div>
          
          <FormControlLabel/>
        </div>
        <div>
          <MyButton buttonText="Save" type="submit" buttonColor="primary"/>
          <MyButton buttonText="Cancel" buttonColor="secondary"/>
        </div>
        
      </form>
    </div>
  );
}

export default Form;