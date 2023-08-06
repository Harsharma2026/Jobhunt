import React from "react";
import coding from "./Images/Dev.png";
import jee from "./Images/JEE.png";
import neet from "./Images/neet.png";
import upsc from "./Images/UPSC.png";
import gate from "./Images/GATE.png";
import cp from "./Images/CP.png";

export default function Options() {
  return (
    <div className="bg-blue-400 rounded-3xl pb-20 mb-10 pt-8 relative -top-10">
      <h2 className="ml-20 pl-10 relative font-extrabold text-white top-9">
        FIELD OF INTEREST
      </h2>
      <div className="relative left-1/2 -translate-x-1/2 bg-blue-400 w-5/6 flex flex-wrap p-2 mt-20">
        <div className="flex-grow m-2 basis-1/4 h-72 rounded-md cursor-pointer hover:scale-105 transition-all">
          <img
            src={coding}
            alt="Coding"
            className="w-72 relative left-1/2 -translate-x-1/2 rounded-md"
          />
        </div>
        <div className="flex-grow  m-2 basis-1/4 h-72 rounded-md cursor-pointer hover:scale-105 transition-all">
          <img
            src={jee}
            alt="jee"
            className="w-72 relative left-1/2 -translate-x-1/2 rounded-md"
          />
        </div>
        <div className="flex-grow  m-2 basis-1/4 h-72 rounded-md cursor-pointer hover:scale-105 transition-all">
          <img
            src={neet}
            alt="neet"
            className="w-72 relative left-1/2 -translate-x-1/2 rounded-md"
          />
        </div>
        <div className="flex-grow  m-2 basis-1/4 h-72 rounded-md cursor-pointer hover:scale-105 transition-all">
          <img
            src={upsc}
            alt="Coding"
            className="w-72 relative left-1/2 -translate-x-1/2 rounded-md"
          />
        </div>
        <div className="flex-grow m-2 basis-1/4 h-72 rounded-md cursor-pointer hover:scale-105 transition-all">
          <img
            src={gate}
            alt="Coding"
            className="w-72 relative left-1/2 -translate-x-1/2 rounded-md"
          />
        </div>
        <div className="flex-grow  m-2 basis-1/4 h-72 rounded-md cursor-pointer hover:scale-105 transition-all">
          <img
            src={cp}
            alt="Coding"
            className="w-72 relative left-1/2 -translate-x-1/2 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
