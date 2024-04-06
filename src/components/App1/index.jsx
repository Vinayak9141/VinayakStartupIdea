// Dashboard.js
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const App1 = () => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="w-auto mx-auto mt-[-40px] mb-[10px] text-center ml-[1270px]">
      {/* Clickable text */}
      <p
        className="text-blue-500 cursor-pointer w-auto sm:pt-10"
        onClick={() => setShowOptions(!showOptions)}
      >
        <img src="images/img_user_red_600_32x32.svg" alt="" className="h-8 " />
      </p>

      {/* Options */}
      {showOptions && (
        <div className="mt-4 ml-[-200px]">
          <div
            className="option bg-gray-200 py-2 px-4 rounded-full block m-2 cursor-pointer w-[250px] hover:bg-red-600"
            onClick={() => navigate("/account")}
          >
            <img
              src="images/img_user_gray_50.svg"
              alt=""
              className="h-8 w-8 inline-block"
            />
            Manage My Account
          </div>
          <div
            className="option bg-gray-200 py-2 px-4 rounded-full block m-2 cursor-pointer w-[250px] hover:bg-red-600"
            onClick={() => navigate("/myorder")}
          >
            <img
              src="images/img_bag.svg"
              alt=""
              className="h-8 w-8 inline-block"
            />{" "}
            My Order
          </div>
          <div className="option bg-gray-200 py-2 px-4 rounded-full block m-2 cursor-pointer w-[250px] hover:bg-red-600">
            <img
              src="images/img_iconcancel.svg"
              alt=""
              className="h-8 w-8 inline-block"
            />
            My Cancellations
          </div>
          <div className="option bg-gray-200 py-2 px-4 rounded-full block m-2 cursor-pointer w-[250px] hover:bg-red-600">
            <img
              src="images/img_signal_gray_50.svg"
              alt=""
              className="h-8 w-8 inline-block"
            />
            My Reviews
          </div>

          <div className="option bg-gray-200 py-2 px-4 rounded-full block m-2 cursor-pointer w-[250px] hover:bg-red-600">
            <img
              src="images/img_trophy.svg"
              alt=""
              className="h-8 w-8 inline-block"
            />
            Logout
          </div>
        </div>
        // <div className="mt-4">
        //   <div className="option bg-gray-200 py-2 px-4 rounded-full block m-2 cursor-pointer w-[200px]">
        //     Option 1
        //   </div>
        //   <div className="option bg-gray-200 py-2 px-4 rounded-full block m-2 cursor-pointer w-[200px]">
        //     Option 2
        //   </div>
        //   <div className="option bg-gray-200 py-2 px-4 rounded-full block m-2 cursor-pointer w-[200px]">
        //     Option 3
        //   </div>
        // </div>
      )}
    </div>
  );
};

export default App1;
