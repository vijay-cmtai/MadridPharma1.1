import React from "react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-pharma-darkBlue text-white py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col items-center sm:flex-row sm:items-center gap-y-1 sm:gap-y-0 sm:space-x-4 mb-2 sm:mb-0">
          <a
            href="mailto:MadridPharmaceutical@gmail.com"
            className="flex items-center space-x-1.5 hover:text-pharma-lightBlue transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>info@madridpharma.com</span>
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <span className="hidden md:inline">Follow Us:</span>
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-pharma-lightBlue transition-colors"
          >
            <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-pharma-lightBlue transition-colors"
          >
            <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-pharma-lightBlue transition-colors"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-pharma-lightBlue transition-colors"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
