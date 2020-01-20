import React, {
  useState,
  //useEffect
} from "react";
import MyButton from "./Button";
import StateTextFields from "./TextField";
import FormControlLabel from "./CheckBox";
import Switch from "./Switch";
import DateTimePicker from "./DateTime";
import { blue } from "@material-ui/core/colors";
import './Form.scss';

import RestaurantIcon from '@material-ui/icons/Restaurant';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

function Form(props) {

  
  //DATE TIME STATE
  const [selectedDateTime, handleDateChange] = useState(new Date());
  
  // TEXT BOX STATE
  const [info, setInfo] = useState('');
  const setTextChange = event => {
    setInfo(event.target.value);
  };
  
  //CATEGORY STATE
  const [pills, setPills] = useState(false);
  const [food, setFood] = useState(false);
  const [appointment, setAppointment] = useState(false);
  
  //SAVE NOTIFICATION STATE
  // const [message, setMessage] = useState("")

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

  // 15:00:00
  const splitTime =(fullDate) =>{
    const dateArray = fullDate.toString().split(" ");
    const time = [];
    time.push(dateArray[4]);
    return time.toString();
  }

  // 'Jan 19 2020'
  const splitDate =(fullDate) =>{
    const dateArray = fullDate.toString().split(" ");
    const date = [];
    date.push(dateArray[1]);
    date.push(dateArray[2]);
    date.push(dateArray[3]);
    return date.join(" ");
  }
  
  // const [test, setTest] = useState("");
  //SAVE BUTTON
  const save = () => {
    let notification = {};
    notification.info = info;
    notification.pills = pills;
    notification.appointment = appointment;
    notification.food = food;
    notification.daily = dailyToggle;
    notification.time = splitTime(selectedDateTime)
    notification.date = splitDate(selectedDateTime);
    notification.user_id = props.user.user_id;
    notification.auth_code = props.user.auth_code;
    console.log("Form", notification);
    // setMessage("Notification Saved")
    props.addNotification(notification);
  }
  
    // //Checks TIME
    //  useEffect(() => {
    //   //  console.log(selectedDate)
    //   if(selectedDateTime){
    //     setTest(selectedDateTime)
    //   }   
    //   }, [selectedDateTime])
    //   console.log("THIS IS TEST",test);
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
                          icon={<EnhancedEncryptionIcon style={{ color: blue[900] }} />} 
                          checkedIcon={<EnhancedEncryptionIcon />} 
                          onChange={pillsChange} 
                          value={pills} 
                          checked={pills}
                          label="Pills"
                />

                <FormControlLabel 
                          icon={<RestaurantIcon style={{ color: blue[900] }} />} 
                          checkedIcon={<RestaurantIcon />} 
                          onChange={foodChange} 
                          checked={food}
                          value={food} label="Food"
                />

                <FormControlLabel 
                          icon={<EventAvailableIcon  style={{ color: blue[900] }} />} 
                          checkedIcon={<EventAvailableIcon />} 
                          onChange={appointmentChange} 
                          value={appointment} 
                          checked={appointment}
                          label="Appointment"
                />
          </div>
          <div>
              <MyButton buttonText="Save" type="submit" onClick={save} buttonColor="primary" className="save-button"/>
              <MyButton buttonText="Cancel" onClick={reset} buttonColor="secondary" className="cancel-button"/>
          </div>
        </section>

        
        
      </form>
    </div>
  );
}

export default Form;