const Header = () => {
  return (
    <header
      style={{
        color: "white",
        display: "flex",
        gap: "30px",
        backgroundColor: "#333",
        height: "100px",
      }}
    >
      <img
        src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102010/new_balance.gif?itok=0Y_RkIur"
        alt="logo"
      ></img>
      <div>
        <ul className="menu">
          <li>Name</li>
          <li>Service</li>
          <li>About</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
