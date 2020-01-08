import React, { useState } from "react";
import Time from "./Time";
import MyButton from "./Button";
import StateTextFields from "./TextField";
import CalendarView from "./CalendarView";
import FormControlLabel from "./CheckBox";
import Switch from "./Switch";
// Icons

import RestaurantIcon from '@material-ui/icons/Restaurant';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const formResult = {};
//date:"", time:"", categories:[pills:T/F, appointment:T/F, food:T/F], info:"", daily:T/F 
function Form(props) {

  // TEXT BOX STATE
  const [info, setInfo] = useState('');
  const setTextChange = event => {
    setInfo(event.target.value);
  };

  // CALENDAR VIEW STATE
  const [selectedDate, setDateChange] = useState(new Date());

  //TIME
  const [selectedTime, setTimeChange] = useState(new Date());

  // CHECKBOX STATE
  // const [state, setState] = useState({
  //   pills: true,
  //   food: true,
  //   appointment: true
  // });
  // const { pills, food, appointment } = state;
  // const categoryChange = category => event => {
  //   setState({ ...state, [category]: event.target.checked });
  // };

  const [pills, setPills] = useState(false);
  const [food, setFood] = useState(false);
  const [appointment, setAppointment] = useState(false);
  const pillsChange = event => {
    setPills(event.target.checked);
  };
  const foodChange = event => {
    setFood( event.target.checked );
  };
  const appointmentChange = event => {
    setAppointment( event.target.checked);
  };

  // DAILY TOGGLE STATE
  const [dailyToggle, setDailyToggle] = useState(false);
  const handleToggleChange = event => {
    setDailyToggle(event.target.checked);
  };

  //CANCEL BUTTON
  const reset = () => {
    setTimeChange(new Date());
    setDateChange(new Date());
    setInfo("");
    setDailyToggle(false);
    // setState.pills = true;
    setPills(false);
    setFood(false);
    setAppointment(false);
  }

  //SAVE BUTTON
  const save = () => {

  }
  return (
    <div className="formBox">
      
       <form autoComplete="off" onSubmit={event => event.preventDefault()}>
         <h3 className="formTitle">NEW NOTIFICATION</h3>
         
        <section>
          <p> 
           <StateTextFields value={info} name="info" onChange={setTextChange} id="standard-name" className="text"/>
          </p>
          <p>Set Date: <CalendarView handleDateChange={setDateChange} selectedDate={selectedDate}/></p>
          <p>Set Time: <Time className="time" value={selectedTime} onChange={setTimeChange}/></p>

          <div className="flex-center"> 
                <p className="margin-fix">Repeat Daily:</p> <Switch checked={dailyToggle} value={dailyToggle} onChange={handleToggleChange}/>
          </div>
          <div className="flex-center">
                <FormControlLabel 
                          icon={<EnhancedEncryptionIcon />} 
                          checkedIcon={<EnhancedEncryptionIcon />} 
                          onChange={pillsChange} 
                          value={pills} 
                          checked={pills}
                          label="Pills"
                />

                <FormControlLabel 
                          icon={<RestaurantIcon />} 
                          checkedIcon={<RestaurantIcon />} 
                          onChange={foodChange} 
                          checked={food}
                          value={food} label="Food"
                />

                <FormControlLabel 
                          icon={<EventAvailableIcon />} 
                          checkedIcon={<EventAvailableIcon />} 
                          onChange={appointmentChange} 
                          value={appointment} 
                          checked={appointment}
                          label="Appointment"
                />
          </div>
          <div>
              <MyButton buttonText="Save" type="submit" onClick="" buttonColor="primary"/>
              <MyButton buttonText="Cancel" onClick={reset} buttonColor="secondary"/>
          </div>
        </section>

        
        
      </form>
    </div>
  );
}

export default Form;