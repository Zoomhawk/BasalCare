// Design of template inspired by https://www.bootdey.com/snippets/view/profile-with-data-and-skills
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../components/context/AuthContext";
import { protectedRoute } from "../../components/context/ProtectedRoute";
import Head from "next/head";
function Profile() {
  const { currentUser } = useAuth();
  const [userDetails, setUserDetails] = useState();
  async function getReminder() {
    let message =
      "Medicine: Paracetamol\n Shift: Afternoon \n Time: 5:30pm \n Total Pills: 3 ";
    let email = currentUser.email;
    let emailData = {
      email,
      message,
    };
    for (let i = 0; i < userDetails.medicine.length; i++) {
      await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify([emailData, userDetails.medicine[i]]),
      }).then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
        }
      });
    }
  }

  useEffect(() => {
    async function getUserDetails() {
      const response = await axios.post("/api/getUserDetails", {
        email: currentUser.email,
      });
      if (response.data.user) return;
      setUserDetails(response.data.userDetails[0]);
    }
    getUserDetails();
  }, []);
  return (
    <div>
      <Head>Profile</Head>
      <div className="grid grid-cols-7 gap-6 content-evenly">
        <div className="p-6 flex col-span-2 justify-center items-center">
          <div className="w-4/5 shadow-lg rounded overflow-hidden">
            <img
              alt="User Image"
              src={currentUser.photoURL}
              className="rounded-md w-full h-full"
            />
            <div className="p-5">
              <h2 className="font-bold text-center text-2xl mb-2">
                {currentUser && currentUser.displayName}
              </h2>
              <h5 className="text-center text-lg">
                Id : {userDetails && userDetails.patientId}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-span-5 grid grid-cols-2 w-full shadow-lg rounded overflow-hidden">
          <div className="pl-6 py-6 mt-2">
            <div className="grid grid-cols-1">
              <div className="px-2 py-3 border-b-2 h-12">Full Name</div>
              <div className="px-2 py-3 border-b-2 h-12">Date of Birth</div>
              <div className="px-2 py-3 border-b-2 h-12">Blood Group</div>
              <div className="px-2 py-3 border-b-2 h-12">Email</div>
              <div className="px-2 py-3 border-b-2 h-12">
                Emergency Contact Number
              </div>
              <div className="px-2 py-3 border-b-2 h-12">Gender</div>
            </div>
          </div>
          <div className="pr-6 py-6 mt-2">
            <div className="grid grid-cols-1">
              <div className="px-2 py-3 border-b-2 h-12">
                {currentUser && currentUser.displayName}
              </div>
              <div className="px-2 py-3 border-b-2 h-12">
                {userDetails && userDetails.DOB.substring(0, 10)}
              </div>
              <div className="px-2 py-3 border-b-2 h-12">
                {userDetails && userDetails.bloodGroup}
              </div>
              <div className="px-2 py-3 border-b-2 h-12">
                {userDetails && userDetails.email}
              </div>
              <div className="px-2 py-3 border-b-2 h-12">
                +91 {userDetails && userDetails.emergencyContact}
              </div>
              <div className="px-2 py-3 border-b-2 h-12">
                {userDetails && userDetails.gender}
              </div>
              <div className="flex m-2 p-2 justify-end items-center">
                <button
                  className="h-12 p-2 rounded-lg text-gray-800 w-48 border-2 bg-blue-300 hover:bg-blue-400 hover:text-gray-800"
                  onClick={(e) => {
                    getReminder();
                  }}
                >
                  Set Daily Reminder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 mx-28">
        <div className="bg-sky-100 p-6 m-6 rounded-lg text-gray-600 h-64">
          <div className="text-center m-2">
            <strong className="text-2xl">Appointment details:</strong>
          </div>
          {userDetails &&
            userDetails.appointments &&
            userDetails.appointments.map((app) => {
              return (
                <div
                  className="grid px-20 grid-cols-2 border-b-2 pb-3 text-lg"
                  key={app.id}
                >
                  <div>
                    <ul>
                      <li>Appointment id : </li>
                      <li>Doctor Name : </li>
                      <li>Appointment Date : </li>
                      <li>Timing : </li>
                      <li>Contact No. : </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>{app.id}</li>
                      <li>{app.name} </li>
                      <li>{app.date.substring(0, 10)}</li>
                      <li>{app.time}</li>
                      <li>{app.contact}</li>
                    </ul>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex flex-col my-7 mx-32">
        <div className="justfiy-center px-20 items-center shadow-lg bg-sky-50 rounded-lg overflow-hidden">
          <h2 className="text-center text-3xl mt-3">Medications</h2>
          {userDetails &&
            userDetails.medicine &&
            userDetails.medicine.map((medicine) => {
              return (
                <div
                  className="grid grid-cols-2 text-lg p-6 border-b-2"
                  key={medicine[0] + medicine[1] + medicine[2]}
                >
                  <div>
                    <ul>
                      <li>Medication Name: </li>
                      <li>Days of Medication : </li>
                      <li>Time: </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>{medicine[0]}</li>
                      <li>{medicine[1]} </li>
                      <li>{medicine[2]}</li>
                    </ul>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default protectedRoute(Profile);
