import logo from "../../../assets/mukila_logo.png";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

import React from "react";
import { useRouter } from "next/router";

export const HeaderComponent = () => {
  const router = useRouter();

  const [nav, setNav] = useState(false);

  return (
    <div
      className={`w-full fixed z-[999] px-10 py-3 bg-primary flex justify-end mq450:flex-col ${
        nav == false ? "" : "mq450:h-full mq450:justify-start"
      }`}
    >
      <div
        className={`${
          nav == true ? "flex-1" : "hidden"
        } transition-all flex-col justify-start`}
      >
        <div onClick={(e) => setNav(false)} className="flex justify-end">
          <FontAwesomeIcon icon={faXmark} className=" text-black h-10 w-10" />
        </div>
        <ul
          className="flex-1 w-full  flex-col items-center justify-around child:mq450:w-fit child:mq450:text-center child:mq450:text-2xl child:p-3 child:ml-4 child:mt-10 child:text-xs child:font-medium child:cursor-pointer child:overflow-hidden
child:relative child:before:absolute child:before:left-0 child:before:w-full child:before:h-[2px] child:before:bg-secondary child:before:content-'' child:before:opacity-0 child:before:transition-all child:before:top-0 child:before:translate-y-[10px] hover:child:before:translate-y-0 hover:child:before:opacity-[1]
child:after:absolute child:after:left-0 child:after:w-full child:after:h-[2px] child:after:bg-secondary child:after:content-'' child:after:opacity-0 child:after:transition-all child:after:bottom-0 child:after:translate-y-[-10px] hover:child:after:translate-y-0 hover:child:after:opacity-[1]"
        >
          <li onClick={(e) => setNav(false)} className="hover:font-semibold">
            <a href="#home">Home</a>
          </li>
          <li onClick={(e) => setNav(false)} className="hover:font-semibold">
            <a href="#project">Projects</a>
          </li>
          <li onClick={(e) => setNav(false)} className="hover:font-semibold">
            <a href="#skills">Skills</a>
          </li>
          <li onClick={(e) => setNav(false)} className="hover:font-semibold">
            <a href="#about">About us</a>
          </li>
          <li className="hover:font-semibold">
            <a>Resume</a>
          </li>
        </ul>
      </div>

      <div
        className={`${
          nav == true ? "hidden" : ""
        } mq450:flex-col mq450:justify-start`}
      >
        <div
          onClick={(e) => setNav(true)}
          className="hidden mq450:flex mq450:justify-end"
        >
          <FontAwesomeIcon icon={faBars} className=" text-black h-10 w-10" />
        </div>

        <ul
          className="mq450:hidden flex mq450:flex-1 mq450:flex-col mq450:items-center mq450:justify-around child:mq450:w-fit child:mq450:text-center child:mq450:text-2xl child:p-3 child:ml-4 child:text-xs child:font-medium child:cursor-pointer child:overflow-hidden

child:relative child:before:absolute child:before:left-0 child:before:w-full child:before:h-[2px] child:before:bg-secondary child:before:content-'' child:before:opacity-0 child:before:transition-all child:before:top-0 child:before:translate-y-[10px] hover:child:before:translate-y-0 hover:child:before:opacity-[1]
child:after:absolute child:after:left-0 child:after:w-full child:after:h-[2px] child:after:bg-secondary child:after:content-'' child:after:opacity-0 child:after:transition-all child:after:bottom-0 child:after:translate-y-[-10px] hover:child:after:translate-y-0 hover:child:after:opacity-[1]"
        >
          <li className="hover:font-semibold">
            <a href="#home">Home</a>
          </li>
          <li className="hover:font-semibold">
            <a href="#project">Projects</a>
          </li>
          <li className="hover:font-semibold">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:font-semibold">
            <a href="#about">About us</a>
          </li>
          <li className="hover:font-semibold">
            <a>Resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
