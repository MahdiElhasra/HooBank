import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex justify-between items-center py-6 navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className=" list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => {
          return (
            <li
              className={`text-white  font-normal ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }  cursor-pointer text-[16px]`}
              key={nav.id}
            >
              <a className="font-poppins" href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          className="w-[28px] h-[28px] cursor-pointer object-fit"
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className=" list-none  flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => {
              return (
                <li
                  className={`text-white  font-normal ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  }  cursor-pointer text-[16px]`}
                  key={nav.id}
                >
                  <a className="font-poppins" href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
