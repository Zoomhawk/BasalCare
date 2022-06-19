import React from "react";
import BasicDetails from "./BasicDetails";

function Home() {
    return (
        <div className="flex">
            <div className="w-1/3 border-solid border-2 h-screen mx-1" >
                <BasicDetails name="Harsh" dob="12-2-2022" gender="male" age="22" blood="A+" contact="99999xx9x9" id="77DDAA" />
            </div>
            <div className="grid w-2/3 h-screen border-solid border-2 gap-2" >
                <div class="grid grid-rows-3 grid-flow-col gap-2">
                    <div class="row-span-3 col-span-2 border-solid border-2">
                        <strong>Previous Details:</strong>
                        <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, delectus voluptates. Impedit sequi numquam, distinctio similique iusto dolorem iste omnis dolores facilis esse aperiam consectetur neque voluptates ullam quisquam ab odit illo. Quibusdam, dolores.
                        </li>
                    </div>
                    <div class="border-solid border-2 ">
                    <strong>Appointment details:</strong>
                        <div className="flex justify-center place-content-start place-items-end">
                            <ul className="text-center">
                                <li>Appointment id:2227DDG</li>
                                <li>Name of patient:Sushant </li>
                                <li>Appointment Date: 12th-july</li>
                                <li>Timing: 6:00pm</li>
                                <li>Age: 50</li>
                                <li>Contact No. : 3949947dd</li>
                            </ul>
                        </div>

                    </div>
                    <div class="row-span-2 border-solid border-2 ">
                    <strong>Reminder:</strong> 
                        <ul className="text-center">
                                <li>Medicine name:Paracetamol</li>
                                <li>Shift:Afternoon </li>
                                <li>Timing: 5:30pm</li>
                                <li>Total pills: 3</li>
                            </ul>
                    </div>
                </div>


            </div>



        </div>


    );


}

export default Home;