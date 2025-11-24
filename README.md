# Thais Terra Cake Shop - Website Landing Page

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)

Professional landing page for Thais Terra Cake Shop, a premium confectionery business specializing in high-end cakes and sweets for commemorative events.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Development](#development)
- [Docker Deployment](#docker-deployment)
- [Adding Content](#adding-content)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [License](#license)

## ✨ Features

- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Video Carousel**: Auto-playing background video carousel in hero section
- **Fixed Navigation**: Sticky navigation with smooth scrolling
- **Modern UI**: Clean, elegant design matching luxury brand positioning
- **Bootstrap 5.3**: Utilizing the latest Bootstrap framework
- **Semantic HTML5**: Proper semantic structure for SEO and accessibility
- **Animations**: Subtle scroll animations for enhanced user experience
- **Optimized Performance**: Lazy loading, compressed assets, efficient code

## 📁 Project Structure

```
thaisterraconfeitaria.com.br/
├── src/
│   ├── index.html              # Main HTML file
│   ├── css/
│   │   └── styles.css          # Custom styles (mobile-first)
│   ├── js/
│   │   └── main.js             # JavaScript functionality
│   └── assets/
│       ├── images/
│       │   ├── chef-thais-terra.jpg
│       │   └── menu-items/
│       │       ├── wedding-cake.jpg
│       │       ├── birthday-cake.jpg
│       │       ├── commemorative-cake.jpg
│       │       ├── custom-sweets.jpg
│       │       ├── cupcakes.jpg
│       │       └── dessert-table.jpg
│       └── videos/
│           ├── video1.mp4
│           ├── video2.mp4
│           └── video3.mp4
├── claudedocs/
│   └── prompt-template.md      # Project requirements documentation
├── Dockerfile                  # Docker configuration
├── docker-compose.yml          # Docker Compose setup
├── nginx.conf                  # Nginx server configuration
├── .gitignore                  # Git ignore file
└── README.md                   # This file
```

## 🚀 Quick Start

### Option 1: Local Development (Simple)

1. **Clone or download** the project
2. **Open** `src/index.html` in your web browser
3. That's it! The site will load with placeholder images/videos

### Option 2: Local Server (Recommended)

Using Python:
```bash
cd src
python -m http.server 8080
```

Using Node.js:
```bash
npx http-server src -p 8080
```

Then open `http://localhost:8080` in your browser.

### Option 3: Docker (Production-Like)

```bash
# Build and run with Docker Compose
docker-compose up -d

# Access at http://localhost:8080
```

## 💻 Development

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime, etc.)
- Optional: Docker for containerized deployment

### Making Changes

1. **HTML Structure**: Edit `src/index.html`
2. **Styles**: Modify `src/css/styles.css`
3. **JavaScript**: Update `src/js/main.js`
4. **Test**: Open in browser or use live server

### CSS Architecture

The CSS follows a mobile-first approach with:
- **CSS Custom Properties**: For easy theming and maintenance
- **Organized Sections**: Clear structure by component
- **Responsive Breakpoints**:
  - Mobile: 320px - 767px (default)
  - Tablet: 768px - 991px
  - Desktop: 992px+

### JavaScript Modules

The JavaScript is organized into classes:
- `VideoCarousel`: Manages hero section video playback
- `NavigationEffects`: Handles scroll effects and smooth navigation
- `SimpleAOS`: Scroll-based animations
- Utility functions for year update, image handling, accessibility

## 🐳 Docker Deployment

### Build and Run

```bash
# Build the Docker image
docker build -t thaisterra-website .

# Run the container
docker run -d -p 8080:80 --name thaisterra thaisterra-website

# Or use Docker Compose (recommended)
docker-compose up -d
```

### Docker Commands

```bash
# View logs
docker-compose logs -f

# Stop the container
docker-compose down

# Rebuild after changes
docker-compose up -d --build
```

## 📝 Adding Content

### Adding Images

1. Place images in `src/assets/images/` or `src/assets/images/menu-items/`
2. Recommended formats: **WebP** (best), JPG, PNG
3. Optimize images before adding (use tools like TinyPNG, Squoosh)
4. Recommended sizes:
   - Chef photo: 600x700px
   - Menu items: 400x300px
   - Hero overlay logo: 200x200px

### Adding Videos

1. Place videos in `src/assets/videos/`
2. **Required format**: MP4 (H.264 codec for best compatibility)
3. **Important**: Videos must be muted for autoplay to work
4. Recommended settings:
   - Resolution: 1920x1080 (Full HD)
   - Frame rate: 30fps
   - Bitrate: 3-5 Mbps
   - Duration: 10-30 seconds per video
5. Update video sources in `index.html`:
   ```html
   <video class="hero-video active" muted playsinline>
       <source src="assets/videos/your-video.mp4" type="video/mp4">
   </video>
   ```

### Updating Text Content

Edit `src/index.html` and search for:
- **About Section**: Update chef description
- **Menu Items**: Modify menu card titles and descriptions
- **Brand Name**: Change navigation brand text
- **Meta Tags**: Update SEO information in `<head>`

### Changing Colors/Branding

Edit CSS custom properties in `src/css/styles.css`:
```css
:root {
    --color-primary: #8B7355;     /* Main brand color */
    --color-accent: #D4AF37;      /* Accent/highlight color */
    --color-light: #F5F1ED;       /* Background light */
    --color-dark: #2C2416;        /* Text/dark elements */
}
```

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (limited support, no video autoplay)

## ⚡ Performance

### Optimization Checklist

- [x] Minified CSS and JavaScript (for production)
- [x] Optimized images (WebP format recommended)
- [x] Lazy loading for below-fold content
- [x] Gzip compression enabled (nginx)
- [x] Browser caching configured
- [x] Mobile-first responsive design

### Recommended Image Optimization

Before deploying, optimize all images:
```bash
# Using ImageMagick (example)
convert input.jpg -quality 85 -resize 800x600 output.jpg

# Using FFmpeg for videos
ffmpeg -i input.mp4 -vcodec h264 -acodec none -b:v 3M output.mp4
```

## ♿ Accessibility

The website follows WCAG 2.1 Level AA guidelines:

- ✅ Semantic HTML5 structure
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Sufficient color contrast
- ✅ Screen reader friendly
- ✅ Skip to content link

## 🔒 Security

Nginx configuration includes security headers:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy

## 📱 Testing

### Manual Testing Checklist

- [ ] Test on mobile devices (iOS Safari, Chrome Android)
- [ ] Test video autoplay on different browsers
- [ ] Verify smooth scrolling navigation
- [ ] Check responsive breakpoints
- [ ] Validate all links work
- [ ] Test with slow 3G connection
- [ ] Verify accessibility with screen reader

### Browser Developer Tools

Use Chrome DevTools for:
- **Mobile Simulation**: Device toolbar (Cmd/Ctrl + Shift + M)
- **Performance**: Lighthouse audit
- **Network**: Throttle to simulate slow connections
- **Accessibility**: Accessibility audit

## 🚢 Deployment

### Production Checklist

Before deploying to production:

- [ ] Replace placeholder images with real photos
- [ ] Add real video content (optimized)
- [ ] Update text content and descriptions
- [ ] Configure domain and SSL certificate
- [ ] Set up proper analytics (Google Analytics)
- [ ] Test on multiple devices and browsers
- [ ] Verify SEO meta tags
- [ ] Enable Gzip compression
- [ ] Set up monitoring/logging
- [ ] Configure backup strategy

### Hosting Options

- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **Traditional**: Shared hosting, VPS with nginx
- **Container**: Docker on AWS ECS, Google Cloud Run, Azure
- **CDN**: Cloudflare, AWS CloudFront

## 🛠️ Troubleshooting

### Videos Not Playing

1. Ensure videos are in MP4 format with H.264 codec
2. Videos must be muted for autoplay to work
3. Check browser console for errors
4. Verify video file paths are correct
5. Test with smaller video files first

### Styles Not Loading

1. Check CSS file path in HTML
2. Clear browser cache
3. Verify Bootstrap CDN is accessible
4. Check browser developer console for errors

### Navigation Not Working

1. Ensure section IDs match nav link hrefs
2. Check JavaScript console for errors
3. Verify Bootstrap JS is loaded
4. Test with JavaScript enabled

## 📧 Support

For questions or issues:
- Check the documentation in `claudedocs/prompt-template.md`
- Review browser console for error messages
- Verify all file paths are correct

## 📄 License

© 2025 Thais Terra Cake Shop. All rights reserved.

---

**Built with ❤️ using HTML5, CSS3, JavaScript, and Bootstrap 5.3**

*Last Updated: November 2025*
