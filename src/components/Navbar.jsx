import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Recipe Finder</h2>
      <Link to="/">Home</Link> | <Link to="/meals">Meals</Link>
      <hr />
    </nav>
  );
}

export default Navbar;
