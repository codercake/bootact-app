import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Button, Heading, SelectBox, Input } from "../../components";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function NotLoggedInDesktopPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Figma-React</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pb-[98px] bg-white-A700">
        <header className="flex justify-center items-center w-full p-3.5 bg-white-A700 shadow-xs">
          <div className="flex flex-row justify-center w-full mx-auto max-w-[1296px]">
            <div className="flex flex-row justify-center items-center w-full">
              <Img src="images/img_whole.png" alt="whole_one" className="w-[13%] object-cover sm:uppercase" />
              <Input
                color="gray_100_02"
                size="xs"
                shape="round"
                name="search"
                placeholder="Search for your favorite groups in ATG"
                value={searchBarValue}
                onChange={(e) => setSearchBarValue(e)}
                prefix={<Img src="images/img_search.svg" alt="search" className="cursor-pointer" />}
                suffix={
                  searchBarValue?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue("")} height={22} width={22} fillColor="#7a7a7aff" />
                  ) : null
                }
                className="w-[28%] ml-[305px] gap-3.5 text-gray-700_01"
              />
              <div className="flex flex-row justify-center items-center w-[16%] ml-[261px]">
                <Text size="2xl" as="p" className="!text-blue_gray-900 text-right !font-medium">
                  <span className="text-blue_gray-900">Create account. </span>
                  <span className="text-blue-A700 font-bold">It’s free!</span>
                </Text>
                <Img src="images/img_baseline_arrow_drop_down_24px.svg" alt="baselinearrow" className="h-6 w-6" />
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full gap-10">
            <div className="h-[440px] w-full relative">
              <Img
                src="images/img_rectangle_2.png"
                alt="image"
                className="justify-center h-[440px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-col items-start justify-center w-full h-full pl-[77px] pr-14 gap-px left-0 bottom-0 right-0 top-0 py-[77px] m-auto bg-gradient absolute">
                <Heading size="xl" as="h1" className="mt-[212px] ml-[122px] !text-white-A700">
                  Computer Engineering
                </Heading>
                <Text size="3xl" as="p" className="ml-[122px] !text-white-A700">
                  142,765 Computer Engineers follow this
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full max-w-[1040px]">
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row justify-between w-auto">
                  <Text size="2xl" as="p">
                    All Posts(32)
                  </Text>
                  <Text size="2xl" as="p" className="!text-blue_gray-400">
                    Article
                  </Text>
                  <Text size="2xl" as="p" className="!text-blue_gray-400">
                    Event
                  </Text>
                  <Text size="2xl" as="p" className="!text-blue_gray-400">
                    Education
                  </Text>
                  <Text size="2xl" as="p" className="!text-blue_gray-400">
                    Job
                  </Text>
                </div>
                <div className="flex flex-row justify-start w-[27%] gap-4">
                  <SelectBox
                    indicator={
                      <Img
                        src="images/img_baselinearrowdropdown24px_black_900.svg"
                        alt="baseline-arrow_drop_down-24px"
                      />
                    }
                    name="writeapost"
                    placeholder="Write a Post"
                    options={dropDownOptions}
                    className="w-[49%] gap-px font-medium"
                  />
                  <Button
                    color="blue_A700"
                    size="lg"
                    leftIcon={<Img src="images/img_baselinegroupadd24px.svg" alt="baseline-group_add-24px" />}
                    className="gap-1.5 font-medium min-w-[125px]"
                  >
                    Join Group
                  </Button>
                </div>
              </div>
              <div className="h-px w-full mt-3 bg-gray-300" />
              <div className="h-px w-[9%] mt-[-1px] bg-black-900" />
              <div className="flex flex-row justify-between items-start w-full mt-[27px]">
                <div className="flex flex-col items-center justify-start w-[67%] gap-4">
                  <div className="flex flex-col w-full gap-4">
                    <div className="flex flex-col items-center justify-start w-full pb-5 gap-[17px] border-gray-300 border border-solid bg-white-A700 rounded">
                      <Img
                        src="images/img_rectangle_5.png"
                        alt="article_one"
                        className="w-full rounded-tr rounded-tl object-cover"
                      />
                      <div className="flex flex-row justify-center w-[95%]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text size="3xl" as="p">
                            <span className="text-black-900 font-medium">✍️ </span>
                            <span className="text-black-900 font-medium">Article</span>
                          </Text>
                          <div className="flex flex-row justify-start items-start mt-[13px] gap-6">
                            <Heading size="md" as="h2" className="w-[93%] sm:w-[93%]">
                              What if famous brands had regular fonts? Meet RegulaBrands!
                            </Heading>
                            <Img src="images/img_baseline_more_vert_24px.svg" alt="image" className="h-7 w-7" />
                          </div>
                          <Text size="4xl" as="p" className="mt-3.5 !text-gray-700_01">
                            I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                          </Text>
                          <div className="flex flex-row justify-between items-center w-full mt-[29px]">
                            <div className="flex flex-row justify-start items-center w-[29%] gap-2.5">
                              <Img
                                src="images/img_rectangle_3.png"
                                alt="sarthak_kamra"
                                className="h-12 w-12 rounded-[50%]"
                              />
                              <Heading as="h3">Sarthak Kamra</Heading>
                            </div>
                            <div className="flex flex-row justify-center items-center">
                              <Img
                                src="images/img_icon_action_visibility_24px.svg"
                                alt="14k_views_one"
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
                    <div className="flex flex-col items-center justify-start w-full pb-5 gap-[17px] border-gray-300 border border-solid bg-white-A700 rounded">
                      <Img
                        src="images/img_rectangle_5_220x692.png"
                        alt="image"
                        className="w-full rounded-tr rounded-tl object-cover"
                      />
                      <div className="flex flex-row justify-center w-[95%]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text size="3xl" as="p">
                            <span className="text-black-900 font-medium">🔬️</span>
                            <span className="text-black-900 font-medium">Educatio</span>
                            <span className="text-black-900">n</span>
                          </Text>
                          <div className="flex flex-row justify-start items-start mt-[13px] gap-6">
                            <Heading size="md" as="h4" className="w-[93%] !leading-[134.55%]">
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
                                alt="circleimage"
                                className="h-12 w-12 rounded-[50%]"
                              />
                              <Heading as="h5">Sarah West</Heading>
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
                  <div className="flex flex-col w-full gap-4">
                    <div className="flex flex-row justify-center w-full pb-5 border-gray-300 border border-solid bg-white-A700 rounded">
                      <div className="flex flex-col items-center justify-start w-full gap-[19px]">
                        <Img
                          src="images/img_rectangle_5_1.png"
                          alt="🗓_meetup_one"
                          className="w-full rounded-tr rounded-tl object-cover"
                        />
                        <div className="flex flex-col items-start justify-start w-[95%]">
                          <Text size="3xl" as="p">
                            <span className="text-black-900 font-medium">🗓️</span>
                            <span className="text-black-900 font-medium">Meetu</span>
                            <span className="text-black-900">p</span>
                          </Text>
                          <div className="flex flex-row justify-between items-center w-full mt-2.5">
                            <Heading size="md" as="h6">
                              Finance & Investment Elite Social Mixer @Lujiazui
                            </Heading>
                            <div className="flex flex-row justify-center bg-gray-400_01 rounded">
                              <Img
                                src="images/img_baseline_more_vert_24px_black_900.svg"
                                alt="🗓_meetup_three"
                                className="h-7 w-7 mx-0.5"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row justify-between w-[55%] mt-[9px]">
                            <div className="flex flex-row justify-start gap-1">
                              <Img
                                src="images/img_baseline_today_24px.svg"
                                alt="fri12_oct2018"
                                className="h-5 w-5 mb-px"
                              />
                              <Text size="xl" as="p">
                                Fri, 12 Oct, 2018
                              </Text>
                            </div>
                            <div className="flex flex-row justify-start gap-1">
                              <Img
                                src="images/img_outline_location_on_24px.svg"
                                alt="ahmedabadindia"
                                className="h-5 w-5 mb-px"
                              />
                              <Text size="xl" as="p">
                                Ahmedabad, India
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start mt-[15px]">
                            <Button
                              color="white_A700"
                              size="lg"
                              className="w-full font-semibold border-blue_gray-200_01 border border-solid rounded-lg"
                            >
                              Visit Website
                            </Button>
                          </div>
                          <div className="flex flex-row justify-between items-center w-full mt-8">
                            <div className="flex flex-row justify-start items-center w-1/4 gap-2.5">
                              <Img
                                src="images/img_rectangle_3_1.png"
                                alt="ronal_jones_one"
                                className="h-12 w-12 rounded-[50%]"
                              />
                              <Heading as="h6">Ronal Jones</Heading>
                            </div>
                            <div className="flex flex-row justify-center items-center">
                              <Img
                                src="images/img_icon_action_visibility_24px.svg"
                                alt="14k_views_one"
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
                    <div className="flex flex-row justify-center w-full p-[18px] border-gray-300 border border-solid bg-white-A700 rounded">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text size="3xl" as="p" className="!font-medium">
                          💼️ Job
                        </Text>
                        <div className="flex flex-row justify-between items-center w-full mt-[15px]">
                          <Heading size="md" as="h5" className="mt-px">
                            Software Developer
                          </Heading>
                          <Img
                            src="images/img_baseline_more_vert_24px_black_900.svg"
                            alt="baselinemore"
                            className="h-7 w-7"
                          />
                        </div>
                        <div className="flex flex-row justify-start mt-2.5">
                          <Img
                            src="images/img_outline_work_outline_24px.svg"
                            alt="outlinework_one"
                            className="h-5 w-5"
                          />
                          <Text size="xl" as="p" className="ml-1">
                            Innovaccer Analytics Private Ltd.
                          </Text>
                          <Img
                            src="images/img_outline_location_on_24px.svg"
                            alt="outline_one"
                            className="h-5 w-5 ml-10"
                          />
                          <Text size="xl" as="p" className="ml-1">
                            Noida, India
                          </Text>
                        </div>
                        <Button
                          color="white_A700"
                          size="lg"
                          className="w-full mt-[15px] !text-green-A700 font-semibold border-blue_gray-200_01 border border-solid rounded-[10px]"
                        >
                          Apply on Timesjobs
                        </Button>
                        <div className="flex flex-row justify-between items-center w-full mt-8">
                          <div className="flex flex-row justify-start items-center w-1/4 gap-2.5">
                            <Img
                              src="images/img_rectangle_3_2.png"
                              alt="circleimage"
                              className="h-12 w-12 rounded-[50%]"
                            />
                            <Heading as="h6">Joseph Gray</Heading>
                          </div>
                          <div className="flex flex-row justify-between items-center w-[28%]">
                            <div className="flex flex-row justify-start items-center gap-2">
                              <Img
                                src="images/img_icon_action_visibility_24px.svg"
                                alt="iconaction_one"
                                className="h-[18px] w-[18px]"
                              />
                              <Text as="p" className="!text-blue_gray-700 text-right !font-medium">
                                1.4k views
                              </Text>
                            </div>
                            <Button className="w-[24%] !rounded-sm">
                              <Img src="images/img_search_blue_gray_900.svg" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[24%] mt-[27px] gap-[31px]">
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-col items-center justify-start w-full gap-[9px]">
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-row justify-start items-center gap-1">
                          <Img
                            src="images/img_outline_location_on_24px.svg"
                            alt="outline_one"
                            className="h-[18px] w-[18px]"
                          />
                          <Text as="p">Noida, India</Text>
                        </div>
                        <Img src="images/img_baseline_edit_24px.svg" alt="baselineedit" className="h-5 w-5" />
                      </div>
                      <div className="h-px w-full bg-gray-400" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-start w-full gap-[7px]">
                    <Img
                      src="images/img_baseline_error_outline_24px.svg"
                      alt="baselineerror"
                      className="h-4 w-4 mt-px opacity-0.5"
                    />
                    <Text size="s" as="p" className="w-[91%] !text-black-900_87 opacity-0.5">
                      Your location will help us serve better and extend a personalised experience.
                    </Text>
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
