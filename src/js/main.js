/**
 * Thais Terra Cake Shop - Main JavaScript
 * Handles video carousel, smooth scrolling, and navigation effects
 */

(function() {
    'use strict';

    // ========================================
    // Video Carousel Management
    // ========================================
    class VideoCarousel {
        constructor() {
            this.videos = document.querySelectorAll('.hero-video');
            this.currentIndex = 0;
            this.isTransitioning = false;

            this.init();
        }

        init() {
            if (this.videos.length === 0) {
                console.warn('No videos found for carousel');
                return;
            }

            // Start playing the first video
            this.playVideo(0);

            // Set up video ended event listeners
            this.videos.forEach((video, index) => {
                video.addEventListener('ended', () => this.onVideoEnded(index));

                // Handle video load errors
                video.addEventListener('error', (e) => {
                    console.error(`Error loading video ${index}:`, e);
                    // Show fallback or skip to next video
                    this.nextVideo();
                });
            });
        }

        playVideo(index) {
            if (this.isTransitioning || index < 0 || index >= this.videos.length) {
                return;
            }

            this.isTransitioning = true;
            const currentVideo = this.videos[this.currentIndex];
            const nextVideo = this.videos[index];

            // Fade out current video
            currentVideo.classList.remove('active');

            // Pause current video after fade out
            setTimeout(() => {
                currentVideo.pause();
                currentVideo.currentTime = 0;
            }, 500);

            // Fade in and play next video
            setTimeout(() => {
                nextVideo.classList.add('active');

                // Play with error handling
                const playPromise = nextVideo.play();

                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            this.currentIndex = index;
                            this.isTransitioning = false;
                        })
                        .catch(error => {
                            console.error('Error playing video:', error);
                            this.isTransitioning = false;
                            // Try next video if current fails
                            this.nextVideo();
                        });
                }
            }, 500);
        }

        onVideoEnded(index) {
            // When a video ends, play the next one
            if (index === this.currentIndex) {
                this.nextVideo();
            }
        }

        nextVideo() {
            const nextIndex = (this.currentIndex + 1) % this.videos.length;
            this.playVideo(nextIndex);
        }

        previousVideo() {
            const prevIndex = (this.currentIndex - 1 + this.videos.length) % this.videos.length;
            this.playVideo(prevIndex);
        }
    }

    // ========================================
    // Navigation Scroll Effects
    // ========================================
    class NavigationEffects {
        constructor() {
            this.navbar = document.getElementById('mainNav');
            this.navLinks = document.querySelectorAll('.nav-link');
            this.scrollThreshold = 50;

            this.init();
        }

        init() {
            if (!this.navbar) {
                console.warn('Navigation element not found');
                return;
            }

            // Handle scroll events
            window.addEventListener('scroll', () => this.handleScroll());

            // Handle smooth scrolling for nav links
            this.navLinks.forEach(link => {
                link.addEventListener('click', (e) => this.handleNavClick(e));
            });

            // Initial check
            this.handleScroll();
        }

        handleScroll() {
            const scrollPosition = window.scrollY;

            // Add/remove scrolled class based on scroll position
            if (scrollPosition > this.scrollThreshold) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }

            // Update active nav link based on section
            this.updateActiveNavLink();
        }

        handleNavClick(e) {
            const href = e.currentTarget.getAttribute('href');

            // Only handle internal anchor links
            if (!href || !href.startsWith('#')) {
                return;
            }

            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Calculate offset for fixed navbar
                const navbarHeight = this.navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            }
        }

        updateActiveNavLink() {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 100; // Offset for better UX

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    // Remove active class from all links
                    this.navLinks.forEach(link => {
                        link.classList.remove('active');
                    });

                    // Add active class to current section link
                    const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }
    }

    // ========================================
    // Simple AOS (Animate On Scroll)
    // ========================================
    class SimpleAOS {
        constructor() {
            this.elements = document.querySelectorAll('[data-aos]');
            this.init();
        }

        init() {
            if (this.elements.length === 0) {
                return;
            }

            // Initial check
            this.checkElements();

            // Check on scroll
            window.addEventListener('scroll', () => this.checkElements());

            // Check on resize
            window.addEventListener('resize', () => this.checkElements());
        }

        checkElements() {
            this.elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;

                // Element is in viewport
                if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
                    element.classList.add('aos-animate');
                }
            });
        }
    }

    // ========================================
    // Utility Functions
    // ========================================
    function updateCurrentYear() {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    function handleImageErrors() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.hasAttribute('onerror')) {
                img.addEventListener('error', function() {
                    this.src = 'https://via.placeholder.com/400x300/8B7355/FFFFFF?text=Image+Not+Found';
                });
            }
        });
    }

    // ========================================
    // Performance Optimization
    // ========================================
    function lazyLoadImages() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            observer.unobserve(img);
                        }
                    }
                });
            });

            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }

    // ========================================
    // Accessibility Enhancements
    // ========================================
    function enhanceAccessibility() {
        // Add skip to content link
        const skipLink = document.createElement('a');
        skipLink.href = '#sobre';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Pular para o conteúdo principal';
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Ensure all interactive elements are keyboard accessible
        const interactiveElements = document.querySelectorAll('a, button, [tabindex]');
        interactiveElements.forEach(element => {
            if (!element.hasAttribute('tabindex') && element.tabIndex === -1) {
                element.setAttribute('tabindex', '0');
            }
        });
    }

    // ========================================
    // Initialize Everything
    // ========================================
    function init() {
        console.log('Initializing Thais Terra Cake Shop website...');

        // Update current year in footer
        updateCurrentYear();

        // Initialize video carousel
        const videoCarousel = new VideoCarousel();

        // Initialize navigation effects
        const navigationEffects = new NavigationEffects();

        // Initialize simple AOS animations
        const simpleAOS = new SimpleAOS();

        // Handle image errors
        handleImageErrors();

        // Lazy load images
        lazyLoadImages();

        // Enhance accessibility
        enhanceAccessibility();

        console.log('Website initialized successfully!');
    }

    // ========================================
    // Wait for DOM to be ready
    // ========================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ========================================
    // Expose API for debugging (development only)
    // ========================================
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        window.ThaisTerraApp = {
            version: '1.0.0',
            author: 'Claude Code',
            initialized: true
        };
    }

})();
