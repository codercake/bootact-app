import React from "react";
import { Button, Img, SelectBox, Text } from "./..";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex flex-col items-center justify-center w-[74%] mt-[51px] mx-[189px]">
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
          <div className="flex flex-row justify-start w-[28%] gap-4">
            <SelectBox
              indicator={
                <Img src="images/img_baselinearrowdropdown24px_black_900.svg" alt="baseline-arrow_drop_down-24px" />
              }
              name="writeapost"
              placeholder="Write a Post"
              options={dropDownOptions}
              className="w-[47%] gap-px font-medium"
            />
            <Button
              color="white_A700"
              size="lg"
              leftIcon={<Img src="images/img_outlineexittoapp24px.svg" alt="outline-exit_to_app-24px" />}
              className="gap-1.5 !text-gray-700 font-medium border-gray-500 border border-solid min-w-[134px]"
            >
              Leave Group
            </Button>
          </div>
        </div>
        <div className="h-px w-full mt-3 bg-gray-300" />
        <div className="h-px w-[9%] mt-[-1px] bg-black-900" />
      </div>
    </header>
  );
}
