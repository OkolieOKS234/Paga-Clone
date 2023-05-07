import React from "react";
import HandsUp from "../assets/icons/1-min 1.png"
import People from "../assets/icons/2-min 1.png"
import trustedIcon from "../assets/icons/3-min 1.png"
const SecondFeatures = () => {
  return (
    <section className=" text-center bg-white">
      <div>
        <button className="bg-orange-500 rounded-lg">Why Paga</button>
        <h3>
          Freedom to do it <span className="text-red-600">your way</span>
        </h3>
      </div>
      <div className="flex gap-12 py-6 items-center justify-center">
{/* First div */}
        <div className="w-48 text-center">
            <div className="text-center self-center w-48 ml-9">
            <img src={HandsUp} alt="Trusted" />
            </div>
        <div className="  w-48 ">
        <p className="text-orange-500">Tested and Trusted</p> 
       <p className="text-xs">Millions of Nigerians trust us with their money. We ensure that money is safe by complying with the highest global security standards.</p>
        </div>
       </div>
      {/* Second Div */}
      <div className="w-48 text-center">
            <div className="text-center self-center w-48 ml-9">
            <img src={People} alt="Trusted" />
            </div>
        <div className="w-48 ">
        <p className="text-orange-500">Tested and Trusted</p> 
       <p className="text-xs">Millions of Nigerians trust us with their money. We ensure that money is safe by complying with the highest global security standards.</p>
        </div>
       </div>
{/* Third Div */}
<div className="w-48 text-center">
            <div className="text-center self-center w-48 ml-9">
            <img src={trustedIcon} alt="Trusted" />
            </div>
        <div className="w-48 ">
        <p className="text-orange-500">Tested and Trusted</p> 
       <p className="text-xs">Millions of Nigerians trust us with their money. We ensure that money is safe by complying with the highest global security standards.</p>
        </div>
       </div>
    


       </div>
    </section>
  );
};

export default SecondFeatures;
