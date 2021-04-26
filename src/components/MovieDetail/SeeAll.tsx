import React from "react";
import { SetNumber } from "../../shared/Types";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

type SeeAllType = React.FC<{
  filter: number;
  setFilter: SetNumber;
  page: number;
  setPage: SetNumber;
  isLoading: boolean;
  totalPages: number;
}>;

const SeeAll: SeeAllType = (props) => {
  const { filter, setFilter, page, setPage, isLoading, totalPages } = props;
  const handleOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (filter < 20) {
      return setFilter(20);
    }
    if (page < totalPages) {
      setFilter(filter + 20);
      setPage(page + 1);
    }
  };

  return (
    <button
      className={`border border-black dark:border-white ${
        page === totalPages ? "hidden" : "block"
      } rounded py-3 px-6`}
      onClick={(e) => handleOnClick(e)}
    >
      <div className="w-full flex flex-row justify-between items-center">
        {isLoading ? (
          <h2 className="text-lg font-medium mr-3.5">loading...</h2>
        ) : (
          <h2 className="text-lg font-medium mr-3.5">see more</h2>
        )}
        <HiOutlineChevronDoubleRight />
      </div>
    </button>
  );
};
export default SeeAll;
