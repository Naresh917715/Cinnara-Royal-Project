
import React, { useState } from "react";
import { ArrowRight, ChevronDown, Leaf, Shield, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const getProductDetails = (title: string) => {
    const details = {
      "Ceylon Cinnamon Sticks": {
        features: [
          { icon: Leaf, text: "100% Pure Ceylon Cinnamon" },
          { icon: Shield, text: "Hand-harvested & Processed" },
          { icon: Heart, text: "Paper-thin layers" }
        ],
        specifications: "Grade: Alba, C5 Special, C5, C4 | Length: 6-8 inches | Moisture: <12%",
        uses: "Perfect for teas, desserts, curries, and traditional medicine. Can be ground fresh or used whole for maximum flavor retention."
      },
      "Ceylon Cinnamon Powder": {
        features: [
          { icon: Leaf, text: "Finely Ground Premium Quality" },
          { icon: Heart, text: "Rich in Antioxidants" },
          { icon: Shield, text: "Low Coumarin Content" }
        ],
        specifications: "Mesh Size: 80-100 | Moisture: <10% | Purity: 99.5%",
        uses: "Ideal for baking, smoothies, coffee, and culinary applications. Easy to incorporate into recipes for health benefits."
      },
      "Ceylon Cinnamon Soap": {
        features: [
          { icon: Heart, text: "Natural Skincare Benefits" },
          { icon: Leaf, text: "Handcrafted with Care" },
          { icon: Shield, text: "Antimicrobial Properties" }
        ],
        specifications: "Weight: 100g | Ingredients: Natural oils, Ceylon cinnamon extract | pH: 7-8",
        uses: "Daily skincare routine, natural antibacterial cleansing, aromatherapy benefits during bathing."
      },
      "Cinnamon Induced Tea": {
        features: [
          { icon: Heart, text: "Wellness & Health Benefits" },
          { icon: Leaf, text: "Premium Tea Blend" },
          { icon: Shield, text: "Aromatic Experience" }
        ],
        specifications: "Blend: Ceylon black tea 70%, Cinnamon 30% | Caffeine: Medium | Pack: 25 tea bags",
        uses: "Morning energizer, digestive aid, metabolism support, and stress relief. Best enjoyed hot or iced."
      },
      "Cinnamon Oil Extract": {
        features: [
          { icon: Shield, text: "Therapeutic Grade Quality" },
          { icon: Leaf, text: "Pure Essential Oil" },
          { icon: Heart, text: "Aromatherapy Benefits" }
        ],
        specifications: "Purity: 100% | Extraction: Steam distillation | Volume: 10ml, 30ml",
        uses: "Aromatherapy, massage oil blend, natural air freshener, and therapeutic applications."
      }
    };
    return details[title as keyof typeof details] || details["Ceylon Cinnamon Sticks"];
  };

  const productDetails = getProductDetails(title);

  const handleLearnMoreClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(`Toggling ${title}: ${!isExpanded}`);
    setIsExpanded(prevState => !prevState);
  };

  return (
    <div className="w-full">
      <Card className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-64 transition-transform duration-300 hover:scale-105" 
          />
        </div>
        
        <CardContent className="p-6">
          <h3 className="font-display text-xl font-bold text-deep-brown mb-3">{title}</h3>
          <p className="text-deep-brown/70 mb-4 leading-relaxed">{description}</p>
          
          <button 
            onClick={handleLearnMoreClick}
            className="flex justify-between items-center w-full text-left bg-transparent border-none p-0 cursor-pointer focus:outline-none hover:bg-gray-50 rounded-lg px-2 py-1 transition-colors duration-200"
            type="button"
            aria-expanded={isExpanded}
            aria-controls={`product-details-${title.replace(/\s+/g, '-').toLowerCase()}`}
          >
            <span className="text-warm-brown font-semibold">Learn More</span>
            <ChevronDown 
              className={`text-warm-brown transition-transform duration-300 w-5 h-5 ${
                isExpanded ? 'rotate-180' : 'rotate-0'
              }`} 
            />
          </button>

          <div 
            id={`product-details-${title.replace(/\s+/g, '-').toLowerCase()}`}
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isExpanded 
                ? 'max-h-screen opacity-100 mt-4' 
                : 'max-h-0 opacity-0 mt-0'
            }`}
            style={{ 
              maxHeight: isExpanded ? '1000px' : '0px',
              transition: 'max-height 0.5s ease-in-out, opacity 0.3s ease-in-out, margin-top 0.3s ease-in-out'
            }}
          >
            <div className="border-t border-gray-200 pt-4 space-y-4">
              <div>
                <h4 className="font-semibold text-deep-brown mb-3 text-lg">Key Features</h4>
                <div className="space-y-3">
                  {productDetails.features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={`${title}-feature-${index}`} className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <Icon className="text-warm-brown w-5 h-5" />
                        </div>
                        <span className="text-sm text-deep-brown/80 leading-relaxed">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-deep-brown mb-2 text-lg">Specifications</h4>
                <p className="text-sm text-deep-brown/70 leading-relaxed">{productDetails.specifications}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-deep-brown mb-2 text-lg">Uses & Benefits</h4>
                <p className="text-sm text-deep-brown/70 leading-relaxed">{productDetails.uses}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
