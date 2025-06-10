import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { validateEmail } from "@/lib/utils";
import YouTubePopup from "@/components/YouTubePopup";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [showYouTubePopup, setShowYouTubePopup] = useState(false);

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem('hasShownYouTubePopup');
    let scrollTimeout: NodeJS.Timeout;

    const scrollHandler = () => {
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
          sessionStorage.setItem('hasShownYouTubePopup', 'true');
        }, 200);
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message! We will get back to you soon.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });

    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      content: (
        <>
          No. 18/1,<br />
          2nd Lane, Rathmalana,<br />
          Postcode: 10390<br />
          Sri Lanka
        </>
      )
    },
    {
      icon: Phone,
      title: "Contact Numbers",
      content: (
        <>
          <p><strong>Ranul Seneviratne:</strong> +94 77177 4033</p>
          <p><strong>Rasesh Ekanayaka:</strong> +44 7961 284282</p>
        </>
      )
    },
    {
      icon: Mail,
      title: "Email",
      content: <p>info@cinnaraoya.com</p>
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: (
        <>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 2:00 PM</p>
          <p>Sunday: Closed</p>
        </>
      )
    }
  ];

  const subjects = [
    "General Inquiry",
    "Product Information",
    "Wholesale Orders",
    "Shipping & Delivery",
    "Other"
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24 bg-warm-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="section-heading">
              Contact Us
            </h1>
            <p className="text-lg text-deep-brown/70 max-w-3xl mx-auto">
              We'd love to hear from you. Get in touch with us for any inquiries about our premium Ceylon cinnamon products.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="bg-white shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-warm-brown rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="text-white w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-deep-brown mb-3">{info.title}</h3>
                          <div className="text-deep-brown/80 leading-relaxed">
                            {info.content}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold text-deep-brown mb-6">Send us a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-deep-brown font-semibold mb-2">First Name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="focus:ring-warm-brown focus:border-warm-brown"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-deep-brown font-semibold mb-2">Last Name</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="focus:ring-warm-brown focus:border-warm-brown"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-deep-brown font-semibold mb-2">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="focus:ring-warm-brown focus:border-warm-brown"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-deep-brown font-semibold mb-2">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="focus:ring-warm-brown focus:border-warm-brown"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-deep-brown font-semibold mb-2">Subject</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger className="focus:ring-warm-brown focus:border-warm-brown">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject} value={subject}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-deep-brown font-semibold mb-2">Message</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="focus:ring-warm-brown focus:border-warm-brown resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* YouTube Popup */}
      <YouTubePopup 
        isVisible={showYouTubePopup} 
        onClose={() => setShowYouTubePopup(false)} 
      />
    </div>
  );
};

export default Contact;