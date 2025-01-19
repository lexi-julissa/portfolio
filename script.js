document.querySelector('.cta-button').addEventListener('click', () => {
    window.location.href = '#projects';
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Message sent! I will get back to you soon.');
});
