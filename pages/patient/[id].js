import React from "react";
import QrCode from "../../components/QrCode";
import axios from "axios";
import BasicDetails from "../../components/User/BasicDetails";
import { Button } from "@chakra-ui/react";

function patient(props) {
  const userDetails = props.data.userDetails[0];
  console.log(userDetails);
  return (
    <div>
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
          <div className="grid w-3/4 border-solid gap-2">
            <div className="grid grid-rows-3 gap-2">
              <div className="row-span-3 col-span-2 border-solid overflow-y-auto h-128">
                <div className="p-4 pl-8 text-[#023E8A] text-2xl">
                  <strong>Previous Details:</strong>
                </div>
                <div className="flex flex-col flex-relative mx-6 my-4 bg-blue-100 p-6 rounded">
                  <strong>Hospital Name : Sant Stephen</strong>
                  <strong>Location:</strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, delectus voluptates. Impedit sequi numquam, distinctio
                  similique iusto dolorem iste omnis dolores facilis esse
                  aperiam consectetur neque voluptates ullam quisquam ab odit
                  illo. Quibusdam, dolores.
                  <div className="my-2 py-2">
                    <Button colorScheme="blue">Show Details</Button>
                  </div>
                </div>
                <div className="flex flex-col flex-relative mx-6 my-4 rounded bg-blue-100 p-6">
                  <strong>Hospital Name : Sant Stephen</strong>
                  <strong>Location:</strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, delectus voluptates. Impedit sequi numquam, distinctio
                  similique iusto dolorem iste omnis dolores facilis esse
                  aperiam consectetur neque voluptates ullam quisquam ab odit
                  illo. Quibusdam, dolores.
                  <div className="my-2 py-2">
                    <Button colorScheme="blue">Show Details</Button>
                  </div>
                </div>
                <div className="flex flex-col flex-relative mx-6 my-4 rounded bg-blue-100 p-6">
                  <strong>Hospital Name : Sant Stephen</strong>
                  <strong>Location:</strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, delectus voluptates. Impedit sequi numquam, distinctio
                  similique iusto dolorem iste omnis dolores facilis esse
                  aperiam consectetur neque voluptates ullam quisquam ab odit
                  illo. Quibusdam, dolores.
                  <div className="my-2 py-2">
                    <Button colorScheme="blue">Show Details</Button>
                  </div>
                </div>
              </div>

              <div className="row-span-2 bg-sky-500 p-6 m-6 rounded text-slate-50 h-64">
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
                  <Button colorScheme="blue">Set Daily Reminder</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default patient;

export async function getStaticProps(context) {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/getUserDetails",
      {
        email: "invalid",
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
    paths: [{ params: { id: "2213" } }],
    fallback: true,
  };
}
