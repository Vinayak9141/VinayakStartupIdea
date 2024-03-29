import React from "react";
import img1 from "./Capture.PNG";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import Footer from "components/Footer";
import SignUpHeader from "components/SignUpHeader";

const LogInPage2 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <ECommerceHomePageTopheader className="bg-black-900 flex flex-col items-end justify-start p-3 w-full" />
          <SignUpHeader
            className="flex md:flex-row sm:flex-col flex-row font-inter md:gap-10 gap-[150px] items-center justify-between max-w-[1170px] mt-[38px] mx-auto md:px-5 w-full"
            exclusive="STARTUP IDEA"
            servicestext="Services"
            abouttext="About"
          />
          <Img
            className="h-px mt-4"
            src="images/img_line3.svg"
            alt="lineThree"
          />
        </div>
        <div className="flex sm:flex-col md:flex-row flex-row md:gap-10 gap-[129px] items-center justify-between max-w-[1335px] mt-[60px] mx-auto md:px-5 w-full">
          <div className="bg-blue_gray-100 flex md:flex-1 flex-col items-center justify-end pt-[75px] rounded-br rounded-tr w-[61%] md:w-full">
            <Img
              className="h-[706px] md:h-auto object-cover rounded-tr w-full"
              src="images/img_dlbeatsnoop1.png"
              alt="dlbeatsnoopOne"
            />
          </div>
          <div className="flex sm:flex-1 flex-col gap-10 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-12 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] w-auto"
                  size="txtInterMedium36"
                >
                  Password Updated Successfully!
                </Text>
                {/* <Text
                  className="text-base text-black-900 w-auto"
                  size="txtPoppinsRegular16"
                >
                  Enter new password
                </Text> */}
              </div>
              <img src={img1} alt="Noimg" className="w-[123.5px] h-100" />
              <div className="flex flex-col gap-10 items-start justify-start w-auto">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  {/* <Text
                    className="text-base text-black-900_7e w-auto"
                    size="txtPoppinsRegular16Black9007e"
                  >
                    Email or Phone Number
                  </Text> */}
                  {/* <input
                    type="text"
                    placeholder="New Password"
                    className="w-[381px] sm:w-[320px]"
                  /> */}
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  {/* <Text
                    className="text-base text-black-900_7e w-auto"
                    size="txtPoppinsRegular16Black9007e"
                  >
                    Password
                  </Text> */}
                  {/* <input
                    type="password"
                    placeholder="Re-New Password"
                    className="w-[381px] sm:w-[320px]"
                  /> */}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[87px] items-center justify-start w-auto sm:w-full">
              <div className="flex flex-col items-start justify-start w-auto"></div>
              {/* <Text
                className="text-base text-red-600 w-auto cursor-pointer"
                size="txtPoppinsRegular16Red600"
                onClick={() => navigate("/login1")}
              >
                Forget Password?
              </Text> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[175px] w-full">
          <Footer className="bg-black-900 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default LogInPage2;
