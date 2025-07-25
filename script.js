document.addEventListener('DOMContentLoaded', function() {
    const steps = [
        {
            title: "Selbstreflexion",
            description: "Analyse deiner aktuellen Ernährungsgewohnheiten und emotionalen Verbindungen zum Essen."
        },
        {
            title: "Emotionale Essmuster",
            description: "Identifikation von Mustern: Wann und warum isst du emotional? Was versuchst du zu kompensieren?"
        },
        {
            title: "Hunger vs. Appetit",
            description: "Lerne den Unterschied zwischen physischem Hunger und emotionalem Essen kennen."
        },
        {
            title: "Achtsamkeitstraining",
            description: "Praktische Übungen zur Steigerung der Achtsamkeit beim Essen und im Alltag."
        },
        {
            title: "Stressmanagement",
            description: "Alternative Strategien zum Umgang mit Stress und Emotionen ohne Essen."
        },
        {
            title: "Nährstoffbalance",
            description: "Grundlagen einer ausgewogenen Ernährung für Körper und Geist."
        },
        {
            title: "Mahlzeitenplanung",
            description: "Wie du Mahlzeiten vorbereitest, die sowohl nährstoffreich als auch befriedigend sind."
        },
        {
            title: "Selbstfürsorge",
            description: "Die Bedeutung von Selbstfürsorge und wie sie dein Essverhalten beeinflusst."
        },
        {
            title: "Schlaf & Erholung",
            description: "Wie Schlafqualität und Erholung dein Hungergefühl und deine Entscheidungen beeinflussen."
        },
        {
            title: "Bewegungsfreude",
            description: "Finde Bewegungsformen, die dir Freude bereiten und dein Wohlbefinden steigern."
        },
        {
            title: "Soziale Einflüsse",
            description: "Wie dein soziales Umfeld dein Essverhalten beeinflusst und wie du positiv damit umgehst."
        },
        {
            title: "Nachhaltige Routinen",
            description: "Entwicklung von langfristigen, gesunden Gewohnheiten für ein ausgewogenes Leben."
        }
    ];

    const stepsGrid = document.querySelector('.steps-grid');
    steps.forEach((step, index) => {
        const stepCard = document.createElement('div');
        stepCard.className = 'step-card';
        stepCard.innerHTML = `
            <div class="step-number">${index + 1}</div>
            <h3>${step.title}</h3>
            <p>${step.description}</p>
        `;
        stepsGrid.appendChild(stepCard);
    });

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .step-card').forEach(section => {
        observer.observe(section);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    const impressumLink = document.querySelector('.impressum-link');
    const impressumModal = document.querySelector('.impressum-modal');
    const closeImpressum = document.querySelector('.close-impressum');

    if (impressumLink && impressumModal && closeImpressum) {
        impressumLink.addEventListener('click', function(e) {
            e.preventDefault();
            impressumModal.style.display = 'block';
        });

        closeImpressum.addEventListener('click', function() {
            impressumModal.style.display = 'none';
        });

        window.addEventListener('click', function(e) {
            if (e.target === impressumModal) {
                impressumModal.style.display = 'none';
            }
        });
    }

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            alert('Vielen Dank für deine Nachricht! Ich werde mich bald bei dir melden.');
            this.reset();
        });
    }
});

let lastScroll = 0;
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('hidden');
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > headerHeight) {
        header.classList.add('hidden');

    } else if (currentScroll < lastScroll) {
        header.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
});


document.querySelectorAll('.section, .step-card, .review-card').forEach(section => {
    observer.observe(section);

});


document.addEventListener('DOMContentLoaded', function() {
    const path = document.querySelector('.path');
    if (path) {
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    path.style.animation = 'drawPath 2s ease-in-out forwards';
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(document.querySelector('.journey'));
    }
});


