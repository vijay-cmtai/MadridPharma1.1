import React, { useState, useEffect } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const Events = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-01T00:00:00");
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pharma-darkBlue to-slate-900 text-white">
      <TopBar />
      <Navbar />

      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-pharma-blue/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pharma-green/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-pharma-lightBlue to-pharma-green bg-clip-text text-transparent"
          >
            Our Upcoming Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-slate-300"
          >
            We're preparing a new calendar of insightful events. Stay tuned for
            exciting announcements.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-28 flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="relative text-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl py-20 px-8 overflow-hidden max-w-4xl mx-auto"
          >
            <motion.div
              className="absolute inset-0 z-0 flex items-center justify-center"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [-2, 2, -2],
              }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "easeInOut",
              }}
            >
              <CalendarDays className="w-[400px] h-[400px] text-white/5" />
            </motion.div>

            <div className="relative z-10">
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pharma-lightBlue to-pharma-green bg-clip-text text-transparent mb-6"
              >
                New Events Are On The Horizon
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
              >
                The countdown to our next major industry event has begun. Get
                ready for an experience filled with innovation, learning, and
                networking.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto"
              >
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div
                    key={unit}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                  >
                    <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      {String(value).padStart(2, "0")}
                    </div>
                    <div className="text-sm uppercase tracking-widest text-slate-400 mt-2">
                      {unit}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
