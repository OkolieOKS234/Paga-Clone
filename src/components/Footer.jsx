import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import LogoImage from "../assets/icons/Paga-logo.png";
import Facebook from "../assets/icons/facebook.png";
import Instagram from "../assets/icons/instagram.png";
import Twitter from "../assets/icons/twitter.png";
import Youtube from "../assets/icons/youtube.png";

const Footer = () => {
  return (
    <footer className="px-12 pt-12">
      <div className=" footer_section flex gap-24">
      <div className="max-w-sm">
        <img src={LogoImage} alt="" />
        <p>
          Paga is a mobile payment company. We are building an ecosystem to
          enable people to digitally send and receive money, and creating simple
          financial access for everyone.
        </p>
        <div className="flex gap-2">
          <img src={Instagram} alt="" />
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
          <img src={Youtube} alt="" />
        </div>
      </div>
      {/* Second */}
      <div>
        <ul>
          <li className="text-orange-500 font-bold">About</li>
          <li>Company</li>
          <li>Careers</li>
          <li>FaQ</li>
          <li>Media Kit</li>
        </ul>
      </div>
      {/* Third */}
      <div>
      <ul>
          <li className="text-orange-500 font-bold">Products</li>
          <li>Personal</li>
          <li>Agent</li>
          <li>Business</li>
          <li>Developer</li>
        </ul>
      </div>
      {/* Fourth */}
      <div>
      <ul>
          <li className="text-orange-500 font-bold">Links</li>
          <li>Donate.ng</li>
          <li>Find an Agent</li>
          <li>Paga Blog</li>
          <li>Pricing</li>
          <li>Remittances</li>
        </ul>
      </div>
      {/* Fifth */}
      <div>
      <ul>
          <li className="text-orange-500 font-bold">Reach us</li>
          <li>service@mypaga.com</li>
          <li>070000007242</li>
          <li>176 Herbert Macaulay Road, Yaba, Lagos, Nigeria</li>
        </ul>
      </div>
      </div>
      <div className=" footer_rights flex justify-between pt-12 pb-2">
        <div>
        <p className="rights_reserved"> © 2022 Paga. All rights reserved</p>
        </div>
        <div>
        <p>Terms of Service | Security</p> 
        </div>
     
      
      </div>
      
    </footer>
  );
};

export default Footer;
