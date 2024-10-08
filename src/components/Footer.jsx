// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-12">
//       <div className="container mx-auto px-14">
//         {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6"> */}
//         <div className="w-full lg:w-1/3 flex flex-col text-sm md:text-base gap-8 sm:gap-10">
//           <h2 className="text-2xl font-bold mb-4">xotary.</h2>
//           <p className="text-gray-400">
//             Qorem ipsum dolor sit amet, consectetur adipiscing elit aut elit
//             tellus luctus nec ulla corper mattis aulvinar daibus leo.
//           </p>
//           <div className="flex space-x-4 mt-4">
//             <a href="#" className="text-gray-500 hover:text-white">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="#" className="text-gray-500 hover:text-white">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//             <a href="#" className="text-gray-500 hover:text-white">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#" className="text-gray-500 hover:text-white">
//               <i className="fab fa-pinterest-p"></i>
//             </a>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Home</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   Portfolio
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   Blog
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Address</h3>
//             <p className="text-gray-400">
//               33 Road Broklyn Street, <br />
//               600 New York, USA
//             </p>
//             <p className="text-gray-400 mt-4">
//               2972 Westheimer Rd. <br />
//               Santa Ana, Illinois 85486
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact</h3>
//             <p className="text-gray-400">
//               needhelp@company.com <br />
//               +92 (666) 888 0000
//             </p>
//             <p className="text-gray-400 mt-4">
//               youmail@company.com <br />
//               +80 (222) 888 11110
//             </p>
//           </div>
//         </div>
//       </div>
//       <hr />
//       <div className="text-center mt-8">
//         <p className="text-gray-500">
//           Copyright © 2024 Codeefly. All rights reserved.
//         </p>
//       </div>
//       {/* </div> */}
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { CiFacebook, CiTwitter, CiLinkedin, CiYoutube } from "react-icons/ci";
import { Link } from "react-scroll";
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-800 text-white flex flex-col space-y-2 lg:space-y-0 lg:flex-row px-8 md:px-32 lg:px-24 py-20 sm:py-28 gap-8 lg:gap-16">
        <div className="w-full lg:w-1/3 flex flex-col text-sm lg:text-base gap-4 md:gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              A2Z INDUSTRIAL<span className="block">SOLUTIONS.</span>
            </h2>
            <p className="text-gray-400">
              Our strength lies in delivering tailored consulting solutions that
              cater to the unique needs of each client.
            </p>
          </div>
          <div>
            <p className="flex gap-5">
              <a href="">
                <CiFacebook />
              </a>
              <a href="">
                <CiTwitter />
              </a>
              <a href="">
                <CiLinkedin />
              </a>
              <a href="">
                <CiYoutube />
              </a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">Useful Links</h1>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="text-bas">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-base">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-base">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-base">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <p className="text-gray-400">
              Office# 30-F, J-1 Market, <br />
              Wapda Town, Lahore
            </p>
            {/* <p className="text-gray-400 mt-4">
              2972 Westheimer Rd. <br />
              Santa Ana, Illinois 85486
            </p> */}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">
              hello@www.a2zindustrialsolutions.co.uk <br />
              www.a2zindustrialsolutions.co.uk
            </p>
            <p className="text-gray-400 mt-4">
              +92-300-6360580 <br />
              +92-300-0501866
            </p>
          </div>
        </div>
      </footer>
      <div
        className="text-center text-white p-6 sm:p-7 text-sm md:text-base
       bg-slate-900 mb-0"
      >
        Copyright © 2024. All Rights Reserved
      </div>
    </>
  );
}
