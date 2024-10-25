// Highlight the active navigation link
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
    
    // Form validation for contact form
    const form = document.getElementById('contactForm');
    if (form) {
        const formMessage = document.getElementById('formMessage');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            
            if (name === '' || email === '') {
                formMessage.textContent = "Please fill out all fields!";
                formMessage.style.color = "red";
            } else {
                formMessage.textContent = "Form submitted successfully!";
                formMessage.style.color = "green";
            }
        });
    }
});
