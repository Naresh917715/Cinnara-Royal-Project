import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ = ({ items }: FAQProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <Card key={index} className="bg-white shadow-lg">
          <div
            className="p-6 cursor-pointer border-b border-gray-100"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg text-deep-brown">{item.question}</h3>
              {expandedIndex === index ? (
                <ChevronUp className="text-warm-brown transition-transform w-5 h-5" />
              ) : (
                <ChevronDown className="text-warm-brown transition-transform w-5 h-5" />
              )}
            </div>
          </div>
          {expandedIndex === index && (
            <CardContent className="px-6 pb-6">
              <p className="text-deep-brown/70">{item.answer}</p>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
};

export default FAQ;
