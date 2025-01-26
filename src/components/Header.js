import "./Header.css";

const Header = (props) => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "." + mm + "." + yyyy;

  return (
    <>
      {props.placement === "main" ? (
        <div className="header">
          <div className="app_name">Welcome</div>
          <div className="app_date">{formattedToday}</div>
        </div>
      ) : (
        <div className="header">
          <div className="app_greeting">Good Morning</div>
        </div>
      )}
    </>
  );
};

export default Header;
