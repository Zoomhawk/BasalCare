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
            Bertrand Russell. In his youth, he enjoyed four happy years at
            Win
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
    </div>
  );
}
export default index;
