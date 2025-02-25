"use client";

import { useState } from "react";
import { BsHandbagFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

function Navbar(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      <nav
        className={
          menuOpen
            ? `z-20 flex h-[10%] w-full items-center md:justify-between md:px-8`
            : `z-0 flex h-[10%] w-full items-center justify-around bg-transparent md:justify-between md:px-8`
        }
      >
        <div>
          <p className="text-2xl font-semibold text-white">Panto</p>
        </div>
        <div className="flex items-center gap-14 md:hidden">
          <a
            href="#experiences"
            className="text-base font-light text-white hover:text-amber hover:transition-colors"
          >
            Furniture
          </a>
          <a
            href="#sellingProducts"
            className="text-base font-light text-white hover:text-amber hover:transition-colors"
          >
            Shop
          </a>
          <a
            href="#whyUs"
            className="text-base font-light text-white hover:text-amber hover:transition-colors"
          >
            About Us
          </a>
          <a
            href="#footer"
            className="text-base font-light text-white hover:text-amber hover:transition-colors"
          >
            Contact
          </a>
        </div>
        <div className="hidden transition-all md:flex">
          {menuOpen ? (
            <FaTimes
              className="text-3xl font-light text-white hover:text-amber hover:transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          ) : (
            <HiBars3BottomRight
              className="text-3xl font-light text-white hover:text-amber hover:transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          )}
        </div>
        <div className="hidden">
          <BsHandbagFill className="text-2xl text-white " />
        </div>
      </nav>
      {menuOpen && (
        <div
          className="fixed z-10 flex h-screen w-screen items-center justify-center"
          onClick={toggleMenu}
        >
          <div className="flex h-full w-full flex-col items-center  justify-center rounded-lg bg-obsidian">
            <a
              href="#experiences"
              className="mb-2 block text-center text-xl font-medium text-white hover:text-amber"
            >
              Furniture
            </a>
            <a
              href="#sellingProducts"
              className="mb-2 block text-center text-xl font-medium text-white hover:text-amber"
            >
              Shop
            </a>
            <a
              href="#whyUs"
              className="mb-2 block text-center text-xl font-medium text-white hover:text-amber"
            >
              About Us
            </a>
            <a
              href="#footer"
              className="mb-2 block text-center text-xl font-medium text-white hover:text-amber"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
