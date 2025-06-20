import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "/assets/images/madrid-logo.png"; // Apne logo ka sahi path yahan daalein

// Pehle tailwind.config.js mein yeh colors add karein, agar nahi hain toh
// theme: {
//   extend: {
//     colors: {
//       'pharma-blue': '#2557a7',      // Primary Blue
//       'pharma-green': '#008e5b',    // Primary Green
//       'pharma-darkBlue': '#1E3A8A', // TopBar Blue
//     },
//   },
// }

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about", hasDropdown: true },
    { label: "Products", path: "/products", hasDropdown: true },
    { label: "Events", path: "/events" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    // Step 1: `header` tag ko `bg-white` aur `shadow` diya gaya hai
    <header className="bg-white shadow-sm sticky top-10 z-40"> {/* top-10 TopBar ki height ke liye hai, adjust kar sakte hain */}
      
      {/* 
        Step 2: YEH SABSE ZAROORI HAI
        Ek container div banaya gaya hai jo `TopBar` ke container se match karta hai.
        `container mx-auto` content ko center mein rakhta hai.
        `px-4` padding deta hai taaki content screen ke kinaron se na chipke.
      */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-12 w-auto" src={logo} alt="Madrid Pharma Logo" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          {/* `hidden lg:flex` - Yeh links sirf large screens par dikhenge */}
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
          {/* `hidden lg:block` - Yeh button sirf large screens par dikhega */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="font-bold text-white bg-gradient-to-r from-pharma-blue to-pharma-green hover:opacity-90 transition-opacity"
            >
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          {/* `lg:hidden` - Yeh button sirf small screens par dikhega */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6 text-gray-700" />
            </Button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
