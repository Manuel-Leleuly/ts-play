import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

type RateType = React.FC<{
  rating: number;
}>;

const Rate: RateType = ({ rating }) => {
  const starColor = "f1a20a";
  const starSize = 20;
  return (
    <div className="flex flex-row justify-start items-center mb-6.5">
      <StarRatingComponent
        name="movie-rating"
        value={rating}
        editing={false}
        starColor="#f1a20a"
        renderStarIcon={(index, value) => {
          return (
            <div className="mr-1">
              {index <= value ? (
                <FaStar color={starColor} size={starSize} />
              ) : (
                <FaRegStar color={starColor} size={starSize} />
              )}
            </div>
          );
        }}
        renderStarIconHalf={() => (
          <div className="mr-1">
            <FaStarHalfAlt color={starColor} size={starSize} />
          </div>
        )}
      />
      <p className="ml-5.5">{rating}</p>
    </div>
  );
};
export default Rate;
