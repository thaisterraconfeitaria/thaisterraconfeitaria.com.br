
> **Purpose**: Website Landing Page for Thais Terra Cake Shop
> **Last Updated**: 2025-11-24

---

## 1. Context

### Project Background
Thais Terra Cake Shop is a premium confectionery business where renowned chef Thais Terra creates high-end cakes and sweets for commemorative events. This is a landing page website to showcase the business, chef, and menu offerings.

### Current Situation
Starting from scratch - no existing website. Need a complete responsive landing page with modern design and video integration.

### Business Requirements
- **Target Audience**: High-end clients seeking premium cakes for special events
- **Brand Positioning**: Luxury, artisanal, professional chef-driven
- **Key Message**: Quality craftsmanship, renowned chef, exclusive commemorative events

### Relevant Files/Code
```
New project - no existing files
Target structure:
- src/
  - index.html (main page)
  - css/ (stylesheets)
  - js/ (scripts)
  - assets/ (images, videos)
Dockerfile
.gitignore
docker-compose.yml
```

---

## 2. Objective

### Primary Goal
Create a professional, responsive landing page website for Thais Terra Cake Shop using HTML5, CSS3, and JavaScript with Bootstrap 5.3 framework.

### Success Criteria
- [x] Fully responsive design (mobile-first approach)
- [x] Fixed navigation menu with smooth scrolling
- [x] Hero section with auto-playing video carousel
- [x] About section with chef description and photo
- [x] Menu section accessible from navigation
- [x] Professional design matching luxury brand positioning
- [x] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [x] Fast load times and optimized performance

---

## 3. Requirements

### Functional Requirements

#### Navigation Menu
1. Fixed top navigation bar (sticky header)
2. Menu items: "Home" and "Cardápio" (Menu)
3. Must remain visible during scroll
4. z-index higher than page content
5. Smooth scroll to sections when clicked

#### Hero Section
1. Full viewport height (100vh)
2. Background video carousel with auto-play
3. Multiple videos playing in sequence
4. Non-interactive videos (no controls visible)
5. Automatic loop - when last video ends, restart from first
6. Videos should be muted for autoplay compliance
7. Overlay text/logo option for branding

#### About Section
1. Two-column layout (desktop) / stacked (mobile)
2. Left column: Description of Thais Terra Cake Shop
3. Right column: Professional photo of Chef Thais Terra
4. Responsive layout with proper spacing
5. Professional typography and styling

#### Menu Section (Cardápio)
1. Display cake and sweet offerings
2. Professional presentation with images
3. Category organization if needed
4. Responsive grid layout

### Technical Constraints

- **Must use**:
  - HTML5 semantic elements
  - CSS3 (custom styles + Bootstrap utilities)
  - Bootstrap v5.3.x framework
  - Vanilla JavaScript (no jQuery required)
  - Mobile-first responsive design approach

- **Must avoid**:
  - External dependencies beyond Bootstrap
  - Heavy libraries that slow page load
  - Non-semantic HTML markup
  - Inline styles (use CSS files)

- **Should follow**:
  - Bootstrap 5.3 best practices and conventions
  - Accessibility standards (WCAG 2.1 Level AA)
  - SEO best practices (meta tags, semantic HTML)
  - Modern ES6+ JavaScript syntax
  - BEM or similar CSS naming methodology

### Quality Standards

- **Performance**:
  - Page load time < 3 seconds on 3G connection
  - Optimized images (WebP format preferred)
  - Lazy loading for below-fold content
  - Minified CSS and JavaScript for production

- **Accessibility**:
  - Proper ARIA labels where needed
  - Keyboard navigation support
  - Screen reader friendly
  - Sufficient color contrast ratios

- **Responsiveness**:
  - Mobile breakpoint: 320px - 767px
  - Tablet breakpoint: 768px - 991px
  - Desktop breakpoint: 992px+
  - Touch-friendly tap targets (min 44x44px)

- **Maintainability**:
  - Clean, commented code
  - Organized file structure
  - Reusable CSS classes
  - Modular JavaScript functions

---

## 4. Scope

### In Scope
- Single-page landing page (index.html)
- Fixed navigation with smooth scrolling
- Hero section with video carousel functionality
- About section with chef bio and photo
- Menu section (Cardápio) with basic layout
- Responsive design (mobile, tablet, desktop)
- Bootstrap 5.3 integration
- Basic JavaScript for video carousel and navigation
- CSS styling for professional appearance
- Placeholder content and structure

### Out of Scope
- Backend functionality (PHP, Node.js, databases)
- Contact forms with email integration
- E-commerce/shopping cart functionality
- Content management system (CMS)
- Multi-page navigation structure
- Blog or news section
- User authentication/login
- Social media feed integration
- Analytics setup (Google Analytics, etc.)
- Hosting and deployment configuration
- Domain registration and DNS setup
- Actual production content (real photos, videos, text)

---

## 5. Additional Context

### Related Work
- Bootstrap 5.3 Documentation: https://getbootstrap.com/docs/5.3/
- HTML5 Video API: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
- Mobile-First Design Principles
- Accessibility Guidelines (WCAG 2.1)

### Known Issues/Considerations

**Video Autoplay**:
- Modern browsers require videos to be muted for autoplay
- iOS Safari has specific autoplay restrictions
- Consider providing fallback image for slow connections
- File size optimization critical for mobile performance

**Browser Compatibility**:
- Test video formats across browsers (MP4 recommended)
- Ensure Bootstrap components work in all target browsers
- Fallback for older browsers without video support

**Performance**:
- Large video files can impact load time significantly
- Consider lazy loading for menu images
- Optimize all assets before deployment

**Content Requirements**:
- Placeholder text needed for "About" section
- Menu items/categories structure required
- High-quality videos for hero section needed
- Professional chef photo required

### Examples/References

**Similar Premium Food Business Websites**:
- Modern bakery landing pages with video backgrounds
- Restaurant websites with chef profiles
- Luxury food brand single-page designs
- Clean, elegant layouts with focus on imagery

**Design Inspiration**:
- Minimalist navigation patterns
- Full-screen hero sections with video
- Elegant typography for luxury brands
- High-end food photography presentation


---

## 6. Preferred Approach

### Methodology
- [x] Mobile-first responsive design (start with mobile layout, then scale up)
- [x] Iterative development (build section by section)
- [x] Component-based approach (reusable CSS classes)
- [x] Progressive enhancement (basic functionality first, enhancements after)

**Development Sequence**:
1. HTML structure with semantic elements
2. Mobile layout with Bootstrap grid
3. Navigation functionality and styling
4. Hero section with video carousel
5. About section layout
6. Menu section layout
7. Responsive breakpoints (tablet, desktop)
8. Polish and refinements

### Tools/Patterns

**Framework & Libraries**:
- Bootstrap 5.3.x (CDN or local)
- Native JavaScript (ES6+)
- CSS3 with custom properties (CSS variables)

**Design Patterns**:
- Mobile-first responsive design
- BEM CSS naming methodology (or similar)
- Semantic HTML5 structure
- Progressive enhancement approach

**File Organization**:
```
project/
├── index.html
├── css/
│   ├── styles.css (custom styles)
│   └── bootstrap.min.css (if local)
├── js/
│   ├── main.js (custom scripts)
│   └── bootstrap.bundle.min.js (if local)
└── assets/
    ├── images/
    │   ├── chef-photo.jpg
    │   └── menu-items/
    └── videos/
        ├── video1.mp4
        ├── video2.mp4
        └── video3.mp4
```

**CSS Architecture**:
- Use CSS custom properties for theming
- Organize by component/section
- Maintain separation: layout → components → utilities
- Mobile styles first, desktop in media queries


---

## 7. Expected Output

### Deliverables
- [x] **index.html** - Complete HTML structure with semantic elements
- [x] **css/styles.css** - Custom CSS styling for all sections
- [x] **js/main.js** - JavaScript for video carousel and navigation
- [x] **File structure** - Organized directory layout
- [x] **Code comments** - Explaining key functionality and sections
- [x] **README.md** - Basic setup and usage instructions
- [ ] Asset placeholders - Sample images/videos or references

### Output Format
- [x] **Working code ready to use** - Can open index.html directly in browser
- [x] **Code comments** - Inline documentation for key sections
- [x] **Implementation notes** - Brief explanation of technical decisions
- [x] **Setup instructions** - How to add real content (videos, images, text)

### File Deliverables

**index.html**:
- Complete semantic HTML5 structure
- Bootstrap 5.3 integration
- All sections properly marked up
- SEO meta tags included
- Accessibility attributes

**css/styles.css**:
- Mobile-first responsive styles
- CSS custom properties for theming
- Organized by section/component
- Bootstrap utility overrides as needed
- Professional, clean design

**js/main.js**:
- Video carousel functionality
- Smooth scroll navigation
- Mobile menu toggle (if needed)
- Clean, modular ES6+ code
- Performance optimized

**README.md**:
- Project overview
- File structure explanation
- How to add real content
- Browser compatibility notes
- Deployment considerations

---

## 8. Questions/Clarifications

### Content Questions
1. **About Section Text**: Do you have prepared text for the chef/business description, or should placeholder text be used?
2. **Menu Items**: What categories and items should be displayed in the menu section? (e.g., Wedding Cakes, Birthday Cakes, Custom Sweets)
3. **Video Count**: How many videos for the hero carousel? (Currently assuming 3-5 videos)
4. **Brand Colors**: Are there specific brand colors/fonts to use, or should elegant defaults be chosen?

### Design Questions
1. **Logo**: Is there a business logo to include in the navigation?
2. **Contact Information**: Should contact details (phone, email, social media) be included anywhere?
3. **Call-to-Action**: Should there be a "Contact Us" or "Order Now" button prominently displayed?
4. **Additional Sections**: Are any other sections needed beyond Home, Hero, About, and Menu?

### Technical Questions
1. **Bootstrap Source**: Should Bootstrap be loaded from CDN or included locally?
2. **Video Format**: What video formats are available? (MP4 recommended for best compatibility)
3. **Hosting Environment**: Where will this be hosted? (affects asset paths and optimization)

---

## Notes

### Design Considerations
- Luxury brand aesthetic requires high-quality imagery and elegant typography
- White space and clean layouts emphasize premium positioning
- Video quality critical for first impression
- Mobile experience equally important as desktop for modern users

### Technical Notes
- Video carousel requires careful handling of ended events
- Mobile browsers have strict autoplay policies (mute required)
- Consider performance budget for video file sizes
- Lazy loading can improve initial page load

### Future Enhancements (Out of Current Scope)
- Contact form integration
- Image gallery for portfolio
- Testimonials section
- Instagram feed integration
- Online ordering system
- Multi-language support (PT/EN)

