import { useEffect, useState } from "react";
import "./App.css";
import ForcastList from "./components/ForcastList";
import Header from "./components/Header";
import MainWeatherBox from "./components/MainWeatherBox";
import { fetchData } from "./components/FetchWeather";
// import { TiWeatherCloudy } from "react-icons/ti";
// import { TiWeatherDownpour } from "react-icons/ti";
// import { TiWeatherNight } from "react-icons/ti";
// import { TiWeatherPartlySunny } from "react-icons/ti";
// import { TiWeatherShower } from "react-icons/ti";
// import { TiWeatherSnow } from "react-icons/ti";
// import { TiWeatherStormy } from "react-icons/ti";
// import { TiWeatherSunny } from "react-icons/ti";
// import { TiWeatherWindy } from "react-icons/ti";
// import { FaWind } from "react-icons/fa6";

function App(props) {
  const [data, setData] = useState(null);
  const [conditionText, setConditionText] = useState(null);
  const [conditionIndex, setConditionIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherData = await fetchData();
        setData(weatherData);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  const handleConditionText = (data) => {
    setConditionText(data);
    console.log(data);
  };
  const handleListClick = (index) => {
    setConditionIndex(index);
  };

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (!data) {
    return <h3>Unable to fetch weather data.</h3>;
  }

  return (
    <>
      <div
        className="main"
        data-theme={
          !conditionText ? data.current.condition.text : conditionText
        }
      >
        <div className="main_body">
          <div className="left_body">
            <div className="left_content">
              <Header placement="main" />
              <div className="left_inner_content">
                <MainWeatherBox placement="main" data={data} />
                <div className="weather_list">
                  {data.forecast.forecastday.map((data, index) => {
                    return (
                      <ForcastList
                        key={index}
                        active={index === conditionIndex}
                        indexNum={index}
                        data={data}
                        sendConditionTextToParent={handleConditionText}
                        onClick={() => handleListClick(index)}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <aside className="right_body">
            <Header placement="sidebar" />
            <div className="right_inner_content">
              <div className="app_time">12:27 PM</div>
              <MainWeatherBox placement="sidebar" data={data} />

              <div className="hourly_weather">
                <p className="hourly_forcast">Hourly Forcast</p>
                <div className="weather_list">
                  {data.forecast.forecastday.map((data, index) => {
                    return (
                      <ForcastList
                        key={data.date_epoch}
                        active={index === 0}
                        data={data}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default App;
