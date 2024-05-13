import { useState } from "react";
import { NavLink } from "react-router-dom";

import menu from '../assets/menu.png';
import close from '../assets/close.png';

const Navbar = () => {
  const [toggle, setToggle]= useState(false);
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white flex justify-center items-center font-bold shadow-md">
        <p className="blue-gradient_text">RT</p>
      </NavLink>
      <nav className="hidden sm:flex text-lg gap-7 font-medium">
        <NavLink 
          to="/about" className={({ isActive }) => isActive ? "text-orange-500 hover:font-semibold" : "text-black-500 hover:font-semibold" } >
          About
        </NavLink>
        <NavLink to="/experience" 
          className={({ isActive }) => isActive ? "text-orange-500 hover:font-semibold" : "text-black-500 hover:font-semibold" } >
          Experience
        </NavLink>
        <NavLink to="/projects" 
          className={({ isActive }) => isActive ? "text-orange-500 hover:font-semibold" : "text-black-500 hover:font-semibold" } >
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
          <div className={`${!toggle ? 'hidden': 'flex'} p-4 absolute orange-gradient top-10 right-0 mx-2 my-3 min-w-[140px] z-10 rounded-xl backdrop-blur-lg`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              <li
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <NavLink 
                  to="/about" className={({ isActive }) => isActive ? "text-orange-500 hover:font-semibold" : "text-black-500 hover:font-semibold" } >
                  About
                </NavLink>
              </li>
              <li
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <NavLink to="/experience" 
                  className={({ isActive }) => isActive ? "text-orange-500 hover:font-semibold" : "text-black-500 hover:font-semibold" } >
                  Experience
                </NavLink>
              </li>
              <li
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <NavLink 
                  to="/projects" 
                  className={({ isActive }) => isActive ? "text-orange-500 hover:font-semibold" : "text-black-500 hover:font-semibold" } >
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
      </nav>
    </header>
  );
}

export default Navbar;