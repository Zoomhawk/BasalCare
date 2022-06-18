import React from "react";

function profile() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 content-evenly">
        <div className="p-6 flex justify-center items-center">
          <div className="w-4/5 shadow-lg rounded overflow-hidden">
            <img
              src="https://pbs.twimg.com/media/FSvrIgAWAAQwIGi?format=jpg&name=small"
              alt="User Image"
              className="rounded-md"
            />
            <div className="p-5">
              <h2 className="font-bold text-center text-2xl mb-2">Name</h2>
              <h5 className="text-center text-lg">Age</h5>
            </div>
          </div>
        </div>
        <div className="col-span-2 p-6 mt-2 mr-10">
          <div className="w-full shadow-lg rounded overflow-hidden">
            <div className="grid grid-cols-1 divide-y">
              <div className="px-2 py-5">Full Name</div>
              <div className="px-2 py-5">Date of Birth</div>
              <div className="px-2 py-5">Blood Group</div>
              <div className="px-2 py-5">Contact Number</div>
              <div className="px-2 py-5">Emergency Contact Number</div>
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

export default profile;
