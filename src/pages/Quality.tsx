import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FlaskConical,
  ShieldCheck,
  PackageCheck,
  ClipboardCheck,
  Microscope,
  Globe,
  Lock,
  Heart,
  Scale,
  BookUser,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import quality1 from "../../assets/images/productDetails/quality1.webp";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Quality = () => {
  const journeySteps = [
    {
      icon: FlaskConical,
      title: "Meticulous Sourcing",
      description:
        "Our journey begins with sourcing the finest raw materials from globally certified suppliers, ensuring purity and potency from day one.",
      gradientClass: "from-blue-500 to-blue-600",
      borderClass: "border-blue-500",
    },
    {
      icon: ShieldCheck,
      title: "Precision Manufacturing",
      description:
        "Operating in a state-of-the-art, GMP-compliant facility, we use advanced technology to ensure every product is crafted with precision.",
      gradientClass: "from-green-500 to-green-600",
      borderClass: "border-green-500",
    },
    {
      icon: ClipboardCheck,
      title: "Rigorous In-Process Testing",
      description:
        "We conduct multi-stage quality checks throughout the manufacturing process to maintain consistency and efficacy at every step.",
      gradientClass: "from-purple-500 to-purple-600",
      borderClass: "border-purple-500",
    },
    {
      icon: PackageCheck,
      title: "Final Product Assurance",
      description:
        "Before any product is released, it undergoes a final, exhaustive round of testing to guarantee it meets our highest standards of safety.",
      gradientClass: "from-orange-500 to-red-500",
      borderClass: "border-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-green-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>
        </div>
        {/* === FIX: PADDING BADHAI GAYI === */}
        <motion.div
          className="container mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Quality in Every Molecule
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto leading-relaxed text-slate-200"
            variants={fadeInUp}
          >
            Our unwavering commitment to quality is not just a standard—it's our
            promise for a healthier world.
          </motion.p>
        </motion.div>
      </section>

      {/* "Our Quality Mandate" Section */}
      <section className="py-20 md:py-24 bg-white">
        {/* === FIX: PADDING BADHAI GAYI === */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={slideInLeft} className="lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Our Quality Mandate
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                At Madrid Pharmaceutical, quality is more than a procedure—it's
                the core principle that underpins our entire operation. It is
                the unshakable foundation upon which we build trust with
                patients, healthcare providers, and regulatory bodies worldwide.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that every life is precious, and this belief fuels
                our dedication to ensuring every product is a hallmark of safety
                and efficacy.
              </p>
            </motion.div>
            <motion.div variants={slideInRight}>
              <img
                src={quality1}
                alt="Quality control in a pharmaceutical lab"
                className="rounded-2xl shadow-xl w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* "Our Quality DNA" Section */}
      <section className="py-20 md:py-24 bg-slate-50">
        {/* === FIX: PADDING BADHAI GAYI === */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Quality DNA
            </h2>
            <p className="text-lg text-slate-600">
              Three core tenets are woven into the fabric of our quality
              culture, guiding our daily actions and long-term strategy.
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Heart,
                title: "Patient-First Principle",
                desc: "Every decision is weighed against its potential impact on patient safety and well-being.",
              },
              {
                icon: Scale,
                title: "Ethical & Transparent",
                desc: "We maintain complete transparency in our processes, fostering accountability and trust.",
              },
              {
                icon: BookUser,
                title: "Continuous Learning",
                desc: "We are committed to perpetually improving our systems, skills, and technologies.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                className="text-center p-8 bg-white rounded-xl shadow-lg border border-slate-100"
                variants={fadeInUp}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* "Quality Framework" Section */}
      <section className="py-16 md:py-20 bg-white">
        {/* === FIX: PADDING BADHAI GAYI === */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our End-to-End Quality Framework
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We embed quality at every stage of the pharmaceutical lifecycle,
              from initial research to final delivery.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-start p-6 bg-slate-50 rounded-xl shadow-md border-l-4 ${step.borderClass}`}
                variants={fadeInUp}
              >
                <div
                  className={`w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center bg-gradient-to-r ${step.gradientClass} mr-6`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-slate-50">
        {/* === FIX: PADDING BADHAI GAYI === */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            Our Certifications
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                icon: Microscope,
                title: "GMP Certified",
                description:
                  "Good Manufacturing Practices certification ensuring quality production standards.",
                gradientClass: "from-blue-500 to-blue-600",
                bgClass: "from-blue-50 to-blue-100",
              },
              {
                icon: Globe,
                title: "ISO 9001:2015",
                description:
                  "International quality management system certification for consistent excellence.",
                gradientClass: "from-green-500 to-green-600",
                bgClass: "from-green-50 to-green-100",
              },
              {
                icon: Lock,
                title: "WHO Prequalified",
                description:
                  "World Health Organization prequalification for global Pharmaceuticals standards.",
                gradientClass: "from-purple-500 to-purple-600",
                bgClass: "from-purple-50 to-purple-100",
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${cert.bgClass} border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2`}
                variants={fadeInUp}
              >
                <div
                  className={`bg-gradient-to-r ${cert.gradientClass} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {cert.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-slate-800 text-white">
        {/* === FIX: PADDING BADHAI GAYI === */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            Partner with Confidence
          </motion.h2>
          <motion.p
            className="text-lg text-slate-300 max-w-2xl mx-auto mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            Choose a pharmaceutical partner dedicated to uncompromised quality
            and patient safety. Explore our products or contact us to learn
            more.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white hover:opacity-90 font-bold px-8 py-3 text-lg transition-transform hover:scale-105"
              asChild
            >
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quality;
