import React, {useEffect, useReducer} from 'react';
import api from '../helpers/api';


export default function getUsers(){
  // const today= new Date();
  // // const date = splitDate(today);
  const data = {};

Promise.all([
              api.get("/api/user"),
            ])
            .then((all)=> {
              data.user = all[0].data
              console.log(data.user);
            })

  return getUsers
}