import React, { useState, useEffect } from "react";
import axios from "axios";

function medicalDetails(props) {
  const [medicalDetails, setMedicalDetails] = useState([]);
  useEffect(() => {
    if (props.data && props.data.treatmentDetails.length) {
      setMedicalDetails(props.data.treatmentDetails[0]);
    }
  }, []);
  return (
    <div>
      <div>
        <div className="flex mx-24">
          <div className="w-1/4 m-4 bg-slate-100 p-4 mx-8 flex flex-col items-center justify-center h-32 drop-shadow-2xl rounded-lg shadow-gray-1000">
            Blood Pressure:
            <div className="text-2xl m-3">{medicalDetails.bloodPressure}</div>
          </div>
          <div className="w-1/4 m-4 bg-slate-100 p-4 mx-8 flex flex-col items-center justify-center h-32 drop-shadow-2xl rounded-lg shadow-gray-1000">
            Temperature::
            <div className="text-2xl m-3">{medicalDetails.temperature}</div>
          </div>
          <div className="w-1/4 m-4 bg-slate-100 p-4 mx-8 flex flex-col items-center justify-center h-32 drop-shadow-2xl rounded-lg shadow-gray-1000">
            Pulse:<div className="text-2xl m-3">{medicalDetails.pulse}</div>
          </div>
          <div className="w-1/4 m-4 bg-slate-100 p-4 mx-8 flex flex-col items-center justify-center h-32 drop-shadow-2xl rounded-lg shadow-gray-1000">
            Oxygen Level:
            <div className="text-2xl m-3">{medicalDetails.oxygenLevel}</div>
          </div>
        </div>
        <div className="flex mx-24">
          <div className="w-1/4 m-4 bg-slate-100 p-4 mx-8 flex flex-col items-center justify-center h-32 drop-shadow-2xl rounded-lg shadow-gray-1000">
            Weight:<div className="text-2xl m-3">{medicalDetails.weight}</div>
          </div>
          <div className="w-1/4 m-4 bg-slate-100 p-4 mx-8 flex flex-col items-center justify-center h-32 drop-shadow-2xl rounded-lg shadow-gray-1000">
            Height:<div className="text-2xl m-3">{medicalDetails.height}</div>
          </div>
          <div className="w-1/4 m-4 bg-slate-100 p-4 mx-8 flex flex-col items-center justify-center h-32 drop-shadow-2xl rounded-lg shadow-gray-1000">
            Diabetic:
            <div className="text-2xl m-3">
              {medicalDetails.diabetic ? medicalDetails.sugarLevel : "No"}
            </div>
          </div>
          <div className="w-1/4 m-4 bg-slate-100 p-4 mx-8 flex flex-col items-center justify-center h-32 drop-shadow-2xl rounded-lg shadow-gray-1000">
            Admission Date:
            <div className="text-2xl m-3">
              {medicalDetails.admissionDate &&
                medicalDetails.admissionDate.substring(0, 10)}
            </div>
          </div>
        </div>
        <div className="flex mx-24 justify-center">
          <div className="w-1/4 m-4 bg-slate-100 p-4 mx-8 flex flex-col items-center justify-center h-32 drop-shadow-2xl rounded-lg shadow-gray-1000">
            Discharge Date:
            <div className="text-2xl m-3">
              {medicalDetails.dischargeDate &&
                medicalDetails.dischargeDate.substring(0, 10)}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="m-10 p-6 bg-blue-100 drop-shadow-2xl rounded-lg shadow-gray-1000">
          <div className="text-2xl m-2">
            <strong>Issue with the patient</strong>
          </div>
          {medicalDetails.problem}
        </div>
        <div className="m-10 p-6 bg-blue-100 drop-shadow-2xl rounded-lg shadow-gray-1000">
          <div className="text-2xl m-2">
            <strong>Diagnosis Done</strong>
          </div>
          {medicalDetails.diagnosis}
        </div>
      </div>
    </div>
  );
}

export default medicalDetails;

export async function getStaticProps(context) {
  try {
    const response = await axios.post(
      "https://basal-care.vercel.app/api/getTreatmentDetails",
      {
        id: context.params.id,
      }
    );
    const data = response.data;
    return {
      props: { data },
    };
  } catch (e) {
    console.log(e);
    return {
      props: { message: "failed" },
    };
  }
}
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: true,
  };
}
