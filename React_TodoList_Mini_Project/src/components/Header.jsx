import "./Header.css";
const Header = () => {

  const today = new Date().toDateString();

  return (
    <div className="Header">
      <h3>오늘은🗓️</h3>
      <h1>
        {today}
      </h1>
    </div>
  )
};

export default Header;