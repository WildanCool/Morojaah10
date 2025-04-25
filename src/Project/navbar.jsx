import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoCiwidey from "../Project/asset/logoCiwidey.png";

const Navbar = () => {
  return (
    <header className="bg-[#FFF6DA] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoCiwidey}
            alt="Logo Kawah Putih"
            className="w-14 sm:w-16"
          />
        </Link>

        {/* Menu */}
        <nav className="space-x-4 text-sm sm:text-base">
          {["/", "/detail", "/kontak"].map((path, index) => {
            const labels = ["Beranda", "Detail Wisata", "Kontak"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-black font-semibold" : "text-black"
                  } relative transition duration-300 hover:text-[#20bcb2] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#20bcb2] after:transition-all after:duration-300`
                }
              >
                {labels[index]}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
