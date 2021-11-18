import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navlinks">
        {props.routes.map((route, index) => (
          <NavLink key={index} to={route.url}>
            {route.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
