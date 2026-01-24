// ===================================
// MENU MOBILE
// ===================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Fechar menu ao clicar em um link
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
}

// ===================================
// SCROLL SUAVE PARA ÂNCORAS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Não prevenir default para links sem hash ou apenas #
        if (href === '#' || href === '') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// ANIMAÇÃO DE SCROLL PARA ELEMENTOS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar cards e seções
const animatedElements = document.querySelectorAll('.card, .insight-box, .disclosure-box, .cta-box');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// TRACKING DE CLIQUES NO CTA
// ===================================
const mainCta = document.getElementById('mainCta');

if (mainCta) {
    mainCta.addEventListener('click', (e) => {
        // Google Analytics Event Tracking (se configurado)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                'event_category': 'CTA',
                'event_label': 'Main CTA - Acessar Curso',
                'value': 1
            });
        }

        // Google Ads Conversion Tracking (se configurado)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
                'send_to': 'AW-XXXXXXXXX/XXXXXXXXX', // Substituir pelo ID da conversão real
                'event_callback': function() {
                    console.log('Conversão registrada');
                }
            });
        }

        // Console log para debug
        console.log('CTA clicado - Redirecionando para Hotmart');
    });
}

// ===================================
// HEADER TRANSPARENTE/SÓLIDO NO SCROLL
// ===================================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    }

    lastScroll = currentScroll;
});

// ===================================
// PREVENÇÃO DE BOUNCE - SCROLL TRACKING
// ===================================
let scrollDepth = 0;
let maxScroll = 0;

window.addEventListener('scroll', () => {
    scrollDepth = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = (scrollDepth / (documentHeight - windowHeight)) * 100;

    if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;

        // Tracking de profundidade de scroll
        if (typeof gtag !== 'undefined') {
            if (maxScroll >= 25 && maxScroll < 50) {
                gtag('event', 'scroll_depth', {
                    'event_category': 'Engagement',
                    'event_label': '25% da página',
                    'value': 25
                });
            } else if (maxScroll >= 50 && maxScroll < 75) {
                gtag('event', 'scroll_depth', {
                    'event_category': 'Engagement',
                    'event_label': '50% da página',
                    'value': 50
                });
            } else if (maxScroll >= 75 && maxScroll < 90) {
                gtag('event', 'scroll_depth', {
                    'event_category': 'Engagement',
                    'event_label': '75% da página',
                    'value': 75
                });
            } else if (maxScroll >= 90) {
                gtag('event', 'scroll_depth', {
                    'event_category': 'Engagement',
                    'event_label': '90% da página',
                    'value': 90
                });
            }
        }
    }
});

// ===================================
// TEMPO NA PÁGINA
// ===================================
let startTime = Date.now();

window.addEventListener('beforeunload', () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000); // em segundos

    if (typeof gtag !== 'undefined') {
        gtag('event', 'time_on_page', {
            'event_category': 'Engagement',
            'event_label': 'Tempo na página',
            'value': timeSpent
        });
    }

    console.log(`Tempo na página: ${timeSpent} segundos`);
});

// ===================================
// BOTÃO VOLTAR AO TOPO (OPCIONAL)
// ===================================
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease, transform 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        font-size: 20px;
    `;

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
            button.style.pointerEvents = 'auto';
        } else {
            button.style.opacity = '0';
            button.style.pointerEvents = 'none';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
}

// Criar botão ao carregar a página
createBackToTopButton();

// ===================================
// DETECÇÃO DE SAÍDA (EXIT INTENT)
// ===================================
let exitIntentShown = false;

document.addEventListener('mouseleave', (e) => {
    // Detectar quando o mouse sai pela parte superior da página
    if (e.clientY <= 0 && !exitIntentShown) {
        exitIntentShown = true;
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'exit_intent', {
                'event_category': 'Engagement',
                'event_label': 'Usuário tentou sair',
                'value': 1
            });
        }

        console.log('Exit intent detectado');
        
        // Aqui você poderia mostrar um modal ou popup
        // Por exemplo: alert('Espere! Não perca essa oportunidade!');
    }
});

// ===================================
// LOADING COMPLETO
// ===================================
window.addEventListener('load', () => {
    console.log('✅ Site carregado completamente');
    console.log('📊 Tracking configurado e pronto');
    
    // Registrar pageview
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            'page_title': document.title,
            'page_location': window.location.href,
            'page_path': window.location.pathname
        });
    }
});

// ===================================
// PROTEÇÃO BÁSICA CONTRA BOTS
// ===================================
// Verificar se é um visitante real
const isRealUser = () => {
    return navigator.userAgent.indexOf('bot') === -1 && 
           navigator.userAgent.indexOf('crawl') === -1 &&
           navigator.userAgent.indexOf('spider') === -1;
};

if (isRealUser()) {
    console.log('👤 Visitante real detectado');
} else {
    console.log('🤖 Bot detectado');
}

// ===================================
// CONSOLE LOG INFORMATIVO
// ===================================
console.log('%c🚀 Site Destravador de Sonhos', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%c📧 Dúvidas? ronaldoten07@gmail.com', 'color: #94a3b8; font-size: 12px;');
console.log('%c⚖️ Este é um site de afiliado. Transparência total!', 'color: #10b981; font-size: 12px;');