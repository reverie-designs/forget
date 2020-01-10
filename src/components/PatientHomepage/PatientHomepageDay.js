import React from 'react';
import Clock from './Clock';
import './PatientHomepageDay.scss'

export default function PatientHomepage() {
  return (
    <div className="patient-homepage-day">
      <h3 className="greeting-day">Good Morning</h3>
      <Clock />
    </div>
  )
}