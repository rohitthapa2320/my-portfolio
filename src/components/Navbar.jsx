import { useState } from "react";
import { NavLink } from "react-router-dom";

import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

const Navbar = () => {
  const [toggle, setToggle]= useState(false);
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white flex justify-center items-center font-bold shadow-md">
        <p className="blue-gradient_text">RT</p>
      </NavLink>
      <nav className="hidden sm:flex text-lg gap-7 font-medium">
        <NavLink 
          to="/about" className={({ isActive }) => isActive ? "text-blue-500 hover:font-semibold" : "text-black-500 hover:font-semibold" } >
          About
        </NavLink>
        <NavLink to="/experience" 
          className={({ isActive }) => isActive ? "text-blue-500 hover:font-semibold" : "text-black-500 hover:font-semibold" } >
          Experience
        </NavLink>
        <NavLink to="/projects" 
          className={({ isActive }) => isActive ? "text-blue-500 hover:font-semibold" : "text-black-500 hover:font-semibold" } >
          Projects
        </NavLink>
      </nav>
      <nav className="sm:hidden flex flex-1 justify-end items-center">
          <img 
          src={toggle ? close: menu} 
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
          />
      </nav>
    </header>
  );
}

export default Navbar;