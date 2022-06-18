import React from "react";
function basicDetails(props) {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="content-center">
            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" />
          </div>
          <div className="flex justify-center place-content-start place-items-end">
            <ul className="text-center">
              <li>id:{props.id}</li>
              <li>Name:{props.name}</li>
              <li>Date of Birth: {props.dob}</li>
              <li>Gender: {props.gender}</li>
              <li>Age: {props.age}</li>
              <li>Contact No. : {props.contact}</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default basicDetails;
