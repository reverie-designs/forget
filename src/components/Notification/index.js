import React, {useState} from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Form from "./Form";

function Notification(props) {
  return (
<section className="notification-box">

    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div>
        <Form user={props.user} addNotification={props.addNotification}/>
      </div>
    </MuiPickersUtilsProvider>
                      
</section>


)};

export default Notification;