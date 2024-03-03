import React from "react";
import { Img, Text, Button, Input, Heading } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function DesktopJoinGroupSignIN({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[736px]">
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-center w-full pb-[29px] bg-white-A700 rounded-lg">
          <div className="flex flex-col items-center justify-start w-full gap-[26px]">
            <div className="flex flex-row justify-center w-full p-4 rounded-tl-lg rounded-tr-lg bg-gray-100">
              <Text as="p" className="ml-[42px] mr-[41px] !text-teal-800 text-center !font-medium">
                Let&#39;s learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
              </Text>
            </div>
            <div className="flex flex-row justify-between items-start w-[91%]">
              <div className="flex flex-col items-center justify-start w-[49%]">
                <a href="#">
                  <Heading size="lg" as="h1">
                    Sign In
                  </Heading>
                </a>
                <div className="flex flex-col items-center justify-start w-full mt-5 gap-[19px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full !rounded-tl-sm !rounded-tr-sm z-[1] border-blue_gray-100 border border-solid"
                    />
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      suffix={
                        <Img
                          src="images/img_icon_action_visibility24px_blue_gray_400.svg"
                          alt="icon/action/visibility_24px"
                        />
                      }
                      className="w-full mt-[-1px] gap-[35px] !rounded-bl-sm !rounded-br-sm border-blue_gray-100 border border-solid"
                    />
                  </div>
                  <Button color="blue_A700" size="xl" className="w-full font-semibold rounded-[20px]">
                    Sign In
                  </Button>
                </div>
                <Button
                  color="white_A700"
                  size="xl"
                  leftIcon={
                    <Img src="images/img_flogorgbblue1024.png" alt="f_logo_RGB-Blue_1024" className="w-4 h-4" />
                  }
                  className="w-full mt-6 gap-2.5 !text-black-900 border-blue_gray-100_01 border border-solid !rounded-sm"
                >
                  Sign in with Facebook
                </Button>
                <Button
                  color="white_A700"
                  size="xl"
                  leftIcon={<Img src="images/img_search_red_500.svg" alt="search" />}
                  className="w-full mt-2 gap-2.5 !text-black-900 border-blue_gray-100_01 border border-solid !rounded-sm"
                >
                  Sign in with Google
                </Button>
                <a href="#" className="mt-[25px]">
                  <Text size="s" as="p" className="tracking-[-0.10px] text-center !font-medium">
                    Forgot Password?
                  </Text>
                </a>
              </div>
              <div className="flex flex-col items-start justify-start w-[44%] mt-[5px] gap-[50px]">
                <Text size="md" as="p" className="ml-2.5 !text-gray-800 text-right">
                  <span className="text-gray-800">Don’t </span>
                  <span className="text-gray-800">have an account</span>
                  <span className="text-gray-800">yet</span>
                  <span className="text-gray-800">? </span>
                  <span className="text-blue-A700 font-semibold">Create new for free!</span>
                </Text>
                <div className="flex flex-col items-center justify-start w-[90%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row justify-start items-center w-full gap-px">
                      <div className="h-[260px] w-[99%] relative">
                        <div className="flex flex-col items-end justify-center w-max h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <div className="flex flex-col items-start justify-start w-[38%] mr-[68px] z-[1]">
                            <div className="flex flex-col items-end justify-start w-full">
                              <div className="flex flex-row justify-end items-start h-[47px] w-[47px] mr-[13px]">
                                <div className="flex flex-row justify-end items-start h-[47px] w-[47px]">
                                  <div className="flex flex-row justify-end items-start w-[62%]">
                                    <Img
                                      src="images/img_image_478.png"
                                      alt="image478_one"
                                      className="w-full z-[1] object-cover"
                                    />
                                    <Img
                                      src="images/img_fill_146.svg"
                                      alt="fill146_one"
                                      className="h-1 mt-4 ml-[-8px]"
                                    />
                                  </div>
                                  <Img
                                    src="images/img_image_479.png"
                                    alt="image479_one"
                                    className="w-[41%] mt-0.5 object-cover"
                                  />
                                </div>
                                <Img
                                  src="images/img_image_480.png"
                                  alt="image480_one"
                                  className="w-[35%] mt-[17px] ml-[-16px] object-cover"
                                />
                              </div>
                              <div className="h-[92px] w-[92px] mt-[-32px] relative">
                                <Img
                                  src="images/img_fill_148.svg"
                                  alt="fill148_one"
                                  className="justify-center h-[92px] w-[92px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                />
                                <div className="h-[77px] w-[81%] right-[5%] bottom-0 top-0 m-auto absolute">
                                  <Img
                                    src="images/img_fill_149.svg"
                                    alt="fill149_one"
                                    className="justify-center h-[77px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                  />
                                  <Img
                                    src="images/img_fill_150.svg"
                                    alt="fill150_one"
                                    className="h-[3px] right-[3%] top-[9%] m-auto absolute"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[76%] h-max left-[6%] bottom-0 top-0 m-auto absolute">
                                    <div className="flex flex-row justify-end items-end ml-[17px] z-[1]">
                                      <div className="h-[22px] w-0.5 mt-px bg-orange-A100" />
                                      <Img
                                        src="images/img_fill_152.svg"
                                        alt="fill152_one"
                                        className="h-1.5 mb-px ml-[7px]"
                                      />
                                      <Img
                                        src="images/img_fill_150.svg"
                                        alt="fill151_one"
                                        className="h-[5px] mb-[18px] ml-px"
                                      />
                                    </div>
                                    <div className="flex flex-row justify-start items-center gap-[7px]">
                                      <div className="h-[19px] w-1 bg-orange-A100" />
                                      <Img src="images/img_fill_152.svg" alt="fill154_one" className="h-1.5" />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start w-[67%] gap-[33px] top-[3%] right-0 left-0 m-auto absolute">
                                  <div className="h-10 w-[41px] ml-5 relative">
                                    <Img
                                      src="images/img_fill_157.svg"
                                      alt="fill157_one"
                                      className="justify-center h-10 w-[41px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                    <div className="h-[33px] w-[34px] right-[5%] top-[4%] m-auto absolute">
                                      <Img
                                        src="images/img_fill_158.svg"
                                        alt="fill158_one"
                                        className="justify-center h-[33px] w-[34px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                      />
                                      <div className="flex flex-col items-start justify-start w-[86%] bottom-[9%] right-[4%] m-auto absolute">
                                        <div className="flex flex-row justify-start items-center ml-3.5 gap-[3px] z-[1]">
                                          <Img src="images/img_fill_160.svg" alt="fill160_one" className="h-[9px]" />
                                          <Img src="images/img_fill_146.svg" alt="fill159_one" className="h-px" />
                                        </div>
                                        <div className="flex flex-col items-start justify-start w-[76%] gap-[3px]">
                                          <div className="flex flex-row justify-start items-center ml-1 gap-1">
                                            <Img src="images/img_fill_160.svg" alt="fill162_one" className="h-[11px]" />
                                            <Img src="images/img_fill_146.svg" alt="fill161_one" className="h-px" />
                                          </div>
                                          <Img src="images/img_fill_146.svg" alt="fill163_one" className="h-px" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <Img src="images/img_fill_152.svg" alt="fill156_one" className="h-[7px]" />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[14%] mt-[-15px] ml-7 z-[1]">
                              <div className="flex flex-row justify-center items-center w-full">
                                <div className="h-4 w-full relative">
                                  <Img
                                    src="images/img_fill_391.svg"
                                    alt="fill391_one"
                                    className="justify-center h-4 left-0 bottom-0 right-0 top-0 m-auto absolute"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[34%] gap-px bottom-[20%] right-0 left-0 m-auto absolute">
                                    <Img src="images/img_fill_397.svg" alt="fill397_one" className="h-px w-0.5" />
                                    <Img src="images/img_fill_437.svg" alt="fill437_one" className="h-px w-px ml-px" />
                                    <Img
                                      src="images/img_fill_393.svg"
                                      alt="fill393_one"
                                      className="h-0.5 w-px ml-[3px]"
                                    />
                                    <Img src="images/img_fill_394.svg" alt="fill394_one" className="h-px w-px ml-px" />
                                  </div>
                                </div>
                                <Img
                                  src="images/img_fill_438.svg"
                                  alt="fill438_one"
                                  className="h-px w-px ml-[-2px] z-[1]"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-end items-center w-full mt-[-55px]">
                            <div className="flex flex-row justify-end items-center w-[13%] z-[1]">
                              <div className="h-[27px] w-[26%] z-[1] relative">
                                <Img
                                  src="images/img_image_503.png"
                                  alt="image503_one"
                                  className="justify-center h-[27px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                                />
                                <Img
                                  src="images/img_image_504.png"
                                  alt="image504_one"
                                  className="h-[9px] w-3/4 right-[6%] top-[1%] m-auto object-cover absolute"
                                />
                              </div>
                              <Img src="images/img_image_499.png" alt="image499_one" className="w-3/4 object-cover" />
                            </div>
                            <div className="flex flex-row justify-end items-center w-[97%] ml-[-23px]">
                              <div className="h-[23px] w-[23px] z-[1] relative">
                                <Img
                                  src="images/img_image_494.png"
                                  alt="image494_one"
                                  className="justify-center h-[23px] w-[23px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                                />
                                <Img
                                  src="images/img_image_495.png"
                                  alt="image495_one"
                                  className="h-2 w-[70%] left-0 bottom-0 top-0 m-auto object-cover absolute"
                                />
                              </div>
                              <div className="flex flex-row justify-end items-center w-[91%]">
                                <Img
                                  src="images/img_image_510.png"
                                  alt="image510_one"
                                  className="w-[18px] z-[1] object-cover"
                                />
                                <div className="h-52 w-[98%] ml-[-13px] relative">
                                  <Img
                                    src="images/img_fill_4.svg"
                                    alt="fillfour_one"
                                    className="justify-center h-52 left-0 bottom-0 right-0 top-0 m-auto absolute"
                                  />
                                  <div className="flex flex-row justify-end items-center w-[21%] right-[6%] top-[35%] m-auto absolute">
                                    <Img src="images/img_fill_57.svg" alt="fillfiftyseven" className="h-[7px] z-[1]" />
                                    <Img src="images/img_fill_5.svg" alt="fillfive_one" className="h-12 ml-[-8px]" />
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-[30%] bottom-[3%] right-0 m-auto absolute">
                                    <div className="h-[65px] w-[62%] ml-2 z-[1] relative">
                                      <Img
                                        src="images/img_fill_12.svg"
                                        alt="filltwelve_one"
                                        className="justify-center h-[65px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                      />
                                      <div className="flex flex-row justify-center items-start w-[72%] bottom-[3%] right-0 left-0 m-auto absolute">
                                        <Img
                                          src="images/img_fill_13.svg"
                                          alt="fillthirteen"
                                          className="h-[37px] mb-[3px]"
                                        />
                                        <div className="h-[17px] w-px mt-[23px] bg-teal-100" />
                                      </div>
                                    </div>
                                    <div className="flex flex-row justify-start items-center w-full mt-[-20px]">
                                      <div className="flex flex-row justify-start w-[84%] gap-px z-[1]">
                                        <Img src="images/img_fill_80.svg" alt="filleighty_one" className="h-px" />
                                        <Img src="images/img_fill_80.svg" alt="fillseventynine" className="h-px" />
                                      </div>
                                      <div className="flex flex-row justify-start items-center w-[28%] ml-[-7px]">
                                        <div className="h-5 w-[59%] relative">
                                          <Img
                                            src="images/img_fill_6.svg"
                                            alt="fillsix_one"
                                            className="justify-center h-5 left-0 bottom-0 right-0 top-0 m-auto absolute"
                                          />
                                          <div className="flex flex-col items-start justify-start w-2/5 gap-1.5 right-[24%] top-[1%] m-auto absolute">
                                            <Img src="images/img_fill_9.svg" alt="fillnine_one" className="h-1 w-1" />
                                            <div className="flex flex-row justify-start gap-px">
                                              <Img
                                                src="images/img_fill_160.svg"
                                                alt="fillseven_one"
                                                className="h-[3px] mt-px"
                                              />
                                              <Img
                                                src="images/img_fill_160.svg"
                                                alt="filleight_one"
                                                className="h-[3px]"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="h-5 w-px ml-[-3px] z-[1] bg-white-A700_01" />
                                        <Img
                                          src="images/img_fill_80.svg"
                                          alt="fillsixtythree"
                                          className="h-px ml-0.5"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-[26%] right-[17%] top-[35%] m-auto absolute">
                                    <div className="flex flex-row justify-start items-start w-full z-[1]">
                                      <div className="flex flex-row justify-start items-center w-[85%]">
                                        <div className="flex flex-row justify-start items-center w-[94%]">
                                          <Img src="images/img_fill_5.svg" alt="filleleven_one" className="h-12" />
                                          <div className="flex flex-col items-center justify-start w-[17%] ml-[-5px]">
                                            <div className="flex flex-col items-start justify-start w-full">
                                              <Img
                                                src="images/img_fill_40.svg"
                                                alt="fillforty_one"
                                                className="h-3 z-[1]"
                                              />
                                              <Img
                                                src="images/img_fill_15.svg"
                                                alt="fillfifteen_one"
                                                className="h-[15px] mt-[-12px]"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-end w-[18%] ml-[-6px]">
                                          <Img
                                            src="images/img_fill_51.svg"
                                            alt="fillfiftyone"
                                            className="h-px w-0.5 mb-1.5"
                                          />
                                          <Img
                                            src="images/img_fill_45.svg"
                                            alt="fillfortyfive"
                                            className="h-[5px] w-1 mb-1 ml-px z-[2]"
                                          />
                                          <Img
                                            src="images/img_fill_42.svg"
                                            alt="fillfortytwo"
                                            className="h-1 w-1 ml-[-3px]"
                                          />
                                          <Img
                                            src="images/img_fill_51.svg"
                                            alt="fillfortynine"
                                            className="h-px w-px mb-px ml-[-2px] z-[1]"
                                          />
                                          <Img
                                            src="images/img_fill_48.svg"
                                            alt="fillfortyeight"
                                            className="h-0.5 w-px mb-px ml-[-1px]"
                                          />
                                        </div>
                                      </div>
                                      <Img
                                        src="images/img_image_491.png"
                                        alt="image491_one"
                                        className="w-[55%] ml-[-21px] object-cover"
                                      />
                                    </div>
                                    <div className="flex flex-row justify-start items-start w-[84%] mt-[-48px]">
                                      <div className="flex flex-row justify-start items-start w-full">
                                        <div className="flex flex-row justify-start items-center w-full">
                                          <Img src="images/img_group_118.svg" alt="image" className="h-12 z-[1]" />
                                          <div className="h-[18px] w-[31%] ml-[-11px] relative">
                                            <Img
                                              src="images/img_fill_391.svg"
                                              alt="fillfortyone"
                                              className="justify-center h-[18px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                            />
                                            <div className="flex flex-col items-center justify-start h-[5px] w-[5px] gap-px bottom-[24%] left-[16%] m-auto absolute">
                                              <div className="flex flex-row justify-between items-center w-full">
                                                <Img
                                                  src="images/img_fill_61.svg"
                                                  alt="fillsixtyone"
                                                  className="h-px w-px"
                                                />
                                                <Img
                                                  src="images/img_fill_43.svg"
                                                  alt="fillfortythree"
                                                  className="h-[3px] mt-px"
                                                />
                                                <Img
                                                  src="images/img_fill_61.svg"
                                                  alt="fillsixty_one"
                                                  className="h-px w-px"
                                                />
                                              </div>
                                              <Img
                                                src="images/img_fill_394.svg"
                                                alt="fillfortyfour"
                                                className="h-px w-0.5"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <Img
                                          src="images/img_fill_46.svg"
                                          alt="fillfortysix"
                                          className="h-2 mt-3.5 ml-[-12px] z-[1]"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start w-[41%] mt-[18px] ml-[-18px] z-[1]">
                                        <Img src="images/img_fill_47.svg" alt="fillfortyseven" className="h-[5px]" />
                                        <Img
                                          src="images/img_fill_51.svg"
                                          alt="fillfifty_one"
                                          className="h-px w-0.5 ml-[5px]"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-row justify-end w-1/5 bottom-[33%] right-[14%] m-auto absolute">
                                    <div className="flex flex-row justify-center items-start w-full">
                                      <div className="h-[30px] w-full relative">
                                        <Img
                                          src="images/img_fill_14.svg"
                                          alt="fillfourteen"
                                          className="justify-center h-[30px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                        />
                                        <div className="flex flex-col items-end justify-start h-2 w-[9px] gap-px bottom-[22%] left-[13%] m-auto absolute">
                                          <div className="flex flex-col items-start justify-start w-[23%] gap-0.5">
                                            <Img
                                              src="images/img_fill_21.svg"
                                              alt="filltwentyone"
                                              className="h-px w-px ml-0.5"
                                            />
                                            <div className="flex flex-row justify-start items-center h-px w-px gap-px">
                                              <Img
                                                src="images/img_fill_21.svg"
                                                alt="filltwentysix"
                                                className="h-px w-px"
                                              />
                                              <Img
                                                src="images/img_fill_19.svg"
                                                alt="fillnineteen"
                                                className="h-px w-px"
                                              />
                                            </div>
                                            <div className="flex flex-row justify-between items-center h-px w-0.5">
                                              <Img
                                                src="images/img_fill_19.svg"
                                                alt="filltwentynine"
                                                className="h-px w-px mt-px"
                                              />
                                              <Img
                                                src="images/img_fill_34.svg"
                                                alt="fillthirtyfour"
                                                className="h-px w-px"
                                              />
                                              <Img
                                                src="images/img_fill_19.svg"
                                                alt="fillthirty_one"
                                                className="h-px w-px"
                                              />
                                            </div>
                                          </div>
                                          <div className="flex flex-row justify-end w-full">
                                            <Img
                                              src="images/img_fill_21.svg"
                                              alt="fillthirtytwo"
                                              className="h-px w-px"
                                            />
                                            <Img
                                              src="images/img_fill_19.svg"
                                              alt="filltwentyfour"
                                              className="h-px w-px ml-1.5"
                                            />
                                            <Img
                                              src="images/img_fill_19.svg"
                                              alt="filltwentytwo"
                                              className="h-px w-px ml-0.5"
                                            />
                                          </div>
                                          <div className="flex flex-col items-start justify-start w-[34%] gap-px">
                                            <div className="flex flex-row justify-start items-center h-px w-px">
                                              <Img
                                                src="images/img_fill_21.svg"
                                                alt="filleighteen"
                                                className="h-px w-px z-[1]"
                                              />
                                              <Img
                                                src="images/img_fill_21.svg"
                                                alt="fillseventeen"
                                                className="h-px w-px mt-px"
                                              />
                                            </div>
                                            <Img
                                              src="images/img_fill_19.svg"
                                              alt="filltwentyeight"
                                              className="h-px w-px ml-px"
                                            />
                                            <Img
                                              src="images/img_fill_31.svg"
                                              alt="fillthirtyone"
                                              className="h-px w-px"
                                            />
                                            <div className="flex flex-row justify-start items-center h-px w-px gap-px">
                                              <Img
                                                src="images/img_fill_19.svg"
                                                alt="filltwentyseven"
                                                className="h-px w-px"
                                              />
                                              <Img
                                                src="images/img_fill_19.svg"
                                                alt="filltwentythree"
                                                className="h-px w-px mt-px"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-col items-start justify-start h-px w-px gap-px bottom-[35%] left-[23%] m-auto absolute">
                                          <div className="flex flex-row justify-start items-center h-px w-px gap-px">
                                            <Img
                                              src="images/img_fill_21.svg"
                                              alt="fillthirtythree"
                                              className="h-px w-px"
                                            />
                                            <Img
                                              src="images/img_fill_19.svg"
                                              alt="filltwentyfive"
                                              className="h-px w-px mb-px"
                                            />
                                          </div>
                                          <Img
                                            src="images/img_fill_20.svg"
                                            alt="filltwenty_one"
                                            className="h-px w-px"
                                          />
                                        </div>
                                      </div>
                                      <Img
                                        src="images/img_fill_38.svg"
                                        alt="fillthirtyeight"
                                        className="h-[13px] mt-px ml-[-38px] z-[1]"
                                      />
                                      <div className="flex flex-col items-center justify-start w-[3%] ml-9">
                                        <Img src="images/img_fill_38.svg" alt="fillthirtynine" className="h-[13px]" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-end justify-start h-10 w-10 right-[14%] top-[20%] m-auto absolute">
                                    <div className="h-10 w-10 relative">
                                      <div className="flex flex-col items-center justify-center h-full w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                                        <Img src="images/img_fill_16.svg" alt="fillsixteen_one" className="h-10 w-10" />
                                        <div className="h-10 w-10 mt-[-40px] relative">
                                          <Img
                                            src="images/img_group_78.svg"
                                            alt="image_one"
                                            className="justify-center h-10 w-10 left-0 bottom-0 right-0 top-0 m-auto absolute"
                                          />
                                          <Img
                                            src="images/img_fill_81.svg"
                                            alt="filleightyone"
                                            className="h-[9px] bottom-0 left-[3%] m-auto absolute"
                                          />
                                        </div>
                                      </div>
                                      <Img
                                        src="images/img_fill_37.svg"
                                        alt="fillthirtyseven"
                                        className="justify-center h-[17px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                      />
                                    </div>
                                    <Img
                                      src="images/img_fill_81.svg"
                                      alt="filleightytwo"
                                      className="h-[9px] mt-[-9px] mr-px z-[1]"
                                    />
                                  </div>
                                  <div className="h-[58px] w-[26%] bottom-[7%] right-[16%] m-auto absolute">
                                    <Img
                                      src="images/img_fill_35.svg"
                                      alt="fillthirtyfive"
                                      className="justify-center h-[58px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                    <div className="flex flex-row justify-end items-start w-[89%] right-[1%] top-[1%] m-auto absolute">
                                      <Img
                                        src="images/img_fill_36.svg"
                                        alt="fillthirtysix"
                                        className="h-[53px] z-[1]"
                                      />
                                      <div className="flex flex-col items-start justify-start w-[43%] mt-[7px] ml-[-13px]">
                                        <div className="h-[19px] w-5 z-[1] relative">
                                          <Img
                                            src="images/img_image_506.png"
                                            alt="image506_one"
                                            className="justify-center h-[19px] w-5 left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                                          />
                                          <Img
                                            src="images/img_image_507.png"
                                            alt="image507_one"
                                            className="h-[17px] w-full top-[3%] right-0 left-0 m-auto object-cover absolute"
                                          />
                                        </div>
                                        <Img
                                          src="images/img_image_505.png"
                                          alt="image505_one"
                                          className="w-full object-cover"
                                        />
                                      </div>
                                    </div>
                                    <Img
                                      src="images/img_fill_58.svg"
                                      alt="fillfiftyeight"
                                      className="h-px bottom-[6%] left-[1%] m-auto absolute"
                                    />
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[10%] bottom-[3%] right-[32%] m-auto absolute">
                                    <div className="flex flex-row justify-center items-center w-full">
                                      <div className="flex flex-row justify-center w-full">
                                        <div className="flex flex-col items-start justify-start w-full pb-1">
                                          <Img src="images/img_fill_6.svg" alt="fillfiftytwo" className="h-[7px]" />
                                          <Img
                                            src="images/img_fill_53.svg"
                                            alt="fillfiftythree"
                                            className="h-px mt-[-6px] ml-1"
                                          />
                                          <Img
                                            src="images/img_fill_53.svg"
                                            alt="fillfiftyfour"
                                            className="h-px mt-px ml-1"
                                          />
                                        </div>
                                      </div>
                                      <Img
                                        src="images/img_fill_55.svg"
                                        alt="fillfiftyfive"
                                        className="h-1 w-[5px] ml-[-4px]"
                                      />
                                    </div>
                                    <Img src="images/img_fill_53.svg" alt="fillfiftysix" className="h-px mt-[-1px]" />
                                  </div>
                                  <Img
                                    src="images/img_fill_243.svg"
                                    alt="fill243_one"
                                    className="h-[19px] bottom-[14%] left-[41%] m-auto absolute"
                                  />
                                  <div className="flex flex-row justify-start w-[10%] bottom-[11%] left-[41%] m-auto absolute">
                                    <div className="flex flex-col items-end justify-start w-full">
                                      <div className="flex flex-row justify-start items-center w-full">
                                        <div className="h-2.5 w-full relative">
                                          <Img
                                            src="images/img_fill_400.svg"
                                            alt="fill400_one"
                                            className="justify-center h-2.5 left-0 bottom-0 right-0 top-0 m-auto absolute"
                                          />
                                          <div className="flex flex-row justify-start items-start w-[65%] h-max left-[13%] bottom-0 top-0 m-auto absolute">
                                            <Img
                                              src="images/img_fill_406.svg"
                                              alt="fill406_one"
                                              className="h-[3px] w-[3px]"
                                            />
                                            <Img
                                              src="images/img_fill_53.svg"
                                              alt="fill404_one"
                                              className="h-px mt-px ml-[5px]"
                                            />
                                            <Img
                                              src="images/img_fill_38.svg"
                                              alt="fill402_one"
                                              className="h-1 mt-[3px] ml-px"
                                            />
                                          </div>
                                        </div>
                                        <Img
                                          src="images/img_fill_405.svg"
                                          alt="fill405_one"
                                          className="h-[3px] w-1 ml-[-20px] z-[1]"
                                        />
                                      </div>
                                      <Img
                                        src="images/img_fill_53.svg"
                                        alt="fill403_one"
                                        className="h-px mt-[-9px] mr-1.5 z-[1]"
                                      />
                                      <Img src="images/img_fill_53.svg" alt="fill401_one" className="h-px mt-[7px]" />
                                    </div>
                                  </div>
                                  <div className="flex flex-row justify-start w-[9%] gap-0.5 bottom-[10%] left-[31%] m-auto absolute">
                                    <Img src="images/img_fill_80.svg" alt="fill440_one" className="h-px w-0.5" />
                                    <Img src="images/img_fill_80.svg" alt="fill441_one" className="h-px" />
                                  </div>
                                  <Img
                                    src="images/img_fill_80.svg"
                                    alt="fill442_one"
                                    className="h-px bottom-[10%] right-[46%] m-auto absolute"
                                  />
                                  <div className="flex flex-col items-center justify-start w-[18%] right-[16%] top-[31%] m-auto absolute">
                                    <Img
                                      src="images/img_image_493.png"
                                      alt="image493_one"
                                      className="w-full z-[1] object-cover"
                                    />
                                    <Img
                                      src="images/img_image_492.png"
                                      alt="image492_one"
                                      className="w-[95%] object-cover"
                                    />
                                  </div>
                                  <Img
                                    src="images/img_image_501.png"
                                    alt="image501_one"
                                    className="h-6 w-[5%] bottom-[42%] right-[37%] m-auto object-cover absolute"
                                  />
                                  <Img
                                    src="images/img_image_502.png"
                                    alt="image502_one"
                                    className="h-6 w-[10%] bottom-[42%] right-[6%] m-auto object-cover absolute"
                                  />
                                  <div className="flex flex-col items-end justify-start w-[16%] bottom-[34%] right-[16%] m-auto absolute">
                                    <Img
                                      src="images/img_image_509.png"
                                      alt="image509_one"
                                      className="w-[69%] z-[1] object-cover"
                                    />
                                    <div className="flex flex-row justify-end items-center w-full mt-[-5px]">
                                      <Img
                                        src="images/img_image_513.png"
                                        alt="image513_one"
                                        className="w-[29%] z-[1] object-cover"
                                      />
                                      <Img
                                        src="images/img_image_508.png"
                                        alt="image508_one"
                                        className="w-[69%] object-cover"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-start w-[70%] left-0 top-[1%] m-auto absolute">
                          <div className="flex flex-col items-end justify-start w-full z-[1]">
                            <div className="flex flex-row justify-end items-center w-[7%] mr-[26px] z-[1]">
                              <Img src="images/img_fill_160.svg" alt="fill147_one" className="h-[5px] w-1 z-[1]" />
                              <div className="h-9 w-full ml-[-4px] relative">
                                <Img
                                  src="images/img_fill_144.svg"
                                  alt="fill144_one"
                                  className="justify-center h-9 left-0 bottom-0 right-0 top-0 m-auto absolute"
                                />
                                <Img
                                  src="images/img_fill_160.svg"
                                  alt="fill145_one"
                                  className="h-1 w-[3px] right-[31%] top-[17%] m-auto absolute"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row justify-end items-start w-full mt-[-21px]">
                              <div className="flex flex-row justify-end items-start w-[89%]">
                                <div className="flex flex-row justify-end w-[94%]">
                                  <div className="flex flex-row justify-end items-center w-[97%]">
                                    <div className="h-[104px] w-[54%] relative">
                                      <Img
                                        src="images/img_fill_119.svg"
                                        alt="fill119_one"
                                        className="justify-center h-[104px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                      />
                                      <div className="flex flex-row justify-start items-center w-[74%] h-max left-[8%] bottom-0 top-0 m-auto absolute">
                                        <div className="flex flex-row justify-start items-start w-[92%]">
                                          <Img
                                            src="images/img_fill_150.svg"
                                            alt="fill122_one"
                                            className="h-px mt-2 z-[1]"
                                          />
                                          <div className="h-[94px] w-full ml-[-7px] relative">
                                            <Img
                                              src="images/img_fill_120.svg"
                                              alt="fill120_one"
                                              className="justify-center h-[94px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                            />
                                            <div className="flex flex-row justify-start items-start w-[89%] h-max left-[1%] bottom-0 top-0 m-auto absolute">
                                              <div className="flex flex-col items-start justify-start w-[92%]">
                                                <div className="flex flex-col items-start justify-start w-[57%] ml-1.5 gap-[3px] z-[1]">
                                                  <Img
                                                    src="images/img_fill_150.svg"
                                                    alt="fill121_one"
                                                    className="h-3 ml-1"
                                                  />
                                                  <div className="flex flex-row justify-start items-start gap-[7px]">
                                                    <Img
                                                      src="images/img_fill_150.svg"
                                                      alt="fill123_one"
                                                      className="h-[3px] mt-[5px]"
                                                    />
                                                    <div className="h-4 w-[5px] bg-orange-A100" />
                                                  </div>
                                                </div>
                                                <div className="flex flex-col items-end justify-start w-full">
                                                  <div className="flex flex-row justify-end items-start w-[57%] mr-1 z-[1]">
                                                    <Img
                                                      src="images/img_fill_150.svg"
                                                      alt="fill125_one"
                                                      className="h-px mt-2.5"
                                                    />
                                                    <div className="flex flex-col items-center justify-start w-[87%] ml-[-15px]">
                                                      <div className="flex flex-col items-center justify-start w-full">
                                                        <Img
                                                          src="images/img_fill_129.svg"
                                                          alt="fill129_one"
                                                          className="h-11"
                                                        />
                                                        <div className="h-11 w-full mt-[-44px] relative">
                                                          <Img
                                                            src="images/img_group_132.svg"
                                                            alt="image_two"
                                                            className="justify-center h-11 left-0 bottom-0 right-0 top-0 m-auto absolute"
                                                          />
                                                          <Img
                                                            src="images/img_fill_133.svg"
                                                            alt="fill133_one"
                                                            className="justify-center h-[37px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                                          />
                                                          <div className="flex flex-col items-start justify-start w-[70%] gap-px bottom-[22%] right-0 left-0 m-auto absolute">
                                                            <div className="flex flex-row justify-start items-start gap-px">
                                                              <Img
                                                                src="images/img_fill_134.svg"
                                                                alt="fill134_one"
                                                                className="h-0.5"
                                                              />
                                                              <Img
                                                                src="images/img_fill_135.svg"
                                                                alt="fill135_one"
                                                                className="h-2 mt-px"
                                                              />
                                                            </div>
                                                            <Img
                                                              src="images/img_fill_134.svg"
                                                              alt="fill136_one"
                                                              className="h-0.5 ml-px"
                                                            />
                                                            <Img
                                                              src="images/img_fill_135.svg"
                                                              alt="fill137_one"
                                                              className="h-[7px] ml-[9px]"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="flex flex-row justify-end items-start h-[42px] w-[41px] mt-[-28px]">
                                                    <div className="h-[42px] w-[96%] z-[1] relative">
                                                      <Img
                                                        src="images/img_fill_138.svg"
                                                        alt="fill138_one"
                                                        className="justify-center h-[42px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                                      />
                                                      <div className="flex flex-col items-start justify-start w-[62%] top-[9%] right-0 left-0 m-auto absolute">
                                                        <div className="flex flex-row justify-start items-end z-[1]">
                                                          <Img
                                                            src="images/img_fill_146.svg"
                                                            alt="fill140_one"
                                                            className="h-0.5 mb-[5px] z-[1]"
                                                          />
                                                          <Img
                                                            src="images/img_fill_160.svg"
                                                            alt="fill139_one"
                                                            className="h-2 mb-[11px] ml-[-4px]"
                                                          />
                                                          <Img
                                                            src="images/img_fill_160.svg"
                                                            alt="fill141_one"
                                                            className="h-3 mt-1.5 ml-[9px]"
                                                          />
                                                        </div>
                                                        <div className="flex flex-row justify-start items-center mt-[-1px] ml-2 gap-1">
                                                          <Img
                                                            src="images/img_fill_142.svg"
                                                            alt="fill142_one"
                                                            className="h-px"
                                                          />
                                                          <Img
                                                            src="images/img_fill_143.svg"
                                                            alt="fill143_one"
                                                            className="h-3"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <Img
                                                      src="images/img_fill_150.svg"
                                                      alt="fill127_one"
                                                      className="h-px mt-3 ml-[-24px]"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <Img
                                                src="images/img_fill_152.svg"
                                                alt="fill126_one"
                                                className="h-[21px] mt-[30px] ml-[-5px] z-[1]"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <Img
                                          src="images/img_fill_152.svg"
                                          alt="fill128_one"
                                          className="h-[17px] ml-[-5px] z-[1]"
                                        />
                                      </div>
                                    </div>
                                    <Img
                                      src="images/img_fill_165.svg"
                                      alt="fill165_one"
                                      className="h-[194px] ml-[-39px] z-[1]"
                                    />
                                  </div>
                                  <div className="h-[194px] w-[71%] ml-[-97px] z-[1] relative">
                                    <Img
                                      src="images/img_fill_166.svg"
                                      alt="fill166_one"
                                      className="justify-center h-[194px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                    <div className="flex flex-row justify-center items-start w-[87%] top-[6%] right-0 left-0 m-auto absolute">
                                      <Img src="images/img_fill_168.svg" alt="fill168_one" className="h-4 z-[1]" />
                                      <div className="flex flex-col items-center justify-end w-full ml-[-89px] p-[5px] rounded-tl rounded-tr rounded-bl-[3px] rounded-br bg-white-A700_01">
                                        <div className="flex flex-col items-center justify-start w-[98%] mt-[19px] mb-[3px] gap-1">
                                          <div className="flex flex-row justify-start items-center w-full gap-[3px]">
                                            <Img
                                              src="images/img_fill_169.svg"
                                              alt="fill169_one"
                                              className="h-[11px] w-[11px]"
                                            />
                                            <Img src="images/img_fill_170.svg" alt="fill170_one" className="h-2.5" />
                                          </div>
                                          <div className="h-[78px] w-[77px] relative">
                                            <div className="flex flex-col items-start justify-start w-full bottom-0 right-0 left-0 m-auto absolute">
                                              <div className="flex flex-col items-end justify-start w-full">
                                                <div className="flex flex-col items-end justify-start w-full">
                                                  <Img
                                                    src="images/img_fill_180.svg"
                                                    alt="fill180_one"
                                                    className="h-px w-0.5 mr-1 z-[1]"
                                                  />
                                                  <div className="flex flex-row justify-end items-center w-full">
                                                    <div className="flex flex-row justify-end items-center w-[27%]">
                                                      <Img
                                                        src="images/img_fill_169.svg"
                                                        alt="fill171_one"
                                                        className="h-[11px] w-[11px]"
                                                      />
                                                      <div className="flex flex-col items-start justify-start w-[56%] ml-[-1px]">
                                                        <Img
                                                          src="images/img_fill_416.svg"
                                                          alt="fill416_one"
                                                          className="h-[5px]"
                                                        />
                                                        <Img
                                                          src="images/img_fill_418.svg"
                                                          alt="fill418_one"
                                                          className="h-px mt-[-2px] ml-px"
                                                        />
                                                      </div>
                                                    </div>
                                                    <Img
                                                      src="images/img_fill_170.svg"
                                                      alt="fill172_one"
                                                      className="h-2.5 ml-[-5px]"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="flex flex-row justify-end w-2/5 mt-[-4px] mr-[11px]">
                                                  <div className="flex flex-col items-center justify-start w-full">
                                                    <Img
                                                      src="images/img_fill_183.svg"
                                                      alt="fill183_one"
                                                      className="h-[18px]"
                                                    />
                                                    <div className="flex flex-row justify-center w-full mt-[-18px]">
                                                      <div className="flex flex-col items-center justify-start w-full">
                                                        <Img
                                                          src="images/img_fill_184.svg"
                                                          alt="fill184_one"
                                                          className="h-[18px]"
                                                        />
                                                        <div className="h-[18px] w-full mt-[-18px] relative">
                                                          <Img
                                                            src="images/img_group_240.svg"
                                                            alt="image_three"
                                                            className="justify-center h-[18px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                                          />
                                                          <Img
                                                            src="images/img_fill_241.svg"
                                                            alt="fill241_one"
                                                            className="h-[11px] left-[12%] top-[6%] m-auto absolute"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <Img
                                                src="images/img_fill_177.svg"
                                                alt="fill177_one"
                                                className="h-[33px] mt-[-6px] z-[1]"
                                              />
                                            </div>
                                            <div className="flex flex-row justify-end items-start h-[18px] w-[18px] right-[2%] top-0 m-auto absolute">
                                              <Img
                                                src="images/img_fill_398.svg"
                                                alt="fill398_one"
                                                className="h-[7px] w-[7px] mt-[11px] z-[1]"
                                              />
                                              <Img
                                                src="images/img_fill_169.svg"
                                                alt="fill175_one"
                                                className="h-[11px] w-[11px] mb-[7px]"
                                              />
                                            </div>
                                            <Img
                                              src="images/img_fill_177.svg"
                                              alt="fill176_one"
                                              className="h-5 left-0 top-0 m-auto absolute"
                                            />
                                            <div className="flex flex-col items-start justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                                              <div className="flex flex-col items-start justify-start z-[1]">
                                                <Img
                                                  src="images/img_fill_416.svg"
                                                  alt="fill417_one"
                                                  className="h-[5px]"
                                                />
                                                <Img
                                                  src="images/img_fill_418.svg"
                                                  alt="fill419_one"
                                                  className="h-px mt-[-2px] ml-px"
                                                />
                                              </div>
                                              <div className="flex flex-row justify-start items-start w-full mt-[-3px]">
                                                <div className="flex flex-row justify-center items-center w-[19%] mt-0.5 z-[1]">
                                                  <div className="flex flex-col items-end justify-start w-full mt-0.5">
                                                    <Img
                                                      src="images/img_fill_416.svg"
                                                      alt="fill415_one"
                                                      className="h-[5px]"
                                                    />
                                                    <Img
                                                      src="images/img_fill_397.svg"
                                                      alt="fill420_one"
                                                      className="h-0.5 w-[3px] mt-[-3px] mr-px"
                                                    />
                                                  </div>
                                                  <Img
                                                    src="images/img_fill_397.svg"
                                                    alt="fill421_one"
                                                    className="h-[3px] ml-[-3px]"
                                                  />
                                                </div>
                                                <div className="flex flex-row justify-start items-start w-[94%] ml-[-7px]">
                                                  <Img
                                                    src="images/img_fill_414.svg"
                                                    alt="fill414_one"
                                                    className="h-2 mt-1 z-[1]"
                                                  />
                                                  <Img
                                                    src="images/img_fill_181.svg"
                                                    alt="fill181_one"
                                                    className="h-[21px] ml-[-9px]"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                            <Img
                                              src="images/img_fill_398.svg"
                                              alt="fill242_one"
                                              className="h-[18px] w-[18px] right-0 top-[20%] m-auto absolute"
                                            />
                                          </div>
                                          <div className="flex flex-row justify-start items-start w-full gap-0.5">
                                            <Img
                                              src="images/img_fill_169.svg"
                                              alt="fill173_one"
                                              className="h-[11px] w-[11px] mt-1"
                                            />
                                            <div className="h-7 w-[81%] relative">
                                              <Img
                                                src="images/img_fill_177.svg"
                                                alt="fill174_one"
                                                className="h-[23px] bottom-[1%] right-0 left-0 m-auto absolute"
                                              />
                                              <Img
                                                src="images/img_fill_243.svg"
                                                alt="fill244_one"
                                                className="h-[18px] w-[18px] left-0 top-0 m-auto absolute"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-row justify-start items-center w-[37%] gap-[3px] top-[2%] right-0 left-0 m-auto absolute">
                                      <Img src="images/img_fill_179.svg" alt="fill179_one" className="h-0.5 w-0.5" />
                                      <div className="h-px w-[85%] bg-white-A700_01" />
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_fill_181.svg"
                                  alt="fill182_one"
                                  className="h-[47px] mt-[60px] ml-[-9px] z-[1]"
                                />
                              </div>
                              <div className="flex flex-col items-center justify-start h-[31px] w-[31px] mt-[42px] ml-[-11px] z-[1]">
                                <div className="flex flex-col items-center justify-start h-[31px] w-[31px]">
                                  <Img src="images/img_fill_16.svg" alt="fill444_one" className="h-[31px] w-[31px]" />
                                  <div className="h-[31px] w-[31px] mt-[-31px] relative">
                                    <Img
                                      src="images/img_group_447.svg"
                                      alt="image_four"
                                      className="justify-center h-[31px] w-[31px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                    <Img
                                      src="images/img_fill_37.svg"
                                      alt="fill448_one"
                                      className="justify-center h-[13px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-end items-center w-[51%] mt-[-81px] mr-[30px]">
                            <div className="h-2.5 w-[70%] z-[1] bg-blue_gray-200" />
                            <div className="flex flex-row justify-end items-start w-[96%] ml-[-58px]">
                              <div className="flex flex-row justify-end w-[28%] mt-3.5 z-[1]">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="h-[17px] w-full relative">
                                    <Img
                                      src="images/img_fill_400.svg"
                                      alt="fill407_one"
                                      className="justify-center h-[17px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                    <div className="flex flex-col items-start justify-start w-[79%] left-[5%] top-[8%] m-auto absolute">
                                      <div className="flex flex-row justify-center items-start z-[1]">
                                        <Img src="images/img_fill_408.svg" alt="fill408_one" className="h-[11px]" />
                                        <Img
                                          src="images/img_fill_412.svg"
                                          alt="fill412_one"
                                          className="h-px mt-0.5 ml-[-3px]"
                                        />
                                        <Img
                                          src="images/img_fill_413.svg"
                                          alt="fill413_one"
                                          className="h-[3px] w-[3px] mt-[5px] ml-[-3px]"
                                        />
                                      </div>
                                      <div className="flex flex-row justify-start items-center mt-[-2px] ml-[3px] gap-px">
                                        <Img
                                          src="images/img_fill_160.svg"
                                          alt="fill409_one"
                                          className="h-[3px] w-0.5 mb-px"
                                        />
                                        <Img src="images/img_fill_146.svg" alt="fill411_one" className="h-0.5 w-0.5" />
                                      </div>
                                    </div>
                                  </div>
                                  <Img
                                    src="images/img_fill_146.svg"
                                    alt="fill410_one"
                                    className="h-0.5 w-0.5 mt-[-3px] z-[1]"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-row justify-end items-start w-[89%] ml-[-13px]">
                                <Img
                                  src="images/img_fill_331.svg"
                                  alt="fill331_one"
                                  className="h-[59px] w-[60px] mt-2 z-[1]"
                                />
                                <div className="flex flex-col items-center justify-start w-[38%] ml-[-13px]">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <Img src="images/img_fill_245.svg" alt="fill245_one" className="h-[95px]" />
                                    <Img
                                      src="images/img_group_330.svg"
                                      alt="image_five"
                                      className="h-[95px] mt-[-95px]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[49%] h-max left-[20%] bottom-0 top-0 m-auto absolute">
                          <div className="flex flex-row justify-start items-start w-full z-[1]">
                            <div className="flex flex-row justify-start items-start w-[89%]">
                              <div className="flex flex-row justify-start items-center w-[93%]">
                                <div className="h-[162px] w-[89%] rounded-tr rounded-bl-[3px] rounded-tl rounded-br bg-white-A700_01" />
                                <div className="flex flex-row justify-start w-[35%] ml-[-23px]">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <Img src="images/img_fill_424.svg" alt="fill424_one" className="h-[22px]" />
                                    <div className="h-[22px] w-full mt-[-22px] relative">
                                      <Img
                                        src="images/img_group_436.svg"
                                        alt="image_six"
                                        className="justify-center h-[22px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                      />
                                      <Img
                                        src="images/img_fill_418.svg"
                                        alt="fill439_one"
                                        className="h-0.5 right-[1%] top-[14%] m-auto absolute"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Img
                                src="images/img_fill_449.svg"
                                alt="fill449_one"
                                className="h-3.5 mt-[54px] ml-[-1px] z-[1]"
                              />
                            </div>
                            <Img
                              src="images/img_image_482.png"
                              alt="image482_one"
                              className="w-[22%] mt-[49px] ml-[-12px] z-[1] object-cover"
                            />
                          </div>
                          <div className="flex flex-col items-end justify-start w-[53%] mt-[-52px] ml-[19px]">
                            <div className="flex flex-col items-start justify-start w-full z-[1]">
                              <div className="flex flex-row justify-start items-start w-full">
                                <div className="h-[59px] w-[60px] relative">
                                  <Img
                                    src="images/img_group_383.svg"
                                    alt="image_seven"
                                    className="justify-center h-[59px] w-[60px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                  />
                                  <div className="flex flex-col items-end justify-start w-[45%] left-[22%] top-[8%] m-auto absolute">
                                    <Img src="images/img_fill_385.svg" alt="fill385_one" className="h-10 z-[1]" />
                                    <div className="flex flex-col items-start justify-start h-px w-px mt-[-1px] mr-2.5">
                                      <Img
                                        src="images/img_fill_387.svg"
                                        alt="fill387_one"
                                        className="h-px w-px z-[1]"
                                      />
                                      <Img
                                        src="images/img_fill_387.svg"
                                        alt="fill386_one"
                                        className="h-px w-px ml-px"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_fill_384.svg"
                                  alt="fill384_one"
                                  className="h-[3px] ml-[-27px] z-[1]"
                                />
                              </div>
                              <Img
                                src="images/img_fill_455.svg"
                                alt="fill455_one"
                                className="h-[11px] w-[11px] mt-[-3px] ml-[18px] z-[1]"
                              />
                            </div>
                            <div className="flex flex-row justify-end items-start w-[71%] mt-[-36px] mr-[5px]">
                              <Img
                                src="images/img_image_512.png"
                                alt="image512_one"
                                className="w-[48%] mt-[13px] z-[1] object-cover"
                              />
                              <div className="flex flex-row justify-end items-start w-[92%] ml-[-19px]">
                                <Img
                                  src="images/img_image_511.png"
                                  alt="image511_one"
                                  className="w-[46%] mt-[18px] z-[1] object-cover"
                                />
                                <div className="flex flex-row justify-end items-start w-[58%]">
                                  <Img
                                    src="images/img_image_483.png"
                                    alt="image483_one"
                                    className="w-full mt-[11px] z-[1] object-cover"
                                  />
                                  <div className="h-[54px] w-[5px] ml-[-5px] bg-deep_orange-A100" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <div className="flex flex-col items-start justify-start w-[31%] mr-4 z-[1]">
                            <div className="flex flex-col items-start justify-start h-[15px] w-4 z-[1]">
                              <div className="flex flex-row justify-center items-end">
                                <Img src="images/img_fill_423.svg" alt="fill423_one" className="h-[3px] mb-2 z-[1]" />
                                <Img
                                  src="images/img_fill_399.svg"
                                  alt="fill399_one"
                                  className="h-[9px] ml-[-2px] my-px"
                                />
                                <Img src="images/img_fill_51.svg" alt="fill443_one" className="h-px w-0.5 ml-[-3px]" />
                              </div>
                              <Img src="images/img_fill_42.svg" alt="fill392_one" className="h-1 w-1 ml-px" />
                              <div className="flex flex-row justify-center items-center h-px w-px mt-[-3px]">
                                <Img src="images/img_fill_395.svg" alt="fill395_one" className="h-px w-px" />
                                <Img src="images/img_fill_397.svg" alt="fill396_one" className="h-px w-px ml-[-1px]" />
                              </div>
                              <Img src="images/img_fill_179.svg" alt="fill422_one" className="h-px w-px mt-px ml-0.5" />
                            </div>
                            <div className="flex flex-col items-center justify-start w-[44%] mt-[-3px] ml-0.5">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Img src="images/img_fill_390.svg" alt="fill390_one" className="h-3 ml-px z-[1]" />
                                <Img src="images/img_fill_15.svg" alt="fill389_one" className="h-4 mt-[-12px]" />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-full mt-[-7px]">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex flex-row justify-start items-start w-full">
                                  <div className="flex flex-row justify-start items-center w-full">
                                    <div className="flex flex-row justify-start items-start h-[38px] w-[38px]">
                                      <Img
                                        src="images/img_image_488.png"
                                        alt="image488_one"
                                        className="w-[24%] mt-[7px] z-[1] object-cover"
                                      />
                                      <Img
                                        src="images/img_fill_332.svg"
                                        alt="fill332_one"
                                        className="h-[38px] ml-[-3px]"
                                      />
                                    </div>
                                    <Img
                                      src="images/img_image_489.png"
                                      alt="image489_one"
                                      className="w-[19px] ml-[-6px] object-cover"
                                    />
                                  </div>
                                  <Img
                                    src="images/img_image_490.png"
                                    alt="image490_one"
                                    className="w-[39%] mt-[7px] ml-[-19px] object-cover"
                                  />
                                </div>
                                <Img
                                  src="images/img_group_369.svg"
                                  alt="image_eight"
                                  className="h-[38px] mt-[-38px] ml-[5px]"
                                />
                              </div>
                              <Img
                                src="images/img_image_485.png"
                                alt="image485_one"
                                className="w-[37%] mt-[-29px] ml-3 object-cover"
                              />
                            </div>
                            <Img
                              src="images/img_image_484.png"
                              alt="image484_one"
                              className="w-[43%] mt-[-25px] ml-[9px] object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[11%] right-[33%] top-[31%] m-auto absolute">
                          <div className="flex flex-row justify-start items-center">
                            <Img src="images/img_fill_81.svg" alt="fill450_one" className="h-[13px]" />
                            <Img
                              src="images/img_image_481.png"
                              alt="image481_one"
                              className="w-[89%] ml-[-6px] object-cover"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start w-[34%] mt-[-11px] ml-[3px]">
                            <div className="flex flex-row justify-center items-start w-full">
                              <div className="h-[15px] w-full relative">
                                <Img
                                  src="images/img_fill_81.svg"
                                  alt="fill451_one"
                                  className="justify-center h-[15px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                />
                                <Img
                                  src="images/img_fill_51.svg"
                                  alt="fill452_one"
                                  className="h-1 w-1 left-[22%] top-[2%] m-auto absolute"
                                />
                              </div>
                              <Img
                                src="images/img_fill_51.svg"
                                alt="fill453_one"
                                className="h-1 w-1 mt-0.5 ml-[-4px] z-[1]"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[10%] left-[42%] top-[42%] m-auto absolute">
                          <Img
                            src="images/img_image_487.png"
                            alt="image487_one"
                            className="w-full z-[1] object-cover"
                          />
                          <Img
                            src="images/img_image_486.png"
                            alt="image486_one"
                            className="w-full mt-[-3px] object-cover"
                          />
                        </div>
                        <div className="flex flex-col items-end justify-start w-[10%] bottom-[23%] left-[6%] m-auto absolute">
                          <div className="flex flex-col items-center justify-start w-[57%]">
                            <Img
                              src="images/img_image_498.png"
                              alt="image498_one"
                              className="w-[31%] z-[1] object-cover"
                            />
                            <Img
                              src="images/img_image_497.png"
                              alt="image497_one"
                              className="w-full mt-[-10px] object-cover"
                            />
                          </div>
                          <Img
                            src="images/img_image_496.png"
                            alt="image496_one"
                            className="w-full mt-[-15px] object-cover"
                          />
                        </div>
                        <Img
                          src="images/img_image_500.png"
                          alt="image500_one"
                          className="h-5 w-[9%] bottom-[35%] left-[6%] m-auto object-cover absolute"
                        />
                      </div>
                      <Img src="images/img_fill_80.svg" alt="fillsixtytwo" className="h-px w-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
