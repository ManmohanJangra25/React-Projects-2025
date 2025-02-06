const FilterDropDown = (props) => {
  return (
    <select className="catalog__select" name={props.filterName}>
      {props.filterData.map((data) => (
        <option key={data} value={data}>
          {data}
        </option>
      ))}
    </select>
  );
};

export default FilterDropDown;
