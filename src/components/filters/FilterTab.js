const FilterTab = () => {
  return (
    <div className="slider-radio">
      <input type="radio" name="grade" id="featured" defaultChecked="checked" />
      <label htmlFor="featured">Featured</label>
      <input type="radio" name="grade" id="popular" />
      <label htmlFor="popular">Popular</label>
      <input type="radio" name="grade" id="newest" />
      <label htmlFor="newest">Newest</label>
    </div>
  );
};

export default FilterTab;
