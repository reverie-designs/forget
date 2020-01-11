import React from 'react';
import HomePageCarousel from './HomepageCarousel/HomepageCarousel';
import SignUp from "./SignUp";
import Map from './MapComponent/component/Map';
import PatientHomepageDay from './PatientHomepage/PatientHomepageDay';


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
      { !loggedIn && <SignUp addUser={props.addUser} user={props.user} error={props.error}/> }
      { isCareGiver &&  <Map /> }
      { isPatient && <PatientHomepageDay />}
      <HomePageCarousel/> */}
    </div>
  );
}