import { Leaf, Heart, Utensils, Bath, HandHelping, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      title: "Ceylon Cinnamon Sticks",
      description: "Our premium Ceylon cinnamon sticks are hand-harvested from the finest cinnamon trees in Sri Lanka. Each quill features the characteristic paper-thin layers and sweet, delicate flavor that makes Ceylon cinnamon the world's most prized variety.",
      image: "../../src/assets/productSticks.jpeg", 
      features: [
        { icon: Leaf, text: "100% Pure Ceylon Cinnamon" },
        { icon: HandHelping, text: "Hand-harvested & Artisanally Processed" },
        { icon: Shield, text: "Organic & Conventional Options" }
      ],
      reverse: false
    },
    {
      title: "Ceylon Cinnamon Powder",
      description: "Finely ground from pure Ceylon cinnamon bark, our powder maintains all the natural oils and compounds that make Ceylon cinnamon exceptional. Perfect for baking, cooking, and wellness applications.",
      image: "../../src/assets/productPowder.jpeg",
      features: [
        { icon: Utensils, text: "Finely Ground to Perfection" },
        { icon: Heart, text: "Rich in Antioxidants" },
        { icon: Utensils, text: "Perfect for Culinary Use" }
      ],
      reverse: true
    },
    {
      title: "Cinnamon Oil Extract",
      description: "Pure essential oil extracted from Ceylon cinnamon for therapeutic and aromatic use. Our oil maintains the full spectrum of beneficial compounds found in authentic Ceylon cinnamon.",
      image: "../../src/assets/productOil.jpeg",  
      features: [
        { icon: Bath, text: "Therapeutic Grade Quality" },
        { icon: Leaf, text: "Pure Essential Oil" },
        { icon: Heart, text: "Aromatherapy Benefits" }
      ],
      reverse: false
    },
    {
      title: "Ceylon Cinnamon Soap",
      description: "Luxurious handcrafted soap infused with pure Ceylon cinnamon oil and natural ingredients. Experience the antimicrobial and antioxidant properties of Ceylon cinnamon in your daily skincare routine.",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      features: [
        { icon: Bath, text: "Natural Skincare Benefits" },
        { icon: HandHelping, text: "Handcrafted with Care" },
        { icon: Shield, text: "Antimicrobial Properties" }
      ],
      reverse: false
    },
    {
      title: "Cinnamon Induced Tea",
      description: "Premium tea blend enhanced with authentic Ceylon cinnamon for wellness and flavor. Each cup delivers the therapeutic benefits of true cinnamon while providing a delightful aromatic experience.",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      features: [
        { icon: Heart, text: "Wellness & Health Benefits" },
        { icon: Leaf, text: "Premium Tea Blend" },
        { icon: Bath, text: "Aromatic Experience" }
      ],
      reverse: true
    },
    
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="section-heading">
              Our Premium Product Collection
            </h1>
            <p className="text-lg text-deep-brown/70 max-w-3xl mx-auto">
              Each product in our collection represents the pinnacle of Ceylon cinnamon quality, carefully crafted 
              for your wellness and culinary enjoyment.
            </p>
          </div>

          {/* Product Detailed Showcase */}
          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-0 ${product.reverse ? 'lg:grid-flow-col-dense' : ''}`}>
                  <img 
                    src={product.image} 
                    alt={`${product.title} Detail`} 
                    className={`w-full h-96 lg:h-full object-cover ${product.reverse ? 'lg:col-start-2' : ''}`} 
                  />
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${product.reverse ? 'lg:col-start-1' : ''}`}>
                    <h3 className="font-display text-3xl font-bold text-deep-brown mb-4">{product.title}</h3>
                    <p className="text-deep-brown/80 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="space-y-4 mb-6">
                      {product.features.map((feature, featureIndex) => {
                        const Icon = feature.icon;
                        return (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <Icon className="text-warm-brown w-5 h-5" />
                            <span className="text-deep-brown/80">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
