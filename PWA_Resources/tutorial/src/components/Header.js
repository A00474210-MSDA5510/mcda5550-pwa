import logo from "../assets/smu-logo.png";

export const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="SMU Logo" width="75px" />
      <h1>Students List</h1>
    </div>
  );
};
