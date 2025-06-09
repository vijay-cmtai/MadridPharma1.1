import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import video from "../components/video.mp4";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const textShadowStyle = { textShadow: "0 3px 15px rgba(0, 0, 0, 0.5)" };

  const gradientTextStyle = {
    WebkitTextStroke: "0.5px rgba(0, 0, 0, 0.5)",
    textStroke: "0.5px rgba(0, 0, 0, 0.5)",
    paintOrder: "stroke fill",
  };

  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.2 },
    },
  };

  const titleWordVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.6 } },
  };

  const buttonContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 1.2 } },
  };

  const buttonItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        ></video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-pharma-darkBlue/50 to-pharma-blue/50 z-10"></div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6))]"></div>

      <div
        className="absolute inset-0 z-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          animation: "pan 20s linear infinite",
        }}
      ></div>

      <motion.div
        className="relative z-20 w-full text-center text-white px-4 sm:px-6 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight"
          variants={titleContainerVariants}
          style={textShadowStyle}
        >
          {"Pioneering Health, ".split("").map((char, i) => (
            <motion.span
              key={char + "-" + i}
              variants={titleWordVariants}
              // === FIX: `align-bottom` add kiya gaya hai ===
              className="inline-block align-bottom"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <br className="sm:hidden" />{" "}
          <motion.span
            variants={titleWordVariants}
            className="inline-block align-bottom bg-gradient-to-r from-pharma-lightBlue via-pharma-green to-accent-magenta bg-clip-text text-transparent"
            style={{
              backgroundSize: "200% 200%",
              ...gradientTextStyle,
            }}
          >
            Inspiring Life.
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-slate-200/90 leading-relaxed max-w-2xl mx-auto"
          variants={paragraphVariants}
          style={textShadowStyle}
        >
          Madrid Pharmaceutical is dedicated to advancing healthcare through
          cutting-edge research, innovative therapies, and a commitment to
          patient well-being.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          variants={buttonContainerVariants}
        >
          <motion.div variants={buttonItemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-pharma-green to-emerald-600 text-white px-6 py-3 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-pharma-green/40 transition-shadow duration-300 focus:ring-2 focus:ring-pharma-green/50"
              >
                Discover Innovations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div variants={buttonItemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-slate-100 hover:bg-white/20 transition-all duration-300 px-6 py-3 text-base font-semibold rounded-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
