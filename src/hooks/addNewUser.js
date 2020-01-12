import React, {useEffect, useReducer} from 'react';
import api from '../helpers/api';


export default function addNewUser(name, password){
 console.log("THIS IS POST", name, password)
 const result="";
 let user = {name: name, password: password};
//  const newUser = user.JSON.strigify;
//  api.post(`/user`, {
//   // name: name,
//   // password: password
//   user
// })
//   .then(()=>{
//   result="Bang";
//   console.log("added user", result, user.name, user.password);
// })
// .catch((e)=>{console.log(e)})
 api.post(`/api/user/`, {user
    })
     .then(()=> {
      console.log("added user", result, user.name, user.password);
      //  data.user = all[0].data
       
     })

  return addNewUser
}