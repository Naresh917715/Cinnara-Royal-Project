
import { ArrowRight, ChevronDown, Leaf, Shield, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
}

const ProductCard = ({ title, description, image }: ProductCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

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

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="product-card">
      <img src={image} alt={title} className="product-card-image" />
      <CardContent className="p-6">
        <h3 className="font-display text-xl font-bold text-deep-brown mb-3">{title}</h3>
        <p className="text-deep-brown/70 mb-4">{description}</p>
        
        <button 
          onClick={handleToggle}
          className="flex justify-between items-center w-full text-left bg-transparent border-none p-0 cursor-pointer"
        >
          <span className="text-warm-brown font-semibold">Learn More</span>
          <ChevronDown className={`text-warm-brown transition-transform duration-300 w-5 h-5 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="border-t border-gray-200 pt-4 space-y-4">
            <div>
              <h4 className="font-semibold text-deep-brown mb-2">Key Features</h4>
              <div className="space-y-2">
                {productDetails.features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon className="text-warm-brown w-4 h-4" />
                      <span className="text-sm text-deep-brown/80">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-deep-brown mb-2">Specifications</h4>
              <p className="text-sm text-deep-brown/70">{productDetails.specifications}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-deep-brown mb-2">Uses & Benefits</h4>
              <p className="text-sm text-deep-brown/70">{productDetails.uses}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
