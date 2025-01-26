import "./MainWeatherBox.css";
import { FaWind } from "react-icons/fa6";
import { MdOutlineWaterDrop } from "react-icons/md";

const MainWeatherBox = (props) => {
  return (
    <>
      {props.placement === "main" ? (
        <div className="main_weather_box">
          <div>
            <h1>
              {props.data.current.temp_c}
              <sup>°</sup>
            </h1>
            <h3>{props.data.current.condition.text}</h3>
          </div>
          <div className="extras">
            <p className="wind_speed">
              <FaWind /> {props.data.current.wind_kph} kmph
            </p>
            <p className="humidity">
              <MdOutlineWaterDrop /> {props.data.current.humidity}%
            </p>
          </div>
        </div>
      ) : (
        <div className="main_weather_box">
          <div className="main_temp">
            <div>
              <h1>
                {props.data.current.temp_c}
                <sup>°</sup>
              </h1>
            </div>
            <div className="extras">
              <p className="wind_speed">
                <FaWind /> {props.data.current.wind_kph} kmph
              </p>
              <p className="humidity">
                <MdOutlineWaterDrop /> {props.data.current.humidity}%
              </p>
            </div>
          </div>
          <p className="weather_feel">
            Feels Like {props.data.current.feelslike_c}
            <sup>°</sup>
          </p>
          <h3>{props.data.current.condition.text}</h3>
        </div>
      )}
    </>
  );
};

export default MainWeatherBox;
