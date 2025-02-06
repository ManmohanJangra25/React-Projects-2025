import HeroSliderItem from "./HeroSliderItem";

const HeroSlider = () => {
  return (
    <div className="home home--static">
      <div className="home__carousel owl-carousel" id="flixtv-hero">
        <HeroSliderItem />
        <HeroSliderItem />
        <HeroSliderItem />
        <HeroSliderItem />
        <HeroSliderItem />
        <HeroSliderItem />
        <HeroSliderItem />
        <HeroSliderItem />
      </div>

      <button
        className="home__nav home__nav--prev"
        data-nav="#flixtv-hero"
        type="button"
      ></button>
      <button
        className="home__nav home__nav--next"
        data-nav="#flixtv-hero"
        type="button"
      ></button>
    </div>
  );
};

export default HeroSlider;
