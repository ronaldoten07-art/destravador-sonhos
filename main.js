// ================================
// DESTRAVADOR DE SONHOS - JavaScript
// Landing Page Afiliado
// ================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
    }
    
    // Fade in elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    const fadeElements = document.querySelectorAll('.problem-item, .affiliate-notice, .about-box');
    fadeElements.forEach(el => observer.observe(el));
    
    // Track CTA clicks (for analytics)
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Google Analytics event (if configured)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'CTA',
                    'event_label': 'Acessar Curso Hotmart',
                    'value': 1
                });
            }
            
            // Console log for testing
            console.log('CTA clicked - redirecting to affiliate link');
        });
    });
    
    // Track page scroll depth
    let scrollDepth = 0;
    let maxScroll = 0;
    
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        scrollDepth = ((scrollTop + windowHeight) / documentHeight) * 100;
        
        // Track maximum scroll depth
        if (scrollDepth > maxScroll) {
            maxScroll = Math.round(scrollDepth);
            
            // Send to analytics at 25%, 50%, 75%, 100%
            if (typeof gtag !== 'undefined') {
                if (maxScroll === 25 || maxScroll === 50 || maxScroll === 75 || maxScroll === 100) {
                    gtag('event', 'scroll_depth', {
                        'event_category': 'Engagement',
                        'event_label': maxScroll + '%',
                        'value': maxScroll
                    });
                }
            }
        }
    });
    
    // Track time on page
    let timeOnPage = 0;
    const timeInterval = setInterval(function() {
        timeOnPage += 10;
        
        // Log every 30 seconds
        if (timeOnPage % 30 === 0 && typeof gtag !== 'undefined') {
            gtag('event', 'time_on_page', {
                'event_category': 'Engagement',
                'event_label': timeOnPage + ' seconds',
                'value': timeOnPage
            });
        }
    }, 10000); // Check every 10 seconds
    
    // Clear interval when leaving page
    window.addEventListener('beforeunload', function() {
        clearInterval(timeInterval);
    });
    
    // Exit intent detection (desktop only)
    if (!isMobile()) {
        document.addEventListener('mouseout', function(e) {
            if (!e.toElement && !e.relatedTarget) {
                // Mouse left the document
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'exit_intent', {
                        'event_category': 'Engagement',
                        'event_label': 'Mouse left viewport',
                        'value': 1
                    });
                }
                console.log('Exit intent detected');
            }
        });
    }
    
    // Helper function to detect mobile
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    // Log page load
    console.log('Destravador de Sonhos - Landing Page Loaded');
    console.log('Affiliate: Ronaldo da Cunha Silva');
    console.log('Tracking initialized');
    
});
