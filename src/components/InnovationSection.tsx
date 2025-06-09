import React from "react";
import { Button } from "@/components/ui/button";
import {
  Award,
  // PlayCircle ko yahan se hata diya gaya hai kyunki ab use nahi ho raha
  Phone,
  Stethoscope,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import hero1 from "../../assets/images/productDetails/hero1.avif";
import hero2 from "../../assets/images/productDetails/hero2.avif";

const CompanyIcon = ({ className }) => (
  <Stethoscope className={className} strokeWidth={1.5} />
);

// Animation variants (koi badlav nahi)
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemFadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageZoomIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const itemPopIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 150, damping: 15 },
  },
};

const AboutCompanySection = () => {
  const navigate = useNavigate();

  const LEFT_IMAGE_URL = hero1;
  const RIGHT_IMAGE_URL = hero2;

  const handleEnquiryClick = () => {
    navigate("/contact");
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-sky-100 relative overflow-hidden">
      <div className="absolute top-1/4 left-[-100px] w-72 h-72 bg-pharma-blue/10 rounded-full filter blur-2xl opacity-50 animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-[-100px] w-72 h-72 bg-pharma-green/10 rounded-full filter blur-2xl opacity-50 animate-pulse-glow animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left Column (koi badlav nahi) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            <motion.div
              variants={imageZoomIn}
              className="relative group shadow-2xl rounded-2xl overflow-hidden"
            >
              <img
                src={LEFT_IMAGE_URL}
                alt="Madrid Pharmaceutical Research Lab"
                className="w-full h-auto max-h-[500px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <motion.div
                variants={itemPopIn}
                className="absolute -bottom-8 -right-6 sm:bottom-6 sm:right-6 bg-gradient-to-br from-pharma-green to-green-500 text-white rounded-xl p-5 sm:p-6 shadow-2xl text-center w-[200px] sm:w-[220px] transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300"
              >
                <Award
                  className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 drop-shadow-lg"
                  strokeWidth={2}
                />
                <p className="text-3xl sm:text-4xl font-bold">8+</p>
                <p className="text-sm font-semibold">Years Of Experience</p>
              </motion.div>
            </motion.div>

            <motion.p
              variants={itemFadeUp}
              className="text-slate-700 leading-relaxed text-md md:text-lg"
            >
              We are committed to providing access to affordable and innovative
              medicines, driven by our purpose of 'Good Health Can’t Wait'. Our
              products and services span Active Pharmaceutical Ingredients
              (API), generics, and branded generics.
            </motion.p>

            <motion.div
              variants={itemFadeUp}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <Button
                size="lg"
                className="bg-pharma-blue hover:bg-pharma-darkBlue text-white px-8 py-3 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center group transform hover:scale-105 w-full sm:w-auto"
                onClick={() => navigate("/about")}
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <div
                className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
                onClick={handleEnquiryClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleEnquiryClick();
                }}
              >
                <div className="p-2.5 bg-pharma-green/10 rounded-full">
                  <Phone className="w-4 h-4 text-pharma-green" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500">
                    Enquiries
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column (yahan badlav kiya gaya hai) */}
          <motion.div
            className="lg:pl-8 space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              variants={itemFadeUp}
              className="flex items-center gap-3 text-base font-semibold uppercase text-pharma-green"
            >
              <div className="w-10 h-10 bg-pharma-green/10 rounded-lg flex items-center justify-center">
                <CompanyIcon className="w-6 h-6 text-pharma-green" />
              </div>
              <span>About Our Company</span>
            </motion.div>

            <motion.h2
              variants={itemFadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight"
            >
              Innovation Shaping{" "}
              <span className="text-pharma-blue">Healthcare's Future</span>
            </motion.h2>

            <motion.div
              variants={imageZoomIn}
              className="relative group rounded-2xl overflow-hidden shadow-2xl aspect-video md:aspect-[16/10] lg:aspect-video"
            >
              <img
                src={RIGHT_IMAGE_URL}
                alt="Innovative Healthcare Technology"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              {/* === FIX: VIDEO BUTTON AUR OVERLAY HATA DIYA GAYA HAI === */}
              {/* Overlay ko bhi comment out ya hata sakte hain agar aap image par koi gradient nahi chahte */}
              <div className="absolute inset-0 bg-gradient-to-t from-pharma-darkBlue/20 via-transparent to-transparent"></div>
              {/* Upar wali line image ke neeche halki si chhaya (shadow) degi. Agar yeh bhi nahi chahiye to isey bhi hata dein. */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanySection;
