import React,{useState, Fragment} from 'react';
import logo from './forgetmenot.png';
import Map from './components/MapComponent/component/Map';
import './App.scss';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/addons/dragAndDrop/styles.css"
import "react-big-calendar/lib/css/react-big-calendar.css"
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import HomepageCarousel from './components/HomepageCarousel/HomepageCarousel';
import PatientSettings from './components/PatientSettings/PatientSettings';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
// import CalendarView from './components/Notification/CalendarView'
// import Time from './components/Notification/Time'
// import MyButton from './components/Notification/Button'
import Form from './components/Notification/Form'
import SignIn from './components/SignIn';
// import HomepageCarousel from './components/HomepageCarousel/HomepageCarousel';
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';
import Notification from './components/Notification/index'
// import ReactDOM from "react-dom";
// import { Link } from 'react-router-dom';
import Main from './components/Main';
import PatientNotifications from './components/PatientNotifications/PatientNotifications';
import {
  Route,
  NavLink,
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

const data = {
 users: [{
    id: 1,
    name: "Dasha",
    password: "xxx",
    is_patient: false,
    authorizationCode: null
  },
  {
    id: 2,
    name: "Fatima",
    password: "123",
    is_patient: true,
    authorizationCode: null
  }
] 
};

const errors = {signIn: "username password didn't match", signUp: "We already have a user with that username"};

 /* <Form categories = {data.categories}/> */
function App() {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const addUser = (newUser) => {
      setUser(newUser);
      console.log('yop')
      return <Redirect to='/bob' />
  }
  const addError = (msg) => {
    setError(msg);
  }
  const findUser = (newUser) => {
    return data.users.find(user=> user.name === newUser.username && user.password === newUser.password);
  }
  const validate = (newUser) => {
    console.log(data.users.name, newUser.username);
    console.log(data.users.password, newUser.password);
    console.log("THIS IS",data.users[0].name);
    let result = findUser(newUser);
    console.log("This is result", result);
    if(result) {
      console.log("BANG");
      addUser(result);
    }
    else {
      console.log("PEW");
      addError(errors.signIn);
    }
  }

  const validateSignUp = (newUser) => {
        let result = findUser(newUser);
        if(result === undefined){
          data.users.push(newUser);
          setUser(newUser);
        } else {
          addError(errors.signUp);
        }
  }

  const logoutUser = () => {
    setUser("")
  };
 
  //import ReactDOM from "react-dom";
  return (
    <HashRouter>
          <div>
            <NavBar user={user} onClick={logoutUser}/>
            <PatientNotifications />
              <div>
                {/* <p><NavLink to="/cv-map">Map</NavLink></p> */}
                  {/* <PatientSettings/> */}
              
                  <p>This is User: {user.name}</p>
                  {/* <SignUp addUser={validateSignUp} user={user} error={error}/> */}
                </div>
                <main>

                {/* <Route path='/' render={props =>
                                    <Fragment>
                                      <SignUp addUser={validateSignUp} user={user} error={error} />
                                      <HomepageCarousel/>
                                    </Fragment>
                                  } /> */}
                {/* <Route exact path="/" component={HomepageCarousel}/> */}
                {/* <Route exact path="/" component={() => <SignUp  />}/> */}
                <Route exact path="/" component={()=>
                  // user ? Home : LandingPage
                  <Main user={user} error={error}/>
                  }/>
                {/* <Route exact path="/#/" component={() => <Main addUser={validateSignUp} user={user} error={error} />}/> */}
                <Route exact path="/sign-up" component={() => (!user) ? <SignUp addUser={validateSignUp} user={user} error={error} /> : <Redirect to="/" />}/>
                <Route exact path="/sign-in" component={() => (!user) ? <SignIn addUser={validate} user={user} error={error}/> : <Redirect to="/"/>}/>
                <Route path="/cv-map" component={Map}/>
                <Route path="/settings" component={PatientSettings}/>
                <Route path="/calendar" component={() => <Calendar className='CalendarBox'
                                                    localizer={localizer}
                                                    events={myNotificationList}
                                                    startAccessor="start"
                                                    endAccessor="end"
                                                    style={{height: 500}}/>} //Redirect patient to their homepage
                /> 
                <Route path="/create-notification" component={() => <Notification/>}/>
             
                  {/* <p>This is User: {user.name}</p> */}
                  {/* <SignIn  addUser={validate} user={user} error={error}/> */}
                  {/* <section className="notification-box">
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div>
                          <Form/>
                        </div>
                          
                      </MuiPickersUtilsProvider>
                      
                  </section>
                  <Map/>
                  
                  <Calendar
                            className='CalendarBox'
                            localizer={localizer}
                            events={myNotificationList}
                            startAccessor="start"
                            endAccessor="end"
                            style={{height: 500}}
                  /> */}
                  {/* <HomepageCarousel/> */}
              </main>
          </div>  
     </HashRouter>   
  );
}

export default App;