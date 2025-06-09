# Cinnara Royal - Premium Ceylon Cinnamon Website

## Project Overview

This is a premium static website for **Cinnara Royal Pvt. Limited**, showcasing authentic Ceylon cinnamon products from Sri Lanka. The website features a sophisticated cream and brown color scheme, responsive design, and comprehensive product information.

## 🌟 Key Features

### Design & User Experience
- **Premium Color Scheme**: Cream, warm brown, and dull yellow palette
- **Responsive Design**: Optimized for mobile, tablet, laptop, and desktop screens
- **Professional Typography**: Playfair Display for headings, Inter for body text
- **Smooth Animations**: Hover effects, transitions, and scroll animations
- **SEO Optimized**: Meta tags, descriptions, and structured content

### Core Sections
1. **Home Page**: Hero section, company intro, products showcase, certifications carousel, gallery preview, FAQ
2. **About Us**: Company story, vision, mission, values, and heritage
3. **Products**: Detailed showcase of 5 product categories
4. **Information**: Certifications, privacy policy, cookie policy
5. **Contact Us**: Contact form, office information, business hours
6. **Gallery**: Image showcase with lightbox functionality

## 📁 Project Structure

```
├── client/                     # Frontend application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── ui/            # Shadcn UI components
│   │   │   ├── Navigation.tsx  # Main navigation bar
│   │   │   ├── Footer.tsx     # Site footer
│   │   │   ├── ProductCard.tsx # Product display cards
│   │   │   └── FAQ.tsx        # FAQ accordion component
│   │   ├── pages/             # Main page components
│   │   │   ├── Home.tsx       # Landing page
│   │   │   ├── About.tsx      # Company information
│   │   │   ├── Products.tsx   # Product showcase
│   │   │   ├── Information.tsx # Policies & certifications
│   │   │   ├── Contact.tsx    # Contact form & info
│   │   │   └── Gallery.tsx    # Image gallery
│   │   ├── lib/               # Utilities and configuration
│   │   │   ├── utils.ts       # Helper functions
│   │   │   └── queryClient.ts # API client setup
│   │   ├── hooks/             # Custom React hooks
│   │   ├── App.tsx            # Main app component
│   │   ├── main.tsx           # App entry point
│   │   └── index.css          # Global styles and theme
│   └── index.html             # HTML template
├── server/                    # Backend (Express.js)
│   ├── index.ts              # Server entry point
│   ├── routes.ts             # API routes
│   ├── storage.ts            # Data storage interface
│   └── vite.ts               # Vite development setup
├── shared/                   # Shared types and schemas
│   └── schema.ts            # Database schema definitions
└── Configuration files...
```

## 🎨 Design System

### Color Palette
- **Primary Colors**:
  - Cream: `#FAF7F2` (main background)
  - Warm Brown: `#8B4513` (primary actions)
  - Deep Brown: `#3E2723` (text)
- **Secondary Colors**:
  - Warm Cream: `#EFE6DA` (sections)
  - Soft Cream: `#E1D9CD` (cards)
  - Dull Yellow: `#F5DEB3` (accents)

### Typography
- **Display Font**: Playfair Display (headings, logos)
- **Body Font**: Inter (paragraphs, UI text)
- **Script Font**: Cursive (taglines, signatures)

### Components
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Primary (brown), Secondary (outlined)
- **Forms**: Clean inputs with brown focus states
- **Navigation**: Fixed header with smooth scrolling

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 768px (1 column layouts)
- **Tablet**: 768px - 1024px (2 column layouts)
- **Desktop**: 1024px - 1440px (3+ column layouts)
- **Large Desktop**: 1440px+ (maximum width containers)

## 🛠 Technology Stack

### Frontend
- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Wouter**: Lightweight routing
- **Shadcn/UI**: High-quality UI components
- **React Query**: Data fetching and caching
- **React Hook Form**: Form handling and validation
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Fast build tool and dev server
- **ESBuild**: Fast TypeScript compilation
- **PostCSS**: CSS processing
- **Autoprefixer**: Browser compatibility

### Backend (Minimal)
- **Express.js**: Web server
- **Node.js**: Runtime environment
- **In-memory storage**: Simple data persistence

## 📄 Page Details

### 1. Home Page (`/`)
**Sections:**
- **Hero Section**: Logo, tagline, product images, CTA buttons
- **Company Introduction**: Welcome message, company story
- **Product Range**: 5 product cards with descriptions
- **Certifications Carousel**: Interactive slideshow of 6 certifications
- **Gallery Preview**: 4 featured images
- **FAQ Section**: 4 common questions with accordion

**Key Features:**
- Animated hero section with product showcase
- Interactive certification carousel
- Responsive product grid
- Smooth scroll animations

### 2. About Us (`/about`)
**Sections:**
- **Hero Image**: Plantation landscape with overlay text
- **Company Story**: Detailed narrative about Cinnara Royal
- **Vision & Mission**: Core company objectives
- **Values**: 7 key principles with icons

**Key Features:**
- Full-width hero image
- Professional typography
- Grid layout for vision/mission/values
- Expandable values section

### 3. Products (`/products`)
**Products Featured:**
1. **Ceylon Cinnamon Sticks**: Hand-harvested quills
2. **Ceylon Cinnamon Powder**: Finely ground for culinary use
3. **Ceylon Cinnamon Soap**: Luxury skincare product
4. **Cinnamon Induced Tea**: Wellness tea blend
5. **Cinnamon Oil Extract**: Essential oil for aromatherapy

**Key Features:**
- Alternating image/text layout
- Feature highlights for each product
- High-quality product images
- Detailed descriptions and benefits

### 4. Information (`/information`)
**Certifications:**
- USDA Organic Certified
- ISO 22000:2018
- Fair Trade Certified
- HACCP Compliant
- GMP Certified
- Rainforest Alliance

**Policies:**
- Privacy Policy overview
- Cookie Policy details
- Data protection information

### 5. Contact (`/contact`)
**Contact Information:**
- **Head Office**: No. 18/1, 2nd Lane, Rathmalana, 10390, Sri Lanka
- **Phone Numbers**: 
  - Ranul Seneviratne: +94 77177 4033
  - Rasesh Ekanayaka: +44 7961 284282
- **Business Hours**: Mon-Fri 9AM-6PM, Sat 9AM-2PM

**Features:**
- Interactive contact form
- Form validation
- Email and phone validation
- Success/error notifications

### 6. Gallery (`/gallery`)
**Image Categories:**
- **Plantation**: Cinnamon trees, harvesting scenes
- **Processing**: Traditional preparation methods
- **Factory**: Modern packaging facilities

**Features:**
- Masonry-style grid layout
- Lightbox functionality
- Category descriptions
- Hover effects and animations

## 🎯 SEO Optimization

### Meta Tags
- Unique titles for each page
- Descriptive meta descriptions
- Open Graph tags for social sharing
- Proper heading hierarchy (H1-H6)

### Content Strategy
- Keyword-rich content about Ceylon cinnamon
- Location-based SEO for Sri Lanka
- Product-focused landing pages
- Company credibility through certifications

## 🔧 Development Setup

### Prerequisites
- Node.js 20+
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd cinnara-royal-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## 🚀 Deployment

The website is optimized for static hosting on platforms like:
- Replit Deployments
- Netlify
- Vercel
- GitHub Pages

## 📈 Performance Features

- **Optimized Images**: Responsive images with proper sizing
- **Lazy Loading**: Images load as they come into view
- **Minimal JavaScript**: Lightweight React implementation
- **CSS Optimization**: Tailwind CSS purging for smaller bundle
- **Fast Loading**: Vite's optimized build process

## 🔒 Security Features

- Form validation and sanitization
- XSS protection through React
- HTTPS-ready configuration
- Privacy-compliant cookie handling

## 📱 Mobile Optimization

- Touch-friendly navigation
- Optimized image sizes for mobile
- Fast loading on slow connections
- Thumb-friendly button sizes
- Readable typography on small screens

## 🎨 Brand Guidelines

### Logo Usage
- Primary logo: Circular design with "CINNARA ROYAL" text
- Colors: Brown and cream combination
- Crown icon for premium positioning

### Voice & Tone
- Professional yet approachable
- Heritage and tradition focused
- Quality and authenticity emphasized
- Global market appeal

### Imagery Style
- Natural, authentic photography
- Warm, earthy color tones
- Traditional Sri Lankan elements
- Modern processing facilities

## 📞 Support & Maintenance

For technical support or content updates, contact the development team. The website is built with modern, maintainable code for easy updates and feature additions.

---

**Built for Cinnara Royal Pvt. Limited** - Bringing the world's finest Ceylon cinnamon to global markets through digital excellence.