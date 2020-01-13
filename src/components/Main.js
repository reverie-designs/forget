import React from 'react';
import Map from './MapComponent/component/Map';
import PatientHomepageDay from './PatientHomepage/PatientHomepageDay';
import SignUp from "./SignUp";
import HomePageCarousel from './HomepageCarousel/HomepageCarousel';

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
  const loggedIn = (props.user);
  const isCareGiver = loggedIn && props.user.patient === false;
  const isPatient = loggedIn && props.user.patient === true;

  return (
    <div>
      { !loggedIn && <div>
        <SignUp addUser={props.addUser} error={props.error}/>
        <HomePageCarousel/>
        </div>
      }
      { isCareGiver && <Map /> }
      { isPatient && <PatientHomepageDay />}
    </div>
  );
}