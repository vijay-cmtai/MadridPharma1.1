import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Lightbulb, Award, LucideProps } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// --- TypeScript Interfaces for Type-Safety ---
interface Approach {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
}

const approachesData: Approach[] = [
  {
    icon: ShieldCheck,
    title: "Unwavering Integrity",
    description:
      "Highest ethical standards guide our operations, ensuring transparency and trust in every interaction.",
  },
  {
    icon: Lightbulb,
    title: "Pioneering Innovation",
    description:
      "Continuous research and development fuel our commitment to creating breakthrough pharmaceutical solutions.",
  },
  {
    icon: Award,
    title: "Commitment to Excellence",
    description:
      "We relentlessly pursue excellence in product quality, patient care, and customer service, setting industry benchmarks.",
  },
];

// --- Naya, alag aur interactive 3D card component ---
const InteractiveCard = ({ approach }: { approach: Approach }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });
  const mouseYSpring = useSpring(y, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-full rounded-2xl bg-gradient-to-br from-indigo-300 via-pharma-blue to-green-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-5 grid place-content-center rounded-xl bg-white p-6 text-center shadow-lg"
      >
        <approach.icon
          className="mx-auto h-12 w-12 text-pharma-blue"
          strokeWidth={1.5}
          style={{ transform: "translateZ(50px)" }}
        />
        <h3
          style={{ transform: "translateZ(50px)" }}
          className="mt-3 text-2xl font-bold text-slate-800"
        >
          {approach.title}
        </h3>
        <p
          style={{ transform: "translateZ(25px)" }}
          className="mt-2 text-md text-slate-600"
        >
          {approach.description}
        </p>
      </div>
    </motion.div>
  );
};

const ApproachSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Core{" "}
            <span className="text-pharma-blue">Guiding Principles</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our approach is built on foundational pillars that define our
            commitment to advancing healthcare and fostering well-being.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 md:gap-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ perspective: "1200px" }} // 3D effect ke liye zaroori hai
        >
          {approachesData.map((approach, index) => (
            <motion.div key={index} variants={itemVariants}>
              <InteractiveCard approach={approach} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;
