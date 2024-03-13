import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, CheckBox, Text } from "components";
import ECommerceHomePageColumnwhatareyoulookiOne from "components/ECommerceHomePageColumnwhatareyoulookiOne";
import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import SignUpHeader from "components/SignUpHeader";
import Footer from "components/Footer";

const SERVICETwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex flex-col justify-end w-full">
          <ECommerceHomePageTopheader className="bg-black-900 flex flex-col items-end justify-start p-3 w-full" />
          <SignUpHeader
            className="flex md:flex-row sm:flex-col flex-row font-inter md:gap-10 gap-[60px] items-center justify-between max-w-[1170px] mt-10 mx-auto md:px-5 w-full"
            exclusive="STARTUP IDEA"
            hometext="Home"
            servicestext="Services"
            abouttext="About"
            userimage="images/img_user_red_600_32x32.svg"
            cartimage="images/img_cart1.svg"
          />
          <Img
            className="h-px mt-4"
            src="images/img_line3.svg"
            alt="lineThree"
          />

          <div className="bg-black-900 flex flex-col items-start justify-start sm:ml-5 md:ml-5  ml-[124px]  mr-[65px] mt-10 p-4 md:px-5 w-[87%]  sm:w-[90%] md:w-full">
            <div className="flex sm:flex-col md:flex-row flex-row md:gap-10 items-center justify-between ml-12 md:ml-[0] w-[83%]  md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start">
                <div className="flex flex-row font-poppins gap-6 items-center justify-start w-auto">
                  <Img
                    className="h-[49px] md:h-auto object-cover w-10"
                    src="images/img_1200pxapplegraylogo.png"
                    alt="1200pxapplegray"
                  />
                  <Text
                    className="text-base text-center text-gray-50 w-[126px]"
                    size="txtPoppinsRegular16Gray50"
                  >
                    iPhone 14 Series
                  </Text>
                </div>
                <Text
                  className="leading-[60.00px] text-5xl sm:text-[38px] md:text-[44px] text-gray-50 tracking-[1.92px] w-[74%] sm:w-full"
                  size="txtInterSemiBold48"
                >
                  Up to 10% off Voucher
                </Text>
                <div className="flex flex-row font-poppins gap-2 items-center justify-start md:ml-[0] ml-[3px] w-auto">
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-base text-center text-gray-50 w-auto"
                      size="txtPoppinsMedium16"
                    >
                      Shop Now
                    </Text>
                    <Line className="bg-gray-50 h-px w-full" />
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowright_gray_50.svg"
                    alt="arrowright"
                  />
                </div>
                <Img
                  className="h-3.5 md:ml-[0] ml-[289px] w-[110px]"
                  src="images/img_frame883.svg"
                  alt="frame883"
                />
              </div>
              <Img
                className="h-[352px] md:h-[352px] object-cover"
                src="images/img_heroendframe.png"
                alt="heroendframe"
              />
            </div>
          </div>
          <div className="font-poppins sm:h-[328px] h-[403px] md:h-[564px] max-w-[1202px] mt-[59px] sm:mt-[400px] mx-auto md:px-5 relative w-full">
            <div className="absolute flex flex-col md:gap-10 gap-[60px] inset-x-[0] items-start justify-start max-w-[1170px] mx-auto top-[0] w-full">
              <div className="flex flex-col items-end justify-start w-auto">
                <div className="flex flex-col gap-5 items-start justify-start w-auto">
                  <div className="flex flex-row font-poppins gap-4 items-center justify-start w-auto">
                    <div className="bg-red-600 h-10 rounded w-[16%]"></div>
                    <Text
                      className="text-base text-red-600 w-auto"
                      size="txtPoppinsSemiBold16"
                    >
                      Categories
                    </Text>
                  </div>
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] w-auto"
                    size="txtInterSemiBold36"
                  >
                    Packers & Movers{" "}
                  </Text>
                </div>
              </div>
              <Text
                className="text-black-900 text-sm w-auto"
                size="txtPoppinsSemiBold14Black900"
              >
                (
              </Text>
            </div>
            <div className="absolute bg-white-A700 border border-black-900_7f border-solid bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-4 rounded-[5px] shadow-bs w-full sm:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[13px] ml-3.5 md:ml-[0] w-[74%]  md:w-full ">
                <Img
                  className="h-[211px] sm:h-auto md:mt-0 mt-[13px] object-cover rounded-sm w-[33%] md:w-full"
                  src="images/img_rectangle20.png"
                  alt="rectangleTwenty"
                />
                <Img
                  className="h-6 md:h-auto ml-7 md:ml-[0] md:mt-0 mt-[46px] object-cover w-6"
                  src="images/img_placemarker.png"
                  alt="placemarker"
                />
                <div className="flex flex-col justify-start ml-2.5 md:ml-[0] w-3/5 md:w-full">
                  <Text
                    className="md:ml-[0] ml-[47px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsBold24"
                  >
                    Southern Express Packers And Movers
                  </Text>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] mt-[9px] w-[56%] md:w-full">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtPoppinsMedium20Black900"
                    >
                      Nigadi, Pune
                    </Text>
                    <div className="flex flex-row items-start justify-between mt-0.5 w-full">
                      <Img
                        className="h-6 mt-[5px] w-6"
                        src="images/img_star.svg"
                        alt="star"
                      />
                      <Img
                        className="h-6 mt-[5px] w-6"
                        src="images/img_star.svg"
                        alt="star_One"
                      />
                      <Img
                        className="h-6 mt-[5px] w-6"
                        src="images/img_star.svg"
                        alt="star_Two"
                      />
                      <Img
                        className="h-6 my-0.5 w-6"
                        src="images/img_star.svg"
                        alt="star_Three"
                      />
                      <Img
                        className="h-6 mb-1 w-6"
                        src="images/img_star.svg"
                        alt="star_Four"
                      />
                      <Text
                        className="mb-[5px] text-base text-black-900"
                        size="txtPoppinsSemiBold16Black900"
                      >
                        ( 195 Rating)
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[41px] items-center justify-start mt-[34px] w-[88%] md:w-full">
                    <Input
                      name="groupFiftyOne"
                      placeholder="Show Number"
                      className="font-semibold p-0 placeholder:text-white-A700 text-base text-left w-full"
                      wrapClassName="border border-orange-A200 border-solid rounded-[5px] w-[46%] sm:w-[46%]"
                      type="number"
                      shape="round"
                      color="orange_A200"
                      size="xs"
                      variant="fill"
                    ></Input>
                    <Button
                      className="border border-indigo-A700 border-solid cursor-pointer font-semibold min-w-[204px] rounded-[5px] text-base text-center"
                      shape="round"
                      color="blue_A700"
                      size="md"
                      variant="fill"
                    >
                      Send Enquiry
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CheckBoxes   */}
          <Text
            className="text-xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] ml-10 mt-8 mb-0 w-[200px]"
            size="txtInterSemiBold36"
          >
            Photos{" "}
          </Text>
          <div className="flex flex-col md:gap-10 gap-[86px] items-start justify-start mt-10 ml-36 w-[65%] sm:ml-5 sm:w-auto md:ml-5 md:w-auto">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Img
                className="md:flex-1 h-[211px] sm:h-auto object-cover rounded-sm w-[26%] sm:w-[90%] md:w-full"
                src="images/img_rectangle20.png"
                alt="rectangleTwenty"
              />
              <Img
                className="h-[225px] md:h-auto md:ml-[0] ml-[39px] object-cover w-[225px] sm:w-[90%] md:w-full"
                src="images/img_image74.png"
                alt="imageSeventyFour"
              />
              <Img
                className="h-[238px] m-auto object-cover w-full md:w-full"
                src="images/img_image75.png"
                alt="imageSeventyFive"
              />
              <Img
                className="h-[225px] md:h-auto md:ml-[0] ml-[39px] object-cover w-[225px] sm:w-[90%] md:w-full"
                src="images/img_image76.png"
                alt="imageSeventySix"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-center w-auto md:w-full mt-10">
            <div className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-3 w-3/4 sm:pl-24 md:w-full ">
              <Text
                className="text-xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] ml-0 mb-0 w-full"
                size="txtInterSemiBold36"
              >
                Services{" "}
              </Text>
              <Text
                className="text-xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] ml-0 mb-0 w-full"
                size="txtInterSemiBold36"
              >
                Goods Type{" "}
              </Text>
              <Text
                className="text-xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] ml-0 mb-0 w-full"
                size="txtInterSemiBold36"
              >
                Status{" "}
              </Text>
              <CheckBox
                className="text-base text-left"
                inputClassName="h-6 mr-[5px] w-6"
                name="savethisinforma_One"
                id="savethisinforma_One"
                label="Packers And Movers"
              ></CheckBox>
              <CheckBox
                className="text-base text-left"
                inputClassName="h-6 mr-[5px] w-6"
                name="savethisinforma_One"
                id="savethisinforma_One"
                label="All India

              "
              ></CheckBox>
              <CheckBox
                className="text-base text-left"
                inputClassName="h-6 mr-[5px] w-6"
                name="savethisinforma_One"
                id="savethisinforma_One"
                label="Within City"
              ></CheckBox>
              <CheckBox
                className="text-base text-left"
                inputClassName="h-6 mr-[5px] w-6"
                name="savethisinforma_One"
                id="savethisinforma_One"
                label="Packers And Movers"
              ></CheckBox>
              <CheckBox
                className="text-base text-left"
                inputClassName="h-6 mr-[5px] w-6"
                name="savethisinforma_One"
                id="savethisinforma_One"
                label="All India

              "
              ></CheckBox>
              <CheckBox
                className="text-base text-left"
                inputClassName="h-6 mr-[5px] w-6"
                name="savethisinforma_One"
                id="savethisinforma_One"
                label="Commercial Goods

                "
              ></CheckBox>
              <CheckBox
                className="text-base text-left"
                inputClassName="h-6 mr-[5px] w-6"
                name="savethisinforma_One"
                id="savethisinforma_One"
                label="Household Goods

                "
              ></CheckBox>
              <CheckBox
                className="text-base text-left"
                inputClassName="h-6 mr-[5px] w-6"
                name="savethisinforma_One"
                id="savethisinforma_One"
                label="Industrial Goods



              "
              ></CheckBox>
              <CheckBox
                className="text-base text-left"
                inputClassName="h-6 mr-[5px] w-6"
                name="savethisinforma_One"
                id="savethisinforma_One"
                label="IBA Approved"
              ></CheckBox>
            </div>
          </div>
          <Line className="bg-black-900_75 h-px max-w-[1170px] mt-[30px] mx-auto rotate-[-180deg] w-full sm:w-[90%]" />

          <Text
            className="text-xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] ml-28 mt-8 mb-0 w-auto sm:ml-4  md:ml-4"
            size="txtInterSemiBold36"
          >
            Quick Information{" "}
          </Text>
          <div className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 mt-5  md:grid-cols-3 grid-cols-3 w-3/4    sm:w-[80%] md:w-full">
            <Text
              className="text-base sm:text-[32px] md:text-[34px] text-black-300 tracking-[1.44px] ml-28 sm:leading-10 md:leading-10 sm:ml-5 md:ml-5 mb-0 w-full "
              size="txtInterSemiBold18"
            >
              Mode of Payment: Cash ,Debit{" "}
            </Text>
            <Text
              className="text-base sm:text-[32px] md:text-[34px] text-black-300 tracking-[1.44px] ml-28 sm:leading-10 sm:ml-5 md:leading-10 md:ml-5 mb-0 w-full"
              size="txtInterSemiBold18"
            >
              Year of Establishment : 2009{" "}
            </Text>
            <Text
              className="text-base sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] ml-28 sm:leading-10 sm:ml-5 mb-0 md:leading-10 md:ml-5 w-full md:w-auto"
              size="txtInterSemiBold18"
            >
              Timings : Mon - Sun (Open 24 Hrs){" "}
            </Text>
          </div>

          <Line className="bg-black-900_75 h-px max-w-[1170px] mt-[30px] mx-auto rotate-[-180deg] w-full sm:w-[90%]" />
          <Text
            className="text-xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] ml-28 mt-8 mb-0 w-auto sm:ml-5"
            size="txtInterSemiBold36"
          >
            Rating & Reviews{" "}
          </Text>
          <div className="sm:ml-6 ml-24 mt-4 w-auto">
            <div className="flex flex-row gap-[37px] items-center justify-start w-[92%] md:w-full">
              <Button
                className="border border-blue_gray-100_01 border-solid cursor-pointer font-bold min-w-[91px] rounded-lg md:text-3xl sm:text-[28px] text-[32px] text-center "
                color="orange_A200"
                size="xl"
                variant="fill"
              >
                4.6
              </Button>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtPoppinsBold32"
              >
                195 Ratings
              </Text>
            </div>
            <Text
              className="text-xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] ml-5 mt-8 mb-0 w-auto"
              size="txtInterSemiBold36"
            >
              Rate your Review{" "}
            </Text>
            <div className="absolute flex flex-row gap-[22px] items-center justify-center right-[71%] mt-3  w-5/5 sm:ml-28">
              <Img
                className="h-[19px]"
                src="images/img_signal_orange_a200_19x40.svg"
                alt="signal"
              />
              <Img
                className="h-[19px]"
                src="images/img_signal_orange_a200_19x40.svg"
                alt="signal"
              />
              <Img
                className="h-[19px]"
                src="images/img_signal_orange_a200_19x40.svg"
                alt="signal_One"
              />
              <Img
                className="h-[19px]"
                src="images/img_signal_orange_a200_19x40.svg"
                alt="signal"
              />
              <Img
                className="h-[19px]"
                src="images/img_signal_orange_a200_19x40.svg"
                alt="signal_One"
              />
            </div>
            <Text
              className="text-xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] ml-5 mt-12 mb-0 w-auto"
              size="txtInterSemiBold36"
            >
              User Reviews{" "}
            </Text>

            <div className="flex flex-row gap-[23px] items-end justify-start mt-[50px] w-full">
              <Button
                className="border border-blue_gray-100_01 border-solid cursor-pointer font-bold min-w-[75px] rounded-lg text-4xl sm:text-[32px] md:text-[34px] text-center"
                color="orange_A200"
                size="md"
                variant="fill"
              >
                VR
              </Button>
              <Text
                className="mb-0.5 mt-[13px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtPoppinsBold36"
              >
                Vishal Rajput
              </Text>
            </div>
            <div className="flex flex-row items-start justify-start md:ml-[0] ml-[54px] mt-[26px] w-[48%] md:w-full">
              <Img
                className="h-6 mt-1 w-6"
                src="images/img_star_red_500.svg"
                alt="star_Five"
              />
              <Img
                className="h-6 ml-[13px] mt-1 w-6"
                src="images/img_star_red_500.svg"
                alt="star_Six"
              />
              <Img
                className="h-6 ml-[7px] mt-1 w-6"
                src="images/img_star_red_500.svg"
                alt="star_Seven"
              />
              <Img
                className="h-6 ml-[11px] my-0.5 w-6"
                src="images/img_star_red_500.svg"
                alt="star_Eight"
              />
              <Img
                className="h-6 mb-1 ml-[13px] w-6"
                src="images/img_star_red_500.svg"
                alt="star_Nine"
              />
            </div>
            <div className="flex sm:flex-row font-poppins text-base font-semibold leading-5 tracking-normal text-justify sm:w-[90%] w-[1114px] h-89 top-neg-665 left-12985 md:w-[90%]">
              The furniture was the right fit for our venue, excellent quality,
              sturdy and durable. The customer service was exceptional in all
              aspects, especially when helping to decide on the correct
              furniture and specific measurements for the unique spaces within a
              brand new venue. We were very pleased with the speed of delivery.
            </div>
            <div className="flex flex-row sm:flex-col md:flex-row  sm:gap-0 md:gap-[130px] gap-[200px] items-end justify-start mt-[30px] w-auto ml-28 sm:pr-40 md:ml-0">
              <img
                src="https://media.istockphoto.com/id/1136351242/vector/like-social-media-hand-line-icon-editable-stroke-pixel-perfect-for-mobile-and-web.jpg?s=612x612&w=0&k=20&c=OnKkq5JCHkLvZ1Ck_njtTQMCyLljXsXGNhGqVpwwVUA="
                alt="no"
                className="h-[55px] w-[50px] gap-3 sm:flex-row"
              />

              <Text
                className="mb-0.5 mt-[13px] text-3xl sm:text-[32px] md:text-[34px] text-black-900 ml-[-188px]"
                size="txtPoppinsBold36"
              >
                Helpful
              </Text>
              <img
                src=" https://i.pinimg.com/736x/bc/9b/20/bc9b206f94a8a0421bc32b3c0b17811e.jpg"
                alt="no"
                className="h-[40px] w-[50px] gap-3"
              />
              <Text
                className="mb-0.5 mt-[13px] text-3xl sm:text-[32px] md:text-[34px] text-black-900 ml-[-190px]"
                size="txtPoppinsBold36"
              >
                Comment
              </Text>
              <img
                src="https://static-00.iconduck.com/assets.00/share-icon-2048x1911-60w04qpe.png"
                alt="no"
                className="h-[35px] w-[50px] gap-3"
              />
              <Text
                className="mb-0.5 mt-[13px] text-3xl sm:text-[32px] md:text-[34px] text-black-900 ml-[-190px]"
                size="txtPoppinsBold36"
              >
                Share
              </Text>
            </div>
          </div>

          <div className="font-poppins h-[316px] sm:h-[790px] md:h-[450px] max-w-[1212px] mt-[43px] mx-auto md:px-5 relative sm:w-[90%] md:w-[95%] w-full">
            <div className="absolute bg-white-A700 border border-black-900_7f border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-8 sm:px-5 rounded-[5px] shadow-bs w-full">
              <Text
                className="text-xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] ml-0 mt-0 mb-2 w-full"
                size="txtInterSemiBold36"
              >
                About Us{" "}
              </Text>
              <div className="font-poppins text-lg font-normal leading-5 tracking-normal text-justify">
                Placing India in the league league of developed nations, with
                world class quality & cutting edge technology, Rawat is evolving
                as flag bearers in furniture manufacturing for the innovative
                architects, interior designers, commercial and residential
                projects and the aspiring & experimental young Indians.
                <p className="font-poppins text-lg font-normal leading-5 tracking-normal text-justify">
                  With the capacity to manufacture 20000sq.ft. furniture daily
                  and integration of technology with online customized design
                  software, brand Rawat truly embodies ‘Furniture Engineering’.
                  They are the first and only engineered furniture company in
                  India to integrate advanced Manufacturing technology with user
                  friendly, online and customized design software for customer
                  to make and buy his own furniture.
                  <p className="font-poppins text-lg font-normal leading-5 tracking-normal text-justify">
                    What makes them different from others is our online
                    furniture planning, presentation, pricing and production
                    system which provides unlimited customisation, which is need
                    of the hour. They have named the software ‘Freedom’. It is
                    the first of its kind in India and gives furniture buying a
                    new dimension. Through technology, we can provide perfectly
                    engineered products with beauty, larger variety & better
                    affordability!! Rawat offers single-source solution for all
                    your furniture needs with customization for all as our
                    strength.
                  </p>
                </p>
              </div>
            </div>

            <div className="font-poppins text-lg font-normal leading-4 tracking-normal text-justify">
              Placing India in the league league of developed nations, with
              world class quality & cutting edge technology, Rawat is evolving
              as flag bearers in furniture manufacturing for the innovative
              architects, interior designers, commercial and residential
              projects and the aspiring & experimental young Indians. With the
              capacity to manufacture 20000sq.ft. furniture daily and
              integration of technology with online customized design software,
              brand Rawat truly embodies ‘Furniture Engineering’. They are the
              first and only engineered furniture company in India to integrate
              advanced Manufacturing technology with user friendly, online and
              customized design software for customer to make and buy his own
              furniture. What makes them different from others is our online
              furniture planning, presentation, pricing and production system
              which provides unlimited customisation, which is need of the hour.
              They have named the software ‘Freedom’. It is the first of its
              kind in India and gives furniture buying a new dimension. Through
              technology, we can provide perfectly engineered products with
              beauty, larger variety & better affordability!! Rawat offers
              single-source solution for all your furniture needs with
              customization for all as our strength
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

export default SERVICETwoPage;
