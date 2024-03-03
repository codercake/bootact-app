import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Heading, Button, Input } from "../../components";
import Header from "../../components/Header";

export default function LoggedInUserScrolledLocationEditEnabledPage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Figma-React</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-white-A700">
        <div className="flex flex-col items-start justify-start w-full gap-4">
          <div className="flex flex-row justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-end justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row justify-start w-full p-3.5 z-[1] bg-white-A700 shadow-xs">
                      <div className="flex flex-row justify-between items-start w-full mx-auto max-w-[1168px]">
                        <Img src="images/img_whole.png" alt="whole_one" className="w-[14%] mt-2 object-cover" />
                        <div className="flex flex-row justify-between items-start w-3/5">
                          <Input
                            color="gray_100_02"
                            size="xs"
                            shape="round"
                            name="search"
                            placeholder="Search for your favorite groups in ATG"
                            value={searchBarValue1}
                            onChange={(e) => setSearchBarValue1(e)}
                            prefix={<Img src="images/img_search.svg" alt="search" className="cursor-pointer" />}
                            suffix={
                              searchBarValue1?.length > 0 ? (
                                <CloseSVG
                                  onClick={() => setSearchBarValue1("")}
                                  height={22}
                                  width={22}
                                  fillColor="#7a7a7aff"
                                />
                              ) : null
                            }
                            className="w-[52%] gap-3.5 text-gray-700_01"
                          />
                          <div className="flex flex-row justify-start items-center w-[26%] gap-3">
                            <Img src="images/img_rectangle_6.png" alt="circleimage" className="h-9 w-9 rounded-[50%]" />
                            <div className="flex flex-row justify-start items-center w-[74%] gap-[7px]">
                              <Text as="p">Siddharth Goyal</Text>
                              <Img
                                src="images/img_baselinearrowdropdown24px_black_900.svg"
                                alt="baselinearrow"
                                className="h-[22px] w-[22px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Header className="flex flex-row justify-center items-center w-full mt-[-42px] p-[11px] bg-white-A700" />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[49%] mt-[-152px] ml-[199px] pb-5 gap-[17px] border-gray-300 border border-solid bg-white-A700 rounded">
                    <Img
                      src="images/img_rectangle_5_178x692.png"
                      alt="image"
                      className="w-full rounded-tr rounded-tl object-cover"
                    />
                    <div className="flex flex-row justify-center w-full max-w-[652px]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text size="3xl" as="p">
                          <span className="text-black-900 font-medium">✍️ </span>
                          <span className="text-black-900 font-medium">Article</span>
                        </Text>
                        <div className="flex flex-row justify-start items-start mt-[13px] gap-6">
                          <Heading size="md" as="h1" className="w-[93%]">
                            What if famous brands had regular fonts? Meet RegulaBrands!
                          </Heading>
                          <Img src="images/img_baseline_more_vert_24px.svg" alt="baselinemore" className="h-7 w-7" />
                        </div>
                        <Text size="4xl" as="p" className="mt-3.5 !text-gray-700_01">
                          I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                        </Text>
                        <div className="flex flex-row justify-between items-center w-full mt-[29px]">
                          <div className="flex flex-row justify-start items-center w-[29%] gap-2.5">
                            <Img
                              src="images/img_rectangle_3.png"
                              alt="circleimage_one"
                              className="h-12 w-12 rounded-[50%]"
                            />
                            <Heading as="h2">Sarthak Kamra</Heading>
                          </div>
                          <div className="flex flex-row justify-center items-center">
                            <Img
                              src="images/img_icon_action_visibility_24px.svg"
                              alt="iconaction_one"
                              className="h-[18px] w-[18px]"
                            />
                            <Text as="p" className="ml-2 !text-blue_gray-700 text-right !font-medium">
                              1.4k views
                            </Text>
                            <Button className="w-[24%] ml-10 !rounded-sm">
                              <Img src="images/img_search_blue_gray_900.svg" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start w-[17%] mt-[-235px] mr-[202px]">
                  <div className="flex flex-row justify-end w-full">
                    <div className="flex flex-col items-center justify-start w-full gap-[9px]">
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-row justify-start items-center gap-1">
                          <Img
                            src="images/img_outline_location_on_24px.svg"
                            alt="outline_one"
                            className="h-[18px] w-[18px]"
                          />
                          <Text as="p">
                            <span className="text-black-900">|</span>
                            <span className="text-gray_600">Enter your location</span>
                          </Text>
                        </div>
                        <Img src="images/img_baseline_clear_24px.svg" alt="baselineclear" className="h-5 w-5" />
                      </div>
                      <div className="h-px w-full bg-gray-400" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-end items-start w-full mt-[31px] gap-[7px]">
                    <Img
                      src="images/img_baseline_error_outline_24px.svg"
                      alt="baselineerror"
                      className="h-4 w-4 mt-px opacity-0.5"
                    />
                    <Text size="s" as="p" className="w-[91%] !text-black-900_87 opacity-0.5">
                      Your location will help us serve better and extend a personalised experience.
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[99%] mt-[53px] mr-[3px]">
                    <div className="flex flex-col items-start justify-start w-full gap-[23px]">
                      <div className="flex flex-row justify-start items-center w-full gap-1 mx-auto max-w-[207px]">
                        <Img
                          src="images/img_twotone_thumb_up_24px.svg"
                          alt="twotonethumb"
                          className="h-[18px] w-[18px]"
                        />
                        <Text as="p" className="tracking-[1.40px] uppercase">
                          REcommended Groups
                        </Text>
                      </div>
                      <div className="flex flex-col w-full gap-[22px]">
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[39%] gap-3">
                            <Img
                              src="images/img_rectangle_6_36x36.png"
                              alt="leisure_one"
                              className="h-9 w-9 rounded-[50%]"
                            />
                            <Text as="p">Leisure</Text>
                          </div>
                          <Button color="blue_gray_50" size="xs" className="min-w-[60px] rounded-[12px]">
                            Follow
                          </Button>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[43%] gap-3">
                            <Img
                              src="images/img_rectangle_6_1.png"
                              alt="circleimage"
                              className="h-9 w-9 rounded-[50%]"
                            />
                            <Text as="p">Activism</Text>
                          </div>
                          <Button color="blue_gray_50" size="xs" className="min-w-[60px] rounded-[12px]">
                            Follow
                          </Button>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[33%] gap-3">
                            <Img
                              src="images/img_rectangle_6_2.png"
                              alt="circleimage"
                              className="h-9 w-9 rounded-[50%]"
                            />
                            <Text as="p">MBA</Text>
                          </div>
                          <Button color="blue_gray_50" size="xs" className="min-w-[60px] rounded-[12px]">
                            Follow
                          </Button>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[49%] gap-3">
                            <Img
                              src="images/img_rectangle_6_3.png"
                              alt="circleimage"
                              className="h-9 w-9 rounded-[50%]"
                            />
                            <Text as="p">Philosophy</Text>
                          </div>
                          <Button color="blue_gray_50" size="xs" className="min-w-[60px] rounded-[12px]">
                            Follow
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text size="s" as="p" className="mt-[54px] mr-[3px] !text-blue-A700 text-right">
                    See More...
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[49%] mt-[-219px] ml-[199px] pb-5 gap-[17px] border-gray-300 border border-solid bg-white-A700 rounded">
                <Img
                  src="images/img_rectangle_5_220x692.png"
                  alt="image_one"
                  className="w-full rounded-tr rounded-tl object-cover"
                />
                <div className="flex flex-row justify-center w-full max-w-[652px]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text size="3xl" as="p">
                      <span className="text-black-900 font-medium">🔬️</span>
                      <span className="text-black-900 font-medium">Educatio</span>
                      <span className="text-black-900">n</span>
                    </Text>
                    <div className="flex flex-row justify-start items-start mt-[13px] gap-6">
                      <Heading size="md" as="h3" className="w-[93%] !leading-[134.55%]">
                        Tax Benefits for Investment under National Pension Scheme launched by Government
                      </Heading>
                      <Img
                        src="images/img_baseline_more_vert_24px_black_900.svg"
                        alt="baselinemore"
                        className="h-7 w-7"
                      />
                    </div>
                    <Text size="4xl" as="p" className="mt-3.5 !text-gray-700_01">
                      I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                    </Text>
                    <div className="flex flex-row justify-between items-center w-full mt-[29px]">
                      <div className="flex flex-row justify-start items-center w-[24%] gap-2.5">
                        <Img
                          src="images/img_rectangle_3_48x48.png"
                          alt="circleimage_two"
                          className="h-12 w-12 rounded-[50%]"
                        />
                        <Heading as="h4">Sarah West</Heading>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <Img
                          src="images/img_icon_action_visibility_24px.svg"
                          alt="iconaction"
                          className="h-[18px] w-[18px]"
                        />
                        <Text as="p" className="ml-2 !text-blue_gray-700 text-right !font-medium">
                          1.4k views
                        </Text>
                        <Button className="w-[24%] ml-10 !rounded-sm">
                          <Img src="images/img_search_blue_gray_900.svg" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[775px] w-[49%] ml-[200px] relative">
            <div className="flex flex-row justify-center w-full pb-5 top-0 right-0 left-0 m-auto border-gray-300 border border-solid bg-white-A700 absolute rounded">
              <div className="flex flex-col items-center justify-start w-full gap-5">
                <Img
                  src="images/img_rectangle_5_1.png"
                  alt="image_two"
                  className="w-full rounded-tr rounded-tl object-cover"
                />
                <div className="flex flex-col items-start justify-start w-full max-w-[652px]">
                  <Text size="3xl" as="p">
                    <span className="text-black-900 font-medium">🗓️</span>
                    <span className="text-black-900 font-medium">Meetu</span>
                    <span className="text-black-900">p</span>
                  </Text>
                  <div className="flex flex-row justify-start items-center mt-2.5 gap-6">
                    <Heading size="md" as="h2">
                      Finance & Investment Elite Social Mixer @Lujiazui
                    </Heading>
                    <Button color="gray_400_01" size="sm" className="w-7 rotate-[-90deg]">
                      <Img src="images/img_baseline_more_vert_24px_black_900_28x28.svg" />
                    </Button>
                  </div>
                  <div className="h-[102px] w-full mt-1 relative">
                    <div className="flex flex-row justify-center w-full bottom-[20%] right-0 left-0 p-[9px] m-auto border-blue_gray-200_01 border border-solid bg-white-A700 absolute rounded-lg">
                      <Heading size="xs" as="h3" className="mx-[276px] !text-deep_orange-A200 text-center">
                        Visit Website
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start w-[55%] left-0 top-[8%] m-auto absolute">
                      <Img src="images/img_baseline_today_24px.svg" alt="baselinetoday" className="h-5 w-5" />
                      <Text size="xl" as="p" className="ml-1">
                        Fri, 12 Oct, 2018
                      </Text>
                      <Img
                        src="images/img_outline_location_on_24px.svg"
                        alt="outline_three"
                        className="h-5 w-5 ml-10"
                      />
                      <Text size="xl" as="p" className="ml-1">
                        Ahmedabad, India
                      </Text>
                    </div>
                    <div className="flex flex-row justify-center w-1/4 h-full right-0 bottom-0 top-0 m-auto absolute">
                      <div className="flex flex-col items-start justify-start w-full gap-[13px] p-[11px] bg-white-A700 shadow-sm rounded">
                        <div className="flex flex-row justify-start">
                          <Text as="p" className="text-right">
                            Edit
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start">
                          <Text as="p">Report</Text>
                        </div>
                        <div className="flex flex-row justify-start">
                          <Text as="p">Option 3</Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full mt-3">
                    <div className="flex flex-row justify-start items-center w-1/4 gap-2.5">
                      <Img src="images/img_rectangle_3_1.png" alt="circleimage" className="h-12 w-12 rounded-[50%]" />
                      <Heading as="h4">Ronal Jones</Heading>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                      <Img
                        src="images/img_icon_action_visibility_24px.svg"
                        alt="iconaction_five"
                        className="h-[18px] w-[18px]"
                      />
                      <Text as="p" className="ml-2 !text-blue_gray-700 text-right !font-medium">
                        1.4k views
                      </Text>
                      <Button className="w-[24%] ml-10 !rounded-sm">
                        <Img src="images/img_search_blue_gray_900.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full bottom-0 right-0 left-0 p-5 m-auto border-gray-300 border border-solid bg-white-A700 absolute rounded">
              <div className="flex flex-col items-start justify-start w-full max-w-[652px]">
                <Text size="3xl" as="p" className="!font-medium">
                  💼️ Job
                </Text>
                <div className="flex flex-row justify-start items-center mt-2.5 gap-6">
                  <Heading size="md" as="h5">
                    Software Developer
                  </Heading>
                  <Img src="images/img_baseline_more_vert_24px_black_900.svg" alt="baselinemore" className="h-7 w-7" />
                </div>
                <div className="flex flex-row justify-start mt-3">
                  <Img src="images/img_outline_work_outline_24px.svg" alt="outlinework_one" className="h-5 w-5" />
                  <Text size="xl" as="p" className="ml-1">
                    Innovaccer Analytics Private Ltd.
                  </Text>
                  <Img src="images/img_outline_location_on_24px.svg" alt="outline_five" className="h-5 w-5 ml-10" />
                  <Text size="xl" as="p" className="ml-1">
                    Noida, India
                  </Text>
                </div>
                <div className="flex flex-row justify-center mt-4 p-2 border-blue_gray-200_01 border border-solid bg-white-A700 rounded-[10px]">
                  <Heading size="xs" as="h6" className="mx-[257px] !text-green-A700 text-center">
                    Apply on Timesjobs
                  </Heading>
                </div>
                <div className="flex flex-row justify-between items-center w-full mt-8">
                  <div className="flex flex-row justify-start items-center w-1/4 gap-2.5">
                    <Img src="images/img_rectangle_3_2.png" alt="circleimage" className="h-12 w-12 rounded-[50%]" />
                    <Heading as="h6">Joseph Gray</Heading>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <Img
                      src="images/img_icon_action_visibility_24px.svg"
                      alt="iconaction"
                      className="h-[18px] w-[18px]"
                    />
                    <Text as="p" className="ml-2 !text-blue_gray-700 text-right !font-medium">
                      1.4k views
                    </Text>
                    <Button className="w-[24%] ml-10 !rounded-sm">
                      <Img src="images/img_search_blue_gray_900.svg" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full pb-5 bottom-[10%] right-0 left-0 m-auto border-gray-300 border border-solid bg-white-A700 absolute rounded">
              <div className="flex flex-col items-center justify-start w-full gap-5">
                <Img
                  src="images/img_rectangle_5_1.png"
                  alt="image_three"
                  className="w-full rounded-tr rounded-tl object-cover"
                />
                <div className="flex flex-col items-start justify-start w-full max-w-[652px]">
                  <Text size="3xl" as="p">
                    <span className="text-black-900 font-medium">🗓️</span>
                    <span className="text-black-900 font-medium">Meetu</span>
                    <span className="text-black-900">p</span>
                  </Text>
                  <div className="flex flex-row justify-start items-center mt-2.5 gap-6">
                    <Heading size="md" as="h5">
                      Finance & Investment Elite Social Mixer @Lujiazui
                    </Heading>
                    <Img
                      src="images/img_baseline_more_vert_24px_black_900.svg"
                      alt="baselinemore"
                      className="h-7 w-7"
                    />
                  </div>
                  <div className="flex flex-row justify-start mt-3">
                    <Img src="images/img_baseline_today_24px.svg" alt="baselinetoday" className="h-5 w-5" />
                    <Text size="xl" as="p" className="ml-1">
                      Fri, 12 Oct, 2018
                    </Text>
                    <Img src="images/img_outline_location_on_24px.svg" alt="outline_seven" className="h-5 w-5 ml-10" />
                    <Text size="xl" as="p" className="ml-1">
                      Ahmedabad, India
                    </Text>
                  </div>
                  <Button
                    color="white_A700"
                    size="lg"
                    className="w-full mt-4 font-semibold border-blue_gray-200_01 border border-solid rounded-lg"
                  >
                    Visit Website
                  </Button>
                  <div className="flex flex-row justify-between items-center w-full mt-8">
                    <div className="flex flex-row justify-start items-center w-1/4 gap-2.5">
                      <Img src="images/img_rectangle_3_1.png" alt="circleimage" className="h-12 w-12 rounded-[50%]" />
                      <Heading as="h6">Ronal Jones</Heading>
                    </div>
                    <div className="flex flex-row justify-start gap-2">
                      <Img
                        src="images/img_icon_action_visibility_24px.svg"
                        alt="iconaction_nine"
                        className="h-[18px] w-[18px]"
                      />
                      <Text as="p" className="!text-blue_gray-700 text-right !font-medium">
                        1.4k views
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
