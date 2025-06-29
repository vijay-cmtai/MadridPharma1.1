import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
// --- [STEP 1] - 'Link' ko import karein ---
import { Link, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";

import Faldecort from "/assets/images/productDetails/FALDECORT4-Photoroom.png";
import Linzocast from "/assets/images/productDetails/LINZOCAST4-Photoroom.png";
import Livofolate from "/assets/images/productDetails/LIVOFOLATE3-Photoroom.png";
import Livozorbxt from "/assets/images/productDetails/LIVOZORB XT3-Photoroom.png";
import Livozorbxtsup from "/assets/images/productDetails/LIVOZORB XT SUP-Photoroom.png";
import LuxboneFem from "/assets/images/productDetails/LUXBONE FEM-Photoroom.png";
import Luxbone from "/assets/images/productDetails/LUXBONE4-Photoroom.png";
import Pandoride from "/assets/images/productDetails/PANDORIDE-Photoroom.png";

// Helper function to create URL-friendly slugs
const createSlug = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
};

interface AnimatedStatProps {
  finalValue: string;
  label: string;
  duration?: number;
  iconColor?: string;
  showPlusSign?: boolean;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({ finalValue, label, duration = 2000, iconColor = "text-pharma-green", showPlusSign = true, }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(finalValue.replace(/\D/g, ""), 10) || 0;
      if (start === end) {
        setCount(end);
        return;
      }
      const totalDuration = duration;
      const incrementTime = 15;
      const totalSteps = totalDuration / incrementTime;
      const incrementValue = (end - start) / totalSteps;
      const timer = setInterval(() => {
        start += incrementValue;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [inView, finalValue, duration]);

  return (
    <div ref={ref} className="text-center px-2 md:px-4">
      <span className={`text-5xl md:text-6xl font-bold ${iconColor}`}>{count}</span>
      {showPlusSign && (<span className="text-5xl md:text-6xl font-bold text-white ml-1">+</span>)}
      <p className="text-xs sm:text-sm uppercase text-slate-400 tracking-wider mt-1 md:mt-2">{label}</p>
    </div>
  );
};

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15, }, }, };
const cardVariant = { hidden: { opacity: 0, y: 50, scale: 0.9, rotateZ: -5, filter: "blur(4px)", }, visible: { opacity: 1, y: 0, scale: 1, rotateZ: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275], }, }, };

const ProductsSection = () => {
  const sectionRef = useScrollAnimation("animate-fade-in", 0.05) as React.Ref<HTMLElement>;
  const companyStats = [
    { value: "15", label: "Employees", iconColor: "text-pharma-green", showPlus: true },
    { value: "8", label: "Products", iconColor: "text-pharma-lightBlue", showPlus: true },
    { value: "20", label: "Cities", iconColor: "text-pharma-green", showPlus: true },
    { value: "0", label: "R & D Center", iconColor: "text-pharma-lightBlue", showPlus: false },
  ];
  const featuredProducts = [
    { name: "Fladecort 6", description: "A potent glucocorticoid for inflammatory and autoimmune conditions.", image: Faldecort, slug: createSlug("Fladecort 6"), gradientClass: "from-red-500 to-pink-500", },
    { name: "Linzocast 600", description: "A last-resort antibiotic for multi-drug resistant bacterial infections.", image: Linzocast, slug: createSlug("Linzocast 600"), gradientClass: "from-blue-500 to-cyan-500", },
    { name: "Livofolate", description: "Supports nerve, brain, and heart health with active B-vitamins and Omega-3.", image: Livofolate, slug: createSlug("Livofolate"), gradientClass: "from-green-500 to-emerald-500", },
    { name: "Livozorb XT Syp", description: "A palatable iron syrup, ideal for children and adults to treat iron deficiency.", image: Livozorbxtsup, slug: createSlug("Livozorb XT Syp"), gradientClass: "from-purple-500 to-indigo-500", },
    { name: "Livozorb XT", description: "High-potency iron with Zinc to support against anemia and boost immunity.", image: Livozorbxt, slug: createSlug("Livozorb XT"), gradientClass: "from-orange-500 to-red-500", },
    { name: "Luxbone Fem", description: "Specialized formula for women's bone health, especially post-menopause.", image: LuxboneFem, slug: createSlug("Luxbone Fem"), gradientClass: "from-teal-500 to-blue-500", },
    { name: "Luxbone", description: "A premium formula for building and maintaining strong bones in adults.", image: Luxbone, slug: createSlug("Luxbone"), gradientClass: "from-yellow-500 to-orange-500", },
    { name: "Pandoride DSR", description: "Dual-action capsule for effective relief from acid reflux and heartburn.", image: Pandoride, slug: createSlug("Pandoride DSR"), gradientClass: "from-pink-500 to-rose-500", },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const sectionBackgroundImage = "https://images.unsplash.com/photo-1585349150957-46d8869395ac?auto=format&fit=crop&w=1920&q=80";

  return (
    <section ref={sectionRef} className="py-16 md:py-20 text-white relative w-full overflow-x-hidden" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.96), rgba(23, 37, 84, 0.98)), url(${sectionBackgroundImage})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundAttachment: "fixed", }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 md:mb-16 pt-8 md:pt-0">
          <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-x-2 gap-y-8 md:gap-x-0 md:gap-y-0 items-center">
            {companyStats.map((stat, index) => (
              <React.Fragment key={stat.label}>
                <AnimatedStat finalValue={stat.value} label={stat.label} iconColor={stat.iconColor} showPlusSign={stat.showPlus} />
                {index < companyStats.length - 1 && (<div className="hidden md:flex justify-center items-center h-full px-4 lg:px-6"><div className="h-16 sm:h-20 w-px bg-slate-600/70"></div></div>)}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0 text-center md:text-left">Our <span className="text-pharma-lightBlue">Current Products</span></h2>
          <div className="flex items-center gap-3 md:gap-4">
            <Button onClick={scrollPrev} variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-slate-500/50 text-slate-200 hover:text-white rounded-full w-10 h-10 md:w-12 md:h-12 shadow-md"><ArrowLeft size={20} /></Button>
            <div className="w-24 md:w-32 h-px bg-slate-600/50 rounded-full"></div>
            <Button onClick={scrollNext} variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-slate-500/50 text-slate-200 hover:text-white rounded-full w-10 h-10 md:w-12 md:h-12 shadow-md"><ArrowRight size={20} /></Button>
          </div>
        </div>
        <div className="embla -mx-2 sm:-mx-4" ref={emblaRef}>
          <motion.div className="embla__container flex pb-4 -ml-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            {featuredProducts.map((product) => (
              <motion.div className="embla__slide flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] min-w-0 pl-3" key={product.slug} variants={cardVariant}>
                <div className="group relative bg-slate-800/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-slate-700/80 hover:border-pharma-blue/60 transition-all duration-300 transform hover:-translate-y-1.5 h-full flex flex-col">
                  <div className={`relative h-48 sm:h-52 w-full overflow-hidden rounded-t-xl ${ product.name === "Livozorb XT Syp" || product.name === "Pandoride DSR" ? "bg-white" : "" }`} >
                    {product.name !== "Livozorb XT Syp" && product.name !== "Pandoride DSR" && ( <div className={`absolute inset-0 bg-gradient-to-br ${product.gradientClass} opacity-20 group-hover:opacity-15 transition-opacity`}></div> )}
                    <img src={product.image} alt={product.name} className={`w-full h-full transition-transform duration-500 ${ product.name === "Livozorb XT Syp" || product.name === "Pandoride DSR" ? "object-contain scale-125 group-hover:scale-150" : "object-cover group-hover:scale-105" }`} loading="lazy" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-pharma-lightBlue transition-colors">{product.name}</h3>
                    <p className="text-sm text-slate-300/90 mb-4 leading-relaxed flex-grow min-h-[60px] line-clamp-3">{product.description}</p>
                    
                    {/* --- [STEP 2] - Button ko Link se wrap kiya gaya --- */}
                    <Link to={`/products/${product.slug}`} className="mt-auto">
                      <Button variant="outline" size="sm" className="w-full text-slate-200 border-slate-600 hover:text-white hover:bg-pharma-blue/80 hover:border-pharma-blue/80 transition-all duration-300">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>

                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
