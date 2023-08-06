import React from "react";

export default function Nav() {
  return (
    <div className="flex bg-slate-50 flex-row justify-between fixed top-0 left-0 right-0 md:py-3 sm:py-2 z-50 border">
      <div className="sm:text-lg md:text-xl font-semibold sm:ml-9 md:ml-12">
        Jobhunt
      </div>
      <div className="flex flex-row">
        <div className="sm:text-base md:text-lg font-bold sm:pl-2 sm:pr-2 md:px-4 cursor-pointer hover:scale-110">
          Home
        </div>
        <div className="sm:text-base md:text-lg font-bold sm:pl-2 sm:pr-2 md:px-4 cursor-pointer text-blue-800">
          Learn
        </div>
        <div className="sm:text-base md:text-lg font-bold sm:pl-2 sm:pr-2 md:px-4 cursor-pointer hover:scale-110">
          Mentors
        </div>
        <div className="sm:text-base md:text-lg font-bold sm:pl-2 sm:pr-2 md:px-4 cursor-pointer hover:scale-110">
          Find Jobs
        </div>
        <div className="sm:text-base md:text-lg font-bold sm:pl-2 sm:pr-2 md:px-4 cursor-pointer hover:scale-110">
          Compete
        </div>
      </div>
      <div className="sm:mr-9 md:mr-12">
        <button className="rounded sm:h-7 md:h-8 sm:text-sm md:text-base hover:bg-blue-400 bg-blue-600 text-white sm:py-0.25 md:py-0.5 sm:px-1 md:px-2">
          {" "}
          Get Started{" "}
        </button>
      </div>
    </div>
    // <nav class="bg-white fixed w-full z-20 top-0 left-0  ">
    //   <div class="max-w-screen-xl flex flex-wrap items-center justify-between px-4">
    //     <a href="https://flowbite.com/" class="flex items-center">
    //       <img
    //         src="data:image/jpeg;base64,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"
    //         class="h-8 mr-3"
    //         alt=""
    //       />
    //       <span class="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 ">
    //         JobHunt
    //       </span>
    //     </a>
    //     <div class="flex md:order-2">
    //       <button
    //         type="button"
    //         class="text-white bg-black hover:bg-[#7ED957] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
    //       >
    //         Log In
    //       </button>
    //       <button
    //         data-collapse-toggle="navbar-sticky"
    //         type="button"
    //         class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //         aria-controls="navbar-sticky"
    //         aria-expanded="false"
    //       >
    //         <span class="sr-only">Open main menu</span>
    //         <svg
    //           class="w-6 h-6"
    //           aria-hidden="true"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fill-rule="evenodd"
    //             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //             clip-rule="evenodd"
    //           ></path>
    //         </svg>
    //       </button>
    //     </div>
    //     <div
    //       class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
    //       id="navbar-sticky"
    //     >
    //       <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white   ">
    //         <li>
    //           <a
    //             href="#"
    //             class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-[#7ED957] md:p-0 "
    //             aria-current="page"
    //           >
    //             <img
    //               src="https://img.icons8.com/?size=512&id=43699&format=png"
    //               class="flex h-6"
    //               alt="Home"
    //             />
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7ED957] md:p-0 "
    //           >
    //             Learn
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7ED957] md:p-0 "
    //           >
    //             E-Resources
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7ED957] md:p-0 "
    //           >
    //             Find Jobs
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7ED957] md:p-0 "
    //           >
    //             Compete
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}
