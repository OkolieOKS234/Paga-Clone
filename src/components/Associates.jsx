import React from "react";
import AEDC from "../assets/brands/AEDC.png";
import DSTV from "../assets/brands/DSTV.png"
import IE from "../assets/brands/IE.png"
import EKDEDC from "../assets/brands/EKEDC.png"
import KEDCOPREPAID from "../assets/brands/KEDCOPREPAID.png"
import PHED from "../assets/brands/PHED.png"
import JEDCO from "../assets/brands/JEDCO.png"
import SMILE from "../assets/brands/SMILE.png"
import SWIFT from "../assets/brands/SWIFT.png"
import SPECTRANET from "../assets/brands/SPECTRANET.png"
import GOTV from "../assets/brands/GOTV.png"
import NAIRABET from "../assets/brands/NAIRABET.png"
import STARTIMES from "../assets/brands/STARTIMES.png"
import LCC from "../assets/brands/LCC.png"
import METRODIGITAL from "../assets/brands/METRODIGITAL.png"
import MYTV from "../assets/brands/MYTV.png"
import PLAYTV from "../assets/brands/PLAYTV.png"

const Associates = () => {
  return (
    <section className="px-24 py-6">
      <h3 className="associates_header text-3xl w-2/5">
        Pay your bills instantly without opening a Paga account!
      </h3>
      <p className="text-red-500">Select a biller to get started</p>

      {/* brands */}
      <div className="flex flex-wrap gap-1">
      <img src={AEDC} alt="AEDC logo" />
      <img src={DSTV} alt="DSTV logo" />
      <img src={IE} alt="" />
      <img src={EKDEDC} alt="" />
      <img src={KEDCOPREPAID} alt="" />
      <img src={PHED} alt="" />
      <img src={JEDCO} alt="" />
      <img src={SMILE} alt="" />
      <img src={SWIFT} alt="" />
      <img src={SPECTRANET} alt="" />
      <img src={GOTV} alt="" />
      <img src={NAIRABET} alt="" />
      <img src={STARTIMES} alt="" className="ml-12" />
      <img src={LCC} alt="" />
      <img src={METRODIGITAL} alt="" />
      <img src={MYTV} alt="" />
      <img src={PLAYTV} alt="" />
      </div>
      
    </section>
  );
};

export default Associates;
