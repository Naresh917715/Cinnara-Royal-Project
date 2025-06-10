
export const APP_CONFIG = {
  name: "Cinnara Royal",
  tagline: "Premium Ceylon Cinnamon",
  description: "World's finest Ceylon cinnamon from Sri Lanka",
  version: "1.0.0",
  api: {
    baseUrl: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5100/api'
  },
  features: {
    youtubePopup: true,
    newsletter: true,
    contactForm: true
  }
};

export const SEO_CONFIG = {
  defaultTitle: "Cinnara Royal - Premium Ceylon Cinnamon from Sri Lanka",
  defaultDescription: "Discover the world's finest Ceylon cinnamon products. Hand-harvested and traditionally processed in Sri Lanka.",
  keywords: "Ceylon cinnamon, Sri Lanka spices, organic cinnamon, cinnamon sticks, cinnamon powder",
  author: "Cinnara Royal"
};
