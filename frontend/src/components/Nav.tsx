import React, { FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";
import sharenergylogo from '../images/sharenergy.png';

interface NavProps {}
 
const Nav: FunctionComponent<NavProps> = () => {
  const { pathname } = useLocation();

  return (
    <div className=" h-16 w-full flex items-center justify-between">
      <img src={ sharenergylogo } alt="Sharenergy" className=" h-14" />

      <nav className=" flex h-full w-1/3 items-center justify-around">
        <Link to="/" className={ pathname === '/' ? 'activeLink' : '' }>Users</Link>
        <Link to="/cats" className={ pathname.includes('/cats') ? 'activeLink' : '' }>Cats</Link>
        <Link to="/dogs" className={ pathname.includes('/dogs') ? 'activeLink' : '' }>Dogs</Link>
        <Link to="/clients" className={ pathname.includes('/clients') ? 'activeLink' : '' }>Clients</Link>
      </nav>
    </div>
  );
}
 
export default Nav;