import "./navbar.css";
import logo from "../../assets/book-logo.png";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
