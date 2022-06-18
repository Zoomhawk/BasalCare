import React from "react";
import QrCode from "../QrCode";

function BasicDetails(props) {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col mt-10">
          <div className="content-center m-1">
            <QrCode value={props.id} />
          </div>
          <div className="grid grid-cols-2 place-content-start place-items-end text-blue-700 mt-7">
            <div>
              <ul>
                <li>Name :</li>
                <li>Id :</li>
                <li>Date of Birth : </li>
                <li>Gender : </li>
                <li>Age : </li>
                <li>Contact No. :</li>
                <li>Emergency Cnt :</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>{props.name}</li>
                <li>{props.id}</li>
                <li>{props.dob}</li>
                <li>{props.gender}</li>
                <li>{props.age}</li>
                <li>+91 {props.contact}</li>
                <li>+91 {props.emergencyContact}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicDetails;
