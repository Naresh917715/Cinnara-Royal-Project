import { useState, useEffect } from "react";
import { Crown, Leaf, IdCard, Shield, Globe, Heart, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import FAQ from "@/components/FAQ";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import YouTubePopup from "@/components/YouTubePopup";
import { PRODUCTS } from "@/constants";
import cinnaraLogo from "../../src/assets/cinnara.png";
import theme from "../../src/assets/theme.jpeg"

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showYouTubePopup, setShowYouTubePopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('youtubePopupShown');
    if (popupShown) {
      setHasShownPopup(true);
    }
  }, []);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (hasShownPopup) return;
      
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      
      // Check if user has scrolled to bottom (within 100px)
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        clearTimeout(scrollTimeout);
        // Add small delay to ensure smooth scrolling completion
        scrollTimeout = setTimeout(() => {
          setShowYouTubePopup(true);
          setHasShownPopup(true);
          sessionStorage.setItem('youtubePopupShown', 'true');
        }, 200);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [hasShownPopup]);

  const products = PRODUCTS;

  const certifications = [
    { icon: Leaf, title: "USDA Organic Certified", description: "Our organic products meet strict USDA organic standards, ensuring no synthetic pesticides or fertilizers.", color: "bg-green-100 text-green-600" },
    { icon: IdCard, title: "ISO 22000:2018", description: "Food safety management system certification ensuring the highest standards of food safety.", color: "bg-blue-100 text-blue-600" },
    { icon: Globe, title: "Fair Trade Certified", description: "Supporting fair wages and sustainable practices for our farming communities in Sri Lanka.", color: "bg-purple-100 text-purple-600" },
    { icon: Shield, title: "HACCP Compliant", description: "Hazard Analysis Critical Control Points system ensures food safety throughout our process.", color: "bg-red-100 text-red-600" },
    { icon: Heart, title: "GMP Certified", description: "Good Manufacturing Practices certification ensuring consistent quality and safety.", color: "bg-yellow-100 text-yellow-600" },
    { icon: Leaf, title: "Rainforest Alliance", description: "Promoting sustainable agriculture and protecting biodiversity in our farming practices.", color: "bg-indigo-100 text-indigo-600" }
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
          <div className="flex justify-center mt-[19px] mb-[19px]">
            <div className="relative">
              <div className="w-32 h-32 lg:w-48 lg:h-48 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-dull-yellow overflow-hidden">
                <img 
                  src={cinnaraLogo}
                  alt="Ceylon Cinnamon Sticks" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 lg:w-8 lg:h-8 bg-dull-yellow rounded-full flex items-center justify-center">
                <Crown className="text-warm-brown w-3 h-3 lg:w-4 lg:h-4" />
              </div>
            </div>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-deep-brown mb-4 sm:mb-6 leading-tight">
            World's Finest
            <span className="text-warm-brown block">Ceylon Cinnamon</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-deep-brown/80 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Proudly grown and hand-harvested in Sri Lanka, bringing you the authentic taste of "True Cinnamon" 
            with centuries-old artisanal craftsmanship.
          </p>

          {/* Product Display */}
          <div className="flex justify-center items-center space-x-2 sm:space-x-4 lg:space-x-8 mb-8 sm:mb-12">
            <img src={theme} alt="Ceylon Cinnamon Sticks" className="w-12 h-18 sm:w-16 sm:h-24 lg:w-24 lg:h-36 object-cover rounded-lg shadow-lg" style={{width: "max-content"}} />


            {/* <div className="transform rotate-12 hover:rotate-6 transition-transform duration-300">
              <img src="../../src/assets/productSticks.jpeg" alt="Ceylon Cinnamon Sticks" className="w-12 h-18 sm:w-16 sm:h-24 lg:w-24 lg:h-36 object-cover rounded-lg shadow-lg" />
            </div>
            <div className="transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <img src="../../src/assets/productPowder.jpeg" alt="Ceylon Cinnamon Powder" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 object-cover rounded-full shadow-lg border-4 border-white" />
            </div>
            <div className="transform rotate-6 hover:rotate-3 transition-transform duration-300">
              <img src="../../src/assets/oil.jpeg" alt="Cinnamon Tea" className="w-12 h-18 sm:w-16 sm:h-24 lg:w-24 lg:h-36 object-cover rounded-lg shadow-lg" />
            </div> */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div key={`product-${product.title}-${index}`} className="w-full">
                <ProductCard
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  onClick={() => console.log(`Opening ${product.title} page`)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Certifications Section */}
      <section className="py-16 lg:py-24 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="section-heading text-left mb-6">
                  Premium Quality Standards
                </h2>
                <p className="text-lg text-deep-brown/70 leading-relaxed mb-8">
                  Cinnara Royal Ceylon cinnamon meets the highest international quality standards, ensuring every product delivers authentic taste and exceptional purity. Our certifications validate our commitment to excellence and sustainability.
                </p>
              </div>

              {/* Quality Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-deep-brown mb-2">100%</div>
                  <div className="text-deep-brown/70 font-medium">Organic</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-deep-brown mb-2">50+</div>
                  <div className="text-deep-brown/70 font-medium">Years Heritage</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-deep-brown mb-2">5</div>
                  <div className="text-deep-brown/70 font-medium">Certifications</div>
                </div>
              </div>
            </div>

            {/* Right Side - Certification Carousel */}
            <div className="flex justify-center">
              <Carousel className="w-full max-w-md">
                <CarouselContent>
                  {/* Main Certification Card */}
                  <CarouselItem>
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                      <div className="text-center space-y-6">
                        {/* Certification Badge */}
                        <div className="w-20 h-20 bg-warm-brown rounded-full flex items-center justify-center mx-auto">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 bg-warm-brown rounded-full"></div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-display text-2xl font-bold text-deep-brown mb-4">
                            Ceylon Cinnamon Authenticity
                          </h3>
                          <p className="text-deep-brown/70 leading-relaxed mb-6">
                            Certified authentic Ceylon cinnamon by the Sri Lanka Export Development Board, guaranteeing true Cinnamomum verum.
                          </p>
                        </div>

                        {/* Certificate Details */}
                        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                          <span className="text-deep-brown/70 font-medium">Sri Lanka EDB</span>
                          <span className="text-deep-brown/70 font-medium">2018</span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Additional Certification Cards */}
                  {certifications.slice(0, 5).map((cert, index) => {
                    const Icon = cert.icon;
                    return (
                      <CarouselItem key={index}>
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                          <div className="text-center space-y-6">
                            {/* Certification Badge */}
                            <div className={`w-20 h-20 ${cert.color} rounded-full flex items-center justify-center mx-auto`}>
                              <Icon className="w-8 h-8" />
                            </div>

                            <div>
                              <h3 className="font-display text-2xl font-bold text-deep-brown mb-4">
                                {cert.title}
                              </h3>
                              <p className="text-deep-brown/70 leading-relaxed mb-6">
                                {cert.description}
                              </p>
                            </div>

                            {/* Certificate Details */}
                            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                              <span className="text-deep-brown/70 font-medium">Certified</span>
                              <span className="text-deep-brown/70 font-medium">2024</span>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-white/80 hover:bg-white border-warm-brown/20" />
                <CarouselNext className="right-4 bg-white/80 hover:bg-white border-warm-brown/20" />
              </Carousel>
            </div>
          </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg sm:rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer" 
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

      {/* YouTube Popup */}
      <YouTubePopup 
        isVisible={showYouTubePopup} 
        onClose={() => setShowYouTubePopup(false)} 
      />
    </div>
  );
};

export default Home;