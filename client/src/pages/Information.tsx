import { Leaf, IdCard, Globe, Shield, Award, TreePine, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Information = () => {
  const certifications = [
    {
      icon: Leaf,
      title: "USDA Organic Certified",
      description: "Our organic products meet strict USDA organic standards, ensuring no synthetic pesticides or fertilizers.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: IdCard,
      title: "ISO 22000:2018",
      description: "Food safety management system certification ensuring the highest standards of food safety.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Globe,
      title: "Fair Trade Certified",
      description: "Supporting fair wages and sustainable practices for our farming communities in Sri Lanka.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Shield,
      title: "HACCP Compliant",
      description: "Hazard Analysis Critical Control Points system ensures food safety throughout our process.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Award,
      title: "GMP Certified",
      description: "Good Manufacturing Practices certification ensuring consistent quality and safety.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: TreePine,
      title: "Rainforest Alliance",
      description: "Promoting sustainable agriculture and protecting biodiversity in our farming practices.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  const privacyPoints = [
    "We collect only necessary information for order processing",
    "Your data is securely stored and never shared with third parties",
    "You can request data deletion at any time"
  ];

  const cookiePoints = [
    "Essential cookies for website functionality",
    "Analytics cookies to improve user experience",
    "No tracking cookies without consent"
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="section-heading">
              Information & Certifications
            </h1>
            <p className="text-lg text-deep-brown/70 max-w-3xl mx-auto">
              Transparency and quality assurance are at the heart of everything we do.
            </p>
          </div>

          {/* Detailed Certifications */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow text-center">
                  <CardContent className="p-8">
                    <div className={`w-20 h-20 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-deep-brown mb-4">{cert.title}</h3>
                    <p className="text-deep-brown/70">{cert.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Policies Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-warm-cream">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold text-deep-brown mb-6">Privacy Policy</h3>
                <div className="space-y-4 text-deep-brown/80">
                  <p>
                    At Cinnara Royal, we are committed to protecting your privacy and personal information. 
                    This policy outlines how we collect, use, and safeguard your data.
                  </p>
                  <ul className="space-y-2">
                    {privacyPoints.map((point, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className="text-warm-brown w-5 h-5 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" className="text-warm-brown font-semibold p-0 h-auto">
                    Read Full Policy
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-soft-cream">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold text-deep-brown mb-6">Cookie Policy</h3>
                <div className="space-y-4 text-deep-brown/80">
                  <p>
                    We use cookies to enhance your browsing experience and provide personalized content. 
                    You have full control over cookie preferences.
                  </p>
                  <ul className="space-y-2">
                    {cookiePoints.map((point, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className="text-warm-brown w-5 h-5 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" className="text-warm-brown font-semibold p-0 h-auto">
                    Manage Preferences
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Information;
