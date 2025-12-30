import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-[35vh] bg-secondary">
      <div className="px-5 m-auto  h-full grid grid-cols-3 items-center text-center">
        <div className="">
          <h2 className="text-2xl text-primary font-bold">Logo</h2>
        </div>
        <div className="text-center">
          <h2 className="text-2xl text-primary font-bold mb-6">
            Terms of Service
          </h2>
          <ul>
            <li className="text-[15px] font-extrabold text-[#2a0c62a4] mb-1 hover:text-[#2a0c62] transition cursor-pointer">
              <a href="#">Terms and Conditions</a>
            </li>
            <li className="text-[15px] font-extrabold text-[#2a0c62a4] mb-1 hover:text-[#2a0c62] transition cursor-pointer">
              <a href="#">Refund policy</a>
            </li>
            <li className="text-[15px] font-extrabold text-[#2a0c62a4] mb-1 hover:text-[#2a0c62] transition cursor-pointer">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="">
          <a href="#home">Back to Top </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
