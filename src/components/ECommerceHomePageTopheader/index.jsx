import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const ECommerceHomePageTopheader = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[231px] items-center justify-around mr-[130px] w-auto md:w-full sm:hidden">
          <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-auto sm:w-full">
            <Text
              className="text-gray-50 text-sm w-[492px]"
              size="txtPoppinsRegular14"
            >
              {props?.offer}
            </Text>
            <Text
              className="text-center text-gray-50 text-sm underline w-auto"
              size="txtPoppinsSemiBold14Gray50"
              onClick={() => navigate("/signup")}
            >
              {props?.shopnow}
            </Text>
          </div>
          <div className="flex flex-row gap-[5px] items-center justify-center w-auto">
            <Text
              className="text-gray-50 text-sm w-auto"
              size="txtPoppinsRegular14"
            >
              {props?.language}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_dropdown.svg"
              alt="dropdown"
            />
          </div>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageTopheader.defaultProps = {
  offer: "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
  shopnow: "ShopNow",
  language: "English",
};

export default ECommerceHomePageTopheader;
