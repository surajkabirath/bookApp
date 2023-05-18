import "./navbar.css";
const Navbar = () => {

  return (
    <nav>
      <ul>
        <li className="links active">
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Products</a>
        </li>
        <li>
          <a href="">Tools and API</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">Help</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Blogs</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
