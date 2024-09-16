import React, { FC } from "react";
import rightImgPng from "@/images/our_feature_trns.png";
import Image, { StaticImageData } from "next/image";
import Badge from "@/shared/Badge";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = rightImgPng,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <Image src={rightImg} alt="" />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          BENnefits
        </span>
        <h2 className="font-semibold text-4xl mt-5">Easy service </h2>

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge name="Convenience" />
            <span className="block text-xl font-semibold">
              Easy service appointment
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              With find fast and easy book feature, get convnient service experience at home
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name="Care" />
            <span className="block text-xl font-semibold">
              Pickup & drop service
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
            Get rid of dropping & picking bike to service centers & spend time with family
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="red" name="Cost" />
            <span className="block text-xl font-semibold">
              Easy on pocket
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Service offers & discounts with extra benefits at online payment
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="red" name="Customer Satisfaction" />
            <span className="block text-xl font-semibold">
              Guarantee Satisfaction
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Guarantee satisfaction or your next service is free.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
