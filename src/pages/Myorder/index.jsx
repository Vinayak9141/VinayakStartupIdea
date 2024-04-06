import React from "react";
//import { Helmet } from "react-helmet";
import img2 from "./navigate.png";
import { Text, Img, Button } from "components";
import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import Footer from "components/Footer";
import SignUpHeader from "components/SignUpHeader";

//import Header from "../../components/Header";

export default function MyorderPage() {
  return (
    <>
      <ECommerceHomePageTopheader className="bg-black-900 flex flex-col items-end justify-start p-3 w-full" />
      <SignUpHeader
        className="flex md:flex-row sm:flex-col flex-row font-inter md:gap-10 gap-[130px] items-center justify-between max-w-[1170px] mt-10 mx-auto md:px-5 w-full"
        exclusive="Startup Idea"
        hometext="Home"
        abouttext="About"
        cartimage="images/img_cart1.svg"
        userimage="images/img_user_black_900.svg"
      />
      <Img className="h-px mt-4" src="images/img_line3.svg" alt="lineThree" />
      <div className="flex flex-col w-full gap-[87px] md:gap-[65px] sm:gap-[43px] bg-white-A700 sm:pb-20">
        {/* <Header /> */}
        <div className="w-full mx-auto md:p-5 max-w-[1171px]">
          <div className="flex flex-col items-start gap-[60px] sm:gap-[30px]">
            <div className="flex">
              <Text
                size="s"
                as="p"
                className="self-end !text-black-900_01 pt-10"
              >
                My Orders
              </Text>
            </div>
            <div className="flex self-stretch justify-between items-center gap-5">
              <Text
                size="xl"
                as="p"
                className="self-end mb-0.5 !text-black-900_01 tracking-[1.44px] !font-inter"
              >
                Buy Again
              </Text>
              <Button className="flex items-center justify-center h-[56px] px-[35px] sm:px-5 text-gray-50 text-center text-base font-medium bg-red-600 min-w-[159px] rounded">
                View All
              </Button>
            </div>
            <div className="flex md:flex-col self-stretch justify-center items-center gap-6 p-[27px] sm:p-5 bg-gray-100 rounded">
              <div className="w-auto p-[35px] my-[7px] md:p-5 bg-white-A700">
                <Img
                  src="https://s3-alpha-sig.figma.com/img/e7bd/d116/62ea1dfc2d615a5bb054e139a764f306?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cva0uCuODscUasAv4DhPdF1IZADL4~5BVbBFjbf34SKUAQa7P~IkrsV0NJPsiFd63ux3w47wHvzK495pVQnoFOpAVT6qfTmoL4JnKu99lwL2egEguCDbWTtcpRtD5LqENDJ4jHAO2xooh~ArD1~N-mHU1fxHSYtGGgqv7ImSBx~2-ytzjF5vMOo7bO4c7-bwkhUwHmPa15vwZOsK4GcOhHLTp-QuDFKXmv8Bplg3yrY92W5MrJikz9DmwUg3v-eEf3Cj7KmGK9Y~Avb8JdFnnNrwZ0eIQNd~B7YZbXqR8SaPuCGaYn18PBENNUv714D0i1EKDpnSra2DDdFOXO~skA__"
                  alt="curology_one"
                  className="w-full md:h-auto mt-[5px] mb-1.5 object-cover"
                />
              </div>
              <div className="w-full p-3.5 md:p-5 bg-white-A700">
                <Img
                  src="https://s3-alpha-sig.figma.com/img/974e/7cd5/e875e5396b7c54768307e95a1161323b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IIr0HDRQr1oXmQUR5VdQufghKGvQK-9hOo4ArbGYLU6Z1e39R35qIhtTOTRT7Nhuqw9exSrB~60DTRa5nJfinaR0a8byLcWnAMWsS8zyzSCGmvBfcZT5Z6AjBMWIN2zpxswkluYyYNJjkxEfq2o31d9EnFfd535WldNbMWHCt-8zQo3h0ll0iDWuViziVQIyzOA1WoZAEUssYymf~hJrqk-d4modLTr85oFQeef~m6eWMuUNFJj8pEbWNJjZTbCMSvKxtRS~hXmXCDongld-hWJOGA3PdiJrCTqher6fDdwMHzyXh27MlLvCzo4aPqWYYGLR0PXJP9e4Wj6oFAL0gg__"
                  alt="imageseventyeig"
                  className="w-[175px] object-cover"
                />
              </div>
              <div className="w-full p-[22px] md:p-5 bg-white-A700">
                <Img
                  src="https://s3-alpha-sig.figma.com/img/5089/6a78/e792deac9d3c1441c8305d3ab2ca490d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ivTeVN5LTU0HCOCWa3pN2E879uvXEcfAfFzWASGgPkK4euwKOs1T~uPV0YR2hxm7QO7NGR-PewTiRD8o75ixQcCkpLlt0fdQdD9FYesOzunXUMmGMrz~gK5vp9geyiUqoSj1Pz0gxXjZZFEnMVJ1JXUlDWqhoiZ0kW83qdT7-PiiVmbFj4DzIMWTo6v-Fi2oZneCrLn48rDUpPaa5g2kLjq3Opv9KgVsUG8HyldEMA-WvuVGsilDL~DGi-jOWAF~OT6yZ-AXepAkSzu2iLCmJ0LyTP44ygZfh0FckVayqK1xgc9g6849-ruL6EZv1iQQSwMbIm-d8pzfhJ8wADpldg__"
                  alt="imageseventynin"
                  className="w-[160px] object-cover"
                />
              </div>
              <div className="w-full p-[9px] md:p-5 bg-white-A700">
                <Img
                  src="https://s3-alpha-sig.figma.com/img/108a/df6f/1397b838ed3a1c24ca2dc30bd6d9e332?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=McgAhdybE4o7LSCO9h5i~YSX0C4MM8TmOJPgw5ywArsd6AH3orxI140XKGwAAH4amMqXgIz53ue5FXpql4YeD7G9iairJQ3PUBHTT31E8SZMTiDDI-cUK-NtUMagJaaUS1QvTOSYgjfP51SzR3tq3BHlvXXzfU-4FmbVEWjY7ooiGgZPFpuj233sY94vyOYwzHwML~txaxOIB5z4f1g5abUOAMM0ZcFj4VsDsOTxvu0ImmCcRhHzCMPyAyE7nhuCfU8TdLjh891GNELmYFbHmKEyyGLZAWFnDZV5JBAHLteAUWUibcGHcDgShkDkCPq6-~9XYcNRfhyBU24NOZgMIA__"
                  alt="imageeighty_one"
                  className="w-[186px] object-cover"
                />
              </div>
              <div className="w-full p-[17px] md:p-5 bg-white-A700">
                <Img
                  src="https://s3-alpha-sig.figma.com/img/fc52/997f/f6991a055b776edc55b8a5e64398cb3c?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SjH6hixVJp1ZhG8BLhTlaJa93Cm4ea54o0nWQavcdUbRRiAVcfbvN4Js3dmpcWIgmBW-Kji9LFf5UD8pKu0UUjmxCnlofmfLugUBlGtKr64-cNbyoNqRhLtVUBABBDf~AcB47rnV1kogtUYKqO8UOSOa1U8Fm~3RRzZYM74B~07kde4Saz1zGlA1T8xdbWn1o4be7S6y9BcNgN34usj5jbHCq1Z2lAE-C3VreDjfGSQHQhv3h4LjZKSe-oN6eP2~3-ZpfJrY3b8O6OCSeNlvOR0c7B6WQLZmhyoLId0cTVoL6aOzI37x2k3EoM4zt~N4IGMIW-otFeDH7LPqkMr0cw__"
                  alt="imageeightyone"
                  className="w-[170px] object-cover"
                />
              </div>
            </div>
            <Text size="lg" as="p" className="!text-black-900_01 !font-normal">
              Past two months
            </Text>
            <div className="flex flex-col self-stretch gap-[60px]">
              <div className="flex p-[17px] bg-white-A700 shadow-xs flex-1 cursor-pointer rounded hover:shadow-xs">
                <div className="flex md:flex-col justify-between items-center w-full ml-[5px] gap-5 md:ml-0">
                  <div className="flex sm:flex-col justify-between items-center w-[50%] md:w-full gap-5">
                    <div className="flex justify-center w-[32%] sm:w-full px-5 bg-white-A700 rounded">
                      <Img
                        src="https://s3-alpha-sig.figma.com/img/00f5/7fca/7880638fdd616c3901029a553c53d012?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XWSMhbGZ2BV1f7RS~1N5z6iddLDw61E4inB~O2E3lTVACWdaZ1et2r8d1BgQlovxKdkBFZHrWR4h9PbnJPtpgn0UjfSm~x8pzdEpDWKi8ZUU~ZIqkPMWTYqxCIOQTjXY3Rmr5-3McnpMczlUcgsD67u53TbFYCbvSgV7L-kPustgjPawr8HmBJAOFAbRxgFmaPFdWOUjYRTO7b94HfnsaNXX-CgMrqOrbFv-uI7xpUyfag~c3106gXhzTyCfhOjx3qsNYOwimVkMtTzSmoCRAhS30ha1ibao6-aycmpJXo2tEyj506fEyWuSXxXOwz2gk84Hltbi2enLuhVAPDHBug__"
                        alt="image"
                        className="h-[100px] w-full md:h-auto object-cover"
                      />
                    </div>
                    <div className="flex flex-col self-end items-start mb-[11px] gap-[5px]">
                      {/* <Heading as="h1">icasso Compatible with MacBook</Heading> */}
                      <h1
                        className=" sm:text-xl font-semibold 
  md: text-xl md:font-bold md:text-[22px]
  "
                      >
                        icasso Compatible with MacBook
                      </h1>
                      {/* <Text
                        size="lg"
                        as="p"
                        className="text-black-900_01 font-poppins"
                      >
                        Delivered 21 February
                      </Text> */}
                      <Text
                        size="lg"
                        as="p"
                        className="!text-blue_gray-700 !font-normal"
                      >
                        Delivered 21 February
                      </Text>
                    </div>
                  </div>
                  <p className="h-[46px] w-[46px] md:w-full "></p>
                  {/* <Img
                    src="http://localhost:3001/images/img_oui_arrow_up.svg"
                    alt=""
                    className="h-[46px] w-[46px] md:w-full"
                  /> */}
                  <img
                    src={img2}
                    alt="Noimg"
                    className="h-[46px] w-[46px] md:w-full"
                  />
                </div>
              </div>
              <div className="flex p-[17px] bg-white-A700 shadow-xs flex-1 cursor-pointer rounded hover:shadow-xs">
                <div className="flex md:flex-col justify-between items-center w-full ml-[5px] gap-5 md:ml-0">
                  <div className="flex md:flex-col justify-between items-center w-[70%] md:w-full gap-5">
                    <div className="flex justify-center w-[24%] md:w-full px-[46px] md:px-5 bg-white-A700 rounded">
                      <Img
                        src="https://s3-alpha-sig.figma.com/img/b418/6f6a/5a300832362c7571faa731ec52cc69ba?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JS-kWRf4vv1uePGwa~BSS~nSmM8Wf~~ruqn8CD3PZFKaa5RRWw8do2kzdUeXluT6BRP3E6qdoJs267wg58D0fWvM3jdcw9r49tswfrtqrzE5-Hi4AK5Ot7~jMiF2eF7u73pDCXmE5eBbF5eCqQw3KruUsELnFhbUVnXRasqiI9o4ZJP5GfmCoTFpfepI5uJ1iHg4srDcg54qLHKNpTXPLfWkDSX4j07MEGe28ewlHZxctPicC1kEJz4kK8QHsiYKd1HlV0yfWvL5ALKo2jcDHyYkmeZWshtHC3A5jLTrt0~fwfMfoQR4JEClRQLSuiYCferDriO17a5zBK2lxwa0qw__"
                        alt="imageeightythre"
                        className="h-[100px] w-full md:h-auto object-cover"
                      />
                    </div>
                    <div className="flex flex-col self-end items-start mb-[11px] gap-1.5">
                      {/* <Heading as="h1">icasso Compatible with MacBook</Heading> */}
                      <h1
                        className=" sm:text-xl font-semibold 
  md: text-xl md:font-bold md:text-[22px]
  "
                      >
                        Women Printed Viscose Rayon Flared Kurta  (Multicolor)
                      </h1>
                      {/* <Heading as="h2">
                        Women Printed Viscose Rayon Flared Kurta  (Multicolor)
                      </Heading> */}
                      <Text
                        size="lg"
                        as="p"
                        className="!text-blue_gray-700 !font-normal"
                      >
                        Delivered 1 February
                      </Text>
                    </div>
                  </div>
                  {/* <Img
                    src="http://localhost:3001/images/img_oui_arrow_up.svg"
                    alt="ouiarrowup_one"
                    className="h-[46px] w-[46px] md:w-full"
                  /> */}
                  <img
                    src={img2}
                    alt="Noimg"
                    className="h-[46px] w-[46px] md:w-full"
                  />
                </div>
              </div>

              <div className="flex p-[17px] bg-white-A700 shadow-xs flex-1 cursor-pointer rounded hover:shadow-xs">
                <div className="flex md:flex-col justify-between items-center w-full ml-[5px] gap-5 md:ml-0">
                  <div className="flex md:flex-col justify-between items-center w-[75%] md:w-full gap-5">
                    <div className="flex justify-center w-[22%] md:w-full px-[39px] sm:px-5 bg-white-A700 rounded">
                      <Img
                        src="https://s3-alpha-sig.figma.com/img/c10f/da14/9cc3c60c95a196519a8f55b6073bf3fa?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvAVDzXUgVfrSMjlBsj6kHO8f-tJ3tpMgZkMkBGLjCyooTQVFVtpKQtnXtomhz2HlsHuJAPBXNCh7mjoeSZtlpajJY0B4qNDAijmMFG-NLiOzN45B5ijkd1Y5aJb5DavqH3id-FmvlSX2U0XCWLS0J6xx1dNQ3kfCgUFCK8-l3hM~xuaZW0gdF-xYRZN2rj62IMrgHHYzr5QwgKrhRyqW6iUNuKA2g3G9lrsyhfO~BJdpf8B1ieTJi-uyy2KkQGKS6wF2kkk11861Pg-YFfAJjB3m3jGloOHDsFKTZUT5xbWIiQ7R2SioY9lGUutjdO9WjCFv4X65vsuWzlw6qpfpA__"
                        alt="imageeightyfour"
                        className="w-[100px] object-cover"
                      />
                    </div>
                    <div className="flex flex-col self-end items-start mb-[11px] gap-1.5">
                      <h1
                        className=" sm:text-xl font-semibold 
  md: text-xl md:font-bold md:text-[22px]
  "
                      >
                        Lava Blaze 5G (Glass Green, 4GB RAM, UFS 2.2 128GB
                        Storage)
                      </h1>

                      {/* <Heading as="h3">
                        Lava Blaze 5G (Glass Green, 4GB RAM, UFS 2.2 128GB
                        Storage) 
                      </Heading> */}
                      <Text
                        size="lg"
                        as="p"
                        className="!text-blue_gray-700 !font-normal"
                      >
                        Delivered 31 January
                      </Text>
                    </div>
                  </div>
                  {/* <Img
                    src="http://localhost:3001/images/img_oui_arrow_up.svg"
                    alt="ouiarrowup_one"
                    className="h-[46px] w-[46px] md:w-full"
                  /> */}
                  <img
                    src={img2}
                    alt="Noimg"
                    className="h-[46px] w-[46px] md:w-full"
                  />
                </div>
              </div>

              <div className="flex p-[17px] bg-white-A700 shadow-xs flex-1 cursor-pointer rounded hover:shadow-xs pb-10">
                <div className="flex md:flex-col justify-between items-center w-full ml-[5px] gap-5 md:ml-0">
                  <div className="flex md:flex-col justify-between items-center w-[70%] md:w-full gap-5">
                    <div className="flex justify-center w-[24%] md:w-full px-[46px] md:px-5 bg-white-A700 rounded">
                      <Img
                        src="https://s3-alpha-sig.figma.com/img/f725/07d0/b155ce745252c521cb2427ac9686c9e8?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oqDv2BkYi8JKXLchz27L4M4SPIDxZv5eE56TZHPQo6yy82QF7wVjpCkA-sZSe-qfAtr~8HlPGYkinvIz8GwvLSVtKSB8VO-N53tljTgSkdYxRq7-ahRV9DYKR6o8YYSxl5Cx6gPWrQOpiKVT4zKkYFq5FJ2h66p8NFy8fktg1hP72nb6whSQ4g1dU-etQQS6LHCL4ettxATpppjPlqi5zF98zY2o6fXWDF9Og~A6CoD0VB21~RkkXpWEcUlUuv8V4Ux8vIMOs69OS8oIwePOwVbuYnxmv57dn-ngJQsAism1B05BUgUtRSq6jbuEjdA1SfALDtxM4QqoCIUfD3Q5Mg__"
                        alt="imageeightythre"
                        className="h-[100px] w-full md:h-auto object-cover"
                      />
                    </div>
                    <div className="flex flex-col self-end items-start mb-[11px] gap-1.5">
                      {/* <Heading as="h1">icasso Compatible with MacBook</Heading> */}
                      <h1
                        className=" sm:text-xl font-semibold 
  md: text-xl md:font-bold md:text-[22px]
  "
                      >
                        Women Printed Viscose Rayon Flared Kurta  (Multicolor)
                      </h1>
                      {/* <Heading as="h2">
                        Women Printed Viscose Rayon Flared Kurta  (Multicolor)
                      </Heading> */}
                      <Text
                        size="lg"
                        as="p"
                        className="!text-blue_gray-700 !font-normal"
                      >
                        Delivered 1 February
                      </Text>
                    </div>
                  </div>
                  {/* <Img
                    src="http://localhost:3001/images/img_oui_arrow_up.svg"
                    alt="ouiarrowup_one"
                    className="h-[46px] w-[46px] md:w-full"
                  /> */}
                  <img
                    src={img2}
                    alt="Noimg"
                    className="h-[46px] w-[46px] md:w-full"
                  />
                </div>
              </div>

              <div className="h-[134px] md:w-full md:h-auto flex-1 cursor-pointer relative hover:shadow-xs md:flex-none">
                {/* <Text as="p" className="mt-2.5 mr-[475px] md:mr-0">
                  Become a Seller{" "}
                </Text> */}
                <div className="w-full h-max left-0 bottom-0 right-0 top-0 p-[17px] m-auto bg-white-A700 shadow-xs absolute rounded">
                  <div className="flex md:flex-col justify-between items-center ml-[5px] gap-5 md:ml-0">
                    <div className="flex md:flex-col justify-center items-center w-[84%] md:w-full gap-[35px]">
                      <div className="flex justify-center w-[20%] md:w-full bg-white-A700 rounded">
                        <Img
                          src="https://s3-alpha-sig.figma.com/img/1ded/2467/9e2d59d6b535a462dd1663892499a693?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i5vOsTQZOhyv-eh7F6MlBP2LZLw66jbSJNMlZZlOlIADbVGOhZlaa9bgSfZa0HQnErbnCP-RgENxJZuUxyFREQ4OEre~ZqdNCUgxfx2mQNYU9GtH5IksayCwkiIGGQZr0YqF6w7hXs9VQTTvfjkDw9JN5f6Lhq3gbk746TA04RvII0g1sbU071F6LH1~AZx59~cgqtvIn7wchXEss7pNyVBr4HrHWg4QWqUo~JmLIa-Vrk8XDAqXV6WYu4CJZbk6vUo1n249A7SNyMggK2rFXEjaqiU~53erL2lk3ovHRwE8eQjNWrIwrxJyNMp8sfiTl1i-7UvdLTy5okOlBy-qbw__"
                          alt="imageeightyfive"
                          className="w-[53%] object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-start md:self-stretch gap-2.5 flex-1">
                        <h1
                          className=" sm:text-xl font-semibold 
  md: text-xl md:font-bold md:text-[22px]
  "
                        >
                          intern INT-38C-BK Acoustic Guitar Linden Wood Rosewood
                          Right Hand Orientation  (Black)
                        </h1>
                        {/* <Heading as="h5" className="leading-[26px]">
                          intern INT-38C-BK Acoustic Guitar Linden Wood Rosewood
                          Right Hand Orientation  (Black)
                        </Heading> */}
                        <Text
                          size="lg"
                          as="p"
                          className="!text-blue_gray-700 !font-normal"
                        >
                          Delivered 28 November
                        </Text>
                      </div>
                    </div>
                    {/* <Img
                      src="http://localhost:3001/images/img_oui_arrow_up.svg"
                      alt="ouiarrowup_one"
                      className="h-[46px] w-[46px] md:w-full"
                    /> */}
                    <img
                      src={img2}
                      alt="Noimg"
                      className="h-[46px] w-[46px] md:w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="bg-black-900 flex font-poppins items-center justify-center mt-[139px] md:px-5 w-full" />
    </>
  );
}
