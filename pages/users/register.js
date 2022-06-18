import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { publicRoute } from "../../components/context/ProtectedRoute";
import axios from "axios";

function Register() {
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalId, setHospitalId] = useState("");
  const [managerName, setManagerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [ambulanceService, setAmbulanceService] = useState("");
  const [hospitalCapacity, setHospitalCapacity] = useState();
  const [address, setAddress] = useState("");
  const [hospitalPass, setHospitalPass] = useState("");
  const [hospitalPass2, setHospitalPass2] = useState("");
  const [hospitalEmail, setHospitalEmail] = useState("");
  const [passMatch, setPassMatch] = useState(true);
  const [err, setErr] = useState("");

  const route = useRouter();
  const registerHandler = async () => {
    const response = await axios.post("/api/registerHospital", {
      hospitalName: hospitalName,
      hospitalId: hospitalId,
      managerName: managerName,
      phoneNumber: phoneNumber,
      ambulanceService: ambulanceService,
      address: address,
      hospitalCapacity: hospitalCapacity,
      hospitalPass: hospitalPass,
      hospitalEmail: hospitalEmail,
    });
    if (response.data && response.data.user) {
      route.push("/users/profile");
    } else if (response.data) {
      setErr(response.data.message);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-blue-100">
      <Head>
        <title>Register</title>
      </Head>
      <div className="grid grid-cols-2 h-3/4 w-2/3 rounded-2xl mt-10 mx-auto bg-white pt-10">
        <div className="text-4xl font-bold pb-10 col-span-2 flex justify-center items-center">
          Registration for Hospitals
        </div>
        <div className="pl-36">
          <div className="border-b-2 w-72 pb-2">
            <i className="fas fa-user fa-sm"></i>
            <input
              type="text"
              className="text-sm focus:outline-none pl-5 font-light"
              placeholder="Your Name"
              value={hospitalName}
              onChange={(e) => setHospitalName(e.target.value)}
            />
          </div>
          <div className="border-b-2 w-72 pb-2 mt-7">
            <i className="fas fa-envelope fa-sm"></i>
            <input
              type="text"
              className="text-sm focus:outline-none pl-5 font-light"
              placeholder="Your Email"
              value={hospitalEmail}
              onChange={(e) => setHospitalEmail(e.target.value)}
            />
          </div>
          <div className="border-b-2 w-72 pb-2 mt-7 flex">
            <i className="fas fa-user-lock fa-sm"></i>
            <input
              type="number"
              className="text-sm focus:outline-none pl-5 font-light"
              placeholder="Hospital Capacity"
              value={hospitalCapacity}
              onChange={(e) => setHospitalCapacity(e.target.value)}
            />
          </div>
          <div className="border-b-2 w-72 pb-2 mt-7 flex">
            <i className="fas fa-user-lock fa-sm"></i>
            <input
              type="password"
              className="text-sm focus:outline-none pl-5 font-light"
              placeholder="Password"
              value={hospitalPass}
              onChange={(e) => setHospitalPass(e.target.value)}
            />
          </div>
          <div className="border-b-2 w-72 pb-2 mt-7">
            <i className="fas fa-lock fa-sm"></i>
            <input
              type="password"
              className="text-sm focus:outline-none pl-5 font-light"
              placeholder="Repeat Password"
              value={hospitalPass2}
              onChange={(e) => {
                setHospitalPass2(e.target.value);
                if (hospitalPass != hospitalPass2) setPassMatch(false);
              }}
            />
          </div>
          {passMatch && (
            <div className="text-red-500 text-sm pt-1">
              Password doesn&apos;t match
            </div>
          )}
        </div>
        <div className="pr-36">
          <div className="border-b-2 w-72 pb-2">
            <i className="fas fa-user fa-sm"></i>
            <input
              type="text"
              className="text-sm focus:outline-none pl-5 font-light"
              placeholder="Hospital Id"
              value={hospitalId}
              onChange={(e) => setHospitalId(e.target.value)}
            />
          </div>
          <div className="border-b-2 w-72 pb-2 mt-7">
            <i className="fas fa-envelope fa-sm"></i>
            <input
              type="text"
              className="text-sm focus:outline-none pl-5 font-light"
              placeholder="Manager Name"
              value={managerName}
              onChange={(e) => setManagerName(e.target.value)}
            />
          </div>
          <div className="border-b-2 w-72 pb-2 mt-7 flex">
            <i className="fas fa-user-lock fa-sm"></i>
            <input
              type="number"
              className="text-sm focus:outline-none pl-5 font-light"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="border-b-2 w-72 pb-2 mt-7">
            <i className="fas fa-lock fa-sm"></i>
            <input
              type="text"
              className="text-sm focus:outline-none pl-5 font-light"
              placeholder="Address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div className="border-b-2 w-72 pb-2 mt-7">
            <i className="fas fa-lock fa-sm"></i>
            <input
              type="boolean"
              className="text-sm focus:outline-none pl-5 font-light"
              placeholder="Ambulance Service"
              value={ambulanceService}
              onChange={(e) => {
                setAmbulanceService(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="w-screen">
          {err && <div className="text-red-500 text-sm pt-1">{err}</div>}
          <button
            className="bg-blue-400 text-white h-30 w-6/12 ml-28 mt-7 p-3 rounded-lg cursor-pointer hover:bg-blue-600"
            disabled={hospitalPass !== hospitalPass2}
            onClick={() => {
              const validateEmail = (hospitalEmail) => {
                return String(hospitalEmail)
                  .toLowerCase()
                  .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  );
              };
              if (validateEmail(hospitalEmail)) registerHandler();
              else setPassMatch(true);
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default publicRoute(Register);
