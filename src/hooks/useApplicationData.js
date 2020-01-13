import React, {useEffect, useReducer} from "react"
import api from "../helpers/api"
import reducer, {SET_USER, SET_ERROR, SET_NOTIFICATIONS_DATA,SET_NOTIFICATIONS_DAY, SET_SETTINGS, SET_GEOFENCE} from "../reducers/application"
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
    geofence: ""
  })
  
  const splitDate =(fullDate) =>{
    const dateArray = fullDate.toString().split(" ");
    const date = [];
    // date.push(dateArray[0]);
    date.push(dateArray[1]);
    date.push(dateArray[2]);
    date.push(dateArray[3]);
    console.log("adding to query",date.join(" "));
    return date.join(" ");
  }

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
              dispatch({type: SET_NOTIFICATIONS_DAY, todays_notifications: all[2].data[0]})
            })
          } else if (!is_patient && res.data[0].name){
            auth_code = {auth_code: res.data[0].auth_code}
            console.log(auth_code);
            user_id = {user_id: res.data[0].user_id}
            console.log("NOPE")
            console.log(auth_code)
            dispatch({type: SET_USER, user: res.data[0], error: ""})
            const today = splitDate(new Date());
            console.log("This is today", today);
            // const today = "Jan 17 2020"
            note_day_query = {auth_code: res.data[0].auth_code, day: today}
            Promise.all([
              api.get("api/settings", {params: user_id}),
              api.get("api/settings/geofence", {params: user_id}),
              api.get("api/notifications",{params: auth_code}),
              api.get("api/notifications/day",{params: note_day_query}),
            ])
            .then((all)=>{
              console.log("Settings", all[0].data[0])
              console.log("geofence", all[1].data[0])
              console.log("ALL NOTIFICATIONS", all[2].data)
              console.log("notifications for today", all[3].data)
              dispatch({type: SET_SETTINGS, settings: all[0].data[0]})
              dispatch({type: SET_GEOFENCE, geofence: all[1].data[0]})
              dispatch({type: SET_NOTIFICATIONS_DATA, notifications: all[2].data})
              dispatch({type: SET_NOTIFICATIONS_DAY, todays_notifications: all[3].data})
            })
          } else if (!res.data[0].name){
            dispatch({type: SET_ERROR, error:"Couldn't find matching user"})
          }
        })
    } else {
      dispatch({type: SET_ERROR, error:"user name and password must be more than one character"})
    }
  }  
    // const user = {name: newUser.name, password: newUserpassword};

    // (newUser.name.length > 1) ? dispatch({type: SET_USER, user: newUser, error: ""}) : 

const logout = () => {
  return dispatch({type: SET_USER, user: ""})
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
  // useEffect(()=>{

  // })


  return {state, logout, getUser, addNotification}
  // return {state, logout, getUser, setNotifications, setTodaysNotifications, setSettings}
}