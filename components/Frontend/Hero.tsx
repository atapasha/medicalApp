"use client";

import React, { useState } from "react";
import SearchBox from "./SearchBar";
import SearchBar from "./SearchBar";
import TransitionalText from "./TransitionalText";
import { Pill } from "lucide-react";
const Hero = () => {
  const TEXTS = ["Acupunctu re", "Message", "Dental", "Cosmetic", "Dietitian"];

  return (
    <>
      <div className="bg-blue-950 w-full ">
        <div className="relative     pb-[110px] pt-[120px] dark:bg-dark lg:pt-[50px] mx-w-6xl mx-auto ">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 lg:w-5/12">
                <div className="hero-content ml-12">
                  <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-blue-50 dark:text-white sm:text-[42px] lg:text-[40px] xl:text-4xl">
                    <span> Book Your </span>
                    <span className="text-blue-500">
                      <TransitionalText TEXTS={TEXTS} />
                    </span>
                    <br />
                    <span>session now</span>
                  </h1>
                  <p className="mb-8 max-w-[480px] text-base text-gray-50 dark:text-dark-6">
                    With TailGrids, business and students thrive together.
                    Business can perfectly match their staffing to changing
                    demand throughout the dayed.
                  </p>
                  {/* SEARCH BAR HERE */}
                  <SearchBar />
                  {/* City Buttons */}
                  <ul className="flex flex-wrap items-center mt-6">
                    <li>
                      <a
                        href="/#"
                        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                      >
                        Need doctor Urgently
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-gray-50   hover:text-primary rounded-md ml-[21px] dark:text-white"
                      >
                        <span className="mr-2">
                          <Pill className="flex-shrink-0 h-4 w-4 text-blue-600" />
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="12"
                              cy="12.6152"
                              r="12"
                              fill="#3758F9"
                            />
                            <rect
                              x="7.99893"
                              y="14.979"
                              width="8.18182"
                              height="1.63636"
                              fill="white"
                            />
                            <rect
                              x="11.2717"
                              y="7.61523"
                              width="1.63636"
                              height="4.09091"
                              fill="white"
                            />
                            <path
                              d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                        Need a Refill
                      </a>
                    </li>
                  </ul>
                
<div className="py-4  pt-8 flex gap-4">
 
 
<div className="flex flex-col items-center justify-center">

<span className="font-bold text-gray-50">600
   
    
</span>

<span className="text-sm text-gray-300">
Active specialist
   </span>
</div>

<div className="flex flex-col items-center justify-center">

<span className="font-bold text-gray-50">1800
   
 
</span>
<span className="text-sm text-gray-300">
Active patients
   </span>

</div>
                  </div>
                </div>
              </div>
              <div className="hidden px-4 lg:block lg:w-1/12"></div>
              <div className="w-full px-4 lg:w-5/12">
                <div className="lg:ml-auto lg:text-right">
                  <div className="relative z-10 inline-block pt-11 lg:pt-0">
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                      alt="hero"
                      className="max-w-full lg:ml-auto"
                    />
                    <span className="absolute -bottom-8 -left-8 z-[-1]">
                      <svg
                        width="93"
                        height="93"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

const SingleImage = ({ href, imgSrc }: { href: string; imgSrc: string }) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="h-10 w-full" />
      </a>
    </>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`absolute left-0 top-0 z-20 flex w-full items-center`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                alt="logo"
                className="w-full dark:hidden"
              />
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                className="w-full hidden dark:block"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/#">Home</ListItem>
                  <ListItem NavLink="/#">Payment</ListItem>
                  <ListItem NavLink="/#">About</ListItem>
                  <ListItem NavLink="/#">Blog</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="/#"
                className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
              >
                Sign in
              </a>

              <a
                href="/#"
                className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
