// Simple contact form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page refresh
    
    // Get form values
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let messageDiv = document.getElementById('formMessage');
    
    // Simple validation
    if (name === '') {
        messageDiv.innerHTML = '<div class="alert alert-danger">Please enter your name.</div>';
        return;
    }
    
    if (email === '') {
        messageDiv.innerHTML = '<div class="alert alert-danger">Please enter your email.</div>';
        return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        messageDiv.innerHTML = '<div class="alert alert-danger">Please enter a valid email address.</div>';
        return;
    }
    
    if (message === '') {
        messageDiv.innerHTML = '<div class="alert alert-danger">Please enter your message.</div>';
        return;
    }
    
    // Success message (simulated - no actual email sending)
    messageDiv.innerHTML = '<div class="alert alert-success">Thanks ' + name + '! Your message has been received. (Demo - no email sent)</div>';
    
    // Clear form
    document.getElementById('contactForm').reset();
    
    // Log to console for debugging
    console.log('Form submitted by:', name, 'Email:', email);
});