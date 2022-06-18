import React from "react";

function index() {
  return (
    <div>
      <div className="p-8 flex">
        <div className="w-2/5 flex justify-center items-center">
          <img src="card.svg" width={370}></img>
        </div>
        <div className="w-3/5 p-12">
          <div className="text-gray-700 text-2xl mb-6 ">What is BasalCare?</div>
          <div>
            Frank Russell, 2nd Earl Russell (1865-1931), was a British nobleman,
            barrister and politician, the older brother of the philosopher
            Bertrand Russell. In his youth, he enjoyed four happy years at Win
          </div>
        </div>
      </div>
      <div className="p-8 flex">
        <div className="w-3/5 p-12">
          <div className="text-gray-700 text-2xl mb-6 ">So Why BasalCare?</div>
          <div>
            Frank Russell, 2nd Earl Russell (1865-1931), was a British nobleman,
            barrister and politician, the older brother of the philosopher
            Bertrand Russell. In his youth, he enjoyed four happy years at
            Winchester College, but was dismissed from Balliol College, Oxford.
            He married Mabel Scott in 1890, but they soon separated. Unable to
            get an English divorce, in 1900, he became the first celebrity to
            get one in N
          </div>
        </div>
        <div className="w-2/5">
          <img src="home2.svg"></img>
        </div>
      </div>
      <div className="bg-blue-100 m-6 p-4 flex items-center justify-center flex-col rounded w-1/2 mx-auto h-76">
        <div className="text-2xl text-blue-400 m-5">
          Get all your health records in a single go
        </div>
        <div className="flex justify-around w-full">
          <div>
            <form className="flex items-center flex-col">
              <label forHTML="registerId" className="p-3">
                Enter Register Id :{" "}
              </label>
              <input
                type="text"
                id="registerId"
                className="p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
              ></input>
            </form>
          </div>
          <div>
            <img src="register.svg" className="h-44"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default index;
