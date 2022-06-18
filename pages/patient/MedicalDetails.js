import React from 'react'

function medicalDetails(props) {
  const isDiabetic = props.diabetic
  return (
    <div>
      <div>

      </div>
      <div>
        <div className='flex mx-24'>
          <div className='w-1/4 m-4 bg-slate-100 p-4 mx-8 flex flex-col items-center justify-center h-32 drop-shadow-2xl rounded-lg shadow-gray-1000'>Blood Pressure:<div className='text-4xl m-3'>98{props.bloodPressure}</div></div>
          <div className='w-1/4 m-4 bg-slate-100 p-4 mx-8 flex flex-col items-center justify-center h-32 drop-shadow-2xl rounded-lg shadow-gray-1000'>Temperature::<div className='text-4xl m-3'>98{props.temperature}</div></div>
          <div className='w-1/4 m-4 bg-slate-100 p-4 mx-8 flex flex-col items-center justify-center h-32 drop-shadow-2xl rounded-lg shadow-gray-1000'>Pulse:<div className='text-4xl m-3'>98{props.pulse}</div></div>
          <div className='w-1/4 m-4 bg-slate-100 p-4 mx-8 flex flex-col items-center justify-center h-32 drop-shadow-2xl rounded-lg shadow-gray-1000'>Oxygen Level:<div className='text-4xl m-3'>98{props.oxygenLevel}</div></div>
        </div>
        <div className='flex mx-24'>
          <div className='w-1/4 m-4 bg-slate-100 p-4 mx-8 flex flex-col items-center justify-center h-32 drop-shadow-2xl rounded-lg shadow-gray-1000'>Weight:<div className='text-4xl m-3'>98{props.weight}</div></div>
          <div className='w-1/4 m-4 bg-slate-100 p-4 mx-8 flex flex-col items-center justify-center h-32 drop-shadow-2xl rounded-lg shadow-gray-1000'>Height:<div className='text-4xl m-3'>98{props.height}</div></div>
          <div className='w-1/4 m-4 bg-slate-100 p-4 mx-8 flex flex-col items-center justify-center h-32 drop-shadow-2xl rounded-lg shadow-gray-1000'>Diabetic:<div className='text-4xl m-3'>{props.diabetic ? props.sugarLevel : "No"}</div></div>
          <div className='w-1/4 m-4 bg-slate-100 p-4 mx-8 flex flex-col items-center justify-center h-32 drop-shadow-2xl rounded-lg shadow-gray-1000'>Admission Date:<div className='text-4xl m-3'>98{props.admissionDate}</div></div>
        </div>
        <div className='flex mx-24 justify-center'>
          <div className='w-1/4 m-4 bg-slate-100 p-4 mx-8 flex flex-col items-center justify-center h-32 drop-shadow-2xl rounded-lg shadow-gray-1000'>Discharge Date:<div className='text-4xl m-3'>98{props.dischargeDate}</div></div>
        </div>
      </div>
      <div>
        <div className='m-10 p-6 bg-blue-100 drop-shadow-2xl rounded-lg shadow-gray-1000'>
          <div className='text-2xl m-2'><strong>Issue with the patient</strong></div>
          {props.problem}
          "afjajdajncaojnoauhrc;soinapowncocnuawhuhfjladshfjasdhfkladsfkjladsjc-loader.js??ruleSet[1].rules[3].oneOf[2].use[1]!F:\detailsPage\BasalCare\pages\patient\MedicalDetails.js
          Used by 1 module(s), i. e.
          F:\detailsPage\BasalCare\node_modules\next\dist\compiled\@next\react-refresh-utils\loader.js!F:\detailsPage\BasalCare\node_modules\next\dist\build\webpack\loaders\next-swc-loader.js??ruleSet[1].rules[3].oneOf[2].use[1]!F:\detailsPage\BasalCare\pages\index.js
          * F:\detailsPage\BasalCare\node_modules\next\dist\compiled\@next\react-refresh-utils\loader.js!F:\detailsPage\BasalCare\node_modules\next\dist\build\webpack\loaders\next-swc-loader.js??ruleSet[1].rules[3].oneOf[2].use[1]!F:\detailsPage\BasalCare\pages\patient\medicalDetails.js
          Used by 1 module(s), i. e.
          F:\detailsPage\BasalCare\node_modules\next\dist\build\webpack\loaders\next-client-pages-loader.js?absolutePagePath=F%3A%5CdetailsPage%5CBasalCare%5Cpages%5Cpatient%5CmedicalDetails.js&page=%2Fpatient%2FmedicalDetails!"</div>
        <div className='m-10 p-6 bg-blue-100 drop-shadow-2xl rounded-lg shadow-gray-1000'>
          <div className='text-2xl m-2'><strong>Diagnosis Done</strong></div>
          {props.diagnosis}
          "afjajdajncaojnoauhrc;soinapowncocnuawhuhfjladshfjasdhfkladsfkjladsjc-loader.js??ruleSet[1].rules[3].oneOf[2].use[1]!F:\detailsPage\BasalCare\pages\patient\MedicalDetails.js
          Used by 1 module(s), i. e.
          F:\detailsPage\BasalCare\node_modules\next\dist\compiled\@next\react-refresh-utils\loader.js!F:\detailsPage\BasalCare\node_modules\next\dist\build\webpack\loaders\next-swc-loader.js??ruleSet[1].rules[3].oneOf[2].use[1]!F:\detailsPage\BasalCare\pages\index.js
          * F:\detailsPage\BasalCare\node_modules\next\dist\compiled\@next\react-refresh-utils\loader.js!F:\detailsPage\BasalCare\node_modules\next\dist\build\webpack\loaders\next-swc-loader.js??ruleSet[1].rules[3].oneOf[2].use[1]!F:\detailsPage\BasalCare\pages\patient\medicalDetails.js
          Used by 1 module(s), i. e.
          F:\detailsPage\BasalCare\node_modules\next\dist\build\webpack\loaders\next-client-pages-loader.js?absolutePagePath=F%3A%5CdetailsPage%5CBasalCare%5Cpages%5Cpatient%5CmedicalDetails.js&page=%2Fpatient%2FmedicalDetails!"</div>
      </div>
    </div>
  )
}

export default medicalDetails