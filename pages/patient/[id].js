import React, { useState, useEffect } from "react";
import axios from "axios";
import BasicDetails from "../../components/User/BasicDetails";
import { useRouter } from "next/router";
import { useAuth } from "../../components/context/AuthContext";

function Patient(props) {
  const [userDetails, setUserDetails] = useState("");
  const [userTreatments, setUserTreatments] = useState("");
  const [isHospital, setIsHospital] = useState(false);
  const { currentUser } = useAuth();
  const router = useRouter();
  const checkHospital = async () => {
    if (currentUser) {
      const response = await axios.post("/api/checkHospital", {
        id: currentUser.email,
      });
      setIsHospital(response.data.user);
    }
  };
  useEffect(() => {
    if (props.data && props.data.userDetails[0]) {
      setUserDetails(props.data.userDetails[0]);
      setUserTreatments(props.treatmentDetails);
      checkHospital();
    }
  }, []);

  return (
    <div className="bg-gray-100">
      {userDetails ? (
        <div className="flex">
          <div className="w-1/4 border-solid mx-1 ">
            <BasicDetails
              name={userDetails.name}
              dob={userDetails.DOB.substring(0, 10)}
              gender={userDetails.gender}
              age="22"
              blood={userDetails.bloodGroup}
              contact={userDetails.contact}
              id={userDetails.patientId}
              emergencyContact={userDetails.emergencyContact}
            />
          </div>
          {isHospital ? (
            <div className="grid w-3/4 border-solid gap-2">
              <div className="grid grid-rows-3 gap-2">
                <div className="row-span-3 col-span-2 border-solid overflow-y-auto h-128">
                  <div className="p-4 pl-8 text-[#023E8A] text-2xl">
                    <strong>Previous Details:</strong>
                  </div>
                  {userTreatments
                    ? userTreatments.map((treatment) => {
                        return (
                          <div
                            className="flex flex-col flex-relative mx-6 my-4 bg-blue-100 p-6 rounded"
                            key={treatment._id}
                          >
                            <strong>
                              Hospital Name : {treatment.hospitalName}
                            </strong>
                            <strong>Location : {treatment.location}</strong>
                            {treatment.problem}
                            <div className="my-2 py-2">
                              <button
                                className="h-12 p-2 rounded-lg text-gray-800 w-48 border-2 bg-blue-300 hover:bg-blue-400 hover:text-gray-800"
                                onClick={() =>
                                  router.push(
                                    `/patient/medicalDetails/${treatment.treatmentId}`
                                  )
                                }
                              >
                                Show Details
                              </button>
                            </div>
                          </div>
                        );
                      })
                    : ""}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center ml-96">
              <div className="mb-10 text-lg">
                Login with Hospital Id to view full details
              </div>
              <img
                src="https://png.pngtree.com/png-vector/20191024/ourlarge/pngtree-lock-line-icon-vector-png-image_1859174.jpg"
                className="w-40"
              ></img>
            </div>
          )}
        </div>
      ) : (
        <div className="h-screen text-4xl font-bold flex justify-center items-center">
          Page Not Found
        </div>
      )}
    </div>
  );
}

export default Patient;

export async function getStaticProps(context) {
  try {
    const response = await axios.post(
      "https://basal-care.vercel.app/api/getUserDetails",
      {
        email: "invalid",
        id: context.params.id,
      }
    );
    const data = response.data;
    const userTreatments = [];
    const treatmentIds = [];
    const getTreatmentDetails = async () => {
      const treatmentIdArray = data.userDetails[0].treatmentId;
      for (var i = 0; i < treatmentIdArray.length; i++) {
        const response = await axios.post(
          "https://basal-care.vercel.app/api/getTreatmentDetails",
          {
            id: treatmentIdArray[i],
          }
        );
        var present = false;
        for (var j = 0; j < treatmentIds.length; j++) {
          if (treatmentIds[j] === treatmentIdArray[i]) {
            present = true;
            break;
          }
        }
        if (!present) {
          userTreatments.push(response.data.treatmentDetails[0]);
          treatmentIds.push(treatmentIdArray[i]);
        }
      }
    };
    await getTreatmentDetails();
    return {
      props: { data: data, treatmentDetails: userTreatments },
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
    paths: [{ params: { id: "2213" } }],
    fallback: true,
  };
}
