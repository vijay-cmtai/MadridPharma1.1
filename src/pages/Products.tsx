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

// --- Images ---
import Faldecort from "/assets/images/productDetails/FALDECORT4-Photoroom.png";
import Linzocast from "/assets/images/productDetails/LINZOCAST4-Photoroom.png";
import Livofolate from "/assets/images/productDetails/LIVOFOLATE3-Photoroom.png";
import Livozorbxt from "/assets/images/productDetails/LIVOZORB XT3-Photoroom.png";
import Livozorbxtsup from "/assets/images/productDetails/LIVOZORB XT SUP-Photoroom.png";
import LuxboneFem from "/assets/images/productDetails/LUXBONE FEM-Photoroom.png";
import Luxbone from "/assets/images/productDetails/LUXBONE4-Photoroom.png";
import Pandoride from "/assets/images/productDetails/PANDORIDE-Photoroom.png";

// Helper function to create URL-friendly slugs
const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};


const Products = () => {
  const navigate = useNavigate();

  // ===============================================
  // START: PRODUCTS ARRAY MEIN SLUG UPDATE KIYA GAYA HAI
  // ===============================================
  const products = [
    {
      name: "Fladecort 6",
      description: "A potent glucocorticoid used to treat a wide range of inflammatory and autoimmune conditions.",
      image: Faldecort,
      slug: createSlug("Fladecort 6"), // "fladecort-6"
      color: "from-red-500 to-pink-500",
    },
    {
      name: "Linzocast 600",
      description: "A last-resort antibiotic for treating serious infections caused by multi-drug resistant bacteria.",
      image: Linzocast,
      slug: createSlug("Linzocast 600"), // "linzocast-600"
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Livofolate",
      description: "A comprehensive formula with active B-vitamins and Omega-3 to support nerve, brain, and heart health.",
      image: Livofolate,
      slug: createSlug("Livofolate"), // "livofolate"
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Livozorb XT Syp",
      description: "A palatable iron supplement syrup, ideal for children and adults to effectively treat iron deficiency anemia.",
      image: Livozorbxtsup,
      slug: createSlug("Livozorb XT Syp"), // "livozorb-xt-syp"
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Livozorb XT",
      description: "A high-potency iron formulation with Zinc to support against anemia and boost immune function.",
      image: Livozorbxt,
      slug: createSlug("Livozorb XT"), // "livozorb-xt"
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Luxbone Fem",
      description: "A specialized formula expertly crafted to meet the unique bone health needs of women, especially post-menopause.",
      image: LuxboneFem,
      slug: createSlug("Luxbone Fem"), // "luxbone-fem"
      color: "from-teal-500 to-blue-500",
    },
    {
      name: "Luxbone",
      description: "A premium, comprehensive formula for building and maintaining strong, healthy bones in adults.",
      image: Luxbone,
      slug: createSlug("Luxbone"), // "luxbone"
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Pandoride DSR",
      description: "A dual-action capsule for effective, sustained relief from acid reflux, heartburn, and indigestion.",
      image: Pandoride,
      slug: createSlug("Pandoride DSR"), // "pandoride-dsr"
      color: "from-pink-500 to-rose-500",
    },
  ];
  // ===============================================
  // END: PRODUCTS ARRAY MEIN SLUG UPDATE
  // ===============================================

  const handleProductClick = (slug: string) => {
    navigate(`/products/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-green-600 text-white py-24 overflow-hidden">
        {/* ... baaki ka code waisa hi rahega ... */}
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* ... baaki ka card ka code waisa hi rahega ... */}
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

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        {/* ... baaki ka code waisa hi rahega ... */}
      </section>

      <Footer />
    </div>
  );
};

export default Products;
