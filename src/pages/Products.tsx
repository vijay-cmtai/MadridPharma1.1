import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Heart,
  Brain,
  Bone,
  Activity,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Sabhi images ko import kiya gaya
import Faldecort from "/assets/images/productDetails/FALDECORT4-Photoroom.png";
import Linzocast from "/assets/images/productDetails/LINZOCAST4-Photoroom.png";
import Livofolate from "/assets/images/productDetails/LIVOFOLATE3-Photoroom.png";
import Livozorbxt from "/assets/images/productDetails/LIVOZORB XT3-Photoroom.png";
import Livozorbxtsup from "/assets/images/productDetails/LIVOZORB XT SUP-Photoroom.png";
import LuxboneFem from "/assets/images/productDetails/LUXBONE FEM-Photoroom.png";
import Luxbone from "/assets/images/productDetails/LUXBONE4-Photoroom.png";
import Pandoride from "/assets/images/productDetails/PANDORIDE-Photoroom.png";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      name: "Fladecort 6",
      description:
        "A potent glucocorticoid used to treat a wide range of inflammatory and autoimmune conditions.",
      image: Faldecort,
      slug: "lexprate-cr",
      color: "from-red-500 to-pink-500",
    },
    {
      name: "Linzocast 600",
      description:
        "A last-resort antibiotic for treating serious infections caused by multi-drug resistant bacteria.",
      image: Linzocast,
      slug: "calvilux",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Livofolate",
      description:
        "A comprehensive formula with active B-vitamins and Omega-3 to support nerve, brain, and heart health.",
      image: Livofolate,
      slug: "multilux",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Livozorb XT Syp",
      description:
        "A palatable iron supplement syrup, ideal for children and adults to effectively treat iron deficiency anemia.",
      image: Livozorbxtsup,
      slug: "neurolux",
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Livozorb XT",
      description:
        "A high-potency iron formulation with Zinc to support against anemia and boost immune function.",
      image: Livozorbxt,
      slug: "cardiolux",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Luxbone Fem",
      description:
        "A specialized formula expertly crafted to meet the unique bone health needs of women, especially post-menopause.",
      image: LuxboneFem,
      slug: "diabetlux",
      color: "from-teal-500 to-blue-500",
    },
    {
      name: "Luxbone",
      description:
        "A premium, comprehensive formula for building and maintaining strong, healthy bones in adults.",
      image: Luxbone,
      slug: "immunolux",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Pandoride DSR",
      description:
        "A dual-action capsule for effective, sustained relief from acid reflux, heartburn, and indigestion.",
      image: Pandoride,
      slug: "gastrolux",
      color: "from-pink-500 to-rose-500",
    },
  ];
  const handleProductClick = (slug: string) => {
    navigate(`/products/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <TopBar />
      <Navbar />

      <section className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-green-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of Pharmaceutical products designed
            to improve health and well-being
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  {/* Background color ko conditionally render kiya gaya */}
                  {product.name !== "Livozorb XT Syp" &&
                    product.name !== "Pandoride DSR" && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20`}
                      ></div>
                    )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full transition-transform duration-500 ${
                      // YAHAN BADLAV KIYA GAYA HAI: Scale wapas add kiya gaya hai
                      product.name === "Livozorb XT Syp" ||
                      product.name === "Pandoride DSR"
                        ? "object-contain scale-125 group-hover:scale-150" // Ab image badi dikhegi
                        : "object-cover group-hover:scale-110" // Baaki sabke liye original style
                    }`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {product.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-all duration-300"
                    onClick={() => handleProductClick(product.slug)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent mb-8">
              Product Categories
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Our products span across multiple therapeutic areas to address
              diverse healthcare needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Cardiovascular" },
              { icon: Brain, title: "Neurology" },
              { icon: ShieldCheck, title: "Antibiotics" },
              { icon: Bone, title: "Bone Health" },
            ].map((category, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-white/50 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
              >
                <div className="flex items-center justify-center mb-4">
                  <category.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
