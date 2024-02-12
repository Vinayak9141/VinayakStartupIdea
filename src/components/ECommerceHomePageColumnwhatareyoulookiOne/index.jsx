import React from "react";

import { Img, Text, Input } from "components";

const ECommerceHomePageColumnwhatareyoulookiOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[34px] items-center justify-center w-auto">
          <Text
            className="text-black-900_87 text-xs w-auto"
            size="txtPoppinsRegular10"
          >
            {props?.whatareyoulookiOne}
          </Text>
          {/* <Img className="h-6 w-6" src="images/img_search.svg" alt="search" /> */}
        </div>
      </div>
    </>
  );
};

ECommerceHomePageColumnwhatareyoulookiOne.defaultProps = {
  whatareyoulookiOne: (
    <Input
      name="placeboxinfo"
      placeholder="What are you looking for?"
      className="p-0 placeholder:text-black-900_87 text-base text-left w-full"
      wrapClassName="w-[250px]"
      shape="round"
      color="gray_100"
      size="sm"
      variant="fill"
    ></Input>
  ),
};

export default ECommerceHomePageColumnwhatareyoulookiOne;
