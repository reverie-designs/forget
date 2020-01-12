import React from 'react';
import Clock from './Clock';
import './PatientHomepageDay.scss'

export default function PatientHomepage() {
  return (
    <div>
      <div className="Patient-homepage-day">
        <h3 className="greeting-day">Good Morning</h3>
      </div>
      <div className="patient-homepage-night">
        <h3 className="greeting-night">Good Evening</h3>
      </div>
      <Clock />
    </div>
  )
}