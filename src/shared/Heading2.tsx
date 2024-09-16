import React from "react";
import { ReactNode } from "react";

export interface Heading2Props {
  heading?: ReactNode;
  subHeading?: ReactNode;
  className?: string;
}

const Heading2: React.FC<Heading2Props> = ({
  className = "",
  heading = "Bike service centers, Banglore",
  subHeading,
}) => {
  return (
    <div className={`mb-12 lg:mb-16 ${className}`}>
      <h2 className="text-4xl font-semibold">{heading}</h2>
      {subHeading ? (
        subHeading
      ) : (
        <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
          In Bangalore, there are around 8 major bike brands available, covering a wide range of both petrol and electric bikes. The city also hosts a significant network of over 200 authorized bike service centers, providing convenient access to service and maintenance for different brands.
          <span className="mx-2">·</span>
          Lets find the best nearest service center for your bike with reviews, ratings and distance.
          <span className="mx-2">·</span> Get the best deals at nearest bike service centers and discounts from Trego.
        </span>
      )}
    </div>
  );
};

export default Heading2;
