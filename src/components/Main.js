import React from 'react';
import Map from './MapComponent/component/Map';
import PatientHomepageDay from './PatientHomepage/PatientHomepageDay';
import MainHomepage from "./MainHomepage"

//  const checkForPatient = () => {
//   if (user === "") {
//     return (<div><Main addUser={validateSignUp} user={user} error={error}/></ div>)
//   } else {
//     if (user.patient === true) {
//       return (<div><PatientHomepageDay /></div>)
//     } else {
//       return (<div><Map /></div>)
//     }
//   }
// };

export default function Main(props) {
  const loggedIn = !!props.user;
  const isCareGiver = loggedIn && props.user.patient === false;
  const isPatient = loggedIn && props.user.patient === true;

  return (
    <div>
      { !loggedIn && <MainHomepage addUser={props.addUser} user={props.user} error={props.error}/> }
      { isCareGiver &&  <Map /> }
      { isPatient && <PatientHomepageDay />}
    </div>
  );
}