import React, {useEffect, useReducer} from "react"
import api from "../helpers/api"
import reducer, {SET_USER, SET_ERROR, SET_NOTIFICATIONS_DATA,SET_NOTIFICATIONS_DAY, SET_SETTINGS} from "../reducers/application"
// import { Z_STREAM_ERROR } from "zlib"


export default function useApplicationData() {

  // ==== INITIAL STATE ==== //
  //manages all tracked states of the app 
  const [state, dispatch] = useReducer(reducer, {
    user: "",
    notifications: [],
    todaysNotifications: [],
    settings:{},
    today: new Date(),
    error: ""
  })
  

  const getUser = (newUser) => {
    const user ={}
    if(newUser.name.length > 1 && newUser.password.length > 1){
      user.name = newUser.name 
      user.password = newUser.password
      return api.get("/api/user", {params:user})
        .then((res)=> {
          console.log(res.data[0].avatar_url);
          res.data[0].name ? dispatch({type: SET_USER, user: res.data[0], error: ""}) : dispatch({type: SET_ERROR, error:"Couldn't find matching user"})
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

  // useEffect(()=>{

  // })


  return {state, logout, getUser}
  // return {state, logout, getUser, setNotifications, setTodaysNotifications, setSettings}
}