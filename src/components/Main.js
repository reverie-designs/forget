import React from 'react';
import Map from './MapComponent/component/Map';
import PatientHomepage from './PatientHomepage/PatientHomepage';
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

const Main = ({
  addUser,
  error,
  geofence,
  getLocation,
  location,
  settings,
  user,
}) => (
  <div>
    {user
      ? (user.is_patient
        ? <PatientHomepage />
        : <Map
            user={user} 
            geofence={geofence} 
            settings={settings} 
            location={location} 
            getLocation={getLocation}/>
      )
      : (
        <div>
          <SignUp addUser={addUser} error={error}/>
          <HomePageCarousel/>
        </div>)}
  </div>
);

export default Main;