import React from 'react';
import HomePageCarousel from './HomepageCarousel/HomepageCarousel';
import SignUp from "./SignUp";

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

export default function MainHomepage(props) {

  return (
    <div>
      <SignUp addUser={props.addUser} user={props.user} error={props.error}/>
      <HomePageCarousel/>
    </div>
  );
}