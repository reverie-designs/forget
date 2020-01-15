import React, {useEffect, useReducer} from "react"
import api from "../helpers/api"
import reducer, {SET_USER, SET_ERROR, SET_NOTIFICATIONS_DATA,SET_NOTIFICATIONS_DAY, SET_SETTINGS, SET_GEOFENCE, SET_LOCATION, SET_MYEVENTS} from "../reducers/application"
// import { Z_STREAM_ERROR } from "zlib"


export default function useApplicationData() {

  // ==== INITIAL STATE ==== //
  //manages all tracked states of the app 
  const [state, dispatch] = useReducer(reducer, {
    user: "",
    notifications: [],
    todays_notifications: [],
    settings:{},
    today: new Date(),
    error: "",
    geofence: "",
    location: "",
    myEvents: []
  })
  
  const splitDate =(fullDate) =>{
    const dateArray = fullDate.toString().split(" ");
    const date = [];
    date.push(dateArray[1]);
    date.push(dateArray[2]);
    date.push(dateArray[3]);
    return date.join(" ");
  }

  const myEvents=(notifications)=>{
    if(notifications){
      const events = notifications.map((notification)=>{
        let noteStart = new Date(`${notification.date} ${notification.time}`);
        let startTime = noteStart.getTime()
        let noteEnd = startTime + 1000 * 60 * 60;
         const restructuredNotification={
           id: notification.id,
           title: notification.info,
           start: noteStart,
           end: new Date(noteEnd)
         }
         return restructuredNotification;
     })
     console.log("THESE ARE UPDATED EVENTS", events)
     return events;
    }
  };
  const getUser = (newUser) => {
    let user_id;
    let auth_code;
    let is_patient;
    let note_day_query;
    if(newUser.name.length > 1 && newUser.password.length > 1){
      const user = {name: newUser.name, password: newUser.password}
      return api.get("/api/user", {params:user})
        .then((res)=> {
          console.log("Found user", res.data[0])
          if(res.data[0].is_patient && res.data[0].name){
            auth_code = res.data[0].auth_code;
            user_id = {user_id: res.data[0].user_id}
            const today = splitDate(new Date());
            // const today = "Jan 17 2020"
            note_day_query = {auth_code: auth_code, day: today}
            dispatch({type: SET_USER, user: res.data[0], error: ""})
            Promise.all([
              api.get("api/settings", {params: user_id}),
              api.get("api/settings/geofence", {params: user_id}),
              api.get("api/notifications/day",{params: note_day_query})
            ])
            .then((all)=>{
              console.log("Settings", all[0].data[0])
              console.log("geofence", all[1].data[0])
              console.log("notifications for today", all[2].data)

              dispatch({type: SET_SETTINGS, settings: all[0].data[0]})
              dispatch({type: SET_GEOFENCE, geofence: all[0].data[1]})
              dispatch({type: SET_NOTIFICATIONS_DAY, todays_notifications: all[2].data})
            })
          } else if (!is_patient && res.data[0].name){
            auth_code = {auth_code: res.data[0].auth_code}
            console.log(auth_code);
            user_id = {user_id: res.data[0].user_id}
            console.log("NOPE")
            console.log(auth_code)
            dispatch({type: SET_USER, user: res.data[0], error: ""})
            const today = splitDate(new Date());
            // console.log("This is today", today);
            // const today = "Jan 13 2020"
            const notification = {auth_code: res.data[0].auth_code, day: today}
            Promise.all([
              api.get("api/settings", {params: user_id}),
              api.get("api/settings/geofence", {params: user_id}),
              api.get("api/notifications",{params: auth_code}),  
            ])
            .then((all)=>{

              console.log("Settings", all[0].data[0])
              console.log("geofence", all[1].data[0])
              console.log("ALL NOTIFICATIONS", all[2].data)
              console.log("TOday's request", notification);
              dispatch({type: SET_SETTINGS, settings: all[0].data[0]})
              dispatch({type: SET_GEOFENCE, geofence: all[1].data[0]})
              dispatch({type: SET_NOTIFICATIONS_DATA, notifications: all[2].data})
              if(all[2].data.length > 0){
                const events = myEvents(all[2].data) 
                dispatch({type: SET_MYEVENTS, myEvents: events})
              }
              return api.get("api/notifications/day",{params: notification})
              .then((res)=>{
                
                // console.log("THESE ARE",state.notifications);
                
                console.log("TODAY's NOTIFICATIONS", res.data);
                //current location for patient
                getLocation(auth_code);
              })
            })
          } else if (!res.data[0].name){
            dispatch({type: SET_ERROR, error:"Couldn't find matching user"})
          }
        })
    } else {
      dispatch({type: SET_ERROR, error:"user name and password must be more than one character"})
    }
  }  


const logout = () => {
  return dispatch({type: SET_USER, user: ""})
}

const updateRadius = (radius) => {
  api.post("api/settings/geofence", {params:radius})
  .then((res)=>{
    const user_id = {user_id: radius.user_id}
    dispatch({type: SET_GEOFENCE, geofence: radius})
    api.get("api/settings", {params: user_id})
  })
}

const addNotification = (notification) => {
  // const notification={date:"Jan 17 2020", time: "15:00:00", pills: true, appointment: false, food: true, info:"hello sunshine", daily:false , user_id: 1, auth_code: "V|R|FAMILY"}
  api.post("api/notifications", {notification})
  .then((res)=>{
    console.log("Notification set successfully", res.status);
    api.get("api/notifications",{params: {auth_code: notification.auth_code}})
    .then((res)=>{
      dispatch({type: SET_NOTIFICATIONS_DATA, notifications: res.data})
    })
  })
}

//CAREGIVER FROM PATIENT pass in object {auth_code: xxxxx}
const getLocation = (auth_code) =>{
  api.get("api/locations", {params:auth_code})
  .then((res)=>{
      console.log("received current location of patient", res.data[0])
      dispatch({type: SET_LOCATION, location: res.data[0]})
  })
}

//PATIENT TO CAREGIVER
const updateLocation = (locationInfo) =>{

  api.post(`api/locations`, {params:locationInfo})
  .then((res)=>{
    console.log("Location Set", res.status);
  })
}

const updateSettings = (settings)=> {
  // const settings={user_id: 2, address1: '662 King Street West', address2: "", city: "Toronto", province:"ON", country: "Canada", auth_code: code, is_patient: false}
  const user_id = {user_id: settings.user_id};
  api.post('api/settings', {params: settings})
  .then((res)=>{
    api.get('api/settings', {params: user_id})
  })
}
  // useEffect(()=>{

  // })


  return {state, logout, getUser, addNotification, updateLocation, updateRadius, getLocation, myEvents}
}