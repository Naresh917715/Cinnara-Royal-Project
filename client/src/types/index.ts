
export interface Product {
  title: string;
  description: string;
  image: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Certification {
  icon: any;
  title: string;
  description: string;
  color: string;
}

export interface NavigationLink {
  name: string;
  path: string;
}

export interface SocialLink {
  name: string;
  url: string;
}
