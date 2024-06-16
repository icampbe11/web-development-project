// JavaScript code for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    // Simulate form submission
    document.getElementById('formFeedback').style.display = 'block';
    document.getElementById('contactForm').reset();
});
