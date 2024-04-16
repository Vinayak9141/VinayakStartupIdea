import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const App1 = () => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="flex justify-end sm:justify-start items-center mt-[-30px] md:ml-[200px] sm:ml-0  sm:mt-0">
      {/* Clickable text */}
      <p
        className="text-blue-500 cursor-pointer sm:pl-44"
        onClick={() => setShowOptions(!showOptions)}
      >
        <img src="images/img_user_red_600_32x32.svg" alt="" className="h-8" />
      </p>

      {/* Options */}
      {showOptions && (
        <div className="relative z-20 pt-5 mt-4 mx-auto max-w-md rounded-lg ">
          {/* className="absolute sm:static right-[6%] sm:left-auto mt-[200px]  sm:mt-0 sm:ml-2" */}
          {/* <div className="relative z-20 p-0 mt-4 mx-auto max-w-md rounded-lg ">
          className="absolute sm:static right-[6%] sm:left-auto mt-[200px]  sm:mt-0 sm:ml-2" */}
          <div
            className="option bg-gray-200 py-2 px-4  block cursor-pointer w-full sm:w-auto hover:bg-red-600"
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
            className="option bg-gray-200 py-2 px-4  block cursor-pointer w-full sm:w-auto hover:bg-red-600"
            onClick={() => navigate("/myorder")}
          >
            <img
              src="images/img_bag.svg"
              alt=""
              className="h-8 w-8 inline-block"
            />{" "}
            My Order
          </div>
          <div className="option bg-gray-200 py-2 px-4  block cursor-pointer w-full sm:w-auto hover:bg-red-600">
            <img
              src="images/img_iconcancel.svg"
              alt=""
              className="h-8 w-8 inline-block"
            />
            My Cancellations
          </div>
          <div className="option bg-gray-200 py-2 px-4  block cursor-pointer w-full sm:w-auto hover:bg-red-600">
            <img
              src="images/img_signal_gray_50.svg"
              alt=""
              className="h-8 w-8 inline-block"
            />
            My Reviews
          </div>
          <div className="option bg-gray-200 py-2 px-4  block cursor-pointer w-full sm:w-auto hover:bg-red-600">
            <img
              src="images/img_trophy.svg"
              alt=""
              className="h-8 w-8 inline-block"
            />
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default App1;
