import React from 'react'

function medicalHistory({hospitalName,treatments}) {
  return (
    <div>
        <div className='text-center'>{hospitalName}</div>
        <div>
            Treatments Received:
            <ul style={{'paddingLeft': '6%','listStyle':'circle'}}>
                {treatments.map((treatment)=>{
                    return <li>{treatment}</li>;
                })}
            </ul>
        </div>
    </div>
  )
}

export default medicalHistory