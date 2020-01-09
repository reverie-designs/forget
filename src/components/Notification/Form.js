import React, { useState, useEffect } from "react";
import MyButton from "./Button";
import StateTextFields from "./TextField";
import FormControlLabel from "./CheckBox";
import Switch from "./Switch";
import DateTimePicker from "./DateTime";
// Icons

import RestaurantIcon from '@material-ui/icons/Restaurant';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const formResult = {};
//date:"", time:"", categories:[pills:T/F, appointment:T/F, food:T/F], info:"", daily:T/F 


function Form(props) {

  //DATE TIME
  const [selectedDateTime, handleDateChange] = useState(new Date());

  // TEXT BOX STATE
  const [info, setInfo] = useState('');
  const setTextChange = event => {
    setInfo(event.target.value);
  };

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
    setAppointment(event.target.checked);
  };

  // DAILY TOGGLE STATE
  const [dailyToggle, setDailyToggle] = useState(false);
  const handleToggleChange = event => {
    setDailyToggle(event.target.checked);
  };

  //CANCEL BUTTON
  const reset = () => {
    setInfo("");
    setDailyToggle(false);
    setPills(false);
    setFood(false);
    setAppointment(false);
    handleDateChange(new Date());
  }

    const splitTime =(fullDate) =>{
      const dateArray = fullDate.toString().split(" ");
      const time = [];
      time.push(dateArray[4]);
      return time.toString();
    }

    const splitDate =(fullDate) =>{
      const dateArray = fullDate.toString().split(" ");
      const date = [];
      date.push(dateArray[0]);
      date.push(dateArray[1]);
      date.push(dateArray[2]);
      date.push(dateArray[3]);
      return date.join(" ");
    }
    
    //SAVE BUTTON
    const [test, setTest] = useState("");
    const save = () => {
      // const newInfo = info.toString();
      formResult.info = info;
      // formResult.categories = {pills: pills, appointment: appointment, food: food};
      formResult.pills = pills;
      formResult.appointment = appointment;
      formResult.food = food;
      formResult.daily = dailyToggle;
      formResult.time = splitTime(selectedDateTime)
      formResult.date = splitDate(selectedDateTime);
      // console.log(formResult.info);
      // console.log(formResult.pills);
      // console.log(formResult.daily);
      // console.log(formResult.date);
      // console.log(formResult.time);
    }
 
    //Checks TIME
     useEffect(() => {
      //  console.log(selectedDate)
      if(selectedDateTime){
        setTest(selectedDateTime)
      }   
      }, [selectedDateTime])
      console.log("THIS IS TEST",test);
  return (
    <div className="formBox">

       <form autoComplete="off" onSubmit={event => event.preventDefault()}>
         <h3 className="formTitle">NEW NOTIFICATION</h3>
         
        <section>
          <p> 
           <StateTextFields value={info} name="info" onChange={setTextChange} id="standard-name" className="text"/>
          </p>
          <p>Set Date: <DateTimePicker value={selectedDateTime} onChange={handleDateChange}/></p>
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
              <MyButton buttonText="Save" type="submit" onClick={save} buttonColor="primary"/>
              <MyButton buttonText="Cancel" onClick={reset} buttonColor="secondary"/>
          </div>
        </section>

        
        
      </form>
    </div>
  );
}

export default Form;