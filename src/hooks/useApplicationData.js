//useApplicationData.js

import React, {useEffect, useReducer} from 'react';
import api from '../helpers/api';
import Axios from 'axios';
// import splitDate from "../helpers/getDate";

export default function useApplicationData(){
  // const today= new Date();
  // // const date = splitDate(today);
  const data = {};
  const getUsers = (name, password) => {
    console.log(name, password);
    let user = {name: name, password: password};
    // console.log("This is USER to SIGNIN", user);
      // return api.get("/api/user", {params:{name:name, password:password}})
      return api.get("/api/user", {params:user})
                  .then((res)=> {
                    console.log(res.data[0]);
                    let code = res.data[0].auth_code
                    let auth_code = {auth_code: code};
                    console.log('magic code',auth_code);
                    api.get("api/notifications",{params:auth_code})
                    .then((res)=>{
                      console.log("notifications: ", res.data);
                      console.log('HELLO');
                      const something={auth_code: code, day:"Jan 17 2020"}
                      console.log("day request", something);
                      api.get("api/notifications/day",{params:something})
                      .then((res)=>{
                          console.log("Today's Notifications", res.data);
                          // const { date, time, pills, appointment, food, info, daily } = request.body.notification;
                          const notification={date:"Jan 17 2020", time: "15:00:00", pills: true, appointment: false, food: true, info:"hello sunshine", daily:false , user_id: 1}
                          api.post("api/notifications", {notification})
                          .then((res)=>{
                            console.log("POP", res.status);
                            console.log("created new notification", res.data);
                            const care_giver={user_id: 1};
                            api.get("api/locations", {params:auth_code})
                            .then((res)=>{
                              console.log("location", res.data);
                              const location={user_id: 1, latitude: "43.647650", longitude:"-79.384845"}
                              api.post(`api/locations`, {params:location})
                              .then((res)=>{
                                console.log("Location Set", res.status);
                                const settings={user_id: 2, address1: '662 King Street West', address2: "", city: "Toronto", province:"ON", country: "Canada", auth_code: code, is_patient: false}
                                // const { address1, address2, city, province, country} = request.body.settings;
                                api.post('api/settings', {params: settings})
                                .then((res)=>{
                                    console.log("settings set", res.status);
                                    const radius ={ user_id: 2, radius: 9, radius_on:true};
                                    api.post("api/settings/geofence", {params:radius})
                                    .then((res)=>{
                                      console.log("Setting radius worked");
                                      const user_id = {user_id: 2};
                                      api.get("api/settings", {params: user_id})
                                      .then((res)=>{
                                        console.log("recieving settings", res);
                                        api.get("api/settings/geofence", {params: user_id})
                                        .then((res)=>{
                                          console.log("got Radius settings", res);
                                        })
                                      })
                                    })
                                })
                              })
                            })
                          })
                          // 
                          // console.log("request", auth_code);
                          // api.get("api/locations", {params:auth_code})
                          // .then((res)=>{
                          //   console.log("location", res.data);
                          //   const location={user_id: 1, latitude: "43.647650", longitude:"-79.384845"}
                          //   // const user_id = "1";
                          //   api.post(`api/locations`, {params:location})
                          // })
                      }
                      )
                    })
                    // return res.data[0];
                    // data.user = all[0].data
                    // console.log(data.user);
                  })
    }
// const addNewUser = (name, password) => {
//  return api.post(`/api/user/${name}`, {password})
//   .then(()=> {
//     // data.user = all[0].data
//     console.log("added user");
//   })
// }
  

// console.log("THIS IS POST", name, password)
const result="";


const addNewUser = (name, password)=>{
  let user = {name: name, password: password};
  console.log(user);
  return api.post(`/api/user/`, {user})
  .then(()=> {
     console.log("added user", result, user.name, user.password);
  })
}
  return { getUsers, addNewUser}
}