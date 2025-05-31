import { Eye, Target, Heart, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      title: "Heritage-Driven",
      description: "Honoring centuries-old traditions"
    },
    {
      title: "Purity & Authenticity", 
      description: "True Ceylon Cinnamon only"
    },
    {
      title: "Craftsmanship",
      description: "Artisanal care in every product"
    },
    {
      title: "Sustainability",
      description: "Ethical and responsible sourcing"
    },
    {
      title: "Wellness-Centered",
      description: "Products that promote health and vitality"
    },
    {
      title: "Global Excellence",
      description: "World-class quality standards"
    },
    {
      title: "Transparency & Trust",
      description: "Honesty in every process"
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Image */}
      <div className="relative h-96 lg:h-[60vh] mb-16">
        <img 
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Sri Lankan Cinnamon Plantation Landscape" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/60 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="font-display text-4xl lg:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl lg:text-2xl">Where Heritage Meets Purity</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Company Story */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="section-heading">
              About Cinnára Royal
            </h2>
            <div className="w-24 h-1 bg-dull-yellow mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none text-deep-brown/80 leading-relaxed space-y-6">
            <p className="text-xl leading-relaxed">
              Cinnára Royal is more than a cinnamon brand — it is a story of roots, resilience, and refinement. 
              Born from the shared dream of two young Sri Lankan entrepreneurs, our journey began with a simple yet 
              powerful vision: to bring the world a taste of home — pure, authentic Ceylon Cinnamon, grown in the 
              heart of our island.
            </p>

            <p>
              Cinnara Royal brings you the world's finest cinnamon — Ceylon Cinnamon, also known as "True Cinnamon" — 
              proudly grown and hand-harvested in Sri Lanka. Renowned for its sweet flavor, delicate aroma, paper-thin 
              texture and its richness in antioxidants, Sri Lankan cinnamon stands apart from other varieties like 
              Cassia due to its premium quality and low coumarin content, making it a healthier and more refined choice.
            </p>

            <p>
              Our cinnamon is sourced from the island's rich tropical soil and cultivated through centuries-old 
              artisanal practices. With every Cinnara Royal product, we celebrate the legacy of Sri Lankan spice 
              craftsmanship, delivering a premium cinnamon experience cherished across the globe for culinary, 
              medicinal, and aromatic use.
            </p>

            <p>
              Each quill, each and every pinch of powder, each fragrant tea infusion we create pays homage to 
              Sri Lanka's enduring legacy of spices. Our cinnamon is hand-selected, carefully processed, and 
              beautifully packaged to preserve its natural essence — so that when you open a Cinnára Royal product, 
              you unwrap not just cinnamon, but the soul of a nation.
            </p>

            <p className="text-xl font-semibold text-warm-brown">
              Because we believe the world deserves not just cinnamon — but royalty.
            </p>
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Vision */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-white w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-deep-brown mb-4">Our Vision</h3>
              <p className="text-deep-brown/80 leading-relaxed">
                To become the world's most trusted and beloved source of True Ceylon Cinnamon — honoring Sri Lanka's 
                rich spice legacy while bringing wellness, elegance, and authenticity to homes across the globe.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-white w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-deep-brown mb-4">Our Mission</h3>
              <p className="text-deep-brown/80 leading-relaxed">
                At Cinnára Royal, we are devoted to preserving the heritage of Sri Lankan cinnamon through ethical 
                sourcing, artisanal craftsmanship, and uncompromising quality. We deliver premium organic and 
                conventional Ceylon cinnamon products that nourish, heal, and inspire.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-deep-brown mb-4">Our Values</h3>
              <div className="space-y-3 text-deep-brown/80 text-left">
                {values.slice(0, 4).map((value, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Check className="text-warm-brown w-4 h-4 mt-1 flex-shrink-0" />
                    <span><strong>{value.title}:</strong> {value.description}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Values */}
        <div className="bg-warm-cream p-8 rounded-2xl">
          <h3 className="font-display text-2xl font-bold text-deep-brown mb-6 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.slice(4).map((value, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="text-warm-brown w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-deep-brown">{value.title}</h4>
                  <p className="text-deep-brown/70 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
