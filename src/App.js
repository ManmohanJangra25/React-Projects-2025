import { useEffect, useState } from "react";
import "./App.css";
import FilterBar from "./components/filters/FilterBar";
import HeroSlider from "./components/heroSlider/HeroSlider";
import MovieBox from "./components/movie_box/MovieBox";
import { fetchData } from "./components/store/fetchData";

function App() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await fetchData("now_playing");
        setApiData(data);
        setLoading(true);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchMovieData();
  }, []);

  return (
    <>
      {/* <Header /> */}
      {/* <!-- end header --> */}

      {/* <!-- home --> */}
      {!loading ? <p style={{ color: "white" }}>LOADING</p> : <HeroSlider />}
      {/* <!-- end home --> */}

      {/* <!-- catalog --> */}
      <div className="catalog">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <FilterBar />

              <div className="row row--grid">
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  {!loading ? (
                    <p style={{ color: "white" }}>LOADING</p>
                  ) : (
                    <MovieBox />
                  )}
                </div>
                {/* <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <MovieBox />
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <MovieBox />
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <MovieBox />
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <MovieBox />
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <MovieBox />
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <MovieBox />
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <MovieBox />
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <MovieBox />
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <MovieBox />
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <MovieBox />
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <MovieBox />
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <MovieBox />
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <MovieBox />
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <MovieBox />
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <MovieBox />
                </div> */}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <button className="catalog__more" type="button">
                Load more
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end catalog --> */}

      {/* <!-- subscriptions --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section__title">Subscriptions</h2>
            </div>

            <div className="col-12">
              <div className="section__carousel-wrap">
                <div
                  className="section__carousel owl-carousel"
                  id="subscriptions"
                >
                  <MovieBox />

                  <MovieBox />

                  <MovieBox />

                  <MovieBox />

                  <MovieBox />

                  <MovieBox />
                  <MovieBox />
                  <MovieBox />
                  <MovieBox />
                  <MovieBox />
                </div>

                <button
                  className="section__nav section__nav--cards section__nav--prev"
                  data-nav="#subscriptions"
                  type="button"
                >
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.25 7.72559L16.25 7.72559"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.2998 1.70124L1.2498 7.72524L7.2998 13.7502"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="section__nav section__nav--cards section__nav--next"
                  data-nav="#subscriptions"
                  type="button"
                >
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.75 7.72559L0.75 7.72559"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.7002 1.70124L15.7502 7.72524L9.7002 13.7502"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end subscriptions -->

	<!-- plan --> */}
      <section className="section section--pb0 section--gradient">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section__title">Select Your Plan</h2>
              <p className="section__text">
                No hidden fees, equipment rentals, or installation appointments.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 col-xl-4 order-md-2 order-xl-1">
              <div className="plan">
                <h3 className="plan__title">Regular</h3>
                <ul className="plan__list">
                  <li className="green">
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.43994 6.95981L6.77477 12.2924L17.4399 1.62723"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    FlixTV Originals
                  </li>
                  <li className="green">
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.43994 6.95981L6.77477 12.2924L17.4399 1.62723"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    Switch plans or cancel anytime
                  </li>
                  <li className="red">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.596 1.59982L1.60938 17.5865"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.601 17.5961L1.60101 1.5928"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    Stream 65+ top Live
                  </li>
                  <li className="red">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.596 1.59982L1.60938 17.5865"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.601 17.5961L1.60101 1.5928"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    TV channels
                  </li>
                </ul>
                <span className="plan__price">
                  $11.99<span>/month</span>
                </span>
                <button className="plan__btn" type="button">
                  Select plan
                </button>
              </div>
            </div>

            <div className="col-12 col-xl-4 order-md-1 order-xl-2">
              <div className="plan plan--best">
                <h3 className="plan__title">Premium</h3>
                <ul className="plan__list">
                  <li className="green">
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.43994 6.95981L6.77477 12.2924L17.4399 1.62723"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    FlixTV Originals
                  </li>
                  <li className="green">
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.43994 6.95981L6.77477 12.2924L17.4399 1.62723"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    Switch plans or cancel anytime
                  </li>
                  <li className="green">
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.43994 6.95981L6.77477 12.2924L17.4399 1.62723"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    Stream 65+ top Live
                  </li>
                  <li className="red">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.596 1.59982L1.60938 17.5865"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.601 17.5961L1.60101 1.5928"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    TV channels
                  </li>
                </ul>
                <span className="plan__price">
                  $34.99<span>/month</span>
                </span>
                <button className="plan__btn" type="button">
                  Select plan
                </button>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4 order-md-3 order-xl-3">
              <div className="plan">
                <h3 className="plan__title">Premium + TV channels</h3>
                <ul className="plan__list">
                  <li className="green">
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.43994 6.95981L6.77477 12.2924L17.4399 1.62723"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    FlixTV Originals
                  </li>
                  <li className="green">
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.43994 6.95981L6.77477 12.2924L17.4399 1.62723"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    Switch plans or cancel anytime
                  </li>
                  <li className="green">
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.43994 6.95981L6.77477 12.2924L17.4399 1.62723"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    Stream 65+ top Live
                  </li>
                  <li className="green">
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.43994 6.95981L6.77477 12.2924L17.4399 1.62723"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    TV channels
                  </li>
                </ul>
                <span className="plan__price">
                  $49.99<span>/month</span>
                </span>
                <button className="plan__btn" type="button">
                  Select plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end plan -->

	<!-- videos --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section__title">
                <b>Flix</b>TV Originals
              </h2>
              <p className="section__text">
                Celebrity interviews, trending entertainment stories, and expert
                analysis.
              </p>
            </div>

            <div className="col-12">
              <div className="section__carousel-wrap">
                <div className="section__interview owl-carousel" id="flixtv">
                  <div className="interview">
                    <a href="interview.html" className="interview__cover">
                      <img src="./assets/img/interview/1.jpg" alt="" />
                      <span>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>{" "}
                        5:33
                      </span>
                    </a>
                    <h3 className="interview__title">
                      <a href="interview.html">
                        What Was Ben Affleck Planning for His Unmade 'Batman'
                        Film?
                      </a>
                    </h3>
                  </div>

                  <div className="interview">
                    <a href="interview.html" className="interview__cover">
                      <img src="./assets/img/interview/2.jpg" alt="" />
                      <span>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>{" "}
                        2:41
                      </span>
                    </a>
                    <h3 className="interview__title">
                      <a href="interview.html">
                        A Guide to the Work of Ryan Murphy
                      </a>
                    </h3>
                  </div>

                  <div className="interview">
                    <a href="interview.html" className="interview__cover">
                      <img src="./assets/img/interview/3.jpg" alt="" />
                      <span>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>{" "}
                        7:19
                      </span>
                    </a>
                    <h3 className="interview__title">
                      <a href="interview.html">
                        Gugu Mbatha-Raw Shares the Films That Give Her Hope
                      </a>
                    </h3>
                  </div>

                  <div className="interview">
                    <a href="interview.html" className="interview__cover">
                      <img src="./assets/img/interview/4.jpg" alt="" />
                      <span>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>{" "}
                        4:58
                      </span>
                    </a>
                    <h3 className="interview__title">
                      <a href="interview.html">
                        Best of 2020: Top Trending Moments
                      </a>
                    </h3>
                  </div>

                  <div className="interview">
                    <a href="interview.html" className="interview__cover">
                      <img src="./assets/img/interview/5.jpg" alt="" />
                      <span>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>{" "}
                        3:52
                      </span>
                    </a>
                    <h3 className="interview__title">
                      <a href="interview.html">
                        How Movies and TV Shaped Our Perception of HIV/AIDS
                      </a>
                    </h3>
                  </div>

                  <div className="interview">
                    <a href="interview.html" className="interview__cover">
                      <img src="./assets/img/interview/6.jpg" alt="" />
                      <span>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>{" "}
                        3:52
                      </span>
                    </a>
                    <h3 className="interview__title">
                      <a href="interview.html">American Gods</a>
                    </h3>
                  </div>
                </div>

                <button
                  className="section__nav section__nav--interview section__nav--prev"
                  data-nav="#flixtv"
                  type="button"
                >
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.25 7.72559L16.25 7.72559"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.2998 1.70124L1.2498 7.72524L7.2998 13.7502"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="section__nav section__nav--interview section__nav--next"
                  data-nav="#flixtv"
                  type="button"
                >
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.75 7.72559L0.75 7.72559"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.7002 1.70124L15.7502 7.72524L9.7002 13.7502"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
