import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const ECommerceHomePageCart4 = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 flex flex-col p-3 relative rounded w-full">
          <div className="flex flex-col items-center justify-start mx-auto w-[92%]">
            <div className="flex flex-row items-start justify-between w-full">
              <Button
                className="cursor-pointer font-poppins mb-[50px] min-w-[51px] text-center text-xs"
                shape="round"
                color="gray-100"
                size="sm"
                variant="fill"
              >
                {props?.new}
              </Button>
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Button
                  className="flex h-[34px] items-center justify-center rounded-[50%] w-[34px]"
                  shape="circle"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_wishlist.svg"
                    alt="heartsmall"
                  />
                </Button>
                <Button
                  className="flex h-[34px] items-center justify-center rounded-[50%] w-[34px]"
                  shape="circle"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_quickview.svg"
                    alt="quickview"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mb-auto mt-[-53px] mx-auto p-1.5 w-[71%] z-[1]">
            <Img
              className="h-[180px] md:h-auto object-cover w-full"
              src="images/img_71rdoexxtrl1.png"
              alt="71rdoexxtrlOne"
            />
          </div>
        </div>
        <div className="bg-black-900 flex flex-col items-center justify-start p-2 rounded-bl rounded-br w-full hover:bg-red-600 border hover:border-0 hover:cursor-pointer">
          <Text
            className="text-base text-white-A700"
            size="txtPoppinsMedium16WhiteA700"
            onClick={() => navigate("/cart")}
          >
            {props?.addtocarttext}
          </Text>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsMedium16Black900"
          >
            {props?.breeddrydogfoodOne}
          </Text>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-base text-red-600 w-auto"
                size="txtPoppinsMedium16Red600"
              >
                {props?.pricetext}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
              <div className="flex flex-row items-start justify-start w-auto">
                <Img
                  className="h-5 rounded-[1px] w-5"
                  src="images/img_signal_orange_a200.svg"
                  alt="signal"
                />
                <Img
                  className="h-5 rounded-[1px] w-5"
                  src="images/img_signal_orange_a200.svg"
                  alt="signal_One"
                />
                <Img
                  className="h-5 rounded-[1px] w-5"
                  src="images/img_signal_orange_a200.svg"
                  alt="signal_Two"
                />
                <Img
                  className="h-5 rounded-[1px] w-5"
                  src="images/img_signal_orange_a200.svg"
                  alt="signal_Three"
                />
                <Img
                  className="h-5 w-5"
                  src="images/img_starhalffilled.svg"
                  alt="starhalffilled"
                />
              </div>
              <Text
                className="text-black-900_87 text-sm w-[31px]"
                size="txtPoppinsSemiBold14"
              >
                {props?.fiftyfive}
              </Text>
            </div>
          </div>
          <Img className="h-5 w-12" src="images/img_user.svg" alt="user" />
        </div>
      </div>
    </>
  );
};

ECommerceHomePageCart4.defaultProps = {
  addtocarttext: "Add To Cart",
  breeddrydogfoodOne: "Breed Dry Dog Food",
  pricetext: "$100",
  quantitytext: "(35)",
};

export default ECommerceHomePageCart4;
