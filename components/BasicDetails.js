import React from "react";


  function BasicDetails(props) {
    return (
      <div>
        <div className="flex justify-center">
          <div className="flex flex-col">
            <div className="content-center m-12">
              <img src="profile.svg" width={250}/>
            </div>
            <div className="flex justify-center place-content-start place-items-end">
              <ul className="text-center m-4 ">
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
  
  export default BasicDetails;