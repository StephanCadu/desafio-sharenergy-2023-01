import React, { FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";
import sharenergylogo from '../images/sharenergy.png';

interface NavProps {}
 
const Nav: FunctionComponent<NavProps> = () => {
  const { pathname } = useLocation();

  return (
    <div className="nav">
      <img src={ sharenergylogo } alt="Sharenergy" className="navlogo" />

      <nav className="navLinks">
        <Link to="/" className={ pathname === '/' ? 'activeLink' : '' }>Users</Link>
        <Link to="/cats" className={ pathname.includes('/cats') ? 'activeLink' : '' }>Cats</Link>
        <Link to="/dogs" className={ pathname.includes('/dogs') ? 'activeLink' : '' }>Dogs</Link>
        <Link to="/clients" className={ pathname.includes('/clients') ? 'activeLink' : '' }>Clients</Link>
      </nav>
    </div>
  );
}
 
export default Nav;