import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h1>Seuss Treasury</h1>

      <div>
        <NavLink to="/books">Books</NavLink>
        {" | "}
        <NavLink to="/quotes">Quotes</NavLink>
      </div>
    </nav>
  );
}

export default Nav;