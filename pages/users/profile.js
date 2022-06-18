import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../components/context/AuthContext";
import { protectedRoute } from "../../components/context/ProtectedRoute";
import {Button} from '@chakra-ui/react';
function profile() {
  const { currentUser } = useAuth();
  const [userDetails, setUserDetails] = useState();
  async function getReminder(e)
  {
    let message= 'Medicine: Paracetamol\n Shift: Afternoon \n Time: 5:30pm \n Total Pills: 3 ';
    let email = currentUser.email
    let emailData =
    {
      email,
      message
    }
    fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')

      }
    })
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
      <div className="grid grid-cols-7 gap-6 content-evenly">
        <div className="p-6 flex col-span-2 justify-center items-center">
          <div className="w-4/5 shadow-lg rounded overflow-hidden">
            <img
              // src="https://pbs.twimg.com/media/FSvrIgAWAAQwIGi?format=jpg&name=small"             alt="User Image"
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
              <div className="px-2 py-3 border-b-2">Full Name</div>
              <div className="px-2 py-3 border-b-2">Date of Birth</div>
              <div className="px-2 py-3 border-b-2">Blood Group</div>
              <div className="px-2 py-3 border-b-2">Email</div>
              <div className="px-2 py-3 border-b-2">
                Emergency Contact Number
              </div>
              <div className="px-2 py-3 border-b-2">Gender</div>
            </div>
          </div>
          <div className="pr-6 py-6 mt-2">
            <div className="grid grid-cols-1">
              <div className="px-2 py-3 border-b-2">
                {currentUser && currentUser.displayName}
              </div>
              <div className="px-2 py-3 border-b-2">
                {userDetails && userDetails.DOB.substring(0, 10)}
              </div>
              <div className="px-2 py-3 border-b-2">
                {userDetails && userDetails.bloodGroup}
              </div>
              <div className="px-2 py-3 border-b-2">
                {userDetails && userDetails.email}
              </div>
              <div className="px-2 py-3 border-b-2">
                +91 {userDetails && userDetails.emergencyContact}
              </div>
              <div className="px-2 py-3 border-b-2">
                {userDetails && userDetails.gender}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-col px-20">
        <div className="justfiy-center px-20 items-center shadow-lg rounded overflow-hidden">
          <h2 className="text-center text-3xl">Medications</h2>
          <div className="grid grid-cols-1 divide-y">
            <div className="px-2 py-5">A</div>
            <div className="px-2 py-5">B</div>
            <div className="px-2 py-5">C</div>
          </div>
        </div>
      </div>
    <div className="grid grid-cols-2">
    <div className="bg-sky-500 p-6 m-6 rounded text-slate-50 h-64">
    <div className="text-center m-2">
      <strong>Appointment details:</strong>
    </div>
    <div className="grid grid-cols-2">
      <div>
        <ul>
          <li>Appointment id : </li>
          <li>Name : </li>
          <li>Appointment Date : </li>
          <li>Timing : </li>
          <li>Age : </li>
          <li>Contact No. : </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>2227DDG</li>
          <li>Sushant </li>
          <li>12th-july</li>
          <li>6:00pm</li>
          <li>50</li>
          <li>3949947dd</li>
        </ul>
      </div>
    </div>
  </div>
  <div className=" bg-sky-500 p-6 m-6 rounded text-slate-50 h-64">
    <div className="text-center my-2 ">
      <strong>Reminder</strong>
    </div>
    <div className="grid grid-cols-2">
      <div>
        <ul>
          <li>Medicine name : </li>
          <li>Shift : </li>
          <li>Timing : </li>
          <li>Total pills : </li>
        </ul>
      </div>
      <div>
        <ul>

          <li>Paracetamol</li>
          <li>Afternoon </li>
          <li>5:30pm</li>
          <li>3</li>
        </ul>
      </div>
    </div>
    <div className="flex m-2 p-2 justify-center">
      <Button onClick={(e)=>{getReminder(e)}} colorScheme="blue">Set Daily Reminder</Button>
    </div>
  </div>
  </div>
  </div>
  );
}

export default protectedRoute(profile);
