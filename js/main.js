// Main JavaScript file for Impact Business Challengers website

document.addEventListener('DOMContentLoaded', function() {
    console.log('Impact Business Challengers website loaded successfully!');
    
    // Initialize website
    initWebsite();
    
    // Handle contact form subject pre-selection
    handleContactFormPreselect();
    
    // Handle CTA button clicks on contact page
    handleCTAButtons();
    
    // Handle form submission
    handleFormSubmission();
});

function initWebsite() {
    // Mobile menu toggle (for future mobile menu implementation)
    // Add any other initialization code here
}

function handleContactFormPreselect() {
    // Check if we're on the contact page
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const scan = urlParams.get('scan');
    const type = urlParams.get('type');
    
    const onderwerpSelect = document.getElementById('onderwerp');
    if (!onderwerpSelect) return;
    
    // Pre-select based on URL parameters
    if (scan === '180') {
        onderwerpSelect.value = '180° Scan';
    } else if (scan === '360') {
        onderwerpSelect.value = '360° Organisatiescan';
    } else if (scan === '360-challenge') {
        onderwerpSelect.value = '360° Business Challenge Scan';
    } else if (type === 'consultants') {
        onderwerpSelect.value = 'Beschikbare consultants';
    }
}

function handleCTAButtons() {
    // Handle CTA button clicks to pre-fill subject
    const ctaButtons = document.querySelectorAll('.cta-button[data-subject]');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const subject = this.getAttribute('data-subject');
            const onderwerpSelect = document.getElementById('onderwerp');
            
            if (onderwerpSelect && subject) {
                onderwerpSelect.value = subject;
            }
        });
    });
}

function handleFormSubmission() {
    // Handle form submission (placeholder - would need backend integration)
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted with data:', data);
        
        // Show success message (placeholder)
        alert('Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.');
        
        // Reset form
        this.reset();
        
        // In production, this would send data to a backend API
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });
    });
}

