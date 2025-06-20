import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "/assets/images/madrid-logo.png"; // Apne logo ka sahi path yahan daalein
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about", hasDropdown: true },
    { label: "Products", path: "/products", hasDropdown: true },
    { label: "Events", path: "/events" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    // Sticky header jo TopBar ke neeche rahega
    <header className="bg-white shadow-md sticky top-10 z-40">
      {/* 
        --- YEH HAI SABSE ZAROORI BADLAV ---
        Outer div jo poori width leta hai aur mobile par padding deta hai.
        Iske andar ka `container mx-auto` TopBar ke container se match karta hai.
      */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-12 w-auto" src={logo} alt="Madrid Pharma Logo" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-pharma-blue"
                    : "text-gray-600 hover:text-pharma-blue"
                }`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
              </Link>
            ))}
          </nav>

          {/* Desktop Get Started Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="font-bold text-white bg-gradient-to-r from-pharma-blue to-pharma-green hover:opacity-90 transition-opacity"
            >
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </Button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      {/* Yeh tabhi dikhega jab isMenuOpen true hoga */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()} // Menu par click karne se band na ho
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-bold">Menu</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex justify-between items-center text-lg font-medium text-gray-700 hover:text-pharma-blue py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-5 h-5" />}
                </Link>
              ))}
              <Button
                asChild
                className="w-full mt-6 font-bold text-white bg-gradient-to-r from-pharma-blue to-pharma-green"
              >
                <Link to="/get-started" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
