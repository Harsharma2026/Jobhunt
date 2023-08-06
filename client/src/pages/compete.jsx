import React, { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-twilight";


const Compete = () => {
  const [showDashboard, setShowDashboard] = useState(true);
  const [shrinkOutput, setShrinkOutput] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState("{<--Write your code here-->}");

  const toggleDashboard = () => {
    setShowDashboard((prevShowDashboard) => !prevShowDashboard);
    setShrinkOutput((prevShrinkOutput) => !prevShrinkOutput);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };



  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gradient-to-b from-gray-900 to-gray-900 bg-gradient-to-r text-white py-4 px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Hamburger Menu */}
            <button
              className="text-white text-2xl hover:text-gray-200 mr-4"
              onClick={toggleDashboard}
            >
              &#9776;
            </button>
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-400 text-3xl font-serif font-bold">
              Code Editor
            </h1>
          </div>
        </div>
      </header>
      <main className="flex-grow bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <div className="flex h-full">
          {showDashboard && (
            <div className="w-1/6 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white p-4 ">
              <div className="flex justify-between mb-4">
                <h2 className="text-xl font-semibold">Explorer</h2>
              </div>
              {/* Add your code files here */}
              <div className="text-white mb-2">File 1</div>
              <div className="text-white mb-2">File 2</div>
              <div className="text-white mb-2">File 3</div>
            </div>
          )}
          <div
            className={`w-${showDashboard ? "5/6" : "full"} ${
              shrinkOutput ? "w-1/2" : "w-1/2"
            } border-r p-4 transition-all duration-500`}
          >
            <div className="grid grid-cols-2 gap-x-96">
              <div className="grid">
                <h2 className="text-xl font-semibold mb-4 text-white">Code</h2>
              </div>

              <div className="grid relative inline-block w-35 mb-4">
                <div className="relative">
                  <select
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="appearance-none bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none w-full"
                  >
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="c_cpp">C++</option>
                    <option value="swift">Swift</option>
                    <option value="java">Java</option>
                    {/* Add more language options as needed */}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-0 text-white">
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M3 10a2 2 0 012-2h8a2 2 0 012 2 2 2 0 01-2 2H5a2 2 0 01-2-2zm2-2a2 2 0 114 0 2 2 0 01-4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <AceEditor
              mode={selectedLanguage} // Set the language mode (e.g., javascript, python, html, etc.)
              theme="twilight" // Set the editor theme (e.g., github, monokai, xcode, etc.)
              fontSize={14} // Set the font size of the editor (optional)
              showPrintMargin={false} // Hide the print margin indicator (optional)
              value={code} // Pass the code value here. You can use a state variable to store the code.
              onChange={(newCode) => {
                setCode(newCode)
                console.log(code);
                // Handle changes to the code value if needed.
              }}
              editorProps={{ $blockScrolling: true }} // Recommended for performance (optional)
              style={{ width: "100%", height: "94%" }} // Set the dimensions of the editor.
            />
          </div>
          <div className={`w-1/2 p-4 ${shrinkOutput ? "w-1/3" : "w-1/3"}`}>
            <h2 className="text-xl font-semibold mb-4 text-white">Output</h2>
            <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-300 text-white rounded-lg p-4" />
          </div>
        </div>
      </main>
      <footer className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-4 px-8 flex justify-center">
        <button className=" text-white font-semibold py-2 px-4 rounded mr-2">
          <a
            href="#_"
            class="relative px-5 py-3 overflow-hidden font-bold text-black bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
          >
            <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Run
            </span>
          </a>
        </button>
        <button className=" text-white font-semibold py-2 px-4 rounded mr-2">
          <a
            href="#_"
            class="relative px-5 py-3 overflow-hidden font-bold text-black bg-blue-600 border border-gray-100 rounded-lg shadow-inner group"
          >
            <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Submit
            </span>
          </a>
        </button>
        <button className=" text-white font-semibold py-2 px-4 rounded mr-2">
          <a
            href="#_"
            class="relative px-5 py-3 overflow-hidden font-bold text-black bg-red-600 border border-gray-100 rounded-lg shadow-inner group"
          >
            <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Clear
            </span>
          </a>
        </button>
      </footer>
    </div>
  );
};

export default Compete;
