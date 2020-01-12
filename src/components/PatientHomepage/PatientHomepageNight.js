import React from 'react';
import Clock from './Clock';
import './PatientHomepageNight.scss'

export default function PatientHomepage() {
  return (
    <div className="patient-homepage-night">
      <h3 className="greeting-night">Good Evening</h3>
      <Clock />
    </div>
  )
}