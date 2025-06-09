# Technical Documentation - Cinnara Royal Website

## Component Architecture

### Core Components

#### 1. Navigation Component (`client/src/components/Navigation.tsx`)
**Purpose**: Main site navigation with responsive mobile menu

**Features**:
- Fixed header with scroll-based styling
- Logo with company branding
- Desktop horizontal menu
- Mobile hamburger menu
- Active page highlighting
- Smooth transitions

**State Management**:
- `isOpen`: Controls mobile menu visibility
- `isScrolled`: Triggers header styling changes
- `location`: Current route for active states

**Responsive Behavior**:
- Desktop: Horizontal navigation bar
- Mobile: Collapsible hamburger menu

#### 2. Footer Component (`client/src/components/Footer.tsx`)
**Purpose**: Site footer with company info and newsletter signup

**Sections**:
- Company information and social links
- Quick navigation links
- Newsletter subscription form
- Legal links (Privacy, Terms, Cookies)

**Features**:
- Newsletter form with validation
- Social media icons (Facebook, Instagram, LinkedIn, YouTube)
- Multi-column responsive layout

#### 3. ProductCard Component (`client/src/components/ProductCard.tsx`)
**Purpose**: Reusable product display card

**Props**:
- `title`: Product name
- `description`: Product description
- `image`: Product image URL
- `onClick`: Click handler function

**Styling**:
- Hover animations and transitions
- Shadow effects
- Rounded corners
- Arrow icon for interaction

#### 4. FAQ Component (`client/src/components/FAQ.tsx`)
**Purpose**: Accordion-style FAQ section

**Props**:
- `items`: Array of FAQ objects with question/answer

**Features**:
- Expandable/collapsible answers
- Smooth animations
- Single-item expansion
- Chevron icon indicators

### Page Components

#### 1. Home Page (`client/src/pages/Home.tsx`)
**Sections**:

**Hero Section**:
- Company logo/sticker design
- Main headline with animated text
- Product showcase images
- Call-to-action buttons

**Company Description**:
- Welcome message
- Company story text
- Side-by-side image and text layout

**Product Range**:
- Grid of ProductCard components
- 5 main product categories
- Responsive grid layout

**Certifications Carousel**:
- Interactive slideshow using Shadcn Carousel
- 6 certification cards
- Navigation arrows
- Auto-looping functionality
- Responsive: 1 mobile, 2 tablet, 3 desktop

**Gallery Preview**:
- 4 featured images
- Hover effects
- Link to full gallery

**FAQ Section**:
- 4 common questions
- Accordion-style answers

#### 2. About Page (`client/src/pages/About.tsx`)
**Structure**:

**Hero Section**:
- Full-width plantation image
- Overlay text
- Gradient background

**Company Story**:
- Detailed narrative
- Professional typography
- Multi-paragraph content

**Vision, Mission, Values**:
- 3-column grid layout
- Icon-based cards
- Expandable values list

#### 3. Products Page (`client/src/pages/Products.tsx`)
**Layout Pattern**:
- Alternating image/text sections
- Full-width product showcases
- Feature lists with icons
- Responsive image positioning

**Products**:
1. Ceylon Cinnamon Sticks
2. Ceylon Cinnamon Powder
3. Ceylon Cinnamon Soap
4. Cinnamon Induced Tea
5. Cinnamon Oil Extract

#### 4. Information Page (`client/src/pages/Information.tsx`)
**Certifications Grid**:
- 6 certification cards
- Icon-based design
- Colored backgrounds
- Detailed descriptions

**Policy Sections**:
- Privacy Policy overview
- Cookie Policy details
- Structured with bullet points

#### 5. Contact Page (`client/src/pages/Contact.tsx`)
**Contact Information Cards**:
- Office address
- Phone numbers
- Email address
- Business hours

**Contact Form**:
- React Hook Form implementation
- Field validation
- Success/error notifications
- Required field indicators

**Form Fields**:
- First Name (required)
- Last Name (required)
- Email (required, validated)
- Phone (optional)
- Subject (dropdown selection)
- Message (required, textarea)

#### 6. Gallery Page (`client/src/pages/Gallery.tsx`)
**Image Grid**:
- Masonry-style layout
- Variable image sizes
- Hover effects with overlay
- Category-based organization

**Lightbox Functionality**:
- Full-screen image viewing
- Click to open/close
- Overlay background
- Close button

**Categories**:
- Plantation images
- Processing photos
- Factory facilities

## Styling System

### Theme Configuration (`client/src/index.css`)

**CSS Custom Properties**:
```css
:root {
  --cream: 32 24% 97%;        /* #FAF7F2 */
  --warm-cream: 30 20% 91%;   /* #EFE6DA */
  --soft-cream: 35 18% 88%;   /* #E1D9CD */
  --warm-brown: 25 55% 45%;   /* #8B4513 */
  --deep-brown: 20 14% 15%;   /* #3E2723 */
  --dull-yellow: 45 56% 78%;  /* #F5DEB3 */
}
```

**Custom Component Classes**:
- `.btn-primary`: Main action buttons
- `.btn-secondary`: Secondary outlined buttons
- `.section-heading`: Consistent heading styles
- `.product-card`: Product display cards
- `.fade-in`: Scroll animation utility

**Responsive Design**:
- Mobile-first approach
- Tailwind CSS breakpoints
- Flexible grid systems
- Scalable typography

## State Management

### Local State (useState)
- Component-specific UI states
- Form data management
- Modal/drawer visibility
- Animation triggers

### Form Handling (React Hook Form)
- Contact form validation
- Newsletter signup
- Error state management
- Success notifications

### Routing (Wouter)
- Client-side navigation
- Active page detection
- Route-based components

## API Integration

### Query Client Setup (`client/src/lib/queryClient.ts`)
**Configuration**:
- TanStack Query setup
- Error handling utilities
- Request/response interceptors
- Cache management

**Utility Functions**:
- `apiRequest`: HTTP request wrapper
- `getQueryFn`: Query function generator
- Error boundary handling

## Development Tools

### Vite Configuration
- Fast development server
- Hot module replacement
- Build optimization
- Asset processing

### TypeScript Integration
- Type safety across components
- Interface definitions
- Prop validation
- Error prevention

### Tailwind CSS
- Utility-first styling
- Custom theme integration
- Responsive design utilities
- Component composition

## Performance Optimizations

### Image Handling
- Optimized image sizes
- Responsive image sources
- Lazy loading implementation
- WebP format support

### Code Splitting
- Route-based splitting
- Component lazy loading
- Bundle optimization
- Dynamic imports

### Caching Strategy
- Browser caching headers
- Service worker implementation
- Static asset caching
- API response caching

## Accessibility Features

### Keyboard Navigation
- Tab order management
- Focus indicators
- Keyboard shortcuts
- Screen reader support

### ARIA Labels
- Semantic HTML structure
- Proper heading hierarchy
- Alternative text for images
- Form label associations

### Color Contrast
- WCAG compliant colors
- Sufficient contrast ratios
- Focus indicators
- Error state visibility

## Browser Compatibility

### Supported Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Polyfills
- CSS Grid support
- Flexbox fallbacks
- ES6 feature support
- Mobile browser optimizations

## File Organization

### Component Structure
```
components/
├── ui/              # Shadcn UI components
├── Navigation.tsx   # Site navigation
├── Footer.tsx       # Site footer
├── ProductCard.tsx  # Product display
└── FAQ.tsx         # FAQ accordion
```

### Page Structure
```
pages/
├── Home.tsx        # Landing page
├── About.tsx       # Company information
├── Products.tsx    # Product showcase
├── Information.tsx # Policies & certifications
├── Contact.tsx     # Contact form
└── Gallery.tsx     # Image gallery
```

### Utility Structure
```
lib/
├── utils.ts        # Helper functions
└── queryClient.ts  # API configuration

hooks/
└── use-toast.ts    # Toast notifications
```

## Deployment Configuration

### Build Process
1. TypeScript compilation
2. CSS processing and purging
3. Asset optimization
4. Bundle generation
5. Static file preparation

### Environment Variables
- API endpoints
- Feature flags
- Analytics keys
- External service URLs

### Static Hosting
- Optimized for CDN delivery
- Gzip compression
- Cache headers
- Error page handling

## Maintenance Guidelines

### Code Standards
- TypeScript strict mode
- ESLint configuration
- Prettier formatting
- Component documentation

### Testing Strategy
- Component unit tests
- Integration testing
- E2E testing
- Performance monitoring

### Update Procedures
- Dependency management
- Security updates
- Feature additions
- Bug fix deployment