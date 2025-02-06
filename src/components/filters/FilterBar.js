import { genres, years } from "./FilterArrays";
import FilterDropDown from "./FilterDropDown";
import FilterTab from "./FilterTab";

const FilterBar = () => {
  return (
    <div className="catalog__nav">
      <div className="catalog__select-wrap">
        <FilterDropDown filterName="genres" filterData={genres} />
        <FilterDropDown filterName="years" filterData={years} />
      </div>

      <FilterTab />
    </div>
  );
};

export default FilterBar;
