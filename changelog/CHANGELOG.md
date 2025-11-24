# Changelog

All notable changes to the Thais Terra Cake Shop website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-24

### Added

#### Website Features
- Initial release of Thais Terra Cake Shop landing page
- Responsive single-page website with mobile-first design
- Fixed navigation bar with smooth scrolling functionality
- Hero section with auto-playing video carousel (3 videos)
- About section with chef profile and business description
- Menu section with 6 category cards (Wedding Cakes, Birthday Cakes, etc.)
- Professional footer with copyright information

#### Technical Implementation
- Semantic HTML5 structure with proper accessibility attributes
- Bootstrap 5.3.2 framework integration via CDN
- Custom CSS with CSS custom properties for theming
- Mobile-first responsive design (320px - 1920px+)
- JavaScript modules for:
  - Video carousel with automatic looping
  - Smooth scroll navigation
  - Scroll-based animations (AOS-like)
  - Navigation scroll effects
  - Accessibility enhancements

#### Docker & Deployment
- Dockerfile with nginx:alpine base image
- Docker Compose configuration for easy deployment
- Custom nginx configuration with:
  - Gzip compression
  - Security headers
  - Browser caching
  - Static asset optimization
- Health check implementation
- Port mapping (8080:80)

#### Documentation
- Comprehensive README.md with:
  - Quick start guide (3 deployment options)
  - File structure documentation
  - Development instructions
  - Docker deployment guide
  - Content management guide
  - Troubleshooting section
  - Browser compatibility information
  - Performance optimization tips
  - Accessibility compliance notes
- Git ignore configuration
- Project requirements documentation (claudedocs/prompt-template.md)

#### Code Quality
- Clean, well-commented code throughout
- Organized file structure
- CSS organized by component/section
- JavaScript with class-based architecture
- Proper error handling and fallbacks

### Fixed

#### Docker Container Issues
- **Permission errors**: Fixed 403 Forbidden errors in Docker container
  - Updated file permissions to 755 for directories
  - Updated file permissions to 644 for web files
  - Added documentation about file permissions in README
  - Added troubleshooting section for permission issues

#### Documentation Updates
- Removed all references to development tools from code
- Updated Docker commands in README for better clarity
- Added file permissions section to Docker deployment guide
- Enhanced inline comments in docker-compose.yml

### Changed
- Updated docker-compose.yml with comprehensive inline comments
- Enhanced README.md with Docker troubleshooting information
- Improved JavaScript debug API (removed unnecessary metadata)

### Security
- Security headers configured in nginx (X-Frame-Options, X-Content-Type-Options, etc.)
- Read-only volume mounts in Docker Compose
- Proper file permissions for web server security
- HTTPS-ready configuration

## [Unreleased]

### Planned Features
- Contact form integration
- Image gallery for cake portfolio
- Testimonials section
- Social media feed integration
- Multi-language support (Portuguese/English)
- Online ordering system integration
- Content Management System (CMS)

---

## Version History

- **1.0.0** (2025-11-24) - Initial release with full feature set
  - Complete responsive website
  - Docker deployment
  - Comprehensive documentation
  - Fixed permission issues

---

## Development Guidelines

### Version Numbering
- **MAJOR** version for incompatible changes
- **MINOR** version for new features (backwards-compatible)
- **PATCH** version for bug fixes (backwards-compatible)

### Changelog Entry Types
- **Added** - New features
- **Changed** - Changes to existing functionality
- **Deprecated** - Soon-to-be removed features
- **Removed** - Removed features
- **Fixed** - Bug fixes
- **Security** - Security vulnerability fixes

### Making Changes
1. Document all changes in this file under `[Unreleased]`
2. Move to versioned section when releasing
3. Update version in package files
4. Tag release in git
