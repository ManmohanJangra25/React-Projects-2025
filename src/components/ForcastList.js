import "./ForcastList.css";

const ForcastList = (props) => {
  const { data, active, onClick } = props;
  if (!data || !data.day) {
    return null; // Render nothing if data is invalid
  }

  const handleClick = () => {
    props.sendConditionTextToParent(data.day.condition.text);
  };

  return (
    <div
      className={`weather_list_item ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      <p className="weather_list_date">
        {data.date.slice(5).split("-").reverse().join("-")}
      </p>
      <p className="weather_list_temp">
        {data.day.avgtemp_c}
        <sup>°</sup>
      </p>
      <p className="weather_list_type">{data.day.condition.text}</p>
    </div>
  );
};

export default ForcastList;
