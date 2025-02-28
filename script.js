document.querySelector('.cta-button').addEventListener('click', () => {
    window.location.href = '#projects';
});//project button leads to projects section when clicked

const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // alert('Message sent! I will get back to you soon.'); 
    alert('Message not sent! This feature is being worked on :( ');

});//contact form

