import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Briefcase,
  Users,
  ShieldCheck,
  ShoppingBag,
  Pill,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "../logo1.png";

// Helper function to create URL-friendly slugs from product names
const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

// ===============================================
// START: SIRF SLUG VALUES KO UPDATE KIYA GAYA HAI
// ===============================================
const productsData = [
  { name: "Fladecort 6", slug: createSlug("Fladecort 6") },
  { name: "Linzocast 600", slug: createSlug("Linzocast 600") },
  { name: "Livofolate", slug: createSlug("Livofolate") },
  { name: "Livozorb XT Syp", slug: createSlug("Livozorb XT Syp") },
  { name: "Livozorb XT", slug: createSlug("Livozorb XT") },
  { name: "Luxbone Fem", slug: createSlug("Luxbone Fem") },
  { name: "Luxbone", slug: createSlug("Luxbone") },
  { name: "Pandoride DSR", slug: createSlug("Pandoride DSR") },
];
// ===============================================
// END: SLUG UPDATE
// ===============================================

// Dynamically create the product navigation items
const productNavItems = productsData.map((product) => ({
  href: `/products/${product.slug}`,
  label: product.name,
  subtitle: "View Details",
  icon: Pill,
}));

// --- NAVIGATION STRUCTURE ---
interface NavItem {
  href: string;
  label: string;
  subtitle?: string;
  icon?: React.ComponentType<any>;
}

interface NavLink {
  href?: string;
  label: string;
  dropdown?: boolean;
  activeCheckPaths?: string[];
  items?: NavItem[];
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  {
    label: "About Us",
    dropdown: true,
    activeCheckPaths: ["/about", "/vision-mission", "/quality"],
    items: [
      {
        href: "/about",
        label: "About Us",
        subtitle: "Our story",
        icon: Briefcase,
      },
      {
        href: "/vision-mission",
        label: "Vision & Mission",
        subtitle: "Our goals",
        icon: Users,
      },
      {
        href: "/quality",
        label: "Quality Assurance",
        subtitle: "Our standards",
        icon: ShieldCheck,
      },
    ],
  },
  {
    label: "Products",
    dropdown: true,
    activeCheckPaths: ["/products"],
    items: [
      {
        href: "/products",
        label: "All Products",
        subtitle: "Complete range",
        icon: ShoppingBag,
      },
      ...productNavItems,
    ],
  },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(
    null
  );
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null
  );

  const navbarRef = useRef<HTMLElement>(null);
  const location = useLocation();

  const isActive = (link: NavLink) => {
    if (link.dropdown && link.activeCheckPaths) {
      return link.activeCheckPaths.some((path) =>
        location.pathname.startsWith(path)
      );
    }
    if (link.href) {
      return location.pathname === link.href;
    }
    return false;
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setOpenDesktopDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleMobileSubmenu = (label: string) =>
    setOpenMobileSubmenu(openMobileSubmenu === label ? null : label);

  return (
    // BAAKI KA SARA UI CODE BILKUL Waisa hi HAI, KOI BADLAV NAHI
    <>
      <nav
        ref={navbarRef}
        className="bg-white/90 backdrop-blur-md border-b sticky top-0 z-40 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src={logoImage}
                alt="Madrid Pharmaceutical Logo"
                className="h-9 w-auto"
              />
            </Link>

            <div className="hidden lg:flex space-x-1 items-center">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDesktopDropdown(link.label)}
                    onMouseLeave={() => setOpenDesktopDropdown(null)}
                  >
                    <button
                      className={`flex items-center text-sm font-medium px-3 py-2 rounded-md group transition-colors ${isActive(link) ? "text-pharma-blue" : "text-gray-700 hover:text-pharma-blue"}`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${openDesktopDropdown === link.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {openDesktopDropdown === link.label && link.items && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max max-h-96 overflow-y-auto bg-white border rounded-lg shadow-xl z-[41] p-3 flex flex-col gap-1"
                        >
                          {link.items.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="flex items-start p-2.5 rounded-md hover:bg-pharma-blue/10 group/item min-w-[220px]"
                            >
                              {item.icon && (
                                <item.icon className="w-5 h-5 text-pharma-blue mr-3 mt-0.5 shrink-0" />
                              )}
                              <div>
                                <span className="text-sm font-medium text-gray-800 group-hover/item:text-pharma-blue">
                                  {item.label}
                                </span>
                                {item.subtitle && (
                                  <p className="text-xs text-gray-500">
                                    {item.subtitle}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href!}
                    className={`text-sm font-medium px-3 py-2 rounded-md ${isActive(link) ? "text-pharma-blue" : "text-gray-700 hover:text-pharma-blue"}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link to="/contact" className="ml-4">
                <Button className="bg-gradient-to-r from-pharma-blue to-pharma-green hover:opacity-90 text-white px-5 py-2 text-sm shadow-md hover:shadow-lg transition-shadow">
                  Get Started
                </Button>
              </Link>
            </div>

            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:bg-pharma-blue/10 relative z-50"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-14 inset-x-0 bottom-0 bg-black/50 z-30 lg:hidden"
              onClick={toggleMobileMenu}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-16 inset-x-4 bg-white shadow-xl z-40 lg:hidden rounded-xl border border-gray-200"
            >
              <div className="p-4 space-y-2 max-h-[80vh] overflow-y-auto">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.label}>
                      <button
                        onClick={() => toggleMobileSubmenu(link.label)}
                        className={`w-full flex justify-between items-center p-3 rounded-md font-medium text-left ${isActive(link) ? "text-pharma-blue bg-pharma-blue/10" : "text-gray-700"}`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${openMobileSubmenu === link.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openMobileSubmenu === link.label && (
                        <div className="pl-4 mt-2 space-y-1 border-l-2 border-pharma-blue/20">
                          {link.items?.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="block p-2 text-gray-600 rounded-md hover:bg-gray-100"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href!}
                      className={`block p-3 rounded-md font-medium ${isActive(link) ? "text-pharma-blue bg-pharma-blue/10" : "text-gray-700"}`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="pt-2">
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-pharma-blue to-pharma-green text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
