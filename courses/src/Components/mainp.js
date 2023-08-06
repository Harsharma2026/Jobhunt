import React from "react";
import topImg from "./Images/learm.png";
import bcgBlob from "./Images/blob.svg";

export default function Intro() {
  return (
    <div className="bg-blue-700 flex flex-row rounded-3xl z-40 justify-between pt-12 pb-20">
      <div className="ml-40 w-1/4">
        <img src={bcgBlob} className="absolute top-2 left-4 h-100" />
        <h1 className="text-bold text-white mt-20 relative">
          Skills, now within you Reach.
        </h1>
        <p className="text-white text-base mt-10 relative">
          Ignite your potential with JobHunt! Unlock a world of free and paid
          courses tailored to fuel your growth. From in-demand skills to
          creative arts, we have what you need to thrive. Embrace the power of
          knowledge and opportunities today.
        </p>
        <button className="mt-10 text-blue-700 bg-white rounded-md px-3 py-2 font-bold hover:scale-105 relative">
          Get a Free Course
        </button>
      </div>
      <img src={topImg} className="w-1/3 mr-40" />
    </div>
  );
}
