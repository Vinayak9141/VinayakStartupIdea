import React from "react";
import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Text } from "components";
import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import Footer from "components/Footer";
import SignUpHeader from "components/SignUpHeader";

// const SignUpPage = () => {
//   const navigate = useNavigate();
//   const googleSignIn = useGoogleLogin({
//     onSuccess: (res) => {
//       console.log("res", res);
//       alert("Login successfull. 😍");
//     },
//   });
const SignUpPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      console.log("Sending data to API:", { name, email, password }); // Log data sent to API

      // Make API call
      const response = await axios.post("/api/v1/CreateUserDetails", {
        name,
        email,
        password,
      });

      console.log("API response:", response.data); // Log API response

      // Check if signup was successful
      if (response.status === 200 && response.data && response.data.success) {
        // Navigate to login page if signup is successful
        navigate("/log-in");
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("API request failed:", error);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <ECommerceHomePageTopheader className="bg-black-900 flex flex-col items-end justify-start p-3 w-full" />
          <SignUpHeader
            className="flex md:flex-col flex-row font-inter md:gap-10 gap-[150px] items-center justify-between max-w-[1170px] mt-[38px] mx-auto md:px-5 w-full"
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
        <div className="flex md:flex-col flex-row md:gap-10 gap-[129px] items-center justify-between max-w-[1305px] mt-[60px] mx-auto md:px-5 w-full">
          <div className="bg-blue_gray-100 flex md:flex-1 flex-col items-center justify-end pt-[75px] rounded-br rounded-tr w-[62%] md:w-full">
            <Img
              className="h-[706px] md:h-auto object-cover rounded-tr w-full"
              src="images/img_dlbeatsnoop1.png"
              alt="dlbeatsnoopOne"
            />
          </div>
          <div className="flex sm:flex-1 flex-col gap-12 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-auto">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] w-auto"
                size="txtInterMedium36"
              >
                Create an account
              </Text>
              <Text
                className="text-base text-black-900 w-auto"
                size="txtPoppinsRegular16"
              >
                Enter your details below
              </Text>
            </div>
            <div className="flex flex-col gap-10 items-center justify-start w-auto sm:w-full ">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-10 items-start justify-start w-auto">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    {/* <Text
                      className="text-base text-black-900_7e w-auto"
                      size="txtPoppinsRegular16Black9007e"
                    >
                      Name
                    </Text> */}
                    <input
                      type="text"
                      name="name"
                      placeholder="Email"
                      value={name}
                      onChange={handleNameChange}
                      className="name-input border-t-0 border-l-0 border-r-0 w-[381px] sm:w-[320px]"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    {/* <Text
                      className="text-base text-black-900_7e w-auto"
                      size="txtPoppinsRegular16Black9007e"
                    >
                      Email or Phone Number
                    </Text> */}
                    <input
                      type="email"
                      name="email"
                      placeholder="Email or Phone Number"
                      value={email}
                      onChange={handleEmailChange}
                      className="name-input border-t-0 border-l-0 border-r-0 w-[381px] sm:w-[320px]"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto pb-10">
                    {/* <Text
                      className="text-base text-black-900_7e w-auto"
                      size="txtPoppinsRegular16Black9007e"
                    >
                      Password
                    </Text> */}
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                      className="name-input  border-t-0 border-l-0 border-r-0 w-[381px] sm:w-[320px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <Button
                    className="cursor-pointer font-medium min-w-[371px] sm:min-w-full text-base text-center"
                    shape="round"
                    color="red_600"
                    size="lg"
                    variant="fill"
                  >
                    Create Account
                  </Button>
                  <div className="flex flex-col gap-8 items-center justify-start w-auto sm:w-full">
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[371px] sm:min-w-full"
                      //onClick={() => googleSignIn()}
                      leftIcon={
                        <Img
                          className="h-6 mb-0.5 mr-4"
                          src="images/img_icongoogle.svg"
                          alt="Icon-Google"
                        />
                      }
                      shape="round"
                      color="black_900_66"
                      size="lg"
                      variant="outline"
                    >
                      <div className="text-base text-left">
                        Sign up with Google
                      </div>
                    </Button>
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Text
                        className="text-base text-black-900_99 w-auto"
                        size="txtPoppinsRegular16Black90099"
                      >
                        Already have account?
                      </Text>
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <a className="text-base text-black-900_99 w-auto">
                          <Text
                            className="common-pointer"
                            size="txtPoppinsMedium16Black90099"
                            onClick={() => navigate("/login")}
                          >
                            Log in
                          </Text>
                        </a>
                        <Img
                          className="h-px w-[47px]"
                          src="images/img_underline.svg"
                          alt="underline_Four"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[140px] w-full">
          <Footer className="bg-black-900 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
