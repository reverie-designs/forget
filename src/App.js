import React from 'react';
import Map from './components/MapComponent/component/Map';
import './App.scss';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/addons/dragAndDrop/styles.css"
import "react-big-calendar/lib/css/react-big-calendar.css"
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import PatientSettings from './components/PatientSettings/PatientSettings';
import SignIn from './components/SignIn';
import Notification from './components/Notification/index'
import Main from './components/Main';
import PatientNotifications from './components/PatientNotifications/PatientNotifications';
import PopUpNotification from './components/PatientNotifications/PopUpNotification';
import useApplicationData from "./hooks/useApplicationData";
import ToastifyPopUp from './components/PatientNotifications/ToastifyPopUp';


import {
  Route,
  HashRouter,
  Redirect
} from "react-router-dom";

const localizer = momentLocalizer(moment);


const myNotificationList = [{
  id: 0,
  title: 'All Day Event very long title',
  allDay: true,
  start: new Date(2020, 3, 0),
  end: new Date(2020, 3, 1),
},
{
  id: 1,
  title: 'Long Event',
  start: new Date(2020, 3, 7),
  end: new Date(2020, 3, 10),
},

{
  id: 2,
  title: 'DTS STARTS',
  start: new Date(2020, 2, 13, 0, 0, 0),
  end: new Date(2020, 2, 20, 0, 0, 0),
},

{
  id: 3,
  title: 'DTS ENDS',
  start: new Date(2020, 10, 6, 0, 0, 0),
  end: new Date(2020, 10, 13, 0, 0, 0),
},

{
  id: 4,
  title: 'Some Event',
  start: new Date(2020, 3, 9, 0, 0, 0),
  end: new Date(2020, 3, 10, 0, 0, 0),
},
{
  id: 5,
  title: 'Conference',
  start: new Date(2020, 3, 11),
  end: new Date(2020, 3, 13),
  desc: 'Big conference for important people',
},
{
  id: 6,
  title: 'Meeting',
  start: new Date(2020, 3, 12, 10, 30, 0, 0),
  end: new Date(2020, 3, 12, 12, 30, 0, 0),
  desc: 'Pre-meeting meeting, to prepare for the meeting',
},
{
  id: 7,
  title: 'Lunch',
  start: new Date(2020, 3, 12, 12, 0, 0, 0),
  end: new Date(2020, 3, 12, 13, 0, 0, 0),
  desc: 'Power lunch',
},
{
  id: 8,
  title: 'Meeting',
  start: new Date(2020, 3, 12, 14, 0, 0, 0),
  end: new Date(2020, 3, 12, 15, 0, 0, 0),
},
{
  id: 9,
  title: 'Happy Hour',
  start: new Date(2020, 3, 12, 17, 0, 0, 0),
  end: new Date(2020, 3, 12, 17, 30, 0, 0),
  desc: 'Most important meal of the day',
},
{
  id: 10,
  title: 'Dinner',
  start: new Date(2020, 3, 12, 20, 0, 0, 0),
  end: new Date(2020, 3, 12, 21, 0, 0, 0),
},
{
  id: 11,
  title: 'Birthday Party',
  start: new Date(2020, 3, 13, 7, 0, 0),
  end: new Date(2020, 3, 13, 10, 30, 0),
},
{
  id: 12,
  title: 'Late Night Event',
  start: new Date(2020, 3, 17, 19, 30, 0),
  end: new Date(2020, 3, 18, 2, 23, 0),
},
{
  id: 12.5,
  title: 'Late Same Night Event',
  start: new Date(2020, 1, 17, 19, 30, 0),
  end: new Date(2020, 1, 17, 23, 30, 0),
},
{
  id: 13,
  title: 'Multi-day Event',
  start: new Date(2020, 3, 20, 19, 30, 0),
  end: new Date(2020, 3, 20, 19, 52, 0),
  // start: new Date(new Date(2020, 3, 20).setHours(new Date().getHours() - 3)),
  // end: new Date(new Date(2020, 3, 22).setHours(new Date().getHours() + 3))
},
{
  id: 14,
  title: 'Today',
  start: new Date(new Date().setHours(new Date().getHours() - 3)),
  end: new Date(new Date().setHours(new Date().getHours() + 3)),
},
{
  id: 15,
  title: 'Today-Now',
  start: new Date(new Date().setHours(new Date().getHours() - 3)),
  end: new Date(new Date().setHours(new Date().getHours() + 3)),
},
]

function App() {
  const {state, logout, getUser, addNotification, updateRadius, updateSettings, myEvents} = useApplicationData();


  // const showCalendar = () => state.user && state.notifications ? state.user?: 
  return (
    <HashRouter>
      <div>
        <NavBar user={state.user} onClick={logout} geofence={state.geofence} updateRadius={updateRadius}/>
          <main>
            {/* MAIN PAGE */}
              <Route exact path="/" component={()=>
                      <Main addUser={getUser} 
                            user={state.user} 
                            error={state.error}  
                            geofence={state.geofence} 
                            settings={state.settings} 
                            location={state.location} 
                            getLocation={state.getLocation} 
                            todays_notifications={state.todays_notifications} 
                      />
              }/>

            {/* SIGNUP PAGE */}
              <Route exact path="/sign-up" component={() => (!state.user) ? <SignUp addUser={getUser} user={state.user} error={state.error} /> : <Redirect to="/" />}/>

            {/*  LOG IN PAGE */}
              <Route exact path="/sign-in" component={() => (!state.user) ? <SignIn addUser={getUser} user={state.user} error={state.error}/> : <Redirect to="/" />}/>


            {/* SETTINGS  */}
              <Route path="/settings" component={() => <PatientSettings user={state.user} settings={state.settings} updateSettings={updateSettings}/>}/>

            {/* CALENDAR NOTIFICATIONS */}
              <Route exact path="/calendar" component={() => <Calendar className='CalendarBox'
                                                  localizer={localizer}
                                                  events={state.myEvents}
                                                  startAccessor="start"
                                                  endAccessor="end"
                                                  style={{height: 500}}/> }
              />

            {/* CREATE NORIFICATION */}
              <Route path="/create-notification" component={() => (state.user.is_patient === false) ? <Notification addNotification={addNotification} user={state.user} error={state.error} /> : <Redirect to="/#/"/> }/>
        </main>
      </div>  
     </HashRouter>   
  );
}

export default App;