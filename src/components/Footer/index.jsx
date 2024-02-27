import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Text } from "components";

const Footer = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[23px] mt-[77px] w-full">
          <div className="sm:flex-col md:flex-col flex-row gap-[30px] grid sm:grid-cols-2 md:grid-cols-5 grid-cols-5  items-start justify-center w-auto md:w-full">
            {/* flex sm:flex-col   flex-row md:gap-10 gap-[87px] items-start justify-center w-auto md:w-full */}
            <div className="flex   flex-col gap-4 items-start justify-start w-auto">
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-50 sm:text-xl tracking-[0.72px]"
                      size="txtInterBold24Gray50"
                    >
                      STARTUP IDEA
                    </Text>
                  </div>
                  <Text
                    className="text-gray-50 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Subscribe
                  </Text>
                </div>
                <Text
                  className="text-base text-gray-50 w-auto"
                  size="txtPoppinsRegular16Gray50"
                >
                  Get 10% off your first order
                </Text>
              </div>
              <Input
                name="sendmail"
                placeholder="Enter your email"
                className="font-poppins p-0 placeholder:text-gray-50_7e text-base text-left w-full sm:w-1/2"
                wrapClassName="flex sm:w-[150px] md:w-[180px] w-[180px]"
                suffix={
                  <Img
                    className="mt-auto mb-px h-6 ml-8"
                    src="images/img_save.svg"
                    alt="save"
                  />
                }
                shape="round"
                color="gray_50"
                size="xs"
                variant="outline"
              ></Input>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto">
              <Text
                className="text-gray-50 text-xl w-auto"
                size="txtPoppinsMedium20"
              >
                Support
              </Text>
              <div className="flex flex-col gap-4 items-start justify-start w-auto common-column-list">
                <Text
                  className="leading-[24.00px] max-w-[175px] md:max-w-full text-base text-gray-50"
                  size="txtPoppinsRegular16Gray50"
                >
                  111 Bijoy sarani, Dhaka,DH 1515, Bangladesh.
                </Text>
                <Text
                  className="text-base text-gray-50 w-auto"
                  size="txtPoppinsRegular16Gray50"
                >
                  excluive@gmail.com
                </Text>
                <Text
                  className="text-base text-gray-50 w-auto"
                  size="txtPoppinsRegular16Gray50"
                >
                  +88015-8888-9999
                </Text>
              </div>
            </div>
            <div className="flex  flex-col gap-6 items-start justify-start w-auto">
              <Text
                className="text-gray-50 text-xl w-auto"
                size="txtPoppinsMedium20"
              >
                Account
              </Text>
              <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                <li>
                  <Text
                    className="text-base text-gray-50"
                    size="txtPoppinsRegular16Gray50"
                    onClick={() => navigate("/account")}
                  >
                    <a href="">My Account</a>
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-50"
                    size="txtPoppinsRegular16Gray50"
                    onClick={() => navigate("/login")}
                  >
                    Login / Register
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-50"
                    size="txtPoppinsRegular16Gray50"
                    onClick={() => navigate("/cart")}
                  >
                    Cart
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-50"
                    size="txtPoppinsRegular16Gray50"
                    onClick={() => navigate("/wishlist")}
                  >
                    Wishlist
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-50"
                    size="txtPoppinsRegular16Gray50"
                  >
                    Shop
                  </Text>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto">
              <Text
                className="text-gray-50 text-xl w-auto"
                size="txtPoppinsMedium20"
              >
                Quick Link
              </Text>
              <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                <li>
                  <Text
                    className="text-base text-gray-50"
                    size="txtPoppinsRegular16Gray50"
                    onClick={() => navigate("/error")}
                  >
                    Privacy Policy
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-50"
                    size="txtPoppinsRegular16Gray50"
                    onClick={() => navigate("/error")}
                  >
                    Terms Of Use
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-50"
                    size="txtPoppinsRegular16Gray50"
                    onClick={() => navigate("/error")}
                  >
                    FAQ
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-50"
                    size="txtPoppinsRegular16Gray50"
                    onClick={() => navigate("/contact")}
                  >
                    Contact
                  </Text>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto">
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Text
                  className="text-gray-50 text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                  Download App
                </Text>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-gray-50_99 text-xs w-auto"
                    size="txtPoppinsMedium12"
                  >
                    Save $3 with App New User Only
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="bg-black-900 flex flex-col h-20 items-center justify-start p-0.5 w-20">
                      <Img
                        className="h-[76px] md:h-auto object-cover w-[76px]"
                        src="images/img_qrcode1.png"
                        alt="qrcodeOne"
                      />
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <div className="bg-black-900_02 h-10 md:h-[30px] p-[3px] relative w-full">
                        <div className="h-[30px] m-auto w-[95%]">
                          <div className="h-[30px] m-auto w-full">
                            <Img
                              className="h-[30px] m-auto object-cover rounded w-[110px]"
                              src="images/img_pngtransparent.png"
                              alt="pngtransparent"
                            />
                            <Img
                              className="absolute bottom-[37%] h-px right-[7%] w-px"
                              src="images/img_vector1.svg"
                              alt="vectorOne"
                            />
                          </div>
                          <Img
                            className="absolute bottom-[30%] h-[3px] right-[7%]"
                            src="images/img_vector2.svg"
                            alt="vectorTwo"
                          />
                        </div>
                        <Img
                          className="absolute bottom-[43%] h-px right-[13%] w-px"
                          src="images/img_vector3.svg"
                          alt="vectorThree"
                        />
                        <Img
                          className="absolute bottom-[38%] h-0.5 right-[9%] w-px"
                          src="images/img_vector4.svg"
                          alt="vectorFour"
                        />
                      </div>
                      <div className="bg-black-900 flex flex-col items-center justify-start p-[3px] w-full">
                        <Img
                          className="h-[34px] md:h-auto object-cover rounded w-[110px]"
                          src="images/img_downloadappstore.png"
                          alt="downloadappstor"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <a href="https://www.facebook.com/" target="_blank">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconfacebook.svg"
                    alt="iconfacebook"
                  />
                </a>

                <a href="https://twitter.com/" target="_blank">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icontwitter.svg"
                    alt="icontwitter"
                  />
                </a>

                <a href="https://www.instagram.com/" target="_blank">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconinstagram.svg"
                    alt="iconinstagram"
                  />
                </a>

                <a href="https://in.linkedin.com/" target="_blank">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                </a>
              </div>
            </div>
          </div>
          <Text
            className="mt-[9px] text-base text-gray-50"
            size="txtPoppinsRegular16Gray50"
            onClick={() => navigate("/servicefour")}
          >
            Become a Seller{" "}
          </Text>
          <div className="flex flex-col gap-4 items-center justify-start mt-[26px] w-auto md:w-full">
            <Img
              className="h-px w-[1440px]"
              src="images/img_underline_white_a700_1x1440.svg"
              alt="underline_Two"
            />
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_iconcopyright.svg"
                  alt="iconcopyright"
                />
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtPoppinsRegular16WhiteA700"
                >
                  Copyright Rimel 2022. All right reserved
                </Text>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
