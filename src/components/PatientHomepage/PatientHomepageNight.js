import React from 'react';
import Clock from './Clock';
import './PatientHomepage.scss'

export default function PatientHomepage() {
  return (
    <div className="patient-homepage-night">
      <h3>Good Evening</h3>
      <Clock />
    </div>
  )
}