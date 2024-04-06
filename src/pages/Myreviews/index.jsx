import React from "react";
//import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading, RatingBar, Input } from "components";
import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import Footer from "components/Footer";
import SignUpHeader from "components/SignUpHeader";

//import Header from "../../components/Header";

export default function Myreviews() {
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
      <div className="w-full bg-white-A700">
        {/* <Header /> */}
        <div className="flex flex-col w-full mt-20 gap-20 mx-auto md:gap-[60px] md:p-5 sm:gap-10 max-w-[1170px]">
          <div className="flex">
            <Text size="s" as="p" className="!text-black-900_01">
              My Reviews
            </Text>
          </div>
          <div className="gap-[69px] grid-cols-[repeat(auto-fill,_minmax(312px_,_1fr))] grid">
            <div className="flex flex-col w-full p-4 bg-white-A700 shadow-xl">
              <div className="flex flex-col items-center">
                <Img
                  src="https://s3-alpha-sig.figma.com/img/00f5/7fca/7880638fdd616c3901029a553c53d012?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XWSMhbGZ2BV1f7RS~1N5z6iddLDw61E4inB~O2E3lTVACWdaZ1et2r8d1BgQlovxKdkBFZHrWR4h9PbnJPtpgn0UjfSm~x8pzdEpDWKi8ZUU~ZIqkPMWTYqxCIOQTjXY3Rmr5-3McnpMczlUcgsD67u53TbFYCbvSgV7L-kPustgjPawr8HmBJAOFAbRxgFmaPFdWOUjYRTO7b94HfnsaNXX-CgMrqOrbFv-uI7xpUyfag~c3106gXhzTyCfhOjx3qsNYOwimVkMtTzSmoCRAhS30ha1ibao6-aycmpJXo2tEyj506fEyWuSXxXOwz2gk84Hltbi2enLuhVAPDHBug__"
                  alt="image"
                  className="w-[62%] object-cover"
                />
                <Heading
                  as="h1"
                  className="w-[83%]  md:w-full mt-[11px] leading-[26px]"
                >
                  icasso Compatible with MacBook
                </Heading>

                <RatingBar
                  value={1}
                  isEditable={true}
                  size={30}
                  className="flex justify-between mt-[37px]"
                />
                <div className="flex mt-6">
                  {/* <Text
                    as="p"
                    className="flex justify-center items-center h-[50px] pl-4 pr-[35px] py-[13px] sm:pr-5 !text-black-900_87 bg-gray-100 rounded"
                  >
                    Write Reviews
                  </Text> */}
                  <Input
                    name="placeboxinfo"
                    placeholder="Write Reviews"
                    className="p-0 placeholder:text-black-900_87 text-base text-left w-full"
                    wrapClassName="h-[8px],w-[220px]"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex items-center mt-6 gap-3.5">
                  <div className="flex">
                    {/* <Text
                      as="p"
                      className="flex justify-center items-center h-[50px] pl-4 pr-[35px] py-[13px] sm:pr-5 !text-black-900_87 bg-gray-100 rounded"
                    >
                      Upload Video
                    </Text> */}
                    <input type="file" className="pl-28" />
                  </div>
                  {/* <Img
                    src="images/img_teenyicons_attach_solid.svg"
                    alt="upload_video"
                    className="h-[24px] w-[24px]"
                  /> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full p-4 bg-white-A700 shadow-xl">
              <div className="flex flex-col items-center mt-1">
                <Img
                  src="https://s3-alpha-sig.figma.com/img/b418/6f6a/5a300832362c7571faa731ec52cc69ba?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JS-kWRf4vv1uePGwa~BSS~nSmM8Wf~~ruqn8CD3PZFKaa5RRWw8do2kzdUeXluT6BRP3E6qdoJs267wg58D0fWvM3jdcw9r49tswfrtqrzE5-Hi4AK5Ot7~jMiF2eF7u73pDCXmE5eBbF5eCqQw3KruUsELnFhbUVnXRasqiI9o4ZJP5GfmCoTFpfepI5uJ1iHg4srDcg54qLHKNpTXPLfWkDSX4j07MEGe28ewlHZxctPicC1kEJz4kK8QHsiYKd1HlV0yfWvL5ALKo2jcDHyYkmeZWshtHC3A5jLTrt0~fwfMfoQR4JEClRQLSuiYCferDriO17a5zBK2lxwa0qw__"
                  alt="imageeightythre"
                  className="w-[41%] object-cover"
                />
                <Heading
                  as="h2"
                  className="w-[83%] md:w-full mt-6 leading-[26px]"
                >
                  Women Printed Viscose Rayon Flared Kurta  (Multicolor)
                </Heading>
                <RatingBar
                  value={1}
                  isEditable={true}
                  size={30}
                  className="flex justify-between mt-[11px]"
                />
                <div className="flex mt-6">
                  {/* <Text
                    as="p"
                    className="flex justify-center items-center h-[50px] pl-4 pr-[35px] py-[13px] sm:pr-5 !text-black-900_87 bg-gray-100 rounded"
                  >
                    Write Reviews
                  </Text> */}
                  <Input
                    name="placeboxinfo"
                    placeholder="Write Reviews"
                    className="p-0 placeholder:text-black-900_87 text-base text-left w-full"
                    wrapClassName="h-[8px],w-[220px]"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex items-center mt-6 gap-3.5">
                  <div className="flex">
                    {/* <Text
                      as="p"
                      className="flex justify-center items-center h-[50px] pl-4 pr-[35px] py-[13px] sm:pr-5 !text-black-900_87 bg-gray-100 rounded"
                    >
                      Upload Video
                    </Text> */}
                    <input type="file" className="pl-28" />
                  </div>
                  {/* <Img
                    src="images/img_teenyicons_attach_solid.svg"
                    alt="teenyicons_one"
                    className="h-[24px] w-[24px]"
                  /> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full p-4 bg-white-A700 shadow-xl">
              <div className="flex flex-col items-center mt-1.5">
                <Img
                  src="https://s3-alpha-sig.figma.com/img/f725/07d0/b155ce745252c521cb2427ac9686c9e8?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oqDv2BkYi8JKXLchz27L4M4SPIDxZv5eE56TZHPQo6yy82QF7wVjpCkA-sZSe-qfAtr~8HlPGYkinvIz8GwvLSVtKSB8VO-N53tljTgSkdYxRq7-ahRV9DYKR6o8YYSxl5Cx6gPWrQOpiKVT4zKkYFq5FJ2h66p8NFy8fktg1hP72nb6whSQ4g1dU-etQQS6LHCL4ettxATpppjPlqi5zF98zY2o6fXWDF9Og~A6CoD0VB21~RkkXpWEcUlUuv8V4Ux8vIMOs69OS8oIwePOwVbuYnxmv57dn-ngJQsAism1B05BUgUtRSq6jbuEjdA1SfALDtxM4QqoCIUfD3Q5Mg__"
                  alt="imageeightytwo"
                  className="w-[149px] object-cover"
                />
                <Heading
                  as="h3"
                  className="w-[83%] md:w-full mt-4 leading-[26px]"
                >
                  Fire-boltt Ninja Call Pro Max
                </Heading>
                <RatingBar
                  value={1}
                  isEditable={true}
                  size={30}
                  className="flex justify-between mt-[37px]"
                />
                <div className="flex mt-6">
                  {/* <Text
                    as="p"
                    className="flex justify-center items-center h-[50px] pl-4 pr-[35px] py-[13px] sm:pr-5 !text-black-900_87 bg-gray-100 rounded"
                  >
                    Write Reviews
                  </Text> */}
                  <Input
                    name="placeboxinfo"
                    placeholder="Write Reviews"
                    className="p-0 placeholder:text-black-900_87 text-base text-left w-full"
                    wrapClassName="h-[8px],w-[220px]"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
                {/* <VideoUploader></VideoUploader> */}
                <div className="flex items-center mt-6 gap-3.5">
                  <div className="flex">
                    {/* <Text
                      as="p"
                      className="flex justify-center items-center h-[50px] pl-4 pr-[35px] py-[13px] sm:pr-5 !text-black-900_87 bg-gray-100 rounded"
                    >
                      Upload Video
                    </Text> */}
                    <input type="file" className="pl-28" />
                  </div>
                  {/* <Img
                    src="images/img_teenyicons_attach_solid.svg"
                    alt="teenyicons_one"
                    className="h-[24px] w-[24px]"
                  /> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full p-3.5 bg-white-A700 shadow-xl">
              <div className="flex flex-col items-center">
                <Img
                  src="https://s3-alpha-sig.figma.com/img/c10f/da14/9cc3c60c95a196519a8f55b6073bf3fa?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvAVDzXUgVfrSMjlBsj6kHO8f-tJ3tpMgZkMkBGLjCyooTQVFVtpKQtnXtomhz2HlsHuJAPBXNCh7mjoeSZtlpajJY0B4qNDAijmMFG-NLiOzN45B5ijkd1Y5aJb5DavqH3id-FmvlSX2U0XCWLS0J6xx1dNQ3kfCgUFCK8-l3hM~xuaZW0gdF-xYRZN2rj62IMrgHHYzr5QwgKrhRyqW6iUNuKA2g3G9lrsyhfO~BJdpf8B1ieTJi-uyy2KkQGKS6wF2kkk11861Pg-YFfAJjB3m3jGloOHDsFKTZUT5xbWIiQ7R2SioY9lGUutjdO9WjCFv4X65vsuWzlw6qpfpA__"
                  alt="imageeightyfour"
                  className="w-[147px] object-cover"
                />
                <Heading
                  as="h4"
                  className="w-[83%] md:w-full mt-[39px] leading-[26px]"
                >
                  Lava Blaze 5G (Glass Green, 4GB RAM......
                </Heading>
                <RatingBar
                  value={1}
                  isEditable={true}
                  size={30}
                  className="flex justify-between mt-6"
                />
                <div className="flex mt-6">
                  {/* <Text
                    as="p"
                    className="flex justify-center items-center h-[50px] pl-4 pr-[35px] py-[13px] sm:pr-5 !text-black-900_87 bg-gray-100 rounded"
                  >
                    Write Reviews
                  </Text> */}
                  <Input
                    name="placeboxinfo"
                    placeholder="Write Reviews"
                    className="p-0 placeholder:text-black-900_87 text-base text-left w-full"
                    wrapClassName="h-[8px],w-[220px]"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex items-center mt-6 gap-3.5">
                  <div className="flex">
                    {/* <Text
                      as="p"
                      className="flex justify-center items-center h-[50px] pl-4 pr-[35px] py-[13px] sm:pr-5 !text-black-900_87 bg-gray-100 rounded"
                    >
                      Upload Video
                    </Text> */}
                    <input type="file" className="pl-28" />
                  </div>
                  {/* <Img
                    src="images/img_teenyicons_attach_solid.svg"
                    alt="teenyicons_one"
                    className="h-[24px] w-[24px]"
                  /> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full p-4 bg-white-A700 shadow-xl">
              <div className="flex flex-col items-center mt-1.5">
                <Img
                  src="https://s3-alpha-sig.figma.com/img/974e/7cd5/e875e5396b7c54768307e95a1161323b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IIr0HDRQr1oXmQUR5VdQufghKGvQK-9hOo4ArbGYLU6Z1e39R35qIhtTOTRT7Nhuqw9exSrB~60DTRa5nJfinaR0a8byLcWnAMWsS8zyzSCGmvBfcZT5Z6AjBMWIN2zpxswkluYyYNJjkxEfq2o31d9EnFfd535WldNbMWHCt-8zQo3h0ll0iDWuViziVQIyzOA1WoZAEUssYymf~hJrqk-d4modLTr85oFQeef~m6eWMuUNFJj8pEbWNJjZTbCMSvKxtRS~hXmXCDongld-hWJOGA3PdiJrCTqher6fDdwMHzyXh27MlLvCzo4aPqWYYGLR0PXJP9e4Wj6oFAL0gg__"
                  alt="imageseventyeig"
                  className="w-[54%] object-cover"
                />
                <Heading as="h5" className="self-start mt-6">
                  Pentagon Troll Bag
                </Heading>
                <RatingBar
                  value={1}
                  isEditable={true}
                  size={30}
                  className="flex justify-between mt-[45px]"
                />
                <div className="flex mt-6">
                  {/* <Text
                    as="p"
                    className="flex justify-center items-center h-[50px] pl-4 pr-[35px] py-[13px] sm:pr-5 !text-black-900_87 bg-gray-100 rounded"
                  >
                    Write Reviews
                  </Text> */}
                  <Input
                    name="placeboxinfo"
                    placeholder="Write Reviews"
                    className="p-0 placeholder:text-black-900_87 text-base text-left w-full"
                    wrapClassName="h-[8px],w-[220px]"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex items-center mt-6 gap-3.5">
                  <div className="flex">
                    {/* <Text
                      as="p"
                      className="flex justify-center items-center h-[50px] pl-4 pr-[35px] py-[13px] sm:pr-5 !text-black-900_87 bg-gray-100 rounded"
                    >
                      Upload Video
                    </Text> */}
                    <input type="file" className="pl-28" />
                  </div>
                  {/* <Img
                    src="images/img_teenyicons_attach_solid.svg"
                    alt="teenyicons_one"
                    className="h-[24px] w-[24px]"
                  /> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full p-3 bg-white-A700 shadow-xl">
              <div className="flex flex-col items-center mb-1 gap-6">
                <Img
                  src="https://s3-alpha-sig.figma.com/img/1ded/2467/9e2d59d6b535a462dd1663892499a693?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i5vOsTQZOhyv-eh7F6MlBP2LZLw66jbSJNMlZZlOlIADbVGOhZlaa9bgSfZa0HQnErbnCP-RgENxJZuUxyFREQ4OEre~ZqdNCUgxfx2mQNYU9GtH5IksayCwkiIGGQZr0YqF6w7hXs9VQTTvfjkDw9JN5f6Lhq3gbk746TA04RvII0g1sbU071F6LH1~AZx59~cgqtvIn7wchXEss7pNyVBr4HrHWg4QWqUo~JmLIa-Vrk8XDAqXV6WYu4CJZbk6vUo1n249A7SNyMggK2rFXEjaqiU~53erL2lk3ovHRwE8eQjNWrIwrxJyNMp8sfiTl1i-7UvdLTy5okOlBy-qbw__"
                  alt="imageeightyfive"
                  className="w-[54%] object-cover"
                />
                <Heading as="h6" className="w-[83%] md:w-full leading-[26px]">
                  intern INT-38C-BK Acoustic Guitar Linden..
                </Heading>
                <RatingBar
                  value={1}
                  isEditable={true}
                  size={30}
                  className="flex justify-between"
                />
                <div className="flex">
                  {/* <Text
                    as="p"
                    className="flex justify-center items-center h-[50px] pl-4 pr-[35px] py-[13px] sm:pr-5 !text-black-900_87 bg-gray-100 rounded"
                  >
                    Write Reviews
                  </Text> */}
                  <Input
                    name="placeboxinfo"
                    placeholder="Write Reviews"
                    className="p-0 placeholder:text-black-900_87 text-base text-left w-full"
                    wrapClassName="h-[8px],w-[220px]"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="flex">
                    {/* <Text
                      as="p"
                      className="flex justify-center items-center h-[50px] pl-4 pr-[35px] py-[13px] sm:pr-5 !text-black-900_87 bg-gray-100 rounded"
                    >
                      Upload Video
                    </Text> */}
                    <input type="file" className="pl-28" />
                  </div>
                  {/* <Img
                    src="images/img_teenyicons_attach_solid.svg"
                    alt="teenyicons_one"
                    className="h-[24px] w-[24px]"
                  /> */}
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
