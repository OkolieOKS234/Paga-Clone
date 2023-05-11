import React from "react";
import ImageSlider from "react-simple-image-slider";
import MarkEssein from "../assets/slider/Mark_Essein_with_text.png";
import Bizzle from "../assets/slider/Bizzle_with_text.png";
import Ofonime from "../assets/slider/Ofonime_with_text.png";
import Oluwatosin from "../assets/slider/Oluwatosin_with_text.png";
import Slide from "../assets/slider/slide.png"

const CustomerReview = () => {
  const imageDetails = [
    { url: "", text: "" },
    { url: "", text: "" },
  ];
  return (
    <section className="py-12 px-6 bg-white">
      <h3 className="text-3xl font-bold m-auto text-center my-6">Happy <span className="text-orange-500">Customers</span> stories</h3>
      <div className="flex justify-center items-center">
        <img src={Bizzle} alt="" />
      <img src={MarkEssein} alt="" />
      <img src={Oluwatosin} alt="" />
      <img src={Ofonime} alt="" />
      </div>
<img src={Slide} alt="slide button" className="m-auto pt-4 cursor-pointer" />
    </section>
  );
};

export default CustomerReview;
