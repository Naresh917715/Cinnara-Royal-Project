import { useState, useEffect } from "react";
import { Crown, Leaf, IdCard, Shield, Globe, Heart, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import FAQ from "@/components/FAQ";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      title: "Ceylon Cinnamon Sticks",
      description: "Hand-harvested true cinnamon quills with delicate sweetness and paper-thin texture.",
      image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Ceylon Cinnamon Powder",
      description: "Finely ground pure Ceylon cinnamon perfect for baking and culinary excellence.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Ceylon Cinnamon Soap",
      description: "Luxurious handcrafted soap infused with pure Ceylon cinnamon for natural skincare.",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Cinnamon Induced Tea",
      description: "Premium tea blend enhanced with authentic Ceylon cinnamon for wellness and flavor.",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Cinnamon Oil Extract",
      description: "Pure essential oil extracted from Ceylon cinnamon for therapeutic and aromatic use.",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    }
  ];

  const certifications = [
    { icon: Leaf, title: "Organic Certified", description: "USDA Organic Standards", color: "text-green-600" },
    { icon: IdCard, title: "ISO 22000", description: "Food Safety Management", color: "text-blue-600" },
    { icon: Globe, title: "Fair Trade", description: "Ethical Sourcing", color: "text-purple-600" },
    { icon: Shield, title: "HACCP", description: "Food Safety Standards", color: "text-red-600" }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  ];

  const faqItems = [
    {
      question: "What makes Ceylon Cinnamon different from regular cinnamon?",
      answer: "Ceylon Cinnamon, also known as 'True Cinnamon,' has a sweeter, more delicate flavor compared to Cassia cinnamon. It contains lower levels of coumarin, making it safer for regular consumption, and has a paper-thin bark texture."
    },
    {
      question: "Are your products organic certified?",
      answer: "Yes, we offer both organic and conventional Ceylon cinnamon products. Our organic products are USDA certified and sourced from sustainable farming practices in Sri Lanka."
    },
    {
      question: "How should I store Ceylon cinnamon products?",
      answer: "Store cinnamon sticks and powder in a cool, dry place away from direct sunlight. Properly stored, our products maintain their flavor and potency for up to 2-3 years."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship our premium Ceylon cinnamon products worldwide. Please contact us for specific shipping options and delivery times to your location."
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-hero-pattern">
        <div className="absolute inset-0 hero-gradient"></div>
        
        <div className={`relative z-10 text-center px-4 max-w-6xl mx-auto fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Cinnara Royal Sticker/Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 lg:w-48 lg:h-48 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-dull-yellow">
                <div className="text-center">
                  <h1 className="font-display font-bold text-lg lg:text-2xl text-deep-brown mb-1">CINNARA</h1>
                  <h2 className="font-display font-bold text-lg lg:text-2xl text-warm-brown mb-1">ROYAL</h2>
                  <p className="font-script text-xs lg:text-sm text-deep-brown">Ceylon Cinnamon</p>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 lg:w-8 lg:h-8 bg-dull-yellow rounded-full flex items-center justify-center">
                <Crown className="text-warm-brown w-3 h-3 lg:w-4 lg:h-4" />
              </div>
            </div>
          </div>

          <h1 className="font-display text-4xl lg:text-6xl xl:text-7xl font-bold text-deep-brown mb-6 leading-tight">
            World's Finest
            <span className="text-warm-brown block">Ceylon Cinnamon</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-deep-brown/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Proudly grown and hand-harvested in Sri Lanka, bringing you the authentic taste of "True Cinnamon" 
            with centuries-old artisanal craftsmanship.
          </p>

          {/* Product Display */}
          <div className="flex justify-center items-center space-x-4 lg:space-x-8 mb-12">
            <div className="transform rotate-12 hover:rotate-6 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=150" alt="Ceylon Cinnamon Sticks" className="w-16 h-24 lg:w-24 lg:h-36 object-cover rounded-lg shadow-lg" />
            </div>
            <div className="transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" alt="Ceylon Cinnamon Powder" className="w-20 h-20 lg:w-28 lg:h-28 object-cover rounded-full shadow-lg border-4 border-white" />
            </div>
            <div className="transform rotate-6 hover:rotate-3 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=150" alt="Cinnamon Tea" className="w-16 h-24 lg:w-24 lg:h-36 object-cover rounded-lg shadow-lg" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-primary">
              Explore Our Products
            </Button>
            <Button className="btn-secondary">
              Watch Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 lg:py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Welcome to <span className="text-warm-brown">Cinnara Royal</span>
          </h2>
          <div className="w-24 h-1 bg-dull-yellow mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <img 
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
            alt="Ceylon Cinnamon Plantation in Sri Lanka" 
            className="rounded-2xl shadow-2xl" 
          />
          
          <div className="space-y-6">
            <p className="text-lg text-deep-brown/80 leading-relaxed">
              We warmly welcome you to Cinnara Royal, where the artistry of cinnamon reaches perfection. 
              Cinnara has blossomed into one of Sri Lanka's fastest-growing cinnamon enterprises. Yet, we are 
              more than just a cinnamon company—we are a brand passionate about capturing the authentic 
              flavors and captivating aromas of our motherland and sharing them with the world.
            </p>
            
            <p className="text-lg text-deep-brown/80 leading-relaxed">
              Imagine the delightful experience of opening a freshly packed box of cinnamon—this is the 
              essence of what we aim to deliver. Our diverse product range proudly features both organic 
              and conventional Pure Ceylon Cinnamon Quills, Cinnamon Powder, Cinnamon Soap, and exquisite 
              Cinnamon Oil extracts.
            </p>
            
            <p className="text-lg text-deep-brown/80 leading-relaxed">
              Each product is meticulously sourced directly from the lush and enchanting landscapes of 
              Sri Lanka, ensuring authenticity and superior quality in every offering.
            </p>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-16 lg:py-24 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Our Ceylon Cinnamon Product Range
            </h2>
            <p className="text-lg text-deep-brown/70 max-w-3xl mx-auto">
              Discover our premium collection of authentic Ceylon cinnamon products, each carefully crafted 
              to bring you the finest quality and flavor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                onClick={() => console.log(`Opening ${product.title} page`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Our Certifications
          </h2>
          <p className="text-lg text-deep-brown/70 max-w-3xl mx-auto">
            Quality assured through rigorous international standards and certifications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <Icon className={`w-12 h-12 ${cert.color} mx-auto mb-4`} />
                <h3 className="font-semibold text-deep-brown mb-2">{cert.title}</h3>
                <p className="text-sm text-deep-brown/70">{cert.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Image Gallery Preview */}
      <section className="py-16 lg:py-24 bg-soft-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading">
              From Our Plantations to Your Home
            </h2>
            <p className="text-lg text-deep-brown/70 max-w-3xl mx-auto">
              Witness the journey of Ceylon cinnamon from our lush plantations to traditional processing methods.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer" 
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Frequently Asked Questions
          </h2>
        </div>

        <FAQ items={faqItems} />
      </section>
    </div>
  );
};

export default Home;
