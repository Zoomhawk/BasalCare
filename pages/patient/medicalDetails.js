import React from 'react'

function medicalDetails(props) {
    const isDiabetic=props.diabetic
  return (
    <div>
        <ul>
            <li>Blood Pressure: {props.bloodPressure}</li>
            <li>Temperature: {props.temperature}</li>
            <li>Pulse: {props.pulse}</li>
            <li>Oxygen Level: {props.oxygenLevel}</li>
            <li>Weight: {props.weight}</li>
            <li>Height: {props.height}</li>
            <li>Diabetic: {props.diabetic?"True":"False"}</li>
            <li>{props.diabetic?props.sugarLevel:""}</li>
            <li>Admission Date: {props.admissionDate}</li>
            <li>Discharge Date: {props.dischargeDate}</li>
            <li>Issue: {props.problem}</li>
            <li>Diagnosis: {props.diagnosis}</li>
        </ul>
    </div>
  )
}

export default medicalDetails