import React from "react";
import FindAgent1 from '../assets/FindAgent_pic1.png'
import FindAgent2 from '../assets/FindAgent_pic2.png'
import FindAgent3 from '../assets/FindAgent_pic3.png'

const FindAgent = () => {
  return (
    <section className="bg-white pt-6">
      <div className=" agent flex bg-orange-600 w-10/12 rounded-lg ml-12 gap-16 md:gap-2">
        <div className="max-w-sm ml-12 m-auto ">
          <h3 className="text-3xl text-white">Over 27,000 Agents Nationwide!</h3>
          <p className="text-xs text-white py-2 max-w-xs">
            You can also withdraw cash, deposit money to your bank account, pay
            bills, open a Paga account and so much more by visiting a Paga Agent
            near you.
          </p>
          <button className="bg-white py-2 px-2 w-32 text-orange-500 font-semibold mr-4 mt-7">Find Agent</button>
          <button className=" border-white border py-2 px-2 w-44 text-white font-semibold">Become an Agent</button>
          
        </div>
        <div >
          <div className=" agent_pic flex gap-0 ">
          <img src={FindAgent1} alt="find_agent" />
          <img src={FindAgent2} alt="find_agent" className=" self-end" />
          </div>
          <div className="pl-24">
          <img src={FindAgent3} alt="find_agent" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FindAgent;
