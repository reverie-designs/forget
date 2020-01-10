import React from 'react';
import HomePageCarousel from './HomepageCarousel/HomepageCarousel';
import SignUp from "./SignUp";

export default function Main(props) {

  return (
    <div>
      <SignUp addUser={props.addUser} user={props.user} error={props.error}/>
      <HomePageCarousel/>
    </div>
  );
}