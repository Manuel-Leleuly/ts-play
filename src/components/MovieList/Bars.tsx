import React from "react";

type BarsType = React.FC<{
  keyValue: number;
  carouselIndex: number;
}>;

const Bars: BarsType = ({ keyValue, carouselIndex }) => {
  const bar = keyValue === carouselIndex ? `bar` : ``;
  return (
    <div
      className={`w-5 h-1 bg-accel-carousel-not-active ${bar} mr-2 relative`}
    ></div>
  );
};
export default Bars;
