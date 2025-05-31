import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
}

const ProductCard = ({ title, description, image, onClick }: ProductCardProps) => {
  return (
    <Card className="product-card" onClick={onClick}>
      <img src={image} alt={title} className="product-card-image" />
      <CardContent className="p-6">
        <h3 className="font-display text-xl font-bold text-deep-brown mb-3">{title}</h3>
        <p className="text-deep-brown/70 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-warm-brown font-semibold">Learn More</span>
          <ArrowRight className="text-warm-brown group-hover:translate-x-2 transition-transform w-5 h-5" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
