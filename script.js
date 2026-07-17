document.querySelector('.cta-button').addEventListener('click', () => {
    window.location.href = '#projects';
});//project button leads to projects section when clicked

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

const fields = {
    name: {
        input: form.elements['name'],
        errorEl: document.getElementById('name-error'),
        validate: (value) => {
            if (!value.trim()) return 'Please enter your name.';
            if (value.trim().length < 2) return 'Name must be at least 2 characters.';
            return '';
        }
    },
    email: {
        input: form.elements['email'],
        errorEl: document.getElementById('email-error'),
        validate: (value) => {
            if (!value.trim()) return 'Please enter your email.';
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value.trim())) return 'Please enter a valid email address.';
            return '';
        }
    },
    message: {
        input: form.elements['message'],
        errorEl: document.getElementById('message-error'),
        validate: (value) => {
            if (!value.trim()) return 'Please enter a message.';
            if (value.trim().length < 10) return 'Message must be at least 10 characters.';
            return '';
        }
    }
};

// Validate a single field and show/clear its error
function validateField(field) {
    const errorMsg = field.validate(field.input.value);
    field.errorEl.textContent = errorMsg;
    field.input.classList.toggle('input-error', !!errorMsg);
    return !errorMsg;
}

// Re-validate on the fly as the user fixes fields
Object.values(fields).forEach(field => {
    field.input.addEventListener('input', () => validateField(field));
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Run all validations, collect overall pass/fail
    const results = Object.values(fields).map(validateField);
    const allValid = results.every(Boolean);

    if (!allValid) {
        status.textContent = 'Please fix the errors above.';
        status.style.color = '#ff6b6b';
        return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    status.textContent = '';

    const data = new FormData(form);

    try {
        const response = await fetch('https://formspree.io/f/xeeyawye', {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            status.textContent = 'Thanks! Your message has been sent.';
            status.style.color = '#8a2be2';
            form.reset();
        } else {
            status.textContent = 'Oops, something went wrong. Please try again.';
            status.style.color = '#ff6b6b';
        }
    } catch (error) {
        status.textContent = 'Network error. Please try again later.';
        status.style.color = '#ff6b6b';
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    }
});//contact form

const buttons = document.querySelectorAll('.visit-button-null');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('This feature is not available right now!');
    });
  });