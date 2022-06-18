import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../components/context/AuthContext";
import { protectedRoute } from "../../components/context/ProtectedRoute";

function profile() {
  const { currentUser } = useAuth();
  const [userDetails, setUserDetails] = useState();

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
              // src="https://pbs.twimg.com/media/FSvrIgAWAAQwIGi?format=jpg&name=small"
              src={currentUser.photoURL}
              alt="User Image"
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
    </div>
  );
}

export default protectedRoute(profile);
